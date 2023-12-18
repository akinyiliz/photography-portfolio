import React from "react";

import Image from "next/legacy/image";

import Photo1 from "../public/images/photo-1.jpg";
import Photo2 from "../public/images/photo-2.jpg";
import Photo3 from "../public/images/photo-3.avif";
import Photo4 from "../public/images/photo-4.jpeg";
import Photo5 from "../public/images/photo-5.avif";
import Photo6 from "../public/images/photo-6.jpg";
import Photo7 from "../public/images/photo-7.jpg";
import Photo8 from "../public/images/photo-8.jpg";

const Portfolio = () => {
  return (
    <div className="max-w-[1240px] mx-auto text-center py-8">
      <h1 className="text-4xl font-bold p-4">Photos</h1>
      <div className="grid grid-rows-none p-4 md:grid-cols-5 gap-4">
        <div className="w-full h-full col-span-2 row-span-2 md:col-span-3">
          <Image
            src={Photo1}
            alt="Man Smiling"
            layout="responsive"
            width="677"
            height="451"
          />
        </div>

        <div className="w-full h-full">
          <Image
            src={Photo2}
            alt="Nature"
            width="215"
            height="217"
            layout="responsive"
            style={{ objectFit: "cover" }}
          />
        </div>

        <div className="w-full h-full">
          <Image
            src={Photo3}
            alt="Nature"
            width="215"
            height="217"
            layout="responsive"
            style={{ objectFit: "cover" }}
          />
        </div>

        <div className="w-full h-full">
          <Image
            src={Photo4}
            alt="Nature"
            width="215"
            height="217"
            layout="responsive"
            style={{ objectFit: "cover" }}
          />
        </div>

        <div className="w-full h-full">
          <Image
            src={Photo5}
            alt="Nature"
            width="215"
            height="217"
            layout="responsive"
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>

      <div className="flex p-4 gap-4">
        <div className="w-full relative">
          <Image
            src={Photo6}
            alt="Lady"
            width="215"
            height="300"
            layout="responsive"
            style={{ objectFit: "cover" }}
            className="absolute"
          />
        </div>

        <div className="w-full h-full">
          <Image
            src={Photo7}
            alt="Man with glasses holding his shirt collar"
            width="215"
            height="300"
            layout="responsive"
            style={{ objectFit: "cover" }}
          />
        </div>

        <div className="w-full h-full relative">
          <Image
            src={Photo8}
            alt="Lady siting on a chair"
            width="215"
            height="300"
            layout="responsive"
            style={{ objectFit: "cover" }}
            className="absolute"
          />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
