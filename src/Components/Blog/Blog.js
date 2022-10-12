import React from 'react';

const Blog = () => {
    return (
        <div>
            <h1 className='text-center text-normal lg:text-3xl md:text-2xl sm:text-xl  font-bold text-white bg-slate-700 py-2 px-4 my-4 shadow-lg rounded w-1/3  mx-auto'>Welcome To Our Blog Page</h1>
            <div className='rounded-md w-11/12 mx-auto grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1 lg:gap-7 md:gap-4 gap-2 lg:p-10 md:p-6 p-2'>

              
            <div className="container">
      <div className="max-w-[900px] mx-auto mt-8">
        <h1 className="bg-slate-700 text-3xl mb-4 text-[#69c0ff] font-semibold p-5 rounded ">
          1 What is the purpose of React Router?
        </h1>
        <p className="text-xl text-[#b5c8d6]">
          React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL. Let us create a simple application to React to understand how the React Router works.{" "}
        </p>
      </div>
      <div className="max-w-[900px] mx-auto mt-16">
        <h1 className="bg-slate-700 text-3xl mb-4 text-[#69c0ff] font-semibold p-5 rounded ">
          2 How does context API work?
        </h1>
        <p className="text-xl text-[#b5c8d6] mb-4">
        The React Context API is a way for a React app to effectively produce global variables that can be passed around.This way we can avoid props drilling.
          And we can pass any data, any function to any child component I mean
          in any component in the tree. The data provided by context is global.
          Any component in the tree can get the data.
        </p>
      </div>
      <div className="max-w-[900px] mx-auto mt-16 mb-24">
        <h1 className="bg-slate-700 text-3xl mb-4 text-[#69c0ff] font-semibold p-5 rounded ">
          3 What is useRef hook and how does it work?.
        </h1>
        <p className="text-xl text-[#b5c8d6] mb-4">
        The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly. We can also use it as a
          variable like a state. But the difference is the component will not
          render when its value changes.
        </p>
      </div>
    </div>

            </div>
        </div>
    );
};

export default Blog;