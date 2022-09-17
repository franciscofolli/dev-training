import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, Put, Req, Res } from '@nestjs/common';
import { CoursesService } from './courses.service';

// decorator that define the class as a controller for nestjs knowledge
// with this decorator, nestjs can call controller endpoints that haves requests decorators to declare the endpoints as below
@Controller('courses') // endpoint prefix
export class CoursesController {
    
    // using dependency injection to call my service through the class constructor  
    constructor(private readonly coursesService: CoursesService) {}


    // the decorator below represents the type of request that will be received
    // and we can define a route name in each request as declared below
    // in this example the route is: courses/list 
    @Get()
    async findall(@Res() response){
        return response.status(200).send(this.coursesService.findAll());
    }

    @Get(':id') // this ":" notation before param name is an declaration to nestjs that we need to get the dynamic parameter
    // with @Param decorator we can define the params that we need to receive and get they in a decorated attribute
    // declaring a property in @Param() decorator we can call only one parameter (destructuring)
    async findOne(@Param('id') id: number){
        return this.coursesService.findOne(id);
    }

    @Post()
    @HttpCode(HttpStatus.CREATED) 
    // declaring a property in @Body() decorator we can call only one parameter (destructuring)
    async create(@Body() body: any){
        return this.coursesService.create(body);
    }

    @Patch(':id')
    async update(@Param('id') id: number, @Body() body: any){
        return this.coursesService.update(id, body);
    }

    @Delete(':id')
    async remove(@Param('id') id: number){
        return this.coursesService.remove(id);
    }
}
