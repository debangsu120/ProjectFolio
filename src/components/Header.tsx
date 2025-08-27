// src/components/Header.tsx
import { NavLink } from "react-router-dom";
import { Menu, Mountain } from "lucide-react";
import React, { useState } from "react";

const navLinks = [
    { to: "/", label: "Home" },
    { to: "/projects", label: "Projects" },
    { to: "/tech", label: "Tech Stack" },
    { to: "/editor", label: "Editor" },
    { to: "/contact", label: "Contact" },
];

const Header: React.FC = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const getNavLinkClass = ({ isActive }: { isActive: boolean }) =>
        isActive
            ? "text-white transition-colors hover:text-white"
            : "text-gray-300 transition-colors hover:text-white";

    return (
        <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-gray-900 px-4 md:px-6 z-50">
            <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
                <NavLink
                    to="/"
                    className="flex items-center gap-2 text-lg font-semibold md:text-base text-white"
                >
                    <Mountain className="h-6 w-6" />
                    <span className="sr-only">ProjectFolio</span>
                </NavLink>
                {navLinks.map((link) => (
                    <NavLink key={link.to} to={link.to} className={getNavLinkClass}>
                        {link.label}
                    </NavLink>
                ))}
            </nav>
            
            {/* Mobile menu button */}
            <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="shrink-0 md:hidden p-2 text-white hover:bg-gray-800 rounded"
            >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
            </button>
            
            {/* Mobile menu */}
            {isMobileMenuOpen && (
                <div className="absolute top-16 left-0 right-0 bg-gray-900 border-b md:hidden">
                    <nav className="grid gap-4 p-4 text-lg font-medium">
                        <NavLink
                            to="/"
                            className="flex items-center gap-2 text-lg font-semibold text-white"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            <Mountain className="h-6 w-6" />
                            <span className="sr-only">ProjectFolio</span>
                        </NavLink>
                        {navLinks.map((link) => (
                            <NavLink 
                                key={link.to} 
                                to={link.to} 
                                className="text-gray-300 hover:text-white"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {link.label}
                            </NavLink>
                        ))}
                    </nav>
                </div>
            )}
            
            <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
                {/* Placeholder for future elements like search or user profile */}
            </div>
        </header>
    );
};

export default Header;