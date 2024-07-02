import { Body, Controller, Post } from '@nestjs/common';
import { UserDto } from './user.dto';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UserService) {}

    @Post()
    create(@Body() user: UserDto) {
        this.usersService.create(users);
    }
}
