'use client'
import Link from "next/link"
import Image from 'next/image';
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter()

  return (
    <nav className="fixed inset-x-0 top-0 z-50 bg-primary shadow-sm text-white">
      <div className="w-full max-w-7xl px-4 mx-auto">
        <div className="flex justify-between h-14 items-center">
          <Link href="#"
            prefetch={false}
            className="flex items-center hover:font-bold">
            {/* <svg
                className="h-6 w-6"
                xmlns="/public/logo.svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
              </svg> */}
            <Image
              src="/logo.svg"
              alt="Logo"
              width={200}
              height={100}
              className="object-fit"
            />
            {/* COMPANY */}
          </Link>
          <nav className="hidden md:flex gap-4">
            <Link
              href="#"
              className="font-medium flex items-center text-sm transition-colors hover:underline"
              prefetch={false}
            >
              Dashboard
            </Link>
            <Link
              href="#"
              className="font-medium flex items-center text-sm transition-colors hover:underline"
              prefetch={false}
            >
              Inventory
            </Link>
            <Link
              href="#"
              className="font-medium flex items-center text-sm transition-colors hover:underline"
              prefetch={false}
            >
              Sales
            </Link>
            <Link
              href="#"
              className="font-medium flex items-center text-sm transition-colors hover:underline"
              prefetch={false}
            >
              Menus
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button className="text-black" onClick={() => router.push('/auth/login')} variant="outline" size="sm">
              Login
            </Button>
            <Button size="sm" onClick={() => router.push('/auth/register')}>
              Sign up
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}