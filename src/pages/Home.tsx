import React from "react";
import { useNavigate } from "react-router-dom";
import Hero from "../components/Hero";
import YoutubeEmbed from "../components/YoutubeEmbed";
import Button from "../components/Button";
import News from "../components/News";
import BlackCattle from "../assets/section/Black_cattle.png";
import BlackCar from "../assets/section/Black_car.png";
import CattleMethane from "../assets/section/catte_methane_process.png";
import GreenLogo from "../assets/section/green-logo.svg";
import Capsule from "../assets/section/Methane_capsule.png";
import Partners from "../components/Partners";
import Form from "../components/Form";

function Home() {
  const navigate = useNavigate();
  return (
    <main>
      <Hero />
      {/* Section 1.1 - Did You Know? */}
      <section className="bg-offWhite py-16">
        <div className="flex flex-col justify-between items-center text-center">
          <div>
            <h1 className="text-6xl text-darkGreen font-black uppercase mb-5">
              Did You Know?
            </h1>
            <h2 className="text-3xl text-lightGreen font-semibold">
              Cows emit more Greenhouse than cars
            </h2>
          </div>
          <div className="my-6">
            <YoutubeEmbed embedId="AxRxdq-JaRE" />
          </div>
          <div className="w-full flex flex-col justify-around items-center">
            <div className="h-[80%] flex justify-center gap-16 items-center">
              <div className="w-48">
                <img
                  className="object-cover"
                  src={BlackCattle}
                  alt="Black Cattle"
                />
              </div>
              <div className="text-darkGray text-6xl font-black">&gt;</div>
              <div className="w-48">
                <img className="object-cover" src={BlackCar} alt="Black Car" />
              </div>
            </div>
            <p className="h-[40%] content-center text-xs font-semibold text-darkGray">
              According to a U.N. report, 22 billion livestock worldwide
              generate 18% of <br /> the world's greenhouse gases, higher than
              13% of transportation.
            </p>
          </div>
        </div>
      </section>

      {/* Section 1.1.2 - Methane Gas Emissions */}
      <section>
        <div className="w-full bg-grass bg-cover bg-no-repeat flex items-center p-20 text-white">
          <div className="w-[45%] flex flex-col items-center gap-2">
            <div className="w-[350px] h-[200px]">
              <img
                className="w-full h-full object-contain rounded-md"
                src={CattleMethane}
                alt="Cattle Methane Process"
              />
            </div>
            <p className="w-[350px] text-xs text-center">
              Image Resources : MDPI/ Management of Enteric Methane Emissions in
              Ruminants Using Feed Additives: A Review
            </p>
          </div>
          <div className="w-[50%] flex flex-col gap-8">
            <p>
              Livestock are a major contributor to greenhouse gas emissions,
              responsible for a staggering 18% of the total. Methane, a
              byproduct of their digestive process, is over 80 times more potent
              than carbon dioxide in warming the planet over a 20-year period,
              according to the UN Economic Commission.
            </p>
            {/* <br /> */}
            <p>
              With approximately 1.5 billion cows globally, each capable of
              emitting up to 500 liters (132 gallons) of methane daily, the
              scale of the issue is undeniable. Not to mention, livestock urine
              adds to the problem by releasing nitrous oxide, another potent
              climate pollutant. Join us in finding sustainable solutions to
              combat these pressing environmental challenges.
            </p>
          </div>
        </div>
      </section>

      {/* Section 1.2 - About */}
      <section className="w-full h-screen text-center">
        <div className="h-2/3 flex flex-col justify-center items-center">
          <div className="flex flex-col gap-5 items-center">
            <div className="w-[30rem]">
              <img
                className="object-cover"
                src={GreenLogo}
                alt="Green Cattle MeTech's Logo"
              />
            </div>
            <div className="p-2">
              <p className="text-darkGray text-3xl font-bold">
                We are on a mission to reduce <br /> Methane emissions from
                world’s cattle
                <br /> (1.5 billion heads) by 10% by 2030.
              </p>
            </div>
            <Button
              onClick={() => navigate("/about")}
              bg="bg-darkGreen"
              hoverTextColor="hover:text-lightGreen"
            >
              Find out more
            </Button>
          </div>
        </div>
      </section>

      {/* Section 1.3 - Service */}
      <section className="bg-darkGreen w-full h-screen text-center">
        <div className="h-[80%] flex flex-col justify-center items-center">
          <div className="flex flex-col gap-5 items-center">
            <div>
              <h1 className="text-6xl text-lightGreen font-black uppercase">
                Methane Capsule
              </h1>
            </div>
            <div className="w-72">
              <img
                className="object-cover"
                src={Capsule}
                alt="MeTech's Methane Capsule"
              />
            </div>
            <div>
              <p className="text-white text-xl">
                MeTech's Methane Capsule delivers precise, real-time <br />{" "}
                measurement of methane levels and emissions <br /> in the rumen
                gas layer. Information collected through <br /> IoT
                communication (LORA, CAT M1) is transmitted <br /> to a
                real-time cloud server.
              </p>
            </div>
            <Button
              onClick={() => navigate("/service")}
              bg="bg-lightGreen"
              hoverTextColor="hover:text-darkGreen"
            >
              Explore Our Service
            </Button>
          </div>
        </div>
      </section>

      {/* Section 1.4 - Releases */}
      <section className="w-full h-screen bg-offWhite p-20">
        <div className="w-full h-full flex flex-col justify-between">
          <div className="flex h-[90%] justify-between">
            <div className="border-lightGreen border-r-2 w-[20%] h-full flex justify-center items-center">
              <h1 className="font-bold text-4xl text-darkGreen uppercase">
                Press Releases
              </h1>
            </div>

            <div className="w-[80%] h-full flex flex-col justify-between gap-5 p-5">
              <div className="text-darkGray font-semibold">Latest News</div>
              <div className="h-[90%] grid grid-cols-2 gap-4">
                <News isReleasePage={false} width="w-3/4" textSize="text-xl" />
              </div>
              <Button
                onClick={() => navigate("/releases")}
                bg="bg-darkGreen"
                hoverTextColor="hover:text-lightGreen"
                alignItem="self-end"
                flex="flex"
                flexCol="flex-col"
              >
                All Releases
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 1.5 - Partners */}
      <section className="w-full h-screen bg-whiteGray p-20">
        <div className="h-full flex flex-col justify-between items-center">
          <div className="justify-between">
            <h1 className="text-5xl text-darkGreen font-semibold uppercase">
              Our Partners & Research
            </h1>
          </div>
          <div className="h-[80%] flex flex-col justify-around items-center">
            <Partners />
          </div>
        </div>
      </section>

      {/* Section 1.6 - Contact */}
      <section className="w-full h-screen bg-black text-white p-20">
        <div className="w-full h-full flex flex-col justify-between">
          <div>
            <h1 className="text-5xl font-semibold uppercase mb-4">
              Contact Us
            </h1>
          </div>
          <div className="h-full flex justify-between">
            {/* Company Location */}
            <div className="w-[45%] flex justify-center items-center">
              <iframe
                className="rounded-xl grayscale saturate-50"
                title="MeTechHoldings Inc., Co."
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3164.8046669496307!2d127.05624447538376!3d37.51252492722422!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca50070ffe7d9%3A0xa21b40cc1d2d74c7!2sMeTech%20Holdings!5e0!3m2!1spt-BR!2skr!4v1713418705815!5m2!1spt-BR!2skr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
              >
                MeTech
              </iframe>
            </div>
            {/* Contact Form */}
            <Form />
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
