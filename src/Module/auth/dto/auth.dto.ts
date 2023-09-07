import { ApiProperty } from "@nestjs/swagger";

export class getInfoUserDto {
    @ApiProperty()
    jwt: string
}