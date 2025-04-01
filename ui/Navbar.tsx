'use client'

import Image from "next/image";
import Link from "next/link";
import { BiHome } from "react-icons/bi";
import { LuChevronDown } from "react-icons/lu";
import { PiBuilding } from "react-icons/pi";
import { AiOutlineProduct } from "react-icons/ai";
import { GrServices } from "react-icons/gr";

export default function Navbar() {

  return (
    <header className="container pointer-events-none fixed left-0 right-0 top-0 z-50 w-full px-0 py-4">
      <nav className="max-screen pointer-events-auto flex w-full items-center justify-between gap-6 rounded-full px-6 py-1 transition-colors sm:pr-4">
        <CompanyIcon />
        <CompanyNav />
        <CompanyOptions />
      </nav>
    </header>
  )
}

function CompanyIcon() {
  return (
    <Link href="/" className="ml-4">
      <Image
        src="/logo-only.png"
        alt="Quobotic Consulting"
        width={50}
        height={30}
        loading="eager"
      />
    </Link>
  )
}

const navOptions: NavOptions[] = [
  {
    logo: <BiHome />,
    label: "Home",
    url: "/",
  },
  {
    logo: <PiBuilding />,
    label: "About",
    url: "/about",
  },
  {
    logo: <AiOutlineProduct />,
    label: "Products",
    url: "/products",
    subOptions: [
      { label: "Web Development", url: "/products/web-development" },
      { label: "Mobile Development", url: "/products/mobile-development" },
      { label: "Custom Software", url: "/products/custom-software" },
    ]
  },
  {
    logo: <GrServices />,
    label: "Services",
    url: "/services",
    subOptions: [
      { label: "Consulting", url: "/services/consulting" },
      { label: "Development", url: "/services/development" },
      { label: "Maintenance", url: "/services/maintenance" },
    ]
  }
]

function CompanyNav() {
  return (
    <ul className="flex gap-8 not-sm:hidden">
      {
        navOptions.map((option, i) => (
          <Tab key={i} {...option} />
        ))
      }
      <Cursor />
    </ul>
  )
}

type NavOptions = {
  logo?: React.ReactNode,
  label: string,
  url: string,
  subOptions?: NavOptions[]
}

function Tab({ logo, label, url, subOptions }: NavOptions) {
  return (
    <li>
      <Link href={ url } className="relative flex items-center gap-1.5 py-2">
        { logo }
        <div>{ label }</div>
        { subOptions && <LuChevronDown /> }
      </Link>
    </li>
  )
}

function Cursor() {
  return (
    <li className="absolute flex items-center gap-1.5 py-2" />
  )
}

function CompanyOptions() {
  return (
    <div>
      <button className="cursor-pointer hover:bg-secondary hover:text-black bg-primary text-seconbg-secondary transition-colors py-2 px-4 rounded-full">
        Contact Us
      </button>
    </div>
  )
}

export function MobileNavbar() {
  return (
    <nav className="flex items-center justify-center fixed bottom-0 left-0 right-0 z-50 w-full sm:hidden">
      <ul className="group/mobile *:group-hover/mobile:not-hover:text-border *:transition-colors flex w-full justify-evenly rounded-t-3xl border-t border-border/30 bg-backdrop shadow backdrop-blur-md">
        {
          navOptions.map((option, i) => (
            <MobileTab key={i} {...option} />
          ))
        }
      </ul>
    </nav>
  )
}

function MobileTab({ logo, label, url, subOptions }: NavOptions) {
  return (
    <li className="">
      <Link href={url} className="flex items-center gap-2">
        <div className="flex flex-col items-center py-4 gap-1 *:first:size-[1.3em]">
          { logo }
          <div>
            { label }
          </div>
        </div>
        {
          subOptions && <LuChevronDown />
        }
      </Link>
    </li>
  )
}