import { FaReact, FaNode, FaHtml5, FaCss3 } from 'react-icons/fa'
import { DiMongodb } from "react-icons/di";
import Link from 'next/link';
import dryvetrack from '../public/projects/dryvetrack-front.PNG';
import communiti from '../public/projects/communiti-front.PNG';
import Image from 'next/dist/client/image';


const Projects = () => {
    return (

        <div className="w-full flex justify-center border-t-2 mt-4">
            <div className="w-full sm:w-11/12 2xl:w-5/12 mt-6 space-y-4">
                <h1 className="text-5xl font-semibold" id="projects">Projects</h1>

                <div className="flex flex-col">

                    <div className="flex bg-palette-aqua rounded-lg m-4 shadow-2xl">
                        <Link href="/projects/fleetcare">
                            <a>
                                <div className="text-center">
                                    <div className="w-full">
                                        <p className="text-2xl font-bold">2021</p>
                                        <h1 className="text-white text-5xl font-semibold">DryveTrack</h1>
                                        <div className="flex justify-center">
                                            <p className="text-black text-2xl font-semibold mt-6 sm:w-3/4">A full stack vehicle maintenance application</p>
                                        </div>
                                        <div className="flex justify-center m-2 ">
                                            <div className="w-1/2 border-2 border-black rounded-lg">
                                                Check it out!
                                            </div>
                                        </div>
                                        <div className="flex justify-center space-x-4 mb-4">
                                            <FaReact className="text-5xl" />
                                            <FaNode className="text-5xl" />
                                            <DiMongodb className="text-5xl" />
                                        </div>
                                    </div>
                                    <div className="h-auto m-2">
                                        <div className="h-0 invisible sm:visible sm:h-auto">
                                            <Image src={dryvetrack} alt="project-thumbnail" />
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </Link>
                    </div>

                    <div className="flex bg-palette-purple rounded-lg m-4 shadow-2xl">
                        <Link href="/projects/communiti">
                            <a>
                                <div className="text-center">
                                    <div className="w-full">
                                        <p className="text-2xl font-bold">2021</p>
                                        <h1 className="text-white text-5xl font-semibold">Communiti</h1>
                                        <div className="flex justify-center">
                                            <p className="text-black text-2xl font-semibold mt-6 sm:w-3/4">The better way to find volunteering opportunities.</p>
                                        </div>
                                        <div className="flex justify-center m-2 ">
                                            <div className="w-1/2 border-2 border-black rounded-lg">
                                                Check it out!
                                            </div>
                                        </div>
                                        <div className="flex justify-center space-x-4 mb-4">
                                        </div>
                                    </div>
                                    <div className="h-auto m-2">
                                        <div className="h-0 invisible sm:visible sm:h-auto">
                                            <Image src={communiti} alt="project-thumbnail" />
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </Link>
                    </div>



                </div>
            </div>
        </div>
    )
}

export default Projects;