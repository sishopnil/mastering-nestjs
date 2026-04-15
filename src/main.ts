import { NestFactory, Reflector } from '@nestjs/core';
import { json } from 'express';
import { AppModule } from './app.module';
import { RequestDetailsMiddleware } from './middleware/request-details/request-details.middleware';
import { ValidationPipe } from '@nestjs/common';
import { AuthGuard } from './guards/auth/auth.guard';
import { RoleGuard } from './guards/role/role.guard';
import { UserService } from './services/user/user.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
    })
  );
  const reflector = app.get(Reflector);
  const userService = app.get(UserService);
  app.useGlobalGuards(new RoleGuard(reflector), new AuthGuard(userService));
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
