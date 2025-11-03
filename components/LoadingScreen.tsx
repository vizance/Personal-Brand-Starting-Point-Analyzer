
import React from 'react';

interface LoadingScreenProps {
  text: string;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ text }) => {
  return (
    <div className="flex flex-col items-center justify-center p-8 bg-slate-800/50 backdrop-blur-sm rounded-2xl shadow-2xl border border-slate-700 animate-fade-in">
      <div className="w-16 h-16 border-4 border-t-teal-400 border-r-teal-400 border-slate-600 rounded-full animate-spin mb-6"></div>
      <p className="text-xl text-slate-300">{text}</p>
    </div>
  );
};

export default LoadingScreen;
