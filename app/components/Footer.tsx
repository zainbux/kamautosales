import Link from 'next/link'
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">About Us</h3>
            <p className="text-sm">
              We're dedicated to providing quality used cars at unbeatable prices. 
              Your journey to the perfect ride starts here.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="space-y-2">
  
              <li><Link href="/referralprogram" className="text-sm hover:text-white transition-colors">Referral Program</Link></li>
              <li><Link href="/workwithus" className="text-sm hover:text-white transition-colors">About Us</Link></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Contact Us</h3>
            <p className="text-sm">8-4603 Bank Street<br />Ottawa, ON K1T 3W6</p>
            <p className="text-sm">Phone: (613) 404-7722</p>
            <p className="text-sm">Email: kamautosales99@gmail.com</p>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Follow us on Facebook">
                <Facebook className="w-6 h-6 hover:text-white transition-colors" />
              </a>

              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Follow us on Instagram">
                <Instagram className="w-6 h-6 hover:text-white transition-colors" />
              </a>

            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p className="text-sm">&copy; {new Date().getFullYear()} Kam Auto Sales. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}