// src/components/LandingPage.jsx
import React from 'react';
import CourseCard from './CourseCard';
import '../App.css';

const LandingPage = () => {
  const courses = [
    { id: 1, title: 'Course 1', faculty: 'Faculty 1', image: 'https://via.placeholder.com/150' },
    { id: 2, title: 'Course 2', faculty: 'Faculty 2', image: 'https://via.placeholder.com/150' },
    { id: 3, title: 'Course 3', faculty: 'Faculty 3', image: 'https://via.placeholder.com/150' },
  ];

  return (
    <div className="container">
      <h2>Courses</h2>
      <div className="course-grid">
        {courses.map(course => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default LandingPage;
