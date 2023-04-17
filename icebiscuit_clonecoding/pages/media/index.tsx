export default function Media() {
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
                  '\n    #container { width:100%;  margin:0 auto; *zoom:1; }\n    #content { margin:0px auto; padding:50px 0; min-width:1200px; width:100%; } \n#contents {\n    width: 100%;\n\n}\n     .shop_wrap {padding: 0px 0 0 0}\n \n     { margin:0 0 27px; }\n .title { min-height:30px; margin:0px 0 0px; text-align:left}\n .title .banner { margin:0 0 10px; }\n .title h2 {  font-size:30px; font-weight:600; color:#111; text-transform:uppercase; letter-spacing:0.9px; text-transform:uppercase;}\n .title h2, \n .title .likeButton { display:inline-block; vertical-align:middle; }\n .title .likeButton button { margin:0 0 0 10px; padding:0 0 0 20px; height:16px; font-family:verdana; color:#9a9a9a; letter-spacing:-1px; background:none; }\n .title .likeButton.selected button { color:#353535; }\n\n .menuCategory {  font-size:0; line-height:0; text-align:left; margin:25px 0 0 10px  }\n .menuCategory > li { display:block; width:100%; margin:8px 0px; font-size:12px; line-height:14px; vertical-align:top; font-weight:500 }\n .menuCategory > li > a {  font-weight:500; color:#2e2e2e;\n font-size:20px;  letter-spacing:1.0px; }\n .menuCategory > li > a:hover { color:#D9231F;  }\n .menuCategory > li.selected > a { font-weight:600 ; color:#ED3838 }\n .menuCategory > li .count { font-weight:normal; }\n .menuCategory > li > ul { padding:6px 0 0 0; }\n .menuCategory > li > ul > li { margin:8px 0 0 0; line-height:14px; }\n .menuCategory > li > ul > li > a { color:#575a63; }\n .menuCategory > li > ul > li > a:hover,\n .menuCategory > li > ul > li.selected > a { color:#888; }\n .menuCategory > li > ul > li > .button { display:inline-block; position:relative; width:9px; height:14px; margin:1px 0 0 3px; vertical-align:top; }\n\n .subCategory { display:none; position:absolute; left:50%; top:13px; z-index:11; width:300px; margin:0 0 0 -151px; padding:6px 0; border:1px solid #565960; font-size:0; line-height:0; background:#fff url("//img.echosting.cafe24.com/skin/base_ko_KR/product/bg_sub_category_line.gif") repeat-y 150px 0; }\n .subCategory li { display:inline-block; width:130px; margin:8px 0 8px 18px; font-size:12px; line-height:14px; vertical-align:top; }\n .subCategory li a { color:#575a63; }\n .subCategory li a:hover,\n .subCategory li.selected a { color:#008bcc; }\n .menuCategory .button.selected { z-index:11; }\n .menuCategory .button.selected .subCategory { display:block; }\n    \n    .look_name {text-align:center; line-height:20px;   width:260px; padding:15px 20px;  position:absolute; transform: translate(-50%, 0%); -ms-transform: translate(-50%, 0%);left:50%; bottom:0; background:#fff; z-index:99999}\n      .look_name span {font-size:15px !important; font-weight:500 !important; letter-spacing:6.0px;}\n    \n    .listImage { width:87% ; margin:0 auto}\n\n    .ec-base-product .prdList .thumbnail { position:relative; margin:10px 20px; text-align:center; }\n    .ec-base-product .prdList li { margin-bottom:80px}\n    a:hover {opacity:0.8;transition: 0.3s;}\n',
              }}
            />
            <div className="shop_wrap">
              <div className="shop_list">
                <div className="xans-element- xans-product xans-product-headcategory title ">
                  <h2>MEDIA</h2>
                </div>
                <div className="leftCategory" style={{ left: '-50px', width: '170px' }}>
                  <ul className="menuCategory">
                    <li>
                      <a href="/media.html?cate_no=192">VIDEOS</a>
                    </li>
                    <li>
                      <a href="/media.html?cate_no=387">EVENT</a>
                    </li>
                    <li>
                      <a href="/news.html?cate_no=146">MAGAZINE</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="shop_main">
                <div className="xans-element- xans-product xans-product-normalpackage ">
                  <div className="xans-element- xans-product xans-product-listnormal ec-base-product">
                    {/*
            $count = 16
                ※ 상품진열갯수를 설정하는 변수입니다. 설정하지 않을 경우, 최대 200개의 상품이 진열 됩니다.
                ※ 진열된 상품이 많으면, 쇼핑몰에 부하가 발생할 수 있습니다.
            $basket_result = /product/add_basket.html
            $basket_option = /product/basket_option.html
        */}
                    <ul className="prdList grid2">
                      <li id="anchorBoxId_3294" data-aos="fade-up" className="xans-record- aos-init aos-animate">
                        <div className="thumbnail">
                          <div className="prdImg">
                            <a
                              href="/simple.html?product_no=3294&cate_no=192&display_group=1"
                              name="anchorBoxName_3294"
                            >
                              <img
                                src="//icebiscuit.com/web/product/medium/202301/2799e063bf742798316c13eb734815db.jpg"
                                id="eListPrdImage3294_1"
                                alt="아이스비스킷 - CHAPTER 13. SEA ISLAND"
                              />
                            </a>
                          </div>
                        </div>
                        <div className="description">
                          <span className="chk">
                            <input type="checkbox" className="ProductCompareClass xECPCNO_3294 displaynone" />
                          </span>
                          <strong className="name">
                            <a href="/simple.html?product_no=3294&cate_no=192&display_group=1" className>
                              <span className="title displaynone">
                                <span style={{ fontSize: '18px', color: '#000000' }}>상품명</span> :
                              </span>
                              <span style={{ fontSize: '18px', color: '#000000' }}>CHAPTER 13. SEA ISLAND</span>
                            </a>
                          </strong>
                        </div>
                      </li>
                      <li id="anchorBoxId_2956" data-aos="fade-up" className="xans-record- aos-init aos-animate">
                        <div className="thumbnail">
                          <div className="prdImg">
                            <a
                              href="/simple.html?product_no=2956&cate_no=192&display_group=1"
                              name="anchorBoxName_2956"
                            >
                              <img
                                src="//icebiscuit.com/web/product/medium/202209/e30161227d3ba523b13f1d5109c6e046.jpg"
                                id="eListPrdImage2956_1"
                                alt="아이스비스킷 - CHAPTER 12. ICEBISCUIT RUNNING CLUB"
                              />
                            </a>
                          </div>
                        </div>
                        <div className="description">
                          <span className="chk">
                            <input type="checkbox" className="ProductCompareClass xECPCNO_2956 displaynone" />
                          </span>
                          <strong className="name">
                            <a href="/simple.html?product_no=2956&cate_no=192&display_group=1" className>
                              <span className="title displaynone">
                                <span style={{ fontSize: '18px', color: '#000000' }}>상품명</span> :
                              </span>
                              <span style={{ fontSize: '18px', color: '#000000' }}>
                                CHAPTER 12. ICEBISCUIT RUNNING CLUB
                              </span>
                            </a>
                          </strong>
                        </div>
                      </li>
                      <li id="anchorBoxId_2525" data-aos="fade-up" className="xans-record- aos-init aos-animate">
                        <div className="thumbnail">
                          <div className="prdImg">
                            <a
                              href="/simple.html?product_no=2525&cate_no=192&display_group=1"
                              name="anchorBoxName_2525"
                            >
                              <img
                                src="//icebiscuit.com/web/product/medium/202201/0307bf59da7778410c4d53fafc212cf8.jpg"
                                id="eListPrdImage2525_1"
                                alt="아이스비스킷 - CHAPTER 11. CRYSTAL VOYAGER"
                              />
                            </a>
                          </div>
                        </div>
                        <div className="description">
                          <span className="chk">
                            <input type="checkbox" className="ProductCompareClass xECPCNO_2525 displaynone" />
                          </span>
                          <strong className="name">
                            <a href="/simple.html?product_no=2525&cate_no=192&display_group=1" className>
                              <span className="title displaynone">
                                <span style={{ fontSize: '18px', color: '#000000' }}>상품명</span> :
                              </span>
                              <span style={{ fontSize: '18px', color: '#000000' }}>CHAPTER 11. CRYSTAL VOYAGER</span>
                            </a>
                          </strong>
                        </div>
                      </li>
                      <li id="anchorBoxId_2279" data-aos="fade-up" className="xans-record- aos-init aos-animate">
                        <div className="thumbnail">
                          <div className="prdImg">
                            <a
                              href="/simple.html?product_no=2279&cate_no=192&display_group=1"
                              name="anchorBoxName_2279"
                            >
                              <img
                                src="//icebiscuit.com/web/product/medium/202108/f6f527398447362d8196b6ef3c32b176.jpg"
                                id="eListPrdImage2279_1"
                                alt="아이스비스킷 - CHAPTER 10. ICEBISCUIT SCHOOL BUS"
                              />
                            </a>
                          </div>
                        </div>
                        <div className="description">
                          <span className="chk">
                            <input type="checkbox" className="ProductCompareClass xECPCNO_2279 displaynone" />
                          </span>
                          <strong className="name">
                            <a href="/simple.html?product_no=2279&cate_no=192&display_group=1" className>
                              <span className="title displaynone">
                                <span style={{ fontSize: '18px', color: '#000000' }}>상품명</span> :
                              </span>
                              <span style={{ fontSize: '18px', color: '#000000' }}>
                                CHAPTER 10. ICEBISCUIT SCHOOL BUS
                              </span>
                            </a>
                          </strong>
                        </div>
                      </li>
                      <li id="anchorBoxId_1883" data-aos="fade-up" className="xans-record- aos-init">
                        <div className="thumbnail">
                          <div className="prdImg">
                            <a
                              href="/simple.html?product_no=1883&cate_no=192&display_group=1"
                              name="anchorBoxName_1883"
                            >
                              <img
                                src="//icebiscuit.com/web/product/medium/202101/920ae1fe4264ec37fc78eb684d7f2f13.jpg"
                                id="eListPrdImage1883_1"
                                alt="아이스비스킷 - CHAPTER 9. NO.12 SKATER"
                              />
                            </a>
                          </div>
                        </div>
                        <div className="description">
                          <span className="chk">
                            <input type="checkbox" className="ProductCompareClass xECPCNO_1883 displaynone" />
                          </span>
                          <strong className="name">
                            <a href="/simple.html?product_no=1883&cate_no=192&display_group=1" className>
                              <span className="title displaynone">
                                <span style={{ fontSize: '18px', color: '#000000' }}>상품명</span> :
                              </span>
                              <span style={{ fontSize: '18px', color: '#000000' }}>CHAPTER 9. NO.12 SKATER</span>
                            </a>
                          </strong>
                        </div>
                      </li>
                      <li id="anchorBoxId_1670" data-aos="fade-up" className="xans-record- aos-init">
                        <div className="thumbnail">
                          <div className="prdImg">
                            <a
                              href="/simple.html?product_no=1670&cate_no=192&display_group=1"
                              name="anchorBoxName_1670"
                            >
                              <img
                                src="//icebiscuit.com/web/product/medium/202008/5148eed261d77180932e0b9207e2f64d.jpg"
                                id="eListPrdImage1670_1"
                                alt="아이스비스킷 - chapter 8. Ski Club"
                              />
                            </a>
                          </div>
                        </div>
                        <div className="description">
                          <span className="chk">
                            <input type="checkbox" className="ProductCompareClass xECPCNO_1670 displaynone" />
                          </span>
                          <strong className="name">
                            <a href="/simple.html?product_no=1670&cate_no=192&display_group=1" className>
                              <span className="title displaynone">
                                <span style={{ fontSize: '18px', color: '#000000' }}>상품명</span> :
                              </span>
                              <span style={{ fontSize: '18px', color: '#000000' }}>chapter 8. Ski Club</span>
                            </a>
                          </strong>
                        </div>
                      </li>
                      <li id="anchorBoxId_1357" data-aos="fade-up" className="xans-record- aos-init">
                        <div className="thumbnail">
                          <div className="prdImg">
                            <a
                              href="/simple.html?product_no=1357&cate_no=192&display_group=1"
                              name="anchorBoxName_1357"
                            >
                              <img
                                src="//icebiscuit.com/web/product/medium/20200130/942a89be645a9034f645258994af409c.jpg"
                                id="eListPrdImage1357_1"
                                alt="아이스비스킷 - chapter 7. Tennis Club"
                              />
                            </a>
                          </div>
                        </div>
                        <div className="description">
                          <span className="chk">
                            <input type="checkbox" className="ProductCompareClass xECPCNO_1357 displaynone" />
                          </span>
                          <strong className="name">
                            <a href="/simple.html?product_no=1357&cate_no=192&display_group=1" className>
                              <span className="title displaynone">
                                <span style={{ fontSize: '18px', color: '#000000' }}>상품명</span> :
                              </span>
                              <span style={{ fontSize: '18px', color: '#000000' }}>chapter 7. Tennis Club</span>
                            </a>
                          </strong>
                        </div>
                      </li>
                      <li id="anchorBoxId_1356" data-aos="fade-up" className="xans-record- aos-init">
                        <div className="thumbnail">
                          <div className="prdImg">
                            <a
                              href="/simple.html?product_no=1356&cate_no=192&display_group=1"
                              name="anchorBoxName_1356"
                            >
                              <img
                                src="//icebiscuit.com/web/product/medium/20200130/398ec2c55c9d5599c6a2b544b6b16ab2.jpg"
                                id="eListPrdImage1356_1"
                                alt="아이스비스킷 - chapter 6. QUIZ SHOW"
                              />
                            </a>
                          </div>
                        </div>
                        <div className="description">
                          <span className="chk">
                            <input type="checkbox" className="ProductCompareClass xECPCNO_1356 displaynone" />
                          </span>
                          <strong className="name">
                            <a href="/simple.html?product_no=1356&cate_no=192&display_group=1" className>
                              <span className="title displaynone">
                                <span style={{ fontSize: '18px', color: '#000000' }}>상품명</span> :
                              </span>
                              <span style={{ fontSize: '18px', color: '#000000' }}>chapter 6. QUIZ SHOW</span>
                            </a>
                          </strong>
                        </div>
                      </li>
                      <li id="anchorBoxId_1355" data-aos="fade-up" className="xans-record- aos-init">
                        <div className="thumbnail">
                          <div className="prdImg">
                            <a
                              href="/simple.html?product_no=1355&cate_no=192&display_group=1"
                              name="anchorBoxName_1355"
                            >
                              <img
                                src="//icebiscuit.com/web/product/medium/20200130/daa027e0006b418a06e2da3ed1f6435c.jpg"
                                id="eListPrdImage1355_1"
                                alt="아이스비스킷 - chapter 5. Turn Up!"
                              />
                            </a>
                          </div>
                        </div>
                        <div className="description">
                          <span className="chk">
                            <input type="checkbox" className="ProductCompareClass xECPCNO_1355 displaynone" />
                          </span>
                          <strong className="name">
                            <a href="/simple.html?product_no=1355&cate_no=192&display_group=1" className>
                              <span className="title displaynone">
                                <span style={{ fontSize: '18px', color: '#000000' }}>상품명</span> :
                              </span>
                              <span style={{ fontSize: '18px', color: '#000000' }}>chapter 5. Turn Up!</span>
                            </a>
                          </strong>
                        </div>
                      </li>
                      <li id="anchorBoxId_1354" data-aos="fade-up" className="xans-record- aos-init">
                        <div className="thumbnail">
                          <div className="prdImg">
                            <a
                              href="/simple.html?product_no=1354&cate_no=192&display_group=1"
                              name="anchorBoxName_1354"
                            >
                              <img
                                src="//icebiscuit.com/web/product/medium/20200130/91aef5360a1a9ffbf483842eb1222b29.jpg"
                                id="eListPrdImage1354_1"
                                alt="아이스비스킷 - chapter 4. Interest 1992"
                              />
                            </a>
                          </div>
                        </div>
                        <div className="description">
                          <span className="chk">
                            <input type="checkbox" className="ProductCompareClass xECPCNO_1354 displaynone" />
                          </span>
                          <strong className="name">
                            <a href="/simple.html?product_no=1354&cate_no=192&display_group=1" className>
                              <span className="title displaynone">
                                <span style={{ fontSize: '18px', color: '#000000' }}>상품명</span> :
                              </span>
                              <span style={{ fontSize: '18px', color: '#000000' }}>chapter 4. Interest 1992</span>
                            </a>
                          </strong>
                        </div>
                      </li>
                      <li id="anchorBoxId_1353" data-aos="fade-up" className="xans-record- aos-init">
                        <div className="thumbnail">
                          <div className="prdImg">
                            <a
                              href="/simple.html?product_no=1353&cate_no=192&display_group=1"
                              name="anchorBoxName_1353"
                            >
                              <img
                                src="//icebiscuit.com/web/product/medium/20200130/b6ee7ad92b0666e2df2cedeeaed0aab3.jpg"
                                id="eListPrdImage1353_1"
                                alt="아이스비스킷 - chapter 3. Coney island - Surf Rescue"
                              />
                            </a>
                          </div>
                        </div>
                        <div className="description">
                          <span className="chk">
                            <input type="checkbox" className="ProductCompareClass xECPCNO_1353 displaynone" />
                          </span>
                          <strong className="name">
                            <a href="/simple.html?product_no=1353&cate_no=192&display_group=1" className>
                              <span className="title displaynone">
                                <span style={{ fontSize: '18px', color: '#000000' }}>상품명</span> :
                              </span>
                              <span style={{ fontSize: '18px', color: '#000000' }}>
                                chapter 3. Coney island - Surf Rescue
                              </span>
                            </a>
                          </strong>
                        </div>
                      </li>
                      <li id="anchorBoxId_1352" data-aos="fade-up" className="xans-record- aos-init">
                        <div className="thumbnail">
                          <div className="prdImg">
                            <a
                              href="/simple.html?product_no=1352&cate_no=192&display_group=1"
                              name="anchorBoxName_1352"
                            >
                              <img
                                src="//icebiscuit.com/web/product/medium/20200130/705353cb8a4d02c5b801b4821fac9688.png"
                                id="eListPrdImage1352_1"
                                alt="아이스비스킷 - chapter 2. Neighborhood - Brooklyn New York"
                              />
                            </a>
                          </div>
                        </div>
                        <div className="description">
                          <span className="chk">
                            <input type="checkbox" className="ProductCompareClass xECPCNO_1352 displaynone" />
                          </span>
                          <strong className="name">
                            <a href="/simple.html?product_no=1352&cate_no=192&display_group=1" className>
                              <span className="title displaynone">
                                <span style={{ fontSize: '18px', color: '#000000' }}>상품명</span> :
                              </span>
                              <span style={{ fontSize: '18px', color: '#000000' }}>
                                chapter 2. Neighborhood - Brooklyn New York
                              </span>
                            </a>
                          </strong>
                        </div>
                      </li>
                      <li id="anchorBoxId_1351" data-aos="fade-up" className="xans-record- aos-init">
                        <div className="thumbnail">
                          <div className="prdImg">
                            <a
                              href="/simple.html?product_no=1351&cate_no=192&display_group=1"
                              name="anchorBoxName_1351"
                            >
                              <img
                                src="//icebiscuit.com/web/product/medium/20200130/b574414b3512f3ce8252344783769463.jpg"
                                id="eListPrdImage1351_1"
                                alt="아이스비스킷 - chapter 1. icecreamshop in brooklyn"
                              />
                            </a>
                          </div>
                        </div>
                        <div className="description">
                          <span className="chk">
                            <input type="checkbox" className="ProductCompareClass xECPCNO_1351 displaynone" />
                          </span>
                          <strong className="name">
                            <a href="/simple.html?product_no=1351&cate_no=192&display_group=1" className>
                              <span className="title displaynone">
                                <span style={{ fontSize: '18px', color: '#000000' }}>상품명</span> :
                              </span>
                              <span style={{ fontSize: '18px', color: '#000000' }}>
                                chapter 1. icecreamshop in brooklyn
                              </span>
                            </a>
                          </strong>
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
                      <a href="?cate_no=192&page=1" className="this">
                        1
                      </a>
                    </li>
                  </ol>
                  <a href="#none">
                    <img src="//img.echosting.cafe24.com/skin/base/common/btn_page_next.gif" alt="다음 페이지" />
                  </a>
                  <a href="#none" className="last">
                    <img src="//img.echosting.cafe24.com/skin/base/common/btn_page_last.gif" alt="마지막 페이지" />
                  </a>
                </div>
              </div>
            </div>
            <style
              dangerouslySetInnerHTML={{
                __html:
                  '\n.ec-base-product .prdList .description .name span { letter-spacing:0.3px; font-size: 18px !important;}\n',
              }}
            />
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
        src="/exec/front/eclog/main/?cate_no=192&rloc=https%3A//icebiscuit.com/media.html%3Fcate_no%3D192&rref=https%3A//icebiscuit.com/celebrity.html%3Fcate_no%3D150&udim=1920*1080&rserv=elg-db-svcm-089.cafe24.com&cid=CID7b2d67549c2828a23445c0d27adff1fa&role_path=ETC&stype=e&shop_no=1&lang=ko_KR&ver=2"
        id="log_realtime"
        style={{ display: 'none' }}
      />
    </div>
  );
}
