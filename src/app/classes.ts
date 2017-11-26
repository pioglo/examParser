export class Exam {
    examId: string;
    questions: Question[] = [];
}

export class Question {
    questionId: number;
    answears: boolean[] = [];
}