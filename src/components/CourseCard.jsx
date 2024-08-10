// src/components/CourseCard.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

const CourseCard = ({ course }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/course/${course.id}`);
  };

  return (
    <div className="course-card" onClick={handleClick}>
      <img src={course.image} alt={course.title} />
      <h3>{course.title}</h3>
      <p>{course.faculty}</p>
    </div>
  );
};

export default CourseCard;
