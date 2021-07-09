import Link from 'next/link'
import Image from 'next/image'
import logo from '../../public/logo/EC.png'
import dashboard from '../../public/projects/fleetcare-dashboard.png'
import details from '../../public/projects/fleetcare-vehicledetail.png'
import { FaLinkedin, FaGithub, FaArrowRight, FaReact, FaNode } from 'react-icons/fa'
import { DiMongodb } from "react-icons/di";
import Footer from '../../components/Footer'


const FleetCare = () => {
    return (
        <div>

            <header className="flex justify-between h-auto w-full mt-4">
                <div className="ml-2">

                    <Link href="/">
                        <Image src={logo} width={127} height={80} alt="portfolio-logo" />
                    </Link>

                </div>
                <nav className="flex">
                    <div className="invisible flex flex-col md:visible md:flex-row md:space-x-6 md:m-auto md:mr-10">
                        <Link href="/#projects">
                            <a className="hover:text-red-500">Projects</a>
                        </Link>

                        <Link href="/#experience">
                            <a className="hover:text-red-500">Experience</a>
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
                            <h1 className="text-5xl m-2 pb-2 border-b-2">FleetCare</h1>
                            <div className="space-y-4 text-xl m-4">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </p>

                                <p className="text-sm">
                                    *This project is hosted on Heroku. Please give it a few seconds to load!
                                </p>

                                <div className="space-y-2">
                                    <a className="flex w-full justify-start text-blue-600" href="https://fleetcare.herokuapp.com/">
                                        <p>View Site</p>
                                        <FaArrowRight className="mt-1 ml-2" />
                                    </a>

                                    <a className="flex w-full justify-start text-blue-600" href="https://github.com/echen12/FleetCare">
                                        <p>View Code</p>
                                        <FaArrowRight className="mt-1 ml-2" />
                                    </a>
                                </div>

                            </div>
                        </div>

                        <div className="flex flex-col m-2 lg:w-1/4 space-y-4" >

                            <div className="m-2">
                                <div className="space-y-2">
                                    <h1 className="text-4xl">Highlights</h1>
                                    <ul className="md:text-2xl">
                                        <li>- NHTSA Vehicle API</li>
                                        <li>- MERN Stack</li>
                                    </ul>
                                </div>
                            </div>


                            <div className="flex justify-evenly pb-2">
                                <FaReact className="text-5xl" />
                                <FaNode className="text-5xl" />
                                <DiMongodb className="text-5xl" />
                            </div>

                        </div>

                    </div>

                    <div className="h-0 md:h-auto flex flex-col mt-4">
                        <Image src={dashboard} className="invisible md:visible" />
                        <br />
                        <Image src={details} className="invisible md:visible" />
                    </div>
                </div>

            </div>

            <Footer />

        </div>
    )
}

export default FleetCare;