
import Link from "next/link"
import React from "react"
import ThemeSwitch from "./theme-switch"

const Navigation = () => {

    function toggleSidebar() {
        const sidebar = document.getElementById("sidebar")
        if (sidebar.classList.contains("translate-x-full")) {
            sidebar.classList.remove("translate-x-full")
            sidebar.classList.add("translate-x-0")
        } else {
            sidebar.classList.remove("translate-x-0")
            sidebar.classList.add("translate-x-full")
        }
    }

    return (
        <div className="sticky top-0 z-20 py-2 bg-white md:py-6 md:mb-6 dark:bg-black">
            <div className="container px-4 mx-auto lg:max-w-4xl flex items-center justify-between">
                <Link href="/">
                    <a
                        className={"font-medium tracking-wider transition-colors text-gray-900 hover:text-sky-500 uppercase dark:text-white"}
                    >
                        Tom Jonckheere
                    </a>
                </Link>
                <div className="flex items-center">
                    <div className="md:flex lg:flex space-x-4 font-medium text-gray-800 hidden sm:block dark:text-white">
                        <Link href="/posts">
                            <a className="transition-colors hover:text-sky-500">Blog</a>
                        </Link>
                        <Link href="/projects">
                            <a className="transition-colors hover:text-sky-500">Projects</a>
                        </Link>
                        <Link href="/contact">
                            <a className="transition-colors hover:text-sky-500">Contact</a>
                        </Link>
                        <a href="/tomjonckheere.pdf" className="transition-colors hover:text-sky-500" download={true}>Resume</a>
                    </div>
                    <ThemeSwitch/>
                    <div className="sm:hidden flex items-center">
                        <button type="button" onClick={toggleSidebar}>
                            <i className="fa-solid fa-bars"/>
                        </button>
                    </div>
                    <div id="sidebar" className="fixed w-full h-full top-12 right-0 bg-gray-200 dark:bg-gray-800 opacity-95 z-10 transform ease-in-out duration-300 overflow-y-auto translate-x-full">
                        <div className="fixed h-full mt-8">
                            <div className="px-12 py-4">
                                <Link href="/posts">
                                    <a onClick={toggleSidebar}>Blog</a>
                                </Link>
                            </div>
                            <div className="px-12 py-4">
                                <Link href="/resume">
                                    <a onClick={toggleSidebar}>Resume</a>
                                </Link>
                            </div>
                            <div className="px-12 py-4">
                                <Link href="/projects">
                                    <a onClick={toggleSidebar}>Projects</a>
                                </Link>
                            </div>
                            <div className="px-12 py-4">
                                <Link href="/contact">
                                    <a onClick={toggleSidebar}>Contact</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navigation;