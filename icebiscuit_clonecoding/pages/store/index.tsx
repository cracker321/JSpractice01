export default function Store() {
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
        <a href="#none" onclick="quick_view.style.display='block';" title="최근본내역">
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
            onclick="$('#quick_view').hide();"
            style={{ float: 'right', position: 'absolute', right: '10px', top: '10px' }}
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
          <button onclick="myFunction()" className="top_dropbtn">
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
                  '\n    #container { width:100%;  margin:0 auto; *zoom:1; }\n    #contents { margin:0px auto;  max-width:1600px; min-width:1000px; width:100%; } \n\n    .global li {display:none }\n    .global { padding:0 !important}\n',
              }}
            />
            <div className="shop_wrap stories">
              <div className="shop_list">
                <style
                  dangerouslySetInnerHTML={{
                    __html:
                      '\n      .store_title {font-size:30px; font-weight:600; letter-spacing:1.0px; padding:0 0 15px 0;}\n      .left_title p a:hover , .global li:hover  {  color:#ED3838}\n      .left_title {padding:20px 0 40px 0; width:100% !important; min-width:175px;  border-top:1px solid #ececec; }\n      .left_title li { padding:0 0 10px 0 !important; }\n        .left_title li a { font-size:15px }\n         .left_title li a:hover { color:#D9231F;}\n      .arr { float:right; margin:15px 5px 0 0}\n      .store_bbs { border:1px solid #555; padding:6px 20px; }\n      .store_bbs:hover { border:1px solid #e53d2f; background: #e53d2f; color: #fff }\n      .global li { font-weight:500}\n      \n      ',
                  }}
                />
                <p className="store_title">
                  STORE <img src="/web/upload/img/arraw.png" alt="" className="arr" />
                </p>
                <ul className="left_title">
                  <li>
                    <a href="/store.html?board_no=101">전국</a>
                  </li>
                  <li>
                    <a href="/store.html?board_no=101&category_no=1">서울</a>
                  </li>
                  <li>
                    <a href="/store.html?board_no=101&category_no=2">경기</a>
                  </li>
                  <li>
                    <a href="/store.html?board_no=101&category_no=8">인천</a>
                  </li>
                  <li>
                    <a href="/store.html?board_no=101&category_no=3">충청</a>
                  </li>
                  <li>
                    <a href="/store.html?board_no=101&category_no=4">경상</a>
                  </li>
                  <li>
                    <a href="/store.html?board_no=101&category_no=5">전라</a>
                  </li>
                  <li>
                    <a href="/store.html?board_no=101&category_no=6">강원</a>
                  </li>
                  <li>
                    <a href="/store.html?board_no=101&category_no=7">제주</a>
                  </li>
                </ul>
                <a href="/board/free/list.html?board_no=1" className="store_bbs">
                  대리점 개설 문의
                </a>
              </div>
              <div className="shop_main">
                <div style={{ width: '1000px', margin: '0 auto', position: 'relative' }}>
                  <div className="xans-element- xans-board xans-board-listpackage-4 xans-board-listpackage xans-board-4 ">
                    <form
                      id="boardSearchForm"
                      name
                      action="/store.html"
                      method="get"
                      target="_top"
                      encType="multipart/form-data"
                    >
                      <input id="board_no" name="board_no" defaultValue={101} type="hidden" />
                      <input id="page" name="page" defaultValue={1} type="hidden" />
                      <input id="board_sort" name="board_sort" defaultValue type="hidden" />
                      <div
                        style={{ float: 'right', position: 'absolute', top: '-60px', right: '-28px' }}
                        className="xans-element- xans-board xans-board-search-4 xans-board-search xans-board-4 "
                      >
                        <fieldset className="boardSearch">
                          <legend>게시물 검색</legend>
                          <p className="category displaynone" />
                          <p>
                            매장검색
                            <select
                              id="search_key"
                              name="search_key"
                              fw-filter
                              fw-label
                              fw-msg
                              style={{ width: '0px', height: '0px', visibility: 'hidden' }}
                            >
                              <option value="subject">제목</option>
                            </select>
                            <input
                              id="search"
                              name="search"
                              fw-filter
                              fw-label
                              fw-msg
                              className="inputTypeText"
                              placeholder="매장명"
                              defaultValue
                              type="text"
                            />
                            &nbsp;
                            <a href="#none" className="store_bt" onclick="BOARD.form_submit('boardSearchForm');">
                              찾기
                            </a>
                            <select
                              id="search_date"
                              name="search_date"
                              fw-filter
                              fw-label
                              fw-msg
                              style={{ width: '0px', height: '0px', visibility: 'hidden' }}
                            >
                              <option value="all">전체</option>
                            </select>
                          </p>
                        </fieldset>
                      </div>
                    </form>
                    <div className="ec-base-table typeList gBorder">
                      <table border={1} summary>
                        <caption>상품 게시판 목록</caption>
                        <colgroup className="xans-element- xans-board xans-board-listheader-4 xans-board-listheader xans-board-4 ">
                          <col style={{ width: '60px' }} />
                          <col style={{ width: 'auto' }} />
                          <col style={{ width: '130px' }} />
                          <col style={{ width: '60px' }} />
                        </colgroup>
                        <tbody className="xans-element- xans-board xans-board-list-4 xans-board-list xans-board-4 center">
                          {/*
                $product_name_cut = 30
                $login_page_url = /login/login.html
                $deny_access_url = /index.html
            */}
                          <tr style={{ backgroundColor: '#FFFFFF', color: '#555555' }} className="xans-record-">
                            <td className style={{ textAlign: 'center' }}>
                              전라
                            </td>
                            <td className="subject left txtBreak">
                              <span className="sname">순천점</span>전라남도 순천시 조례1길
                              10-21(조례동)&nbsp;&nbsp;&nbsp;{' '}
                            </td>
                            <td style={{ fontSize: '15px', fontWeight: 500 }}>061-725-5254</td>
                            <td>
                              <a
                                href="#none"
                                onclick="BOARD.viewTarget('17333','101',this);"
                                style={{ fontSize: '16px', textDecoration: 'underline' }}
                              >
                                MAP
                              </a>
                            </td>
                          </tr>
                          <tr style={{ backgroundColor: '#FFFFFF', color: '#555555' }} className="xans-record-">
                            <td className style={{ textAlign: 'center' }}>
                              전라
                            </td>
                            <td className="subject left txtBreak">
                              <span className="sname">롯데백화점 전주점</span>전라북도 전주시 완산구 온고을로 2
                              5F&nbsp;&nbsp;&nbsp;{' '}
                            </td>
                            <td style={{ fontSize: '15px', fontWeight: 500 }}>063-289-3587</td>
                            <td>
                              <a
                                href="#none"
                                onclick="BOARD.viewTarget('14217','101',this);"
                                style={{ fontSize: '16px', textDecoration: 'underline' }}
                              >
                                MAP
                              </a>
                            </td>
                          </tr>
                          <tr style={{ backgroundColor: '#FFFFFF', color: '#555555' }} className="xans-record-">
                            <td className style={{ textAlign: 'center' }}>
                              경기
                            </td>
                            <td className="subject left txtBreak">
                              <span className="sname">현대백화점 판교점</span>경기도 성남시 분당구 판교역로146번길 20
                              현대백화점 판교점 5층 캐리마켓&nbsp;&nbsp;&nbsp;{' '}
                            </td>
                            <td style={{ fontSize: '15px', fontWeight: 500 }}>031-5170-1542</td>
                            <td>
                              <a
                                href="#none"
                                onclick="BOARD.viewTarget('14079','101',this);"
                                style={{ fontSize: '16px', textDecoration: 'underline' }}
                              >
                                MAP
                              </a>
                            </td>
                          </tr>
                          <tr style={{ backgroundColor: '#FFFFFF', color: '#555555' }} className="xans-record-">
                            <td className style={{ textAlign: 'center' }}>
                              경상
                            </td>
                            <td className="subject left txtBreak">
                              <span className="sname">구미인동점</span>경상북도 구미시 황상동
                              303-5번지&nbsp;&nbsp;&nbsp;{' '}
                            </td>
                            <td style={{ fontSize: '15px', fontWeight: 500 }}>054-475-2666</td>
                            <td>
                              <a
                                href="#none"
                                onclick="BOARD.viewTarget('13703','101',this);"
                                style={{ fontSize: '16px', textDecoration: 'underline' }}
                              >
                                MAP
                              </a>
                            </td>
                          </tr>
                          <tr style={{ backgroundColor: '#FFFFFF', color: '#555555' }} className="xans-record-">
                            <td className style={{ textAlign: 'center' }}>
                              경상
                            </td>
                            <td className="subject left txtBreak">
                              <span className="sname">구미금오산점</span>경상북도 구미시 금오산로22길
                              29&nbsp;&nbsp;&nbsp;{' '}
                            </td>
                            <td style={{ fontSize: '15px', fontWeight: 500 }}>054-455-9622</td>
                            <td>
                              <a
                                href="#none"
                                onclick="BOARD.viewTarget('13332','101',this);"
                                style={{ fontSize: '16px', textDecoration: 'underline' }}
                              >
                                MAP
                              </a>
                            </td>
                          </tr>
                          <tr style={{ backgroundColor: '#FFFFFF', color: '#555555' }} className="xans-record-">
                            <td className style={{ textAlign: 'center' }}>
                              경상
                            </td>
                            <td className="subject left txtBreak">
                              <span className="sname">롯데백화점 포항점</span>경상북도 포항시 북구 학산로 62
                              롯데백화점포항점 7F&nbsp;&nbsp;&nbsp;{' '}
                            </td>
                            <td style={{ fontSize: '15px', fontWeight: 500 }}>054-230-1775</td>
                            <td>
                              <a
                                href="#none"
                                onclick="BOARD.viewTarget('13218','101',this);"
                                style={{ fontSize: '16px', textDecoration: 'underline' }}
                              >
                                MAP
                              </a>
                            </td>
                          </tr>
                          <tr style={{ backgroundColor: '#FFFFFF', color: '#555555' }} className="xans-record-">
                            <td className style={{ textAlign: 'center' }}>
                              경상
                            </td>
                            <td className="subject left txtBreak">
                              <span className="sname">현대아울렛 대구점</span>대구광역시 동구 동대구로 454 현대시티몰
                              6F&nbsp;&nbsp;&nbsp;{' '}
                            </td>
                            <td style={{ fontSize: '15px', fontWeight: 500 }}>053-430-2372</td>
                            <td>
                              <a
                                href="#none"
                                onclick="BOARD.viewTarget('13169','101',this);"
                                style={{ fontSize: '16px', textDecoration: 'underline' }}
                              >
                                MAP
                              </a>
                            </td>
                          </tr>
                          <tr style={{ backgroundColor: '#FFFFFF', color: '#555555' }} className="xans-record-">
                            <td className style={{ textAlign: 'center' }}>
                              충청
                            </td>
                            <td className="subject left txtBreak">
                              <span className="sname">신세계백화점 천안아산점</span>충청남도 천안시 동남구 만남로 43
                              신세계천안아산점 A관 4F&nbsp;&nbsp;&nbsp;{' '}
                            </td>
                            <td style={{ fontSize: '15px', fontWeight: 500 }}>041-640-5419</td>
                            <td>
                              <a
                                href="#none"
                                onclick="BOARD.viewTarget('13167','101',this);"
                                style={{ fontSize: '16px', textDecoration: 'underline' }}
                              >
                                MAP
                              </a>
                            </td>
                          </tr>
                          <tr style={{ backgroundColor: '#FFFFFF', color: '#555555' }} className="xans-record-">
                            <td className style={{ textAlign: 'center' }}>
                              경기
                            </td>
                            <td className="subject left txtBreak">
                              <span className="sname">롯데백화점 평촌점</span>경기도 안양시 동안구 시민대로 180
                              롯데백화점평촌점 6F&nbsp;&nbsp;&nbsp;{' '}
                            </td>
                            <td style={{ fontSize: '15px', fontWeight: 500 }}>031-8086-9639</td>
                            <td>
                              <a
                                href="#none"
                                onclick="BOARD.viewTarget('13119','101',this);"
                                style={{ fontSize: '16px', textDecoration: 'underline' }}
                              >
                                MAP
                              </a>
                            </td>
                          </tr>
                          <tr style={{ backgroundColor: '#FFFFFF', color: '#555555' }} className="xans-record-">
                            <td className style={{ textAlign: 'center' }}>
                              서울
                            </td>
                            <td className="subject left txtBreak">
                              <span className="sname">신세계백화점 영등포점</span>서울특별시 영등포구 영중로 9
                              신세계백화점 타임스퀘어점 패션관 8F&nbsp;&nbsp;&nbsp;{' '}
                            </td>
                            <td style={{ fontSize: '15px', fontWeight: 500 }}>02-2639-4204</td>
                            <td>
                              <a
                                href="#none"
                                onclick="BOARD.viewTarget('13102','101',this);"
                                style={{ fontSize: '16px', textDecoration: 'underline' }}
                              >
                                MAP
                              </a>
                            </td>
                          </tr>
                          <tr style={{ backgroundColor: '#FFFFFF', color: '#555555' }} className="xans-record-">
                            <td className style={{ textAlign: 'center' }}>
                              전라
                            </td>
                            <td className="subject left txtBreak">
                              <span className="sname">롯데아울렛 광주수완점</span>광주광역시 광산구 장신로 98 3F
                              B관&nbsp;&nbsp;&nbsp;{' '}
                            </td>
                            <td style={{ fontSize: '15px', fontWeight: 500 }}>062-616-2300</td>
                            <td>
                              <a
                                href="#none"
                                onclick="BOARD.viewTarget('10759','101',this);"
                                style={{ fontSize: '16px', textDecoration: 'underline' }}
                              >
                                MAP
                              </a>
                            </td>
                          </tr>
                          <tr style={{ backgroundColor: '#FFFFFF', color: '#555555' }} className="xans-record-">
                            <td className style={{ textAlign: 'center' }}>
                              경기
                            </td>
                            <td className="subject left txtBreak">
                              <span className="sname">롯데아울렛 파주점</span>경기도 파주시 문발로 302
                              롯데프리미엄아울렛 A-1 블록 2F&nbsp;&nbsp;&nbsp;{' '}
                            </td>
                            <td style={{ fontSize: '15px', fontWeight: 500 }}>031-960-2870</td>
                            <td>
                              <a
                                href="#none"
                                onclick="BOARD.viewTarget('10757','101',this);"
                                style={{ fontSize: '16px', textDecoration: 'underline' }}
                              >
                                MAP
                              </a>
                            </td>
                          </tr>
                          <tr style={{ backgroundColor: '#FFFFFF', color: '#555555' }} className="xans-record-">
                            <td className style={{ textAlign: 'center' }}>
                              경기
                            </td>
                            <td className="subject left txtBreak">
                              <span className="sname">롯데백화점 중동점</span>경기도 부천시 길주로 300 롯데백화점 중동점
                              8F&nbsp;&nbsp;&nbsp;{' '}
                            </td>
                            <td style={{ fontSize: '15px', fontWeight: 500 }}>032-320-7582</td>
                            <td>
                              <a
                                href="#none"
                                onclick="BOARD.viewTarget('10732','101',this);"
                                style={{ fontSize: '16px', textDecoration: 'underline' }}
                              >
                                MAP
                              </a>
                            </td>
                          </tr>
                          <tr style={{ backgroundColor: '#FFFFFF', color: '#555555' }} className="xans-record-">
                            <td className style={{ textAlign: 'center' }}>
                              경기
                            </td>
                            <td className="subject left txtBreak">
                              <span className="sname">롯데백화점 수원점</span>경기도 수원시 권선구 세화로 134 롯데백화점
                              수원점 6F&nbsp;&nbsp;&nbsp;{' '}
                            </td>
                            <td style={{ fontSize: '15px', fontWeight: 500 }}>031-8066-0677</td>
                            <td>
                              <a
                                href="#none"
                                onclick="BOARD.viewTarget('10731','101',this);"
                                style={{ fontSize: '16px', textDecoration: 'underline' }}
                              >
                                MAP
                              </a>
                            </td>
                          </tr>
                          <tr style={{ backgroundColor: '#FFFFFF', color: '#555555' }} className="xans-record-">
                            <td className style={{ textAlign: 'center' }}>
                              경기
                            </td>
                            <td className="subject left txtBreak">
                              <span className="sname">현대백화점 킨텍스점</span>경기도 고양시 일산서구 호수로 817,
                              5F&nbsp;&nbsp;&nbsp;{' '}
                            </td>
                            <td style={{ fontSize: '15px', fontWeight: 500 }}>031-822-3565</td>
                            <td>
                              <a
                                href="#none"
                                onclick="BOARD.viewTarget('10542','101',this);"
                                style={{ fontSize: '16px', textDecoration: 'underline' }}
                              >
                                MAP
                              </a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <p className="xans-element- xans-board xans-board-empty-4 xans-board-empty xans-board-4 message displaynone " />
                    </div>
                  </div>
                  <div className="xans-element- xans-board xans-board-paging-4 xans-board-paging xans-board-4 ec-base-paginate">
                    <a href="?board_no=101&page=1">
                      <img src="//img.echosting.cafe24.com/skin/base/common/btn_page_prev.gif" alt="이전 페이지" />
                    </a>
                    <ol>
                      <li className="xans-record-">
                        <a href="?board_no=101&page=1" className="this">
                          1
                        </a>
                      </li>
                      <li className="xans-record-">
                        <a href="?board_no=101&page=2" className="other">
                          2
                        </a>
                      </li>
                      <li className="xans-record-">
                        <a href="?board_no=101&page=3" className="other">
                          3
                        </a>
                      </li>
                    </ol>
                    <a href="?board_no=101&page=2">
                      <img src="//img.echosting.cafe24.com/skin/base/common/btn_page_next.gif" alt="다음 페이지" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <style
              dangerouslySetInnerHTML={{
                __html:
                  '\n    .ec-base-table { font-size:13px !important}\n   .sname {display:inline-block; font-weight:bold; width:250px; padding-right:20px ;text-align:center !important; letter-spacing:0.1px;font-size:14px !important} \n    .map { width:100% !important; height:auto !important ; }  \n    \n    #content_view   { overflow:hidden;}\n    #content_view div {border:0px !important;padding:0 !important; width:100% !important; font-size:0px !important; height:auto !important; margin:0 !important;}\n      #content_view div img {border:0px !important;}\n    #content_view img { max-width:100% !important; height:auto !important; margin:0 !important;}\n       #content_view p , #content_view br {display:none !important; height:0px  !important;}\n    .ec-base-table { font-size:13px; letter-spacing:0.7px; color:#111}\n    \n    .ec-base-table.typeList td { padding:24px 0; }\n    .xans-board-listpackage #content_view td { background:#fff; padding:0 }\n     .ec-base-table tr:hover { background:#fcfcfc !important}\n    .shop_wrap .inputTypeText { height:25px !important; margin:-2px 0 0 0;  color:#555 !important;     border: 1px solid #ececec !important;}\n    .store_bt { height:30px !important; background:#000; color:#fff; padding:7px 10px; }\n    ',
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
        src="/exec/front/eclog/main/?board_no=101&rloc=https%3A//icebiscuit.com/store.html%3Fboard_no%3D101&rref=https%3A//icebiscuit.com/media.html%3Fcate_no%3D192&udim=1920*1080&rserv=elg-db-svcm-089.cafe24.com&cid=CID7b2d67549c2828a23445c0d27adff1fa&role_path=BOARD_PRODUCT_LIST&stype=e&shop_no=1&lang=ko_KR&ver=2"
        id="log_realtime"
        style={{ display: 'none' }}
      />
    </div>
  );
}
