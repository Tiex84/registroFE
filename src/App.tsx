import { useState } from "react"
import NavbarLayout from "./layout/navbar/NavbarLayout"
import SidebarLayout from "./layout/sidebar/SidebarLayout"
import MainLayout from "./layout/main/MainLayout";

function App() {

  const [isOpen, setIsOpen] = useState<boolean>(true);

  const handleClose = () => {    
    setIsOpen(false);
  }

  console.log(window.innerWidth);
  

  return (
    <>
      <NavbarLayout toggleSidebar={() => setIsOpen(!isOpen)}  />
      <SidebarLayout isOpen={isOpen} handleClose={handleClose} />
      <MainLayout isOpen={isOpen}/>
    </>
  )
}

export default App
