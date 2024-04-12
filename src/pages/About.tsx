import React from "react";
import CEO from "../assets/about/CEO.png";
import { HISTORY_LIST } from "../utils/constants";

function About() {
  return (
    <main>
      {/* About Hero */}
      <div className="w-full h-[520px] bg-aboutHero bg-cover bg-no-repeat">
        <h1 className="text-4xl text-offWhite font-extrabold pt-32 pl-16">
          MeTech’s Leading the Charge in Livestock <br /> Sustainability with
          Methane Capsule
        </h1>
      </div>

      {/* About MeTech - Header */}
      <section className="h-[520px] bg-darkGreen items-start px-20">
        <div className="h-[70%] flex flex-col gap-16">
          <div className="h-[45%] flex flex-col justify-between">
            <div>
              <h1 className="text-6xl text-white font-black">
                Where sustainability <br /> meets innovation. 
              </h1>
            </div>
            <div className="w-[200px] h-[8px] bg-lightGreen rounded-sm"></div>
          </div>
          <div className="h-[30%] flex flex-col justify-between text-white text-xl">
            <p>
              With our innovative methane capsules, inserted directly into
              cattle, we're revolutionizing how methane emissions are monitored
              in real-time.
            </p>
            <p>
              Join us as we lead the charge in sustainable agriculture,
              empowering farmers with cutting-edge technology to make informed
              decisions and reduce environmental impact.
            </p>
          </div>
        </div>
      </section>

      {/* About Us */}
      <section className="h-[500px] bg-offWhite p-20">
        <div className="h-full flex flex-col gap-10">
          <h1 className="text-4xl text-black font-bold">About Us</h1>
          <div className="h-full flex flex-col justify-around text-darkGray">
            <p>
              Welcome to MeTech, where innovation meets sustainability. We're
              dedicated to revolutionizing livestock management through
              cutting-edge technology.
            </p>
            <p>
              For years, the agriculture industry has struggled with accurately
              measuring methane emissions from cattle. Traditional methods,
              relying on equipment inside farms and wearables, often lead to
              significant errors and inconsistencies. In fact, studies have
              shown that these methods can result in errors of up to 20 to 30%,
              making it challenging to obtain precise measurements of methane
              concentration.
            </p>
            <p>
              Drawing upon 11 years of expertise in bio-capsule development, we
              dedicated ourselves to creating a solution that would redefine
              methane measurement.
              <br /> After two years of intensive R&D, we achieved a remarkable
              breakthrough: the Methane Capsule.
            </p>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="h-[820px] bg-ligthGray p-20">
        <div className="h-full flex flex-col gap-10">
          <h1 className="text-4xl text-black font-bold">Our Mission</h1>
          <div className="h-[85%] flex justify-between">
            <div className="w-[45%] flex flex-col justify-center gap-14 text-darkGray">
              <p>
                Currently, the Earth is suffering from the methane gas
                (greenhouse gas) emitted by livestock. Global warming is
                currently a serious issue, and it is expected to persist and
                become more prolonged in the future.
              </p>
              <p>
                Your livestock emits far more greenhouse gases than your cars.
                Thus, MeTech has been doing a lot of research (R&D) on methane
                gas measurement and reduction devices in livestock over the past
                three years to save the Earth's environment. Among the
                contributing factors, methane emissions from cattle are
                extremely critical, having an effect 100 times that of carbon
                dioxide. Our goal is to reduce methane emissions from the
                world's cattle (1.5 billion heads) by 10% by 2030.
              </p>
              <p>
                Although we are currently selling in the methane measurement
                sector, we aim to complete the development and production of
                methane reduction capsules within this year and plan to sell
                them in the global market targeting 300 million heads.
              </p>
              <p>
                Please keep an eye on our company.
                <br />
                Thank you.
              </p>
            </div>
            <div className="h-full w-[45%] flex">
              <img
                className="h-full w-full object-contain"
                src={CEO}
                alt="MeTech's CEO Charles Park"
              />
            </div>
          </div>
        </div>
      </section>

      {/* History */}
      <section className="h-[420px] bg-offWhite items-start p-20">
        <div className="h-full flex flex-col gap-10">
          <h1 className="text-4xl text-black font-bold">History</h1>
          <div className="h-full text-darkGray">
            <ul>
              {HISTORY_LIST.map((history, idx) => {
                return (
                  <li key={idx}>
                    <span className="font-semibold">{history.date}</span>{" "}
                    {history.title}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}

export default About;
