import { SelectedPage } from '@/components/shared/types';
import { Link } from 'react-router-dom';

type Props = {
  path: string;
  page: string;
  selectedPage: SelectedPage
  setSelectedPage: (value: SelectedPage) => void
}

const NavbarLink = ({ path, page, selectedPage, setSelectedPage }: Props) => {
  return (
    <Link 
      to={path}
      className={`${selectedPage === page ? "border-b-2 border-b-indigo-900" : ""} transition duration-200 hover:border-b-indigo-900 hover:border-b-2 border-2 border-transparent`}
      onClick={() => setSelectedPage(page as SelectedPage)}
    >
      {page}
    </Link>
  )
}

export default NavbarLink