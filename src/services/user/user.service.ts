import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { UserDTO } from 'src/auth/userDTO/user.dto';
import { Role } from 'src/enum/roles.enum';

@Injectable()
export class UserService {
    private readonly users = [
        {
            apiKey: 'userA101',
            name: 'John Doe',
            email: 'john.doe@example.com',
            password: 'password',
            createdAt: new Date().toISOString(),
            roles: [Role.ADMIN]
        },
        {
            apiKey: 'userA102',
            name: 'Jane Doe',
            email: 'jane.doe@example.com',
            password: 'password',
            createdAt: new Date().toISOString(),
            roles: [Role.USER]
        },
        {
            apiKey: 'userA103',
            name: 'Jim Doe',
            email: 'jim.doe@example.com',
            password: 'password',
            createdAt: new Date().toISOString(),
            roles: [Role.USER]
        }

    ];
    getUser(apiKey: string) {
        return this.users.find((user) => user.apiKey === apiKey);
    }
    getAllUsers() {
        return this.users;
    }

    addUser(user: any) {
        return this.users.push(user);
    }
    //  createUser(user: UserDTO) {
    //     this.users.push(user);
    //     return user;
    //  }
    //  updateUser(apiKey: string, user: UserDTO) {
    //     const userIndex = this.users.findIndex((user) => user.apiKey === apiKey);
    //     this.users[userIndex] = user;
    //     return user;
    //  }
}
