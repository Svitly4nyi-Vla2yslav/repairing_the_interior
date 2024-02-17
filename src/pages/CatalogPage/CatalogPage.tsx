import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Price from '../../components/Price/Price';
import { Background } from '../../pages/FavoritesPage/FavoritesPage.styled';
import TitlebarImageList from '../../components/ImageList/ImageList';
// import { useDispatch, useSelector } from 'react-redux';
// import { AppDispatch } from 'redux/rootReducer/store';
// import { selectRepair } from 'redux/selectors';
// import { repair } from 'redux/types';

const CatalogPage: React.FC = () => {
  // const dispatch = useDispatch<AppDispatch>();
  return (
    <Background>
      <Header />
      <TitlebarImageList/>
      <Footer />
    </Background>
  );
};

export default CatalogPage;
