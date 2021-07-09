import { FaLinkedin, FaGithub } from 'react-icons/fa'

const Footer = () => {
    return (
        <div className="border-t-2 mt-8">

            <div className="flex justify-between mt-8 sm:mt-20 ml-4 mb-4">
                <div className="w-7/12">
                    <p className="text-sm">Powered by dank memes and dank dreams. :')</p>
                </div>
                <div className="flex space-x-4 sm:space-x-10 text-3xl mr-4">
                    <a href="https://www.linkedin.com/in/edmond-chen-5b0b111a5/">
                        <FaLinkedin className="text-3xl" />
                    </a>
                    <a href="https://github.com/echen12">
                        <FaGithub className="text-3xl" />
                    </a>
                </div>
            </div>

        </div>
    )
}

export default Footer;