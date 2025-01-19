const SITEMAP = [
  {
    title: "Company",
    links: ["About Us", "Careers", "Our Team", "Projects"],
  },
  {
    title: "Help Center",
    links: ["Discord", "Twitter", "GitHub", "Contact Us"],
  },
  {
    title: "Resources",
    links: ["Blog", "Newsletter", "Free Products", "Affiliate Program"],
  },
  {
    title: "Products",
    links: ["Templates", "UI Kits", "Icons", "Mockups"],
  },
];

const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="w-full bg-gray-800 py-12 text-white">
      <div className="mx-auto max-w-7xl px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {SITEMAP.map(({ title, links }, index) => (
            <div key={index} className="space-y-4">
              <h4 className="font-semibold uppercase text-gray-300">{title}</h4>
              <ul className="space-y-2">
                {links.map((link, index) => (
                  <li key={index}>
                    <a href="/" className="text-gray-400 hover:text-gray-200">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8">
          <div className="flex flex-col items-center md:flex-row md:justify-between">
            <p className="text-center text-sm text-gray-400">
              &copy; {currentYear} Abdelrahman and Alaa Eldeen. All Rights
              Reserved.
            </p>
            <div className="flex gap-4 text-gray-600">
              <a
                href="https://www.linkedin.com/in/abdelrahman-abdelnasser00/"
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-80 transition-opacity hover:opacity-100"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M22.225 0H1.771C.791 0 0 .774 0 1.729v20.543C0 23.226.792 24 1.771 24h20.451C23.208 24 24 23.226 24 22.271V1.729C24 .774 23.208 0 22.225 0zM7.119 20.452H3.542V9h3.577v11.452zM5.331 7.712a2.078 2.078 0 01-2.066-2.066c0-1.136.931-2.067 2.066-2.067 1.14 0 2.067.931 2.067 2.067 0 1.14-.926 2.066-2.067 2.066zM20.454 20.452h-3.576v-5.592c0-1.333-.028-3.052-1.859-3.052-1.862 0-2.147 1.454-2.147 2.952v5.692h-3.576V9h3.435v1.561h.05c.479-.906 1.643-1.859 3.382-1.859 3.621 0 4.291 2.38 4.291 5.473v6.277z" />
                </svg>
              </a>
              <a
                href="https://github.com/AbdelrahmanNasser00"
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-80 transition-opacity hover:opacity-100"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.38 7.86 10.91.57.1.78-.25.78-.55 0-.28-.01-1.03-.01-2.02-3.19.69-3.86-1.54-3.86-1.54-.52-1.31-1.26-1.66-1.26-1.66-1.03-.71.08-.7.08-.7 1.14.08 1.73 1.17 1.73 1.17 1.01 1.73 2.64 1.23 3.29.94.1-.74.4-1.23.72-1.51-2.54-.29-5.21-1.27-5.21-5.66 0-1.25.44-2.27 1.17-3.07-.12-.29-.5-1.44.11-3 0 0 .95-.31 3.11 1.17.91-.25 1.88-.37 2.85-.37.97 0 1.94.12 2.85.37 2.16-1.48 3.11-1.17 3.11-1.17.61 1.56.23 2.71.11 3 .73.8 1.17 1.82 1.17 3.07 0 4.4-2.67 5.37-5.21 5.66.41.35.76 1.04.76 2.1 0 1.52-.01 2.75-.01 3.12 0 .31.21.66.78.55 4.57-1.53 7.86-5.83 7.86-10.91C23.5 5.73 18.27.5 12 .5z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
