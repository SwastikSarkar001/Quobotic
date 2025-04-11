'use client'

import { PiBuilding, PiExamBold, PiSpinnerBold } from "react-icons/pi";
import { BiHome } from "react-icons/bi";
import { LuChevronDown } from "react-icons/lu";
import { BsDatabaseCheck, BsSend } from "react-icons/bs";
import { AiOutlineProduct } from "react-icons/ai";
import { GrServices, GrTechnology } from "react-icons/gr";
import { MdOutlineBusinessCenter } from "react-icons/md";
import { GoArrowUpRight } from "react-icons/go";
import { IoCloudUploadOutline } from "react-icons/io5";
import { LiaIndustrySolid, LiaRibbonSolid } from "react-icons/lia";

import Image from "next/image";
import Link from "next/link";
import { useActionState, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion, useScroll, useTransform, Variants } from "framer-motion";
import { useLenis } from "lenis/react";
import sendEmail from "@/actions/send-email";
import { emailFormType } from "@/types/types";
import { toast } from "sonner"

export default function Navbar() {
  const { scrollYProgress } = useScroll();
  const maxWidth = useTransform(scrollYProgress, [0, 0.15], [1280, 600]);
  const borderColor = useTransform(
    scrollYProgress,
    [0.1, 0.2], 
    ["transparent", "#a6a09b50"]
  );
  
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="container mx-auto pointer-events-none fixed left-0 right-0 top-0 z-50 w-full px-2 py-4"
    >
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
        className="mx-auto backdrop-blur-lg border-2 pointer-events-auto flex w-full items-center justify-between gap-6 rounded-full pl-4 pr-2 py-1 transition-colors"
      >
        <CompanyIcon />
        <CompanyNav />
        <CompanyOptions />
      </motion.nav>
    </motion.header>
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
      {
        logo: <MdOutlineBusinessCenter />,
        label: "eazzyBizz",
        description: "An all-in-one business management software for all enterprises.",
        url: "/products/eazzybizz"
      },
      {
        logo: <PiExamBold />,
        label: "eazzyPrep",
        description: "An online AI mock test platform for competitive examinations.",
        url: "/products/eazzyprep"
      },
      {
        logo: <LiaRibbonSolid />,
        label: "CureVision",
        description: "AI-enabled healthcare technology for breast cancer detection.",
        url: "https://curevision.quobotic.com/"
      },
    ]
  },
  {
    logo: <GrServices />,
    label: "Services",
    url: "/services",
    subOptions: [
      {
        logo: <BsDatabaseCheck />,
        label: "Database Support",
        description: "Our consultants, supporting different database systems with solutions for backups, performance issues & database design.",
        url: "/services/database"
      },
      {
        logo: <GrTechnology />,
        label: "IT Consulting",
        description: "Customised Web Based Software as per requirement, Software and Process Flow along with Software Maintenance.",
        url: "/services/consulting"
      },
      {
        logo: <IoCloudUploadOutline />,
        label: "Cloud Migration",
        description: "Migration of Existing Database from Baremetal to Oracle Cloud from hetrogeneous environment along with zero downtime.",
        url: "/services/migration"
      },
      {
        logo: <LiaIndustrySolid />,
        label: "IIoT and Industry 4.0",
        description: "Providing SaaS based solutions for Industry 4.0, Healthcare and Surveillance using IOT & AI for Last-mile Automation.",
        url: "/services/iiot"
      },
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
  description?: string,
  url: string,
  subOptions?: Omit<NavOptions, 'subOptions'>[]
}

type NavOptionsProps = NavOptions & {
  index: number,
  active: number | null,
  setActive: (index: number | null) => void
}

function Tab({
  label,
  url,
  subOptions,
  index,
  active,
  setActive
}: NavOptionsProps) {
  return (
    <li>
      {
        subOptions ? (
          <button
            onMouseEnter={() => setActive(index)}
            onMouseLeave={() => setActive(null)}
            className={`relative select-none flex items-center gap-1.5 py-1 px-3 cursor-pointer transition-colors ${active !== null ? active === index ? 'text-secondary' : 'text-stone-400' : 'text-secondary'}`}
          >
            <div>{ label }</div>
            { subOptions && <LuChevronDown className={`${active === index ? 'rotate-180' : 'rotate-0'} transition-transform`} /> }
            <AnimatePresence>
              {
                active === index && subOptions && <SubTabOptions subOptions={subOptions} url={url} />
              }
            </AnimatePresence>
            {
              active === index && <Cursor />
            }
            {
              active === index && <div className="absolute top-full inset-x-0 h-5 -z-10" />
            }
          </button>
        ) : (
          <Link
            onMouseEnter={() => setActive(index)}
            onMouseLeave={() => setActive(null)}
            href={ url }
            className={`relative select-none flex items-center gap-1.5 py-1 px-3 cursor-pointer transition-colors ${active !== null ? active === index ? 'text-secondary' : 'text-stone-400' : 'text-secondary'}`}
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

function SubTabOptions({ subOptions, url }: { subOptions: Omit<NavOptions, 'subOptions'>[], url: string }) {
  return (
    <motion.ul
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      className="cursor-auto bg-stone-900 text-secondary w-80 absolute top-[130%] left-1/2 -translate-x-1/2 flex flex-col bg-backdrop shadow backdrop-blur-md rounded-lg p-2 after:absolute after:bg-slate-900 after:size-2 after:left-1/2 after:-translate-x-1/2 after:-top-1 after:rotate-45 after:-z-1"
    >
      {
        subOptions.slice(0, 3).map((option, i) => (
          <SubTab key={i} {...option} />
        ))
      }
      <li className="text-xs px-2 text-left w-max mt-1">
        <Link href={url} className="flex gap-1 items-center text-border hover:text-secondary transition-colors">
          <div>Show more items</div>
          <GoArrowUpRight className="size-[1.2em]" />
        </Link>
      </li>
    </motion.ul>
  )
}

function SubTab({ label, url, description, logo }: Omit<NavOptions, 'subOptions'>) {
  return (
    <li>
      <Link target="_blank" href={ url } className="flex gap-2 text-sm text-left hover:bg-stone-700 transition-colors rounded p-2" passHref={url.includes('https://')}>
        <div className="*:size-[1.2em]">
          { logo }
        </div>
        <div className="flex flex-col grow gap-1">
          <div className="font-semibold">{ label }</div>
          {
            description &&
            <div className="text-xs text-stone-400 line-clamp-2">
              { description }
            </div>
          }
        </div>
      </Link>
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
  const modalRef = useRef<HTMLDivElement | null>(null)

  const handleClickOutside = (event: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      setOpenModal(false)
    }
  };

  const lenis = useLenis()
  useEffect(() => {
    if (openModal) {
      lenis?.stop()
      document.addEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "hidden";
    } else {
      lenis?.start()
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "";
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "";
    };
  }, [openModal, lenis]);
  
  return (
    <div>
      <button
        onClick={toggler}
        aria-labelledby="contact-us-heading"
        aria-describedby="contact-us-description"
        className="cursor-pointer hover:bg-secondary hover:text-black bg-primary text-seconbg-secondary transition-colors py-2 px-4 rounded-full"
      >
        <h1 id="contact-us-heading">Contact Us</h1>
      </button>
      <AnimatePresence>
        {
          openModal && <ContactUsModal toggler={toggler} ref={modalRef} />
        }
      </AnimatePresence>
    </div>
  )
}

function ContactUsModal({ toggler, ref }: {toggler: () => void, ref?: React.Ref<HTMLDivElement>}) {
  const variants: Variants = {
    initial: {
      opacity: 0,
      y: 20
    },
    animate: {
      opacity: 1,
      y: 0
    }
  }

  const initState: emailFormType = {}

  const [state, action, isPending] = useActionState(sendEmail, initState)

  useEffect(() => {
    if (!isPending && state.success !== undefined) {
      if (state.success) {
        toggler()
        toast.success('Email sent successfully! Thank you for contacting us.')
      } else {
        if (state.error) {
          if (state.error.name) {
            toast.error(state.error.name)
          }
          else if (state.error.email) {
            toast.error(state.error.email)
          }
          else if (state.error.subject) {
            toast.error(state.error.subject)
          }
          else if (state.error.message) {
            toast.error(state.error.message)
          }
          else {
            toast.error('Failed to send email. Please try again later.')
          }
        }
      }
    }
  }, [isPending, state, toggler]);

  return createPortal(
    <>
      <motion.div
        ref={ref}
        variants={variants}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.5 }}
        className="fixed z-111 top-1/2 left-1/2 -translate-1/2 flex w-full max-w-120 bg-stone-900 rounded-lg shadow-lg backdrop-blur-md border-2 border-border/30"
      >
        <button
          onClick={toggler}
          aria-label="Close"
          className="absolute top-5 right-5 cursor-pointer ring-2 px-1.5 rounded-full text-stone-400 hover:text-stone-200 transition-colors"
        >
          ✖
        </button>
        <div className="flex flex-col gap-2 items-center w-full h-full rounded-lg shadow-lg">
          <motion.h2 initial='initial' animate='animate' id='contact-us-heading' className="text-3xl font-semibold mt-5 font-heading tracking-wide">Contact Us</motion.h2>
            <p id='contact-us-description' className="text-center text-stone-400 px-6 text-sm">
              Have questions or need assistance? Drop us a message and our team will get back to you as soon as possible. We&apos;re here to help!
            </p>
          <form action={action} className="flex flex-col items-center w-full gap-2 mt-2 mb-5">
            <input
              type="text"
              name='name'
              placeholder="Your Name"
              className="w-[90%] sm:w-4/5 p-2 rounded-lg border-2 border-border/50 bg-backdrop transition-colors disabled:cursor-not-allowed"
              required
            />
            <input
              type="email"
              name='email'
              placeholder="Your Email"
              className="w-[90%] sm:w-4/5 p-2 rounded-lg border-2 border-border/50 bg-backdrop transition-colors disabled:cursor-not-allowed"
              required
            />
            <input
              type="text"
              name='subject'
              placeholder="Subject"
              className="w-[90%] sm:w-4/5 p-2 rounded-lg border-2 border-border/50 bg-backdrop transition-colors disabled:cursor-not-allowed"
              required
            />
            <textarea
              name='message'
              placeholder="Your Message"
              className="w-[90%] sm:w-4/5 p-2 rounded-lg border-2 border-border/50 bg-backdrop resize-none transition-colors disabled:cursor-not-allowed"
              rows={4}
              required
            />
            <button
              type="submit"
              disabled={isPending}
              className="cursor-pointer disabled:grayscale disabled:cursor-not-allowed select-none transition-all bg-primary not-disabled:hover:bg-secondary text-secondary not-disabled:hover:text-black flex gap-2 items-center mt-2 text-seconbg-secondary py-2 px-4 rounded-full"
            >
              {
                isPending ?
                <><PiSpinnerBold className="size-[1.15em] animate-spin" /><div>Sending email...</div></> :
                <><BsSend className="size-[1.15em]" /><div>Send Message</div></>
              }
            </button>
          </form>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/40 z-110 backdrop-blur-xs"
      />
    </>,
    document.body
  )
}

export function MobileNavbar() {
  const [active, setActive] = useState<number | null>(null)
  return (
    <nav className="flex items-center justify-center fixed z-500 bottom-0 left-0 right-0 w-full sm:hidden">
      <ul className="flex w-full justify-evenly rounded-t-3xl border-t border-border/30 bg-backdrop shadow backdrop-blur-md">
        {
          navOptions.map((option, i) => (
            <MobileTab key={i} {...option} index={i} active={active} setActive={setActive} />
          ))
        }
      </ul>
    </nav>
  )
}

function MobileTab({
  logo,
  label,
  url,
  subOptions,
  index,
  active,
  setActive
}: NavOptionsProps) {
  return (
    <li className="text-sm">
      {
        subOptions ? (
            <button
              onMouseEnter={() => setActive(index)}
              onMouseLeave={() => setActive(null)}
              className={`relative cursor-pointer flex items-center flex-col gap-1 py-4 *:first:size-[1.5em] transition-colors ${active !== null ? active === index ? 'text-secondary' : 'text-stone-400' : 'text-secondary'}`}
            >
            {logo}
            <div>{label}</div>
            <AnimatePresence>
              {
                active === index && subOptions && <MobileSubTabOptions subOptions={subOptions} url={url} />
              }
            </AnimatePresence>
            </button>
        ) : (
          <Link
            onMouseEnter={() => setActive(index)}
            onMouseLeave={() => setActive(null)}
            href={url}
            className={`relative cursor-pointer flex items-center flex-col gap-1 py-4 *:first:size-[1.5em] transition-colors ${active !== null ? active === index ? 'text-secondary' : 'text-stone-400' : 'text-secondary'}`}
          >
            { logo }
            <div>{ label }</div>
          </Link>
        )
      }
    </li>
  )
}

function MobileSubTabOptions({ subOptions, url }: { subOptions: Omit<NavOptions, 'subOptions'>[], url: string }) {
  return (
    <motion.ul
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      className="z-500 cursor-auto bg-stone-900 text-secondary w-[90%] fixed bottom-[120%] left-1/2 -translate-x-1/2 flex flex-col bg-backdrop shadow backdrop-blur-md rounded-lg p-2"
    >
      {
        subOptions.slice(0, 3).map((option, i) => (
          <SubTab key={i} {...option} />
        ))
      }
      <li className="text-xs px-2 text-left w-max mt-1">
        <Link href={url} className="flex gap-1 items-center text-border hover:text-secondary transition-colors">
          <div>Show more items</div>
          <GoArrowUpRight className="size-[1.2em]" />
        </Link>
      </li>
    </motion.ul>
  )
}