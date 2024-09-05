import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-blue-400 py-10 w-full">
      <div className="container mx-auto px-4">
        {/* 소셜 미디어 아이콘 */}
        <div className="flex justify-center space-x-6 mb-4">
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300"
          >
            <FaInstagram size={24} />
          </a>
          <a
            href="https://www.youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300"
          >
            <FaYoutube size={24} />
          </a>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300"
          >
            <FaFacebookF size={24} />
          </a>
        </div>

        {/* 회사 정보 */}
        <div className="text-center text-white text-sm">
          <p>© 2024 Your Company Name. All rights reserved.</p>
          <p>
            <a
              href="/privacy"
              className="hover:underline hover:text-gray-100"
            >
              Privacy Policy
            </a>{" "}
            |{" "}
            <a
              href="/terms"
              className="hover:underline hover:text-gray-100"
            >
              Terms of Service
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
