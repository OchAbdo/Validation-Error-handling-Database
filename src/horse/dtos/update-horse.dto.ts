import { IsInt, IsOptional, IsString, Max, Min } from "class-validator"

export class UpadateHorse{

    @IsString()
    @IsOptional()
    name : string 

    @IsInt()
    @IsOptional()
    @Min(1)
    @Max(40)
    age : number
}