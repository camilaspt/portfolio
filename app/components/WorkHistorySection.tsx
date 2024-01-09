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
        title: "ThinkSoft",
        id: "ThinkSoft",
        content: (
            <div>
                <i className="text-white">Oct 2022 - Present</i>
                <div className="mt-2">
                    ThinkSoft is a company that provides software solutions for the healthcare sector.
                    I am part of the development team of the company&apos;s main product, which is a web application that allows
                    the management of medical centers, health plans and the financial part of the business.
                    My work consist of developing new features, designing and implementing new modules, managing the database schema
                    and fixing bugs. <br></br>The tech stack consist of:
                    <ul className="list-disc list-inside"   >
                        <li>Java</li>
                        <li>Hibernate</li>
                        <li>Oracle</li>
                        <li>PL/SQL</li>
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
                <i className="text-white">Oct 2023 - Dic 2024</i>
                <div className="mt-2">
                    Developed the frontend for a web gestion system for the company Avoworks.
                    The system allows the management of the company&apos;s clients, orders, products. It offers graphics and reports,
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
                <i className="text-white">Jan 2022 - Oct 2022</i>
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
    const [tab, setTab] = useState("ThinkSoft");
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id: any) => {
        startTransition(() => {
            setTab(id);
        });
    };

    return (
        <section>
            <div className="flex flex-row">
                <div className="flex flex-col w-2/5 pr-10 mt-20">
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
