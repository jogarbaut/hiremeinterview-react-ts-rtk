import { Outlet } from "react-router-dom"
import Navbar from "@/components/navbar"
import { SelectedPage } from "@/components/shared/types";
import { useState } from "react";
import Footer from "@/components/footer";

const Layout = () => {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home
  );
  
  return (
    <>
      <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
      <Outlet />
      <Footer />
    </>
  )
}

export default Layout