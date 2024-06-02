import React from "react";
import { LogoMark } from "@/icons/logo-mark";

const FAQ = () => {
  return (
    <section className="py-40">
      <h1 className="text-dark mb-16 text-center mx-auto w-full md:w-[90%] font-bold text-3xl md:leading-[64px] md:text-[54px]">
        Frequently asked questions
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-[100px_150px_1fr] lg:grid-cols-[150px_200px_1fr] xl:grid-cols-[230px_330px_1fr]">
        <div className="border-y border-r border-[#D6D6D6] font-semibold h-[85px] lg:h-[112px] grid place-items-center text-[22px] hover:text-dark hover:bg-[#E8E8E8] transition">
          General
        </div>
        <div className="group flex cursor-pointer items-center md:grid md:grid-cols-subgrid h-[85px] lg:h-[112px] md:col-span-2 border-y border-[#D6D6D6] text-dark/70 hover:text-dark hover:bg-[#E8E8E8] transition">
          <div className="col-start-2 px-3 md:px-10 lg:px-20 xl:px-[111px] flex justify-between items-center font-semibold text-[22px]">
            <span>I want to work part-time, is that possible?</span>
            <LogoMark className="text-yellow opacity-0 group-hover:opacity-100 transition" />
          </div>
        </div>
        <div className="group flex cursor-pointer items-center md:grid md:grid-cols-subgrid h-[85px] lg:h-[112px] md:col-span-3 border-y border-[#D6D6D6] text-dark/70 hover:text-dark hover:bg-[#E8E8E8] transition">
          <div className="col-start-3 px-3 md:px-10 lg:px-20 xl:px-[111px] flex justify-between items-center font-semibold text-[22px]">
            <span>How long are the average projects?</span>
            <LogoMark className="text-yellow opacity-0 group-hover:opacity-100 transition" />
          </div>
        </div>
        <div className="group flex cursor-pointer items-center md:grid md:grid-cols-subgrid h-[85px] lg:h-[112px] md:col-span-3 border-y border-[#D6D6D6] text-dark/70 hover:text-dark hover:bg-[#E8E8E8] transition">
          <div className="col-start-3 px-3 md:px-10 lg:px-20 xl:px-[111px] flex justify-between items-center font-semibold text-[22px]">
            <span>How does the payment works?</span>
            <LogoMark className="text-yellow opacity-0 group-hover:opacity-100 transition" />
          </div>
        </div>
        <div className="group flex cursor-pointer items-center md:grid md:grid-cols-subgrid h-[85px] lg:h-[112px] md:col-span-3 border-y border-[#D6D6D6] text-dark/70 hover:text-dark hover:bg-[#E8E8E8] transition">
          <div className="col-start-3 px-3 md:px-10 lg:px-20 xl:px-[111px] flex justify-between items-center font-semibold text-[22px]">
            <span>How much can I earn?</span>
            <LogoMark className="text-yellow opacity-0 group-hover:opacity-100 transition" />
          </div>
        </div>
        <div className="border-y border-r border-[#D6D6D6] font-semibold h-[85px] lg:h-[112px] grid place-items-center text-[22px] hover:text-dark hover:bg-[#E8E8E8] transition">
          General
        </div>
        <div className="border-y border-r border-[#D6D6D6] text-center font-semibold h-[85px] lg:h-[112px] grid place-items-center text-[22px] hover:text-dark hover:bg-[#E8E8E8] transition">
          Joining Process
        </div>
        <div className="group flex cursor-pointer items-center h-[85px] lg:h-[112px] border-y border-[#D6D6D6] text-dark/70 hover:text-dark hover:bg-[#E8E8E8] transition">
          <div className="px-3 md:px-10 lg:px-20 xl:px-[111px] flex justify-between items-center w-full font-semibold text-[22px]">
            <span>I want to work part-time, is that possible?</span>
            <LogoMark className="text-yellow opacity-0 group-hover:opacity-100 transition" />
          </div>
        </div>
        <div className="group flex cursor-pointer items-center md:grid md:grid-cols-subgrid h-[85px] lg:h-[112px] md:col-span-3 border-y border-[#D6D6D6] text-dark/70 hover:text-dark hover:bg-[#E8E8E8] transition">
          <div className="col-start-3 px-3 md:px-10 lg:px-20 xl:px-[111px] flex justify-between items-center font-semibold text-[22px]">
            <span>How long are the average projects?</span>
            <LogoMark className="text-yellow opacity-0 group-hover:opacity-100 transition" />
          </div>
        </div>
        <div className="group flex cursor-pointer items-center md:grid md:grid-cols-subgrid h-[85px] lg:h-[112px] md:col-span-3 border-y border-[#D6D6D6] text-dark/70 hover:text-dark hover:bg-[#E8E8E8] transition">
          <div className="col-start-3 px-3 md:px-10 lg:px-20 xl:px-[111px] flex justify-between items-center font-semibold text-[22px]">
            <span>How long are the average projects?</span>
            <LogoMark className="text-yellow opacity-0 group-hover:opacity-100 transition" />
          </div>
        </div>
        <div className="group flex cursor-pointer items-center md:grid md:grid-cols-subgrid h-[85px] lg:h-[112px] md:col-span-3 border-y border-[#D6D6D6] text-dark/70 hover:text-dark hover:bg-[#E8E8E8] transition">
          <div className="col-start-3 px-3 md:px-10 lg:px-20 xl:px-[111px] flex justify-between items-center font-semibold text-[22px]">
            <span>How much can I earn?</span>
            <LogoMark className="text-yellow opacity-0 group-hover:opacity-100 transition" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
