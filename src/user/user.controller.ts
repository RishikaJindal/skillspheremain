import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from 'src/auth/schemas/user.schema';

@Controller('user')
export class UserController {

    constructor( private userService:UserService){}


    @Get()
    async getUsers():Promise<User[] >{

    return await this .userService.getUsers();
    }
}
