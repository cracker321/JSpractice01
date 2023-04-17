import Link from 'next/link';

export default function Footer() {
  return (
    <div id="footer" className="cboth">
      <div className="cboth footer_inner">
        <div className="f_logo" style={{ width: '22%' }}>
          <img src="https://icebiscuit.com/web/upload/img/simbol_03.png" alt="logo" />
        </div>
        <div className="f_menu" style={{ width: '13%' }}>
          <a href="/about.html">About us</a>
          <a href="/faq.html?board_no=5">Q&amp;A</a>
          <a href="/login/agreement.html">Agreement</a>
          <a href="/login/privacy.html">Privacy policy</a>
          <a href="/celebrity.html?cate_no=150">Celebrity</a>
        </div>
        <div className="f_menu" style={{ width: '11%' }}>
          <a href="/product/list.html?cate_no=223">Shop</a>
          <a href="/lookbook.html?cate_no=258">Lookbook</a>
          <a href="/event.html?cate_no=145">Event</a>
          <a href="/media.html?cate_no=192">Media</a>
          <a href="/store.html?board_no=101">Store</a>
        </div>
        <div className="f_call" style={{ width: '21%' }}>
          <span>
            {' '}
            <i className="fa fa-phone" style={{ fontSize: '14px', padding: '0 0 10px 0' }} aria-hidden="true" />
            1833-2005
          </span>
          평일 09:00 - 17:00
          <br />
          (점심 12:00 - 13:00)
          <br />
          토/일요일·공휴일 휴무
          <br />
          물류센터 : 경기도 이천시 마장면 덕이로 22-18 프로로지스 덕평센터 2층
          <br />
          <p style={{ padding: '10px 0 10px 0', fontSize: '14px' }}>
            <i className="fa fa-paper-plane-o" aria-hidden="true" />
            <br />
            매장 개설 문의 don@thekary.com <br />
            마케팅/제휴 문의 silver@thekary.com <br />
            CS 문의 cs@thekary.com <br />
          </p>
        </div>
        <div style={{ width: '32%' }} className="xans-element- xans-layout xans-layout-footer f_company ">
          COMPANY: ㈜ 더캐리 &nbsp;&nbsp;
          <br />
          대표자 : 이은정,윤중용
          <br />
          사업자 등록번호 안내 : [128-87-03548]
          <br />
          통신판매업 신고 : 제 2021-서울용산-1694 <a href="src/components#none">[사업자정보확인]</a>
          <br />
          개인정보관리책임자 : 서재원
          <br />
          {/* 전화 : 1833-2005 &nbsp;&nbsp;            FAX : 02-6119-5003<br/>*/}
          주소 : 서울특별시 용산구 한남동 738-36 2F-5F
          <br />
          <span style={{ fontWeight: 600 }}>E-MAIL</span>
          icebiscuit@thekary.com
          <br />
          FAX : 02-6119-5003
          <br />
        </div>
      </div>
      {/* //width1200 */}
      <div className="copyright">
        Copyright © 2016 ICEBISCUIT. All rights reserved.{' '}
        <a href="https://may-pop.com" target="_blank" style={{ color: '#fff' }}>
          Site by MAYPOP
        </a>
      </div>
    </div>
  );
}
