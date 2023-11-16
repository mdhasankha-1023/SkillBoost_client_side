import React from 'react';
import Slider from '../../Components/Slider/Slider';
import PopularCourses from '../../Components/PopularCourses/PopularCourses';
import PopularInstructor from '../../Components/PopularInstructor/PopularInstructor';

const Home = () => {
    return (
        <div>
          <Slider></Slider>
          <PopularCourses></PopularCourses>  
          <PopularInstructor></PopularInstructor>
        </div>
    );
};

export default Home;