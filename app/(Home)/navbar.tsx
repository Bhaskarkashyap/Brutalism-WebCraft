'use client'

import { Poppins } from "next/font/google"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { MenuIcon } from "lucide-react"
import { NavbarSidebar } from "./navbar-sidebar"

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["700"]
})

interface NavbarItemProps{
    children: React.ReactNode;
    href: string;
    isActive?: boolean;
}


const NavbarItem = ({children, href, isActive} : NavbarItemProps) => {
    return(
        <Button 
        asChild
        variant="elevated"
        size={"lg"}
        className={cn("bg-transparent hover:bg-transparent  hover:border-primary  px-4  text-lg"
            , isActive && "bg-black text-white hover:bg-black hover:text-white"
        )}
        >
           <Link href={href}>
            {children}
           </Link>
        </Button>
    )
}


const navbarItems = [
    {href: "/", children: "Home"},
    {href: "/about", children: "About"},
    {href: '/pricing', children: "Pricing"}
]

export const Navbar = () => {
   
    const pathname = usePathname();
    const [IsSidebarOpen, setIsSidebarOpen] = useState(false)

    return(
        <nav className="h-20 flex border-b justify-between font-medium bg-white">
         <Link href="/" className="flex items-center">
         <span className={cn("pl-6 text-5xl font-semibold", poppins.className)}>
            MarketPlace
         </span>
         </Link>

             <NavbarSidebar open={IsSidebarOpen} onOpenChange={setIsSidebarOpen} items={navbarItems} />


         <div className="items-center gap-4 hidden lg:flex">
            {navbarItems.map(item => (
                <NavbarItem
                key={item.href}
                href={item.href}
                isActive= {pathname === item.href}
                >
                    {item.children}
                </NavbarItem>
            ))}
         </div>


         <div className="hidden lg:flex items-center gap-4 pr-6">
              <Button variant={"elevated"}>
                Sign In
              </Button>
              <Button variant={"elevated"} isfilled>
                Register
              </Button>
         </div>

         <div className="flex lg:hidden items-center justify-center pr-6">
          <Button 
          variant={"ghost"}
          className="size-12 border-transparent bg-white"
          onClick={() => setIsSidebarOpen(true)} 
          >
            <MenuIcon />
          </Button>
         </div>

        </nav>
    )
}