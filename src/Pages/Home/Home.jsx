import React from 'react';
import Slider from '../../Components/Slider/Slider';
import PopularCourses from '../../Components/PopularCourses/PopularCourses';

const Home = () => {
    return (
        <div>
          <Slider></Slider>
          <PopularCourses></PopularCourses>  
        </div>
    );
};

export default Home;