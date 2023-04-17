import Head from 'next/head';

export default function MainPage() {
  return (
    <div>
      <style dangerouslySetInnerHTML={{ __html: '\n        ' }} />
      <div id="loading" style={{ display: 'none' }}>
        <img id="loading-image" src="/web/upload/img/smile.png" alt="Loading..." />
      </div>
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
        <i className="material-icons"></i>
        <a href="/myshop/wish_list.html" title="관심상품">
          <i className="material-icons"></i>
        </a>
        {/*a href="#top"><i class="material-icons">&#xe255;</i></a*/}
      </div>
      <div className="quick_view" id="quick_view">
        <div className="xans-element- xans-layout xans-layout-productrecent" style={{ display: 'none' }}>
          <a
            href="src/components/MainPage#none"
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
          <ul></ul>
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
          ▾<img src="/web/upload/img/kr.png" /> KOREA
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
          <div id="contents" style={{ float: 'right' }}>
            {/*edibot_skin_data:{"width":960,"mo_width":640}*/}
            <div className="your_class slick-initialized slick-slider" style={{ marginTop: '-95px' }}>
              <button
                className="slick-prev slick-arrow"
                aria-label="Previous"
                type="button"
                style={{ display: 'block' }}
              >
                Previous
              </button>
              <div className="slick-list draggable">
                <div
                  className="slick-track"
                  style={{
                    opacity: 1,
                    width: '13640px',
                    transform: 'translate3d(-4960px, 0px, 0px)',
                  }}
                >
                  <div
                    className="slick-slide slick-cloned"
                    data-slick-index={-1}
                    aria-hidden="true"
                    style={{ width: '1240px' }}
                    tabIndex={-1}
                  >
                    <div>
                      <div style={{ width: '100%', display: 'inline-block' }}>
                        <a href="src/components/MainPage#" className="fashion_03_link" tabIndex={-1}>
                          <img src="/web/upload/img/23spring_main05.jpg" alt="" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div
                    className="slick-slide"
                    data-slick-index={0}
                    aria-hidden="true"
                    style={{ width: '1240px' }}
                    tabIndex={-1}
                  >
                    <div>
                      <div style={{ width: '100%', display: 'inline-block' }}>
                        <a href="src/components/MainPage#" className="fashion_01_link" tabIndex={-1}>
                          <img src="/web/upload/img/23spring_main01.jpg" alt="" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div
                    className="slick-slide"
                    data-slick-index={1}
                    aria-hidden="true"
                    style={{ width: '1240px' }}
                    tabIndex={-1}
                  >
                    <div>
                      <div style={{ width: '100%', display: 'inline-block' }}>
                        <a href="src/components/MainPage#" className="fashion_02_link" tabIndex={-1}>
                          <img src="/web/upload/img/23spring_main02.jpg" alt="" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div
                    className="slick-slide"
                    data-slick-index={2}
                    aria-hidden="true"
                    style={{ width: '1240px' }}
                    tabIndex={-1}
                  >
                    <div>
                      <div style={{ width: '100%', display: 'inline-block' }}>
                        <a href="src/components/MainPage#" className="fashion_01_link" tabIndex={-1}>
                          <img src="/web/upload/img/23spring_main03.jpg" alt="" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div
                    className="slick-slide slick-current slick-active"
                    data-slick-index={3}
                    aria-hidden="false"
                    style={{ width: '1240px' }}
                  >
                    <div>
                      <div style={{ width: '100%', display: 'inline-block' }}>
                        <a href="src/components/MainPage#" className="fashion_03_link" tabIndex={0}>
                          <img src="/web/upload/img/23spring_main06.jpg" alt="" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div
                    className="slick-slide"
                    data-slick-index={4}
                    aria-hidden="true"
                    style={{ width: '1240px' }}
                    tabIndex={-1}
                  >
                    <div>
                      <div style={{ width: '100%', display: 'inline-block' }}>
                        <a href="src/components/MainPage#" className="fashion_03_link" tabIndex={-1}>
                          <img src="/web/upload/img/23spring_main05.jpg" alt="" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div
                    className="slick-slide slick-cloned"
                    data-slick-index={5}
                    aria-hidden="true"
                    style={{ width: '1240px' }}
                    tabIndex={-1}
                  >
                    <div>
                      <div style={{ width: '100%', display: 'inline-block' }}>
                        <a href="src/components/MainPage#" className="fashion_01_link" tabIndex={-1}>
                          <img src="/web/upload/img/23spring_main01.jpg" alt="" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div
                    className="slick-slide slick-cloned"
                    data-slick-index={6}
                    aria-hidden="true"
                    style={{ width: '1240px' }}
                    tabIndex={-1}
                  >
                    <div>
                      <div style={{ width: '100%', display: 'inline-block' }}>
                        <a href="src/components/MainPage#" className="fashion_02_link" tabIndex={-1}>
                          <img src="/web/upload/img/23spring_main02.jpg" alt="" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div
                    className="slick-slide slick-cloned"
                    data-slick-index={7}
                    aria-hidden="true"
                    style={{ width: '1240px' }}
                    tabIndex={-1}
                  >
                    <div>
                      <div style={{ width: '100%', display: 'inline-block' }}>
                        <a href="src/components/MainPage#" className="fashion_01_link" tabIndex={-1}>
                          <img src="/web/upload/img/23spring_main03.jpg" alt="" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div
                    className="slick-slide slick-cloned"
                    data-slick-index={8}
                    aria-hidden="true"
                    style={{ width: '1240px' }}
                    tabIndex={-1}
                  >
                    <div>
                      <div style={{ width: '100%', display: 'inline-block' }}>
                        <a href="src/components/MainPage#" className="fashion_03_link" tabIndex={-1}>
                          <img src="/web/upload/img/23spring_main06.jpg" alt="" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div
                    className="slick-slide slick-cloned"
                    data-slick-index={9}
                    aria-hidden="true"
                    style={{ width: '1240px' }}
                    tabIndex={-1}
                  >
                    <div>
                      <div style={{ width: '100%', display: 'inline-block' }}>
                        <a href="src/components/MainPage#" className="fashion_03_link" tabIndex={-1}>
                          <img src="/web/upload/img/23spring_main05.jpg" alt="" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button className="slick-next slick-arrow" aria-label="Next" type="button" style={{ display: 'block' }}>
                Next
              </button>
            </div>
            {/*div id="visual" class="main_visual"  data-aos="fade-in">
<ul class="bxslider">
<li><a href="/product/list.html?cate_no=151" ><img src="/web/upload/img/main01_22s.jpg" alt="" /></a></li>
<li><a href="/product/list.html?cate_no=151" ><img src="/web/upload/img/main02_22s.jpg" alt="" /></a></li>
<li><a href="/product/list.html?cate_no=151" ><img src="/web/upload/img/main03_22s.jpg" alt="" /></a></li>
                     <div><a href="#" class="fashion_02_link"><img src="/web/upload/img/22summer_main08.jpg" alt=""></a></div>
</ul>
</div*/}
            <style
              dangerouslySetInnerHTML={{
                __html:
                  '\n                        .main_box { clear:both; width:100%;}\n                        .maingrid_3 {clear:both; width:100%; position:relative;}\n                        .main_bn3 { float:left; width:33.33%; display:inline-block;box-sizing:border-box;  overflow:hidden;}\n\n                        .main_bn2 { float:left; width:66.66%; display:inline-block;box-sizing:border-box; border:0px }\n                        .maingrid_3 p {position:absolute; top:20px;z-index:77; font-size:21px; font-weight:600; letter-spacing:0.6px; color:#333}\n                        .maingrid_3 p.pleft {left:30px;}\n                        .maingrid_3 p.pright { right:23%;}\n                        .your_class2 { margin-bottom:-20px !important}\n                        .maingrid_3  a img:hover {opacity:0.8 !important; transition: 0.4s}\n                        \n                       \n                    ',
              }}
            />
            <div className="main_box">
              <div className="maingrid_3">
                <p style={{ left: '35%' }}>NEW ARRIVALS</p>
                <div
                  app4you-smart-banner="smart-banner-admin-PC00009"
                  className="-xans-element- xans-smart-banner-admin xans-smart-banner-admin-PC00001 main_bn3 aos-init xans-element- xans-smart-banner-admin-PC00009 aos-animate"
                  data-aos="fade-up"
                >
                  <div
                    className="smart-banner-wrapper circle"
                    data-slider="true"
                    data-type="full"
                    data-mode="fade"
                    data-minslides={1}
                    data-maxslides={10}
                    data-controls="true"
                    data-adaptiveheight="true"
                    data-autohover="true"
                    data-responsive="true"
                    data-pager="true"
                    data-auto="true"
                    data-speed={500}
                    data-pause={4000}
                  >
                    <div className="smart-banner-bx-wrapper">
                      <div
                        className="bx-viewport"
                        style={{
                          width: '100%',
                          overflow: 'hidden',
                          position: 'relative',
                          height: '413px',
                        }}
                      >
                        <ul
                          style={{ width: 'auto', position: 'relative', visibility: 'visible' }}
                          className="smart-banner-bxslider"
                        >
                          <li
                            style={{
                              float: 'none',
                              listStyle: 'none',
                              position: 'absolute',
                              width: '413px',
                              zIndex: 0,
                              display: 'none',
                            }}
                          >
                            <a
                              href="http://icebiscuit.com/product"
                              target="_blank"
                              onClick="APP4YOU_SMART_BANNER.incrementBanner(467368)"
                              style={{ cursor: 'pointer' }}
                            >
                              <img src="https://file.cafe24cos.com/banner-admin-live/upload/foxyecho3/e77f81cc-4c32-461d-a4c3-ee2c47305279.jpeg" />
                            </a>
                          </li>
                          <li
                            style={{
                              float: 'none',
                              listStyle: 'none',
                              position: 'absolute',
                              width: '413px',
                              zIndex: 0,
                              display: 'none',
                            }}
                          >
                            <a
                              href="http://icebiscuit.com/product"
                              target="_blank"
                              onClick="APP4YOU_SMART_BANNER.incrementBanner(467367)"
                              style={{ cursor: 'pointer' }}
                            >
                              <img src="https://file.cafe24cos.com/banner-admin-live/upload/foxyecho3/c9972315-c107-43fd-9793-d9a500fa8232.jpeg" />
                            </a>
                          </li>
                          <li
                            style={{
                              float: 'none',
                              listStyle: 'none',
                              position: 'absolute',
                              width: '413px',
                              zIndex: 50,
                              display: 'list-item',
                            }}
                          >
                            <a
                              href="http://icebiscuit.com/product"
                              target="_blank"
                              onClick="APP4YOU_SMART_BANNER.incrementBanner(467364)"
                              style={{ cursor: 'pointer' }}
                            >
                              <img src="https://file.cafe24cos.com/banner-admin-live/upload/foxyecho3/507f54c1-c3f4-457f-e38e-2498f10b4c17.jpeg" />
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="bx-controls bx-has-pager bx-has-controls-direction">
                        <div className="bx-pager bx-default-pager">
                          <div className="bx-pager-item">
                            <a href data-slide-index={0} className="bx-pager-link">
                              1
                            </a>
                          </div>
                          <div className="bx-pager-item">
                            <a href data-slide-index={1} className="bx-pager-link">
                              2
                            </a>
                          </div>
                          <div className="bx-pager-item">
                            <a href data-slide-index={2} className="bx-pager-link active">
                              3
                            </a>
                          </div>
                        </div>
                        <div className="bx-controls-direction">
                          <a className="bx-prev" href />
                          <a className="bx-next" href />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  data-aos="fade-up"
                  data-aos-delay={200}
                  className="xans-element- xans-product xans-product-listnormal your_class2 main_bn3 slick-initialized slick-slider slick-dotted aos-init aos-animate"
                >
                  <button
                    className="slick-prev slick-arrow"
                    aria-label="Previous"
                    type="button"
                    style={{ display: 'block' }}
                  >
                    Previous
                  </button>
                  <div className="slick-list draggable">
                    <div className="slick-track" style={{ opacity: 1, width: '2478px' }}>
                      <div
                        className="slick-slide"
                        data-slick-index={0}
                        aria-hidden="true"
                        style={{
                          transition: 'opacity 500ms ease 0s',
                          width: '413px',
                          position: 'relative',
                          left: '0px',
                          top: '0px',
                          zIndex: 998,
                          opacity: 0,
                        }}
                        role="tabpanel"
                        id="slick-slide10"
                        aria-describedby="slick-slide-control10"
                        tabIndex={-1}
                      >
                        <div>
                          <div className="xans-record-" style={{ width: '100%', display: 'inline-block' }}>
                            <a
                              href="/product/23-spring-gift심볼로고에코백실결제-10만원-이상-시-회원-대상-증정/3328/category/223/display/1/"
                              name="anchorBoxName_3328"
                              tabIndex={-1}
                            >
                              <img
                                src="//www.icebiscuit.com/web/product/medium/202302/b5c514482063945494e5252325dd4ecb.jpg"
                                className="listImage"
                                id="eListPrdImage3328_1"
                                alt="아이스비스킷 - [23 SPRING GIFT]심볼로고에코백(실결제 10만원 이상 시 회원 대상 증정)"
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                      <div
                        className="slick-slide"
                        data-slick-index={1}
                        aria-hidden="true"
                        style={{
                          transition: 'opacity 500ms ease 0s',
                          width: '413px',
                          position: 'relative',
                          left: '-413px',
                          top: '0px',
                          zIndex: 998,
                          opacity: 0,
                        }}
                        role="tabpanel"
                        id="slick-slide11"
                        aria-describedby="slick-slide-control11"
                        tabIndex={-1}
                      >
                        <div>
                          <div className="xans-record-" style={{ width: '100%', display: 'inline-block' }}>
                            <a
                              href="/product/스마일세일러칼라체크원피스ib31op617/3432/category/223/display/1/"
                              name="anchorBoxName_3432"
                              tabIndex={-1}
                            >
                              <img
                                src="//www.icebiscuit.com/web/product/medium/202302/d1f8513874e28c4f2bdae8cc9faa4596.jpg"
                                className="listImage"
                                id="eListPrdImage3432_1"
                                alt="아이스비스킷 - 스마일세일러칼라체크원피스_IB31OP617"
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                      <div
                        className="slick-slide"
                        data-slick-index={2}
                        aria-hidden="true"
                        style={{
                          transition: 'opacity 500ms ease 0s',
                          width: '413px',
                          position: 'relative',
                          left: '-826px',
                          top: '0px',
                          zIndex: 998,
                          opacity: 0,
                        }}
                        role="tabpanel"
                        id="slick-slide12"
                        aria-describedby="slick-slide-control12"
                        tabIndex={-1}
                      >
                        <div>
                          <div className="xans-record-" style={{ width: '100%', display: 'inline-block' }}>
                            <a
                              href="/product/세일러칼라체크크롭셔츠ib31sh619/3431/category/223/display/1/"
                              name="anchorBoxName_3431"
                              tabIndex={-1}
                            >
                              <img
                                src="//www.icebiscuit.com/web/product/medium/202302/9de67169287dcf2d41bdb5288c737ce6.jpg"
                                className="listImage"
                                id="eListPrdImage3431_1"
                                alt="아이스비스킷 - 세일러칼라체크크롭셔츠_IB31SH619"
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                      <div
                        className="slick-slide"
                        data-slick-index={3}
                        aria-hidden="true"
                        style={{
                          transition: 'opacity 500ms ease 0s',
                          width: '413px',
                          position: 'relative',
                          left: '-1239px',
                          top: '0px',
                          zIndex: 998,
                          opacity: 0,
                        }}
                        role="tabpanel"
                        id="slick-slide13"
                        aria-describedby="slick-slide-control13"
                        tabIndex={-1}
                      >
                        <div>
                          <div className="xans-record-" style={{ width: '100%', display: 'inline-block' }}>
                            <a
                              href="/product/스마일와이드칼라체크크롭셔츠ib31sh618/3430/category/223/display/1/"
                              name="anchorBoxName_3430"
                              tabIndex={-1}
                            >
                              <img
                                src="//www.icebiscuit.com/web/product/medium/202302/d3919a9c851402c2fca172f983e1f1c5.jpg"
                                className="listImage"
                                id="eListPrdImage3430_1"
                                alt="아이스비스킷 - 스마일와이드칼라체크크롭셔츠_IB31SH618"
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                      <div
                        className="slick-slide slick-current slick-active"
                        data-slick-index={4}
                        aria-hidden="false"
                        style={{
                          width: '413px',
                          position: 'relative',
                          left: '-1652px',
                          top: '0px',
                          zIndex: 999,
                          opacity: 1,
                        }}
                        role="tabpanel"
                        id="slick-slide14"
                        aria-describedby="slick-slide-control14"
                      >
                        <div>
                          <div className="xans-record-" style={{ width: '100%', display: 'inline-block' }}>
                            <a
                              href="/product/ib레터포인트레인코트ib31jf501/3429/category/223/display/1/"
                              name="anchorBoxName_3429"
                              tabIndex={0}
                            >
                              <img
                                src="//www.icebiscuit.com/web/product/medium/202302/8f46ba12e2799eb97b7112fade8dadf0.jpg"
                                className="listImage"
                                id="eListPrdImage3429_1"
                                alt="아이스비스킷 - IB레터포인트레인코트_IB31JF501"
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                      <div
                        className="slick-slide"
                        data-slick-index={5}
                        aria-hidden="true"
                        style={{
                          transition: 'opacity 500ms ease 0s',
                          width: '413px',
                          position: 'relative',
                          left: '-2065px',
                          top: '0px',
                          zIndex: 998,
                          opacity: 0,
                        }}
                        role="tabpanel"
                        id="slick-slide15"
                        aria-describedby="slick-slide-control15"
                        tabIndex={-1}
                      >
                        <div>
                          <div className="xans-record-" style={{ width: '100%', display: 'inline-block' }}>
                            <a
                              href="/product/아이스비스킷레인돔햇ib31ah509/3428/category/223/display/1/"
                              name="anchorBoxName_3428"
                              tabIndex={-1}
                            >
                              <img
                                src="//www.icebiscuit.com/web/product/medium/202302/7924e88704e52f6faadf5dced12ec4e4.jpg"
                                className="listImage"
                                id="eListPrdImage3428_1"
                                alt="아이스비스킷 - 아이스비스킷레인돔햇_IB31AH509"
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button
                    className="slick-next slick-arrow"
                    aria-label="Next"
                    type="button"
                    style={{ display: 'block' }}
                  >
                    Next
                  </button>
                  <ul className="slick-dots" style={{ display: 'block' }} role="tablist">
                    <li className role="presentation">
                      <button
                        type="button"
                        role="tab"
                        id="slick-slide-control10"
                        aria-controls="slick-slide10"
                        aria-label="1 of 6"
                        tabIndex={-1}
                      >
                        1
                      </button>
                    </li>
                    <li role="presentation" className>
                      <button
                        type="button"
                        role="tab"
                        id="slick-slide-control11"
                        aria-controls="slick-slide11"
                        aria-label="2 of 6"
                        tabIndex={-1}
                      >
                        2
                      </button>
                    </li>
                    <li role="presentation" className>
                      <button
                        type="button"
                        role="tab"
                        id="slick-slide-control12"
                        aria-controls="slick-slide12"
                        aria-label="3 of 6"
                        tabIndex={-1}
                      >
                        3
                      </button>
                    </li>
                    <li role="presentation" className>
                      <button
                        type="button"
                        role="tab"
                        id="slick-slide-control13"
                        aria-controls="slick-slide13"
                        aria-label="4 of 6"
                        tabIndex={-1}
                      >
                        4
                      </button>
                    </li>
                    <li role="presentation" className="slick-active">
                      <button
                        type="button"
                        role="tab"
                        id="slick-slide-control14"
                        aria-controls="slick-slide14"
                        aria-label="5 of 6"
                        tabIndex={0}
                        aria-selected="true"
                      >
                        5
                      </button>
                    </li>
                    <li role="presentation" className>
                      <button
                        type="button"
                        role="tab"
                        id="slick-slide-control15"
                        aria-controls="slick-slide15"
                        aria-label="6 of 6"
                        tabIndex={-1}
                      >
                        6
                      </button>
                    </li>
                  </ul>
                </div>
                {/*div app4you-smart-banner="smart-banner-admin-PC00002" class="-xans-element- xans-smart-banner-admin xans-smart-banner-admin-PC00001 main_bn3" data-aos="fade-up" data-aos-delay="200"></div*/}
                <div
                  app4you-smart-banner="smart-banner-admin-PC00010"
                  className="-xans-element- xans-smart-banner-admin xans-smart-banner-admin-PC00003 main_bn3 aos-init xans-element- xans-smart-banner-admin-PC00010 aos-animate"
                  data-aos="fade-up"
                  data-aos-delay={500}
                >
                  <div
                    className="smart-banner-wrapper circle"
                    data-slider="true"
                    data-type="full"
                    data-mode="fade"
                    data-minslides={1}
                    data-maxslides={10}
                    data-controls="true"
                    data-adaptiveheight="true"
                    data-autohover="true"
                    data-responsive="true"
                    data-pager="true"
                    data-auto="true"
                    data-speed={500}
                    data-pause={2000}
                  >
                    <div className="smart-banner-bx-wrapper">
                      <div
                        className="bx-viewport"
                        style={{
                          width: '100%',
                          overflow: 'hidden',
                          position: 'relative',
                          height: '413px',
                        }}
                      >
                        <ul
                          style={{ width: 'auto', position: 'relative', visibility: 'visible' }}
                          className="smart-banner-bxslider"
                        >
                          <li
                            style={{
                              float: 'none',
                              listStyle: 'none',
                              position: 'absolute',
                              width: '413px',
                              zIndex: 0,
                              display: 'none',
                            }}
                          >
                            <a
                              href="http://icebiscuit.com/product"
                              target="_blank"
                              onClick="APP4YOU_SMART_BANNER.incrementBanner(467377)"
                              style={{ cursor: 'pointer' }}
                            >
                              <img src="https://file.cafe24cos.com/banner-admin-live/upload/foxyecho3/c6907d1a-6fa2-4338-e9a2-58807a390417.jpeg" />
                            </a>
                          </li>
                          <li
                            style={{
                              float: 'none',
                              listStyle: 'none',
                              position: 'absolute',
                              width: '413px',
                              zIndex: 0,
                              display: 'list-item',
                              opacity: '0.114743',
                            }}
                          >
                            <a
                              href="http://icebiscuit.com/product"
                              target="_blank"
                              onClick="APP4YOU_SMART_BANNER.incrementBanner(467376)"
                              style={{ cursor: 'pointer' }}
                            >
                              <img src="https://file.cafe24cos.com/banner-admin-live/upload/foxyecho3/9ffc3338-66cf-401c-f783-cd19bd2a51ab.jpeg" />
                            </a>
                          </li>
                          <li
                            style={{
                              float: 'none',
                              listStyle: 'none',
                              position: 'absolute',
                              width: '413px',
                              zIndex: 51,
                              display: 'list-item',
                              opacity: '0.883247',
                            }}
                          >
                            <a
                              href="http://icebiscuit.com/product"
                              target="_blank"
                              onClick="APP4YOU_SMART_BANNER.incrementBanner(467374)"
                              style={{ cursor: 'pointer' }}
                            >
                              <img src="https://file.cafe24cos.com/banner-admin-live/upload/foxyecho3/081e8215-3bc4-4fc5-c7e4-5ab421a0d77e.jpeg" />
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="bx-controls bx-has-pager bx-has-controls-direction">
                        <div className="bx-pager bx-default-pager">
                          <div className="bx-pager-item">
                            <a href data-slide-index={0} className="bx-pager-link">
                              1
                            </a>
                          </div>
                          <div className="bx-pager-item">
                            <a href data-slide-index={1} className="bx-pager-link">
                              2
                            </a>
                          </div>
                          <div className="bx-pager-item">
                            <a href data-slide-index={2} className="bx-pager-link active">
                              3
                            </a>
                          </div>
                        </div>
                        <div className="bx-controls-direction">
                          <a className="bx-prev" href />
                          <a className="bx-next" href />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="maingrid_3">
                <p className="pleft">2023 SPRING LOOKBOOK</p> <p className="pright">HOT BACKPACKS</p>
                <div className="main_bn2 aos-init aos-animate" data-aos="fade-right" data-aos-delay={1000}>
                  <a href="/lookbook.html?cate_no=258">
                    <img src="/web/upload/img/23spring_cover01.jpg" alt="" style={{ maxWidth: '100%' }} />
                  </a>
                </div>
                <div
                  data-aos="fade-up"
                  data-aos-delay={200}
                  className="xans-element- xans-product xans-product-listmain-3 xans-product-listmain xans-product-3 your_class2 main_bn3 slick-initialized slick-slider slick-dotted aos-init aos-animate"
                >
                  <button
                    className="slick-prev slick-arrow"
                    aria-label="Previous"
                    type="button"
                    style={{ display: 'block' }}
                  >
                    Previous
                  </button>
                  <div className="slick-list draggable">
                    <div className="slick-track" style={{ opacity: 1, width: '3304px' }}>
                      <div
                        className="slick-slide"
                        data-slick-index={0}
                        aria-hidden="true"
                        style={{
                          transition: 'opacity 500ms ease 0s',
                          width: '413px',
                          position: 'relative',
                          left: '0px',
                          top: '0px',
                          zIndex: 998,
                          opacity: 0,
                        }}
                        role="tabpanel"
                        id="slick-slide20"
                        aria-describedby="slick-slide-control20"
                        tabIndex={-1}
                      >
                        <div>
                          <div className="xans-record-" style={{ width: '100%', display: 'inline-block' }}>
                            <a
                              href="https://icebiscuit.com/product/list.html?cate_no=164"
                              name="anchorBoxName_3281"
                              tabIndex={-1}
                            >
                              <img
                                src="//www.icebiscuit.com/web/product/medium/202301/e377c4be5eb9df903f3c3fa8e31c1b6a.jpg"
                                className="listImage"
                                id="eListPrdImage3281_4"
                                alt="아이스비스킷 - 아이스비스킷심볼로고나일론백팩_IB31AB520"
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                      <div
                        className="slick-slide"
                        data-slick-index={1}
                        aria-hidden="true"
                        style={{
                          transition: 'opacity 500ms ease 0s',
                          width: '413px',
                          position: 'relative',
                          left: '-413px',
                          top: '0px',
                          zIndex: 998,
                          opacity: 0,
                        }}
                        role="tabpanel"
                        id="slick-slide21"
                        aria-describedby="slick-slide-control21"
                        tabIndex={-1}
                      >
                        <div>
                          <div className="xans-record-" style={{ width: '100%', display: 'inline-block' }}>
                            <a
                              href="https://icebiscuit.com/product/list.html?cate_no=164"
                              name="anchorBoxName_3283"
                              tabIndex={-1}
                            >
                              <img
                                src="//www.icebiscuit.com/web/product/medium/202301/644348473971fb8dc76479daa290ce75.jpg"
                                className="listImage"
                                id="eListPrdImage3283_4"
                                alt="아이스비스킷 - 아이스비스킷심볼로고나일론백팩_IB31AB520"
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                      <div
                        className="slick-slide"
                        data-slick-index={2}
                        aria-hidden="true"
                        style={{
                          transition: 'opacity 500ms ease 0s',
                          width: '413px',
                          position: 'relative',
                          left: '-826px',
                          top: '0px',
                          zIndex: 998,
                          opacity: 0,
                        }}
                        role="tabpanel"
                        id="slick-slide22"
                        aria-describedby="slick-slide-control22"
                        tabIndex={-1}
                      >
                        <div>
                          <div className="xans-record-" style={{ width: '100%', display: 'inline-block' }}>
                            <a
                              href="https://icebiscuit.com/product/list.html?cate_no=164"
                              name="anchorBoxName_3282"
                              tabIndex={-1}
                            >
                              <img
                                src="//www.icebiscuit.com/web/product/medium/202301/2140754bcc8b114d9059750ac1912cdb.jpg"
                                className="listImage"
                                id="eListPrdImage3282_4"
                                alt="아이스비스킷 - 아이스비스킷심볼로고나일론백팩_IB31AB520"
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                      <div
                        className="slick-slide"
                        data-slick-index={3}
                        aria-hidden="true"
                        style={{
                          width: '413px',
                          position: 'relative',
                          left: '-1239px',
                          top: '0px',
                          transition: 'opacity 500ms ease 0s',
                          opacity: 0,
                          zIndex: 998,
                        }}
                        role="tabpanel"
                        id="slick-slide23"
                        aria-describedby="slick-slide-control23"
                      >
                        <div>
                          <div className="xans-record-" style={{ width: '100%', display: 'inline-block' }}>
                            <a
                              href="https://icebiscuit.com/product/list.html?cate_no=164"
                              name="anchorBoxName_3280"
                              tabIndex={0}
                            >
                              <img
                                src="//www.icebiscuit.com/web/product/medium/202301/09089aa00a8991a430c2b93c9a156032.jpg"
                                className="listImage"
                                id="eListPrdImage3280_4"
                                alt="아이스비스킷 - 스마일테리미니백_IB31AB529"
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                      <div
                        className="slick-slide slick-current slick-active"
                        data-slick-index={4}
                        aria-hidden="false"
                        style={{
                          width: '413px',
                          position: 'relative',
                          left: '-1652px',
                          top: '0px',
                          transition: 'opacity 500ms ease 0s',
                          opacity: 1,
                          zIndex: 1000,
                        }}
                        role="tabpanel"
                        id="slick-slide24"
                        aria-describedby="slick-slide-control24"
                        tabIndex={-1}
                      >
                        <div>
                          <div className="xans-record-" style={{ width: '100%', display: 'inline-block' }}>
                            <a
                              href="https://icebiscuit.com/product/list.html?cate_no=164"
                              name="anchorBoxName_3279"
                              tabIndex={-1}
                            >
                              <img
                                src="//www.icebiscuit.com/web/product/medium/202301/aaf54a7fae71f1d6051abd481b2fb41f.jpg"
                                className="listImage"
                                id="eListPrdImage3279_4"
                                alt="아이스비스킷 - 스마일테리미니백_IB31AB529"
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                      <div
                        className="slick-slide"
                        data-slick-index={5}
                        aria-hidden="true"
                        style={{
                          transition: 'opacity 500ms ease 0s',
                          width: '413px',
                          position: 'relative',
                          left: '-2065px',
                          top: '0px',
                          zIndex: 998,
                          opacity: 0,
                        }}
                        role="tabpanel"
                        id="slick-slide25"
                        aria-describedby="slick-slide-control25"
                        tabIndex={-1}
                      >
                        <div>
                          <div className="xans-record-" style={{ width: '100%', display: 'inline-block' }}>
                            <a
                              href="https://icebiscuit.com/product/list.html?cate_no=164"
                              name="anchorBoxName_3213"
                              tabIndex={-1}
                            >
                              <img
                                src="//www.icebiscuit.com/web/product/medium/202211/be10c869c53475435bae525fca547389.jpg"
                                className="listImage"
                                id="eListPrdImage3213_4"
                                alt="아이스비스킷 - [온라인단독]아이스비스킷심볼로고포켓백팩_IBG5BG001"
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                      <div
                        className="slick-slide"
                        data-slick-index={6}
                        aria-hidden="true"
                        style={{
                          transition: 'opacity 500ms ease 0s',
                          width: '413px',
                          position: 'relative',
                          left: '-2478px',
                          top: '0px',
                          zIndex: 998,
                          opacity: 0,
                        }}
                        role="tabpanel"
                        id="slick-slide26"
                        aria-describedby="slick-slide-control26"
                        tabIndex={-1}
                      >
                        <div>
                          <div className="xans-record-" style={{ width: '100%', display: 'inline-block' }}>
                            <a
                              href="https://icebiscuit.com/product/list.html?cate_no=164"
                              name="anchorBoxName_3214"
                              tabIndex={-1}
                            >
                              <img
                                src="//www.icebiscuit.com/web/product/medium/202211/83093271e72da1cb470f8efa440ea1ef.jpg"
                                className="listImage"
                                id="eListPrdImage3214_4"
                                alt="아이스비스킷 - [온라인단독]아이스비스킷심볼로고포켓백팩_IBG5BG001"
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                      <div
                        className="slick-slide"
                        data-slick-index={7}
                        aria-hidden="true"
                        style={{
                          transition: 'opacity 500ms ease 0s',
                          width: '413px',
                          position: 'relative',
                          left: '-2891px',
                          top: '0px',
                          zIndex: 998,
                          opacity: 0,
                        }}
                        role="tabpanel"
                        id="slick-slide27"
                        aria-describedby="slick-slide-control27"
                        tabIndex={-1}
                      >
                        <div>
                          <div className="xans-record-" style={{ width: '100%', display: 'inline-block' }}>
                            <a
                              href="https://icebiscuit.com/product/list.html?cate_no=164"
                              name="anchorBoxName_2980"
                              tabIndex={-1}
                            >
                              <img
                                src="//www.icebiscuit.com/web/product/medium/202209/d19386ae5e6432f09af4d44ee3e6537e.jpg"
                                className="listImage"
                                id="eListPrdImage2980_4"
                                alt="아이스비스킷 - 스마일포켓미니백팩_IBG5BG012"
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button
                    className="slick-next slick-arrow"
                    aria-label="Next"
                    type="button"
                    style={{ display: 'block' }}
                  >
                    Next
                  </button>
                  <ul className="slick-dots" style={{ display: 'block' }} role="tablist">
                    <li className role="presentation">
                      <button
                        type="button"
                        role="tab"
                        id="slick-slide-control20"
                        aria-controls="slick-slide20"
                        aria-label="1 of 8"
                        tabIndex={-1}
                      >
                        1
                      </button>
                    </li>
                    <li role="presentation" className>
                      <button
                        type="button"
                        role="tab"
                        id="slick-slide-control21"
                        aria-controls="slick-slide21"
                        aria-label="2 of 8"
                        tabIndex={-1}
                      >
                        2
                      </button>
                    </li>
                    <li role="presentation" className>
                      <button
                        type="button"
                        role="tab"
                        id="slick-slide-control22"
                        aria-controls="slick-slide22"
                        aria-label="3 of 8"
                        tabIndex={-1}
                      >
                        3
                      </button>
                    </li>
                    <li role="presentation" className>
                      <button
                        type="button"
                        role="tab"
                        id="slick-slide-control23"
                        aria-controls="slick-slide23"
                        aria-label="4 of 8"
                        tabIndex={0}
                        aria-selected="true"
                      >
                        4
                      </button>
                    </li>
                    <li role="presentation" className="slick-active">
                      <button
                        type="button"
                        role="tab"
                        id="slick-slide-control24"
                        aria-controls="slick-slide24"
                        aria-label="5 of 8"
                        tabIndex={-1}
                      >
                        5
                      </button>
                    </li>
                    <li role="presentation" className>
                      <button
                        type="button"
                        role="tab"
                        id="slick-slide-control25"
                        aria-controls="slick-slide25"
                        aria-label="6 of 8"
                        tabIndex={-1}
                      >
                        6
                      </button>
                    </li>
                    <li role="presentation" className>
                      <button
                        type="button"
                        role="tab"
                        id="slick-slide-control26"
                        aria-controls="slick-slide26"
                        aria-label="7 of 8"
                        tabIndex={-1}
                      >
                        7
                      </button>
                    </li>
                    <li role="presentation" className>
                      <button
                        type="button"
                        role="tab"
                        id="slick-slide-control27"
                        aria-controls="slick-slide27"
                        aria-label="8 of 8"
                        tabIndex={-1}
                      >
                        8
                      </button>
                    </li>
                  </ul>
                </div>
                {/*div app4you-smart-banner="smart-banner-admin-PC00005" class="-xans-element- xans-smart-banner-admin xans-smart-banner-admin-PC00001 main_bn3" data-aos="fade-up"data-aos-delay="1200"></div*/}
              </div>
              <div className="maingrid_3">
                <p className="pleft">CELEBRITY</p>
                <p style={{ left: '35%' }}>BEST SELLER</p>
                <div
                  data-aos="fade-up"
                  data-aos-delay={200}
                  className="xans-element- xans-product xans-product-listnormal your_class2 main_bn3 celeb slick-initialized slick-slider slick-dotted aos-init aos-animate"
                >
                  <button
                    className="slick-prev slick-arrow"
                    aria-label="Previous"
                    type="button"
                    style={{ display: 'block' }}
                  >
                    Previous
                  </button>
                  <div className="slick-list draggable">
                    <div className="slick-track" style={{ opacity: 1, width: '2891px' }}>
                      <div
                        className="slick-slide"
                        data-slick-index={0}
                        aria-hidden="true"
                        style={{
                          transition: 'opacity 500ms ease 0s',
                          width: '413px',
                          position: 'relative',
                          left: '0px',
                          top: '0px',
                          zIndex: 998,
                          opacity: 0,
                        }}
                        role="tabpanel"
                        id="slick-slide30"
                        aria-describedby="slick-slide-control30"
                        tabIndex={-1}
                      >
                        <div>
                          <div className="xans-record-" style={{ width: '100%', display: 'inline-block' }}>
                            <a
                              href="/celebrity_veiw.html?product_no=3433&cate_no=150&display_group=1"
                              name="anchorBoxName_3433"
                              tabIndex={-1}
                            >
                              <img
                                src="//www.icebiscuit.com/web/product/medium/202302/1154dbe8d597d1184aa3ecb358ff62b4.jpg"
                                className="listImage"
                                id="eListPrdImage3433_1"
                                alt="아이스비스킷 - @cravity_official"
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                      <div
                        className="slick-slide"
                        data-slick-index={1}
                        aria-hidden="true"
                        style={{
                          transition: 'opacity 500ms ease 0s',
                          width: '413px',
                          position: 'relative',
                          left: '-413px',
                          top: '0px',
                          zIndex: 998,
                          opacity: 0,
                        }}
                        role="tabpanel"
                        id="slick-slide31"
                        aria-describedby="slick-slide-control31"
                        tabIndex={-1}
                      >
                        <div>
                          <div className="xans-record-" style={{ width: '100%', display: 'inline-block' }}>
                            <a
                              href="/celebrity_veiw.html?product_no=3385&cate_no=150&display_group=1"
                              name="anchorBoxName_3385"
                              tabIndex={-1}
                            >
                              <img
                                src="//www.icebiscuit.com/web/product/medium/202302/7a81f6939d7613760f71d58a326134db.png"
                                className="listImage"
                                id="eListPrdImage3385_1"
                                alt="아이스비스킷 - @young_g_hur"
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                      <div
                        className="slick-slide"
                        data-slick-index={2}
                        aria-hidden="true"
                        style={{
                          transition: 'opacity 500ms ease 0s',
                          width: '413px',
                          position: 'relative',
                          left: '-826px',
                          top: '0px',
                          zIndex: 998,
                          opacity: 0,
                        }}
                        role="tabpanel"
                        id="slick-slide32"
                        aria-describedby="slick-slide-control32"
                        tabIndex={-1}
                      >
                        <div>
                          <div className="xans-record-" style={{ width: '100%', display: 'inline-block' }}>
                            <a
                              href="/celebrity_veiw.html?product_no=3384&cate_no=150&display_group=1"
                              name="anchorBoxName_3384"
                              tabIndex={-1}
                            >
                              <img
                                src="//www.icebiscuit.com/web/product/medium/202302/b1e3828bb32a472c0fcf4941a5b02210.png"
                                className="listImage"
                                id="eListPrdImage3384_1"
                                alt="아이스비스킷 - @talways_tari"
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                      <div
                        className="slick-slide"
                        data-slick-index={3}
                        aria-hidden="true"
                        style={{
                          transition: 'opacity 500ms ease 0s',
                          width: '413px',
                          position: 'relative',
                          left: '-1239px',
                          top: '0px',
                          zIndex: 998,
                          opacity: 0,
                        }}
                        role="tabpanel"
                        id="slick-slide33"
                        aria-describedby="slick-slide-control33"
                        tabIndex={-1}
                      >
                        <div>
                          <div className="xans-record-" style={{ width: '100%', display: 'inline-block' }}>
                            <a
                              href="/celebrity_veiw.html?product_no=3383&cate_no=150&display_group=1"
                              name="anchorBoxName_3383"
                              tabIndex={-1}
                            >
                              <img
                                src="//www.icebiscuit.com/web/product/medium/202302/979f45ceb6d85276b5718d83252da3b8.png"
                                className="listImage"
                                id="eListPrdImage3383_1"
                                alt="아이스비스킷 - @sunbin_eyesmag"
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                      <div
                        className="slick-slide"
                        data-slick-index={4}
                        aria-hidden="true"
                        style={{
                          transition: 'opacity 500ms ease 0s',
                          width: '413px',
                          position: 'relative',
                          left: '-1652px',
                          top: '0px',
                          zIndex: 998,
                          opacity: 0,
                        }}
                        role="tabpanel"
                        id="slick-slide34"
                        aria-describedby="slick-slide-control34"
                        tabIndex={-1}
                      >
                        <div>
                          <div className="xans-record-" style={{ width: '100%', display: 'inline-block' }}>
                            <a
                              href="/celebrity_veiw.html?product_no=3243&cate_no=150&display_group=1"
                              name="anchorBoxName_3243"
                              tabIndex={-1}
                            >
                              <img
                                src="//www.icebiscuit.com/web/product/medium/202212/8427ce6bc27a58d7002693912cbd61ed.jpg"
                                className="listImage"
                                id="eListPrdImage3243_1"
                                alt="아이스비스킷 - @dlwlrma"
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                      <div
                        className="slick-slide"
                        data-slick-index={5}
                        aria-hidden="true"
                        style={{
                          width: '413px',
                          position: 'relative',
                          left: '-2065px',
                          top: '0px',
                          transition: 'opacity 500ms ease 0s',
                          opacity: 0,
                          zIndex: 998,
                        }}
                        role="tabpanel"
                        id="slick-slide35"
                        aria-describedby="slick-slide-control35"
                      >
                        <div>
                          <div className="xans-record-" style={{ width: '100%', display: 'inline-block' }}>
                            <a
                              href="/celebrity_veiw.html?product_no=3241&cate_no=150&display_group=1"
                              name="anchorBoxName_3241"
                              tabIndex={0}
                            >
                              <img
                                src="//www.icebiscuit.com/web/product/medium/202212/c6810ae1faf7509ad817e5abd7159a9f.jpg"
                                className="listImage"
                                id="eListPrdImage3241_1"
                                alt="아이스비스킷 - @dlwlrma"
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                      <div
                        className="slick-slide slick-current slick-active"
                        data-slick-index={6}
                        aria-hidden="false"
                        style={{
                          width: '413px',
                          position: 'relative',
                          left: '-2478px',
                          top: '0px',
                          transition: 'opacity 500ms ease 0s',
                          opacity: 1,
                          zIndex: 1000,
                        }}
                        role="tabpanel"
                        id="slick-slide36"
                        aria-describedby="slick-slide-control36"
                        tabIndex={-1}
                      >
                        <div>
                          <div className="xans-record-" style={{ width: '100%', display: 'inline-block' }}>
                            <a
                              href="/celebrity_veiw.html?product_no=3240&cate_no=150&display_group=1"
                              name="anchorBoxName_3240"
                              tabIndex={-1}
                            >
                              <img
                                src="//www.icebiscuit.com/web/product/medium/202212/e20ab6a7f3c9ce24270a018c1fb7ebf4.jpg"
                                className="listImage"
                                id="eListPrdImage3240_1"
                                alt="아이스비스킷 - @gongchanida"
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button
                    className="slick-next slick-arrow"
                    aria-label="Next"
                    type="button"
                    style={{ display: 'block' }}
                  >
                    Next
                  </button>
                  <ul className="slick-dots" style={{ display: 'block' }} role="tablist">
                    <li className role="presentation">
                      <button
                        type="button"
                        role="tab"
                        id="slick-slide-control30"
                        aria-controls="slick-slide30"
                        aria-label="1 of 7"
                        tabIndex={-1}
                      >
                        1
                      </button>
                    </li>
                    <li role="presentation" className>
                      <button
                        type="button"
                        role="tab"
                        id="slick-slide-control31"
                        aria-controls="slick-slide31"
                        aria-label="2 of 7"
                        tabIndex={-1}
                      >
                        2
                      </button>
                    </li>
                    <li role="presentation" className>
                      <button
                        type="button"
                        role="tab"
                        id="slick-slide-control32"
                        aria-controls="slick-slide32"
                        aria-label="3 of 7"
                        tabIndex={-1}
                      >
                        3
                      </button>
                    </li>
                    <li role="presentation" className>
                      <button
                        type="button"
                        role="tab"
                        id="slick-slide-control33"
                        aria-controls="slick-slide33"
                        aria-label="4 of 7"
                        tabIndex={-1}
                      >
                        4
                      </button>
                    </li>
                    <li role="presentation" className>
                      <button
                        type="button"
                        role="tab"
                        id="slick-slide-control34"
                        aria-controls="slick-slide34"
                        aria-label="5 of 7"
                        tabIndex={-1}
                      >
                        5
                      </button>
                    </li>
                    <li role="presentation" className>
                      <button
                        type="button"
                        role="tab"
                        id="slick-slide-control35"
                        aria-controls="slick-slide35"
                        aria-label="6 of 7"
                        tabIndex={0}
                        aria-selected="true"
                      >
                        6
                      </button>
                    </li>
                    <li role="presentation" className="slick-active">
                      <button
                        type="button"
                        role="tab"
                        id="slick-slide-control36"
                        aria-controls="slick-slide36"
                        aria-label="7 of 7"
                        tabIndex={-1}
                      >
                        7
                      </button>
                    </li>
                  </ul>
                </div>
                <div
                  data-aos="fade-up"
                  data-aos-delay={200}
                  className="xans-element- xans-product xans-product-listnormal your_class2 main_bn3 slick-initialized slick-slider slick-dotted aos-init aos-animate"
                >
                  <button
                    className="slick-prev slick-arrow"
                    aria-label="Previous"
                    type="button"
                    style={{ display: 'block' }}
                  >
                    Previous
                  </button>
                  <div className="slick-list draggable">
                    <div className="slick-track" style={{ opacity: 1, width: '2065px' }}>
                      <div
                        className="slick-slide"
                        data-slick-index={0}
                        aria-hidden="true"
                        style={{
                          transition: 'opacity 500ms ease 0s',
                          width: '413px',
                          position: 'relative',
                          left: '0px',
                          top: '0px',
                          zIndex: 998,
                          opacity: 0,
                        }}
                        role="tabpanel"
                        id="slick-slide40"
                        aria-describedby="slick-slide-control40"
                        tabIndex={-1}
                      >
                        <div>
                          <div className="xans-record-" style={{ width: '100%', display: 'inline-block' }}>
                            <a
                              href="/product/ibx이스트팩스마일패디드파커백팩ibg5bg703/3374/category/154/display/1/"
                              name="anchorBoxName_3374"
                              tabIndex={-1}
                            >
                              <img
                                src="//www.icebiscuit.com/web/product/medium/202302/826c46a4db522f9d42baa4cae888f807.jpg"
                                className="listImage"
                                id="eListPrdImage3374_1"
                                alt="아이스비스킷 - IBx이스트팩스마일패디드파커백팩_IBG5BG703"
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                      <div
                        className="slick-slide"
                        data-slick-index={1}
                        aria-hidden="true"
                        style={{
                          transition: 'opacity 500ms ease 0s',
                          width: '413px',
                          position: 'relative',
                          left: '-413px',
                          top: '0px',
                          zIndex: 998,
                          opacity: 0,
                        }}
                        role="tabpanel"
                        id="slick-slide41"
                        aria-describedby="slick-slide-control41"
                        tabIndex={-1}
                      >
                        <div>
                          <div className="xans-record-" style={{ width: '100%', display: 'inline-block' }}>
                            <a
                              href="/product/ibx이스트팩피나클백팩ibg5bg701/3382/category/154/display/1/"
                              name="anchorBoxName_3382"
                              tabIndex={-1}
                            >
                              <img
                                src="//www.icebiscuit.com/web/product/medium/202302/df3a6634f73f51225a4cd39b09151787.jpg"
                                className="listImage"
                                id="eListPrdImage3382_1"
                                alt="아이스비스킷 - IBx이스트팩피나클백팩_IBG5BG701"
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                      <div
                        className="slick-slide slick-current slick-active"
                        data-slick-index={2}
                        aria-hidden="false"
                        style={{
                          width: '413px',
                          position: 'relative',
                          left: '-826px',
                          top: '0px',
                          zIndex: 999,
                          opacity: 1,
                        }}
                        role="tabpanel"
                        id="slick-slide42"
                        aria-describedby="slick-slide-control42"
                      >
                        <div>
                          <div className="xans-record-" style={{ width: '100%', display: 'inline-block' }}>
                            <a
                              href="/product/아이스비스킷심볼로고파우치백팩ibg5bg011/2974/category/154/display/1/"
                              name="anchorBoxName_2974"
                              tabIndex={0}
                            >
                              <img
                                src="//www.icebiscuit.com/web/product/medium/202209/e66842d9c6666bc3e57f19693c7506da.jpg"
                                className="listImage"
                                id="eListPrdImage2974_1"
                                alt="아이스비스킷 - 아이스비스킷심볼로고파우치백팩_IBG5BG011"
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                      <div
                        className="slick-slide"
                        data-slick-index={3}
                        aria-hidden="true"
                        style={{
                          transition: 'opacity 500ms ease 0s',
                          width: '413px',
                          position: 'relative',
                          left: '-1239px',
                          top: '0px',
                          zIndex: 998,
                          opacity: 0,
                        }}
                        role="tabpanel"
                        id="slick-slide43"
                        aria-describedby="slick-slide-control43"
                        tabIndex={-1}
                      >
                        <div>
                          <div className="xans-record-" style={{ width: '100%', display: 'inline-block' }}>
                            <a
                              href="/product/스마일쿨러포켓미니백팩ibg5bg621/3371/category/154/display/1/"
                              name="anchorBoxName_3371"
                              tabIndex={-1}
                            >
                              <img
                                src="//www.icebiscuit.com/web/product/medium/202302/589de4643fa9ff79de8a2bd8c815e81e.jpg"
                                className="listImage"
                                id="eListPrdImage3371_1"
                                alt="아이스비스킷 - 스마일쿨러포켓미니백팩_IBG5BG621"
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                      <div
                        className="slick-slide"
                        data-slick-index={4}
                        aria-hidden="true"
                        style={{
                          transition: 'opacity 500ms ease 0s',
                          width: '413px',
                          position: 'relative',
                          left: '-1652px',
                          top: '0px',
                          zIndex: 998,
                          opacity: 0,
                        }}
                        role="tabpanel"
                        id="slick-slide44"
                        aria-describedby="slick-slide-control44"
                        tabIndex={-1}
                      >
                        <div>
                          <div className="xans-record-" style={{ width: '100%', display: 'inline-block' }}>
                            <a
                              href="/product/ibx이스트팩jr숄더백ibg5bg704/3373/category/154/display/1/"
                              name="anchorBoxName_3373"
                              tabIndex={-1}
                            >
                              <img
                                src="//www.icebiscuit.com/web/product/medium/202302/148c095057b2deb577cf02d167022e26.jpg"
                                className="listImage"
                                id="eListPrdImage3373_1"
                                alt="아이스비스킷 - IBx이스트팩JR숄더백_IBG5BG704"
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button
                    className="slick-next slick-arrow"
                    aria-label="Next"
                    type="button"
                    style={{ display: 'block' }}
                  >
                    Next
                  </button>
                  <ul className="slick-dots" style={{ display: 'block' }} role="tablist">
                    <li className role="presentation">
                      <button
                        type="button"
                        role="tab"
                        id="slick-slide-control40"
                        aria-controls="slick-slide40"
                        aria-label="1 of 5"
                        tabIndex={-1}
                      >
                        1
                      </button>
                    </li>
                    <li role="presentation" className>
                      <button
                        type="button"
                        role="tab"
                        id="slick-slide-control41"
                        aria-controls="slick-slide41"
                        aria-label="2 of 5"
                        tabIndex={-1}
                      >
                        2
                      </button>
                    </li>
                    <li role="presentation" className="slick-active">
                      <button
                        type="button"
                        role="tab"
                        id="slick-slide-control42"
                        aria-controls="slick-slide42"
                        aria-label="3 of 5"
                        tabIndex={0}
                        aria-selected="true"
                      >
                        3
                      </button>
                    </li>
                    <li role="presentation" className>
                      <button
                        type="button"
                        role="tab"
                        id="slick-slide-control43"
                        aria-controls="slick-slide43"
                        aria-label="4 of 5"
                        tabIndex={-1}
                      >
                        4
                      </button>
                    </li>
                    <li role="presentation" className>
                      <button
                        type="button"
                        role="tab"
                        id="slick-slide-control44"
                        aria-controls="slick-slide44"
                        aria-label="5 of 5"
                        tabIndex={-1}
                      >
                        5
                      </button>
                    </li>
                  </ul>
                </div>
                {/*div app4you-smart-banner="smart-banner-admin-PC00007" class="-xans-element- xans-smart-banner-admin xans-smart-banner-admin-PC00001 main_bn3" data-aos="fade-up"  data-aos-delay="200"></div*/}
                <div className="main_bn3">
                  <div
                    app4you-smart-banner="smart-banner-admin-PC00008"
                    className="-xans-element- xans-smart-banner-admin xans-smart-banner-admin-PC00001 aos-init xans-element- xans-smart-banner-admin-PC00008 aos-animate"
                    data-aos="fade-up"
                    data-aos-delay={500}
                  >
                    <div
                      className="smart-banner-wrapper circle"
                      data-slider="true"
                      data-type="full"
                      data-mode="fade"
                      data-minslides={1}
                      data-maxslides={10}
                      data-controls="true"
                      data-adaptiveheight="true"
                      data-autohover="true"
                      data-responsive="true"
                      data-pager="true"
                      data-auto="true"
                      data-speed={500}
                      data-pause={4000}
                    >
                      <div className="smart-banner-bx-wrapper">
                        <div
                          className="bx-viewport"
                          style={{
                            width: '100%',
                            overflow: 'hidden',
                            position: 'relative',
                            height: '413px',
                          }}
                        >
                          <ul
                            style={{
                              width: 'auto',
                              position: 'relative',
                              visibility: 'visible',
                            }}
                            className="smart-banner-bxslider"
                          >
                            <li
                              style={{
                                float: 'none',
                                listStyle: 'none',
                                position: 'absolute',
                                width: '413px',
                                zIndex: 50,
                                display: 'block',
                              }}
                            >
                              <a
                                href="https://icebiscuit.com/simple.html?product_no=3425&cate_no=145&display_group=1"
                                target="_blank"
                                onClick="APP4YOU_SMART_BANNER.incrementBanner(839918)"
                                style={{ cursor: 'pointer' }}
                              >
                                <img src="https://file.cafe24cos.com/banner-admin-live/upload/foxyecho3/adc1669c-8bba-4c4c-8c87-01e3fb9cba06.jpeg" />
                              </a>
                            </li>
                            <li
                              style={{
                                float: 'none',
                                listStyle: 'none',
                                position: 'absolute',
                                width: '413px',
                                zIndex: 0,
                                display: 'none',
                              }}
                            >
                              <a
                                href="https://icebiscuit.com/store.html?board_no=101"
                                target="_blank"
                                onClick="APP4YOU_SMART_BANNER.incrementBanner(843895)"
                                style={{ cursor: 'pointer' }}
                              >
                                <img src="https://file.cafe24cos.com/banner-admin-live/upload/foxyecho3/92dbdec4-7e63-49e8-90f4-34e200b79b82.jpeg" />
                              </a>
                            </li>
                            <li
                              style={{
                                float: 'none',
                                listStyle: 'none',
                                position: 'absolute',
                                width: '413px',
                                zIndex: 0,
                                display: 'none',
                              }}
                            >
                              <a
                                href="https://icebiscuit.com/product/list.html?cate_no=451"
                                target="_blank"
                                onClick="APP4YOU_SMART_BANNER.incrementBanner(813679)"
                                style={{ cursor: 'pointer' }}
                              >
                                <img src="https://file.cafe24cos.com/banner-admin-live/upload/foxyecho3/dd91a582-16f3-4070-b1c9-cd28b4afc4d2.jpeg" />
                              </a>
                            </li>
                            <li
                              style={{
                                float: 'none',
                                listStyle: 'none',
                                position: 'absolute',
                                width: '413px',
                                zIndex: 0,
                                display: 'none',
                              }}
                            >
                              <a
                                href="https://icebiscuit.com/simple.html?product_no=3309&cate_no=145&display_group=1"
                                target="_blank"
                                onClick="APP4YOU_SMART_BANNER.incrementBanner(803982)"
                                style={{ cursor: 'pointer' }}
                              >
                                <img src="https://file.cafe24cos.com/banner-admin-live/upload/foxyecho3/d7d059f8-6612-4a3d-c9f4-bba7a565e5ce.jpeg" />
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="bx-controls bx-has-pager bx-has-controls-direction">
                          <div className="bx-pager bx-default-pager">
                            <div className="bx-pager-item">
                              <a href data-slide-index={0} className="bx-pager-link active">
                                1
                              </a>
                            </div>
                            <div className="bx-pager-item">
                              <a href data-slide-index={1} className="bx-pager-link">
                                2
                              </a>
                            </div>
                            <div className="bx-pager-item">
                              <a href data-slide-index={2} className="bx-pager-link">
                                3
                              </a>
                            </div>
                            <div className="bx-pager-item">
                              <a href data-slide-index={3} className="bx-pager-link">
                                4
                              </a>
                            </div>
                          </div>
                          <div className="bx-controls-direction">
                            <a className="bx-prev" href />
                            <a className="bx-next" href />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="main_video aos-init aos-animate" data-aos="fade-in">
              <div style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
                <div className="vsc-controller" />
                <video
                  autoPlay
                  loop
                  playsInline
                  muted="muted"
                  src="https://d33gtiafpkpd1z.cloudfront.net/video/23ss_icebiscuit%20(1080p).mp4"
                  id="vimeo_iframe"
                  style={{
                    position: 'absolute',
                    top: '54%',
                    left: '50%',
                    width: '110%',
                    height: '110%',
                    transform: 'translate(-50%, -50%)',
                    msTransform: 'translate(-50%, -50%)',
                  }}
                  frameBorder={0}
                  allow="autoplay; fullscreen"
                  allowFullScreen
                />
                {/*<iframe src="https://player.vimeo.com/video/786776612?h=f11ced2edd&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" id="vimeo_iframe"
                                    style="position:absolute;top:54%;left:50%;width:110%;height:110%;transform: translate(-50%, -50%); -ms-transform: translate(-50%, -50%);" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>*/}
              </div>
            </div>
            <hr className="layout" />
            <div className="main_insta aos-init aos-animate" data-aos="fade-in">
              <p className="follw">
                <a href="https://www.instagram.com/icebiscuit_bk/" target="_blank">
                  FOLLOW US!
                </a>
              </p>{' '}
              <p className="follw2">
                <a href="https://www.instagram.com/icebiscuit_bk/" target="_blank">
                  @ ICEBISCUIT_BK
                </a>
              </p>
              {/*div  class="main_title"><img src="/web/upload/img/insta_icon.png" style="width:38px; "></div*/}
              {/* SnapWidget */}
              <iframe
                src="https://snapwidget.com/embed/988268"
                className="snapwidget-widget"
                allowTransparency="true"
                frameBorder={0}
                scrolling="no"
                style={{
                  border: 'none',
                  overflow: 'hidden',
                  width: '54%',
                  margin: '30px auto 40px',
                  height: '688px',
                }}
                id="iFrameResizer0"
              />
            </div>
            <a
              className="main_bt aos-init aos-animate"
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              href="https://www.instagram.com/icebiscuit_bk/"
              target="_blank"
              style={{ margin: '20px auto 50px', textAlign: 'center' }}
            >
              SEE INSTAGRAM
            </a>
            <style
              dangerouslySetInnerHTML={{
                __html:
                  '\n                        .sub_top_ban {display:none;}\n                        #header {margin:0 auto; border:0;}\n                        #container,\n                        #contents {width:100%;}\n                        .celeb { }\n                    ',
              }}
            />
          </div>
          <hr className="layout" />
        </div>
        <hr className="layout" />
      </div>
      <hr className="layout" />
      {/* cre.ma / 스퀘어 위젯 / 스크립트를 수정할 경우 연락주세요 (support@cre.ma)
<div class="crema-reviews" data-widget-id="31"></div>*/}
      <style
        dangerouslySetInnerHTML={{
          __html:
            '\n    \n    \n/* 하단 */\n#footer {margin:100px 0 0; background:#;border:0;border-top:1px solid #ececec;}\n#footer .footer_inner {max-width:1500px; width:80%; min-width:1000px ; margin:0 auto;padding:90px 0 70px 0}\n    #footer .footer_inner div { float:left; display:inline-block; width:20%}\n    .f_logo img { width:200px}\n  .f_menu  a {color:#DC3C23; display:block; padding:0 0 16px 0; font-size:16px; font-weight:600}\n    .f_call  { font-size:14px; font-weight:500; line-height:20px;letter-spacing:0.5px}\n    .f_call span { display:block; font-weight:600;  font-size:18px; letter-spacing:0.7px}\n     .f_call img  { width:28px; padding:20px 0 0 0}\n    .f_company { font-size:13px;letter-spacing:0.3px;  line-height:22px; color:#000}\n    .copyright { background:#DC3C23; width:100% ; clear:both; color:#fff; font-size:13px; font-weight:600; text-align:center; padding:5px 0; }\n    \n    /* 스크롤버튼 */\n#scrolltotop{  z-index:9999999999;position:fixed;bottom:5px;right:0px;  }\n#scrolltotop span{width:48px;height:48px;display:block;margin:0px 5px 0px 0; border-radius:3px;-webkit-transition:all 0.2s ease-out;-moz-transition:all 0.2s ease-out;-o-transition:all 0.2s ease-out;-ms-transition:all 0.2s ease-out;transition:all 0.2s ease-out}\n\n    ',
        }}
      />
      {/* //footer */}
      {/* Enliple Tracker Start */}
      {/* Enliple Tracker End */}
      <div id="scrolltotop" style={{ display: 'block' }}>
        <a href="src/components/MainPage#top">
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
        {/* cre.ma / 리뷰 팝업 / 스크립트를 수정할 경우 연락주세요 (support@cre.ma) */}
        <div className="crema-popup crema-applied" />
        {/* cre.ma / init 스크립트 (PC) / 스크립트를 수정할 경우 연락주세요 (support@cre.ma) */}
      </div>
      <meta name="google-site-verification" content="qpWeMBcfpy1gvDJNbH0Esm-K9QPw7VUex3yrm8PmITQ" />
      {/* Google Tag Manager (noscript) */}
      <noscript>
        &lt;iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5SGRNH3" height="0" width="0"
        style="display:none;visibility:hidden"&gt;&lt;/iframe&gt;
      </noscript>
      {/* End Google Tag Manager (noscript) */}
      <span itemScope itemType="https://schema.org/Organization">
        <link itemProp="url" href="https://www.icebiscuit.com" />
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
      <div
        id="popup_14"
        style={{
          position: 'absolute',
          top: '150px',
          left: '51px',
          zIndex: 9999,
          width: '500px',
          display: 'none',
        }}
      >
        <iframe
          src="/popup/roll.html?idx=14&type=L&__popupPage=T"
          scrolling="no"
          width={500}
          height={550}
          frameBorder={0}
          allowTransparency="true"
        />
      </div>
      <iframe
        src="/exec/front/eclog/main/?&rloc=https%3A//icebiscuit.com/&rref=https%3A//icebiscuit.com/about.html&udim=1920*1080&rserv=elg-db-svcm-089.cafe24.com&cid=CID53e742069a0173b42824852e12d56f90&role_path=MAIN&stype=e&shop_no=1&lang=ko_KR&ver=2"
        id="log_realtime"
        style={{ display: 'none' }}
      />
      <iframe
        src="https://pixel.mathtag.com/sync/iframe?mt_uuid=470e63e9-c48f-4f00-b754-bb69279fd4cb&no_iframe=1&exsync=https%3A%2F%2Fastg.widerplanet.com%2Fdelivery%2Fwpp.php%3Fmmuuid%3D%5BMM_UUID%5D&source=mathtag"
        id="mm_sync_back_ground"
        title="MediaMath Advertising"
        style={{ visibility: 'hidden', display: 'none' }}
      />
    </div>
  );
}
