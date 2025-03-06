"use client";
import React from "react";
import { Divider } from "@heroui/react";
import { RiTailwindCssFill } from "react-icons/ri";
import { TiHtml5 } from "react-icons/ti";
import { DiRedis } from "react-icons/di";
import {
  BiLogoJava,
  BiLogoPython,
  BiLogoJavascript,
  BiLogoMongodb,
  BiLogoNodejs,
  BiLogoKubernetes,
  BiLogoDocker,
  BiLogoAws,
  BiLogoPostgresql,
  BiLogoBootstrap,
} from "react-icons/bi";
import { IoLogoMarkdown, IoLogoSass } from "react-icons/io5";
import {
  SiGo,
  SiTerraform,
  SiAmazonelasticache,
  SiBackbonedotjs,
  SiHelm,
  SiWebpack,
  SiSqlite,
} from "react-icons/si";
import { FaJenkins, FaReact } from "react-icons/fa6";
import { FaGithub, FaLess } from "react-icons/fa";
import {
  TbBrandBitbucketFilled,
  TbBrandFigma,
  TbBrandCss3,
  TbBrandNextjs,
} from "react-icons/tb";
import { IconContext } from "react-icons";
export default function SkillsSection() {
  return (
    <>
      <IconContext.Provider value={{ color: "#C1B9FF", size: "3em" }}>
        <h2 className="text-center text-3xl">Skills</h2>
        <Divider className="mt-4 mb-8 border-lime-400"></Divider>
        <div className="px-6 pb-6">
          <p>
            I am proficient in many languages and technologies. Below are some
            of the frameworks, tools and languages I am most familiar with
          </p>

          <p className="mt-8 font-semibold text-lg">
            Base Libraries and languages
          </p>
          <div className="flex flex-row flex-wrap my-6">
            <div className="flex-col content-center justify-items-center mx-2 my-2">
              <BiLogoNodejs />
              NodeJS
            </div>
            <div className="flex-col content-center justify-items-center mx-2 my-2">
              <TbBrandNextjs />
              NextJS
            </div>
            <div className="flex-col content-center justify-items-center mx-2 my-2">
              <FaReact />
              ReactJS
            </div>
            <div className="flex-col content-center justify-items-center mx-2 my-2">
              <TiHtml5 />
              HTML
            </div>
            <div className="flex-col content-center justify-items-center mx-2 my-2">
              <BiLogoJavascript />
              ES2024
            </div>
            <div className="flex-col content-center justify-items-center mx-2 my-2">
              <SiBackbonedotjs />
              Backbone.js
            </div>
            <div className="flex-col content-center justify-items-center mx-2 my-2">
              <BiLogoPython />
              Python
            </div>
            <div className="flex-col content-center justify-items-center mx-2 my-2">
              <BiLogoJava />
              Java
            </div>
            <div className="flex-col content-center justify-items-center mx-2 my-2 text-center">
              <SiGo />
              Go
            </div>
          </div>

          <p className="mt-8 font-semibold text-lg">Styling</p>
          <div className="flex flex-row flex-wrap my-6">
            <div className="flex-col content-center justify-items-center mx-2 my-2">
              <TbBrandCss3 />
              CSS3
            </div>
            <div className="flex-col content-center justify-items-center mx-2 my-2">
              <RiTailwindCssFill />
              TailwindCSS
            </div>
            <div className="flex-col content-center justify-items-center mx-2 my-2">
              <FaLess />
              Less
            </div>
            <div className="flex-col content-center justify-items-center mx-2 my-2">
              <IoLogoSass />
              Sass
            </div>
            <div className="flex-col content-center justify-items-center mx-2 my-2">
              <BiLogoBootstrap />
              Bootstrap
            </div>
            <div className="flex-col content-center justify-items-center mx-2 my-2">
              <IoLogoMarkdown />
              Markdown
            </div>
            <div className="flex-col content-center justify-items-center mx-2 my-2">
              <TbBrandFigma />
              Figma
            </div>
          </div>

          <p className="mt-8 font-semibold text-lg">
            DBs and Storage Solutions
          </p>
          <div className="flex flex-row flex-wrap my-6">
            <div className="flex-col content-center justify-items-center mx-2 my-2">
              <BiLogoPostgresql />
              Postgres
            </div>
            <div className="flex-col content-center justify-items-center mx-2 my-2">
              <DiRedis />
              Redis
            </div>
            <div className="flex-col content-center justify-items-center mx-2 my-2">
              <SiAmazonelasticache />
              Elasticache
            </div>
            <div className="flex-col content-center justify-items-center mx-2 my-2">
              <SiSqlite />
              Sqlite
            </div>
            <div className="flex-col content-center justify-items-center mx-2 my-2">
              <BiLogoMongodb />
              Mongodb
            </div>
          </div>

          <p className="mt-8 font-semibold text-lg">
            Infrastructure and Build tools
          </p>
          <div className="flex flex-row flex-wrap my-6">
            <div className="flex-col content-center justify-items-center mx-2 my-2">
              <SiWebpack />
              Webpack
            </div>
            <div className="flex-col content-center justify-items-center mx-2 my-2">
              <BiLogoDocker />
              Docker
            </div>
            <div className="flex-col content-center justify-items-center mx-2 my-2">
              <FaJenkins />
              Jenkins
            </div>
            <div className="flex-col content-center justify-items-center mx-2 my-2">
              <SiHelm />
              Helm
            </div>
            <div className="flex-col content-center justify-items-center mx-2 my-2">
              <SiTerraform />
              Terraform
            </div>
            <div className="flex-col content-center justify-items-center mx-2 my-2">
              <BiLogoKubernetes />
              Kubernetes
            </div>
            <div className="flex-col content-center justify-items-center mx-2 my-2">
              <BiLogoAws />
              AWS Cloud
            </div>
            <div className="flex-col content-center justify-items-center mx-2 my-2">
              <FaGithub />
              Github
            </div>
            <div className="flex-col content-center justify-items-center mx-2 my-2">
              <TbBrandBitbucketFilled />
              Bitbucket
            </div>
          </div>
        </div>
      </IconContext.Provider>
    </>
  );
}
