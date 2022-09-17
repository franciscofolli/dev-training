import { IsString } from "class-validator";

// using class-validator below through decorator
export class CreateCourseDto {
    @IsString()
    readonly name: string;

    @IsString()
    readonly description: string;
    
    @IsString({each: true}) // validating each content of array below
    readonly tags: string[];
}

