import React from 'react';
import Title from './components/Title';

const RandomizeColor = () => {
  const handleClick = e => {
    const colors = ['red', 'green', 'blue', 'yellow'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
    e.target.style.backgroundColor = randomColor;
  };

  return (
    <div className='container'>
      <Title text={'Randomize Color'} classes={'mb-4'} />
      <button className='btn btn-danger' onClick={e => handleClick(e)}>
        Click Me
      </button>
      <button className='btn btn-success' onClick={e => handleClick(e)}>
        Click Me
      </button>
      <button className='btn btn-primary' onClick={e => handleClick(e)}>
        Click Me
      </button>
      <button className='btn btn-warning' onClick={e => handleClick(e)}>
        Click Me
      </button>
    </div>
  );
};

export default RandomizeColor;
