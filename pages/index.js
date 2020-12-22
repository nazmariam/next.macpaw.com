import React from 'react';
import Head from 'next/head';
import LanguageSwitcher from '../components/LanguageSwitcher/LanguageSwitcher';
import Footer from '../components/Footer/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Products</title>
      </Head>
      <div className="wrapper">
        <div className="center">
          <LanguageSwitcher />
        </div>
      </div>
      <Footer/>
    </>
  );
}
