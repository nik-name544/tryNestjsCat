import { ObjectId } from "mongoose"

export class CatsDto {
    id: ObjectId
    name: string
    collor: string
    imgSrc: string
}