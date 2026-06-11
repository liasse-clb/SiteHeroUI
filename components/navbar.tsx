import { useState } from "react";
import { Button, Kbd, Link, TextField, InputGroup } from "@heroui/react";
import NextLink from "next/link";
import clsx from "clsx";

import { siteConfig } from "@/config/site";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-40 w-full border-b border-separator bg-background/70 backdrop-blur-lg">
      <header className="mx-auto flex h-16 max-w-[1280px] items-center justify-between gap-4 px-6">
        <div className="flex items-center gap-4">
          <NextLink className="flex items-center gap-1" href="/">
            <p translate="no" className="font-bold text-white">Nós. Sua Dias&#60;3</p>
          </NextLink>
        </div>

        <div className="hidden sm:flex items-center gap-2">
          
        </div>
      </header>

    </nav>
  );
};
