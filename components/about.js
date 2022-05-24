import React from "react"
import Image from "next/image"
import profile from "../public/images/me.jpg"

const About = () => {
    return (
        <div className="lg:space-x-5 lg:flex lg:flex-row item-center lg:-mx-4 flex flex-col-reverse text-center lg:text-left">
            <div className="lg:px-4 lg:mt-12 ">
                <h1 className="text-2xl font-bold text-gray-900 lg:text-5xl dark:text-white">
                    Hey there,
                </h1>
                <div className="mt-6 text-gray-800 dark:text-white">
                    <p className="mb-4">
                        I am Tom Jonckheere. I have always been fascinated with computers from a young age. That is why I decided to follow the 
                        Applied Computer Science training at Howest. Now that I have successfully completed my second year at Howest I can say
                        with certainty that I have made the right choice.
                    </p>
                </div>
            </div>
            <div className="flex-shrink-0 lg:mt-12 lg:px-4 mb-10">
                <Image
                    src={profile}
                    alt="Profile"
                    priority={true}
                    className="rounded-full"
                    width={250}
                    height={250}
                    placeholder="blur"
                    objectFit="cover"
                />
            </div>
        </div>
    )
}

export default About;