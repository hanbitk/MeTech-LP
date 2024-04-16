import React from "react";
import Card from "../components/Card";
import CapsuleSpecs from "../components/CapsuleSpec";
import CapsuleSoftwareImg from "../components/CapsuleSoftwareImg";
import Capsule from "../assets/service/capsule_2.png";
import CapRawData from "../assets/service/methane_cap_rumen_chart.png";

function Service() {
  return (
    <main>
      {/* Service Header */}
      <div className="w-full h-[320px] bg-offWhite pt-32 p-20">
        <h1 className="text-6xl text-darkGreen font-extrabold mb-10">
          MeTech's Service
        </h1>
        <div className="w-[200px] h-[8px] bg-lightGreen rounded-sm"></div>
      </div>

      {/* Methan Capsule Service */}
      <section className="h-[620px] bg-darkGreen items-start p-20">
        <div className="w-full flex flex-col gap-16">
          <div>
            <h1 className="text-6xl text-white font-bold">Our Service</h1>
          </div>
          <div>
            <div className="flex justify-between">
              <Card
                title="Methane Capsule"
                description="Capsules are injected through cow mouth after sterilized"
                src="capsule"
                alt="Methane Capsule"
                textColor="text-white"
              />
              <div className="flex justify-center items-center text-6xl font-black text-lightGreen">
                &gt;
              </div>
              <Card
                title="Cattle"
                description="They stay in the stomach of cows and identify real-time methane concentrations and emissions"
                src="cattle"
                alt="White Cattle Silhouette"
                textColor="text-white"
              />
              <div className="flex justify-center items-center text-6xl font-black text-lightGreen">
                &gt;
              </div>
              <Card
                title="Cloud AI Server"
                description="Methane information collected through IoT communication (LoRA, CAT M1) is transmitter to a real-time cloud server"
                src="cloud"
                alt="White Cloud AI Server"
                textColor="text-white"
              />
            </div>
          </div>
          <div className="text-center text-xs text-white font-light">
            <p>*Patent (10-2022-0175340, 10-2024-0025781, 40-2024-0044338)</p>
          </div>
        </div>
      </section>

      {/* Methane Capsule HW & SW */}
      <section className="h-screen bg-ligthGray items-start p-20">
        <div className="h-full w-full flex flex-col gap-2">
          <div>
            <h1 className="text-6xl text-black font-bold">Methane Capsule</h1>
          </div>
          {/* Methane Capsule Hardware */}
          <div className="flex flex-col gap-2">
            <h2 className="font-semibold text-darkGray">Hardware</h2>
            <div className="flex">
              <div className="flex flex-col justify-center items-center">
                <img
                  className="w-[170px] h-[170px] object-contain"
                  src={Capsule}
                  alt="MeTech's Methane Capsule"
                />
              </div>
              <div className="flex justify-between items-center px-6 text-sm">
                <CapsuleSpecs />
              </div>
            </div>
          </div>
          {/* Methane Capsule Software */}
          <div className="flex flex-col gap-2">
            <h2 className="font-semibold text-darkGray">Software</h2>
            <div className="flex justify-between">
              <CapsuleSoftwareImg
                softwareImg="software_1"
                softwareAlt="Software Screen - Colors changing according to methane emission"
              />
              <CapsuleSoftwareImg
                softwareImg="software_2"
                softwareAlt="Software Screen - Methane Gas Emission Graphic 1"
              />
              <CapsuleSoftwareImg
                softwareImg="software_3"
                softwareAlt="Software Screen - Methane Gas Emission Graphic 2"
              />
            </div>
            <div className="w-2/3 h-full flex flex-col justify-center items-center self-center text-center text-xs text-darkGray pt-4">
              <p>
                Check the real-time RAW-DATA of cows methane information,
                activity amount, body temperature and graphs are provided.
                <br />
                Color changes in cows according to methane concentration
                (emission).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Methane Capsule RAW-DATA */}
      <section className="h-screen bg-offWhite p-20">
        <div className="w-full h-full flex flex-col justify-between items-center">
          <div className="flex flex-col justify-center items-center text-center">
            <h1 className="text-6xl text-darkGreen font-semibold mb-2">
              Methane Capsule RAW-DATA
            </h1>
            <p className="w-2/3 text-sm text-darkGray">
              It is the world's first methane measurement instrument capable of
              providing real-time, accurate data on methane concentration and
              emissions in the rumen gas layer.
            </p>
          </div>
          <div className="h-[75%]">
            <img
              className="w-full h-full object-contain"
              src={CapRawData}
              alt="Methane Capsule Rumen Chart"
            />
          </div>
        </div>
      </section>

      {/* Global Low-Carbon & Carbon Credits Platform */}
      <section className="h-[620px] bg-ligthGray items-start p-20">
        <div className="w-full flex flex-col gap-16">
          <div>
            <h1 className="text-6xl font-semibold mb-2">
              MeTech Service Platform
            </h1>
            <p className="text-darkGray text-sm">
              Global Low-Carbon / Carbon Credits Certified Platform
            </p>
          </div>
          <div>
            <div className="flex justify-between">
              <Card
                title="B2B,B2G Customer"
                description="Methane Capsule Supply and Sale  to B2B, B2G customer"
                src="b2b_customer"
                alt="MeTech B2B,B2G Customer Green Icon"
                textColor="text-black"
              />
              <div className="flex justify-center items-center text-4xl font-black text-black">
                &gt;
              </div>

              <Card
                title="B2B, B2G Farm"
                description="Managing and controlling Farm"
                src="b2b_farm"
                alt="MeTech B2B,B2G Farm Green Icon"
                textColor="text-black"
              />
              <div className="flex justify-center items-center text-4xl font-black text-black">
                &gt;
              </div>
              <Card
                title="Certification Platform
                "
                description="Issue block-chain certification through AI technology, according to methane concentration by farm and emissions
"
                src="green_cloud"
                alt="Green Cloud AI Server"
                textColor="text-black"
              />
              <div className="flex justify-center items-center text-4xl font-black text-black">
                &gt;
              </div>
              <Card
                title="Carbon Credits"
                description="Letter of low-carbon blockchain certification and
              carbon credits"
                src="certification"
                alt="Carbon Credits Certification"
                textColor="text-black"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Service;
