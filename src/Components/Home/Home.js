import React, { useContext } from 'react';
import Banner from '../BannerPart/BannerPart';
import { ItemsContext } from '../Layout/Layout';
import QuizCart from '../QuizCartList/QuizCartList';

const Home = () => {
    // const quiz = useLoaderData();
    // const quizItems = quiz.data;
    const quiz = useContext(ItemsContext);
    return (
        <div>
           <Banner></Banner> 
           <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6 lg:mx-20 md:mx-10 sm:mx-5 mx-2 bg-slate-900 bg-opacity-30 p-9 rounded-md'>
            {
                quiz.map(item => <QuizCart key={item.id} item = {item}></QuizCart>)
            }
           </div>
        </div>
    );
};

export default Home;