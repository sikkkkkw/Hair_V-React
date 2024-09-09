import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';
import '../css/font.css';

export default function Footer() {
  return (
    <footer className="bg-blue-400 py-10 w-full">
      <div className="container mx-auto px-4">
        {/* 소셜 미디어 아이콘 */}
        <div className="flex justify-center space-x-6 mb-4">
          <a
            href="https://www.instagram.com/hair_v.maeum"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300"
          >
            <FaInstagram size={24} />
          </a>
          <a
            href="https://www.youtube.com/@su2__jung/featured"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300"
          >
            <FaYoutube size={24} />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100003521889847&locale=ko_KR"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300"
          >
            <FaFacebookF size={24} />
          </a>
        </div>

        {/* 회사 정보 */}
        <div className="text-center text-white text-sm fonttest">
          <p>(42144) 대구광역시 황금동 691-3</p>
          <p>

          사업자등록번호 : 641-34-01431{" "}
            |{" "} 대표자 : 최수정
          </p>
        </div>
      </div>
    </footer>
  );
}
