import { Controller, Post, Body, UseInterceptors, UploadedFile, UploadedFiles, Get, Param, Put, Query, Delete, Patch } from '@nestjs/common';
import { CatsService } from './cats.service';
import { CatsDto } from './dto/cats.dto';
import { FileFieldsInterceptor } from "@nestjs/platform-express";
import { ObjectId } from 'mongoose';

@Controller('cats')
export class CatsController {

    constructor(private catsService: CatsService) { }

    @Post('/create')
    @UseInterceptors(FileFieldsInterceptor([
        { name: "picture", maxCount: 1 }
    ]))
    createNewCat(@UploadedFiles() files, @Body() catDto: CatsDto) {
        const { picture } = files
        return this.catsService.createNewCat(catDto, picture[0])
    }

    @Get('/getall')
    getAll() {
        return this.catsService.getAllCats()
    }

    @Get(':id')
    getOne(@Param('id') id: ObjectId) {
        return this.catsService.getOne(id)
    }

    @Patch(':id')
    updCat(@Param('id') id: ObjectId, @Body() catDto: CatsDto) {
        return this.catsService.updCat(id, catDto)
    }

    @Get('/search')
    search(@Query('query') query: string) { 
        return this.catsService.search(query)
    }

    @Delete(':id')
    delCat(@Param('id') id: ObjectId) {
        return this.catsService.delCat(id)
    }

}
