/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import { Course } from './entities/course.entity';

@Injectable()
export class CoursesService {
    private courses: Course[] = [
        {
            id: 1,
            name: "Fundamentos framework NestJS",
            description: "Fundamentos framework NestJS",
            tags: ["nodejs","nestjs","javascript","typescript"]
        }
    ];

    create(createCourseDto: any){
        this.courses.push(createCourseDto);
    }

    
    findAll(){
        return this.courses;
    }

    findOne(id: number){
        return this.courses.find((course: Course) => course.id === id)
    }

    
    update(id: number, updateCourseDto: any){
        const courseIndex: number = this.courses.findIndex(course => course.id === id);
        this.courses[courseIndex] = updateCourseDto;
    }

    
    remove(id: number){
        const courseIndex: number = this.courses.findIndex(course => course.id === id);

        if(courseIndex >= 0) {
            this.courses.splice(courseIndex, 1);
        }
    }
    


}
