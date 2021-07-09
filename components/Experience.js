import {FaArrowRight} from 'react-icons/fa'

const Experience = () => {
    return (
        <div className="flex justify-center h-auto mt-10 border-t-2">
            <div className="mt-10 w-full sm:w-11/12 2xl:w-5/12 h-auto ">
                <h1 className="text-5xl font-semibold" id="experience">Experience</h1>
                <div className="mt-10 m-2 sm:m-14 sm:flex sm:justify-center">

                    <div className="space-y-6">

                        <div className="sm:flex sm:justify-center rounded-lg bg-palette-brown sm:space-x-6 p-4 shadow-2xl">
                            <h1 className="text-5xl font-semibold text-black m-auto">2021</h1>
                            <div className="invisible sm:visible m-auto text-3xl">
                                <FaArrowRight />
                            </div>
                            <div>
                                <h1 className="text-4xl font-semibold">Company name goes here</h1>
                                <p className="text-2xl mt-2 pb-1 border-b-2 border-gray-500">Position title goes here</p>
                                <p className="text-xl mt-3 font-bold">- Responsibility 1</p>
                                <p className="text-xl mt-3 font-bold">- Responsibility 2</p>
                                <p className="text-xl mt-3 font-bold">- Responsibility 3</p>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Experience;