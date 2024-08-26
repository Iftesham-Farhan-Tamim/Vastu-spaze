import { RiFacebookFill, RiTwitterFill, RiInstagramFill } from "@remixicon/react"


function Footer() {
    return (
        <footer className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center
        border-t-2 py-4 p-16">
                <div className="flex space-x-6 mb-2">
                    <a href="https://www.facebook.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Visit our Facebook page">
                        <RiFacebookFill />
                    </a>
                    <a href="https://www.twitter.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Visit our Twitter page">
                        <RiTwitterFill />
                    </a>
                    <a href="https://www.instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Visit our Instragram page">
                        <RiInstagramFill />
                    </a>
                </div>
                <p className="text-sm">
                    &copy; 2024 VastuSpaze. All rights reserved by Tamim.
                </p>
            </div>
        </footer>
    )
}

export default Footer