import React from "react";
import { DerivableLogoMini, Ellipse } from "../icons";
import {
  Reddit,
  Medium,
  Linkedin,
  Youtube,
  TwitterMini,
  DiscordMini,
} from "../icons/socials";
import { Link } from "react-router-dom";

const Footer = () => {
  const iconsArr = [
    {
      icon: <TwitterMini />,
      link: "https://twitter.com/DerivableLabs",
    },
    {
      icon: <DiscordMini />,
      link: "https://discord.gg/BAuKQyVjJq",
    },
    {
      icon: <Reddit />,
      link: "forum",
    },
    {
      icon: <Medium />,
      link: "https://medium.com/@DerivableLabs",
    },
    {
      icon: <Linkedin />,
      link: "https://linkedin.com/company/derivablelabs/",
    },
    {
      icon: <Youtube />,
      link: "https://youtube.com/@DerivableLabs",
    },
  ];
  return (
    <>
      <div className="footer-border-top flex box-border flex-col justify-center items-center py-8 gap-4 w-full mt-[120px] bottom-0 min-h-[164px] z-[9999]">
        <div className="max-w-[133.71px] max-h-6">
          <DerivableLogoMini />
        </div>
        <div className="flex flex-row items-start gap-6 max-w-[264px]">
          {iconsArr.map((item, idx) => (
            <Link key={idx} to={item.link} target="_blank">
              <div className="max-w-6 max-h-6">{item.icon}</div>
            </Link>
          ))}
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-2 text-normal text-xs">
          <p>Terms and Conditions</p>
          <Ellipse />
          <p>Copyright © 2023 Derivable. All rights reserved</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
