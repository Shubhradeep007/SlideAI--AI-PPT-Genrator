

const IconTwitter = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-.422.724-.665 1.634-.665 2.615 0 2.088 1.064 3.922 2.688 4.995-.976-.03-1.894-.3-2.696-.748v.068c0 2.92 2.078 5.357 4.834 5.908-.502.136-1.03.208-1.57.208-.386 0-.76-.036-1.126-.108 1.06 2.623 3.999 4.39 7.377 4.44-2.063 1.615-4.666 2.57-7.49 2.57-.488 0-.968-.028-1.44-.084 2.673 1.71 5.86 2.71 9.28 2.71 11.11 0 17.18-9.22 17.18-17.18 0-.26-.006-.52-.018-.78.96-.69 1.79-1.56 2.45-2.55z" />
  </svg>
);

const IconGitHub = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.034c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.652.242 2.873.118 3.176.77.84 1.235 1.91 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.201-6.086 8.201-11.385 0-6.627-5.373-12-12-12z" />
  </svg>
);

const IconLinkedIn = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c.566-1.14 2.368-1.765 3.788-1.765 2.83 0 5.212 2.061 5.212 6.236v4.764z" />
  </svg>
);

const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-neutral-400 relative overflow-hidden">
      {/* Animated gradient bar */}
      <div className="absolute top-0 left-0 w-full h-1">
        <div className="h-full bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 animate-pulse"></div>
      </div>

      <div className="max-w-7xl mx-auto py-16 px-8 grid grid-cols-2 md:grid-cols-4 gap-8">
        {/* Brand Section */}
        <div>
          <h3 className="text-xl font-bold text-white mb-3">Slide AI</h3>
          <p className="text-sm">
            Crafting perfect presentations with the power of AI.
          </p>
        </div>

        {/* Links Section */}
        <div>
          <h4 className="font-semibold text-white mb-3">Product</h4>
          <ul className="space-y-2">
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                Features
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                Pricing
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                Demo
              </a>
            </li>
          </ul>
        </div>

        {/* Company Section */}
        <div>
          <h4 className="font-semibold text-white mb-3">Company</h4>
          <ul className="space-y-2">
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                Careers
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Legal Section */}
        <div>
          <h4 className="font-semibold text-white mb-3">Legal</h4>
          <ul className="space-y-2">
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                Terms of Service
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-neutral-800 mt-8 py-8 px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} Slide AI. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a
              href="#"
              className="text-neutral-500 hover:text-white transition-colors duration-300"
              aria-label="Twitter"
            >
              <IconTwitter />
            </a>
            <a
              href="#"
              className="text-neutral-500 hover:text-white transition-colors duration-300"
              aria-label="GitHub"
            >
              <IconGitHub />
            </a>
            <a
              href="#"
              className="text-neutral-500 hover:text-white transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <IconLinkedIn />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
