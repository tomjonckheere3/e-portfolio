export default function ContactInfo() {
    return (
        <div className="text-gray-800 dark:text-white text-center">
            <p>Email me at</p>
            <p className="hover:underline hover:text-sky-500">
                <a href="mailto:tomtomjonckheere@gmail.com">tomtomjonckheere@gmail.com</a>
            </p>
            <p className="w-1/2 mx-auto my-12 font-bold text-lg italic border-b border-solid border-black dark:border-white leading-0"><span className="bg-white dark:bg-dark-line px-2.5">Or</span></p>
            <p className="mb-12">Fill in the form below</p>
        </div>
    )
}