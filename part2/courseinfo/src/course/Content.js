import React from 'react';
import Part from './content/Part';
import Total from './Total';

const Content = ({ courses }) => {
  return (
      <div className="content">
        {courses.map((course) => {
          return (
            <div className="section" key={"section" + course.id}>
              <h2 key={"name" + course.id}>{course.name}</h2>
              <div className="parts" key={"parts" + course.id}>
                {course.parts.map((part) => {
                  const key = `${course.id}.${part.id}`;
                  return (
                    <Part part={part} key={key} />
                  )
                })}
                {<Total parts={course.parts} />}
              </div>
            </div>
          )}
          )}
      </div>
  )

}

export default Content