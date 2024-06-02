"use client";

import { Accordion } from "@radix-ui/react-accordion";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Play } from "@/icons/play";

const Ensure = () => {
  return (
    <section>
      <div className="flex items-start flex-col pt-[149px] pb-[92px] md:w-4/5 lg:w-4/5 xl:w-[55%] px-4 md:px-8 lg:px-[70px]">
        <h1 className="text-dark font-bold text-3xl md:leading-[64px] md:text-[54px]">
          How we ensure you{"’"}re in good hands.
        </h1>
        <p className="text-[#1E1515CC] mt-[22px]">
          With our comprehensive screening process, we hand-pick highly skilled
          candidates so you can onboard them in a matter of days.
        </p>
        <Accordion type="single" collapsible className="w-full space-y-1 mt-[30px]">
          {[
            {
              triggerText: "Step 1: Resume Screening",
              content: "Resume Candidate Screening",
            },
            {
              triggerText: "Step 2: Video Interview",
              content:
                "Candidates are assessed through skill based questions in a virtual setting. Allowing you to gauge personality and cultural fit.",
            },
            {
              triggerText: "Step 3: Technical Evaluation",
              content: "Complete technical evaluation",
            },
            {
              triggerText: "Step 4: Application Review",
              content: "Complete application Review",
            },
            {
              triggerText: "Step 5: Lets get to work",
              content: "Complete hiring process",
            },
          ].map(({ triggerText, content }, index) => {
            return (
              <AccordionItem
                value={`item-${index}`}
                key={index}
                className="border border-[#F0F0F0] px-5 rounded-[7px] py-0 data-[state=open]:shadow-[0px_15px_30px_0px_#00000012]"
              >
                <AccordionTrigger className="hover:no-underline [&[data-state=open]_.play]:bg-[#8BA4FD] [&[data-state=open]_.play>svg]:text-white">
                  <div className="flex items-center">
                    <div className="play flex transition duration-250 rounded-full w-[57px]  h-[57px] bg-[#ECECEC] items-center justify-center">
                      <Play className="text-dark transition duration-250" />
                    </div>
                    <span className="ml-3">{triggerText}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>{content}</AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
      </div>
    </section>
  );
};

export default Ensure;
