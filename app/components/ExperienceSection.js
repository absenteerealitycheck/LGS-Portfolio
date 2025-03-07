"use client";
import { Divider } from "@heroui/react";

export default function ExperienceSection() {
  return (
    <>
      <h2 className="text-center text-3xl">Experience</h2>
      <Divider className="mt-4 mb-8 border-lime-400"></Divider>
      <div className="px-6 pb-6 border-violet-400 border-l-1 before:absolute before:bg-gray-100 before:left-[5.5rem] before:block before:size-4 before:border-4 before:border-violet-400 before:rounded-full">
        <h3 className="pb-2 uppercase font-semibold text-stone-700">
          MMSD Software Developer
        </h3>
        <h4 className="pb-1 text-sm font-semibold">July 2019 - Present</h4>
        <p className="pb-2 text-sm">
          <em>MassMutual Life Insurance, Boston, MA</em>
        </p>
        <ul className="list-disc pl-4">
          <li>Architect and develop scalable web applications</li>
          <li>
            Maintain comprehensive test coverage through collaboration with QA
            and Automation teams
          </li>
          <li>Lead code reviews and technology evaluation initiatives</li>
          <li>
            Partner across departments to implement cohesive solutions and
            ensure product and design alignment
          </li>
          <li>Mentor less experienced developers</li>
          <li>
            Maintain internal documentation to allow for smoother on-boarding of
            new team members
          </li>
          <li>
            Refactor and optimize legacy code for modern browser environments
          </li>
        </ul>
      </div>
      <div className="px-6 pb-6 border-violet-400 border-l-1 before:absolute before:bg-gray-100 before:left-[5.5rem] before:block before:size-4 before:border-4 before:border-violet-400 before:rounded-full">
        <h3 className="pb-2 uppercase font-semibold text-stone-700">
          {" "}
          Product Software Engineer
        </h3>
        <h4 className="pb-1 text-sm font-semibold">March 2015 - June 2019</h4>
        <p className="pb-2 text-sm">
          <em>eResearch Technology(formerly PHT Corporation), Boston, MA</em>
        </p>
        <ul className="list-disc pl-4">
          <li>
            Performed detailed analysis of business requirements and utilized
            this data for SPIKE research projects
          </li>
          <li>
            developed global clinical trial data management applications for web
            and mobile platforms, ensuring compliance with both national and
            international privacy standards
          </li>
        </ul>
      </div>
      <div className="px-6 pb-6 border-violet-400 border-l-1 before:absolute before:bg-gray-100 before:left-[5.5rem] before:block before:size-4 before:border-4 before:border-violet-400 before:rounded-full">
        <h3 className="pb-2 uppercase font-semibold text-stone-700">
          UX Intern
        </h3>
        <h4 className="pb-1 text-sm font-semibold">
          June 2013 - September 2013
        </h4>
        <p className="pb-2 text-sm">
          <em>Marketade, Washington, DC</em>
        </p>
        <ul className="list-disc pl-4">
          <li>
            Assessed user test recordings and developed findings for clients for
            site improvement
          </li>
          <li>
            created highlight reels of user tests and was responsible for web
            development and redesign for various clients{" "}
          </li>
          <li>
            Developed a prototype for a client&apos;s administrative console (it
            received client approval.)
          </li>
        </ul>
      </div>
      <div className="px-6 pb-6 border-violet-400 border-l-1 before:absolute before:bg-gray-100 before:left-[5.5rem] before:block before:size-4 before:border-4 before:border-violet-400 before:rounded-full">
        <h3 className="pb-2 uppercase font-semibold text-stone-700">
          New Media Intern
        </h3>
        <h4 className="pb-1 text-sm font-semibold">
          June 2012 - September 2012
        </h4>
        <p className="pb-2 text-sm">
          <em>The College Board, Reston, VA</em>
        </p>
        <ul className="list-disc pl-4">
          <li>
            worked as a member of the Business Technology&apos;s New Media
            Roadmap Team
          </li>
          <li>Researched web and mobile accessibility</li>
          <li>Began an Internal Web-accessibility Knowledge Base</li>
          <li>
            Observed and assisted with usability testing for Student Landing
            Page and SAT pages
          </li>
        </ul>
      </div>
      <div className="px-6 pb-6 border-violet-400 border-l-1 before:absolute before:bg-gray-100 before:left-[5.5rem] before:block before:size-4 before:border-4 before:border-violet-400 before:rounded-full">
        <h3 className="pb-2 uppercase font-semibold text-stone-700">
          Web Design and Development Intern
        </h3>
        <h4 className="pb-1 text-sm font-semibold">June 2011 - August 2011</h4>
        <p className="pb-2 text-sm">
          <em>Yes Exactly, Greenfield, MA</em>
        </p>
        <ul className="list-disc pl-4">
          <li>Designed website templates</li>
          <li>Researched SEO and created client social media guides</li>
          <li>Tested and developed widgets and plug-ins.</li>
          <li> Debugged and modifyied software components.</li>
          <li>
            Identified and suggested new technologies and tools for enhancing
            product value and increasing team productivity
          </li>
        </ul>
      </div>
    </>
  );
}
