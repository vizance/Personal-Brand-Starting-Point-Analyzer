
import React, { useState, useMemo } from 'react';
import { ResultType, GameState } from './types';
import StartScreen from './components/StartScreen';
import QuizScreen from './components/QuizScreen';
import LoadingScreen from './components/LoadingScreen';
import ResultScreen from './components/ResultScreen';
import { QUESTIONS } from './constants';

const App: React.FC = () => {
  const [gameState, setGameState] = useState<GameState>(GameState.START);
  const [answers, setAnswers] = useState<ResultType[]>([]);
  const [resultType, setResultType] = useState<ResultType | null>(null);

  const handleStart = () => {
    setGameState(GameState.QUIZ);
    setAnswers([]);
    setResultType(null);
  };

  const handleQuizComplete = (finalAnswers: ResultType[]) => {
    setAnswers(finalAnswers);
    setGameState(GameState.LOADING);

    // Calculate result
    const counts: Record<ResultType, number> = {
      [ResultType.Explorer]: 0,
      [ResultType.Thinker]: 0,
      [ResultType.LoneRanger]: 0,
    };

    finalAnswers.forEach(answer => {
      counts[answer]++;
    });

    const determinedResult = Object.keys(counts).reduce((a, b) => 
      counts[a as ResultType] > counts[b as ResultType] ? a : b
    ) as ResultType;

    setTimeout(() => {
        setResultType(determinedResult);
        setGameState(GameState.RESULTS);
    }, 2500); // Simulate analysis time
  };

  const renderGameState = () => {
    switch (gameState) {
      case GameState.START:
        return <StartScreen onStart={handleStart} />;
      case GameState.QUIZ:
        return <QuizScreen questions={QUESTIONS} onComplete={handleQuizComplete} />;
      case GameState.LOADING:
        return <LoadingScreen text="正在分析你的個人品牌DNA..." />;
      case GameState.RESULTS:
        if (resultType) {
          return <ResultScreen resultType={resultType} onRestart={handleStart} />;
        }
        return <LoadingScreen text="計算結果時發生錯誤..." />; // Fallback
      default:
        return <StartScreen onStart={handleStart} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-indigo-900 font-sans flex items-center justify-center p-4">
      <div className="w-full max-w-2xl mx-auto">
        {renderGameState()}
      </div>
    </div>
  );
};

export default App;
