"use client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger
} from "@/components/ui/sheet";
import { Logo } from "@/icons/logo";
import { AlignJustify } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="fixed z-50 bg-purple rounded-[15px] pl-[25px] pr-[9px] h-[60px] flex justify-between items-center top-4 md:top-9 left-4 right-4 md:left-[70px] md:right-[70px]">
      <Logo />
      <div className="hidden lg:flex space-x-[30px] text-white font-medium text-sm">
        {[
          { text: "Find Work" },
          { text: "Find Talent" },
          { text: "Articles" },
          { text: "About Us" },
          { text: "Contact Us" },
        ].map(({ text }, index) => {
          return (
            <Link href="/" key={index}>
              {text}
            </Link>
          );
        })}
      </div>
      <div className="hidden lg:flex space-x-4 items-center">
        <Link href="/" className="text-white font-medium text-sm">
          Log in
        </Link>
        <Button className="rounded-2xl h-[43px] px-[21px] py-[14px] bg-white text-dark text-sm">
          Join Now
        </Button>
      </div>
      <Sheet>
        <SheetTrigger asChild>
          <Button size="icon" className="bg-purple/80 lg:hidden">
            <AlignJustify />
          </Button>
        </SheetTrigger>
        <SheetContent side={"left"} className="bg-purple text-white">
          <div className="flex flex-col h-full">
            <Logo />
            <div className="flex grow items-center">
              <div className="flex flex-col items-start space-y-3.5">
                {[
                  { text: "Find Work" },
                  { text: "Find Talent" },
                  { text: "Articles" },
                  { text: "About Us" },
                  { text: "Contact Us" },
                ].map(({ text }, index) => {
                  return (
                    <SheetClose key={index} asChild>
                        <Link href="/" className="text-lg font-semibold">
                          {text}
                        </Link>
                    </SheetClose>
                  );
                })}
              </div>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </nav>
  );
};

export default Navbar;
