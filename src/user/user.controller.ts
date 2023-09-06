import { 
    Controller, 
    Get, 
    Post, 
    Put, 
    Delete, 
    Param, 
    Body 
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './user.dto';
import { User } from './user.interface';


@Controller('user')
export class UserController {
    constructor(
        private readonly userService: UserService
    ) { }


    @Post()
    async create(@Body() createUserDto: CreateUserDto): Promise<User> {
        return await this.userService.create(createUserDto);
    }

    @Get()
    async findAll(): Promise<User[]> { 
        return await this.userService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: string): Promise<User>{
        return await this.userService.findOne(id);
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() updateUser: CreateUserDto): Promise<User>{
        return await this.userService.update(id, updateUser);
    }

    @Delete(':id')
    async delete(@Param('id') id: string): Promise<User>{
        return await this.userService.delete(id);
    }
}