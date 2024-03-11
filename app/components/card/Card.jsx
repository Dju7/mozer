
import React from 'react';


function Card() {
  return (
    <article className='relative group h-full w-full'>
      <img src='/fond1.jpg' alt='image de card' className=' h-full w-full object-fit cover' />
      <div className='absolute top-0 z-20 h-full w-full overflow-hidden bg-white bg-opacity-70 scale-0 transform group-hover:scale-100 ease-in-out '>
        <p className='text-teal-800 text-2xl ml-6 absolute transform -translate-y-10 group-hover:translate-y-10 duration-200 ease-in-out'>Title</p>
      </div>
      
    </article>
  );
}

export default Card;