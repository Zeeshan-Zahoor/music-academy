
function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8">

            {/* Company Info */}
            <div>
            <h3 className="text-white text-lg font-semibold mb-4">
                Musix
            </h3>
            <p className="text-sm leading-6">
                Building modern digital experiences with clean design,
                scalable solutions, and exceptional user experiences.
            </p>
            </div>

            {/* Quick Links */}
            <div>
            <h3 className="text-white text-lg font-semibold mb-4">
                Quick Links
            </h3>
            <ul className="space-y-2">
                <li>
                <a href="#" className="hover:text-white transition">
                    Home
                </a>
                </li>
                <li>
                <a href="#" className="hover:text-white transition">
                    About
                </a>
                </li>
                <li>
                <a href="#" className="hover:text-white transition">
                    Services
                </a>
                </li>
                <li>
                <a href="#" className="hover:text-white transition">
                    Contact
                </a>
                </li>
            </ul>
            </div>

            {/* Services */}
            <div>
            <h3 className="text-white text-lg font-semibold mb-4">
                Services
            </h3>
            <ul className="space-y-2">
                <li>Web Development</li>
                <li>UI/UX Design</li>
                <li>Mobile Apps</li>
                <li>SEO Optimization</li>
            </ul>
            </div>

            {/* Contact */}
            <div>
            <h3 className="text-white text-lg font-semibold mb-4">
                Contact
            </h3>
            <ul className="space-y-2">
                <li>Email: hello@yourbrand.com</li>
                <li>Phone: +1 (555) 123-4567</li>
                <li>Location: New York, USA</li>
            </ul>
            </div> 

        </div>
        <p className="text-center text-xs pt-8"> 2024 Music School. All rights reserved.</p>
    </footer>
  )
}

export default Footer