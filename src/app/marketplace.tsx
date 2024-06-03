import { Button } from "@/components/ui/button";
import { Categories } from "@/icons/categories";
import { LogoMark } from "@/icons/logo-mark";
import { Profiles } from "@/icons/profiles";
import { Skills } from "@/icons/skills";
import Image from "next/image";
import Link from "next/link";

const MarketPlace = () => {
  return (
    <section className="after:bg-[#EDEFFF] slant-edges">
      <div className="py-20 lg:pt-[183px] lg:pb-[127px]">
        <h1 className="text-center w-4/5 mx-auto text-dark font-bold text-3xl md:leading-[64px] md:text-[54px] mb-12 lg:mb-[90px]">
          Your one-stop marketplace for finding the talent your business needs.
        </h1>
        <div className="px-4 md:px-8 lg:px-[70px]">
          <div className="grid grid-cols-1 xl:grid-cols-[35%_1fr] gap-3 md:gap-6 xl:gap-10 mb-8">
            <div className="flex flex-col mt-3">
              <p className="font-medium mb-5 text-2xl">
                Find Dev and IT professionals to scale your business.
              </p>
              <div className="flex flex-wrap gap-x-[97px] gap-y-2">
                {[
                  {
                    text: "989 Skills",
                    Icon: Skills,
                  },
                  {
                    text: "45 Sub-Categories",
                    Icon: Categories,
                  },
                  {
                    text: "1011 Profiles",
                    Icon: Profiles,
                  },
                ].map(({ text, Icon }, index) => {
                  return (
                    <span className="flex space-x-1.5 items-center" key={index}>
                      <Icon />
                      <span className="text-grey">{text}</span>
                    </span>
                  );
                })}
              </div>
            </div>

            <div className="py-[18px] px-[29px] bg-white rounded-[7px]">
              <p className="text-start font-medium my-[15px]">
                IT & Development
              </p>
              <div className="grid grid-cols-2 md:grid-cols-6 gap-3 md:gap-5 w-full items-start justify-items-center">
                {[
                  {
                    text: "Shopify Developer",
                    img: "/assets/images/shopify.png",
                    imgWidth: 39,
                    imgHeight: 40,
                  },
                  {
                    text: "Magento Developer",
                    img: "/assets/images/magento.png",
                    imgWidth: 32,
                    imgHeight: 40,
                  },
                  {
                    text: "Data Scientist",
                    img: "/assets/images/data-scientist.png",
                    imgWidth: 42,
                    imgHeight: 39,
                  },
                  {
                    text: "Webflow Developer",
                    img: "/assets/images/webflow.png",
                    imgWidth: 43,
                    imgHeight: 30,
                  },
                  {
                    text: "Dot Net Developer",
                    img: "/assets/images/dot-net.png",
                    imgWidth: 69,
                    imgHeight: 40,
                  },
                ].map(({ text, img, imgHeight, imgWidth }, index) => {
                  return (
                    <div key={index} className="flex flex-col items-center">
                      <div className="flex rounded-full justify-center items-center w-24 h-24 bg-[#F6F6F6]">
                        <Image
                          src={img}
                          alt={text}
                          height={imgHeight}
                          width={imgWidth}
                        />
                      </div>
                      <p className="text-sm font-semibold text-center mt-3">
                        {text}
                      </p>
                    </div>
                  );
                })}
                <Button
                  asChild
                  size="icon"
                  className="rounded-[30px] bg-[#F6F6F6] w-24 h-24"
                >
                  <Link href="/">
                    <LogoMark className="text-dark" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 xl:grid-cols-[35%_1fr] gap-3 md:gap-6 xl:gap-10">
            <div className="flex flex-col mt-3">
              <p className="font-medium mb-5 text-2xl">
                Explore Creative individuals with a keen eye for detail.
              </p>
              <div className="flex flex-wrap gap-x-[97px] gap-y-2">
                {[
                  {
                    text: "989 Skills",
                    Icon: Skills,
                  },
                  {
                    text: "45 Sub-Categories",
                    Icon: Categories,
                  },
                  {
                    text: "1011 Profiles",
                    Icon: Profiles,
                  },
                ].map(({ text, Icon }, index) => {
                  return (
                    <span className="flex space-x-1.5 items-center" key={index}>
                      <Icon />
                      <span className="text-grey">{text}</span>
                    </span>
                  );
                })}
              </div>
            </div>

            <div className="py-[18px] px-[29px] bg-white rounded-[7px]">
              <p className="text-start font-medium my-[15px]">
                Design & Creative
              </p>
              <div className="grid grid-cols-2 md:grid-cols-6 gap-3 md:gap-5 w-full items-start justify-items-center">
                <Button
                  asChild
                  size="icon"
                  className="rounded-[30px] bg-[#F6F6F6] w-24 h-24"
                >
                  <Link href="/">
                    <LogoMark className="text-dark" />
                  </Link>
                </Button>
                {[
                  {
                    text: "UX Designer",
                    img: "/assets/images/figma.png",
                    imgWidth: 26,
                    imgHeight: 39,
                  },
                  {
                    text: "Graphics Designer",
                    img: "/assets/images/photoshop.png",
                    imgWidth: 48,
                    imgHeight: 48,
                  },
                  {
                    text: "Illustration Artist",
                    img: "/assets/images/illustration.png",
                    imgWidth: 47,
                    imgHeight: 44,
                  },
                  {
                    text: "Unreal Engine",
                    img: "/assets/images/unreal.png",
                    imgWidth: 55,
                    imgHeight: 55,
                  },
                  {
                    text: "Cinema 4D",
                    img: "/assets/images/cinema.png",
                    imgWidth: 53,
                    imgHeight: 53,
                  },
                ].map(({ text, img, imgHeight, imgWidth }, index) => {
                  return (
                    <div key={index} className="flex flex-col items-center">
                      <div className="flex rounded-full justify-center items-center w-24 h-24 bg-[#F6F6F6]">
                        <Image
                          src={img}
                          alt={text}
                          height={imgHeight}
                          width={imgWidth}
                        />
                      </div>
                      <p className="text-sm font-semibold text-center mt-3">
                        {text}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-[35%_1fr] items-center mt-5 lg:gap-6 xl:gap-10">
            <div className="flex space-x-3 items-center">
              <Button
                asChild
                size="icon"
                className="h-[74px] rounded-[30px] bg-dark w-[74px]"
              >
                <Link href="/">
                  <LogoMark className="text-white" />
                </Link>
              </Button>
              <Link href="/" className="font-medium text-[22px]">
                Explore More
              </Link>
            </div>
            <p className="text-start hidden md:inline-block text-grey font-medium">
              <span className="font-bold">30 more</span> to explore
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketPlace;
