import { HeaderComp } from "./components/Header";
import { HeroComp } from "./components/Hero";
import { SpecialComp } from "./components/Specials";
import { MenuComp } from "./components/Menu";
import { HistoryComp } from "./components/History";
import ChatButton from "./components/ChatButton";
import { ButtonWhatsappComp } from "./components/ButtonWhatsapp";
import { SectionIAComp } from "./components/SectionIA";
import { VisitComp } from "./components/Visit";
import { FooterComp } from "./components/Footer";
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
