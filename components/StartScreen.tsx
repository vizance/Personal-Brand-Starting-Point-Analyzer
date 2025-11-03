
import React from 'react';

interface StartScreenProps {
  onStart: () => void;
}

const StartScreen: React.FC<StartScreenProps> = ({ onStart }) => {
  return (
    <div className="text-center bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl shadow-2xl border border-slate-700 animate-fade-in">
      <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-violet-400 mb-4">
        你的個人品牌卡關在哪？
      </h1>
      <p className="text-lg text-slate-300 mb-2">
        3 分鐘測出你的下一步
      </p>
      <p className="text-slate-400 mb-8 max-w-lg mx-auto">
        這個測驗將幫助你找到個人品牌發展的盲點，並提供個人化的分析結果與行動建議，讓你踏出清晰的第一步。
      </p>
      <button
        onClick={onStart}
        className="bg-teal-500 hover:bg-teal-400 text-white font-bold py-3 px-10 rounded-full text-xl transform hover:scale-105 transition-all duration-300 ease-in-out shadow-lg shadow-teal-500/30"
      >
        開始測驗
      </button>
    </div>
  );
};

export default StartScreen;
