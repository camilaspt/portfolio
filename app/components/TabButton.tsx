import React from "react";
import { motion } from "framer-motion";

interface TabButtonProps {
  active: boolean;
  selectTab: () => void;
  children: React.ReactNode;
  origin: string;
}

const variants = {
  default: { width: 0 },
  active: { width: "calc(100% - 0.75rem)" },
};

const TabButton: React.FC<TabButtonProps> = ({ active, selectTab, children, origin }) => {
  let addedClasses = "";
  let addMargin = "";
  let addHeight = "";
  if (origin === 'workHistorySection') {
    addedClasses = "border-l-4 border-orange-500";
    addMargin = "";
    addHeight = "h-24 flex flex-wrap justify-center content-center";
  } else {
    addMargin = "mt-2";
  }
  const buttonClasses = active
    ? "text-white"
    : "text-[#ADB7BE]";

  return (
    <button onClick={selectTab} className={`${addedClasses}`}>
      <p className={`ml-3 mr-3 font-semibold hover:text-white ${buttonClasses} ${addHeight}`}>
        {children}
      </p>
      <motion.div
        animate={active ? "active" : "default"}
        variants={variants}
        className={`h-1 bg-orange-500 mr-3 ${addMargin}`}
      ></motion.div>
    </button>
  );
};

export default TabButton;