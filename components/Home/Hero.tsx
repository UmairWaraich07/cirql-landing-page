import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import { FlipWords } from "../ui/flip-words";
import Header from "../shared/Header";

const Hero = () => {
  const words = [
    "Blocks cold emails",
    "Categorizes Your Inbox",
    "Provides Analytics",
    "Monetizes Your Time",
  ];
  return (
    <section className=" bg-secondary">
      <div className=" bg-grid bg-top bg-cover bg-no-repeat   max-w-[1440px] mx-auto ">
        <Header />
        {/* Hero content */}
        <div className=" mt-[5vh] grid items-center justify-items-center gap-16 sm:gap-20 px-5 sm:px-10 lg:px-16 py-10 md:py-24">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="h1-bold flex items-center justify-center">
              Cirql: <FlipWords className="text-center" words={words} />{" "}
            </h1>
            <p className="text-lg sm:text-xl mt-4 sm:mt-6 ">
              You get a lot of emails - we get it. Cirql blocks unwanted cold
              emails while letting valuable vendors through - and lets you get
              paid for the time you spend with them. With Smart Email
              Categorization, you’ll stay organized and only focus on what
              matters.
            </p>
            <div className="w-full flex flex-col-reverse sm:flex-row items-center justify-center gap-4 mt-8 sm:mt-12 ">
              <Link href="/" className="max-sm:w-full">
                <Button
                  variant="outline"
                  className="max-sm:w-full flex items-center gap-2 font-medium text-lg sm:w-[200px]"
                >
                  <Image
                    src="/icons/play.svg"
                    alt="play"
                    width={20}
                    height={20}
                  />
                  Demo
                </Button>
              </Link>
              <Link
                href="https://platform.cirql.ai/signup"
                className="max-sm:w-full"
              >
                <Button className="max-sm:w-full font-medium text-lg sm:w-[200px]">
                  Sign up
                </Button>
              </Link>
            </div>
          </div>

          {/* Hero Image */}
          <div className="">
            <Image
              src="/images/cirql-dashboard.png"
              alt="cirql dashboard"
              width={700}
              height={500}
              className="w-full h-full object-cover"
              priority
              quality={100}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
