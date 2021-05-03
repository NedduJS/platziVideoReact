import React from 'react';
import { connect } from 'react-redux';

import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Header from '../components/Header';

import '../assets/styles/App.css';

function Home({ myList, trends, originals }) {
  const lists = [myList, trends, originals];
  const categories = ['Mi Lista', 'Tendencias', 'Originales de PlatziVideo'];

  return (
    <>
      <Header />
      <Search isHome />
      {categories.map((category, i) => {
        return (
          lists[i].length > 0 && (
            <Categories key={category} title={category}>
              <Carousel>
                {lists[i].map((item) => (
                  <CarouselItem
                    key={item.id}
                    // eslint-disable-next-line react/jsx-props-no-spreading
                    {...item}
                    isList={category === 'Mi Lista' && true}
                  />
                ))}
              </Carousel>
            </Categories>
          )
        );
      })}
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    myList: state.myList,
    trends: state.trends,
    originals: state.originals,
  };
};

export default connect(mapStateToProps, null)(Home);
