import React from 'react'
import { SelectedPage } from '@/components/shared/types'

type Props = {
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
}

const Navbar = ({ selectedPage, setSelectedPage }: Props) => {
  return (
    <div>Navbar</div>
  )
}

export default Navbar