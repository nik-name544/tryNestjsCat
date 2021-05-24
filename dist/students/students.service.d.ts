import { Student } from './students.model';
export declare class StudentsService {
    private studentRepository;
    constructor(studentRepository: typeof Student);
    getStudents(): void;
    getStudentById(id: number): void;
    createStudent(): void;
    updStudent(): void;
}
