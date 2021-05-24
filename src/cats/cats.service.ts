import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Cat, CatDocument } from './schemas/cat.schema';
import { Model, ObjectId } from 'mongoose';
import { CatsDto } from './dto/cats.dto';
import { FileService, FileType } from 'src/file/file.service';

@Injectable()
export class CatsService {

    constructor(
        @InjectModel(Cat.name) private catModel: Model<CatDocument>,
        private fileService: FileService
    ) { }

    async createNewCat(catDto: CatsDto, picture): Promise<Cat> {
        const picturePath = this.fileService.createFile(FileType.IMAGE, picture)
        const cat = await this.catModel.create({ ...catDto, picture: picturePath })
        return cat
    }

    async getAllCats(): Promise<Cat[]> {
        const cats = await this.catModel.find()
        return cats
    }

    async getOne(id: ObjectId): Promise<Cat> {
        const cat = await this.catModel.findById(id)
        return cat
    }

    async updCat(id: ObjectId, catDto: CatsDto): Promise<Cat> {
        const cat = await this.catModel.findById(id)
        cat.name = catDto.name || cat.name
        cat.collor = catDto.collor || cat.collor
        await cat.save()
        return cat
    }

    async search(query: string): Promise<Cat[]> {
        const cats = await this.catModel.find({ 
            name: { $regex: new RegExp(query, 'i') } 
        })
        return cats
    }

    async delCat(id: ObjectId): Promise<ObjectId> {
        const cat = await this.catModel.findByIdAndDelete(id)
        return cat._id
    }
}
