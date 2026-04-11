import { IsAlphanumeric, IsEmail, IsNumber, IsOptional } from "class-validator";

export class AuthDto {
    @IsEmail()
    email: string | undefined;

    @IsAlphanumeric()
    name: string | undefined;

    @IsOptional()
    @IsNumber()
    phone: number | undefined;

}
