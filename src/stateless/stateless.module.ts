import { Module } from '@nestjs/common';
import { StatelessController } from './stateless.controller';
import { StatelessService } from './stateless.service';
import { UsersModule } from '@/users/users.module';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './passport/stateless.local.strategy';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { JwtStrategy } from './passport/stateless.jwt.strategy';

import ms from 'ms';
@Module({
  controllers: [StatelessController],
  providers: [StatelessService, LocalStrategy, JwtStrategy, JwtService],
  imports: [
    UsersModule,
    PassportModule,
    // JwtModule.({
    //   secret: jwtConstants.secret,
    //   signOptions: { expiresIn: '60s' },
    // }),
    JwtModule.registerAsync({
      useFactory: async (configService: ConfigService) => ({
        secret: configService.get<string>('JWT_ACCESS_TOKEN_SECRET'),
        signOptions: {
          expiresIn: ms(configService.get<string>('JWT_ACCESS_EXPIRED_IN')),
        },
      }),
      inject: [ConfigService],
    }),
  ],
  exports: [JwtService],
})
export class StatelessModule {}
