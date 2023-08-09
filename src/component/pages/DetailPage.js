import React from 'react';
import Detail from '../DeltaiPage/Detail';
import MainNavigation from '../MainNavigation/MainNavigation';
import HeaderDeital from '../DeltaiPage/Header';
import Footer from '../Footer/Footer';


function DetailPage(props) {
  return (
    <div>
      <MainNavigation />
      <HeaderDeital />
      <Detail />
      <Footer />
    </div>
  );
}

export default DetailPage;