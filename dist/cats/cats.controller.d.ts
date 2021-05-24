import { CatsService } from './cats.service';
import { CatsDto } from './dto/cats.dto';
import { ObjectId } from 'mongoose';
export declare class CatsController {
    private catsService;
    constructor(catsService: CatsService);
    createNewCat(files: any, catDto: CatsDto): Promise<import("./schemas/cat.schema").Cat>;
    getAll(): Promise<import("./schemas/cat.schema").Cat[]>;
    getOne(id: ObjectId): Promise<import("./schemas/cat.schema").Cat>;
    updCat(id: ObjectId, catDto: CatsDto): Promise<import("./schemas/cat.schema").Cat>;
    search(query: string): Promise<import("./schemas/cat.schema").Cat[]>;
    delCat(id: ObjectId): Promise<import("mongoose").Schema.Types.ObjectId>;
}
