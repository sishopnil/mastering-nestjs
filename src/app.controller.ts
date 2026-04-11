import { Body, Controller, Get, Post, Req } from '@nestjs/common';
import { AppService } from './app.service';
import { UserDTO } from './auth/userDTO/user.dto';
import { UserService } from './services/user/user.service';

@Controller()
export class AppController {
  constructor(private readonly userService: UserService) {}

  @Post('create')
  async create(@Body() data: UserDTO) {
    return this.userService.createUser(data);
  }

  @Get('users')
  getUsers(): UserDTO[] {
    return this.userService.getAllUsers();
  }
}
