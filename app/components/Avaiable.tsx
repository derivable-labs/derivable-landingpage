import React from "react";
import Arbitrum from "../icons/Arbitrum.png";
import ArbitrumIcon from "../icons/ArtribumIcon.png";
import Ethereum from "../icons/Ethereum.png";
import EthereumIcon from "../icons/EthereumIcon.png";

import Image from "next/image";

const Avaiable = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center py-[120px] gap-[56px]">
        <p className="font-['Sora'] font-semibold text-5xl text-[#FFFFFF]">
          Avaiable on
        </p>
        <div className="flex flex-row justify-between items-start gap-8 max-w-[584px]">
          <div className="relative bg-gray box-border flex flex-col items-center justify-center rounded-3xl gap-[26px] w-[276px] h-[292px]">
            <Image src={Arbitrum} alt="" className="absolute -z-[2] top-0" />
            <div className="flex flex-col items-center gap-4 max-w-[100px] max-h-[146px]">
              <Image src={ArbitrumIcon} alt="" />
              <p className="font-['Sora'] font-semibold text-xl text-[#FFFFFF]">
                Arbitrum
              </p>
            </div>
            <div className="flex justify-center items-center">
              <div className="box-border flex flex-row justify-center items-center py-[14px] px-5 gap-[10px] h-12 min-w-[120px] rounded-lg font-['Sora'] text-xs font-semibold">
                <div className="border-gradient p-[2px] h-12 w-full rounded-lg">
                  <div className=" h-full w-full bg-[#0E0C15] py-[14px] px-5 rounded-lg uppercase cursor-pointer	flex flex-row justify-center items-center">
                    launch app
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative bg-gray box-border flex flex-col items-center justify-center rounded-3xl gap-[26px] w-[276px] h-[292px]">
            <Image src={Ethereum} alt="" className="absolute -z-[2] top-0" />
            <div className="flex flex-col items-center gap-4 max-w-[100px] max-h-[146px]">
              <Image src={EthereumIcon} alt="" />
              <p className="font-['Sora'] font-semibold text-xl text-[#FFFFFF]">
                Ethereum
              </p>
            </div>
            <div className="flex justify-center items-center">
              <div className="box-border flex flex-row justify-center items-center py-[14px] px-5 gap-[10px] h-12 min-w-[120px] rounded-lg font-['Sora'] text-xs font-semibold">
                <div className="border-gradient p-[2px] h-12 w-full rounded-lg">
                  <div className=" h-full w-full bg-[#0E0C15] py-[14px] px-5 rounded-lg uppercase cursor-pointer	flex flex-row justify-center items-center">
                    launch app
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Avaiable;