import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Home from './Home'
const JOBS_KEY = 'jobs';

function PostJob(props) {
    const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');
  const [type, setType] = useState('');

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleTypeChange = (event) => {
    setType(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const job = { title, date, location, description, type };
    const jobs = JSON.parse(localStorage.getItem(JOBS_KEY)) || [];
    jobs.push(job);
    localStorage.setItem(JOBS_KEY, JSON.stringify(jobs));
    alert("Job Created successfully")
    navigate('/');
  };

  return (
    <div>
      <h2>Post a Job</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Job Title</label>
          <input type="text" id="title" value={title} onChange={handleTitleChange} />
        </div>
        <div>
          <label htmlFor="date">Posting Date</label>
          <input type="date" id="date" value={date} onChange={handleDateChange} />
        </div>
        <div>
          <label htmlFor="location">Job Location</label>
          <input type="text" id="location" value={location} onChange={handleLocationChange} />
        </div>
        <div>
          <label htmlFor="description">Job Description</label>
          <textarea id="description" value={description} onChange={handleDescriptionChange} />
        </div>
        <div>
          <label htmlFor="type">Job Type</label>
          <select id="type" value={type} onChange={handleTypeChange}>
            <option value="">Select Job Type</option>
            <option value="full-time">Full-time</option>
            <option value="part-time">Part-time</option>
            <option value="contract">Contract</option>
          </select>
        </div>
        <button type="submit">Post Job</button>
      </form>
    </div>
  );
}

export default PostJob;

