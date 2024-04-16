import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema({
  timestamps: true
})
export class User {
 
 
 
    @Prop({unique:[true,'Username is not available'],required:[true,'username is  required ']})
  username: string;

  @Prop({ unique: [true, 'Email already exists'] ,required:[true,'email is required']})
  email: string;

  @Prop({required:[true,'password is required']})
  password: string;


  @Prop()
  img:string;


  @Prop({required:true})
  country: string;



  @Prop({default:false})
  isSeller: boolean;

  @Prop()
  phone: number;

  @Prop()
  desc: string;
}

export const UserSchema = SchemaFactory.createForClass(User);

























// import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";




// @Schema({
// timestamps:true


// })
// export class User{




//     @Prop()
//     name:string

// @Prop({unique : [true,'Duplicate email  enter']})
// email:string

// @Prop()
// password:string
// }



// export const UserSchema=SchemaFactory.createForClass(User);