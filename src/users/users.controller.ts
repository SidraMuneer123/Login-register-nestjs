import { Controller, Post, Body } from '@nestjs/common';
import { UsersService } from './users.service';
import { AuthService } from '../auth/auth.service';


@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService,
    private readonly authService: AuthService

  ) {}

  @Post('register')
  async register(@Body() body: { email: string, password: string }) {
    return this.usersService.register(body.email, body.password);
  }
  @Post('login')
  async login(@Body() body: { email: string, password: string }) {
    const user = await this.authService.validateUser(body.email, body.password);
    if (!user) {
      return { message: 'Invalid data' };
    }
    return this.authService.login(user);
  }

}
