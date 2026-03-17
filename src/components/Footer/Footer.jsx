import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { MdChevronRight, MdEmail, MdPhone, MdLanguage } from "react-icons/md";

const quickLinks = [
    { label: "Home", to: "/" },
    { label: "About Us", to: "/president-desk" },
    { label: "Graviences", to: "/student-grievances" },
    { label: "Faculty", to: "/faculty" },
];

const additionalLinks = [
    { label: "Admission", to: "/admission-form" },
    { label: "Terms & Conditions", to: "#" },
    { label: "Privacy Policy", to: "#" },
    { label: "Contact Us", to: "/contact" },
];

const Footer = () => {
    return (
        <footer className="bg-[#2a2d35] text-white pt-14 pb-0">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">

                {/* Top Grid — 3 columns */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-12">

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-base font-bold mb-6 tracking-wide">Quick Links</h3>
                        <ul className="space-y-3 text-[14px] text-gray-300">
                            {quickLinks.map((link) => (
                                <li key={link.label} className="flex items-center gap-1">
                                    <MdChevronRight className="text-gray-400 shrink-0" size={16} />
                                    <Link to={link.to} className="hover:text-white transition">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Additional Links */}
                    <div>
                        <h3 className="text-base font-bold mb-6 tracking-wide">Additional Links</h3>
                        <ul className="space-y-3 text-[14px] text-gray-300">
                            {additionalLinks.map((link) => (
                                <li key={link.label} className="flex items-center gap-1">
                                    <MdChevronRight className="text-gray-400 shrink-0" size={16} />
                                    <Link to={link.to} className="hover:text-white transition">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-base font-bold mb-6 tracking-wide">Contact Info</h3>
                        <ul className="space-y-3 text-[14px] text-gray-300">
                            <li className="flex items-center gap-2">
                                <MdEmail size={16} className="text-gray-400 shrink-0" />
                                <span>reply@brahmavalley.com</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <MdPhone size={16} className="text-gray-400 shrink-0" />
                                <span>+91 9923072990</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="w-4 shrink-0" />
                                <span>+91 9923072990</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <MdLanguage size={16} className="text-gray-400 shrink-0" />
                                <span>www.brahmavalley.com</span>
                            </li>
                        </ul>
                    </div>

                </div>

                {/* Bottom bar */}
                <div className="border-t border-white/10 py-5 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-sm text-gray-400">
                        © 2026 Brahma Valley University. All rights reserved.
                    </p>

                    {/* Social Icons */}
                    <div className="flex gap-4">
                        <a href="#" aria-label="Facebook" className="text-gray-300 hover:text-white transition">
                            <FaFacebookF size={18} />
                        </a>
                        <a href="#" aria-label="Twitter" className="text-gray-300 hover:text-white transition">
                            <FaTwitter size={18} />
                        </a>
                        <a href="#" aria-label="Instagram" className="text-gray-300 hover:text-white transition">
                            <FaInstagram size={18} />
                        </a>
                        <a href="#" aria-label="LinkedIn" className="text-gray-300 hover:text-white transition">
                            <FaLinkedinIn size={18} />
                        </a>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;