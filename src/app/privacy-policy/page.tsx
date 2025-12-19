"use client";

import { motion } from "framer-motion";
import { Shield, Lock, UserCheck, AlertTriangle, Scale } from "lucide-react";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-950 text-white pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-6xl mb-6">
            Privacy{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Policy
            </span>
          </h1>
          <p className="text-gray-400 mb-8">Last updated: December 12, 2025</p>

          <div className="prose prose-invert max-w-none space-y-8">
            {/* Introduction */}
            <div className="bg-gray-800/50 p-8 rounded-xl border border-gray-700">
              <div className="flex items-start gap-4 mb-4">
                <Shield className="w-8 h-8 text-blue-400 flex-shrink-0" />
                <div>
                  <h2 className="text-2xl mb-3 mt-0">
                    Our Commitment to Your Privacy
                  </h2>
                  <p className="text-gray-300 leading-relaxed">
                    At WiseGave AI, we take your privacy seriously. This Privacy
                    Policy outlines how we collect, use, protect, and share your
                    information when you use our services. We are committed to
                    maintaining the trust you place in us by ensuring your data
                    is handled with the utmost care and security.
                  </p>
                </div>
              </div>
            </div>

            {/* Data Collection */}
            <div className="bg-gray-800/50 p-8 rounded-xl border border-gray-700">
              <h2 className="text-2xl mb-4 flex items-center gap-3">
                <Lock className="w-6 h-6 text-purple-400" />
                Information We Collect
              </h2>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h3 className="text-xl mb-2 text-white">
                    Business Information
                  </h3>
                  <p>
                    We collect information you provide when signing up for our
                    services, including business name, contact details, website,
                    and industry type.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl mb-2 text-white">Usage Data</h3>
                  <p>
                    We collect data on how you interact with our AI systems,
                    including conversation logs, call recordings (with consent),
                    and system performance metrics to improve service quality.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl mb-2 text-white">
                    Customer Interaction Data
                  </h3>
                  <p>
                    Data related to your customers' interactions with our AI
                    systems, including inquiries, appointments, and service
                    requests.
                  </p>
                </div>
              </div>
            </div>

            {/* How We Use Data */}
            <div className="bg-gray-800/50 p-8 rounded-xl border border-gray-700">
              <h2 className="text-2xl mb-4 flex items-center gap-3">
                <UserCheck className="w-6 h-6 text-green-400" />
                How We Use Your Information
              </h2>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>To provide and improve our AI automation services</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>
                    To customize the AI to your specific business needs
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>
                    To provide customer support and technical assistance
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>
                    To send important service updates and notifications
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>
                    To analyze usage patterns and improve our services
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>
                    To comply with legal obligations and enforce our terms
                  </span>
                </li>
              </ul>
            </div>

            {/* Data Protection */}
            <div className="bg-gray-800/50 p-8 rounded-xl border border-gray-700">
              <h2 className="text-2xl mb-4 flex items-center gap-3">
                <Shield className="w-6 h-6 text-blue-400" />
                Data Protection & Security
              </h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  We implement industry-standard security measures to protect
                  your data:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>
                      <strong>End-to-end encryption</strong> for all data
                      transmission
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>
                      <strong>Secure data storage</strong> with regular backups
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>
                      <strong>Access controls</strong> to limit data access to
                      authorized personnel only
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>
                      <strong>Regular security audits</strong> and vulnerability
                      assessments
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>
                      <strong>GDPR and CCPA compliance</strong> measures
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Data Sharing */}
            <div className="bg-gray-800/50 p-8 rounded-xl border border-gray-700">
              <h2 className="text-2xl mb-4 flex items-center gap-3">
                <AlertTriangle className="w-6 h-6 text-yellow-400" />
                Data Sharing & Third Parties
              </h2>
              <div className="space-y-4 text-gray-300">
                <p className="text-yellow-400">
                  <strong>
                    We will NOT utilize your data to breach privacy elsewhere or
                    share it with unauthorized parties.
                  </strong>
                </p>
                <p>
                  Your data may be shared only in the following limited
                  circumstances:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="mt-1">•</span>
                    <span>With your explicit consent</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1">•</span>
                    <span>
                      With service providers who assist in our operations (under
                      strict confidentiality agreements)
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1">•</span>
                    <span>When required by law or to protect legal rights</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1">•</span>
                    <span>
                      In connection with a business transfer (with your
                      notification)
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Conflict of Interest */}
            <div className="bg-gray-800/50 p-8 rounded-xl border border-gray-700">
              <h2 className="text-2xl mb-4 flex items-center gap-3">
                <Scale className="w-6 h-6 text-purple-400" />
                Conflict of Interest Management
              </h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  <strong>
                    We maintain strict conflict of interest policies:
                  </strong>
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-purple-400 mt-1">•</span>
                    <span>
                      Your business data will never be used to benefit
                      competitors
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-purple-400 mt-1">•</span>
                    <span>
                      We maintain data segregation between all clients
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-purple-400 mt-1">•</span>
                    <span>
                      No cross-business analysis or data sharing occurs
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-purple-400 mt-1">•</span>
                    <span>
                      All team members sign confidentiality agreements
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Data Breach */}
            <div className="bg-red-900/20 p-8 rounded-xl border border-red-500/30">
              <h2 className="text-2xl mb-4 text-red-400">Data Breach Policy</h2>
              <div className="space-y-4 text-gray-300">
                <p className="text-red-400 font-semibold">
                  In the unlikely event of a data breach:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="mt-1">•</span>
                    <span>You will be notified within 72 hours</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1">•</span>
                    <span>
                      We will provide full details of the breach and affected
                      data
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1">•</span>
                    <span>Immediate remediation steps will be taken</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1">•</span>
                    <span>
                      <strong>You have the right to take legal action</strong>{" "}
                      against us for any damages resulting from a breach caused
                      by our negligence
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1">•</span>
                    <span>
                      We will cooperate fully with regulatory authorities and
                      investigations
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Your Rights */}
            <div className="bg-gray-800/50 p-8 rounded-xl border border-gray-700">
              <h2 className="text-2xl mb-4">Your Rights</h2>
              <div className="space-y-4 text-gray-300">
                <p>You have the following rights regarding your data:</p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-blue-400 mt-1">✓</span>
                    <span>
                      <strong>Access:</strong> Request a copy of your data
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-400 mt-1">✓</span>
                    <span>
                      <strong>Correction:</strong> Request correction of
                      inaccurate data
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-400 mt-1">✓</span>
                    <span>
                      <strong>Deletion:</strong> Request deletion of your data
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-400 mt-1">✓</span>
                    <span>
                      <strong>Portability:</strong> Request transfer of data to
                      another service
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-400 mt-1">✓</span>
                    <span>
                      <strong>Objection:</strong> Object to certain data
                      processing activities
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact */}
            <div className="bg-gray-800/50 p-8 rounded-xl border border-gray-700">
              <h2 className="text-2xl mb-4">Contact Us</h2>
              <p className="text-gray-300 mb-4">
                If you have questions about this Privacy Policy or wish to
                exercise your rights:
              </p>
              <div className="space-y-2 text-gray-300">
                <p>
                  Email:{" "}
                  <a
                    href="mailto:privacy@wisegave.ai"
                    className="text-blue-400 hover:text-blue-300"
                  >
                    privacy@wisegave.ai
                  </a>
                </p>
                <p>
                  Phone:{" "}
                  <a
                    href="tel:+61234567890"
                    className="text-blue-400 hover:text-blue-300"
                  >
                    +61 2 3456 7890
                  </a>
                </p>
                <p>Address: Sydney, NSW, Australia</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
