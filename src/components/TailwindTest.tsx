import React from 'react';

const TailwindTest: React.FC = () => {
  return (
    <div className="p-4 m-4 bg-accent text-background rounded-lg shadow-md font-serif">
      <h2 className="text-xl font-bold mb-2">Tailwind CSS is working!</h2>
      <div className="text-3xl">test</div>
      <p className="text-sm">This component is styled using Tailwind CSS with Source Serif Pro font.</p>
    </div>
  );
};

export default TailwindTest; 