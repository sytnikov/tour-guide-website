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
        <div className={`z-[999] top-0 flex items-center justify-center w-full bg-white rounded-none`}>
          <div className="hidden md:flex flex-1 items-center justify-between px-4 py-2 max-w-[80rem]">
            <Image
              src={Logo}
              alt="Olga Korka logo"
              width={90}
              quality={100}
              priority
            />
            <nav className="">
              <ul className="flex items-center text-nowrap gap-4">
                {navLinks.map((link, index) => (
                  <li key={index} className="text-base text-black/70">
                    {link}
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
        <div className=" z-[999] top-0 flex md:hidden items-center justify-center w-full bg-white rounded-none">
          <Image
            src={Logo}
            alt="Olga Korka logo"
            width={70}
            quality={100}
            priority
            className="m-4"
          />
          <div className="flex flex-1 items-center justify-end m-4">
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
              <Popover.Panel className="absolute z-[2000] inset-x-0 top-0 origin-top-right transform transition md:hidden">
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
