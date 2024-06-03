"use client";

import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LogoMark } from "@/icons/logo-mark";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const thingsToType = ["developers", "designers", "PMs"];

const initialInputValue = "Looking for";

const Hero = () => {
  const [typingSpan, setTypingSpan] = useState<HTMLSpanElement | null>(null);
  const currentTypingIndex = useRef(0);
  const [pauseTyping, setPauseTyping] = useState(false);
  const [inputContent, setInputContent] = useState(initialInputValue);

  const timeout = useRef<NodeJS.Timeout>();

  useEffect(() => {
    if (!typingSpan) {
      return;
    }
    let i = 0;
    const speed = 140;
    let direction: "forwards" | "backwards" = "forwards";
    if (pauseTyping) {
      direction = "forwards";
      i = 0;
      currentTypingIndex.current = 0;
      return;
    }

    function typeWriter() {
      if (!typingSpan) {
        return;
      }
      let currentTyping = thingsToType[currentTypingIndex.current];
      if (direction === "forwards" && i < currentTyping.length) {
        typingSpan.innerHTML += currentTyping.charAt(i);
        i++;
        timeout.current = setTimeout(typeWriter, speed);
        return;
      }
      if (direction === "backwards" && i < currentTyping.length && i > 0) {
        typingSpan.innerHTML = currentTyping.slice(0, i);
        i--;
        timeout.current = setTimeout(typeWriter, speed);
        return;
      }
      if (i === currentTyping.length) {
        direction = "backwards";
        i--;
        timeout.current = setTimeout(typeWriter, 1000);
        return;
      }
      if (direction === "backwards" && i === 0) {
        typingSpan.innerHTML = "";
        direction = "forwards";
        if (currentTypingIndex.current === thingsToType.length - 1) {
          currentTypingIndex.current = 0;
        } else {
          currentTypingIndex.current += 1;
        }
        timeout.current = setTimeout(typeWriter, speed);
        return;
      }
    }

    typeWriter();
  }, [typingSpan, pauseTyping]);

  useEffect(() => {
    return () => {
      clearTimeout(timeout.current);
    };
  });

  return (
    <section className="flex justify-center px-4">
      <div className="flex flex-col pt-28 md:pt-[240px] pb-[78px] items-center text-center w-full md:w-4/5 xl:w-3/5">
        <div className="flex flex-col items-center lg:w-4/5">
          <h1 className="font-bold text-[#202229] text-center text-3xl md:leading-[64px] md:text-[54px] mb-5">
            Finding the right fit{" "}
            <span>
              <Image
                alt="right fit"
                src="/assets/images/fit.gif"
                width={68}
                height={43}
                className="inline"
              />
            </span>{" "}
            has never been easier.
          </h1>
          <div className="w-full xl:w-4/5">
            <p className="text-2xl text-[22px] text-grey mb-[30px] text-center">
              With our rigorous pre-vetting process, you{"'"}ll never have to
              worry about finding the ideal candidate ever again.
            </p>
            <div className="relative mb-10 w-full">
              <div
                contentEditable
                onFocus={() => {
                  clearTimeout(timeout.current);
                  setPauseTyping(true);
                }}
                onBlur={() => {
                  if (inputContent === initialInputValue) {
                    setPauseTyping(false);
                  }
                }}
                onInput={(e) => {
                  setInputContent(e.currentTarget.textContent ?? "");
                }}
                className="w-full group h-[74px] pl-3 md:pl-[27px] outline-none ring-offset-2 rounded-md border border-input ring-purple focus-visible:ring-2 py-1.5 text-base font-semibold pr-[101px] text-start flex items-center justify-start"
              >
                {initialInputValue}{" "}
                {!pauseTyping ? (
                  <span
                    ref={setTypingSpan}
                    className="typing-span group-focus-visible:hidden text-[#959595] font-medium border-r-2 ml-1 border-[#959595]"
                  />
                ) : null}
              </div>
              <Button
                size="icon"
                className="absolute right-0 top-0 h-[74px] bg-yellow w-[74px]"
              >
                <LogoMark className="text-dark" />
              </Button>
            </div>
          </div>
        </div>
        <div className="bg-[#F8F8F8] rounded-[15px] pt-[15px] pb-[30px] px-4 md:px-[65px] w-full">
          <Tabs defaultValue="it" className="w-full">
            <div className="flex justify-center">
              <TabsList className="grid mx grid-cols-2 mb-[23px]">
                <TabsTrigger value="it" className="py-2.5 px-[30px]">
                  IT & Development
                </TabsTrigger>
                <TabsTrigger value="design" className="py-2.5 px-[30px]">
                  Design and Creative
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="it">
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-y-3 md:gap-y-[18px] gap-x-5 xl:gap-x-10 w-full justify-between">
                {[
                  { text: "Python Developer" },
                  { text: "Shopify Developer" },
                  { text: "MERN Stack Developer" },
                  { text: "Full Stack Developer" },
                  { text: "Data Scientist" },
                  { text: "Front End Developer" },
                  { text: "Shopify Developer" },
                  { text: "Python Developer" },
                  { text: "Shopify Developer" },
                  { text: "Python Developer" },
                  { text: "Full Stack Developer" },
                  { text: "Explore More", color: "text-dark" },
                ].map(({ text, color }, index) => {
                  return (
                    <Link
                      href="/"
                      className={cn(
                        "text-start",
                        color ? `${color}` : "text-[#959595] hover:text-dark"
                      )}
                      key={index}
                    >
                      {text}
                    </Link>
                  );
                })}
              </div>
            </TabsContent>
            <TabsContent value="design">
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-y-3 md:gap-y-[18px] gap-x-5 xl:gap-x-10 w-full justify-between">
                {[
                  { text: "Graphics Designer" },
                  { text: "UI/UX Designer" },
                  { text: "Product Manager" },
                  { text: "Social Media Management" },
                  { text: "Graphics Designer" },
                  { text: "UI/UX Designer" },
                  { text: "Product Manager" },
                  { text: "Social Media Management" },
                  { text: "Graphics Designer" },
                  { text: "UI/UX Designer" },
                  { text: "Product Manager" },
                  { text: "Explore More", color: "text-dark" },
                ].map(({ text, color }, index) => {
                  return (
                    <Link
                      href="/"
                      className={cn(
                        "text-start",
                        color ? `${color}` : "text-[#959595] hover:text-dark"
                      )}
                      key={index}
                    >
                      {text}
                    </Link>
                  );
                })}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default Hero;
