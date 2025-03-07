"use client";
import { Divider } from "@heroui/react";
import { IconContext } from "react-icons";
import {
  BiLogoAws,
  BiLogoBootstrap,
  BiLogoDocker,
  BiLogoJava,
  BiLogoJavascript,
  BiLogoKubernetes,
  BiLogoMongodb,
  BiLogoNodejs,
  BiLogoPostgresql,
  BiLogoPython,
} from "react-icons/bi";
import { DiRedis } from "react-icons/di";
import { FaGithub, FaLess } from "react-icons/fa";
import { FaJenkins, FaReact } from "react-icons/fa6";
import { IoLogoMarkdown, IoLogoSass } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import {
  SiAmazonelasticache,
  SiBackbonedotjs,
  SiGo,
  SiHelm,
  SiSqlite,
  SiTerraform,
  SiWebpack,
} from "react-icons/si";
import {
  TbBrandBitbucketFilled,
  TbBrandCss3,
  TbBrandFigma,
  TbBrandNextjs,
} from "react-icons/tb";
import { TiHtml5 } from "react-icons/ti";
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
              <BiLogoNodejs aria-label="Node.js Logo" />
              NodeJS
            </div>
            <div className="flex-col content-center justify-items-center mx-2 my-2">
              <TbBrandNextjs aria-label="NextJs Logo" />
              NextJS
            </div>
            <div className="flex-col content-center justify-items-center mx-2 my-2">
              <FaReact aria-label="ReactJS Logo" />
              ReactJS
            </div>
            <div className="flex-col content-center justify-items-center mx-2 my-2">
              <TiHtml5 aria-label="HTML5 Logo" />
              HTML
            </div>
            <div className="flex-col content-center justify-items-center mx-2 my-2">
              <BiLogoJavascript aria-label="Javascript Logo" />
              ES2024
            </div>
            <div className="flex-col content-center justify-items-center mx-2 my-2">
              <SiBackbonedotjs aria-label="Backbone.js Logo" />
              Backbone.js
            </div>
            <div className="flex-col content-center justify-items-center mx-2 my-2">
              <BiLogoPython aria-label="Python Logo" />
              Python
            </div>
            <div className="flex-col content-center justify-items-center mx-2 my-2">
              <BiLogoJava aria-label="Java Logo" />
              Java
            </div>
            <div className="flex-col content-center justify-items-center mx-2 my-2 text-center">
              <SiGo aria-label="Go Logo" />
              Go
            </div>
          </div>

          <p className="mt-8 font-semibold text-lg">Styling</p>
          <div className="flex flex-row flex-wrap my-6">
            <div className="flex-col content-center justify-items-center mx-2 my-2">
              <TbBrandCss3 aria-label="CSS3 Logo" />
              CSS3
            </div>
            <div className="flex-col content-center justify-items-center mx-2 my-2">
              <RiTailwindCssFill aria-label="TailwindCSS Logo" />
              TailwindCSS
            </div>
            <div className="flex-col content-center justify-items-center mx-2 my-2">
              <FaLess aria-label="Less Logo" />
              Less
            </div>
            <div className="flex-col content-center justify-items-center mx-2 my-2">
              <IoLogoSass aria-label="Sass Logo" />
              Sass
            </div>
            <div className="flex-col content-center justify-items-center mx-2 my-2">
              <BiLogoBootstrap aria-label="Bootstrap Logo" />
              Bootstrap
            </div>
            <div className="flex-col content-center justify-items-center mx-2 my-2">
              <IoLogoMarkdown aria-label="Markdown Logo" />
              Markdown
            </div>
            <div className="flex-col content-center justify-items-center mx-2 my-2">
              <TbBrandFigma aria-label="Figma Logo" />
              Figma
            </div>
          </div>

          <p className="mt-8 font-semibold text-lg">
            DBs and Storage Solutions
          </p>
          <div className="flex flex-row flex-wrap my-6">
            <div className="flex-col content-center justify-items-center mx-2 my-2">
              <BiLogoPostgresql aria-label="Postgres SQL Logo" />
              Postgres
            </div>
            <div className="flex-col content-center justify-items-center mx-2 my-2">
              <DiRedis aria-label="Redis Logo" />
              Redis
            </div>
            <div className="flex-col content-center justify-items-center mx-2 my-2">
              <SiAmazonelasticache aria-label="AWS Elasticache Logo" />
              Elasticache
            </div>
            <div className="flex-col content-center justify-items-center mx-2 my-2">
              <SiSqlite aria-label="Sqlite Logo" />
              Sqlite
            </div>
            <div className="flex-col content-center justify-items-center mx-2 my-2">
              <BiLogoMongodb aria-label="Mongodb Logo" />
              Mongodb
            </div>
          </div>

          <p className="mt-8 font-semibold text-lg">
            Infrastructure and Build tools
          </p>
          <div className="flex flex-row flex-wrap my-6">
            <div className="flex-col content-center justify-items-center mx-2 my-2">
              <SiWebpack aria-label="Webpack Logo" />
              Webpack
            </div>
            <div className="flex-col content-center justify-items-center mx-2 my-2">
              <BiLogoDocker aria-label="Docker Logo" />
              Docker
            </div>
            <div className="flex-col content-center justify-items-center mx-2 my-2">
              <FaJenkins aria-label="Jenkins Logo" />
              Jenkins
            </div>
            <div className="flex-col content-center justify-items-center mx-2 my-2">
              <SiHelm aria-label="Helm Logo" />
              Helm
            </div>
            <div className="flex-col content-center justify-items-center mx-2 my-2">
              <SiTerraform aria-label="Terraform Logo" />
              Terraform
            </div>
            <div className="flex-col content-center justify-items-center mx-2 my-2">
              <BiLogoKubernetes aria-label="Kubernetes Logo" />
              Kubernetes
            </div>
            <div className="flex-col content-center justify-items-center mx-2 my-2">
              <BiLogoAws aria-label="AWS Logo" />
              AWS Cloud
            </div>
            <div className="flex-col content-center justify-items-center mx-2 my-2">
              <FaGithub aria-label="Github Logo" />
              Github
            </div>
            <div className="flex-col content-center justify-items-center mx-2 my-2">
              <TbBrandBitbucketFilled aria-label="Bitbucket Logo" />
              Bitbucket
            </div>
          </div>
        </div>
      </IconContext.Provider>
    </>
  );
}
