"use client";

import { motion } from "framer-motion";
import { industries } from "@/data/industries";
import { Check, ArrowRight, Mail, Building, Globe, MapPin } from "lucide-react";
import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";

export const runtime = "edge";

export default function IndustryPage() {
  const params = useParams();
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    businessName: "",
    website: "",
    country: "",
    businessIdea: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const industryId = params.industryId as string;
  const industry = industries.find((i) => i.id === industryId);
  const isOther = industryId === "other";

  useEffect(() => {
    if (!industry && !isOther) {
      router.push("/");
    }
  }, [industry, isOther, router]);

  if (!industry && !isOther) {
    return null;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      // Submit to API
      const response = await fetch("/api/submit-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          industry: isOther ? "Other" : industry?.name,
        }),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitted(true);
      } else {
        setError(result.message || "Failed to submit form. Please try again.");
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
      console.error("Form submission error:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors"
        >
          ← Back to Home
        </Link>

        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-2xl mx-auto text-center py-20"
          >
            <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="w-10 h-10 text-green-400" />
            </div>
            <h2 className="text-4xl mb-4">Thank You!</h2>
            <p className="text-xl text-gray-400 mb-8">
              We've received your request. Our team will contact you within 24
              hours to discuss how WiseGave AI can transform your{" "}
              {industry?.name || "business"}.
            </p>
            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors"
            >
              Return to Home
            </Link>
          </motion.div>
        ) : (
          <>
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h1 className="text-5xl md:text-6xl mb-6">
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  {isOther
                    ? "Tell Us About Your Business"
                    : industry?.name ?? ""}
                </span>
              </h1>
              {!isOther && industry && (
                <>
                  <p className="text-xl text-gray-300 mb-4">
                    AI-Powered Automation for {industry.name}
                  </p>
                  <p className="text-gray-400 max-w-3xl mx-auto">
                    Transform your {industry.name.toLowerCase()} business with
                    intelligent automation
                  </p>
                </>
              )}
            </motion.div>

            {!isOther && (
              <div className="grid md:grid-cols-2 gap-8 mb-16">
                {/* Services */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="bg-gradient-to-br from-blue-900/20 to-blue-800/10 p-8 rounded-2xl border border-blue-500/20"
                >
                  <h3 className="text-2xl mb-4 flex items-center gap-2">
                    <Check className="w-6 h-6 text-blue-400" />
                    Your Services
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {industry?.services ?? ""}
                  </p>
                </motion.div>

                {/* Automation Needs */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="bg-gradient-to-br from-purple-900/20 to-purple-800/10 p-8 rounded-2xl border border-purple-500/20"
                >
                  <h3 className="text-2xl mb-4 flex items-center gap-2">
                    <Check className="w-6 h-6 text-purple-400" />
                    Automation Solutions
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {industry?.automationNeeds ?? ""}
                  </p>
                </motion.div>
              </div>
            )}

            {/* Form Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="max-w-3xl mx-auto"
            >
              <div className="bg-gray-800/50 p-8 md:p-12 rounded-2xl border border-gray-700">
                <h2 className="text-3xl mb-6 text-center">
                  {isOther
                    ? "Share Your Business Details"
                    : "Get Started Today"}
                </h2>
                <p className="text-gray-400 text-center mb-8">
                  {isOther
                    ? "Tell us about your business and we'll create a custom solution for you"
                    : "Book a demo or submit your request and our team will contact you within 24 hours"}
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Link
                    href="/book-demo"
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-6 py-4 rounded-lg transition-colors text-center flex items-center justify-center gap-2"
                  >
                    Book a Demo
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                  <button
                    onClick={() =>
                      document
                        .getElementById("request-form")
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                    className="flex-1 bg-gray-700 hover:bg-gray-600 text-white px-6 py-4 rounded-lg transition-colors text-center"
                  >
                    Submit Request Form
                  </button>
                </div>

                {/* Request Form */}
                <div
                  id="request-form"
                  className="border-t border-gray-700 pt-8"
                >
                  <h3 className="text-xl mb-6">Request Form</h3>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {isOther && (
                      <div>
                        <label className="block text-sm mb-2 text-gray-300">
                          Brief Idea About Your Business *
                        </label>
                        <textarea
                          name="businessIdea"
                          required
                          value={formData.businessIdea}
                          onChange={handleChange}
                          rows={4}
                          className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 text-white"
                          placeholder="Tell us about your business, industry, and what you'd like to automate..."
                        />
                      </div>
                    )}

                    <div>
                      <label className="block text-sm mb-2 text-gray-300 flex items-center gap-2">
                        <Mail className="w-4 h-4" />
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 text-white"
                        placeholder="your@email.com"
                      />
                    </div>

                    <div>
                      <label className="block text-sm mb-2 text-gray-300 flex items-center gap-2">
                        <Building className="w-4 h-4" />
                        Business Name *
                      </label>
                      <input
                        type="text"
                        name="businessName"
                        required
                        value={formData.businessName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 text-white"
                        placeholder="Your Business Name"
                      />
                    </div>

                    <div>
                      <label className="block text-sm mb-2 text-gray-300 flex items-center gap-2">
                        <Globe className="w-4 h-4" />
                        Business Website
                      </label>
                      <input
                        type="url"
                        name="website"
                        value={formData.website}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 text-white"
                        placeholder="https://yourbusiness.com"
                      />
                    </div>

                    <div>
                      <label className="block text-sm mb-2 text-gray-300 flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        Country *
                      </label>
                      <input
                        type="text"
                        name="country"
                        required
                        value={formData.country}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 text-white"
                        placeholder="Your Country"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed text-white px-6 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                    >
                      {loading ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          Submitting...
                        </>
                      ) : (
                        <>
                          Submit Request
                          <ArrowRight className="w-5 h-5" />
                        </>
                      )}
                    </button>

                    {/* Error message */}
                    {error && (
                      <div className="mt-4 p-3 bg-red-500/10 border border-red-500/30 rounded-lg">
                        <p className="text-red-400 text-sm">{error}</p>
                      </div>
                    )}
                  </form>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </div>
    </div>
  );
}
