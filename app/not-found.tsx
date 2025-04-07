import { TbError404 } from "react-icons/tb";

export default function NotFound() {
  return (
    <main className="h-screen relative grid place-content-center">
      <div className="absolute -z-1 inset-0 flex items-center justify-center opacity-30">
        <TbError404 className="size-full text-primary" />
      </div>
      <div className="flex items-center flex-col justify-center">
        <h1 className="text-3xl sm:text-5xl font-bold font-heading tracking-wider mb-2 sm:mb-4">Page Not Found</h1>
        <p className="text-sm sm:text-lg text-stone-400">The page you are looking for does not exist.</p>
      </div>
    </main>
  )
}
