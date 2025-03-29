import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Instagram, Twitter, Facebook, Youtube } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-black text-white border-t border-gray-800">
      <div className="container px-4 py-12 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div>
            <h3 className="text-xl font-bold mb-4">NOTxRASA</h3>
            <p className="text-gray-400 mb-6">Bold, innovative merchandise that defines the future of fashion.</p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-brand-red transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-brand-red transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-brand-red transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-brand-red transition-colors">
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>

          {/* Shop Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4">SHOP</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/products" className="text-gray-400 hover:text-brand-red transition-colors">
                  All Products
                </Link>
              </li>
              <li>
                <Link href="/collections/new-arrivals" className="text-gray-400 hover:text-brand-red transition-colors">
                  New Arrivals
                </Link>
              </li>
              <li>
                <Link href="/collections/best-sellers" className="text-gray-400 hover:text-brand-red transition-colors">
                  Best Sellers
                </Link>
              </li>
              <li>
                <Link href="/collections/sale" className="text-gray-400 hover:text-brand-red transition-colors">
                  Sale
                </Link>
              </li>
              <li>
                <Link href="/gift-cards" className="text-gray-400 hover:text-brand-red transition-colors">
                  Gift Cards
                </Link>
              </li>
            </ul>
          </div>

          {/* Info Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4">INFORMATION</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-brand-red transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-brand-red transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-brand-red transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-400 hover:text-brand-red transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="text-gray-400 hover:text-brand-red transition-colors">
                  Shipping & Returns
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4">NEWSLETTER</h3>
            <p className="text-gray-400 mb-4">Subscribe to receive updates, access to exclusive deals, and more.</p>
            <div className="flex flex-col space-y-2">
              <Input type="email" placeholder="Your email address" className="bg-gray-800 border-gray-700 text-white" />
              <Button className="bg-brand-red hover:bg-red-700 text-white">SUBSCRIBE</Button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} NOTxRASA. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/privacy-policy" className="text-gray-400 hover:text-brand-red text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="text-gray-400 hover:text-brand-red text-sm transition-colors">
                Terms of Service
              </Link>
              <Link href="/shipping-policy" className="text-gray-400 hover:text-brand-red text-sm transition-colors">
                Shipping Policy
              </Link>
              <Link href="/refund-policy" className="text-gray-400 hover:text-brand-red text-sm transition-colors">
                Refund Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

