const Introduction = () => {
    return (
        <div>
            <div className="sm:flex sm:justify-center">
                <div className="w-full sm:w-10/12 2xl:w-5/12 sm:flex sm:justify-between sm:mt-12">
                    <div className="sm:flex sm:space-x-28 sm:pr-2 w-full">
                        <div className="space-y-4 ml-2 sm:mb-4 sm:ml-2">

                            <div className="mr-2 pb-4 space-y-4 mt-4">
                                <h1 className="text-6xl font-bold">Hi, I&apos;m Edmond,</h1>
                                <div className="space-y-2 text-gray-500 text-3xl font-semibold">
                                    <p>a student,</p>
                                    <p>and aspiring software developer</p>
                                </div>
                            </div>

                            <button className="sm:m-0 border-black border-2 border-red-500 text-2xl font-semibold rounded-lg p-2 hover:bg-red-500 hover:border-white hover:text-white">View My Resume
                            </button>

                        </div>

                        <div className="sm:mt-5 sm:m-0 sm:text-xl lg:text-2xl space-y-4 ">

                            <div className="space-y-4 m-2 border-2 rounded-lg sm:border-0 p-2">
                                <p>
                                    I&apos;m a 1st year computer science student and I have a passion in developing modern web applications. I have an unending curiosity for learning how technology works, specifically programming.
                                </p>

                                <p>
                                    I specialize in JavaScript, React, and Node.js, but I&apos;m almost always learning new web technologies so I can see my ideas and my programming come to life!
                                </p>
                            </div>

                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Introduction;