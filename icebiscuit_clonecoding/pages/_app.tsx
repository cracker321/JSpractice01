import type { AppProps } from 'next/app';
// import '../styles/aos.css';
// import '. ./styles/header.css';
// import '../styles/footer.css';
import '/public/styles/aos.css';
import '/public/styles/footer.css';
import '/public/styles/header.css';
import React from 'react';
import Footer from '../src/Footer';
import Header from '../src/Header';
import TopBar from '../src/TopBar';
// import '../styles.css';
import MainPage from '../src/MainPage';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      {/*어플리케이션의 '모든 페이지들(url 주소들)'에 싹 다 적용되어 나타나지는 부분*/}
      <Header />

      {/*이것은 그냥 '모든 개별 페이지들의 정보들'이 담겨있는 것을 표현한 것  */}
      <Component {...pageProps} />

      <Footer />
    </>
  );
}
