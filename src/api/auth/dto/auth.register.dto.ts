import { ApiProperty } from "@nestjs/swagger";

export class AuthRegisterDto {
    @ApiProperty()
    username: string;

    @ApiProperty()
    password: string;
}