import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-stone-400/50 mt-auto flex flex-col gap-8 pt-8 px-4 pb-8 md:p-8">
      <div className="flex gap-8">
        <div>

        </div>
        <div>
          <h2>Contact Info</h2>
          
        </div>
        <div>
          
        </div>
        <div>

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
