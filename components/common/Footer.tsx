import React from "react";

const Footer = () => {
  return (
    <footer className="bg-base-300 border-t border-base-content/10 mt-16">
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-base-content">
              Jacob Ferreras
            </h3>
            <p className="text-sm text-base-content/80 leading-relaxed">
              Full-stack developer passionate about creating innovative web
              solutions and user experiences.
            </p>
          </div>

          {/* Quick links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-base-content">
              Quick Links
            </h3>
            <nav className="flex flex-col space-y-2">
              <a
                href="#home"
                className="text-sm text-base-content/80 hover:text-base-content transition-colors"
              >
                Home
              </a>
              <a
                href="#about"
                className="text-sm text-base-content/80 hover:text-base-content transition-colors"
              >
                About
              </a>
              <a
                href="#projects"
                className="text-sm text-base-content/80 hover:text-base-content transition-colors"
              >
                Projects
              </a>
              <a
                href="#skills"
                className="text-sm text-base-content/80 hover:text-base-content transition-colors"
              >
                Skills
              </a>
              <a
                href="#contact"
                className="text-sm text-base-content/80 hover:text-base-content transition-colors"
              >
                Contact
              </a>
            </nav>
          </div>

          {/* Connect section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-base-content">
              Let's Connect
            </h3>
            <div className="flex space-x-4">
              <a
                href="https://github.com/jacobferreras"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
                aria-label="GitHub Profile"
              >
                <div className="w-10 h-10 bg-base-100 rounded-lg flex items-center justify-center group-hover:bg-base-content/10 transition-colors">
                  <img src="/github.png" alt="GitHub" className="w-6 h-6" />
                </div>
              </a>
              <a
                href="https://linkedin.com/in/jacobferreras"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
                aria-label="LinkedIn Profile"
              >
                <div className="w-10 h-10 bg-base-100 rounded-lg flex items-center justify-center group-hover:bg-base-content/10 transition-colors">
                  <img
                    src="/linkedin_icon.png"
                    alt="LinkedIn"
                    className="w-6 h-6"
                  />
                </div>
              </a>
            </div>
            <div className="space-y-2">
              <p className="text-sm text-base-content/80">
                📧 Available for opportunities
              </p>
              <a
                href="/Jacob Ferreras.pdf"
                target="_blank"
                className="text-sm text-primary hover:text-primary-focus transition-colors"
              >
                📄 Download Resume
              </a>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-base-content/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-sm text-base-content/80">
                © {new Date().getFullYear()} Jacob Ferreras. All rights
                reserved.
              </p>
            </div>
            <div className="text-center md:text-right">
              <p className="text-sm text-base-content/60">
                Built with Next.js, TypeScript & Tailwind CSS
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
