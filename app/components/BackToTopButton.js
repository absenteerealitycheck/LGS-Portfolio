"use client";
import { useRef } from "react";

export default function BackToTopButton() {
  const buttonRef = useRef(null);
  const scrollFunction = () => {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      buttonRef?.current?.classList?.remove("hidden");
    } else {
      buttonRef?.current?.classList.add("hidden");
    }
  };

  typeof window !== undefined &&
    window?.addEventListener("scroll", scrollFunction);

  return (
    <button
      tabIndex={10}
      ref={buttonRef}
      aria-label="Go Back To Top Button"
      role="button"
      onClick={() => {
        typeof window !== undefined &&
          window.scrollTo({ top: 0, behavior: "smooth" });
      }}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.keyCode === 13) {
          typeof window !== undefined &&
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
      }}
      type="button"
      className="!fixed bottom-5 end-5 hidden rounded-full bg-lime-400 p-3 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-violet-400 hover:shadow-lg focus:bg-violet-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-violet-600 active:shadow-lg"
      id="btn-back-to-top"
    >
      <span className="[&>svg]:w-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="3"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18"
          />
        </svg>
      </span>
    </button>
  );
}
