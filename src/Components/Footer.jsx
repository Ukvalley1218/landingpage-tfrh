import React, { useState } from 'react'
import logo from '../assets/logo.webp'





const Footer = () => {
  const [hovered, setHovered] = useState(null);
  const links = [
        {
            id: 1,
            link: "About the Book",
            src: "#about-book"
        },
        {
            id: 2,
            link: "About the Author",
            src: "#about-author"
        },
        {
            id: 3,
            link: "Reader Reviews",
            src: "#reader-reviews"
        },
        {
            id: 4,
            link: "FAQs",
            src: "#faqs"
        },


    ]

  return (
    <footer className="bg-gradient-to-b from-[#3B7CC9] to-[#1C2B4A] text-white mb-10 lg:mb-16">
                    <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
                        {/* Logo Section - Full Width */}
                        <div className="mb-8">
                            <img loading="lazy" 
                                src={logo}
                                alt="1XL Infra Logo"
                                className="h-auto lg:w-[20%]"
                            />
    
                        </div>
    
                        {/* Main Footer Content */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
                            {/* About the Book */}
                            <div>
                                <h3 className="text-[20px] font-bold mb-4 text-[#F9C646]">About the Book</h3>
                                <p className="text-gray-200 text-[18px] leading-relaxed text-justify">
                                   Unlock the secrets of Dubai’s booming real estate market. Your complete step-by-step guide to buying, investing, and growing wealth in the world’s most dynamic city.
                                </p>
                            </div>
    
                            {/* Quick Links */}
                            <div className='xl:ml-20'>
                                <h3 className="text-[20px] font-bold mb-4 text-[#F9C646]">Quick Links</h3>
                                <ul className="space-y-3">
                                    {links.map((link) => (
                                        <li key={link.id}>
                                            <a
                                                href={link.src}
                                                className="text-white text-[18px] transition-all inline-block py-1 rounded-md hover:bg-white/10"
                                            >
                                                {link.link}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
    
                            {/* Legal */}
                            <div className='xl:ml-10'>
                                <h3 className="text-[20px] font-bold mb-4 text-[#F9C646]">Legal</h3>
                                <ul className="space-y-3">
                                    {[
                                        { name: "Privacy Policy", path: "/books/tfrh/privacy-policy" },
                                        { name: "Terms & Conditions", path: "/books/tfrh/terms" },
                                        { name: "Return Policy", path: "/books/tfrh/return-policy" },
                                        { name: "Shipping Policy", path: "/books/tfrh/shipping-policy" },
                                        { name: "Payment Policy", path: "/books/tfrh/payment-policy" },
                                        { name: "Cookie Policy", path: "/books/tfrh/cookie-policy" },
                                    ].map((item, idx) => (
                                        <li key={idx}>
                                            <a
                                                href={item.path}
                                                className="text-gray-200 hover:text-white text-[18px] transition-all inline-block py-1 rounded-md hover:bg-white/10"
                                            >
                                                {item.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
    
    
                            {/* Connect With Us */}
                            <div>
                                <h3 className="text-[20px] font-bold mb-4 text-[#F9C646]">Connect With Us</h3>
    
                                {/* Email */}
                                <a
  href="mailto:support@1XL.com"
  onClick={(e) => {
    if (window.innerWidth > 768) {
      window.open(
        "https://mail.google.com/mail/?view=cm&fs=1&to=support@1XL.com",
        "_blank"
      );
      e.preventDefault();
    }
  }}
  className="flex items-center gap-2 text-gray-200 hover:text-white hover:bg-white/10 text-sm mb-6 group cursor-pointer"
>
                  <svg
                    className="w-5 h-5 xl:mt-1.5 flex-shrink-0"
                    fill="none" npm
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="break-all text-[18px]">
                    support@1XL.com
                  </span>
                </a>

    
                                <div className="flex flex-nowrap gap-2 pb-2">
                                    <a
                                        href="https://www.instagram.com/MamataJain1XL/"
                                        className="relative group w-8 h-8 bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 rounded flex items-center justify-center hover:scale-105 transition-transform"
                                        aria-label="Instagram"
                                        target="blank"
                                    >
                                        <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 text-xs text-white bg-gray-900 rounded opacity-0 group-hover:opacity-100 group-hover:-translate-y-1 transition-all duration-200 whitespace-nowrap z-10">
                                            Instagram
                                        </span>
                                        <svg className="w-5 h-5" fill="white" viewBox="0 0 24 24">
                                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                        </svg>
                                    </a>
    
                                    <a
                                        href="https://www.linkedin.com/company/MamataJain1XL/"
                                        className="relative group w-8 h-8 bg-[#0077b5] rounded flex items-center justify-center hover:scale-105 transition-transform"
                                        aria-label="LinkedIn"
                                        target="blank"
                                    >
                                        <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 text-xs text-white bg-gray-900 rounded opacity-0 group-hover:opacity-100 group-hover:-translate-y-1 transition-all duration-200 whitespace-nowrap z-10">
                                            LinkedIn
                                        </span>
                                        <svg className="w-5 h-5" fill="white" viewBox="0 0 24 24">
                                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                        </svg>
                                    </a>
    
                                    <a
                                        href="https://www.facebook.com/MamataJain1XL/"
                                        className="relative group w-8 h-8 bg-[#1877f2] rounded flex items-center justify-center hover:scale-105 transition-transform"
                                        aria-label="Facebook"
                                        target="blank"
                                    >
                                        <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 text-xs text-white bg-gray-900 rounded opacity-0 group-hover:opacity-100 group-hover:-translate-y-1 transition-all duration-200 whitespace-nowrap z-10">
                                            Facebook
                                        </span>
                                        <svg className="w-5 h-5" fill="white" viewBox="0 0 24 24">
                                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                        </svg>
                                    </a>
    
                                    <a
                                        href="https://www.youtube.com/@MamataJain1XL"
                                        className="relative group w-8 h-8 bg-[#ff0000] rounded flex items-center justify-center hover:scale-105 transition-transform"
                                        aria-label="YouTube"
                                        target="blank"
                                    >
                                        <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 text-xs text-white bg-gray-900 rounded opacity-0 group-hover:opacity-100 group-hover:-translate-y-1 transition-all duration-200 whitespace-nowrap z-10">
                                            YouTube
                                        </span>
                                        <svg className="w-5 h-5" fill="white" viewBox="0 0 24 24">
                                            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                                        </svg>
                                    </a>
    
                                    <a
                                        href="https://x.com/MamataJain1XL"
                                        className="relative group w-8 h-8 bg-black rounded flex items-center justify-center hover:scale-105 transition-transform"
                                        aria-label="X"
                                        target="blank"
                                    >
                                        <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 text-xs text-white bg-gray-900 rounded opacity-0 group-hover:opacity-100 group-hover:-translate-y-1 transition-all duration-200 whitespace-nowrap z-10">
                                            X
                                        </span>
                                        <svg className="w-5 h-5" fill="white" viewBox="0 0 24 24">
                                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                        </svg>
                                    </a>
    
                                    <a
                                        href="https://www.threads.com/@MamataJain1XL"
                                        className="relative group w-8 h-8 bg-black rounded flex items-center justify-center hover:scale-105 transition-transform"
                                        aria-label="Threads"
                                        target="blank"
                                    >
                                        <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 text-xs text-white bg-gray-900 rounded opacity-0 group-hover:opacity-100 group-hover:-translate-y-1 transition-all duration-200 whitespace-nowrap z-10">
                                            Threads
                                        </span>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="30"
                                            height="30"
                                            viewBox="0 0 16 16"
                                        >
                                            <path
                                                fill="#fff"
                                                d="M6.321 6.016c-.27-.18-1.166-.802-1.166-.802c.756-1.081 1.753-1.502 3.132-1.502c.975 0 1.803.327 2.394.948s.928 1.509 1.005 2.644q.492.207.905.484c1.109.745 1.719 1.86 1.719 3.137c0 2.716-2.226 5.075-6.256 5.075C4.594 16 1 13.987 1 7.994C1 2.034 4.482 0 8.044 0C9.69 0 13.55.243 15 5.036l-1.36.353C12.516 1.974 10.163 1.43 8.006 1.43c-3.565 0-5.582 2.171-5.582 6.79c0 4.143 2.254 6.343 5.63 6.343c2.777 0 4.847-1.443 4.847-3.556c0-1.438-1.208-2.127-1.27-2.127c-.236 1.234-.868 3.31-3.644 3.31c-1.618 0-3.013-1.118-3.013-2.582c0-2.09 1.984-2.847 3.55-2.847c.586 0 1.294.04 1.663.114c0-.637-.54-1.728-1.9-1.728c-1.25 0-1.566.405-1.967.868ZM8.716 8.19c-2.04 0-2.304.87-2.304 1.416c0 .878 1.043 1.168 1.6 1.168c1.02 0 2.067-.282 2.232-2.423a6.2 6.2 0 0 0-1.528-.161"
                                            />
                                        </svg>
                                    </a>
    
    
    
                                    <a
                                        href="https://www.pinterest.com/MamataJain1XL/"
                                        className="relative group w-8 h-8 bg-[#e60023] rounded flex items-center justify-center hover:scale-105 transition-transform"
                                        aria-label="Pinterest"
                                        target="blank"
                                    >
                                        <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 text-xs text-white bg-gray-900 rounded opacity-0 group-hover:opacity-100 group-hover:-translate-y-1 transition-all duration-200 whitespace-nowrap z-10">
                                            Pinterest
                                        </span>
                                        <svg className="w-5 h-5" fill="white" viewBox="0 0 24 24">
                                            <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
    
                        {/* Divider */}
                        <div className="border-t border-white/20 my-8"></div>
    
                        {/* Copyright */}
    
    
                        <p className="text-center text-gray-300 text-sm">
                            © {new Date().getFullYear()}
                            <a href="https://drmamatajain.com/" target="blank" className="hover:text-yellow-400 cursor-pointer"> Dr. Mamata Dhiraj Jain. </a>
                            All Rights Reserved.
                        </p>
    
                    </div>
                </footer>
  );
};

export default Footer;