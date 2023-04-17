export default function About() {
  return (
    <div>
      <style
        dangerouslySetInnerHTML={{
          __html:
            '\n    .top_bar      {position:relative; }\n\n    .top_dropdown-content img , .top_dropdown img {width:20px;margin:9px 2px 0px 2px}\n\n\n    .top_dropbtn { color:#fff; font: 1em \'Barlow Condensed\',"Noto Sans KR",Verdana,Dotum,AppleGothic,sans-serif; \n        font-size:13px; font-weight:400; line-height:33px; letter-spacing:1.0px; background:transparent; outline:none;\n        cursor: pointer;\n    }\n\n\n\n    .top_dropdown { color:#fff; font-size:13px; font-weight:400; line-height:33px; letter-spacing:1.0px; float:left; text-align:left; padding:0 0 0 20px;\n        position: relative;\n        display: inline-block;\n    }\n\n    .top_dropdown-content {\n        display: none;\n        position: absolute;\n        background-color: #fff; margin:1px 0 0 0; \n        min-width: 100px;\n        overflow: auto; \n        box-shadow: 0px 8px 8px 0px rgba(0,0,0,0.1);\n        z-index: 9999;\n    }\n\n    .top_dropdown-content a { color:#000; font-size:13px; font-weight:500; line-height:33px; letter-spacing:1.0px; padding:0 0 0 2px;\n\n        text-decoration: none;\n        display: block;\n    }\n\n    .top_dropdown a:hover { color:#dc3c23}\n\n    .show {display: block;}\n',
        }}
      />
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
      <style
        dangerouslySetInnerHTML={{
          __html:
            '\n    .right_fixed { position:fixed; right:0; top:45%;text-align:center;padding:7px 0px; background:#111; z-index:888; display:none }\n    .right_fixed a {display:block; width:45px;padding:8px 0px;  color:#fff; font-size:40px}\n    .right_fixed a:hover { color:#e53d2f}\n\n    .quick_view { position:fixed;border:1px solid #111; width:500px;height:92px; right:45px; top:45%;display:none; z-index:888;background: url("/web/upload/img/quick_empty.png") no-repeat  center center}\n',
        }}
      />
      <div className="right_fixed">
        <a href="#none" onClick="quick_view.style.display='block';" title="최근본내역">
          <i className="material-icons"></i>
        </a>
        <a href="/myshop/wish_list.html" title="관심상품">
          <i className="material-icons"></i>
        </a>
        {/*a href="#top"><i class="material-icons">&#xe255;</i></a*/}
      </div>
      <div className="quick_view" id="quick_view">
        <div className="xans-element- xans-layout xans-layout-productrecent" style={{}}>
          <a
            href="#none"
            onClick="$('#quick_view').hide();"
            style={{
              float: 'right',
              position: 'absolute',
              right: '10px',
              top: '10px',
            }}
          >
            <i className="material-icons" style={{ fontSize: '30px' }}>
              
            </i>
          </a>
          <h2>
            <a href="/product/recent_view_product.html">QUICK VIEW</a>
          </h2>
          <ul>
            <li className="xans-record-">
              <a href="/product/detail.html?product_no=2312&cate_no=362&display_group=1">
                <img src="//icebiscuit.com/web/product/tiny/202109/4f31cf2d0c5d4dba08af88a6496989f9.jpg" alt="" />
              </a>
            </li>
          </ul>
          <p className="player">
            <img
              src="/web/upload/img/quck_prev.png"
              alt="이전 제품"
              className="prev"
              style={{ float: 'left', cursor: 'pointer' }}
            />
            <img
              src="/web/upload/img/quck_next.png"
              alt="다음 제품"
              className="next"
              style={{ float: 'right', cursor: 'pointer' }}
            />
          </p>
        </div>
      </div>
      <div className="top_bar">
        <div className="top_dropdown">
          <button onClick="myFunction()" className="top_dropbtn">
            ▾<img src="/web/upload/img/kr.png" /> KOREA
          </button>
          <div id="top_myDropdown" className="top_dropdown-content">
            <a href="https://icebiscuit.nyc/" target="_blank">
              {' '}
              <img src="/web/upload/img/en.png" style={{ padding: '0 0 0 10px' }} /> USA
            </a>
          </div>
        </div>
        <a href data-aos="fade-down" className="aos-init aos-animate">
          {' '}
          <span style={{ fontSize: '11px' }}>신규회원가입시 3천원 &amp; 5천원 쿠폰 증정</span>
        </a>
        {/*a href="" data-aos="fade-down" >Free shipping on orders over <span style="font-size:11px">&#x20a9;</span>50,000</a*/}
      </div>
      <div id="leftBrand" className="leftBrand">
        <a href="http://www.nununu.co.kr/" id="nununu" target="_blank">
          <img src="/web/upload/img/left_nu.png" alt="" />
        </a>
        <a href="http://bebedepino.com/" id="icebisket" target="_blank">
          <img src="/web/upload/img/left_bp.png" alt="" />
        </a>
      </div>
      {/* //header */}
      {/* cre.ma / init 스크립트 (PC) / 스크립트를 수정할 경우 연락주세요 (support@cre.ma) */}
      <hr className="layout" />
      <div id="wrap">
        <div id="container">
          <div id="contents">
            <div id="loading" style={{ display: 'none' }}>
              <img id="loading-image" src="/web/upload/img/smile.png" alt="Loading..." />
            </div>
            <style
              dangerouslySetInnerHTML={{
                __html:
                  '\n    #container,\n#contents {width:100%;}\n   .about_half , .about {  clear:both; line-height:1.6em ;font-size:18px; font-weight:400; letter-spacing:0.7px; } \n     .about p { font-size:20px;}\n    .about_half p { float:left; width:38%;padding:20px;  color: #e53d2f;  -webkit-box-sizing: border-box;\n    -moz-box-sizing: border-box;  \n    box-sizing: border-box; font-weight:500; font-size:18px\n}\n    .about_half { margin:80px auto 0 ; width:80%}\n     .about { margin:50px auto 0;width:80%; padding:0 20px;  -webkit-box-sizing: border-box;\n    -moz-box-sizing: border-box;  \n    box-sizing: border-box;}\n    \n    .about_top {clear:both; width: 100%; height: 400px; background: url("/web/upload/img/about_top.jpg") no-repeat fixed center 0px / 100% auto transparent; overflow: hidden; position: relative;} }\n',
              }}
            />
            <div className="about_top aos-init aos-animate" data-aos="fade-in" data-aos-duration={800} />
            {/*div class="about"  data-aos="fade-up"  data-aos-delay="800">
브루클린 베이스의 ICEBISCUIT은 개성있고 스마트한<br>
Young Shopper를 위한 CONTEMPORARY STREET CASUALWEAR입니다. 스트리트 감성을 기반으로 우리의 다양한 호기심을 표현하고,<br>
장난스럽고 유머러스한 아트워크를 통해 트렌디한 스타일을 제안합니다.<br>
<br>
    <p  style=" font-weight:500;">
ICEBISCUIT based on Brooklyn is a contemporary street casualwear<br>
which is for smart and young shoppers with their own individualities.<br>
We express various curiousity based on street sensitivity and offer trendy style through mischievous and humorous artwork.<br>
</p>
</div*/}
            <div className="about_half" style={{ padding: '0 0 150px 0' }}>
              <p style={{ fontSize: '16px', color: '#000' }} data-aos="fade-left" className="aos-init aos-animate">
                브루클린 베이스의 ICEBISCUIT은 개성있고 스마트한
                <br />
                Young Shopper를 위한 CONTEMPORARY STREET CASUALWEAR입니다.
                <br />
                스트리트 감성을 기반으로 우리의 다양한 호기심을 표현하고,
                <br />
                장난스럽고 유머러스한 아트워크를 통해 트렌디한 스타일을 제안합니다.
              </p>
              <p data-aos="fade-left" data-aos-delay={200} style={{ color: '#000' }} className="aos-init aos-animate">
                ICEBISCUIT based on Brooklyn is a contemporary street casualwear
                <br />
                which is for smart and young shoppers with their own individualities.
                <br />
                We express various curiousity based on street sensitivity and offer trendy style through mischievous and
                humorous artwork.
              </p>
            </div>
            <div className="about_half">
              <p style={{ fontSize: '16px' }} data-aos="fade-left" data-aos-delay={600} className="aos-init">
                TED와 WENDY는 12살 쌍둥이 남매.
                <br />
                <br />
                토끼 인형을 늘 옆에 끼고 다니며, 모르는 식물 이름이 없는
                <br />
                말괄량이 소녀 WENDY.
                <br />
                WENDY는 자전거 타기와 공룡을 좋아하고,
                <br />
                멋진 고고학자가 되는 것이 꿈인 소녀.
                <br />
                <br />
                TED는 집 근처 공원에서 스케이트보드 연습에 한창이다.
                <br />
                여름이 되면 삼촌에게 서핑을 배우기로 했다.
                <br />
                TED는 그림을 잘 그리고, 호기심과 꿈이 많은 꼬마.
                <br />
                벌써 어른이 된 줄 안다.
                <br />
                <br />
                주말엔 베이커리에서 샘 아저씨와 직접 빵을 만들기도 한다.
                <br />
                초코릿가게와 장난감가게는 WENDY가 늘 그냥 지나치기 힘든 곳.
                <br />
                TED와 WENDY는 브루클린을 사랑한다. 좁은 학교 운동장, 컴퓨터
                <br />
                게임보다 재밌는 우리 동네 이곳 저곳 드나들길 좋아한다.
                <br />
                그 중에서 TED와 WENDY가 가장 사랑하는 곳은 아이스 비스킷
                <br />
                아이스크림 샵이다.
                <br />
              </p>
              <p data-aos="fade-left" data-aos-delay={900} className="aos-init">
                TED and WENDY are eleven-year-old twins.
                <br />
                <br />
                WENDY is a romping girl who always carries a bunny
                <br />
                doll with herself and knows every plant. She likes to
                <br />
                ride a bike, loves plants and has a dream of
                <br />
                becoming a great archaeologist.
                <br />
                <br />
                TED is practicing skatebooard in a park near his house.
                <br />
                When summer comes, he is going to learn surfing
                <br />
                from his uncle. TED draws well and has a lot of dreams.
                <br />
                He thinks he is grown up.
                <br />
                <br />
                On weekends, they bake bread with Sam. Chocolate
                <br />
                shops and toy shops are places that Wendy cannot
                <br />
                just pass by. Ted and Wendy loves Brooklyn. They like to
                <br />
                go to any places in the town that are more interesting
                <br />
                than small school playground or computer games.
                <br />
                Among the places, they like Icebiscuit icream shop most.
                <br />
              </p>
            </div>
            <center>
              <img
                src="/web/upload/img/smile.png"
                alt=""
                style={{ padding: '170px 0 0px 0', margin: '0 0 0 -230px', width: '180px' }}
                data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration={1000}
                data-aos-delay={1200}
                className="aos-init"
              />
              &nbsp;
            </center>
            <style
              dangerouslySetInnerHTML={{
                __html:
                  '\n    .contactus {margin:0px auto 0 ; width:78%; clear:both; padding:100px 0 0 0}\n    .contactus p {width:33%; display:inline-block; text-align:left; font-size:22px; }\n     .contactus p span { font-weight:600;letter-spacing:1.0px; display:block; padding:0px 0 5px 0}\n    \n    ',
              }}
            />
            <div className="contactus">
              <p data-aos="fade-up" className="aos-init">
                <span>Retail enquiries to</span>
                don@thekary.com
              </p>
              <p data-aos="fade-up" className="aos-init">
                <span>Marketing &amp; Collab</span>
                silver@thekary.com{' '}
              </p>
              <p data-aos="fade-up" className="aos-init">
                <span>All other &amp; etc</span>
                icebiscuit@thekary.com
              </p>
            </div>
          </div>
          <hr className="layout" />
        </div>
        <hr className="layout" />
        <div id="quick" />
      </div>
      <hr className="layout" />
      <style
        dangerouslySetInnerHTML={{
          __html:
            '\n    \n    \n/* 하단 */\n#footer {margin:100px 0 0; background:#;border:0;border-top:1px solid #ececec;}\n#footer .footer_inner {max-width:1500px; width:80%; min-width:1000px ; margin:0 auto;padding:90px 0 70px 0}\n    #footer .footer_inner div { float:left; display:inline-block; width:20%}\n    .f_logo img { width:200px}\n  .f_menu  a {color:#DC3C23; display:block; padding:0 0 16px 0; font-size:16px; font-weight:600}\n    .f_call  { font-size:14px; font-weight:500; line-height:20px;letter-spacing:0.5px}\n    .f_call span { display:block; font-weight:600;  font-size:18px; letter-spacing:0.7px}\n     .f_call img  { width:28px; padding:20px 0 0 0}\n    .f_company { font-size:13px;letter-spacing:0.3px;  line-height:22px; color:#000}\n    .copyright { background:#DC3C23; width:100% ; clear:both; color:#fff; font-size:13px; font-weight:600; text-align:center; padding:5px 0; }\n    \n    /* 스크롤버튼 */\n#scrolltotop{  z-index:9999999999;position:fixed;bottom:5px;right:0px;  }\n#scrolltotop span{width:48px;height:48px;display:block;margin:0px 5px 0px 0; border-radius:3px;-webkit-transition:all 0.2s ease-out;-moz-transition:all 0.2s ease-out;-o-transition:all 0.2s ease-out;-ms-transition:all 0.2s ease-out;transition:all 0.2s ease-out}\n\n    ',
        }}
      />
      {/* //footer */}
      {/* Enliple Tracker Start */}
      {/* Enliple Tracker End */}
      <div id="scrolltotop" style={{ display: 'none' }}>
        <a href="#top">
          <span>
            <img src="/web/upload/img/m_top_.png" style={{ width: '35px' }} />
          </span>
        </a>
        {/* 결제를 위한 필수 영역 */}
        <div id="progressPaybar" style={{ display: 'none' }}>
          <div id="progressPaybarBackground" className="layerProgress" />
          <div id="progressPaybarView">
            <div className="box">
              <p className="graph">
                <span>
                  <img
                    src="//img.echosting.cafe24.com/skin/base_ko_KR/layout/txt_progress.gif"
                    alt="현재 결제가 진행중입니다."
                  />
                </span>
                <span>
                  <img src="//img.echosting.cafe24.com/skin/base/layout/img_loading.gif" alt="" />
                </span>
              </p>
              <p className="txt">
                본 결제 창은 결제완료 후 자동으로 닫히며,결제 진행 중에 본 결제 창을 닫으시면
                <br />
                주문이 되지 않으니 결제 완료 될 때 까지 닫지 마시기 바랍니다.
              </p>
            </div>
          </div>
        </div>
        {/* //결제를 위한 필수 영역 */}
      </div>
      <meta name="google-site-verification" content="qpWeMBcfpy1gvDJNbH0Esm-K9QPw7VUex3yrm8PmITQ" />
      {/* Google Tag Manager (noscript) */}
      <noscript>
        &lt;iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5SGRNH3" height="0" width="0"
        style="display:none;visibility:hidden"&gt;&lt;/iframe&gt;
      </noscript>
      {/* End Google Tag Manager (noscript) */}
      <span itemScope itemType="https://schema.org/Organization">
        <link itemProp="url" href="https://icebiscuit.com" />
      </span>
      {/* External Script Start */}
      {/* fbe */}
      {/* CMC3 script */}
      <div id="fbe_common_top_script" style={{ display: 'none' }}></div>
      {/* CMC3 script */}
      {/* gcs */}
      {/* Global site tag (gtag.js) - Google Ads: 10955388085 */}
      {/* gfa */}
      {/* kmp */}
      {/* CMC3 script */}
      <div id="kmp_common_top_script" style={{ display: 'none' }}></div>
      {/* CMC3 script */}
      {/* tgg */}
      {/* CMC script */}
      <div id="tgg_common_top_script" style={{ display: 'none' }}></div>
      {/* CMC script */} {/* CMC script */}
      <div id="tgg_common_bottom_script" style={{ display: 'none' }}>
        {/* WIDERPLANET HOME SCRIPT START 2016.8.24 */}
        <div id="wp_tg_cts" style={{ display: 'none' }} />
        {/* // WIDERPLANET HOME SCRIPT END 2016.8.24 */}
      </div>
      {/* CMC script */}
      {/* External Script End */}
      <div id="modalBackpanel" />
      <div id="modalContainer">
        <iframe id="modalContent" scroll={0} scrolling="no" frameBorder={0} />
      </div>
      <iframe
        src="/exec/front/eclog/main/?&rloc=https%3A//icebiscuit.com/about.html&rref=https%3A//icebiscuit.com/store.html%3Fboard_no%3D101&udim=1920*1080&rserv=elg-db-svcm-089.cafe24.com&cid=CID7b2d67549c2828a23445c0d27adff1fa&role_path=ETC&stype=e&shop_no=1&lang=ko_KR&ver=2"
        id="log_realtime"
        style={{ display: 'none' }}
      />
    </div>
  );
}
