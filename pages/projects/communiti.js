import Link from 'next/link'
import Image from 'next/image'
import logo from '../../public/logo/EC.png'
import communiti from '../../public/projects/communiti-front.PNG'
import { FaLinkedin, FaGithub, FaArrowRight, FaReact, FaNode } from 'react-icons/fa'
import { DiMongodb } from "react-icons/di";
import Footer from '../../components/Footer'


const FleetCare = () => {
    return (
        <div>

            <header className="flex justify-between h-auto w-full mt-4">
                <div className="ml-2">

                    <Link href="/">
                        <Image src={logo} width={127} height={80} alt="portfolio logo" />
                    </Link>

                </div>
                <nav className="flex">
                    <div className="invisible flex flex-col md:visible md:flex-row md:space-x-6 md:m-auto md:mr-10">
                        <Link href="/#projects">
                            <a className="hover:text-red-500">Projects</a>
                        </Link>

                    </div>
                    <div className="flex m-auto space-x-4 mr-2 md:mr-6">
                        <a href="https://www.linkedin.com/in/edmond-chen-5b0b111a5/">
                            <FaLinkedin className="text-3xl" />
                        </a>
                        <a href="https://github.com/echen12">
                            <FaGithub className="text-3xl" />
                        </a>
                    </div>
                </nav>
            </header>

            <div>
                <div className="flex flex-col m-4">
                    <div className="lg:flex lg:justify-evenly border-b-2 m-2">

                        <div className="m-2 lg:w-7/12">
                            <h1 className="text-5xl m-2 pb-2 border-b-2">Communiti</h1>
                            <div className="space-y-4 text-xl m-4">
                                <p>
                                    Communiti is an application that connects individuals in their community with volunteering opportunities. Users can simply sign up for an account, post their help requests, or help others with other easy to use platform. 
                                </p>
                                <p>
                                    This application was built with Google Firebase services for user authentication and data persistance. Mapbox is used to track the location of volunteering requests.
                                </p>
                                <div className="space-y-2">
                                    <a className="flex w-full justify-start text-blue-600" href="https://communiti-4ea70.web.app/">
                                        <div className='flex items-center'>
                                            <p>View Site</p>
                                            <FaArrowRight className="mt-1 ml-2" />
                                        </div>
                                    </a>

                                    <a className="flex w-full justify-start text-blue-600" href="https://github.com/Nandddy/1800_BBYTeam03#general-info">
                                        <div className='flex items-center'>
                                            <p>View Code</p>
                                            <FaArrowRight className="mt-1 ml-2" />
                                        </div>
                                    </a>
                                </div>

                            </div>
                        </div>

                        <div className="flex flex-col m-2 lg:w-1/4 space-y-4" >

                            <div className="m-2">
                                <div className="space-y-2">
                                    <h1 className="text-4xl">Highlights</h1>
                                    <ul className="md:text-2xl">
                                        <li>- Bootstrap</li>
                                        <li>- Mapbox</li>
                                        <li>- Google Firebase</li>
                                    </ul>
                                </div>
                            </div>

                        </div>

                    </div>

                    <div className="h-0 md:h-auto flex flex-col mt-4">
                        <Image src={communiti} className="invisible md:visible" alt="project thumbnail" />
                    </div>
                </div>

            </div>

            <Footer />

        </div>
    )
}

export default FleetCare;