import React from "react";
import { IoSunnyOutline } from "react-icons/io5";
import { LuMoonStar } from "react-icons/lu";
import Button from "../shared/Button";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../Context/ThemeChangerContext";

const ThemeChanger: React.FC = () => {
    const { isDark, toggleTheme } = useTheme();
    return (
        <Button
            description=""
            testid="ThemeChangerBtn"
            className="flex mt-5 md:mt-0 justify-between w-full items-center"
            onClick={toggleTheme}
            icon=""
        >
            <span className="md:hidden block dark:text-gray-300 font-medium text-gray-600">Switch Theme</span>
            <AnimatePresence mode="wait" initial={false}>
                {!isDark ? (
                    <motion.span
                        data-testid="sun-icon"
                        className="block"
                        key="sun"
                        initial={{ opacity: 0, rotate: -90 }}
                        animate={{ opacity: 1, rotate: 0 }}
                        exit={{ opacity: 0, rotate: 90 }}
                        transition={{ duration: 0.15 }}
                    >
                        <IoSunnyOutline size={26} />
                    </motion.span>
                ) : (
                    <motion.span
                        data-testid="moon-icon"
                        className="text-gray-300"
                        key="moon"
                        initial={{ opacity: 0, rotate: -90 }}
                        animate={{ opacity: 1, rotate: 0 }}
                        exit={{ opacity: 0, rotate: 90 }}
                        transition={{ duration: 0.15 }}
                    >
                        <LuMoonStar size={26} />
                    </motion.span>
                )}
            </AnimatePresence>
        </Button>
    );
};

export default ThemeChanger;
