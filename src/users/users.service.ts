import { ConflictException, Injectable } from '@nestjs/common';
import { UserDto } from './user.dto';
import { v4 as uuid } from 'uuid';
import { hashSync as bcryptHashSync } from 'bcrypt';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from 'src/db/entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {

    constructor(
        @InjectRepository(UserEntity)
        private readonly usersRepository: Repository<UserEntity>
    ) { }

    private readonly users: UserDto[] = []

    async create(newUser: UserDto) {
        const userAlreadyRegistered = await this.findByUserName(newUser.username);

        if (userAlreadyRegistered) {
                throw new ConflictException(`User '${newUser.username}' already registered.`)
        }

        const dbUser

        const {id, username} = await this.usersRepository.save();
    }



    async findByUserName(username: string): Promise<UserDto | null> {
        const userFound = await this.usersRepository.findOne({
            where: { username }
        })

        if (!userFound) {
            null;
        }

        return {
            id: userFound.id,
            username: userFound.username,
            password: userFound.passwordHash
        }
    }
}
