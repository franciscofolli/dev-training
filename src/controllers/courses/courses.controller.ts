import { Controller, Get, Req, Res } from '@nestjs/common';

// decorator that define the class as a controller for nestjs knowledge
// with this decorator, nestjs can call controller endpoints that haves requests decorators to declare the endpoints as below
@Controller('courses') // endpoint prefix
export class CoursesController {

    // the decorator below represents the type of request that will be received
    // and we can define a route name in each request as declared below
    // in this example the route is: courses/list 
    @Get('list')
    async findall(){
        return 'Listagem de cursos'
    }

}
