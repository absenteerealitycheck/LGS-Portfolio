"use client";
import React from "react";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@heroui/react";
import classnames from "classnames";
import { GiCancel, GiHamburgerMenu } from "react-icons/gi";

export default function PortfolioNavBar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const pages = ["Home", "About", "Experience", "Skills", "Contact"];

  const isInView = (element) => {
    // Return false if element doesn't exist
    if (!element) return false;

    // Get the bounding rectangle of the element
    const rect = element.getBoundingClientRect();

    // Get viewport dimensions
    const windowHeight =
      window.innerHeight || document.documentElement.clientHeight;
    const windowWidth =
      window.innerWidth || document.documentElement.clientWidth;

    // Calculate the visible area of the element
    const visibleHeight =
      Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0);
    const visibleWidth =
      Math.min(rect.right, windowWidth) - Math.max(rect.left, 0);

    // If the element is not visible at all, return false
    if (visibleHeight <= 0 || visibleWidth <= 0) return false;

    // Calculate total area and visible area
    const totalArea = rect.height * rect.width;
    const visibleArea = visibleHeight * visibleWidth;

    // Calculate the percentage of the element that is visible
    const visiblePercentage = (visibleArea / totalArea) * 100;

    // Return true if more than 20% is visible
    return visiblePercentage > 35;
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
    const timer = setInterval(() => spy(), 350);
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
          src="/NewLGSLogo.png"
          width="100px"
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
      <NavbarContent
        className="hidden sm:flex gap-6"
        justify="center"
        role="menubar"
      >
        {items.map((p, i) => {
          return (
            <NavbarItem
              role="menuitem"
              key={i}
              tabIndex={i}
              onClick={() => scrollTo(p.element)}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.keyCode === 13) {
                  scrollTo(p.element);
                }
              }}
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
