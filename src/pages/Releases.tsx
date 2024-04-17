import React from "react";
import News from "../components/News";

function Releases() {
  return (
    <main>
      {/* Releases Header */}
      <div className="w-full h-[320px] bg-offWhite pt-32 p-20">
        <h1 className="text-6xl text-darkGreen font-extrabold mb-10">
          News and updates from MeTech
        </h1>
        <div className="w-[200px] h-[8px] bg-lightGreen rounded-sm"></div>
      </div>

      {/* Media Releases */}
      <section className="h-full bg-ligthGray p-20 items-start">
        <div className="flex flex-col gap-10">
          {/* Media Releases Title */}
          <div>
            <h1 className="text-6xl text-darkGreen font-semibold">
              Media Releases
            </h1>
          </div>
          {/* Releases */}
          <div className="w-full grid grid-cols-3 gap-4 justify-items-center items-center">
            <News
              isReleasePage={true}
              width="w-[70%]"
              justifyContent="justify-between"
              alignItems="items-center"
              textAlign="text-center"
              textSize="text-sm"
            />
          </div>
        </div>
      </section>
    </main>
  );
}

export default Releases;
