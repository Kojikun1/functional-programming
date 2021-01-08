
export interface Questions {
   qID: number;
   response: string;
   result: boolean;
   weight: number;
}
export interface User {
    userId: number;
    questions: Questions[];
}

