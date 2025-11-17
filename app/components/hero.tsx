"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Hero = () => {
  const pathname = usePathname();

  // Fonction utilitaire : renvoie la bonne couleur
  const getColor = (isActive: boolean) =>
    isActive ? "#251e14" : "#4a4132";

  return (
    <div className="relative w-full ">
      
      {/* Image de fond */}
      <img 
        src="/header.svg" 
        alt="header" 
        className="w-full h-full object-cover"
      />

      {/* Navbar */}
      <div className="absolute inset-0 mt-10">
      <nav className="flex justify-center items-start">
        <ul className="flex gap-16 text-2xl font-semibold">

          {/* HOME */}
          <li>
            <a
              href="/"
              style={{ color: getColor(pathname === "/") }}
              className="transition-colors"
            >
              Home
            </a>
          </li>

          {/* DEPARTEMENT (section dans home) */}
          <li>
            <a
              href="/#departement"
              style={{ color: getColor(pathname === "/" && global?.location?.hash === "#departement") }}
              className="transition-colors"
            >
              Departement
            </a>
          </li>

          {/* REGISTER (autre page) */}
          <li>
            <Link
              href="/register"
              style={{ color: getColor(pathname === "/register") }}
              className="transition-colors"
            >
              Register
            </Link>
          </li>

          {/* CONTACT (section dans home) */}
          <li>
            <a
              href="/#contact"
              style={{ color: getColor(pathname === "/" && global?.location?.hash === "#contact") }}
              className="transition-colors"
            >
              Contact
            </a>
          </li>

        </ul>
      </nav>
      {pathname !== "/register" && (
        <div className="text-center flex-col flex justify-center items-center mt-20">
          <h1 className="text-7xl text-[#2F3729] magic-school">
            The Call for New Wizards Begins!
          </h1>
          <p className="text-2xl mt-6 max-w-2xl text-center text-[#2F3729]">
            Step into a world where technology meets magic
            <br />
            Our mission to share knowledge, spark creativity, and bring students together through open source and scientific events.
          </p>
        </div>
      )}
      </div>
    </div>
  );
};

export default Hero;
