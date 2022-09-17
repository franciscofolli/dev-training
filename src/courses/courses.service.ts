/*
https://docs.nestjs.com/providers#services
*/

import { Injectable, NotFoundException } from '@nestjs/common';
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
        const course: Course = this.courses.find((course: Course) => course.id === Number(id));
        if(!course) { 
            throw new NotFoundException('Erro - Curso não encontrado')
        }
        return course;
    }

    
    update(id: number, updateCourseDto: any){
        const courseIndex: number = this.courses.findIndex(course => course.id === Number(id));
        this.courses[courseIndex] = updateCourseDto;
    }

    
    remove(id: number){
        const courseIndex: number = this.courses.findIndex(course => course.id === Number(id));

        if(courseIndex >= 0) {
            this.courses.splice(courseIndex, 1);
        }
    }
    


}
