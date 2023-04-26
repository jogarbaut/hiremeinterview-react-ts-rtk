import React from 'react'

type Props = {}

const Footer = (props: Props) => {
  const today = new Date()

  return (
    <footer className="w-full bg-white py-16">
      <div className="w-5/6 mx-auto max-w-5xl text-center">
      Copyright &copy; {today.getFullYear()} Jomel Bautista
      </div>
    </footer>
  )
}

export default Footer