"use client";
export default function ResumeDownloadButton() {
  return (
    <div className="flex flex-row justify-center mt-6">
      <a
        tabIndex={5}
        className="mt-4 bg-lime-400 p-4 rounded-lg font-bold text-slate-900 hover:font-extrabold hover:text-stone-100 hover:bg-violet-500 focus:outline-none focus:ring-2 focus:ring-lime-300 focus:ring-offset-2 transition duration-200 ease-in-out"
        href="/LGS Resume.pdf"
        download
      >
        Download My Resume
      </a>
    </div>
  );
}
