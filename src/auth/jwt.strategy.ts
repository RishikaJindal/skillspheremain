import { Injectable, UnauthorizedException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy,ExtractJwt } from "passport-jwt";
import { User } from "./schemas/user.schema";
import { Model } from "mongoose";
import {Request} from  'express';


@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy){
//static extractJWTFromCookie: any;
constructor(
    @InjectModel(User.name)
    private userModel:Model<User>)
    {
super({

    jwtFromRequest:ExtractJwt.fromExtractors(
        [
            JwtStrategy.extractJWTFromCookie,   
        ]
    ),
    ignoreExpiration:false,
    secretOrKey:process.env.JWT_SECRET


});


}


 
async validate(payload){

const {id,isSeller}=payload;
const user= await this.userModel.findById(id);

if(!user){

    throw new UnauthorizedException("Login first to access this  endpoint ")
}
user.isSeller=isSeller;
return user;

}



private static extractJWTFromCookie(req:Request):string|null{

if(req.cookies&&req.cookies.access_token){
    console.log(req.cookies.access_token);

    return req.cookies.access_token;

}
return null;    
}


}
