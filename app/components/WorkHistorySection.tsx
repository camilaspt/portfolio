"use client";
import React, { useState, useTransition } from "react";
import TabButton from './TabButton';

interface WorkHistorySectionProps {
    // Propiedades del componente
}

interface TabData {
    title: string;
    id: string;
    content: React.ReactNode;
}

const TAB_DATA: TabData[] = [
    {
        title: "Kretz",
        id: "Kretz",
        content: (
            <div>
                <i className="text-white">Mar 2024 - Present</i><br />
                <i className="text-white">Hybrid</i>
                <div className="mt-2">
                    Kretz is a technology company based in Argentina. 
                    The main products of the company are weight scales, self-service kiosks and more.
                    As a member of the development team, my work consists of developing software solutions 
                    for the company&apos;s products using various technologies. 
                    <br></br>The tech stack consist of:
                    <ul className="list-disc list-inside"   >
                        <li>Java</li>
                        <li>Spring</li>
                        <li>Angular</li>
                        <li>Node</li>
                        <li>Electron</li>
                    </ul>
                </div>
            </div>
        ),
    },
    {
        title: "ThinkSoft",
        id: "ThinkSoft",
        content: (
            <div>
                <i className="text-white">Oct 2022 - Mar 2024</i><br />
                <i className="text-white">Remote</i>
                <div className="mt-2">
                    ThinkSoft is a company that provides software solutions for the healthcare sector.
                    I was part of the development team of the company&apos;s main product, which is a web application that allows
                    the management of medical centers, health plans and the financial part of the business.
                    My work consisted of developing new features, designing and implementing new modules, managing the database schema
                    and fixing bugs. I also developed an interface with the company Philips for connect imaging diagnostic equipment with our app
                    using Mirth channels and HL7 Standards. <br></br>The tech stack consist of:
                    <ul className="list-disc list-inside"   >
                        <li>Java</li>
                        <li>Hibernate</li>
                        <li>Oracle</li>
                        <li>PL/SQL</li>
                        <li>HL7</li>
                    </ul>
                </div>
            </div>
        ),
    },
    {
        title: "Avoworks project",
        id: "Freelance",
        content: (
            <div>
                <i className="text-white">Oct 2023 - Dec 2024</i><br />
                <i className="text-white">Remote</i>
                <div className="mt-2">
                    Developed the frontend for a web gestion system for the company Avoworks.
                    The system allows the management of the company&apos;s clients, orders and products. It offers graphics, reports,
                    and tracks of the status of the orders. <br></br>This app was developed using Angular, Bootstrap and Angular Material.
                </div>
            </div>
        ),
    },
    {
        title: "Open Solutions",
        id: "Open Solutions",
        content: (
            <div>
                <i className="text-white">Jan 2022 - Oct 2022</i><br />
                <i className="text-white">Remote</i>
                <div className="mt-2">
                    I was part of a team of 4 members. We developed a web application for employee management and payroll.
                    The tech stack consisted of Angular and Node.js.
                </div>
            </div>
        ),
    }
]

const WorkHistorySection: React.FC<WorkHistorySectionProps> = () => {
    // Lógica del componente
    const [tab, setTab] = useState("Kretz");
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id: any) => {
        startTransition(() => {
            setTab(id);
        });
    };

    return (
        <section>
            <div className="flex flex-row mt-10 sm:mt-0">
                <div className="flex flex-col w-2/5 pr-10 mt-20">
                <TabButton
                        selectTab={() => handleTabChange("Kretz")}
                        active={tab === "Kretz"}
                        origin="workHistorySection"
                    >
                        {" "}
                        Kretz{" "}
                    </TabButton>
                    <TabButton
                        selectTab={() => handleTabChange("ThinkSoft")}
                        active={tab === "ThinkSoft"}
                        origin="workHistorySection"
                    >
                        {" "}
                        ThinkSoft{" "}
                    </TabButton>
                    <TabButton
                        selectTab={() => handleTabChange("Freelance")}
                        active={tab === "Freelance"}
                        origin="workHistorySection"
                    >
                        {" "}
                        Avoworks project{" "}
                    </TabButton>
                    <TabButton
                        selectTab={() => handleTabChange("Open Solutions")}
                        active={tab === "Open Solutions"}
                        origin="workHistorySection"
                    >
                        {" "}
                        Open Solutions{" "}
                    </TabButton>
                </div>
                <div className="flex flex-col w-3/5">
                    <h2 className="text-4xl font-bold text-white mb-6">Work History</h2>
                    {TAB_DATA.find((t) => t.id === tab)?.content}
                </div>
            </div>
        </section>
    );
};

export default WorkHistorySection;
