import { IsNotEmpty, IsEmail, IsString, MaxLength, MinLength, IsAlphanumeric } from "class-validator";

export class UserDTO {

    @IsString()
    @IsNotEmpty()
    @MaxLength(20, { message: 'Name must be less than 20 characters' })
    readonly name: string;

    // @IsEmail()
    // @IsNotEmpty()
    // readonly email: string;

    @IsAlphanumeric()
    @MinLength(8, { message: 'Password must be at least 8 characters' })
    @MaxLength(20, { message: 'Password must be less than 20 characters' })
    password: string;

    readonly createdAt?: string;
}