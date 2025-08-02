import React from "react";

const Footer = () => {
  return (
    <footer className="footer footer-center bg-base-300 text-base-content p-6 mt-8">
      <nav className="grid grid-flow-col gap-4">
        <a href="#home" className="link link-hover">
          Home
        </a>
        <a href="#about" className="link link-hover">
          About
        </a>
        <a href="#projects" className="link link-hover">
          Projects
        </a>
        <a href="#skills" className="link link-hover">
          Skills
        </a>
        <a href="#contact" className="link link-hover">
          Contact
        </a>
      </nav>

      <nav>
        <div className="grid grid-flow-col gap-4">
          <a
            href="https://github.com/jacobferreras"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/github.png" alt="GitHub" className="w-6 h-6" />
          </a>
          <a
            href="https://linkedin.com/in/your-profile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/linkedin_icon.png" alt="LinkedIn" className="w-6 h-6" />
          </a>
        </div>
      </nav>

      <aside>
        <p>© {new Date().getFullYear()} Jacob Ferreras. All rights reserved.</p>
        <p className="text-sm opacity-70">
          Built with Next.js, TypeScript & Tailwind CSS
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
