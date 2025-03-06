"use client";
import React from "react";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@heroui/react";
import { GiHamburgerMenu, GiCancel } from "react-icons/gi";
import classnames from "classnames";

export default function PortfolioNavBar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const pages = ["Home", "About", "Experience", "Skills", "Contact"];

  const isInView = (element) => {
    const rect = element.getBoundingClientRect();
    return rect.top >= -40 && rect.bottom <= window?.innerHeight;
  };

  const scrollTo = (elem) =>
    elem.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });

  const [items, setItems] = React.useState([]);
  const spy = () => {
    const newItems = pages.map((id) => {
      const element =
        typeof window !== "undefined" && document?.getElementById(id);

      if (element) {
        return {
          inView: isInView(element),
          element,
          page: id,
        };
      } else {
        return { page: id };
      }
    });
    setItems(newItems);
  };

  React.useEffect(() => {
    const timer = setInterval(() => spy(), 1000);
    return () => clearInterval(timer);
  });

  return (
    <Navbar
      id="portfolio-nav"
      className="sticky top-0 bg-black text-white py-4 z-50"
      position="sticky"
      onMenuOpenChange={setIsMenuOpen}
      isMenuOpen={isMenuOpen}
    >
      <NavbarBrand className="w-full">
        <img
          src="/LGSlogo-purple.png"
          width="200px"
          height="auto"
          alt="LGS Personal Logo"
        />
      </NavbarBrand>
      {/** Mobile Nav Items Begin */}
      <NavbarMenu
        className="bg-black text-white z-90 w-full center-content text-center fixed"
        portalContainer={
          typeof window !== "undefined" &&
          document?.getElementById("nav-container")
        }
      >
        {items.map((item, index) => (
          <NavbarMenuItem
            key={`${item.page}-${index}`}
            className="w-full bg-black py-2 cursor-pointer hover:font-bold hover:underline hover:decoration-lime-400 hover:underline-offset-4 hover:decoration-2"
            onClick={() => {
              scrollTo(item.element);
              setIsMenuOpen(false);
            }}
          >
            {item.page}
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
      {/** Mobile Nav Items Begin */}
      {/** Full-size Nav Items Begin */}
      <NavbarContent className="hidden sm:flex gap-6" justify="center">
        {items.map((p, i) => {
          return (
            <NavbarItem
              key={i}
              onClick={() => scrollTo(p.element)}
              className={classnames(
                "flex",
                "w4",
                "h2",
                "items-center",
                "justify-center",
                "cursor-pointer",
                "hover:font-bold",
                "hover:underline",
                "hover: decoration-2",
                "hover:underline-offset-4",
                "hover:decoration-violet-400",

                {
                  "font-bold underline decoration-4 decoration-lime-400 underline-offset-4":
                    p.inView,
                }
              )}
            >
              {p.page}
            </NavbarItem>
          );
        })}
      </NavbarContent>
      {/** Full-size Nav Items Begin */}
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle
          icon={isMenuOpen ? <GiCancel /> : <GiHamburgerMenu />}
          srOnlyText=" "
        />
      </NavbarContent>
    </Navbar>
  );
}
