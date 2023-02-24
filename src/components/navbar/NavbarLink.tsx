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
      className={`${selectedPage === page ? "text-red-600" : ""} transition duration-500 hover:text-purple-500`}
      onClick={() => setSelectedPage(page as SelectedPage)}
    >
      {page}
    </Link>
  )
}

export default NavbarLink