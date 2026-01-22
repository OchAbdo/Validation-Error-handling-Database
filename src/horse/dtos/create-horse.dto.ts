import { IsInt, IsString, Max, Min } from "class-validator"

export class CreateHorse{

    @IsString()
    name : string

    @IsInt()
    @Max(40)
    @Min(1) 
    age : number
}