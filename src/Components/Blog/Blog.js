import React from 'react';

const Blog = () => {
    return (
        <div>
            <h1 className='lg:text-3xl md:text-2xl sm:text-xl text-normal font-bold text-white bg-red-500 py-2 px-4 my-4 shadow-lg shadow-slate-500 rounded w-1/3 text-center mx-auto'>QUESTIONS</h1>
            <div className='bg-slate-300 rounded-md w-11/12 mx-auto grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1 lg:gap-7 md:gap-4 gap-2 lg:p-10 md:p-6 p-2'>

                <div>
                    <p className='bg-slate-400 text-md py-1 px-3 rounded  font-semibold mb-1'>Q: What is The purpose of React Route?</p>
                    <div className='bg-red-500 text-md  py-1 px-3 rounded bg-opacity-70 text-slate-100'>
                        <p><span className='font-bold text-md text-slate-600'>Answer: </span>Routing is a process in which a user is directed to different pages based on their action or request. ReactJS Router is mainly used for developing Single Page Web Applications. React Router is used to define multiple routes in the application. When a user types a specific URL into the browser, and if this URL path matches any 'route' inside the router file, the user will be redirected to that particular route.React Router is a standard library system built on top of the React and used to create routing in the React application using React Router Package. It provides the synchronous URL on the browser with data that will be displayed on the web page.</p>
                    </div>
                </div>
                <div>
                    <p className='bg-slate-400 text-md py-1 px-3 rounded mb-1 font-semibold'>Q: How does Context API work?</p>
                    <div className='bg-red-500 text-md  py-1 px-3 rounded bg-opacity-70 text-slate-100'>
                        <p><span className='font-bold text-md text-slate-600'>Answer:</span> The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.Context API is a (kind of) new feature added in version 16.3 of React that allows one to share state across the entire app (or part of it) lightly and with ease. React.createContext() is all you need. It returns a consumer and a provider. Provider is a component that as it's names suggests provides the state to its children.</p>
                    </div>
                </div>
                <div>
                    <p className='bg-slate-400 text-md py-1 px-3 rounded mb-1 font-semibold'>Q: What is useRef hook?</p>
                    <div className='bg-red-500 text-md  py-1 px-3 rounded bg-opacity-70 text-slate-100'>
                        <p><span className='font-bold text-md text-slate-600'>Answer:</span> The useRef hook is the new addition in React 16.8. The useRef returns a mutable ref object. This object has a property called .current. The value is persisted in the refContainer.current property. These values are accessed from the current property of the returned object. The .current property could be initialized to the passed argument initialValue e.g. useRef(initialValue). The object can persist a value for a full lifetime of the component. A ref created with useRef will be created only when the component has been mounted and preserved for the full lifecycle.</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Blog;