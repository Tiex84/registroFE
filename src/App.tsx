import { useState } from "react"
import NavbarLayout from "./layout/navbar/NavbarLayout"
import SidebarLayout from "./layout/sidebar/SidebarLayout"
import MainLayout from "./layout/main/MainLayout";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import it from "./i18n/it.json";
import en from "./i18n/en.json";
import fr from "./i18n/fr.json";
import de from "./i18n/de.json";

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      gb: en,
      it: it,
      fr: fr,
      de: de
    },
    lng: "it", // if you're using a language detector, do not define the lng option
    fallbackLng: "gb",

    interpolation: {
      escapeValue: false // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    }
  });


function App() {

  const [isOpen, setIsOpen] = useState<boolean>(true);

  const handleClose = () => {    
    setIsOpen(false);
  }
  return (
    <>
      <NavbarLayout toggleSidebar={() => setIsOpen(!isOpen)}  />
      <SidebarLayout isOpen={isOpen} handleClose={handleClose} />
      <MainLayout isOpen={isOpen}/>
      <ToastContainer />
    </>
  )
}

export default App
