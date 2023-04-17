import Link from 'next/link';
export default function Header() {
  return (
    <div className="top_bar">
      <div className="top_dropdown">
        <img src="https://icebiscuit.com/web/upload/img/kr.png" /> KOREA
        <div id="top_myDropdown" className="top_dropdown-content">
          <a href="https://icebiscuit.nyc/" target="_blank"></a>
        </div>
      </div>

      <Link href="src/components" data-aos="fade-down" className="aos-init aos-animate">
        {' '}
        <span style={{ fontSize: '11px' }}>신규회원가입시 3천원 &amp; 5천원 쿠폰 증정</span>
      </Link>
    </div>
  );
}
