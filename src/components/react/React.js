import React, { useEffect, useState } from 'react';
import Sidebar from '../sidebar/Sidebar';

const ReactData = () => {
    const [reactQuestions, setReactQuestions] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            fetch('/data/data.json')
                .then(response => response.json())
                .then(data => {
                    setReactQuestions(data[1].data);
                })
                .catch(error => console.error('Error fetching data:', error));
        };
        fetchData();
    }, []);

    return (
        <div className='bg-black text-white min-h-screen'>
            <div>
                <Sidebar />
            </div>
            <div className='ml-80 pt-10'>
                {reactQuestions.map((questionObj) => (
                    <div key={questionObj.id}>
                        <h2 className='font-bold text-2xl'>{questionObj.question}</h2>
                        <p className='font-semibold text-xl p-4'>{questionObj.answer}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ReactData;
