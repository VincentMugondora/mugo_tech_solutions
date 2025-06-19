import React from 'react';

const logos = [
  'https://dummyimage.com/100x40/cccccc/fff&text=Logo+1',
  'https://dummyimage.com/100x40/cccccc/fff&text=Logo+2',
  'https://dummyimage.com/100x40/cccccc/fff&text=Logo+3',
  'https://dummyimage.com/100x40/cccccc/fff&text=Logo+4',
  'https://dummyimage.com/100x40/cccccc/fff&text=Logo+5',
  'https://dummyimage.com/100x40/cccccc/fff&text=Logo+6',
];

const LogosRow = () => (
  <section className="bg-indigo-50 py-8 flex justify-center">
    <div className="flex flex-wrap gap-8 items-center justify-center w-full max-w-4xl">
      {logos.map((src, i) => (
        <img
          key={i}
          src={src}
          alt={`Client logo ${i + 1}`}
          className="h-10 w-auto object-contain grayscale opacity-80 hover:opacity-100 hover:scale-105 transition-all duration-200 shadow-sm rounded"
        />
      ))}
    </div>
  </section>
);

export default LogosRow; 