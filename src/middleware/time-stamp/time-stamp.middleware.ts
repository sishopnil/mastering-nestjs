import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class TimeStampMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    const timestamp = new Date().toISOString();
    console.log(`Timestamp: ${timestamp}`);
    // next();
  }
}
