import { Button } from "@/components/ui/button";
import { Logo } from "@/icons/logo";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="fixed z-10 bg-[#525AA0] rounded-[15px] pl-[25px] pr-[9px] h-[60px] flex justify-between items-center top-9 md:left-[70px] md:right-[70px]">
      <Logo />
      <div className="flex space-x-[30px] text-white font-medium text-sm">
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
      <div className="flex space-x-4 items-center">
        <Link href="/" className="text-white font-medium text-sm">
          Log in
        </Link>
        <Button className="rounded-2xl h-[43px] px-[21px] py-[14px] bg-white text-dark text-sm">
          Join Now
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
