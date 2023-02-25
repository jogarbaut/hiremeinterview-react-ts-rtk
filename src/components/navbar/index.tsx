import { SelectedPage } from '@/components/shared/types'
import NavbarLink from './NavbarLink';

type Props = {
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
}

const Navbar = ({ selectedPage, setSelectedPage }: Props) => {
  return (
    <nav>
      <div className="bg-white drop-shadow flex w-full items-center justify-between py-4">
        <div className="mx-auto flex w-5/6 items-center justify-between">
          <div className="flex w-full items-center justify-between gap-16">
            <div className="flex w-full items-center justify-between">
              <div className="flex items-center justify-between gap-8 text-sm">
                <NavbarLink 
                  path="/"
                  page="Home"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
                {/* <NavbarLink 
                  path="/mock-interview"
                  page="Mock Interview"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                /> */}
                <NavbarLink 
                  path="/fields"
                  page="Fields"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
                <NavbarLink 
                  path="/about"
                  page="About"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
                {/* <NavbarLink 
                  path="/favorited"
                  page="Favorited"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
                <NavbarLink 
                  path="/settings"
                  page="Settings"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar