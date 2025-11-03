import React, { useState } from 'react';
import { Question, ResultType } from '../types';

interface QuizScreenProps {
  questions: Question[];
  onComplete: (answers: ResultType[]) => void;
}

const QuizScreen: React.FC<QuizScreenProps> = ({ questions, onComplete }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<ResultType[]>([]);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleAnswer = (type: ResultType) => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    const newAnswers = [...answers, type];
    setAnswers(newAnswers);

    setTimeout(() => {
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
            onComplete(newAnswers);
        }
        setIsAnimating(false);
    }, 400);
  };

  const handleBack = () => {
    if (currentQuestionIndex > 0 && !isAnimating) {
        setIsAnimating(true);
        setTimeout(() => {
            setCurrentQuestionIndex(currentQuestionIndex - 1);
            setAnswers(answers.slice(0, -1));
            setIsAnimating(false);
        }, 400);
    }
  };

  const progressPercentage = ((currentQuestionIndex + 1) / questions.length) * 100;
  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="bg-slate-800/50 backdrop-blur-sm p-6 md:p-8 rounded-2xl shadow-2xl border border-slate-700 w-full animate-fade-in">
      {/* Progress Bar */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2 text-slate-300">
            <span className="text-sm font-medium">進度</span>
            <span className="text-sm font-medium">{currentQuestionIndex + 1} / {questions.length}</span>
        </div>
        <div className="w-full bg-slate-700 rounded-full h-2.5">
          <div
            className="bg-gradient-to-r from-teal-400 to-violet-500 h-2.5 rounded-full transition-all duration-500 ease-out"
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>
      </div>

      {/* Question */}
      <div className={`transition-opacity duration-300 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-slate-100 min-h-[100px] flex items-center">
            {currentQuestion.text}
        </h2>

        {/* Options */}
        <div className="space-y-4">
            {currentQuestion.options.map((option, index) => (
            <button
                key={index}
                onClick={() => handleAnswer(option.type)}
                className="w-full text-left bg-slate-700/50 hover:bg-slate-600/70 border border-slate-600 text-slate-200 font-medium py-4 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-teal-400"
            >
                {option.text}
            </button>
            ))}
        </div>
      </div>
      
      {/* Back Button */}
      <div className="mt-6 text-center h-6">
        {currentQuestionIndex > 0 && (
            <button
                onClick={handleBack}
                disabled={isAnimating}
                className={`text-slate-400 hover:text-white transition-all duration-300 disabled:opacity-50 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}
            >
                &larr; 返回上一題
            </button>
        )}
      </div>
    </div>
  );
};

export default QuizScreen;