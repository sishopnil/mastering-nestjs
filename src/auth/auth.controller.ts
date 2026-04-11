import { Body, Controller, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { PhoneAuth } from './customPipe/phoneAuth';
import { register } from 'module';
import { AuthDto } from './authDto';

@Controller('auth')
export class AuthController {
    @Post('register')
    @UsePipes(ValidationPipe, PhoneAuth)
    registerUser(@Body() userData: AuthDto) {
        return {
            data: userData
        }
    }
}

