import Link from "next/link";
import Image from "next/image";
import { RiFacebookFill, RiInstagramFill, RiLinkedinFill, RiTwitterXFill } from "react-icons/ri";
import { MdOutlineMailOutline, MdOutlinePhone } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="border-t border-stone-400/50 mt-auto flex flex-col gap-8 pt-8 px-4 pb-8 md:p-8">
      <div className="flex justify-between items-center px-12 gap-y-12 not-lg:flex-col">
        <div className="not-lg:ml-auto mr-auto">
          <h2>
            <Link href='/'>
              <Image src="/logo.png" alt="Quobotic Logo" width={150} height={70} />
            </Link>
          </h2>
        </div>
        <div className="not-md:w-full grid md:flex gap-12 not-md:*:text-center not-md:*:mx-auto not-sm:grid-cols-1 sm:not-md:grid-cols-2">
          <div>
            <h3 className="font-semibold mb-2">Company</h3>
            <ul className="flex flex-col gap-1 text-sm">
              <li>
                <Link href='/about' className="text-stone-400 hover:text-white transition-colors">About Us</Link>
              </li>
              <li>
                <Link href='/contact' className="text-stone-400 hover:text-white transition-colors">Contact Us</Link>
              </li>
              <li>
                <Link href='/blog' className="text-stone-400 hover:text-white transition-colors">Blog</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Address</h3>
            <Link href={process.env.NEXT_PUBLIC_CONTACT_ADDRESS_LINK!} className="text-stone-400 hover:text-white transition-colors" passHref>
              <ul className="flex flex-col text-sm">
                {
                  process.env.NEXT_PUBLIC_CONTACT_ADDRESS?.split(', ').map((line, index) => (
                    <li key={index}>{line}</li>
                  ))
                }
              </ul>
            </Link>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Contact</h3>
            <ul className="flex flex-col gap-1 text-sm not-md:items-center">
              <li>
                <Link href={`mailto:${process.env.NEXT_PUBLIC_CONTACT_EMAIL}`} className="flex items-center gap-1 text-stone-400 hover:text-white transition-colors" passHref>
                  <MdOutlineMailOutline className="sixe-[1.2em]" />
                  <span>{process.env.NEXT_PUBLIC_CONTACT_EMAIL}</span>
                </Link>
              </li>
              <li className="text-stone-400">
                <Link href={`tel:${process.env.NEXT_PUBLIC_CONTACT_PHONE_NUMBER}`} className="flex items-center gap-1 text-stone-400 hover:text-white transition-colors" passHref>
                  <MdOutlinePhone className="sixe-[1.2em]" />
                  <span>{process.env.NEXT_PUBLIC_CONTACT_PHONE_NUMBER}</span>
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Follow Us</h3>
            <ul className="flex flex-col gap-1 text-sm not-md:items-center">
              {
                process.env.NEXT_PUBLIC_CONTACT_FACEBOOK &&
                <li>
                  <Link href={`https://twitter.com/${process.env.NEXT_PUBLIC_CONTACT_FACEBOOK}`} className="flex items-center gap-0.5 text-stone-400 hover:text-[#1877F2] transition-colors" passHref>
                    <RiFacebookFill className="sixe-[1.2em]" />
                    <span>/</span>
                    <span>{process.env.NEXT_PUBLIC_CONTACT_FACEBOOK}</span>
                  </Link>
                </li>
              }
              {
                process.env.NEXT_PUBLIC_CONTACT_INSTAGRAM &&
                <li>
                  <Link href={`https://instagram.com/${process.env.NEXT_PUBLIC_CONTACT_INSTAGRAM}`} className="flex items-center gap-0.5 text-stone-400 hover:text-[#E1306C] transition-colors" passHref>
                    <RiInstagramFill className="sixe-[1.2em]" />
                    <span>/</span>
                    <span>{process.env.NEXT_PUBLIC_CONTACT_INSTAGRAM}</span>
                  </Link>
                </li>
              }
              {
                process.env.NEXT_PUBLIC_CONTACT_XTWITTER &&
                <li>
                  <Link href={`https://twitter.com/${process.env.NEXT_PUBLIC_CONTACT_XTWITTER}`} className="flex items-center gap-0.5 text-stone-400 hover:text-white transition-colors" passHref>
                    <RiTwitterXFill className="sixe-[1.2em]" />
                    <span>/</span>
                    <span>{process.env.NEXT_PUBLIC_CONTACT_XTWITTER}</span>
                  </Link>
                </li>
              }
              {
                process.env.NEXT_PUBLIC_CONTACT_LINKEDIN &&
                <li>
                  <Link href={`https://linkedin.com/company/${process.env.NEXT_PUBLIC_CONTACT_LINKEDIN}`} className="flex items-center gap-0.5 text-stone-400 hover:text-[#71b7fb] transition-colors" passHref>
                    <RiLinkedinFill className="sixe-[1.2em]" />
                    <span>/</span>
                    <span>{process.env.NEXT_PUBLIC_CONTACT_LINKEDIN}</span>
                  </Link>
                </li>
              }
            </ul>
          </div>
        </div>
      </div>
      <div className="not-sm:mb-20 border-t text-stone-400 border-stone-400/30 text-center text-xs pt-4 px-2 md:px-8 flex flex-col md:flex-row items-center justify-center md:justify-between gap-y-0.5 gap-x-8 md:gap-8">
        <p>
          Copyright &copy; 2025 Quobotic Consulting Pvt. Ltd. All rights reserved.
        </p>
        <div className="*:cursor-pointer flex gap-8 md:gap-4 *:hover:text-white *:transition-colors">
          <Link href='/privacy'>Privacy Policy</Link>
          <Link href='/terms'>Terms of Service</Link>
        </div>
      </div>
    </footer>
  )
}
