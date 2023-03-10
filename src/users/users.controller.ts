import { Controller, Get, Param, Post, Body, Put,Delete } from '@nestjs/common';
import { User } from './users.interface';

@Controller('users')
export class UsersController {
   users: User[] = [
    {
      "uuid": "1",
      "nombre": "Juan",
      "apellido": "Pérez",
      "email": "juan.perez@example.com"
    },
    {
      "uuid": "2",
      "nombre": "María",
      "apellido": "García",
      "email": "maria.garcia@example.com",
    },
    {
      "uuid": "3",
      "nombre": "Pedro",
      "apellido": "Rodríguez",
      "email": "pedro.rodriguez@example.com"
    },
  ];
  
  @Get()
  getAll(): User[] {
    return this.users;
  }
  
  @Get(':uuid')
  getUser(@Param('uuid') uuid: string): User | undefined {
    return this.users.find(user => user.uuid === uuid);
  }

  @Post('user')
  createUser(@Body() userData: User) {
    const user: User = {
      uuid: userData.uuid,
      nombre: userData.nombre,
      apellido: userData.apellido,
      email: userData.email
    };
    this.users.push(user);
    return user;
  }
  @Put(':uuid')
  updateUser(@Param('uuid') uuid: string, @Body() userData: User): User {
    const userIndex = this.users.findIndex(user => user.uuid === uuid);
    const updatedUser: User = {
      uuid: uuid,
      nombre: userData.nombre,
      apellido: userData.apellido ?? this.users[userIndex].apellido,
      email: userData.email ?? this.users[userIndex].email,
    };
    this.users[userIndex] = updatedUser;
    return updatedUser;
  }
  @Delete(':uuid')
  deleteUser(@Param('uuid') uuid: string) {
    const userIndex = this.users.findIndex(user => user.uuid === uuid);
    this.users.splice(userIndex, 1);
    return true;
  }
}