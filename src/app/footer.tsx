import { Button } from "@/components/ui/button";
import { Logo } from "@/icons/logo";
import { LogoMark } from "@/icons/logo-mark";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <section className="overflow-visible relative after:skew-y-[-3deg] after:content-[''] after:left-0 after:right-0 after:-top-[20px] lg:after:-top-[40px] after:h-[180px]  bg-[linear-gradient(180deg,_#0C0C0C_0%,_#202229_100%)] after:bg-[#0C0C0C] after:absolute px-4 md:px-8 lg:px-[70px] py-2 lg:py-5 pb-[148px]">
        <div className="after:bg-purple z-10 slant-edges h-[481px] flex justify-center items-center">
          <div className="flex flex-col items-center text-center px-4 md:w-2/3 xl:w-1/2">
            <h1 className="font-semibold text-3xl md:leading-[64px] md:text-[54px] text-white">
              Need a job done, and done well? Get started
            </h1>
            <Button
              asChild
              size="icon"
              className="h-[74px] rounded-[30px] bg-dark w-[74px] mt-[35px]"
            >
              <Link href="/">
                <LogoMark className="text-white rotate-90" />
              </Link>
            </Button>
          </div>
        </div>

        <footer className="mt-[123px]">
          <div className="grid grid-cols-1 gap-y-4 xl:grid-cols-[1fr_65%] gap-x-0 md:gap-x-[92px] justify-items-center md:justify-items-start mb-16">
            <div className="flex flex-col w-full items-center xl:items-start text-center">
              <Logo />
              <p className="text-sm text-white/80 mt-7 w-full lg:w-[50%] xl:w-full text-center xl:text-start">
                We take complex hiring processes - and simplify them. Connecting
                you to the world{"’"}s highly qualified talent pool.
              </p>
            </div>
            <h1 className="font-semibold text-center xl:text-start text-3xl md:leading-[64px] md:text-[54px] text-white">
              Connecting the right people to the right businesses.
            </h1>
          </div>
          <div className="grid grid-cols-1 gap-y-6 xl:grid-cols-[1fr_65%] gap-x-0 md:gap-x-[92px] justify-items-center md:justify-items-start ">
            <div className="flex flex-col w-full items-center xl:items-start text-center">
              <p className="font-semibold text-sm text-white/60">
                LINKS AND REDIRECTS
              </p>
              <div className="flex space-x-2 mt-4">
                <Button className="w-[162px] h-[50px] rounded-[20px] bg-[#292B34] text-white/80">
                  Hire now
                </Button>
                <Button className="w-[162px] h-[50px] rounded-[20px] bg-[#292B34] text-white/80">
                  Apply now
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-y-4 justify-between justify-items-center xl:justify-items-start w-full">
              {[
                {
                  title: "PLATFORM",
                  items: [
                    {
                      text: "Find Work",
                      link: "/",
                    },
                    {
                      text: "Find Talent",
                      link: "/",
                    },
                    {
                      text: "Categories",
                      link: "/",
                    },
                    {
                      text: "About Us",
                      link: "/",
                    },
                  ],
                },
                {
                  title: "CATEGORIES",
                  items: [
                    {
                      text: "Data Science",
                      link: "/",
                    },
                    {
                      text: "IT & Networking",
                      link: "/",
                    },
                    {
                      text: "Web & Mobile",
                      link: "/",
                    },
                  ],
                },
                {
                  title: "HELP",
                  items: [
                    {
                      text: "FAQ’s",
                      link: "/",
                    },
                    {
                      text: "Contact Us",
                      link: "/",
                    },
                  ],
                },
                {
                  title: "GET IN TOUCH @",
                  items: [
                    {
                      text: "Instagram",
                      link: "/",
                    },
                    {
                      text: "LinkedIn",
                      link: "https://www.linkedin.com/in/ayomide-oguntuase/",
                    },
                    {
                      text: "Twitter",
                      link: "/",
                    },
                  ],
                },
              ].map(({ title, items }) => {
                return (
                  <div className="" key={title}>
                    <h4 className="font-semibold text-sm mb-4 text-white/60">
                      {title}
                    </h4>
                    <div className="flex flex-col space-y-4">
                      {items.map(({ text, link }) => {
                        return (
                          <Link
                            className="font-medium text-lg text-white relative pb-2 overflow-hidden after:-translate-x-full after:left-0 hover:after:translate-x-0 after:transition after:duration-300 after:bottom-0 after:h-0.5 after:w-full after:absolute after:bg-[linear-gradient(90deg,#FFFFFF_0%,#202229_99.01%)]"
                            href={link}
                            key={text}
                          >
                            {text}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </footer>
      </section>
      <div className="bg-dark flex flex-col md:flex-row space-y-2 md:space-y-0 px-4 md:px-8 lg:px-[70px] justify-between items-centerfont-medium py-2 border-top border-[linear-gradient(90deg,rgba(255,255,255,0.3)_0%,rgba(32,34,41,0.37)_99.01%)]">
        <p className="text-white/70 text-center">
          All rights reserved by Zwilt
        </p>
        <div className="flex w-full md:w-auto justify-between md:justify-start items-center space-x-8">
          <Link href="/" className="underline text-white/70">
            Privacy Policy
          </Link>
          <Link href="/" className="underline text-white/70">
            Terms and Conditions
          </Link>
        </div>
      </div>
    </>
  );
};

export default Footer;
