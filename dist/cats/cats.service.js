"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CatsService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const cat_schema_1 = require("./schemas/cat.schema");
const mongoose_2 = require("mongoose");
const file_service_1 = require("../file/file.service");
let CatsService = class CatsService {
    constructor(catModel, fileService) {
        this.catModel = catModel;
        this.fileService = fileService;
    }
    async createNewCat(catDto, picture) {
        const picturePath = this.fileService.createFile(file_service_1.FileType.IMAGE, picture);
        const cat = await this.catModel.create(Object.assign(Object.assign({}, catDto), { picture: picturePath }));
        return cat;
    }
    async getAllCats() {
        const cats = await this.catModel.find();
        return cats;
    }
    async getOne(id) {
        const cat = await this.catModel.findById(id);
        return cat;
    }
    async updCat(id, catDto) {
        const cat = await this.catModel.findById(id);
        cat.name = catDto.name || cat.name;
        cat.collor = catDto.collor || cat.collor;
        await cat.save();
        return cat;
    }
    async search(query) {
        const cats = await this.catModel.find({
            name: { $regex: new RegExp(query, 'i') }
        });
        return cats;
    }
    async delCat(id) {
        const cat = await this.catModel.findByIdAndDelete(id);
        return cat._id;
    }
};
CatsService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel(cat_schema_1.Cat.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        file_service_1.FileService])
], CatsService);
exports.CatsService = CatsService;
//# sourceMappingURL=cats.service.js.map