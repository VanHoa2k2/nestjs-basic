import {
  Controller,
  Get,
  Post,
  Render,
  Req,
  Request,
  Res,
  UseGuards,
} from '@nestjs/common';
import { AppService } from './app.service';
import { UsersService } from './users/users.service';
// import { LocalAuthGuard } from '@/stateful/passport/stateful.local.auth.guard';
import { LocalAuthGuard } from './auth/local-auth.guard';
// import { Request, Response } from 'express';
import { AuthenticatedGuard } from './stateful/passport/stateful.local.authenticated.guard';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth/auth.service';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { Public } from './decorator/customize';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly usersService: UsersService,
    private authService: AuthService,
  ) {}

  // @UseGuards(AuthenticatedGuard)
  // @Render('user')
  // @Get('/user')
  // async getUserPage() {
  //   const usersList = await this.usersService.findAll();
  //   return { users: usersList };
  // }

  // async handleLoginStateful(@Req() req: Request, @Res() res: Response) {
  //   // return res.redirect('/');
  //   return 'van hoa';
  // }

  // @Post('logout')
  // logout(@Req() req: Request, @Res() res: Response) {
  //   /* destroys user session */
  //   req.session.destroy(function (err) {
  //     if (err) console.log(err);
  //     return res.redirect('/');
  //   });
  // }
}
