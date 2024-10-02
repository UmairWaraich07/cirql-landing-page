import Image from "next/image";
import React from "react";

const Testimonials = () => {
  return (
    <section className="bg-primary-light  ">
      <div className="py-10 md:py-24 max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-16">
        <div className="flex items-center flex-col justify-center text-center">
          <h2 className="text-dark text-4xl sm:text-5xl font-medium">
            I took one meeting and it paid for the entire year!
          </h2>

          <div className="flex items-center justify-center flex-col mt-10">
            <Image
              src="/images/avatar.png"
              alt="avatar"
              width={64}
              height={64}
              priority
              quality={100}
            />
            <h4 className=" mt-4 font-semibold text-dark text-lg">
              Maisie Tucker
            </h4>
            <p className="text-base ">Marketing Director, US Company</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
