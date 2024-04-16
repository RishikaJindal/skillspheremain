

import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";



@Schema({
timestamps:true
})

export class Gig{


@Prop({required:true})
title:string


@Prop()
desc:string


@Prop({default:0})
totalstars:number


@Prop({default:0})
startNumber:number


@Prop({required:true})
cat:string


@Prop({require:true})
price:number


@Prop({required:false})
cover:string



@Prop({required:false})
images:[string]


@Prop({required:false})
userId:string


@Prop({required:true})
shortTitle:string


@Prop({required:true})
shortDesc:string


@Prop({required:true})
revisionNumber:number



@Prop({required:true})
deliveryTime:number



@Prop({required:false})
features:[string]


@Prop({required:true})
sales:number




}
export const  GigSchema=SchemaFactory.createForClass(Gig);
