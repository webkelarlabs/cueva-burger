import { HeaderComp } from "./components/Header.js";
import { HeroComp } from "./components/Hero.js";
import { SpecialComp } from "./components/Specials.js";
import { MenuComp } from "./components/Menu.js";
import { HistoryComp } from "./components/History.js";
import ChatButton from "./components/ChatButton.js";
import { ButtonWhatsappComp } from "./components/ButtonWhatsapp.js";
import { SectionIAComp } from "./components/SectionIA.js";
import { VisitComp } from "./components/Visit.js";
import { FooterComp } from "./components/Footer.js";

export function AppComp() {
  return (
    <div>
      <HeaderComp />
      <HeroComp />
      <SpecialComp />
      <MenuComp />
      <HistoryComp />
      <SectionIAComp />
      <VisitComp />
      <ChatButton />
      <ButtonWhatsappComp />
      <FooterComp />
    </div>
  );
}
