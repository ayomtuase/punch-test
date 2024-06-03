import { Button } from "@/components/ui/button";
import { LogoMark } from "@/icons/logo-mark";
import { One } from "@/icons/one";
import Image from "next/image";
import Link from "next/link";

const Journey = () => {
  return (
    <section className="px-4 md:px-8 lg:px-[70px] pb-20">
      <h1 className="text-dark mb-10 text-center font-bold text-3xl md:leading-[64px] md:text-[54px]">
        Start your journey today.
      </h1>
      <div className="relative lg:h-[332px] mb-5 bg-[#EDEFFF] -skew-y-3 overflow-hidden">
        <div className="flex flex-col lg:flex-row px-4 lg:px-6 gap-y-6 lg:gap-y-0 pt-8 lg:pt-0 justify-between items-center skew-y-3 overflow-visible">
          <div className="flex lg:w-2/5">
            <One className="shrink-0" />
            <div className="flex flex-col ml-5">
              <h2 className="font-semibold text-3xl mb-5 md:text-[34px] md:leading-[44px]">
                Find your next star performer.
              </h2>
              <p>
                Explore the vast Zwilt marketplace to find the candidate that
                meets your needs.
              </p>
              <div className="flex space-x-3 items-center mt-6">
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
                  Join now
                </Link>
              </div>
            </div>
          </div>
          <div className="flex justify-end w-full lg:w-auto lg:justify-start mt-4 lg:mt-0">
            <Image
              alt="hire your next top performer"
              src="/assets/images/top-performer.png"
              className="relative -bottom-2 lg:-top-6"
              height={387}
              width={466}
            />
          </div>
        </div>
      </div>

      <div className="relative lg:h-[337px] mb-5 bg-[#FFF7E1] -skew-y-3 overflow-hidden">
        <div className="flex flex-col lg:flex-row px-4 lg:px-6 gap-y-6 lg:gap-y-0 pt-8 lg:pt-0 justify-between items-center skew-y-3 overflow-visible">
          <div className="flex lg:w-2/5 items-start">
            <span className="font-bold text-[103.61px] leading-none text-transparent fill-transparent bg-clip-text bg-[linear-gradient(180deg,rgba(255,190,46,0.76)_33.21%,rgba(255,190,46,0)_100%)]">
              2
            </span>
            <div className="flex flex-col ml-5">
              <h2 className="font-semibold text-3xl mb-5 md:text-[34px] md:leading-[44px]">
                Evaluate to your heart{"’"}s content.
              </h2>
              <p>
                Assess the candidate through work history, transparent tests and
                video interviews.
              </p>
              <div className="flex space-x-3 items-center mt-6">
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
                  Browse More
                </Link>
              </div>
            </div>
          </div>
          <div className="flex justify-end w-full lg:w-auto lg:justify-start mt-4 lg:mt-0">
            <Image
              alt="evaluate"
              src="/assets/images/evaluate.png"
              className="relative lg:-top-8"
              height={387}
              width={466}
            />
          </div>
        </div>
      </div>
      <div className="relative lg:h-[337px] bg-[#F3F3F3] -skew-y-3 overflow-hidden">
        <div className="flex flex-col lg:flex-row px-4 lg:px-6 gap-y-6 lg:gap-y-0 pt-8 lg:pt-0 justify-between items-center skew-y-3 overflow-visible">
          <div className="flex lg:w-2/5 items-start">
            <span className="font-bold text-[103.61px] leading-none text-transparent fill-transparent bg-clip-text bg-[linear-gradient(180deg,rgba(0,0,0,0.8)_27.37%,rgba(0,0,0,0.16)_77.37%)]">
              3
            </span>
            <div className="flex flex-col ml-5">
              <h2 className="font-semibold text-3xl mb-5 md:text-[34px] md:leading-[44px]">
                Start building your team.
              </h2>
              <p>
                Onboard your candidate right away and start creating the next
                big thing.
              </p>
              <div className="flex space-x-3 items-center mt-6">
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
                  Join Now
                </Link>
              </div>
            </div>
          </div>
          <div className="flex justify-end w-full lg:w-auto lg:justify-start mt-4 lg:mt-0">
            <Image
              alt="evaluate"
              src="/assets/images/building.png"
              className="relative -bottom-2 lg:bottom-0 lg:top-2 xl:-top-8 lg:-right-3"
              height={387}
              width={530}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;
