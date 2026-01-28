import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  private readonly users: Array<CreateUserDto & { id: string }> = [];

  getAllUsers(role: string | undefined): object {
    let users: Array<CreateUserDto & { id: string }> = [];
    if (role) {
      users = this.users.filter((user) => user.role === role);
    } else {
      users = this.users;
    }
    return {
      data: users,
      message: 'Users fetched successfully',
      status: 'success',
      code: 200,
    };
  }
  createUser(createUserDto: CreateUserDto): object {
    const user = { id: String(this.users.length + 1), ...createUserDto };
    this.users.push(user);
    return {
      data: user,
      message: 'User created successfully',
      status: 'success',
      code: 201,
    };
  }
}
