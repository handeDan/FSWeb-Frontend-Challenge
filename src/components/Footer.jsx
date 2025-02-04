import React, { useContext, useEffect } from "react";
import { LanguageContext } from "../context/LanguageContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Footer() {
  const { getText, language } = useContext(LanguageContext);

  const email = getText("email");
  // Mail adresini kopyalama fonksiyonu
  const copyEmailToClipboard = () => {
    navigator.clipboard
      .writeText(email)
      .then(() => {
        console.log("Toast Success:");
        if (language === "tr") {
          toast.success("Mail Kopyalandı!", { autoClose: 2000 });
        } else {
          toast.success("E-mail is copied!", { autoClose: 2000 });
        }
      })
      .catch(() => {
        if (language === "tr") {
          toast.error("Mail kopyalanamadı!", { autoClose: 2000 });
        } else {
          toast.error("E-mail could not be copied!", { autoClose: 2000 });
        }
      });
  };

  return (
    <div className="footerComponent bg-gray-100 dark:bg-neutral-950">
      <div className="container">
        <p className="text-2xl font-bold py-10 w-72 dark:text-slate-300 text-gray-800">
          {getText("footerTitle")}
        </p>
        <div className="flex justify-between items-center pb-16">
          <div className="flex ">
            <img src="/click_icon.png" alt="👉" className="mr-3" />
            <button
              onClick={copyEmailToClipboard}
              className="text-rose-800 dark:text-violet-300 underline"
            >
              {getText("email")}
            </button>
          </div>
          <div className="flex gap-5 justify-end dark:text-slate-300">
            <a href={getText("footer_link1")} target="_blank">
              {getText("footer_link1_text")}
            </a>
            <a
              href={getText("footer_link2")}
              target="_blank"
              className=" text-green-500 dark:text-green-300"
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
