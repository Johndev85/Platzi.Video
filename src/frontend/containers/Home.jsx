import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
/* import useInitialState from '../hooks/useInitialState';
 */
import '../assets/styles/App.scss';

/* const API = 'http://localhost:3000/initialState';
 */
const Home = ({ mylist, trends, originals }) => {
/*   const initialState = useInitialState(API);
 */ return (
    <>
      <Search isHome />

      {mylist.length > 0 && (
        <Categories title='Mi Lista'>
          <Carousel>
            {mylist.map((item) => (
              <CarouselItem
                key={item.id}
                {...item}
                isList
              />
            ),
            )}
          </Carousel>
        </Categories>
      )}

      <Categories title='Tendencias'>
        <Carousel>
          {trends.map((item) => <CarouselItem key={item.id} {...item} />)}
        </Carousel>
      </Categories>

      <Categories title='Originales Platzi Video'>
        <Carousel>
          {originals.map((item) => <CarouselItem key={item.id} {...item} />)}
        </Carousel>
      </Categories>

    </>
  );
};

const mapStateToProps = (state) => {
  return {
    mylist: state.mylist,
    trends: state.trends,
    originals: state.originals,
  };
};

/* export default connect(props, actions)(Home);*/
export default connect(mapStateToProps, null)(Home);
