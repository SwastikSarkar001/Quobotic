'use client'

import Image from "next/image";
import Link from "next/link";
import { BiHome } from "react-icons/bi";
import { LuChevronDown } from "react-icons/lu";
import { PiBuilding } from "react-icons/pi";
import { AiOutlineProduct } from "react-icons/ai";
import { GrServices } from "react-icons/gr";
import { useState } from "react";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";

export default function Navbar() {
  const { scrollYProgress } = useScroll();
  const maxWidth = useTransform(scrollYProgress, [0, 0.15], [1280, 600]);
  const borderColor = useTransform(
    scrollYProgress,
    [0.1, 0.2], 
    ["transparent", "#a6a09b50"]
  );
  
  return (
    <header className="container mx-auto pointer-events-none fixed left-0 right-0 top-0 z-50 w-full px-2 py-4">
      <motion.nav
        style={{ 
          maxWidth,
          borderColor
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 30
        }}
        className="mx-auto backdrop-blur-lg border-2 pointer-events-auto flex w-full items-center justify-between gap-6 rounded-full px-4 py-1 transition-colors">
        <CompanyIcon />
        <CompanyNav />
        <CompanyOptions />
      </motion.nav>
    </header>
  )
}

function CompanyIcon() {
  return (
    <Link href="/" className="">
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
  const [active, setActive] = useState<number | null>(null)
  return (
    <ul className="flex not-sm:hidden">
      {
        navOptions.map((option, i) => (
          <Tab key={i} {...option} index={i} active={active} setActive={setActive} />
        ))
      }
    </ul>
  )
}

type NavOptions = {
  logo?: React.ReactNode,
  label: string,
  url: string,
  subOptions?: NavOptions[]
}

function Tab({
  label,
  url,
  subOptions,
  index,
  active,
  setActive
}: NavOptions & { index: number, active: number | null, setActive: (index: number | null) => void }) {
  return (
    <li>
      {
        subOptions ? (
          <div
            onMouseEnter={() => setActive(index)}
            onMouseLeave={() => setActive(null)}
            className="relative flex items-center gap-1.5 py-1 px-3"
          >
            <div>{ label }</div>
            { subOptions && <LuChevronDown /> }
            {
              active === index && subOptions && (
                <motion.ul className="bg-stone-900 absolute top-[115%] left-1/2 -translate-x-1/2 flex flex-col gap-2 bg-backdrop shadow backdrop-blur-md rounded-lg p-4">
                  {
                    subOptions.map((option, i) => (
                      <SubTab key={i} {...option} />
                    ))
                  }
                </motion.ul>
              )
            }
            {
              active === index && <Cursor />
            }
          </div>
        ) : (
          <Link
            onMouseEnter={() => setActive(index)}
            onMouseLeave={() => setActive(null)}
            href={ url } className="relative flex items-center gap-1.5 py-1 px-3"
          >
            <div>{ label }</div>
            {
              active === index && <Cursor />
            }
          </Link>

        )
      }
    </li>
  )
}

function SubTab({ label, url }: NavOptions) {
  return (
    <li>
      <Link href={ url }>{ label }</Link>
    </li>
  )
}

function Cursor() {
  return (
    <motion.div
      layoutId="hover-navbar"
      className="absolute inset-0 rounded-full py-2 -z-1 bg-primary/60"
    />
  )
}

function CompanyOptions() {
  const [openModal, setOpenModal] = useState(false)
  const toggler = () => setOpenModal(prev => !prev)
  return (
    <div>
      <motion.button
        layoutId="contact-us-modal"
        onClick={toggler}
        className="relative cursor-pointer hover:bg-secondary hover:text-black bg-primary text-seconbg-secondary transition-colors py-2 px-4 rounded-full"
      >
        Contact Us
      </motion.button>
      <AnimatePresence>
        {
          openModal && <ContactUsModal />
        }
      </AnimatePresence>
    </div>
  )
}

function ContactUsModal() {
  return (
    <motion.div
      layoutId='contact-us-modal'
      className="fixed flex"
    >

    </motion.div>
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