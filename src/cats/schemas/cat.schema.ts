import { Prop, SchemaFactory, Schema } from "@nestjs/mongoose";
import { Document } from "mongoose"; 
  
export type CatDocument = Cat & Document

@Schema()
export class Cat {
    @Prop()
    name: string

    @Prop()
    collor: string

    @Prop()
    imgSrc: string

}

export const CatSchema = SchemaFactory.createForClass(Cat)