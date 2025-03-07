"use client";
export default function ResumeDownloadButton() {
  return (
    <div className="flex flex-row justify-center mt-6">
      <a
        className="mt-4 bg-lime-400 p-2 rounded-lg"
        href="/LGS Resume.pdf"
        download
      >
        Download My Resume
      </a>
    </div>
  );
}
