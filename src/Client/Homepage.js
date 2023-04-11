import React, { useState, useEffect } from 'react';
import Review from './Review'
export default function Homepage(){
    
const[entry, setEntry] = useState("");
const[submission, setSubmission] = useState("");

const entryChange = (e) => {setEntry(e.target.value);}

const handleSubmit = (e) =>
{
    e.preventDefault();
    setSubmission(entry);
    setEntry("");
    addReview();
}

const addReview = () =>{
    console.log(submission);
}

return(
        <div>
            Welcome to my Product Review Website!
            <form onSubmit={handleSubmit}>
                <label>
                Input:
                <input type="text" value={entry} onChange={entryChange} />
                </label>
                <button type="submit">Submit</button>
            </form>
            {submission != "" && (
                <Review
                    name = {submission}/>)
            }
        </div>
    );
}