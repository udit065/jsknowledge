import React, { useEffect, useState } from 'react';

const Javascript = () => {
    const [jsQuestions, setJsQuestions] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            fetch('/data/data.json')
                .then(response => response.json())
                .then(data => {
                    setJsQuestions(data[0].data);
                })
                .catch(error => console.error('Error fetching data:', error));
        };
        fetchData();
    }, []);

    console.log('jsQuestions', jsQuestions);

    return (
        <>
            <h1 className="text-[2em] font-medium text-center">Javascript</h1>
            <div>
                {jsQuestions.map((questionObj) => (
                    <div key={questionObj.id}>
                        <h2>{questionObj.question}</h2>
                        <p>{questionObj.answer}</p>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Javascript;
