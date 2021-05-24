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
exports.CatsController = void 0;
const common_1 = require("@nestjs/common");
const cats_service_1 = require("./cats.service");
const cats_dto_1 = require("./dto/cats.dto");
const platform_express_1 = require("@nestjs/platform-express");
let CatsController = class CatsController {
    constructor(catsService) {
        this.catsService = catsService;
    }
    createNewCat(files, catDto) {
        const { picture } = files;
        return this.catsService.createNewCat(catDto, picture[0]);
    }
    getAll() {
        return this.catsService.getAllCats();
    }
    getOne(id) {
        return this.catsService.getOne(id);
    }
    updCat(id, catDto) {
        return this.catsService.updCat(id, catDto);
    }
    search(query) {
        return this.catsService.search(query);
    }
    delCat(id) {
        return this.catsService.delCat(id);
    }
};
__decorate([
    common_1.Post('/create'),
    common_1.UseInterceptors(platform_express_1.FileFieldsInterceptor([
        { name: "picture", maxCount: 1 }
    ])),
    __param(0, common_1.UploadedFiles()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, cats_dto_1.CatsDto]),
    __metadata("design:returntype", void 0)
], CatsController.prototype, "createNewCat", null);
__decorate([
    common_1.Get('/getall'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CatsController.prototype, "getAll", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], CatsController.prototype, "getOne", null);
__decorate([
    common_1.Patch(':id'),
    __param(0, common_1.Param('id')), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, cats_dto_1.CatsDto]),
    __metadata("design:returntype", void 0)
], CatsController.prototype, "updCat", null);
__decorate([
    common_1.Get('/search'),
    __param(0, common_1.Query('query')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CatsController.prototype, "search", null);
__decorate([
    common_1.Delete(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], CatsController.prototype, "delCat", null);
CatsController = __decorate([
    common_1.Controller('cats'),
    __metadata("design:paramtypes", [cats_service_1.CatsService])
], CatsController);
exports.CatsController = CatsController;
//# sourceMappingURL=cats.controller.js.map