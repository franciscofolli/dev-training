// we will use below a mapped-type transformer installed using npm i --save @nestjs/mapped-types
import { PartialType } from "@nestjs/mapped-types"
import { CreateCourseDto } from "./create-course-dto";

// the tool above is used to don't repeat the same code everytime we need
export class UpdateCourseDto extends PartialType(CreateCourseDto) { }
