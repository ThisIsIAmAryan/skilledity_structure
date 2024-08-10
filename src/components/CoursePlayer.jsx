// src/components/CoursePlayer.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import '../App.css';

const CoursePlayer = () => {
  const { courseId } = useParams();

  // Fetch course details based on courseId here

  return (
    <div className="container">
      <h2>Course Player for Course ID: {courseId}</h2>
      {/* Embed course player here */}
    </div>
  );
};

export default CoursePlayer;
