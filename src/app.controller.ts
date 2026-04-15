import { Body, Controller, Get, Param, Post, Query, Req, SetMetadata, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { UserDTO } from './auth/userDTO/user.dto';
import { UserService } from './services/user/user.service';
import { AuthGuard } from './guards/auth/auth.guard';
import { RoleGuard } from './guards/role/role.guard';
import { Roles } from './customDecorators/roles.decoretor';
import { Role } from './enum/roles.enum';

@Controller()
@UseGuards(AuthGuard)
export class AppController {
  constructor (private userService: UserService) {}

  @Get('user')
  @Roles(Role.USER)
  @UseGuards(RoleGuard)
  getUser(@Req() req: any) {  
    const data = req.user;
    const {apiKey, ...userData} = data;
    return `${data.name} data: ${JSON.stringify(userData, null, 2)}`;
  }


  @Post('create')
  @Roles(Role.ADMIN, Role.USER)
  @UseGuards(RoleGuard)
  create (@Body() userData: any) {
    this.userService.addUser(userData);
    return {
      message: 'User created successfully',
      data: userData
    }
  }
}
