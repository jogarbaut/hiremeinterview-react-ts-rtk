import { Outlet, useOutletContext } from "react-router-dom"
import Navbar from "@/components/navbar"
import { SelectedPage } from "@/components/shared/types";
import { useState } from "react";
import Footer from "@/components/footer";

const Layout = () => {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.AllSets
  );
  
  return (
    <div className="flex flex-col h-screen">
      <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
      <div className="flex-grow">
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default Layout