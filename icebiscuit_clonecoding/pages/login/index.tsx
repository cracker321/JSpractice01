export default function Login() {
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
            <div className="path">
              <span>현재 위치</span>
              <ol>
                <li>
                  <a href="/">홈</a>
                </li>
                <li title="현재 위치">
                  <strong>로그인</strong>
                </li>
              </ol>
            </div>
            <div className="titleArea">
              <h2>LOGIN</h2>
            </div>
            <form
              id="member_form_4773147623"
              name
              action="/exec/front/Member/login/"
              method="post"
              target="_self"
              encType="multipart/form-data"
            >
              <input id="returnUrl" name="returnUrl" defaultValue="https://icebiscuit.com/" type="hidden" />
              <input id="forbidIpUrl" name="forbidIpUrl" defaultValue="/index.html" type="hidden" />
              <input
                id="certificationUrl"
                name="certificationUrl"
                defaultValue="/intro/adult_certification.html"
                type="hidden"
              />
              <input id="sIsSnsCheckid" name="sIsSnsCheckid" defaultValue type="hidden" />
              <input id="sProvider" name="sProvider" defaultValue type="hidden" />
              <div className="xans-element- xans-member xans-member-login ec-base-box typeThin ">
                {/*
        $defaultReturnUrl = /index.html
        $forbidIpUrl = member/adminFail.html
    */}
                <div className="login">
                  <fieldset>
                    <legend>회원로그인</legend>
                    <label className="id ePlaceholder" title="아이디">
                      <input
                        id="member_id"
                        name="member_id"
                        fw-filter="isFill"
                        fw-label="아이디"
                        fw-msg
                        className="inputTypeText"
                        placeholder="아이디"
                        defaultValue
                        type="text"
                      />
                    </label>
                    <label className="password ePlaceholder" title="비밀번호">
                      <input
                        id="member_passwd"
                        name="member_passwd"
                        fw-filter="isFill&isMin[4]&isMax[16]"
                        fw-label="패스워드"
                        fw-msg
                        autoComplete="off"
                        defaultValue
                        type="password"
                        placeholder="비밀번호"
                      />
                    </label>
                    <p className="security">
                      <input
                        id="member_check_save_id0"
                        name="check_save_id"
                        fw-filter
                        fw-label="아이디저장"
                        fw-msg
                        defaultValue="T"
                        type="checkbox"
                      />
                      <label htmlFor="member_check_save_id0">아이디 저장</label>
                      <img
                        src="//img.echosting.cafe24.com/design/skin/default/member/ico_access.gif"
                        alt="보안접속"
                      />{' '}
                      보안접속{' '}
                    </p>
                    <a
                      href="#none"
                      className="btnLogin"
                      onClick="MemberAction.login('member_form_4773147623'); return false;"
                    >
                      로그인
                    </a>
                    <ul className="snsArea">
                      <li className>
                        <a href="#none" onClick="MemberAction.snsLogin('naver', '%2Fabout.html')">
                          <img
                            src="//img.echosting.cafe24.com/skin/base_ko_KR/member/btn_naver_login.gif"
                            alt="네이버 로그인"
                          />
                        </a>
                      </li>
                      <li className="displaynone">
                        <a href="#none" onClick>
                          <img
                            src="//img.echosting.cafe24.com/skin/base_ko_KR/member/btn_facebook_login.gif"
                            alt="Facebook으로 로그인"
                          />
                        </a>
                      </li>
                      <li className="displaynone">
                        <a href="#none" onClick>
                          <img
                            src="//img.echosting.cafe24.com/skin/base_ko_KR/member/btn_google_login.gif"
                            alt="구글 로그인"
                          />
                        </a>
                      </li>
                      <li className>
                        <a href="#none" onClick="MemberAction.snsLogin('kakao', '%2Fabout.html')">
                          <img
                            src="//img.echosting.cafe24.com/skin/base_ko_KR/member/btn_kakao_login.gif"
                            alt="카카오계정 로그인"
                          />
                        </a>
                      </li>
                      <li className="displaynone">
                        <a href="#none" onClick>
                          <img
                            src="//img.echosting.cafe24.com/skin/base_ko_KR/member/btn_line_login.gif"
                            alt="LINE 로그인"
                          />
                        </a>
                      </li>
                      <li className>
                        <a href="#none" onClick="MemberAction.snsLogin('apple', '%2Fabout.html')">
                          <img
                            src="//img.echosting.cafe24.com/skin/base_ko_KR/member/btn_apple_login.gif"
                            alt="Apple로 로그인"
                          />
                        </a>
                      </li>
                    </ul>
                    <ul>
                      <li>
                        <a href="/member/id/find_id.html">아이디찾기</a>
                      </li>
                      <li>
                        <a href="/member/passwd/find_passwd_info.html">비밀번호찾기</a>
                      </li>
                      <li>
                        <a href="/member/join.html">회원가입</a>
                      </li>
                    </ul>
                    <p className="link displaynone" id="noMemberWrap">
                      비회원님도 상품구매가 가능하나 다양한
                      <br />
                      회원혜택에서 제외됩니다.
                      <a href className="btnEm" onClick>
                        비회원구매
                      </a>
                    </p>
                  </fieldset>
                </div>
              </div>
            </form>
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
      {/* 참고: SNS 회원 약관동의 레이어 */}
      <style
        type="text/css"
        dangerouslySetInnerHTML={{
          __html:
            '\n    #mCafe24SnsAgree { position:fixed; z-index:99999999; top:50px; left:50%; width:598px; margin:0 0 0 -300px; }\n',
        }}
      />
      <div id="mCafe24SnsAgree" style={{ display: 'none' }}>
        <div className="dimmed" />
        <input type="hidden" id="sOauth2EncData" name="sOauth2EncData" defaultValue />
        <iframe
          name="ifrm_sns"
          id="ifrm_sns"
          src="/protected/loginSns.html?__popupPage=T"
          scrolling="no"
          style={{ position: 'relative', zIndex: 99999999, height: '750px', width: '598px' }}
          frameBorder={0}
        />
      </div>
      {/* //참고: SNS 회원경약관동의 레이어 */}
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
        src="/exec/front/eclog/main/?&rloc=https%3A//icebiscuit.com/member/login.html&rref=https%3A//icebiscuit.com/member/login.html&udim=1920*1080&rserv=elg-db-svcm-089.cafe24.com&cid=CID7b2d67549c2828a23445c0d27adff1fa&role_path=MEMBER_LOGIN&stype=e&shop_no=1&lang=ko_KR&ver=2"
        id="log_realtime"
        style={{ display: 'none' }}
      />
    </div>
  );
}
