import torch
from langchain import HuggingFacePipeline
from langchain.chains import RetrievalQA
from transformers import AutoTokenizer, pipeline, AutoModelForSeq2SeqLM
from langchain.vectorstores import Chroma
from langchain.embeddings import HuggingFaceInstructEmbeddings
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import logging

import streamlit as st

DEVICE = "cuda:0" if torch.cuda.is_available() else "cpu"

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

checkpoint = "LaMini-T5-738M"
tokenizer = AutoTokenizer.from_pretrained(checkpoint)
base_model = AutoModelForSeq2SeqLM.from_pretrained(checkpoint, device_map='cuda', torch_dtype=torch.float32)
embeddings = HuggingFaceInstructEmbeddings(
    model_name="hkunlp/instructor-large", model_kwargs={"device": DEVICE}
)

db = Chroma(persist_directory="db", embedding_function=embeddings)

@st.cache_resource
def llm_pipeline():
    pipe = pipeline(
        'text2text-generation',
        model=base_model,
        tokenizer=tokenizer,
        max_new_tokens=1024,
        temperature=0,
        top_p=0.95,
        repetition_penalty=1.15
    )
    local_llm = HuggingFacePipeline(pipeline=pipe)
    return local_llm

@st.cache_resource
def qa_llm():
    llm = llm_pipeline()
    qa = RetrievalQA.from_chain_type(
        llm=llm,
        chain_type="stuff",
        retriever=db.as_retriever(search_kwargs={"k": 2}),
        return_source_documents=True,
    )
    return qa

def process_answer(instruction):
    response = ''
    instruction = instruction
    qa = qa_llm()
    generated_text = qa(instruction)
    answer = generated_text['result']
    return answer, generated_text

app = FastAPI()

origins = [
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
async def query_model(query: str):
    logger.info("Query received: %s", query)
    try:
        answer, metadata = process_answer(query)
        logger.info("Answer generated: %s", answer)
        return {"result": answer, "metadata": metadata}
    except Exception as e:
        logger.error("An error occurred: %s", e)
        return {"error": "An error occurred while processing the query"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
