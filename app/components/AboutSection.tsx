"use client";
import React, { useState, useTransition } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import Carousel from "./Carousel";
import Card from "./Card";
import WorkHistorySection from "./WorkHistorySection";

interface TabData {
  title: string;
  id: string;
  content: React.ReactNode;
}

const TAB_DATA: TabData[] = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Java</li>
        <li>Angular</li>
        <li>Spring</li>
        <li>Node</li>
        <li>Next.js</li>
        <li>PL/SQL</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Information Systems Engineering -  National Technological University</li>
        <li>English - C2</li>
        <li>Spanish - Native</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Full Stack Web Development - Rosario Technological Pole</li>
        <li>Azure AI Fundamentals - Microsoft</li>
      </ul>
    ),
  },
];

const AboutSection = () => {

  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id: any) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white">
      <div className="gap-8 py-8 px-4 xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-16 lg:mt-10">
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-white text-base md:text-lg">
            I&apos;m passionate about solving complex problems and creating effective and scalable solutions.<br></br>
            Now I&apos;m working as Software Developer at Kretz Argentina -a company that designs solutions for retails and industry.
            <br></br>
            I feel comfortable being part of a team and I value open and transparent communication.
          </p>
          <div className="flex flex-row justify-start mt-4">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
              origin="aboutSection"
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
              origin="aboutSection"
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
              origin="aboutSection"
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab)?.content}
          </div>
        </div>
        <div className="flex flex-row justify-start items-start place-content-start">
          {/* <Carousel>
                  <Card title="Gestor de pedidos" content="Proyecto freelance para gestionar pedidos de una empresa exportadora de paltas." />
                  <Card title="Anotador" content="App desarrollada en Angular que consiste en un anotador de tareas pendientes." />
                  <Card title="Crud Libreria" content="Crud de una libreria desarrollado en Java/Spring con base de datos MySQL." />
                </Carousel> */}
          <WorkHistorySection />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;