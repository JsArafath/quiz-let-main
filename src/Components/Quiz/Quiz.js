import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';
import { EyeIcon } from '@heroicons/react/24/solid';

import './Quiz.css'

const Quiz = () => {
    const items = useLoaderData();
    const [saveId, setSaveId] = useState([])
    let newItemArr = []
    const [correct, setCorrect] = useState(0);
    const [wrong, setWrong] = useState(0)
    const itemsData = items.data;
    const questions = itemsData.questions;
    const answerHandler = (option, correctAnswer, id) => {
        if (option === correctAnswer) {
            const stored = saveId.find(item => item === id)
            if (stored) {
                toast.warning('Already answered!', { autoClose: 500 })
            }
            else {
                toast.success('Correct!', { autoClose: 500 })
                newItemArr = [...saveId, id];
                setSaveId(newItemArr)
                setCorrect(correct + 1)
            }

        }
        else {
            const stored = saveId.find(item => item === id)
            if (stored) {
                toast.warning('already stored', { autoClose: 500 })
            }
            else {
                toast.error('Wrong answer!', { autoClose: 500 })
                newItemArr = [...saveId, id];
                setSaveId(newItemArr)
                setWrong(wrong + 1)
            }

        }
    }
    const hintsshow = (correctAnswer) => {
        toast.info(`Answer: ${correctAnswer}`, { autoClose: 1000 })
    }
    return (
        <div className='bg-slate-900 mt-4 lg:mx-20 md:mx-16 sm:mx-8 mx-4 lg:p-10 md:p-6 sm:p-3 p-2  rounded-md'>
            <p className='bg-slate-700 w-1/2 font-normal mx-auto text-center text-3xl 
            shadow-lg p-1 px-4 rounded-md text-white mb-7'>{itemsData.name}</p>
            <div className=''>
                <p className=' text-center py-1 px-3 bg-gray-900 rounded shadow-lg
                 text-green-600 md:w-1/2 w-full  font-semibold text-md'>
                    Total Correct Answer: {correct}
                </p>
            
            </div>
            <div>
                {
                    questions.map(item =>
                        <div className=' bg-gray-900 md:w-3/4 sm:w-full lg:w-full rounded-md 
                        lg:p-5 md:p-3 sm:p-2 p-2 my-4 mx-[-10px] relative' key={item.id}>

                            <p className='text-slate-50 text-center text-lg bg-slate-500 py-3 rounded-md bg-opacity-70 border-b-2 px-6'>{item.question.replace('<p>', '').replace('</p>', '')}</p>
                                <div className='grid md:grid-cols-2 grid-cols-1 gap-4 my-3'>
                                    {
                                        item.options.map(option => <li key={option} onClick={() => answerHandler(option, item.correctAnswer, item.id)} className='modify bg-slate-700 text-slate-100 py-1 px-4 w-3/4 rounded hover:bg-blue-500 hover:text-white ease-in duration-300 cursor-pointer'>{option}</li>)
                                    }
                                
                                </div>
                            <EyeIcon onClick={() => hintsshow(item.correctAnswer)} title='Click to know Answer' className='duration-300 text-slate-50 h-7 w-6 absolute lg:top-8 lg:right-9 md:top-6 sm:bottom-[50px] right-2 cursor-pointer' />
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Quiz;


