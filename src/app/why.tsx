"use client";

import { Button } from "@/components/ui/button";
import { LogoMark } from "@/icons/logo-mark";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Why = () => {

  useGSAP(
    () => {
      const x = (innerWidth < 1024 ? 3600 : 4100) - innerWidth;

      gsap.to('.section-container', {
        x: -x,
        scrollTrigger: {
          trigger: ".why-section",
          pin: true,
          start: "top top",
          scrub: 1,
          end: () => {
            return "+=" + x;
          },
        },
      });
    },
  );

  return (
    <section className="why-section overflow-hidden bg-[#F2F4FF]">
      <div className="section-container flex flex-nowrap py-32 lg:py-[120px] bg-[#F2F4FF] items-center px-4 md:px-8 lg:px-[70px]">
        <div className="flex flex-col min-w-[70%] md:min-w-[50%] xl:min-w-[30%] mr-8">
          <h1 className="text-dark font-bold text-3xl md:leading-[64px] md:text-[54px]">
            Why choose Zwilt?
          </h1>
          <p className="text-grey mt-[37px]">
            We take complex hiring processes - and simplify them. Connecting you
            to the world{"’"}s highly qualified talent pool.
          </p>
        </div>
        <div className="flex relative space-x-4 md:space-x-8 space-[70px] mr-4 md:mr-8 lg:mr-[70px]">
          <div className="flex items-center min-w-[1000px] md:min-w-[1100px] rounded-[20px] h-[400px] md:h-[550px] py-[42px] px-10 relative bg-white shadow-[0px_15px_30px_0px_#BFB5FF26]">
            <div className="flex flex-col overflow-visible max-w-[40%] w-2/5">
              <h1 className="font-bold text-3xl md:leading-[64px] md:text-[54px]">
                Onboard without the risk.
              </h1>
              <div className="flex flex-col mt-[37px]">
                {[
                  {
                    text: "We pick the best for you to select.",
                  },
                  {
                    text: "Thousands of vetted candidates in dozens of categories.",
                  },
                  {
                    text: "Risk-free resource swapping for the best fit.",
                  },
                ].map(({ text }, index) => {
                  return (
                    <p
                      key={index}
                      className="text-grey text-[22px] leading-[32px] whitespace-nowrap"
                    >
                      <span className="mr-4 inline-block w-[18px] h-[7px] bg-[#50589F] rounded-[21px]" />
                      {text}
                    </p>
                  );
                })}
              </div>
              <div className="flex space-x-3 items-center mt-11">
                <Button
                  asChild
                  size="icon"
                  className="h-[50px] rounded-[20px] bg-dark w-[50px]"
                >
                  <Link href="/">
                    <LogoMark className="text-white w-4 h-2.5" />
                  </Link>
                </Button>
                <Link href="/" className="font-medium text-sm">
                  Learn More
                </Link>
              </div>
            </div>
            <div className="w-3/5 relative h-full shrink-0">
              <Image
                src="/assets/images/onboard.png"
                fill
                alt="Onboard"
                className="absolute right-0 top-0 bottom-0 object-contain object-right"
              />
            </div>
          </div>
          <div className="flex items-center min-w-[1000px] md:min-w-[1100px] rounded-[20px] h-[400px] md:h-[552px] py-[42px] px-10 relative bg-white shadow-[0px_15px_30px_0px_#BFB5FF26]">
            <div className="flex flex-col overflow-visible w-3/5 md:w-1/2 md:max-w-[50%] max-w-[60%] ">
              <h1 className="font-bold text-3xl md:leading-[64px] md:text-[54px]">
                An open book.
              </h1>
              <div className="flex flex-col mt-[37px]">
                {[
                  {
                    text: "Easy and transparent one-to-one chat with candidates.",
                  },
                  {
                    text: "Simple and convenient payment methods.",
                  },
                  {
                    text: "Review past ratings.",
                  },
                ].map(({ text }, index) => {
                  return (
                    <p
                      key={index}
                      className="text-grey text-[22px] leading-[32px] whitespace-nowrap"
                    >
                      <span className="mr-4 inline-block w-[18px] h-[7px] bg-yellow rounded-[21px]" />
                      {text}
                    </p>
                  );
                })}
              </div>
              <div className="flex space-x-3 items-center mt-11">
                <Button
                  asChild
                  size="icon"
                  className="h-[50px] rounded-[20px] bg-dark w-[50px]"
                >
                  <Link href="/">
                    <LogoMark className="text-white w-4 h-2.5" />
                  </Link>
                </Button>
                <Link href="/" className="font-medium text-sm">
                  Learn More
                </Link>
              </div>
            </div>
            <div className="w-2/5 md:w-1/2 relative h-full shrink-0">
              <Image
                src="/assets/images/open-book-1.png"
                height={98}
                width={98}
                alt="Onboard"
                className="absolute rotate-[7.32deg] left-0 top-0"
              />
              <Image
                src="/assets/images/open-book-2.png"
                fill
                alt="Onboard"
                className="absolute top-0 bottom-0 object-contain object-center"
              />
              <Image
                src="/assets/images/open-book-3.png"
                height={147}
                width={126}
                alt="Onboard"
                className="absolute right-0 top-20 md:top-40"
              />
            </div>
          </div>
          <div className="flex items-center justify-between min-w-[1250px] rounded-[20px] h-[400px] md:h-[550px] py-[42px] px-10 relative bg-white shadow-[0px_15px_30px_0px_#BFB5FF26]">
            <div className="flex flex-col overflow-visible max-w-[40%] w-2/5">
              <h1 className="font-bold text-3xl md:leading-[64px] md:text-[54px]">
                Stay in the loop.
              </h1>
              <div className="flex flex-col mt-[37px]">
                {[
                  {
                    text: "Track your staff activity down to every minute with screenshots.",
                  },
                  {
                    text: "Comprehensive timesheet data to process payments.",
                  },
                  {
                    text: "Create projects to organize and assign tasks more effectively.",
                  },
                ].map(({ text }, index) => {
                  return (
                    <p
                      key={index}
                      className="text-grey text-[22px] leading-[32px] whitespace-nowrap"
                    >
                      <span className="mr-4 inline-block w-[18px] h-[7px] bg-green rounded-[21px]" />
                      {text}
                    </p>
                  );
                })}
              </div>
              <div className="flex space-x-3 items-center mt-11">
                <Button
                  asChild
                  size="icon"
                  className="h-[50px] rounded-[20px] bg-dark w-[50px]"
                >
                  <Link href="/">
                    <LogoMark className="text-white w-4 h-2.5" />
                  </Link>
                </Button>
                <Link href="/" className="font-medium text-sm">
                  Learn More
                </Link>
              </div>
            </div>
            <div className="w-2/5 md:w-1/2 relative -top-9 h-full shrink-0">
              <Image
                src="/assets/images/loop-1.png"
                width={295}
                height={85}
                alt="Onboard"
                className="absolute left-0"
              />
              <Image
                src="/assets/images/loop-2.png"
                width={356}
                height={295}
                alt="Onboard"
                className="absolute hidden md:inline top-[54px] right-[127px]"
              />
              <Image
                src="/assets/images/open-book-3.png"
                height={147}
                width={126}
                alt="Onboard"
                className="absolute right-0 top-20 md:top-40"
              />
              <Image
                src="/assets/images/loop-3.png"
                width={112}
                height={108}
                alt="Onboard"
                className="absolute bottom-24 md:bottom-4 left-0"
              />
              <Image
                src="/assets/images/loop-4.png"
                width={295}
                height={85}
                alt="Onboard"
                className="absolute top-[200px] md:top-[450px] right-[180px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Why;
