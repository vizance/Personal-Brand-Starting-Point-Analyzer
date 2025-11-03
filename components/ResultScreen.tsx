import React from 'react';
import { ResultType } from '../types';
import { RESULT_DETAILS } from '../constants';
import RestartIcon from './icons/RestartIcon';

interface ResultScreenProps {
  resultType: ResultType;
  onRestart: () => void;
}

// Helper to render text with 【】 syntax as bold/highlighted
const HighlightedText: React.FC<{ text: string }> = ({ text }) => {
  const parts = text.split(/(【.*?】)/g);
  return (
    <div className="whitespace-pre-wrap">
      {parts.map((part, i) =>
        part.startsWith('【') && part.endsWith('】') ? (
          <strong key={i} className="font-bold text-teal-300">
            {part.slice(1, -1)}
          </strong>
        ) : (
          part
        )
      )}
    </div>
  );
};


const ResultScreen: React.FC<ResultScreenProps> = ({ resultType, onRestart }) => {
  const details = RESULT_DETAILS[resultType];
  
  const getEmojiForType = () => {
    switch (resultType) {
      case ResultType.Explorer:
        return '😨';
      case ResultType.Thinker:
        return '🤯';
      case ResultType.LoneRanger:
        return '😵';
      default:
        return null;
    }
  };

  return (
    <div className="bg-slate-800/80 backdrop-blur-md p-6 md:p-8 rounded-2xl shadow-2xl border border-slate-700 w-full animate-fade-in">
        <div className="text-center mb-6">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full mx-auto mb-4 border-4 border-teal-400 shadow-lg flex items-center justify-center bg-slate-700/50 text-6xl md:text-7xl">
                {getEmojiForType()}
            </div>
            <p className="text-slate-400 text-lg">你的個人品牌類型是</p>
            <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-violet-400">
                {details.title}
            </h1>
        </div>
        
        <div className="space-y-6 text-slate-300 leading-relaxed">
            <ResultSection title="其實，你只需要…">
                 <p className="whitespace-pre-wrap">{details.whatYouNeed}</p>
            </ResultSection>

            <div className="bg-slate-900/50 p-4 rounded-lg border border-teal-700/50">
                 <HighlightedText text={details.coursePitch} />
            </div>
        </div>

        <div className="mt-8 text-center">
            <a
                href="https://chichu.co/event/4-hour-solopreneur-roadmap-lecture"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-full md:w-auto bg-teal-500 hover:bg-teal-400 text-white font-bold py-3 px-10 rounded-full text-xl transform hover:scale-105 transition-all duration-300 ease-in-out shadow-lg shadow-teal-500/30 mb-6"
            >
                {details.ctaButtonText}
            </a>
            <div className="flex justify-center items-center">
                <button onClick={onRestart} className="flex items-center space-x-2 text-slate-400 hover:text-white transition-colors"><RestartIcon /><span className="hidden sm:inline">重新測驗</span></button>
            </div>
        </div>
    </div>
  );
};

const ResultSection: React.FC<{title: string, children: React.ReactNode}> = ({ title, children }) => {
    return (
        <div className="bg-slate-900/50 p-4 rounded-lg border border-slate-700">
            <h3 className="text-xl font-bold text-teal-300 mb-2">{title}</h3>
            {children}
        </div>
    );
};


export default ResultScreen;