import React from 'react';
import { Link } from 'react-router';

const Home = () => {
    const data = ["Javascript", "React", "HTML", "CSS"];
    const path = ["/javascript", "/react", "/html", "/css"];

    return (
        <div className="bg-black text-white min-w-screen min-h-screen">
            <div className='mb-8'>
                <p className='text-3xl font-bold text-center'>Interview Questions</p>
            </div>
            <div className='flex flex-wrap'>
                {data.map((elm, index) => {
                    return (
                        <div className='m-10'>
                            <Link to={path[index]}>
                                <div
                                    key={index}
                                    className="h-[16em] w-[18em] border-2 border-[rgba(75,30,133,0.5)] rounded-[1.5em] bg-gradient-to-br from-[rgba(75,30,133,1)] to-[rgba(75,30,133,0.01)] text-white p-[1em] flex justify-center items-left flex-col gap-[0.75em] backdrop-blur-[12px] cursor-pointer"
                                >
                                    <h1 className="text-[2em] font-medium text-center">{elm}</h1>
                                </div>
                            </Link>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Home;
