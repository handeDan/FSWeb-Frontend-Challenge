import React, { useContext, useEffect } from "react";
import { LanguageContext } from "../context/LanguageContext";
import { FaHandPointRight } from "react-icons/fa6";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Footer() {
  const { getText } = useContext(LanguageContext);

  const email = getText("email");
  // Mail adresini kopyalama fonksiyonu
  const copyEmailToClipboard = () => {
    navigator.clipboard
      .writeText(email)
      .then(() => {
        console.error("Toast Success:");
        toast.success("Mail Kopyalandı!", {
          autoClose: 2000, // 2 saniye sonra kapanacak
        });
      })
      .catch(() => {
        toast.error("Mail kopyalanamadı!", {
          autoClose: 2000,
        });
      });
  };

  return (
    <div className="bg-gray-100 dark:bg-transparent">
      <div className="container">
        <p className="text-2xl font-bold py-10 w-72">
          {getText("footerTitle")}
        </p>
        <div className="flex justify-between items-center pb-16">
          <div className="flex ">
            <FaHandPointRight className="mr-3 text-xl text-amber-500 dark:text-white" />
            <button
              onClick={copyEmailToClipboard}
              className="text-rose-800 dark:text-indigo-500 underline"
            >
              {getText("email")}
            </button>
          </div>
          <div className="flex gap-5 justify-end">
            <a href={getText("footer_link1")} target="_blank">
              {getText("footer_link1_text")}
            </a>
            <a
              href={getText("footer_link2")}
              target="_blank"
              className=" text-green-600 dark:text-green-300"
            >
              {getText("footer_link2_text")}
            </a>
            <a
              href={getText("footer_link3")}
              target="_blank"
              className=" text-cyan-700 dark:text-cyan-300"
            >
              {getText("footer_link3_text")}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
