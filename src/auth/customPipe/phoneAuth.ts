import { ArgumentMetadata, Injectable, PipeTransform } from "@nestjs/common";

@Injectable()
export class PhoneAuth implements PipeTransform {
    transform(value: any) {
        const phoneNumber  = String(value.phone);
        const regex = /^\d{10,11}$/; 

        if (!regex.test(phoneNumber)) {
            throw new Error('Invalid phone number format. It should be 10 or 11 digits.');
        }

        return value;
    }
}