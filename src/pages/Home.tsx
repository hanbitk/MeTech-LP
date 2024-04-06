import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Hero from "../components/Hero";
import YoutubeEmbed from "../components/YoutubeEmbed";
import Button from "../components/Button";
import BlackCattle from "../assets/section/Black_cattle.png";
import BlackCar from "../assets/section/Black_car.png";
import CattleMethane from "../assets/section/cattle_methane_process.png";
import GreenLogo from "../assets/section/green-logo.svg";
import Capsule from "../assets/section/Methane_capsule.png";
import News from "../components/News";

function Home() {
  const navigate = useNavigate();
  return (
    <main>
      <Hero />
      {/* Section 1.1 */}
      <section className="bg-offWhite flex flex-col justify-center items-center py-16">
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
            <YoutubeEmbed embedId="XjcQWgV35d0" />
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

      {/* Section 1.1.2 */}
      <section className="bg-grass bg-cover bg-no-repeat flex items-center p-20 text-white">
        <div className="w-[45%] flex flex-col items-center">
          <div className="w-[350px] h-[250px]">
            <img
              className="object-cover"
              src={CattleMethane}
              alt="Cattle Methane Process"
            />
          </div>
          <p className="w-[350px] text-xs text-center">
            Image Resources : MDPI/ Management of Enteric Methane Emissions in
            Ruminants Using Feed Additives: A Review
          </p>
        </div>
        <div className="w-[50%] flex flex-col items-center p-2">
          <p>
            Livestock are a major contributor to greenhouse gas emissions,
            responsible for a staggering 18% of the total. Methane, a byproduct
            of their digestive process, is over 80 times more potent than carbon
            dioxide in warming the planet over a 20-year period, according to
            the UN Economic Commission.
          </p>
          <br />
          <p>
            With approximately 1.5 billion cows globally, each capable of
            emitting up to 500 liters (132 gallons) of methane daily, the scale
            of the issue is undeniable. Not to mention, livestock urine adds to
            the problem by releasing nitrous oxide, another potent climate
            pollutant. Join us in finding sustainable solutions to combat these
            pressing environmental challenges.
          </p>
        </div>
      </section>

      {/* Section 1.2 */}
      <section className="w-full h-screen flex flex-col justify-center items-center text-center">
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

      {/* Section 1.3 */}
      <section className="bg-darkGreen w-full h-screen flex flex-col justify-center items-center text-center">
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

      {/* Section 1.4 */}
      <section className="w-full h-screen bg-offWhite flex flex-col justify-center items-center p-20">
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
                <News />
              </div>
              <Button
                onClick={() => navigate("/releases")}
                bg="bg-darkGreen"
                hoverTextColor="hover:text-lightGreen"
                alignItem="self-end"
              >
                All Releases
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
