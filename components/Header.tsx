"use client";

import Image from "next/image";
import { FaRegImage } from "react-icons/fa";
import { Fragment, useState } from "react";
import { Popover, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

import { navLinks } from "@/lib/data";
import Logo from "@/public/logo.png";
import SocialMediaLinksMobile from "./SocialMediaLinksMobile";
import { Button } from "./ui/button";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenPopover = () => {
    setIsOpen(true);
  };

  const handleClosePopover = () => {
    setIsOpen(false);
  };

  return (
    <header>
      <Popover>
        <div className="hidden lg:flex items-center h-[6rem] mb-4 py-10 px-10 fixed z-[999] top-0 left-1/2 -translate-x-1/2 rounded-none bg-[transparent] bg-opacity-70 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:h-[3.25rem] sm:w-[100%]">
          <Image
            src={Logo}
            alt="Olga Korka logo"
            width={90}
            quality={100}
            priority
            className="p-2"
          />
          <nav className="flex fixed top-[0.15rem] left-1/2 -translate-x-1/2 h-12 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
            <ul className="flex items-center text-nowrap gap-4">
              {navLinks.map((link, index) => (
                <li key={index} className="text-base text-black/70">
                  {link}
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="flex lg:hidden w-full bg-[#FBD9C1]">
          <Image
            src={Logo}
            alt="Olga Korka logo"
            width={70}
            quality={100}
            priority
            className="m-4"
          />
          <div className="flex grow items-center justify-end m-4">
            <Popover.Button
              onClick={handleOpenPopover}
              className="inline-flex items-center justify-center rounded-md text-black"
            >
              <span className="sr-only">Open menu</span>
              <Bars3Icon className="h-8 w-8" aria-hidden="true" />
            </Popover.Button>
          </div>

          {isOpen && (
            <Transition
              as={Fragment}
              enter="duration-200 ease-out"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="duration-100 ease-in"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Popover.Panel className="absolute z-[1000] inset-x-0 top-0 origin-top-right transform transition md:hidden">
                <div className=" bg-[#FBD9C1] shadow-lg ring-1 ring-black ring-opacity-5 divide-y-2 divide-gray-50 min-h-screen">
                  <div className="mx-4">
                    <div className="flex">
                      <Image
                        src={Logo}
                        alt="Olga Korka logo"
                        width={70}
                        quality={100}
                        priority
                        className="my-4"
                      />
                      <div className="flex grow items-center justify-end my-4">
                        
                          <Popover.Button onClick={handleClosePopover} className="inline-flex items-center rounded-md text-black">
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon className="h-8 w-8" aria-hidden="true" />
                          </Popover.Button>
                        
                      </div>
                    </div>

                    <div className="mt-6 mb-12">
                      <ul className="flex flex-col items-start gap-y-8 text-xl">
                        {navLinks.map((link, index) => (
                          <li key={index}>{link}</li>
                        ))}
                      </ul>
                    </div>
                    <Button size={"lg"} className="mb-28">
                      Задать вопрос
                      <FaRegImage />
                    </Button>
                    <SocialMediaLinksMobile />
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          )}
        </div>
      </Popover>
    </header>
  );
}
