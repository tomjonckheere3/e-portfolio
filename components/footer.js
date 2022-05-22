import React from "react";

const Footer = () => {
    return (
        <div className="mt-12 lg:mt-18 sm:pb-36 sm:py-12 py-6">
            <div className="max-w-4xl px-4 mx-auto text-gray-800 dark:text-white">
                <div className="pb-8 mb-2 border-t-2 border-gray-300 dark:border-white-300"></div>
                <div className="flex flex-col justify-between lg:flex-row items-center">
                    <p>Built with Next.js, Tailwind and Vercel</p>
                    <div className="sm:space-x-4 space-x-2 lg:pt-0">
                        <a href="https://github.com/tomjonckheere3">
                            <i className="fa-brands fa-github"/>
                        </a>
                        <a href="https://www.linkedin.com/in/tom-jonckheere-76244a217/">
                            <i className="fa-brands fa-linkedin"/>
                        </a>
                        <a href="https://www.instagram.com/tom_jonckheere/">
                            <i className="fa-brands fa-instagram"/>
                        </a>
                        <a href="https://www.facebook.com/tom.jonckheere.94">
                            <i className="fa-brands fa-facebook"/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;