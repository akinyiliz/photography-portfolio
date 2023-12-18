import React from "react";

import Image from "next/legacy/image";

import { FaInstagram } from "react-icons/fa";

const InstagramImg = ({ src, alt }) => {
  return (
    <div className="relative">
      <Image
        src={src}
        alt={alt}
        className="w-full h-full"
        layout="responsive"
      />
      {/* Overlay */}
      <div className="flex justify-center items-center absolute top-0 right-0 left-0 bottom-0 hover:bg-black/50 group">
        <p className="text-gray-300 hidden group-hover:block">
          <FaInstagram size={30} className="z-10" />
        </p>
      </div>
    </div>
  );
};

export default InstagramImg;
