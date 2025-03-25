import { Question } from "@/types/Question";

type Props = {
    questions: Question[];
    answers: string[];
}

export const QuizResults = ({ questions, answers }: Props) => {
    return (
        <section className="p-4">
            <h1 className="text-1xl font-bold pb-4 text-blue-600">Resultado</h1>
            <ul className="grid grid-cols-1 gap-4">
                {questions.map((question, index) => (
                    <li key={index}>
                        <strong>{question.question}</strong>
                        <p>{answers[index] === question.answer ? 'Correto' : 'Errado'} - {answers[index]}</p>
                    </li>
                ))}
            </ul>
        </section>
    );
};