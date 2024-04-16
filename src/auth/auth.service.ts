import { ConflictException, Injectable, InternalServerErrorException, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schemas/user.schema';
import { Model } from 'mongoose';
import * as bcrypt from "bcryptjs"
import { JwtService } from '@nestjs/jwt';
import { SignUpDto } from './dto/signup.dto';
import { LoginDto } from './dto/login.dto';


@Injectable()
export class AuthService {
generateAccessToken(userWithoutPassword: { token: string; user: User; }) {
    throw new Error('Method not implemented.');
}
constructor(
@InjectModel(User.name)
private  userModel:Model<User>,
 private  jwtService:JwtService
){}




async signUP(signUpDto:SignUpDto):Promise<string>{


  //  console.log(signUpDto,"cvbb")
    try{
const {username,email,password,img,country,phone,desc,isSeller}=signUpDto
const hashedPassword=await bcrypt.hash(password,10)
const user = await this.userModel.create({

username,
email,
password:hashedPassword,
img,
country,
phone,
desc,
isSeller

})  

const token=this.jwtService.sign({id:user._id})

return   "SignUp Successfully";
}
catch(error){
    console.log(error.code)
    if (error.code == '11000') {
        throw new ConflictException('Duplicate data input')
    }
    else {
        throw new InternalServerErrorException();
    }   


}
 
}



// async login(loginDto: LoginDto): Promise<{ token: string; user: User }> {
//     const { username, password } = loginDto;
//     const user = await this.userModel.findOne({ username });

//     if (user && (await bcrypt.compare(password, user.password))) {
//         const token = this.jwtService.sign({ id: user._id });
//         return { token, user};
//     } else {
//         throw new UnauthorizedException('Invalid username or password');
//     }
// }

// }     ///needed to be resolved .....

async login (loginDto:LoginDto):Promise<{user:LoginDto}>
{    const {username,password}=loginDto;
    const  user = await this.userModel.findOne({username:username})
        
    if (user && (await bcrypt.compare(password, user.password))) {
        //const{password,...withoutPassword}=user
        const token = this.jwtService.sign({ id: user._id ,isSeller:user.isSeller});
        //res.cookie('token', token, { httpOnly: true });

        // const {name,_id,email}=user;
// const data :sendDataDto=user;

        return { user};
    } else {
        throw new UnauthorizedException('Invalid username or password');
    }}}


 
//     if(!user){
//         throw new  UnauthorizedException("Invalid email passworc")
//     }

//     const isPasswordMatched = await  bcrypt .compare(password,user.password)

// if(!isPasswordMatched){
// throw   new UnauthorizedException("Invalid email or password")
// }

// const token=this.jwtService.sign({id:user._id});
// return {token};



