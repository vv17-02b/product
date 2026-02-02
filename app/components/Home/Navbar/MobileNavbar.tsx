import { navLinks } from "@/app/constant/constant";
import Link from "next/link";
import React from "react";
import { CgClose } from "react-icons/cg";


type Props = {
  showNav: boolean
  closeNav: () => void
}

const MobileNavbar = ({ closeNav, showNav }: Props) => {
  const navOpen = showNav ? 'translate-x-0' : 'translate-x-[1000%]'
  return (
    <div>
      {/* overlay  */}
      <div className={`fixed ${navOpen} inset-0 transform transition-all duration-500 z-1002 w-full h-screen bg-black/70`}></div>
      {/* NavList  */}
      <div
        className={`
   fixed ${navOpen} flex flex-col justify-center h-full  text-white 
    w-[80%] sm:w-[60%]
    space-y-6 bg-blue-600
    z-1005
    shadow-[-10px_0_40px_rgba(255,255,255,0.7)]
  `}
      >
        {navLinks.map((link) => (
          <Link key={link.id} href={link.url} className="group">
            <p
              className="
    group relative w-fit ml-12 pb-2
    text-xl sm:text-[30px]
    bg-linear-to-r from-[#03eeda] via-white to-[#03eeda]
   bg-size-[200%_100%]
    bg-left
    bg-clip-text text-transparent
    transition-all duration-300
    group-hover:bg-right
    drop-shadow-[0_0_6px_rgba(3,238,218,0.6)]
  "
            >
              {link.label}

              {/* underline */}
              <span
                className="
      absolute left-0 -bottom-0.5 h-0.5 w-0
      bg-linear-to-r from-[#03eeda] bg-red-600
      transition-all duration-300
      group-hover:w-full
    "
              />
            </p>
          </Link>
        ))}
        {/* Close icon  */}
        <CgClose
          onClick={closeNav}
          className="absolute top-[0.7rem] right-[1.4rem]
  sm:w-8 sm:h-8 w-6 h-8 text-white z-10"
        />

      </div>

    </div>
  );
};

export default MobileNavbar;
