import { Question } from "@/types/Question";
import { useState } from "react";
import { QuizResults } from "./QuizResults";

type Props = {
    questions: Question[];
}

export const Quiz = ({ questions }: Props) => {

    const [questionIndex, setQuestionIndex] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
    const [answers, setAnswers] = useState<string[]>([]);
    const [showResult, setShowResult] = useState(false);

    const question = questions[questionIndex];

    const checkQuestion = (index: number) => {
        if (selectedAnswer !== null) return;
        setSelectedAnswer(index);

        setTimeout(() => {
            if (questionIndex + 1 < questions.length) {
                setAnswers([...answers, question.options[index]]);
                setQuestionIndex(questionIndex + 1);
                setSelectedAnswer(null);
            } else {
                setAnswers([...answers, question.options[index]]);
                setShowResult(true);
            }
        }, 1000);
    }

    const handleRestartQuizButton = () => {
        setAnswers([]);
        setShowResult(false);
        setSelectedAnswer(null);
        setQuestionIndex(0);
    }

    return (
        <div className="w-full h-screen bg-blue-500 flex items-center justify-center">
            <section className="w-full max-w-xl p-2 rounded-md bg-white shadow-md">
                <header className="border-b border-gray-200">
                    <h1 className="text-2xl font-bold p-4">Quiz de Culinária</h1>
                </header>
                {showResult && (
                    <QuizResults questions={questions} answers={answers} />
                )}
                {!showResult && 
                    <>
                        <progress
                            value={questionIndex + 1}
                            max={questions.length}
                            className="w-full h-1 bg-blue-200"
                        />
                        <section className="p-4">
                            <h1 className="text-1xl font-bold pb-4">{questionIndex + 1}. { question.question }</h1>
                            <div className="grid grid-cols-1 gap-4">
                                {question.options.map((option, index) => (
                                    <button
                                        key={index}
                                        onClick={() => checkQuestion(index)}
                                        className={
                                            `bg-blue-100 rounded-md text-left px-2 py-1 border border-blue-300
                                            ${selectedAnswer !== null ? 'cursor-auto' : 'cursor-pointer hover:opacity-60'}
                                            ${selectedAnswer !== null && selectedAnswer === index && question.options[index] === question.answer ? 'bg-green-100 border-green-300' : ''}
                                            ${selectedAnswer !== null && selectedAnswer === index && question.options[index]!== question.answer? 'bg-red-100 border-red-300' : ''}
                                        `}
                                    >
                                        {option}
                                    </button>
                                ))}
                            </div>
                        </section>
                    </>
                }
                <footer className="border-t border-gray-200 p-4 text-center text-sm">
                    {!showResult &&
                        `${questionIndex + 1} de ${questions.length} pergunta${questions.length > 1 && 's'}`
                    }
                    {showResult &&
                        <button className="px-3 py-2 rounded-md bg-blue-700 text-white" onClick={handleRestartQuizButton}>
                            Reiniciar Quiz
                        </button>
                    }
                </footer>
            </section>
        </div>
    );
}