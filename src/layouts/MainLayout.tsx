import { Outlet } from 'react-router-dom';
import Navbar from '@/components/navbar';
import { SelectedPage } from '@/components/shared/types';
import { useState } from 'react';
import Footer from '@/components/footer';

// Type definition for MainLayout props
type MainLayoutProps = {};

// Main layout component wrapping Navbar, page content, and Footer

const Layout = ({}: MainLayoutProps) => {
    // Local state tracking currently selected page in the Navbar
    const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.AllSets);

    return (
        <div className="flex h-screen flex-col">
            <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
            <div className="flex-grow">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Layout;
