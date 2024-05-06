"use client";
import React from 'react';
import Image from 'next/image';
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

export const HeaderSection = () => {
    return (
        <section className="grid grid-cols-1 sm:grid-cols-12 my-4">
            <div className="col-span-7 place-self-center text-center sm:text-left grid lg:place-items-start">
                <h1 className="text-white max-w-2xl mb-4 lg:text-6xl text-4xl font-extrabold">
                    <span className="text-transparent text-6xl bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-600">Hello, I&apos;m{" "}</span>{" "}
                    <br></br>
                    <TypeAnimation
                        sequence={[
                            "Camila",
                            1000,
                            "Web Developer",
                            1000,
                            "BackEnd Developer",
                            1000,
                            "FrontEnd Developer",
                            1000,
                        ]}
                        wrapper="span"
                        speed={50}
                        repeat={Infinity}
                    /></h1>
                <p className="text-[#ADB7BE] mb-6 textl-lg lg:text-xl">
                    I&apos;m a System Engineering student</p>
                {/* <div>
                    <a 
                        href="https://drive.google.com/file/d/1Rx3xPnwn3EVEn2nobzHQ6WRiU529aq0D/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer" 
                        className="bg-gradient-to-br from-yellow-400 via-yellow-500 to-orange-600 hover:bg-slate-200 text-white px-6 py-3 rounded-full m-4 md:ml-0 lg:ml-0">
                        Open CV
                    </a>
                    <button className="m-4 bg-gradient-to-br from-yellow-400 via-yellow-500 to-orange-600 px-1 py-1  text-white rounded-full">
                        <a href="mailto:camilaspitale26@gmail.com" className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                            Contact me
                        </a>
                    </button>
                </div> */}
            </div>
            <div className="col-span-5 place-self-center mt-4 lg:mt-0">
                <div className="rounded-full w-[300px] h-[300px] relative">
                    <Image
                        src="/images/fotoperfil.png"
                        alt="Foto perfil de la autora"
                        className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                        width={300}
                        height={300}
                    />
                </div>
            </div>
        </section>
    )
}

export default HeaderSection;
