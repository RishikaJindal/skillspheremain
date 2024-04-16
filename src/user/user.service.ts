import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/auth/schemas/user.schema';

@Injectable()
export class UserService {
constructor(
@InjectModel(User.name)
private  userModel:Model<User>,
){}

async getUsers(): Promise<User[]> {
    try {
        const users = await this.userModel.find().exec();
        return users;
    } catch (error) {
        // Handle error
        throw new Error('Failed to get users');
    }
}
}






