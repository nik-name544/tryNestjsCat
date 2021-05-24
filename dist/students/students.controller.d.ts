import { StudentsService } from './students.service';
import { StudentDto } from './dto/students.dto';
export declare class StudentsController {
    private studentsService;
    constructor(studentsService: StudentsService);
    getStudents(): void;
    getStudentById(): (id: number) => void;
    createStudent(studentDto: StudentDto): () => void;
    updStudent(): () => void;
}
