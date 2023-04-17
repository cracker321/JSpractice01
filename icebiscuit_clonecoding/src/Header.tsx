import Link from 'next/link';

export default function Header() {
  return (
    <div id="header" className="cboth">
      <div className="header_sec01 cboth" id="comment_top">
        <div className="topmenu_area">
          {/* 상단 메뉴 수정하는곳 */}
          <div className="category_menu">
            <a href="/login" className="xans-element- xans-layout xans-layout-statelogoff ">
              LOGIN
            </a>
            <a href="/join" className="xans-element- xans-layout xans-layout-statelogoff ">
              JOIN
            </a>
            <a href="/membership.html">MEMBERSHIP</a>
            <a href="/faq.html?board_no=5">Q&amp;A</a>
          </div>
        </div>
        <div className="top_logo">
          <div
            style={{ marginTop: '18px' }}
            className="xans-element- xans-custom xans-custom-moduleedit-1 xans-custom-moduleedit xans-custom-1 "
          >
            <a href="/">
              <img src="https://icebiscuit.com/web/upload/img/logo.png" />
            </a>
          </div>
        </div>
        <div className="top_search_area fright">
          <ul>
            <li>
              <a href="https://www.instagram.com/icebiscuit_bk/" target="_blank">
                <i className="fa fa-instagram" style={{ fontSize: '29px', marginTop: '23px' }} aria-hidden="true" />
              </a>
            </li>
            <li className="icon_menber">
              <a href="/login/login.html" className="xans-element- xans-layout xans-layout-statelogoff ">
                <img src="https://icebiscuit.com/images/top_mypage.png" />
              </a>
              <ul>
                {/* 상단 마이페이지 레이어 수정하는곳 */}
                <li>
                  <a href="/login/login.html" className="xans-element- xans-layout xans-layout-statelogoff ">
                    로그인
                  </a>
                </li>
                <li>
                  <a href="/login" className="xans-element- xans-layout xans-layout-statelogoff ">
                    회원가입
                  </a>
                </li>
                <li />
                <li />
                <li>
                  <a href="/myshop/index.html">마이페이지</a>
                </li>
                <li>
                  <a href="/myshop/order/list.html">주문조회</a>
                </li>
                <li>
                  <a href="/myshop/wish_list.html">
                    위시리스트{' '}
                    <i className="material-icons" style={{ color: '#e53d2f', fontSize: '12px !important' }}>
                      
                    </i>
                  </a>
                </li>
              </ul>
            </li>
            <li className="basket">
              <a href="/order/basket.html">
                <span className="xans-element- xans-layout xans-layout-orderbasketcount ">0</span>
                <img
                  src="	https://icebiscuit.com/images/top_cart.png
"
                />
                &nbsp;
              </a>
            </li>
            <li id="icon_search">
              <a href="src/components/Header#none">
                <img src="https://icebiscuit.com/images/top_search.png" />
              </a>
            </li>
          </ul>
        </div>
        <style
          dangerouslySetInnerHTML={{
            __html:
              '\n                  .top_subbox {width:1000px; margin:125px auto 0;position:relative;}\n                  .top_subbox ul li {display:block;}\n                  .top_subbox ul li\n                  a {display:block;text-transform:uppercase;letter-spacing:0.4px; padding:7px 0; color:#111; font-size:16px; font-weight:400; word-spacing:-1px; text-decoration:none;}\n                  .top_subbox ul li a span {font - size:14px; font-weight:400}\n                  .insta_icon {position:absolute; right:0; top:10px;}\n                  .insta_icon img {width:50px}\n              ',
          }}
        />
        <div className="top_menu">
          <a href="/product">SHOP</a>
          <a href="/lookbook">LOOKBOOK</a>
          <a href="/event">EVENT</a>
          <a href="/celeb">CELEB</a>
          <a href="/media">MEDIA</a>
          <a href="/store">STORE</a>
          <a href="/about">ABOUT</a>
        </div>
        <div className="top_sub">
          <div className="top_subbox">
            <style
              dangerouslySetInnerHTML={{
                __html:
                  '\n\n                          .PushMenu {width:100%}\n\n                          .PushMenu ul.CateAll_1 li.CateAll_1_Sub,\n                          .PushMenu ul.GroupAll,\n                          .PushMenu ul.BannerAll {\n                          display:inline;text-align:center;\n                          position:relative;\n                          font-size:0;\n                          line-height:0;\n                          vertical-align:top;\n                      }\n                          .PushMenu ul.CateAll_1 li.CateAll_1_Sub,\n                          .PushMenu ul.GroupAll, .PushMenu ul.BannerAll {display:inline-block;\n                          display:inline-block;\n                          width:14%; text-align:center;\n\n                          position:relative;\n                          background:#ffffff;\n\n                          border:0;\n                          padding:0;\n                          overflow:hidden;\n\n                      }\n\n\n                          .allCategoryTitle {font - size:17px; padding:20px 0 15px 0px; font-weight:400; word-spacing:-1px; color:#333; letter-spacing:0.8px;}\n                          .PushMenu a {font - size:12px;letter-spacing:0.8px; text-align:left}\n                          .PushMenu li {padding:5px 0;}\n                          .top_subbox ul li.allBar, .top_subbox ul li.allBar\n                          a {line - height:20px; display:block; text-align:left;width:100%; font-size:18px !important; color:#111 !important;\n                          padding:5px 0 7px 0 !important; line-height:13px !important; font-weight:600 !important; letter-spacing:0.8px !important;;margin:0 0 2px 0 !important;}\n\n                          .PushMenu\n                          h1 {padding:0 0 7px 0; border-bottom:2px solid #555; font-size:20px; color:#000; font-weight:600; letter-spacing:0.8px;margin:0 0 10px 0}\n                          .PushMenu a:hover {color:#e53d2f;}\n\n                          .CateAll_1_Sub a\n                          span {font - size:18px !important; font-weight:600 !important; letter-spacing:0.8px !important;}\n                          .CateAll_1_Sub >\n                          a {font - size:18px !important; font-weight:600 !important; letter-spacing:0.8px !important; margin:4px 0 12px 0 !important;}\n                          .CateAll_2_Sub\n                          a {font - size:14.5px !important;letter-spacing:0.8px; text-align:left ; line-height:16px;padding:0px 0 !important}\n                      ',
              }}
            />
            <link
              rel="stylesheet"
              href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
            />
            <div className="PushMenu">
              <h1>
                SHOP CATEGORY <i className="fa fa-tag" style={{ fontSize: '18px' }} aria-hidden="true" />
              </h1>
              {/* 	<ul class="GroupAll"  style="width:17.5%">
          <li  class="allBar" style="padding-bottom:40px !important"><a href="/product/list.html?cate_no=153">BEST SELLERS</a></li>
          <li class="allBar"><a href="/product/list.html?cate_no=152">NEW ARRIVALS</a></li>
          <li><a href="/product/list.html?cate_no=153">2020 SPRING <span>컬렉션</span></a></li>

          </ul>

          <ul class="GroupAll" style="width:19%">
          <li class="allBar"><a href="/product/list.html?cate_no=155">READY T0 WEAR</a></li>
          <li><a href="/product/list.html?cate_no=156"><span>티셔츠&amp;셔츠</span></a></li>

          <li><a href="/product/list.html?cate_no=157"><span>스웨터&amp;가디건&amp;조끼</span></a></li>

          <li><a href="/product/list.html?cate_no=159"><span>자켓&amp;코트</span></a></li>

          <li><a href="/product/list.html?cate_no=160"><span>팬츠</span></a></li>
          <li><a href="/product/list.html?cate_no=158"><span>점프수트</span></a></li>
          <li><a href="/product/list.html?cate_no=161"><span>드레스&amp;스커트</span></a></li>
          <li><a href="/product/list.html?cate_no=162"><span>패밀리 웨어</span></a></li>

          </ul>

          <ul class="GroupAll"  style="width:15%">
          <li class="allBar"><a href="/product/list.html?cate_no=163">BAGS</a></li>
          <li><a href="/product/list.html?cate_no=164"><span>백팩</span></a></li>
          <li><a href="/product/list.html?cate_no=165"><span>토트백</span></a></li>
          <li><a href="/product/list.html?cate_no=166"><span>숄더백</span></a></li>
          <li><a href="/product/list.html?cate_no=167"><span>파우치&amp;월렛</span></a></li>


          <li><a href="/product/list.html?cate_no=168"><span>기타</span></a></li>
          </ul>
          <ul class="GroupAll">
          <li class="allBar"><a href="/product/list.html?cate_no=169">ACCESSORIES</a></li>
          <li><a href="/product/list.html?cate_no=170"><span>모자</span></a></li>
          <li><a href="/product/list.html?cate_no=171"><span>양말</span></a></li>
          <li><a href="/product/list.html?cate_no=172"><span>스카프&amp;머플러</span></a></li>
          <li><a href="/product/list.html?cate_no=173"><span>헤어악세사리</span></a></li>

          <li><a href="/product/list.html?cate_no=174"><span>기타</span></a></li>
          </ul>
          <ul class="GroupAll"  style="width:15%">
          <li class="allBar"><a href="/product/list.html?cate_no=169">OTHERS</a></li>

          <li><a href="/product/list.html?cate_no=168"><span>선물박스&amp;쇼핑백</span></a></li>
          <li><a href="/product/list.html?cate_no=162"><span>스윔 웨어</span></a></li>


          </ul>
          <ul class="GroupAll"  style="width:15%">
          <li class="allBar"><a href="/product/list.html?cate_no=169">ON SALE</a></li>
          <li><a href="/product/list.html?cate_no=170"><span>세일 전상품</span></a></li>
          <li><a href="/product/list.html?cate_no=171"><span>시즌오프세일</span></a></li>
          <li><a href="/product/list.html?cate_no=172">So So Event</a></li>

          </ul>
          */}
              {/*ul class="GroupAll"  style="width:17.5%;height:100px;">
          <li  class="allBar" style="padding-bottom:40px !important"><a href="/product/list.html?cate_no=153">BEST SELLERS</a></li>


          </ul*/}
              <ul id="CateAll_1" className="xans-element- xans-layout xans-layout-category CateAll_1">
                <li style={{ width: '17% !important' }} className="xans-record- CateAll_1_Sub">
                  <a href="/product/list.html?cate_no=223">NEW&amp;BEST</a>
                  <ul className="CateAll_2">
                    <li className="CateAll_2_Sub">
                      <a href="/product">WEEKLY 신상품</a>
                    </li>
                    <li className="CateAll_2_Sub">
                      <a href="/product/list_management.html?cate_no=154">베스트셀러 20</a>
                    </li>
                    <li className="CateAll_2_Sub">
                      <a href="/product/list.html?cate_no=443">SPRING 컬렉션</a>
                    </li>
                    <li className="CateAll_2_Sub">
                      <a href="/product/list.html?cate_no=451">EASTPAK</a>
                    </li>
                  </ul>
                </li>
                <li style={{ width: '17% !important' }} className="xans-record- CateAll_1_Sub">
                  <a href="/product/list.html?cate_no=155">READY TO WEAR</a>
                  <ul className="CateAll_2">
                    <li className="CateAll_2_Sub">
                      <a href="/product/list.html?cate_no=158">아우터</a>
                    </li>
                    <li className="CateAll_2_Sub">
                      <a href="/product/list.html?cate_no=156">상의</a>
                    </li>
                    <li className="CateAll_2_Sub">
                      <a href="/product/list.html?cate_no=161">팬츠</a>
                    </li>
                    <li className="CateAll_2_Sub">
                      <a href="/product/list.html?cate_no=222">원피스&amp;스커트</a>
                    </li>
                    <li className="CateAll_2_Sub">
                      <a href="/product/list.html?cate_no=221">점프수트&amp;오버롤</a>
                    </li>
                    <li className="CateAll_2_Sub">
                      <a href="/product/list.html?cate_no=301">라운지웨어</a>
                    </li>
                    <li className="CateAll_2_Sub">
                      <a href="/product/list.html?cate_no=162">SIZE UPS!</a>
                    </li>
                    <li className="CateAll_2_Sub">
                      <a href="/product/list.html?cate_no=257">베이직</a>
                    </li>
                  </ul>
                </li>
                <li style={{ width: '16% !important' }} className="xans-record- CateAll_1_Sub">
                  <a href="/product/list.html?cate_no=163">BAGS</a>
                  <ul className="CateAll_2">
                    <li className="CateAll_2_Sub">
                      <a href="/product/list.html?cate_no=164">백팩</a>
                    </li>
                    <li className="CateAll_2_Sub">
                      <a href="/product/list.html?cate_no=165">토트백</a>
                    </li>
                    <li className="CateAll_2_Sub">
                      <a href="/product/list.html?cate_no=194">숄더백</a>
                    </li>
                    <li className="CateAll_2_Sub">
                      <a href="/product/list.html?cate_no=226">크로스백</a>
                    </li>
                    <li className="CateAll_2_Sub">
                      <a href="/product/list.html?cate_no=168">웨이스트백</a>
                    </li>
                    <li className="CateAll_2_Sub">
                      <a href="/product/list.html?cate_no=167">파우치&amp;월렛</a>
                    </li>
                    <li className="CateAll_2_Sub">
                      <a href="/product/list.html?cate_no=437">ON-GOING</a>
                    </li>
                  </ul>
                </li>
                <li style={{ width: '16% !important' }} className="xans-record- CateAll_1_Sub">
                  <a href="/product/list.html?cate_no=169">ACCESSORIES</a>
                  <ul className="CateAll_2">
                    <li className="CateAll_2_Sub">
                      <a href="/product/list.html?cate_no=170">모자</a>
                    </li>
                    <li className="CateAll_2_Sub">
                      <a href="/product/list.html?cate_no=171">양말</a>
                    </li>
                    <li className="CateAll_2_Sub">
                      <a href="/product/list.html?cate_no=172">스카프&amp;머플러</a>
                    </li>
                    <li className="CateAll_2_Sub">
                      <a href="/product/list.html?cate_no=174">기타</a>
                    </li>
                    <li className="CateAll_2_Sub">
                      <a href="/product/list.html?cate_no=217">기프트박스&amp;쇼핑백</a>
                    </li>
                  </ul>
                </li>
                <li style={{ width: '18% !important' }} className="xans-record- CateAll_1_Sub">
                  <a href="/product/list.html?cate_no=175">ON SALE</a>
                </li>
                <li className="xans-record- CateAll_1_Sub">
                  <a href="/product/list.html?cate_no=260">OUTLET</a>
                  <ul className="CateAll_2">
                    <li className="CateAll_2_Sub">
                      <a href="/product/list.html?cate_no=336">겨울 시즌</a>
                    </li>
                    <li className="CateAll_2_Sub">
                      <a href="/product/list.html?cate_no=361">봄/가을 시즌</a>
                    </li>
                    <li className="CateAll_2_Sub">
                      <a href="/product/list.html?cate_no=319">액세서리</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="top_simbol">
              <img src="https://icebiscuit.com/web/upload/img/simbol_02.png" style={{ width: '170px' }} />
            </div>
          </div>
        </div>
      </div>
      {/* //header_sec01 */}
      <div id="quick_search"></div>
      {/* //quick_search */}
    </div>
  );
}
