import Link from 'next/link'
import { FaRegClock } from 'react-icons/fa'
import Div from '../public/blog/Div.png';
import Image from 'next/image'




const Blog = () => {
    return (

        <div className="flex justify-center h-auto mt-10 border-t-2">
            <div className="mt-10 w-full sm:w-11/12 2xl:w-5/12 h-auto">
                <h1 className="text-5xl font-semibold" id="blog">Blog</h1>
                <div className="mt-10 m-2 sm:m-14 sm:flex sm:justify-center">

                    <div className="space-y-6">

                        <Link href="/blog/center-div">

                            <div className="rounded-lg bg-custom-teal sm:space-x-6 shadow-2xl">

                                <div className="lg:flex lg:flex-row-reverse m-4 p-4 ">

                                    <div className="lg:w-full ">
                                        <Image src={Div} alt="blog thumbnial" />
                                    </div>

                                    <div>
                                        <div className="flex justify-center">
                                            <h1 className="text-2xl mt-2 font-medium">How To Center A Div With CSS</h1>
                                        </div>
                                        <div className="flex justify-center space-x-4">
                                            <p>July 6, 2021</p>
                                            <div className="flex flex-row space-x-2">
                                                <p>-</p>
                                                <FaRegClock className="mt-1" />
                                                <p>5 min read</p>
                                            </div>
                                        </div>

                                        <div className="flex justify-center m-2 text-xl">

                                            <p>Centering a div does not have to be a frustrating experience! In this post, I go over several easy methods to center a div with pure CSS.
                                            </p>

                                        </div>


                                    </div>

                                </div>

                            </div>

                        </Link>


                    </div>

                </div>
            </div>
        </div>
    )
}

export default Blog;