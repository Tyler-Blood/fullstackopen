import React from 'react';

const Total = ({ parts }) => (
<p><strong>total of {parts.reduce((acc, part) => acc + part.exercises, 0)} exercises</strong></p>
)


export default Total