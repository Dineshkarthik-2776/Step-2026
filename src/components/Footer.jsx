function Footer() {
  return (
    <footer className="bg-gray-900 text-white h-[50px] flex flex-col items-center justify-center text-center">
      <div className="max-w-6xl mx-auto px-4">
        {/* === Wrapper === */}
        <div className="flex flex-col items-center justify-center space-y-6">
          
          {/* === Copyright === */}
          <p className="text-sm md:text-base text-gray-300">
            © 2025 <span className="font-semibold text-white">SVCE IT</span>. All rights reserved.
          </p>

          {/* === Social Icons === */}
          <div className="flex items-center justify-center space-x-10 sm:space-x-16">
            <a
              href="https://www.instagram.com/svceofficial/?hl=en"
              target="_blank"
              rel="noreferrer"
              title="Instagram"
              className="transition-transform hover:scale-110"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
                alt="Instagram"
                className="w-[35px] h-[35px] object-contain"
              />
            </a>

            <a
              href="https://www.svce.ac.in/"
              target="_blank"
              rel="noreferrer"
              title="Website"
              className="transition-transform hover:scale-110"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/8/87/Google_Chrome_icon_%282011%29.png"
                alt="Website"
                className="w-[35px] h-[35px] object-contain"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
