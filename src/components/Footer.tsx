"use client";

import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";
import WisegaveLogo from "./icon/wisegave_logo";
// Using placeholder instead of figma asset
// KOWSHIK LEARNING VIBE CODING

export function Footer() {
  return (
    <footer className="bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="h-8 text-lg mb-4">
              <WisegaveLogo className="h-8" />
            </div>
            <p className="text-gray-400 mb-4">
              Transforming the way businesses interact with their customers
              through AI-powered solutions.
            </p>
            <div className="flex items-center gap-2 text-gray-400 mb-2">
              <MapPin className="w-4 h-4" />
              <span className="text-sm">
                18 Bungay St, Fawkner 3060, Melbourne, Australia
              </span>
            </div>
            <div className="flex items-center gap-2 text-gray-400 mb-2">
              <Phone className="w-4 h-4" />
              <a href="tel:+18334121010" className="text-sm hover:text-white">
                +1 833-412-1010
              </a>
            </div>
            <div className="flex items-center gap-2 text-gray-400">
              <Mail className="w-4 h-4" />
              <a
                href="mailto:info@wisegave.ai"
                className="text-sm hover:text-white"
              >
                contact@wisegave.com
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-400 hover:text-white text-sm"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/faqs"
                  className="text-gray-400 hover:text-white text-sm"
                >
                  FAQs
                </Link>
              </li>
              <li>
                <Link
                  href="/book-demo"
                  className="text-gray-400 hover:text-white text-sm"
                >
                  Book a Demo
                </Link>
              </li>
              <li>
                <a
                  href="#products"
                  className="text-gray-400 hover:text-white text-sm"
                >
                  Products
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  className="text-gray-400 hover:text-white text-sm"
                >
                  Pricing
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-white mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-gray-400 hover:text-white text-sm"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms-conditions"
                  className="text-gray-400 hover:text-white text-sm"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  href="/refund-policy"
                  className="text-gray-400 hover:text-white text-sm"
                >
                  Refund Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="font-semibold text-white mb-4">Connect With Us</h3>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/WiseGave"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <Facebook className="w-6 h-6" />
              </a>
              {/* <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <Twitter className="w-6 h-6" />
              </a> */}
              <a
                href="https://www.linkedin.com/company/wisegave/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="https://www.instagram.com/wisegave/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} WiseGave AI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
