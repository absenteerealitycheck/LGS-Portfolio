"use client";
import { Card, CardBody, CardFooter, Divider } from "@heroui/react";
import Image from "next/image";
import { BiSolidChevronRight } from "react-icons/bi";
import ContactForm from "./ContactForm";
import ExperienceSection from "./ExperienceSection";
import ResumeDownloadButton from "./ResumeDownloadButton";
import SkillsSection from "./SkillsSection";
import TypingMovingText from "./TypingMovingText";
export default function PortfolioContent() {
  return (
    <>
      <div className="w-full h-full pt-2 bg-black bg-[url('/bg.svg')] bg-no-repeat bg-center pb-16 bg-auto">
        <section
          id="Home"
          className="my-40 mx-8 w-full pt-20 pb-16"
          style={{ backgroundColor: "rgba(0,0,0,0.1)" }}
        >
          <h1 className="text-center text-8xl font-bold font-sans text-white">
            I am Lexie Gaines-Smith
          </h1>
          <div className="my-6 text-center text-violet-400 font-mono">
            <TypingMovingText text="Full Stack Software Engineer" />
          </div>
        </section>
      </div>
      <section
        id="About"
        className="bg-neutral-800 text-white  w-full px-24 pt-20 pb-40 "
      >
        <h2 className="text-center text-3xl">About Me</h2>
        <Divider className="my-4 border-lime-400"></Divider>
        <div className="flex flex-wrap mx-2 justify-center w-full h-full">
          <div className="lg:w-4/12 w-full px-2 my-4">
            <img
              alt="Lexie Gaines-Smith Profile Image"
              src="https://github.com/absenteerealitycheck/absenteerealitycheck.github.io/blob/master/images/MyFace.jpeg?raw=true"
              width="100%"
              height="auto"
            />
          </div>
          <div className="lg:w-8/12 px-2">
            <h2 className="my-4 font-semibold text-2xl md:justify-center sm:justify-center">
              Fullstack Software Engineer
            </h2>
            <p className="py-3">
              For the past 9 years I have been a part of the software
              development industry years since my graduation from Amherst
              college with my Computer Science Degree.
            </p>
            <div className="flex flex-wrap mx-2">
              <div className="lg:w-6/12 px-2">
                <ul>
                  <li>
                    <div className="inline-flex">
                      <BiSolidChevronRight className="self-center" />{" "}
                      <strong>Age:&nbsp;</strong>
                      <span>
                        {Math.abs(
                          new Date(
                            Date.now() - new Date("1991-01-20").getTime()
                          ).getUTCFullYear() - 1970
                        )}
                      </span>
                    </div>
                  </li>
                  <li>
                    <div className="inline-flex">
                      <BiSolidChevronRight className="self-center" />{" "}
                      <strong>Email:&nbsp;</strong>
                      <span>againessmith@gmail.com</span>
                    </div>
                  </li>
                  <li>
                    <div className="inline-flex">
                      <BiSolidChevronRight className="self-center" />{" "}
                      <strong>Location:&nbsp;</strong>
                      <span>Boston, MA</span>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="lg:w-6/12 md:w-6/12 px-2">
                <ul>
                  <li>
                    <div className="inline-flex flex-nowrap">
                      <BiSolidChevronRight className="self-center" />{" "}
                      <strong>Degree:&nbsp;</strong>
                      <span>BA&nbsp;of&nbsp;Computer&nbsp;Science</span>
                    </div>
                  </li>
                  <li>
                    <div className="inline-flex">
                      <BiSolidChevronRight className="self-center" />{" "}
                      <strong>Phone:&nbsp;</strong>
                      <span>703 217 5232</span>
                    </div>
                  </li>
                  <li>
                    <div className="inline-flex">
                      <BiSolidChevronRight className="self-center" />{" "}
                      <strong>
                        Willing&nbsp;to&nbsp;work&nbsp;remotely:&nbsp;
                      </strong>
                      <span>Yes</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <p className="py-3">
              I like creating new and accessible Front-ends and scalable and
              efficient Back Ends. I often explore new technologies and
              incorporate them into projects when they would be beneficial. I
              enjoy reading technical articles and learning languages (both
              computer and otherwise). I strongly believe that a user friendly
              interface is essential to and will enhance every product.
            </p>
          </div>
        </div>
      </section>
      <section
        id="Experience"
        className="pt-20 w-full px-24 pb-40 bg-violet-50"
      >
        <ExperienceSection />
        <ResumeDownloadButton />
      </section>
      <section id="Skills" className="py-8 bg-black text-white w-full px-24">
        <SkillsSection />
      </section>
      <div className="flex flex-row flex-wrap text-center content-center justify-center w-full px-0 bg-violet-200 pb-24">
        <h3 className="text-black text-lg font-semibold center-self my-4 px-24">
          Examples of my work
        </h3>
        <div className="gap-2 grid xl:grid-cols-4 lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 xs:grid-cols-1 px-24">
          <Card key="0" shadow="sm">
            <CardBody className="overflow-visible p-0">
              <Image
                alt="Site Example 1"
                className="w-full object-cover h-[140px]"
                radius="lg"
                shadow="sm"
                src="/portfolio/dfjb-v1.jpg"
                width={window?.innerWidth / 6}
                height={window?.innerHeight / 18}
              />
            </CardBody>
            <CardFooter className="text-md text-white font-semibold">
              <b>DFBJ Site</b>
            </CardFooter>
          </Card>
          <Card key="1" shadow="sm">
            <CardBody className="overflow-visible p-0">
              <Image
                alt="Site Example 2"
                className="w-full object-cover h-[140px]"
                radius="lg"
                shadow="sm"
                src="/portfolio/locavore-v1.jpg"
                width={window?.innerWidth / 6}
                height={window?.innerHeight / 18}
              />
            </CardBody>
            <CardFooter className="text-md text-white font-semibold">
              <b>Locavore Site</b>
            </CardFooter>
          </Card>
          <Card key="2" shadow="sm">
            <CardBody className="overflow-visible p-0">
              <Image
                alt="Site Example 3"
                className="w-full object-cover h-[140px]"
                radius="lg"
                shadow="sm"
                src="/portfolio/maggiddavid-v1.jpg"
                width={window?.innerWidth / 6}
                height={window?.innerHeight / 18}
              />
            </CardBody>
            <CardFooter className="text-md text-white font-semibold">
              <b>Maggid David Arfa's Site</b>
            </CardFooter>
          </Card>
          <Card key="3" shadow="sm">
            <CardBody className="overflow-visible p-0">
              <Image
                alt="Site Example 4"
                className="w-full object-cover h-[140px]"
                radius="lg"
                shadow="sm"
                src="/portfolio/peace-corps-voices-v1-2.jpg"
                width={window?.innerWidth / 6}
                height={window?.innerHeight / 18}
              />
            </CardBody>
            <CardFooter className="text-md text-white font-semibold">
              <b>Peace Corps Voices Site</b>
            </CardFooter>
          </Card>
          <Card key="4" shadow="sm">
            <CardBody className="overflow-visible p-0">
              <Image
                alt="Site Example 5"
                className="w-full object-cover h-[140px]"
                radius="lg"
                shadow="sm"
                src="/portfolio/rise-v1.jpg"
                width={window?.innerWidth / 6}
                height={window?.innerHeight / 18}
              />
            </CardBody>
            <CardFooter className="text-md text-white font-semibold">
              <b>RISE Site</b>
            </CardFooter>
          </Card>
          <Card key="5" shadow="sm">
            <CardBody className="overflow-visible p-0">
              <Image
                alt="Site Example 6"
                className="w-full object-cover h-[140px]"
                radius="lg"
                shadow="sm"
                src="/portfolio/quote_machine.png"
                width={window?.innerWidth / 6}
                height={window?.innerHeight / 18}
              />
            </CardBody>
            <CardFooter className="text-md text-white font-semibold">
              <b>A Random Quote Machine</b>
            </CardFooter>
          </Card>
          <Card key="6" shadow="sm">
            <CardBody className="overflow-visible p-0">
              <Image
                alt="Site Example 7"
                className="w-full object-cover h-[140px]"
                radius="lg"
                shadow="sm"
                src="/portfolio/name generator.png"
                width={window?.innerWidth / 6}
                height={window?.innerHeight / 18}
              />
            </CardBody>
            <CardFooter className="text-md text-white font-semibold">
              <b>A Random Hockey Name Generator</b>
            </CardFooter>
          </Card>
          <Card key="7" shadow="sm">
            <CardBody className="overflow-visible p-0">
              <Image
                alt="Site Example 8"
                className="w-full object-cover h-[140px]"
                radius="lg"
                shadow="sm"
                src="/portfolio/thematizer-v21.jpg"
                width={window?.innerWidth / 6}
                height={window?.innerHeight / 18}
              />
            </CardBody>
            <CardFooter className="text-md text-white font-semibold">
              <b>Thematizer Prototype (2011)</b>
            </CardFooter>
          </Card>
        </div>
      </div>
      <section id="Contact" className="bg-black text-white w-full px-24 py-40">
        <h2 className="text-center text-3xl">Contact Me</h2>
        <ContactForm />
      </section>
    </>
  );
}
