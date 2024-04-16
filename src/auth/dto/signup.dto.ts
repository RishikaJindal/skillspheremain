


import { IsEmail, IsNotEmpty, IsOptional, IsString, MinLength } from "class-validator";

export class SignUpDto {



  @IsNotEmpty()
  @IsString()
  readonly username: string;

  @IsNotEmpty()
  @IsEmail({}, { message: "Please enter a correct email" })
  readonly email: string;

  @IsNotEmpty()
  @IsString()
  readonly password: string;



  @IsOptional()
  @IsString()
  readonly img:string

  
  
  @IsNotEmpty()
  @IsString()
  readonly country: string; // Making country field optional

  @IsOptional()
  readonly isSeller: boolean;

  @IsOptional()
  @IsString()
  readonly phone: number

  @IsOptional()
  @IsString()
  readonly desc: string;
}














// import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator";



// export class SignUpDto{

// // @IsNotEmpty()
// @IsString()
// readonly name:string;



// @IsNotEmpty()
//   @IsEmail({},{message:"please enter correct email"})  
// readonly  email:string;




// @IsNotEmpty()
//   @IsString()  
//   @MinLength(4)
// readonly password:string;



// }