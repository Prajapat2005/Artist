import Link from "next/link"
import { Music, Mail, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Music className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold">Artistly</span>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              Connecting event planners with talented performing artists. Find the perfect artist for your next event.
            </p>
            <div className="flex space-x-4">
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <Mail className="h-4 w-4" />
                <span>hello@artistly.com</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <Phone className="h-4 w-4" />
                <span>+1 (555) 123-4567</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/artists" className="text-gray-400 hover:text-white transition-colors">
                  Browse Artists
                </Link>
              </li>
              <li>
                <Link href="/onboarding" className="text-gray-400 hover:text-white transition-colors">
                  Join as Artist
                </Link>
              </li>
              <li>
                <Link href="/dashboard" className="text-gray-400 hover:text-white transition-colors">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/artists?category=singers" className="text-gray-400 hover:text-white transition-colors">
                  Singers
                </Link>
              </li>
              <li>
                <Link href="/artists?category=dancers" className="text-gray-400 hover:text-white transition-colors">
                  Dancers
                </Link>
              </li>
              <li>
                <Link href="/artists?category=speakers" className="text-gray-400 hover:text-white transition-colors">
                  Speakers
                </Link>
              </li>
              <li>
                <Link href="/artists?category=djs" className="text-gray-400 hover:text-white transition-colors">
                  DJs
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Artistly. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
