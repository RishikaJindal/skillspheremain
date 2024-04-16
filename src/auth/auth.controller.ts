import { AuthService } from './auth.service';
import { Body,Post,Controller, Get ,UseGuards,Res} from '@nestjs/common';
import { SignUpDto } from './dto/signup.dto';
import { LoginDto } from './dto/login.dto';
import { AuthGuard } from '@nestjs/passport';
import { Response } from 'express'

@Controller('auth')
export class AuthController {

constructor(private authService:AuthService){}


@Post('/signup')
signUp(@Body() signUpDto:SignUpDto):Promise<string>{
return this.authService.signUP(signUpDto)

}


// @Post('/login')
//     async login(@Body() loginDto: LoginDto, @Res({ passthrough: true }) res: Response): Promise<void> {
//         const user = await this.authService.login(loginDto);
//         if (user) {
//             // Omit the password field from the user object
//           //  const { password, ...userWithoutPassword } = user;
//             const access_token = await this.authService.generateAccessToken(userWithoutPassword);
//             res.cookie('access_token', access_token, {
//                 httpOnly: true,
//                 secure: false,
//                 expires: new Date(Date.now() + 365 * 24 * 60 * 1000),
//                 domain: 'localhost'
//             }).send({ status: "ok", access_token, user: userWithoutPassword });
//         } else {
//             res.status(401).send({ status: "error", message: "Invalid credentials" });
//         }
//     }    //needed to be resolved




 @Post('/login')
async login(@Body() loginDto:LoginDto,@Res({passthrough:true})res:Response):Promise<void>{
     const access_token= await this.authService.login(loginDto);
    
    res.cookie('access_token',access_token,{
httpOnly:true,
secure:false,
expires:new Date(Date.now()+365*24*60*1000),
domain :'localhost'

    }).send(access_token.user)

   // return this.authService.login(loginDto);
}



@Get('/logout')
logout(@Res({ passthrough: true }) res: Response): void {
    res.clearCookie('access_token').send({ status: "ok" });
}

// {__dirname,name,email,}=data


@Get('/test')
 //   @UseGuards(AuthGuard('jwt'))
    test(): string {
        return "Hello from Home"     
    }

}