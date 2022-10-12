import React from 'react';
import { Link } from 'react-router-dom';
import './QuizCartList.css';

const QuizCartList = ({ item }) => {
    return (
        <div className='bg-color-part bg-opacity-80 relative rounded-md p-4 shadow-gray-800 shadow-lg color-1'>
            <div>
                <img src={item.logo} alt="" />
            </div>
            <div>
                <p className='color-1 text-gray-300 bg-color-part inline text-xs py-1 px-2 mx-[110px] rounded-lg my-1 absolute top-1 right-2'>Total quiz: {item.total}</p>
            </div>
            <div className='text-center justify-between items-center'>
                <p className='text-2xl rounded my-2 py-1 px-7 font-bold font-sans text-slate-200'>{item.name}</p>
                <Link to={`/quiz/${item.id}`}><button className='bg-blue-900 py-1 px-7 text-lg hover:bg-gray-700 duration-300 text-white rounded my-6'>Start</button></Link>
            </div>
        </div>
    );
};

export default QuizCartList;