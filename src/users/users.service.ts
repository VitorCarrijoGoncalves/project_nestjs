import { Injectable } from '@nestjs/common';
import { UserDto } from './user.dto';

@Injectable()
export class UsersService {
    private readonly users: UserDto[] = [
        {
            id: '1',
            username: 'user',
            password: '12345678'
        }
    ]

    create(newUser: UserDto)
}
