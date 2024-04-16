import React from "react";
import Form from "../components/Form";

function Contact() {
  return (
    <main>
      {/* Contact Header */}
      <div className="w-full h-[320px] bg-offWhite pt-32 p-20">
        <h1 className="text-6xl text-darkGreen font-extrabold mb-10">
          Get in Touch
        </h1>
        <div className="w-[200px] h-[8px] bg-lightGreen rounded-sm"></div>
      </div>

      {/* Contact Form */}
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
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3164.804666949623!2d127.0562444753837!3d37.51252492722422!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca46b26c1760b%3A0x98214780621041f2!2s524%20Bongeunsa-ro%2C%20Gangnam-gu%2C%20Seoul!5e0!3m2!1spt-BR!2skr!4v1712569993043!5m2!1spt-BR!2skr"
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

export default Contact;
