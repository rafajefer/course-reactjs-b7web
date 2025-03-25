import { Question } from "@/types/Question";


export const questions: Question[] = [
    {
        id: 1,
        question: 'Qual o maior planeta do sistema solar?',
        options: [
            'Terra',
            'Marte',
            'Júpiter',
            'Saturno'
        ],
        answer: 'Júpiter'
    },
    {
        id: 2,
        question: 'Qual o menor planeta do sistema solar?',
        options: [
            'Terra',
            'Marte',
            'Mercúrio',
            'Vênus'
        ],
        answer: 'Mercúrio'
    },
    {
        id: 3,
        question: 'Qual o planeta mais próximo do sol?',
        options: [
            'Terra',
            'Marte',
            'Mercúrio',
            'Vênus'
        ],
        answer: 'Mercúrio'
    }
]