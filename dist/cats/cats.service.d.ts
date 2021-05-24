import { Cat, CatDocument } from './schemas/cat.schema';
import { Model, ObjectId } from 'mongoose';
import { CatsDto } from './dto/cats.dto';
import { FileService } from 'src/file/file.service';
export declare class CatsService {
    private catModel;
    private fileService;
    constructor(catModel: Model<CatDocument>, fileService: FileService);
    createNewCat(catDto: CatsDto, picture: any): Promise<Cat>;
    getAllCats(): Promise<Cat[]>;
    getOne(id: ObjectId): Promise<Cat>;
    updCat(id: ObjectId, catDto: CatsDto): Promise<Cat>;
    search(query: string): Promise<Cat[]>;
    delCat(id: ObjectId): Promise<ObjectId>;
}
