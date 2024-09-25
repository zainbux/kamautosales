import Link from "next/link";
import { Sheet, SheetTrigger, SheetContent, SheetClose } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { MenuIcon, MountainIcon, XIcon } from "lucide-react";
import Image from "next/image";

export default function Nav() {
  return (
    <header className="fixed top-0 z-50 w-full bg-background  bg-gray-900">
      <div className="container flex items-center justify-between px-4 md:px-6">
        
        <Link href="/" className="flex items-center gap-2" prefetch={false}>
          <div className="text-center px-5 py-5">
              <h1 className="text-white text-3xl font-bold">KAM</h1>
              <h1 className="text-white text-xl font-bold">AUTO SALES</h1>          
          </div>


        </Link>
        
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">


          <Link href="/workwithus" className="text-secondary hover:text-white" prefetch={false}>
            Our Services
          </Link>
          <Link href="/referralprogram" className="text-secondary hover:text-white" prefetch={false}>
            Referral Program
          </Link>
        </nav>

      </div>
    </header>
  );
}
