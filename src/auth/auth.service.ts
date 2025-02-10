import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  async register(dto: CreateUserDto) {
    return { message: 'User registered successfully' };
  }

  async login(user: any) {
    return { access_token: 'mocked-jwt-token' };
  }
}
