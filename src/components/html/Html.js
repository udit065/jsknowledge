import React, { useEffect, useState } from 'react';

const Html = () => {
    const [htmlQuestions, setHtmlQuestions] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            fetch('/data/data.json')
                .then(response => response.json())
                .then(data => {
                    setHtmlQuestions(data[2].data);
                })
                .catch(error => console.error('Error fetching data:', error));
        };
        fetchData();
    }, []);

    return (
        <div className='bg-black text-white min-h-screen'>
            <div className='ml-4 md:ml-20 pt-10'>
                {htmlQuestions.map((questionObj) => (
                    <div key={questionObj.id}>
                        <h2 className='font-bold text-2xl'>{questionObj.question}</h2>
                        <p className='font-semibold text-xl p-4'>{questionObj.answer}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Html;

/*!SECTION

[
  {
    "question": "Create a form and validate it in both JavaScript and React",
    "answer": "",
    "explanation": ""
  },
  {
    "question": "Create a form and validate it in both JavaScript and React but submite button should be disble until user fills the complete form",
    "answer": "",
    "explanation": ""
  },
  {
    "question": "Create a form and validate it in both JavaScript and React and print the data in a table format below",
    "answer": "",
    "explanation": ""
  },
  {
    "question": "Build a form where users can upload a profile picture along with their details (name, email, etc.). Validate the form fields and ensure that the uploaded file meets specific criteria (e.g., file size less than 2MB, file type must be .jpg or .png). Upon submission, preview the uploaded image and display the user details below the form.",
    "answer": "",
    "explanation": ""
  },
  {
    "question": "Design a multi-step form wizard where users input data in different steps (e.g., Step 1: Personal Details, Step 2: Address Details, Step 3: Payment Information). Implement validation for each step using both JavaScript and React. Ensure users cannot proceed to the next step until the current step is completed and validated. Display a progress bar to indicate the form's completion status.",
    "answer": "",
    "explanation": ""
  },
  {
    "question": "Create a form with dynamic fields. Initially,there is state feild when user chooses state , show the district feilds.",
    "answer": "",
    "explanation": ""
  },
  {
    "question": "Create a form that integrates with an external API. For instance, users input their ZIP code, and the form fetches and auto-fills the city and state fields by calling an external API. Implement this functionality in both JavaScript and React, and handle edge cases like invalid or missing ZIP codes gracefully.",
    "answer": "",
    "explanation": ""
  },
  {
    "question": "Design a form where users can select multiple options from a dropdown (e.g., a list of skills or hobbies). Use tags or badges to display the selected items dynamically. Validate that users can only select a maximum of 5 options. Implement this functionality in both JavaScript and React.",
    "answer": "",
    "explanation": ""
  },
  {
    "question": "Develop a search form with an input field where users can type queries, and as they type, dynamically fetch and display matching results from an external API. The search should be responsive and provide real-time suggestions below the input field. Implement debouncing to limit unnecessary API calls for better performance. Use both JavaScript and React for this implementation. Additionally, handle edge cases like empty queries, no results, and API errors gracefully.",
    "answer": "",
    "explanation": ""
  },
  {
    "question": "multi-page form.",
    "answer": "",
    "explanation": ""
  },
  {
    "question": "todo app",
    "answer": "",
    "explanation": ""
  },
  {
    "question": "Fetch data from a public API (e.g., GitHub, OpenWeather, or a movie database) and display it in a paginated table. Add sorting and filtering capabilities to the table (e.g., sort by name or filter by category).",
    "answer": "",
    "explanation": ""
  },
  {
    "question": "Develop a to-do list app where users can add, edit, and delete tasks. Include functionality to mark tasks as completed and filter them by status (e.g., all, active, completed). Use React's state and props to manage the application.",
    "answer": "",
    "explanation": ""
  },
  {
    "question": "Build a theme switcher that toggles between light and dark mode. Persist the user's preference using localStorage and apply the theme dynamically across the application.",
    "answer": "",
    "explanation": ""
  },
  {
    "question": "Develop a live notification system that fetches updates from a mock API every few seconds and displays the notifications dynamically on the page. Include a badge to show the count of unread notifications.",
    "answer": "",
    "explanation": ""
  },
  {
    "question": "implement pagination.",
    "answer": "",
    "explanation": ""
  },
  {
    "question": "implement File Explorer like vs",
    "answer": "",
    "explanation": ""
  },
  {
    "question": "Implement a Employee DB System where there is Employee list on Left Side and Employee Details that you clicked on the right with its Profile picure ,name,email,phone etc. And an Add New Employee Button which opens a form and you can fill the information and when click submit , it will apend in Employee list on left side.There is Delete Button in Employee list to delete an Employee",
    "answer": "",
    "explanation": "Check this out for refrence -> https://www.youtube.com/watch?v=ZrMO0bCGwFg&list=PLKhlp2qtUcSYQojD5G-ElgHezoCyq2Hgo"
  },
  {
    "question": "Check this out for refrence -> https://www.youtube.com/watch?v=ZrMO0bCGwFg&list=PLKhlp2qtUcSYQojD5G-ElgHezoCyq2Hgo",
    "answer": "",
    "explanation": ""
  },
  {
    "question": "implement a StopWatch and Timer.",
    "answer": "",
    "explanation": "Check this out for refrence -> https://www.youtube.com/watch?v=ZrMO0bCGwFg&list=PLKhlp2qtUcSYQojD5G-ElgHezoCyq2Hgo"
  },
  {
    "question": "implement OTP login",
    "answer": "",
    "explanation": "Check this out for refrence -> https://www.youtube.com/watch?v=ZrMO0bCGwFg&list=PLKhlp2qtUcSYQojD5G-ElgHezoCyq2Hgo"
  },
  {
    "question": "implement Star Rating",
    "answer": "",
    "explanation": ""
  },
  {
    "question": "implement EMI Calculator.",
    "answer": "",
    "explanation": "Check this out for refrence -> https://www.youtube.com/watch?v=ZrMO0bCGwFg&list=PLKhlp2qtUcSYQojD5G-ElgHezoCyq2Hgo"
  },
  {
    "question": "implement a Password Generator",
    "answer": "",
    "explanation": "Check this out for refrence -> https://www.youtube.com/watch?v=ZrMO0bCGwFg&list=PLKhlp2qtUcSYQojD5G-ElgHezoCyq2Hgo"
  },
  {
    "question": "implement a Progress Car",
    "answer": "",
    "explanation": "Check this out for refrence -> https://www.youtube.com/watch?v=ZrMO0bCGwFg&list=PLKhlp2qtUcSYQojD5G-ElgHezoCyq2Hgo"
  },
  {
    "question": "implement a breadcrumb",
    "answer": "",
    "explanation": "Check this out for refrence -> https://www.youtube.com/watch?v=ZrMO0bCGwFg&list=PLKhlp2qtUcSYQojD5G-ElgHezoCyq2Hgo"
  },
  {
    "question": "implement a Steeper",
    "answer": "",
    "explanation": "Check this out for refrence -> https://www.youtube.com/watch?v=ZrMO0bCGwFg&list=PLKhlp2qtUcSYQojD5G-ElgHezoCyq2Hgo"
  },
  {
    "question": "implement a Quiz App.",
    "answer": "",
    "explanation": "Check this out for refrence -> https://www.youtube.com/watch?v=ZrMO0bCGwFg&list=PLKhlp2qtUcSYQojD5G-ElgHezoCyq2Hgo"
  },
  {
    "question": "implement a TIC TAC TOE",
    "answer": "",
    "explanation": "Check this out for refrence -> https://www.youtube.com/watch?v=ZrMO0bCGwFg&list=PLKhlp2qtUcSYQojD5G-ElgHezoCyq2Hgo"
  },
  {
    "question": "implement a infine Scroll",
    "answer": "",
    "explanation": ""
  }
*/



