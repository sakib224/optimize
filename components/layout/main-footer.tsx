import { Facebook, Instagram, Linkedin } from 'lucide-react'

export function MainFooter() {
  return (
    <footer className="bg-black pt-16 sm:pt-20 pb-12 sm:pb-16">
      {/* Main Footer Content */}
      <div className="px-4 sm:px-6 lg:px-12 border-b border-gray-800 pb-12 sm:pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 max-w-7xl mx-auto">
          {/* Brand Section */}
          <div className="flex flex-col">
            <h1 className="text-4xl sm:text-5xl ml-8 md:text-4xl font-bold text-yellow-400 mb-4 sm:mb-6">
              OPTIMIZIFY
            </h1>
            <p className="text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed mb-6 sm:mb-8">
              Empowering YouTube Creators To Reach Their Full Potential With AI-Driven Optimization Tools.
            </p>
            {/* Social Icons */}
            <div className="flex gap-4 ]">
              <a
                href="#"
                className="text-white hover:text-yellow-400 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={22} className="sm:w-3 sm:h-3" />
              </a>
              <a
                href="#"
                className="text-white hover:text-yellow-400 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={22} className="sm:w-3 sm:h-3" />
              </a>
              <a
                href="#"
                className="text-white hover:text-yellow-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={22} className="sm:w-3 sm:h-3" />
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div className="flex flex-col">
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-yellow-400 mb-4 sm:mb-6">
              Company
            </h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <a href="#" className="text-gray-400 text-sm sm:text-base md:text-lg hover:text-yellow-400 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 text-sm sm:text-base md:text-lg hover:text-yellow-400 transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 text-sm sm:text-base md:text-lg hover:text-yellow-400 transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col">
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-yellow-400 mb-4 sm:mb-6">
              Quick Links
            </h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <a href="#" className="text-gray-400 text-sm sm:text-base md:text-lg hover:text-yellow-400 transition-colors">
                  Plans
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 text-sm sm:text-base md:text-lg hover:text-yellow-400 transition-colors">
                  Dashboard
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 text-sm sm:text-base md:text-lg hover:text-yellow-400 transition-colors">
                  Create Account
                </a>
              </li>
            </ul>
          </div>

          {/* Helpful Links */}
          <div className="flex flex-col">
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-yellow-400 mb-4 sm:mb-6">
              Helpful Links
            </h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <a href="#" className="text-gray-400 text-sm sm:text-base md:text-lg hover:text-yellow-400 transition-colors">
                  Trend Analysis
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 text-sm sm:text-base md:text-lg hover:text-yellow-400 transition-colors">
                  Keyword Reporting
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 text-sm sm:text-base md:text-lg hover:text-yellow-400 transition-colors">
                  Brand Analysis
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="pt-8 sm:pt-12 px-4 sm:px-6 lg:px-12">
        <div className="max-w-7xl mx-auto flex flex-col items-center gap-3 sm:gap-4">
          <p className="text-gray-500 text-xs sm:text-sm md:text-base text-center">
            © 2026 Optimizify. All Rights Reserved. Built For YouTube Creators Who Dream Big.
          </p>
          <a href="#" className="text-gray-500 text-xs sm:text-sm md:text-base hover:text-yellow-400 transition-colors text-center">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  )
}