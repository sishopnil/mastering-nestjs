import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { UserDTO } from 'src/auth/userDTO/user.dto';

@Injectable()
export class UserService {
    private users: UserDTO[] = [];

    async createUser(user: UserDTO) {
        const hashedPassword = await bcrypt.hash(user.password, 10);
        const newUser: UserDTO = {
            name: user.name,
            password: hashedPassword,
            createdAt: new Date().toISOString(),
        };
        this.users.push(newUser);
        return newUser;
    }

    getAllUsers() {
        return this.users;
    }
    
    // getUser(id: number) {
    //     return this.users.find((user) => user.id === id);
    // }
    
    // updateUser(id: number, user: UserDTO) {
    //     const userIndex = this.users.findIndex((user) => user.id === id);
    //     this.users[userIndex] = user;
    //     return user;
    // }
    
}
