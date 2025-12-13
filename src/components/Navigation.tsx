"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";
import Image from "next/image";
import WisegaveLogo from "./icon/wisegave_logo";

const industries = [
  { id: "plumbing", name: "Plumbing Services" },
  { id: "hvac", name: "HVAC Services" },
  { id: "electrical", name: "Electrical Services" },
  { id: "cleaning", name: "Cleaning Services" },
  { id: "landscaping", name: "Landscaping Services" },
  { id: "roofing", name: "Roofing Services" },
  { id: "pest-control", name: "Pest Control Services" },
  { id: "locksmith", name: "Locksmith Services" },
  { id: "painting", name: "Painting Services" },
  { id: "moving", name: "Moving Services" },
  { id: "handyman", name: "Handyman Services" },
  { id: "garage-door", name: "Garage Door Services" },
  { id: "appliance-repair", name: "Appliance Repair" },
  { id: "flooring", name: "Flooring Services" },
  { id: "window-cleaning", name: "Window Cleaning" },
  { id: "carpet-cleaning", name: "Carpet Cleaning" },
  { id: "junk-removal", name: "Junk Removal" },
  { id: "tree-service", name: "Tree Services" },
  { id: "pool-service", name: "Pool Services" },
  { id: "auto-detailing", name: "Auto Detailing" },
  { id: "home-inspection", name: "Home Inspection" },
  { id: "septic-services", name: "Septic Services" },
  { id: "fencing", name: "Fencing Services" },
  { id: "gutters", name: "Gutter Services" },
  { id: "masonry", name: "Masonry Services" },
  { id: "insulation", name: "Insulation Services" },
  { id: "solar", name: "Solar Installation" },
  { id: "security-systems", name: "Security Systems" },
  { id: "chimney", name: "Chimney Services" },
  { id: "pressure-washing", name: "Pressure Washing" },
];

export function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isIndustriesOpen, setIsIndustriesOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const scrollToSection = (sectionId: string) => {
    if (pathname !== "/") {
      router.push("/");
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        element?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      element?.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-black/95 backdrop-blur-sm z-50 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo - Using a placeholder for now since the figma asset won't work */}
          <Link href="/" className="flex items-center">
            <WisegaveLogo className="h-full w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("products")}
              className="text-gray-300 hover:text-white transition-colors"
            >
              Products
            </button>
            <button
              onClick={() => scrollToSection("pricing")}
              className="text-gray-300 hover:text-white transition-colors"
            >
              Pricing
            </button>
            <button
              onClick={() => scrollToSection("guarantees")}
              className="text-gray-300 hover:text-white transition-colors"
            >
              Our Guarantee
            </button>
            <Link
              href="/faqs"
              className="text-gray-300 hover:text-white transition-colors"
            >
              FAQs
            </Link>

            {/* Industries Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setIsIndustriesOpen(true)}
              onMouseLeave={() => setIsIndustriesOpen(false)}
            >
              <button className="text-gray-300 hover:text-white transition-colors flex items-center gap-1">
                Solutions
                <ChevronDown className="w-4 h-4" />
              </button>
              {isIndustriesOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-64 z-[100]">
                  <div className="bg-gradient-to-br from-black via-[#0a0a0a] to-[#1a1a1a] rounded-lg shadow-2xl border border-white/20 max-h-96 overflow-y-auto backdrop-blur-md">
                    {industries.map((industry) => (
                      <Link
                        key={industry.id}
                        href={`/industry/${industry.id}`}
                        className="block px-4 py-2 text-sm text-gray-300 hover:bg-white/10 hover:text-white transition-all duration-200"
                        onClick={() => setIsIndustriesOpen(false)}
                      >
                        {industry.name}
                      </Link>
                    ))}
                    <Link
                      href="/industry/other"
                      className="block px-4 py-2 text-sm text-gray-300 hover:bg-white/10 hover:text-white border-t border-white/10 transition-all duration-200"
                      onClick={() => setIsIndustriesOpen(false)}
                    >
                      Other Industries →
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <a
              href="tel:+1234567890"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Call
            </a>
            <Link
              href="/book-demo"
              className="bg-gradient-to-r from-white to-gray-200 text-black px-6 py-2 rounded-lg hover:from-gray-100 hover:to-white transition-all duration-300 shadow-lg hover:shadow-white/20"
            >
              Book a Demo
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-gray-300 hover:text-white"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 space-y-4">
            <button
              onClick={() => scrollToSection("products")}
              className="block text-gray-300 hover:text-white transition-colors"
            >
              Products
            </button>
            <button
              onClick={() => scrollToSection("pricing")}
              className="block text-gray-300 hover:text-white transition-colors"
            >
              Pricing
            </button>
            <button
              onClick={() => scrollToSection("guarantees")}
              className="block text-gray-300 hover:text-white transition-colors"
            >
              Our Guarantee
            </button>
            <Link
              href="/faqs"
              className="block text-gray-300 hover:text-white transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              FAQs
            </Link>
            <div>
              <button
                onClick={() => setIsIndustriesOpen(!isIndustriesOpen)}
                className="text-gray-300 hover:text-white transition-colors flex items-center gap-1"
              >
                Solutions
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${
                    isIndustriesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {isIndustriesOpen && (
                <div className="mt-2 ml-4 space-y-2">
                  {industries.slice(0, 5).map((industry) => (
                    <Link
                      key={industry.id}
                      href={`/industry/${industry.id}`}
                      className="block text-sm text-gray-400 hover:text-white"
                      onClick={() => {
                        setIsMobileMenuOpen(false);
                        setIsIndustriesOpen(false);
                      }}
                    >
                      {industry.name}
                    </Link>
                  ))}
                  <Link
                    href="/industry/other"
                    className="block text-sm text-blue-400 hover:text-blue-300"
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      setIsIndustriesOpen(false);
                    }}
                  >
                    View All Industries →
                  </Link>
                </div>
              )}
            </div>
            <a
              href="tel:+1234567890"
              className="block text-gray-300 hover:text-white transition-colors"
            >
              Call
            </a>
            <Link
              href="/book-demo"
              className="block bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors text-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Book a Demo
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
