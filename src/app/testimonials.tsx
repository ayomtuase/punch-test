"use client";

import { Button } from "@/components/ui/button";
import Colon from "@/icons/colon";
import { Groove } from "@/icons/groove";
import { LogoMark } from "@/icons/logo-mark";
import Image from "next/image";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const prevElClass = "prevSwiperButton";
const nextElClass = "nextSwiperButton";

const Testimonials = () => {
  return (
    <section className="relative overflow-visible">
      <div className="absolute -z-10 inset-0 overflow-hidden skew-y-[-3deg] bg-dark">
        <Colon className="absolute -top-6 right-0" />
      </div>
      <Swiper
        modules={[Navigation, Pagination]}
        navigation={{
          prevEl: `.${prevElClass}`,
          nextEl: `.${nextElClass}`,
        }}
        spaceBetween={0}
        slidesPerView={1}
      >
        <SwiperSlide>
          <div className="flex lg:flex-row flex-col gap-y-4 pt-[247px] pb-[147px] items-center md:justify-between px-4 md:px-8 lg:px-[70px]">
            <div className="flex flex-col lg:w-1/2">
              <div className="lg:w-2/3 xl:w-3/5">
                <h1 className="text-white font-bold text-3xl md:leading-[64px] md:text-[54px]">
                  How it worked for Jason{" "}
                  <span>
                    <Image
                      alt="jason"
                      src="/assets/images/jason.png"
                      width={68}
                      height={43}
                      className="inline"
                    />
                  </span>{" "}
                  at <Groove className="inline" />
                </h1>
                <p className="mt-11 text-white">
                  Zwilt enabled us to deliver on time and they’ve been heavy
                  hitters in our corner since.
                </p>
                <div className="flex space-x-4 mt-11">
                  <Button
                    size="icon"
                    className="prevSwiperButton rounded-[20px] bg-[#F6F6F6] w-[50px] h-[50px]"
                  >
                    <LogoMark className="text-[#50589F] rotate-180 w-4 h-2.5" />
                  </Button>
                  <Button
                    size="icon"
                    className="nextSwiperButton rounded-[20px] bg-[#F6F6F6] w-[50px] h-[50px]"
                  >
                    <LogoMark className="text-[#50589F] w-4 h-2.5" />
                  </Button>
                </div>
              </div>
            </div>

            <div className="flex-flex-col lg:w-1/2">
              <div className="flex">
                <Image
                  src="/assets/images/groove-logo.png"
                  height={99}
                  width={99}
                  alt={"Groove Logo"}
                />
                <div className="flex flex-col ml-4">
                  <p className="font-semibold text-3xl md:text-[34px] leading-[44px] text-white mb-[3px]">
                    Jason Makki
                  </p>
                  <p className="font-medium text-[#C6C4C4]">
                    Engineer at GROOVE
                  </p>
                  <p className="font-medium text-[#C6C4C4] mt-2.5">
                    San Francisco
                  </p>
                </div>
              </div>
              <p className="text-[22px] leading-[32px] mt-14 text-white">
                Zwilt enabled us to deliver on time and they{"’"}ve been heavy
                hitters in our corner since. Zwilt enabled us to deliver on time
                and they{"’"}ve been heavy hitters in our corner since. Zwilt
                enabled us to deliver on time and they{"’"}ve been heavy
                hitters.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex lg:flex-row flex-col gap-y-4 pt-[247px] pb-[147px] items-center md:justify-between px-4 md:px-8 lg:px-[70px]">
            <div className="flex flex-col lg:w-1/2">
              <div className="lg:w-2/3 xl:w-3/5">
                <h1 className="text-white font-bold text-3xl md:leading-[64px] md:text-[54px]">
                  How it worked for Jason{" "}
                  <span>
                    <Image
                      alt="jason"
                      src="/assets/images/jason.png"
                      width={68}
                      height={43}
                      className="inline"
                    />
                  </span>{" "}
                  at <Groove className="inline" />
                </h1>
                <p className="mt-11 text-white">
                  Zwilt enabled us to deliver on time and they’ve been heavy
                  hitters in our corner since.
                </p>
                <div className="flex space-x-4 mt-11">
                  <Button
                    size="icon"
                    className="prevSwiperButton rounded-[20px] bg-[#F6F6F6] w-[50px] h-[50px]"
                  >
                    <LogoMark className="text-[#50589F] rotate-180 w-4 h-2.5" />
                  </Button>
                  <Button
                    size="icon"
                    className="nextSwiperButton rounded-[20px] bg-[#F6F6F6] w-[50px] h-[50px]"
                  >
                    <LogoMark className="text-[#50589F] w-4 h-2.5" />
                  </Button>
                </div>
              </div>
            </div>

            <div className="flex-flex-col lg:w-1/2">
              <div className="flex">
                <Image
                  src="/assets/images/groove-logo.png"
                  height={99}
                  width={99}
                  alt={"Groove Logo"}
                />
                <div className="flex flex-col ml-4">
                  <p className="font-semibold text-3xl md:text-[34px] leading-[44px] text-white mb-[3px]">
                    Jason Makki
                  </p>
                  <p className="font-medium text-[#C6C4C4]">
                    Engineer at GROOVE
                  </p>
                  <p className="font-medium text-[#C6C4C4] mt-2.5">
                    San Francisco
                  </p>
                </div>
              </div>
              <p className="text-[22px] leading-[32px] mt-14 text-white">
                Zwilt enabled us to deliver on time and they{"’"}ve been heavy
                hitters in our corner since. Zwilt enabled us to deliver on time
                and they{"’"}ve been heavy hitters in our corner since. Zwilt
                enabled us to deliver on time and they{"’"}ve been heavy
                hitters.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex lg:flex-row flex-col gap-y-4 pt-[247px] pb-[147px] items-center md:justify-between px-4 md:px-8 lg:px-[70px]">
            <div className="flex flex-col lg:w-1/2">
              <div className="lg:w-2/3 xl:w-3/5">
                <h1 className="text-white font-bold text-3xl md:leading-[64px] md:text-[54px]">
                  How it worked for Jason{" "}
                  <span>
                    <Image
                      alt="jason"
                      src="/assets/images/jason.png"
                      width={68}
                      height={43}
                      className="inline"
                    />
                  </span>{" "}
                  at <Groove className="inline" />
                </h1>
                <p className="mt-11 text-white">
                  Zwilt enabled us to deliver on time and they’ve been heavy
                  hitters in our corner since.
                </p>
                <div className="flex space-x-4 mt-11">
                  <Button
                    size="icon"
                    className="prevSwiperButton rounded-[20px] bg-[#F6F6F6] w-[50px] h-[50px]"
                  >
                    <LogoMark className="text-[#50589F] rotate-180 w-4 h-2.5" />
                  </Button>
                  <Button
                    size="icon"
                    className="nextSwiperButton rounded-[20px] bg-[#F6F6F6] w-[50px] h-[50px]"
                  >
                    <LogoMark className="text-[#50589F] w-4 h-2.5" />
                  </Button>
                </div>
              </div>
            </div>

            <div className="flex-flex-col lg:w-1/2">
              <div className="flex">
                <Image
                  src="/assets/images/groove-logo.png"
                  height={99}
                  width={99}
                  alt={"Groove Logo"}
                />
                <div className="flex flex-col ml-4">
                  <p className="font-semibold text-3xl md:text-[34px] leading-[44px] text-white mb-[3px]">
                    Jason Makki
                  </p>
                  <p className="font-medium text-[#C6C4C4]">
                    Engineer at GROOVE
                  </p>
                  <p className="font-medium text-[#C6C4C4] mt-2.5">
                    San Francisco
                  </p>
                </div>
              </div>
              <p className="text-[22px] leading-[32px] mt-14 text-white">
                Zwilt enabled us to deliver on time and they{"’"}ve been heavy
                hitters in our corner since. Zwilt enabled us to deliver on time
                and they{"’"}ve been heavy hitters in our corner since. Zwilt
                enabled us to deliver on time and they{"’"}ve been heavy
                hitters.
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Testimonials;
