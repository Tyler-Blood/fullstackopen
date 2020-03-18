import React from 'react';
import Header from './course/Header';
import Content from './course/Content';
import courses from './course/Course'

const App = () => {
  return (
    <div>
      <Header />
      <Content courses={courses} />
    </div>
  );
}

export default App