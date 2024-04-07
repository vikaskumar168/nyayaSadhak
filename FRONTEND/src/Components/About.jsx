import React from "react";

const About = () => {
  return (
    <div class="my-12 md:my-16 1g:my-32">
      <div class="wrapper border-2 border-alabaster text-center py-10 md:py-14 1g:py -28">
        <h2 class="text-5xl font-bold">About NyayaSadhak</h2>

        <div class="space-y-5 mt-8 md:flex md: space-y-0 md:mt-14 1g:px-7">
          <div class="px-6 max-w-sm mx-auto md:max-w-none md:w-1/3 md:px-8 lg:px-12">
            <img
              width="150"
              height="150"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNIM6-bBtKoNN7ooCeRsYB1xb_DRPnvHK2fuLjWYUfxjAOgSvZ4V3uflrLnN62S12unfQ&usqp=CAU"
              class="max-w-thumb mx-auto"
              alt
              decoding="async"
            />

            <p class="text-lg text-battleship_grey font-bold mb-5">
              Legal Explainers & Guides
            </p>

            <div>
              <p>
                "We provide Simple, Actionable, Reliable, Accessible Legal
                (SARAL) information so you can solve your legal problems, be
                aware of your rights under the law, and save time, money &
                energy."
              </p>
            </div>
          </div>

          <div class="px-6 max-w-sm mx-auto md:max-w-none md:w-1/3 md:px-8 lg:px-12">
            <img
              width="230"
              height="190"
              src="https://assets.thehansindia.com/h-upload/2020/11/25/1014218-indian-languages.jpg"
              class="max-w-thumb mx-auto"
              alt
              decoding="async"
            />

            <p class="text-lg text-battleship_grey font-bold mb-5">
              Regional Language Content
            </p>

            <div>
              <p>
                "We give you access to non-English legal content that is created
                specifically context of regional laws in place where you live, so
                you can hold authorit accountable, and demand citizen centric
                laws."
              </p>
            </div>
          </div>
          <div class="px-6 max-w-sm mx-auto md:max-w-none md:w-1/3 md:px-8 1g:px-12">
            <img
              width="150"
              height="150"
              src="https://e7.pngegg.com/pngimages/204/94/png-clipart-professional-audiovisual-industry-computer-icons-video-sound-music-design-text-logo.png"
              class="max-w-thumb mx-auto"
              alt
              decoding="async"
            />
            <p class="text-lg text-battleship_grey font-bold mb-5">
              Audio Video Content
            </p>
            <div>
              <p>
                "We are making accessible, inclusive and solution-centered
                content in non-text formats so that actionable legal information
                reaches those in most need of access to justice mechanisms."
              </p>
            </div>
            -
          </div>
        </div>

        <div class="mt-6 md:mt-18 lg:mt-12">
          <a href="/bot" class="btn btn--big btn-white">
            {" "}
            Learn More{" "}
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
