// src/components/Footer.tsx
import React from "react";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Resume Matcher</h3>
            <p className="text-slate-300">
              Optimize your job applications to beat the Applicant Tracking
              Systems and land more interviews.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/#"
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/#resume-matcher"
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  Resume Matcher
                </Link>
              </li>
              <li>
                <Link
                  href="/#how-it-works"
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  How It Works
                </Link>
              </li>
              <li>
                <Link
                  href="/#tips"
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  Resume Tips
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <p className="text-slate-300">
              Have questions or feedback? Get in touch with us.
            </p>
            <a
              href="mailto:info@resumematcher.com"
              className="text-primary hover:text-white transition-colors"
            >
              info@resumematcher.com
            </a>
          </div>
        </div>
        <div className="border-t border-slate-700 mt-8 pt-8 text-center text-slate-400">
          <p>&copy; {currentYear} Resume Matcher. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
