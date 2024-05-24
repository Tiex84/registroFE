import React from 'react'
import { Drawer, Sidebar, TextInput } from "flowbite-react";
import {
  HiChartPie,
  HiCollection,
  HiOutlinePuzzle,
  HiOutlineOfficeBuilding,
  HiSearch,
  HiUsers,
} from "react-icons/hi";
import { ProtectedRoute } from '../../services/authGuard';

interface SidebarLayoutProps {
    isOpen: boolean;
    handleClose: () => void
}

const SidebarLayout: React.FC<SidebarLayoutProps> = ({
    isOpen,
    handleClose
}) => {
  return (

    <Drawer className='top-15 border-r h-screen border-gray-200' backdrop={false} open={isOpen} onClose={handleClose}>
    <Drawer.Header title="MENU" titleIcon={() => <></>} />
    <Drawer.Items>
      <Sidebar
        aria-label="Sidebar with multi-level dropdown example"
        className="[&>div]:bg-transparent [&>div]:p-0"
      >
        <div className="flex h-full flex-col justify-between py-2">
          <div>
            <form className="pb-3 md:hidden">
              <TextInput icon={HiSearch} type="search" placeholder="Search" required size={32} />
            </form>
            <Sidebar.Items>
              <Sidebar.ItemGroup>
                <Sidebar.Item href="/" icon={HiChartPie}>
                  Dashboard
                </Sidebar.Item>
                <Sidebar.Item href="/classrooms" icon={HiOutlineOfficeBuilding}>
                  Aule
                </Sidebar.Item>
                <Sidebar.Item href="/subjects" icon={HiCollection}>
                  Materie
                </Sidebar.Item>
                <Sidebar.Item href="/users" icon={HiUsers}>
                  Utenti
                </Sidebar.Item>
              </Sidebar.ItemGroup>
              <Sidebar.ItemGroup>
                { false &&
                  <Sidebar.Item href="/settings" icon={HiOutlinePuzzle}>
                    Settings
                  </Sidebar.Item>
                }
              </Sidebar.ItemGroup>
            </Sidebar.Items>
          </div>
        </div>
      </Sidebar>
    </Drawer.Items>
   </Drawer>
  )
}

export default SidebarLayout