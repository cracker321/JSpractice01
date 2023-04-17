export default function LookBook() {
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
            <style
              dangerouslySetInnerHTML={{
                __html:
                  '\n    #container { width:100%;  margin:0 auto; *zoom:1; }\n    #content { margin:0px auto; padding:50px 0; min-width:1200px; width:100%; } \n#contents {\n    width: 100%;\n\n}\n     .shop_wrap {padding: 0px 0 0 0}\n \n    .xans-product-menupackage { margin:0 0 27px; }\n.xans-product-menupackage .title { min-height:30px; margin:0px 0 0px; text-align:left}\n.xans-product-menupackage .title .banner { margin:0 0 10px; }\n .title h2 a {  font-size:30px; font-weight:600; color:#111; text-transform:uppercase; letter-spacing:0.9px; text-transform:uppercase;}\n.xans-product-menupackage .title h2, \n.xans-product-menupackage .title .likeButton { display:inline-block; vertical-align:middle; }\n.xans-product-menupackage .title .likeButton button { margin:0 0 0 10px; padding:0 0 0 20px; height:16px; font-family:verdana; color:#9a9a9a; letter-spacing:-1px; background:none; }\n.xans-product-menupackage .title .likeButton.selected button { color:#353535; }\n\n.xans-product-menupackage .menuCategory {  font-size:0; line-height:0; text-align:left; margin:20px 0 0  }\n.xans-product-menupackage .menuCategory > li { display:block; width:100%; margin:0px 0px; font-size:12px; line-height:14px; vertical-align:top; font-weight:500 }\n.xans-product-menupackage .menuCategory > li > a {  font-weight:500; color:#2e2e2e;\n font-size:20px;  letter-spacing:1.0px; }\n.xans-product-menupackage .menuCategory > li > a:hover { color:#D9231F;  }\n.xans-product-menupackage .menuCategory > li.selected > a { font-weight:600 ; color:#ED3838 }\n.xans-product-menupackage .menuCategory > li .count { font-weight:normal; }\n.xans-product-menupackage .menuCategory > li > ul { padding:6px 0 0 0; }\n.xans-product-menupackage .menuCategory > li > ul > li { margin:8px 0 0 0; line-height:14px; }\n.xans-product-menupackage .menuCategory > li > ul > li > a { color:#575a63; }\n.xans-product-menupackage .menuCategory > li > ul > li > a:hover,\n.xans-product-menupackage .menuCategory > li > ul > li.selected > a { color:#888; }\n.xans-product-menupackage .menuCategory > li > ul > li > .button { display:inline-block; position:relative; width:9px; height:14px; margin:1px 0 0 3px; vertical-align:top; }\n\n.xans-product-menupackage .subCategory { display:none; position:absolute; left:50%; top:13px; z-index:11; width:300px; margin:0 0 0 -151px; padding:6px 0; border:1px solid #565960; font-size:0; line-height:0; background:#fff url("//img.echosting.cafe24.com/skin/base_ko_KR/product/bg_sub_category_line.gif") repeat-y 150px 0; }\n.xans-product-menupackage .subCategory li { display:inline-block; width:130px; margin:8px 0 8px 18px; font-size:12px; line-height:14px; vertical-align:top; }\n.xans-product-menupackage .subCategory li a { color:#575a63; }\n.xans-product-menupackage .subCategory li a:hover,\n.xans-product-menupackage .subCategory li.selected a { color:#008bcc; }\n.xans-product-menupackage .menuCategory .button.selected { z-index:11; }\n.xans-product-menupackage .menuCategory .button.selected .subCategory { display:block; }\n    \n    .look_name {text-align:center; line-height:20px;   width:260px; padding:15px 20px;  position:absolute; transform: translate(-50%, 0%); -ms-transform: translate(-50%, 0%);left:50%; bottom:0; background:#fff; z-index:99999}\n      .look_name span {font-size:15px !important; font-weight:500 !important; letter-spacing:6.0px;}\n    \n    .listImage { width:87% ; margin:0 auto}\n\n    .title h2 {\n    padding:10px 0 5px 0px ; \n    font-size: 28px;\n    text-align: left;\n    color: #2a2a2a; \n    font-weight: 500;\n    line-height: 24px;\n    letter-spacing: 0.5px;\n}\n .ec-base-product .prdList > li , .ec-base-product .prdList .thumbnail{ margin:0 }\n    \n    .shop_wrap {clear:both; display:block; margin:0px auto; width:100%;position:relative; }\n     .shop_wrap img { max-width:100%; height:auto !important}\n\n    .shop_list { position:fixed; z-index:6; left:90px; top:180px;   }\n .shop_main { margin:-95px 0 0 0 }\n    .shop_list {padding:20px 0 20px 20px; width:auto; margin-right:1%}\n       .shop_list:hover { background:#fff; transition: 0.3s;}\n    .shop_main { width:100%;}\n    \n    .lookbook li {  overflow:hidden; }\n    .lookbook .thumbnail .prdImg { \n}.leftCategory li {\n    padding: 0 0 18px 0;\n}\n    .ec-base-product {    margin: 20px 0 0;}\n    \n    .ec-base-product .prdList .description { background:#fff;  position:absolute; left:50%;padding:20px 40px; bottom:30px;transform: translate(-50%, -50%); -ms-transform: translate(-50%, 0%);;} \n    .ec-base-product .prdList .description span {}\n    \n    .thumbnail {\n  display: block;\n  width: 100%;\n  height: auto;\n}\n  .container .prdImg img   { transition: transform .5s;  }\n  .container:hover .prdImg img {  transform: scale(1.15);}\n\n.overlay {\n  position: absolute;\n  bottom: 3%;\n  left: 0;\n  right: 0;\n   opacity: 0;\n  overflow: hidden;\n  width: 100%;\n  height:100%;\n  transition: .6s ease;\n}\n    \n.container:hover .overlay {\n  bottom: 0;\n  height: 100%;\n      opacity: 1; transition-delay: 0.4s;\n}\n\n.text {\n background:#fff; padding:50px 50px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n  -ms-transform: translate(-50%, -50%);\n  transform: translate(-50%, -50%);\n  text-align: center; }\n    \n .text span   { color: #000 !important;\n     letter-spacing:1.4px; font-size: 38px !important;\n    \n}\n    .container {\n  position: relative;\n  \n}\n',
              }}
            />
            <div className="shop_wrap">
              <div className="shop_list aos-init aos-animate" data-aos="fade-right" data-aos-delay={300}>
                <div className="xans-element- xans-product xans-product-headcategory title ">
                  <h2>
                    <a href="/lookbook.html?cate_no=185">LOOKBOOK</a>
                  </h2>
                </div>
                <div
                  style={{ left: '-30px', width: '170px' }}
                  className="xans-element- xans-product xans-product-menupackage leftCategory "
                >
                  <ul className="menuCategory">
                    <li
                      style={{ display: '' }}
                      className="xans-element- xans-product xans-product-displaycategory  xans-record-"
                    >
                      <a href="/lookbook.html?cate_no=444">
                        2023 <span className="count displaynone">()</span>
                      </a>
                    </li>
                    <li
                      style={{ display: '' }}
                      className="xans-element- xans-product xans-product-displaycategory  xans-record-"
                    >
                      <a href="/lookbook.html?cate_no=360">
                        2022 <span className="count displaynone">()</span>
                      </a>
                    </li>
                    <li
                      style={{ display: '' }}
                      className="xans-element- xans-product xans-product-displaycategory  xans-record-"
                    >
                      <a href="/lookbook.html?cate_no=298">
                        2021 <span className="count displaynone">()</span>
                      </a>
                    </li>
                    <li
                      style={{ display: '' }}
                      className="xans-element- xans-product xans-product-displaycategory  xans-record-"
                    >
                      <a href="/lookbook.html?cate_no=297">
                        2020 <span className="count displaynone">()</span>
                      </a>
                    </li>
                    <li
                      style={{ display: '' }}
                      className="xans-element- xans-product xans-product-displaycategory  xans-record-"
                    >
                      <a href="/lookbook.html?cate_no=296">
                        2019 <span className="count displaynone">()</span>
                      </a>
                    </li>
                    <li
                      style={{ display: '' }}
                      className="xans-element- xans-product xans-product-displaycategory  xans-record-"
                    >
                      <a href="/lookbook.html?cate_no=295">
                        2018 <span className="count displaynone">()</span>
                      </a>
                    </li>
                    <li
                      style={{ display: '' }}
                      className="xans-element- xans-product xans-product-displaycategory  xans-record-"
                    >
                      <a href="/lookbook.html?cate_no=294">
                        2017 <span className="count displaynone">()</span>
                      </a>
                    </li>
                    <li
                      style={{ display: '' }}
                      className="xans-element- xans-product xans-product-displaycategory  xans-record-"
                    >
                      <a href="/lookbook.html?cate_no=293">
                        2016 <span className="count displaynone">()</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="shop_main">
                <div className="xans-element- xans-product xans-product-normalpackage ">
                  <div className="xans-element- xans-product xans-product-listnormal ec-base-product lookbook">
                    {/*
            $count = 16
                ※ 상품진열갯수를 설정하는 변수입니다. 설정하지 않을 경우, 최대 200개의 상품이 진열 됩니다.
                ※ 진열된 상품이 많으면, 쇼핑몰에 부하가 발생할 수 있습니다.
            $basket_result = /product/add_basket.html
            $basket_option = /product/basket_option.html
        */}
                    <ul className="prdList grid1">
                      <li
                        id="anchorBoxId_3293"
                        data-aos="fade-up"
                        className="container xans-record- aos-init aos-animate"
                      >
                        <div className="thumbnail">
                          <div className="prdImg">
                            <img
                              src="//icebiscuit.com/web/product/medium/202301/7fdef4ca11f4a4847c8157650fdec38e.jpg"
                              id="eListPrdImage3293_1"
                              alt="아이스비스킷 - 2023 SPRING"
                              style={{ width: '100%' }}
                            />
                            &nbsp;
                          </div>
                          <a href="/simple.html?product_no=3293&cate_no=258&display_group=1">
                            <div className="overlay">
                              <div className="text">
                                <span
                                  style={{
                                    fontSize: '18px',
                                    color: '#000000',
                                  }}
                                >
                                  2023 SPRING
                                </span>
                              </div>
                            </div>
                          </a>
                        </div>
                      </li>
                      <li
                        id="anchorBoxId_3155"
                        data-aos="fade-up"
                        className="container xans-record- aos-init aos-animate"
                      >
                        <div className="thumbnail">
                          <div className="prdImg">
                            <img
                              src="//icebiscuit.com/web/product/medium/202210/19f5240f52a8d873bb78a30c78398f3e.jpg"
                              id="eListPrdImage3155_1"
                              alt="아이스비스킷 - 2022 WINTER"
                              style={{ width: '100%' }}
                            />
                            &nbsp;
                          </div>
                          <a href="/simple.html?product_no=3155&cate_no=258&display_group=1">
                            <div className="overlay">
                              <div className="text">
                                <span
                                  style={{
                                    fontSize: '18px',
                                    color: '#000000',
                                  }}
                                >
                                  2022 WINTER
                                </span>
                              </div>
                            </div>
                          </a>
                        </div>
                      </li>
                      <li id="anchorBoxId_2955" data-aos="fade-up" className="container xans-record- aos-init">
                        <div className="thumbnail">
                          <div className="prdImg">
                            <img
                              src="//icebiscuit.com/web/product/medium/202209/9301cd820c58d94f883d1be4f3ce9192.jpg"
                              id="eListPrdImage2955_1"
                              alt="아이스비스킷 - 2022 FALL"
                              style={{ width: '100%' }}
                            />
                            &nbsp;
                          </div>
                          <a href="/simple.html?product_no=2955&cate_no=258&display_group=1">
                            <div className="overlay">
                              <div className="text">
                                <span
                                  style={{
                                    fontSize: '18px',
                                    color: '#000000',
                                  }}
                                >
                                  2022 FALL
                                </span>
                              </div>
                            </div>
                          </a>
                        </div>
                      </li>
                      <li id="anchorBoxId_2735" data-aos="fade-up" className="container xans-record- aos-init">
                        <div className="thumbnail">
                          <div className="prdImg">
                            <img
                              src="//icebiscuit.com/web/product/medium/202204/fa88b58ea96515abb94fd10356588045.jpg"
                              id="eListPrdImage2735_1"
                              alt="아이스비스킷 - 2022 SUMMER"
                              style={{ width: '100%' }}
                            />
                            &nbsp;
                          </div>
                          <a href="/simple.html?product_no=2735&cate_no=258&display_group=1">
                            <div className="overlay">
                              <div className="text">
                                <span
                                  style={{
                                    fontSize: '18px',
                                    color: '#000000',
                                  }}
                                >
                                  2022 SUMMER
                                </span>
                              </div>
                            </div>
                          </a>
                        </div>
                      </li>
                      <li id="anchorBoxId_2512" data-aos="fade-up" className="container xans-record- aos-init">
                        <div className="thumbnail">
                          <div className="prdImg">
                            <img
                              src="//icebiscuit.com/web/product/medium/202201/e0f88ebf6dffa65f8b51ed446b402013.jpg"
                              id="eListPrdImage2512_1"
                              alt="아이스비스킷 - 2022 SPRING"
                              style={{ width: '100%' }}
                            />
                            &nbsp;
                          </div>
                          <a href="/simple.html?product_no=2512&cate_no=258&display_group=1">
                            <div className="overlay">
                              <div className="text">
                                <span
                                  style={{
                                    fontSize: '18px',
                                    color: '#000000',
                                  }}
                                >
                                  2022 SPRING
                                </span>
                              </div>
                            </div>
                          </a>
                        </div>
                      </li>
                      <li id="anchorBoxId_2382" data-aos="fade-up" className="container xans-record- aos-init">
                        <div className="thumbnail">
                          <div className="prdImg">
                            <img
                              src="//icebiscuit.com/web/product/medium/202110/9df6eaf7c5b7f48868b815cd890c2d15.jpg"
                              id="eListPrdImage2382_1"
                              alt="아이스비스킷 - 2021 WINTER"
                              style={{ width: '100%' }}
                            />
                            &nbsp;
                          </div>
                          <a href="/simple.html?product_no=2382&cate_no=258&display_group=1">
                            <div className="overlay">
                              <div className="text">
                                <span
                                  style={{
                                    fontSize: '18px',
                                    color: '#000000',
                                  }}
                                >
                                  2021 WINTER
                                </span>
                              </div>
                            </div>
                          </a>
                        </div>
                      </li>
                      <li id="anchorBoxId_2245" data-aos="fade-up" className="container xans-record- aos-init">
                        <div className="thumbnail">
                          <div className="prdImg">
                            <img
                              src="//icebiscuit.com/web/product/medium/202108/2fc16a03d15ba544cc778d56c7542b5f.jpg"
                              id="eListPrdImage2245_1"
                              alt="아이스비스킷 - 2021 FALL"
                              style={{ width: '100%' }}
                            />
                            &nbsp;
                          </div>
                          <a href="/simple.html?product_no=2245&cate_no=258&display_group=1">
                            <div className="overlay">
                              <div className="text">
                                <span
                                  style={{
                                    fontSize: '18px',
                                    color: '#000000',
                                  }}
                                >
                                  2021 FALL
                                </span>
                              </div>
                            </div>
                          </a>
                        </div>
                      </li>
                      <li id="anchorBoxId_2087" data-aos="fade-up" className="container xans-record- aos-init">
                        <div className="thumbnail">
                          <div className="prdImg">
                            <img
                              src="//icebiscuit.com/web/product/medium/202104/b6455ab00212e6ab31feb7a1a6999f48.jpg"
                              id="eListPrdImage2087_1"
                              alt="아이스비스킷 - 2021 SUMMER"
                              style={{ width: '100%' }}
                            />
                            &nbsp;
                          </div>
                          <a href="/simple.html?product_no=2087&cate_no=258&display_group=1">
                            <div className="overlay">
                              <div className="text">
                                <span
                                  style={{
                                    fontSize: '18px',
                                    color: '#000000',
                                  }}
                                >
                                  2021 SUMMER
                                </span>
                              </div>
                            </div>
                          </a>
                        </div>
                      </li>
                      <li id="anchorBoxId_1885" data-aos="fade-up" className="container xans-record- aos-init">
                        <div className="thumbnail">
                          <div className="prdImg">
                            <img
                              src="//icebiscuit.com/web/product/medium/202101/5388c6e2e66ce5006e51e5ea9cd0cfc2.jpg"
                              id="eListPrdImage1885_1"
                              alt="아이스비스킷 - 2021 SPRING"
                              style={{ width: '100%' }}
                            />
                            &nbsp;
                          </div>
                          <a href="/simple.html?product_no=1885&cate_no=258&display_group=1">
                            <div className="overlay">
                              <div className="text">
                                <span
                                  style={{
                                    fontSize: '18px',
                                    color: '#000000',
                                  }}
                                >
                                  2021 SPRING
                                </span>
                              </div>
                            </div>
                          </a>
                        </div>
                      </li>
                      <li id="anchorBoxId_1835" data-aos="fade-up" className="container xans-record- aos-init">
                        <div className="thumbnail">
                          <div className="prdImg">
                            <img
                              src="//icebiscuit.com/web/product/medium/202010/622eb9b66a2f9eca0d8575023dec38c5.jpg"
                              id="eListPrdImage1835_1"
                              alt="아이스비스킷 - 2020 WINTER"
                              style={{ width: '100%' }}
                            />
                            &nbsp;
                          </div>
                          <a href="/simple.html?product_no=1835&cate_no=258&display_group=1">
                            <div className="overlay">
                              <div className="text">
                                <span
                                  style={{
                                    fontSize: '18px',
                                    color: '#000000',
                                  }}
                                >
                                  2020 WINTER
                                </span>
                              </div>
                            </div>
                          </a>
                        </div>
                      </li>
                      <li id="anchorBoxId_1669" data-aos="fade-up" className="container xans-record- aos-init">
                        <div className="thumbnail">
                          <div className="prdImg">
                            <img
                              src="//icebiscuit.com/web/product/medium/202008/7cc6196d726688ebd4dcd3386ae55d72.jpg"
                              id="eListPrdImage1669_1"
                              alt="아이스비스킷 - 2020 FALL"
                              style={{ width: '100%' }}
                            />
                            &nbsp;
                          </div>
                          <a href="/simple.html?product_no=1669&cate_no=258&display_group=1">
                            <div className="overlay">
                              <div className="text">
                                <span
                                  style={{
                                    fontSize: '18px',
                                    color: '#000000',
                                  }}
                                >
                                  2020 FALL
                                </span>
                              </div>
                            </div>
                          </a>
                        </div>
                      </li>
                      <li id="anchorBoxId_1494" data-aos="fade-up" className="container xans-record- aos-init">
                        <div className="thumbnail">
                          <div className="prdImg">
                            <img
                              src="//icebiscuit.com/web/product/medium/20200522/a968b491580a12fed36c9fa1d5481766.jpg"
                              id="eListPrdImage1494_1"
                              alt="아이스비스킷 - 2020 SUMMER"
                              style={{ width: '100%' }}
                            />
                            &nbsp;
                          </div>
                          <a href="/simple.html?product_no=1494&cate_no=258&display_group=1">
                            <div className="overlay">
                              <div className="text">
                                <span
                                  style={{
                                    fontSize: '18px',
                                    color: '#000000',
                                  }}
                                >
                                  2020 SUMMER
                                </span>
                              </div>
                            </div>
                          </a>
                        </div>
                      </li>
                      <li id="anchorBoxId_1378" data-aos="fade-up" className="container xans-record- aos-init">
                        <div className="thumbnail">
                          <div className="prdImg">
                            <img
                              src="//icebiscuit.com/web/product/medium/20200219/c0e58c802c32cc280dfe83968961f8e8.jpg"
                              id="eListPrdImage1378_1"
                              alt="아이스비스킷 - 2020 SPRING"
                              style={{ width: '100%' }}
                            />
                            &nbsp;
                          </div>
                          <a href="/simple.html?product_no=1378&cate_no=258&display_group=1">
                            <div className="overlay">
                              <div className="text">
                                <span
                                  style={{
                                    fontSize: '18px',
                                    color: '#000000',
                                  }}
                                >
                                  2020 SPRING
                                </span>
                              </div>
                            </div>
                          </a>
                        </div>
                      </li>
                      <li id="anchorBoxId_1377" data-aos="fade-up" className="container xans-record- aos-init">
                        <div className="thumbnail">
                          <div className="prdImg">
                            <img
                              src="//icebiscuit.com/web/product/medium/20200214/e1df8567f0075c4836a2431ebded889f.jpg"
                              id="eListPrdImage1377_1"
                              alt="아이스비스킷 - 2019 WINTER"
                              style={{ width: '100%' }}
                            />
                            &nbsp;
                          </div>
                          <a href="/simple.html?product_no=1377&cate_no=258&display_group=1">
                            <div className="overlay">
                              <div className="text">
                                <span
                                  style={{
                                    fontSize: '18px',
                                    color: '#000000',
                                  }}
                                >
                                  2019 WINTER
                                </span>
                              </div>
                            </div>
                          </a>
                        </div>
                      </li>
                      <li id="anchorBoxId_1376" data-aos="fade-up" className="container xans-record- aos-init">
                        <div className="thumbnail">
                          <div className="prdImg">
                            <img
                              src="//icebiscuit.com/web/product/medium/20200214/d82be57b506cebae121f67881f4086d0.jpg"
                              id="eListPrdImage1376_1"
                              alt="아이스비스킷 - 2019 FALL"
                              style={{ width: '100%' }}
                            />
                            &nbsp;
                          </div>
                          <a href="/simple.html?product_no=1376&cate_no=258&display_group=1">
                            <div className="overlay">
                              <div className="text">
                                <span
                                  style={{
                                    fontSize: '18px',
                                    color: '#000000',
                                  }}
                                >
                                  2019 FALL
                                </span>
                              </div>
                            </div>
                          </a>
                        </div>
                      </li>
                      <li id="anchorBoxId_1375" data-aos="fade-up" className="container xans-record- aos-init">
                        <div className="thumbnail">
                          <div className="prdImg">
                            <img
                              src="//icebiscuit.com/web/product/medium/20200214/3e5b01a30ec44c50ab42a565dfc488dd.jpg"
                              id="eListPrdImage1375_1"
                              alt="아이스비스킷 - 2019 SUMMER"
                              style={{ width: '100%' }}
                            />
                            &nbsp;
                          </div>
                          <a href="/simple.html?product_no=1375&cate_no=258&display_group=1">
                            <div className="overlay">
                              <div className="text">
                                <span
                                  style={{
                                    fontSize: '18px',
                                    color: '#000000',
                                  }}
                                >
                                  2019 SUMMER
                                </span>
                              </div>
                            </div>
                          </a>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="xans-element- xans-product xans-product-normalpaging ec-base-paginate">
                  <a href="#none" className="first">
                    <img src="//img.echosting.cafe24.com/skin/base/common/btn_page_first.gif" alt="첫 페이지" />
                  </a>
                  <a href="#none">
                    <img src="//img.echosting.cafe24.com/skin/base/common/btn_page_prev.gif" alt="이전 페이지" />
                  </a>
                  <ol>
                    <li className="xans-record-">
                      <a href="?cate_no=258&page=1" className="this">
                        1
                      </a>
                    </li>
                    <li className="xans-record-">
                      <a href="?cate_no=258&page=2" className="other">
                        2
                      </a>
                    </li>
                  </ol>
                  <a href="?cate_no=258&page=2">
                    <img src="//img.echosting.cafe24.com/skin/base/common/btn_page_next.gif" alt="다음 페이지" />
                  </a>
                  <a href="?cate_no=258&page=2" className="last">
                    <img src="//img.echosting.cafe24.com/skin/base/common/btn_page_last.gif" alt="마지막 페이지" />
                  </a>
                </div>
              </div>
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
        src="/exec/front/eclog/main/?cate_no=258&rloc=https%3A//icebiscuit.com/lookbook.html%3Fcate_no%3D258&rref=https%3A//icebiscuit.com/&udim=1920*1080&rserv=elg-db-svcm-089.cafe24.com&cid=CID7b2d67549c2828a23445c0d27adff1fa&role_path=PRODUCT_LIST&stype=e&shop_no=1&lang=ko_KR&ver=2"
        id="log_realtime"
        style={{ display: 'none' }}
      />
    </div>
  );
}
