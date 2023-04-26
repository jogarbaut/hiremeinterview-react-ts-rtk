import { SelectedPage } from "@/components/shared/types";
import { useEffect, useState } from "react";
import NavLink from "./NavLink";

type Props = {
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Navbar = ({ selectedPage, setSelectedPage }: Props) => {
  const [theme, setTheme] = useState<string>("");

  useEffect(() => {
    window.matchMedia("(prefers-color-scheme: dark)").matches
      ? setTheme("dark")
      : setTheme("light");
  }, []);

  useEffect(() => {
    theme === "dark"
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <nav>
      <div className="flex w-full items-center justify-between bg-white py-4 drop-shadow">
        <div className="mx-auto flex w-5/6 items-center justify-between">
          <div className="flex w-full items-center justify-between gap-16">

            <div className="flex w-full items-center justify-between">
            <h1>HireMe Mock Interview</h1>
              <div className="flex items-center justify-between gap-8 text-sm">

                <NavLink
                  path="/"
                  page="All Sets"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
                <NavLink
                  path="/about"
                  page="About"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
                {/* <NavLink
                  path="/settings"
                  page="Settings"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                /> */}
              </div>
              {/* <div>
                <button type="button" onClick={handleThemeSwitch}>
                  Dark Mode
                </button>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
