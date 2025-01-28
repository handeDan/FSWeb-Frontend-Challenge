import React, { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

function Header() {
  const { getText } = useContext(LanguageContext);

  // dile bağlı olarak getText'i her componentte shortcut'la çalıştırıyoruz:
  return (
    <div>
      <header>
        <div>
          <h1>{}</h1>
        </div>
        <nav>
          <ul>
            <li>{getText("skills")}</li>
            <li>{getText("projects")}</li>
            <li>{getText("profile")}</li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Header;
