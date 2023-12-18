import React from "react";

import { AiOutlineClose, AiFillInstagram } from "react-icons/ai";
import { IoLogoWhatsapp, IoMail, IoLogoYoutube } from "react-icons/io5";

function Modal({ handleClose, show }) {
  const showHideClassName = show ? "modal displayBlock" : "modal displayNone";

  return (
    <div className={showHideClassName}>
      <div className="modalContent rounded-xl sm:my-[30%] sm:w-[60%] lg:my-[15%] lg:w-[40%]">
        <button onClick={handleClose} className="float-right m-4">
          <AiOutlineClose size={25} style={{ color: "#000000" }} />
        </button>
        <div className="mt-8 px-4 md:px-8">
          <p className="text-xl font-bold">Contact me:</p>
          <div>
            <div className="flex items-center py-1">
              <IoLogoWhatsapp size={30} style={{ color: "green" }} />
              <p className="px-2">+254 123 456 78</p>
            </div>
            <div className="flex items-center py-1">
              <AiFillInstagram size={30} style={{ color: "#c13584" }} />
              <p className="px-2">@creative_photos</p>
            </div>
            <div className="flex items-center py-1">
              <IoMail size={30} style={{ color: "#ea4335" }} />
              <p className="px-1">creativephotos@mail.com</p>
            </div>
            <div className="flex items-center py-1">
              <IoLogoYoutube size={30} style={{ color: "red" }} />
              <p className="px-2">creativephotos_official</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
