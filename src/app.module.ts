import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsController } from './products/products.controller';
import { ProductsService } from './products/products.service';
import { ProductsModule } from './products/products.module';
import { AuthController } from './auth/auth.controller';
import { execPath } from 'process';
import { LoggingMiddleware } from './middleware/logging.middleware';
import { TokenMiddleware } from './middleware/token.middleware';
import { ContentTypeMiddleware } from './middleware/content-type/content-type.middleware';
import { convertMiddleware } from './middleware/convert.middleware';
import { TimeStampMiddleware } from './middleware/time-stamp/time-stamp.middleware';
import { RequestDetailsMiddleware } from './middleware/request-details/request-details.middleware';
import { UserService } from './services/user/user.service';
import { UserLoggingMiddleware } from './middleware/user-logging/user-logging.middleware';

@Module({
  imports: [ProductsModule],
  controllers: [AppController, ProductsController, AuthController],
  providers: [AppService, ProductsService, UserService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(UserLoggingMiddleware).forRoutes('*');
  }
}
