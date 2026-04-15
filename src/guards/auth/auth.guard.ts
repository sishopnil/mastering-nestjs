import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { Observable } from 'rxjs';
import { UserService } from 'src/services/user/user.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private readonly userService: UserService) {}
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    
    const req = context.switchToHttp().getRequest(); 
    const apiKey = req.headers?.api_key;
    // const userAgent = req.headers['user-agent'];
    // console.log(userAgent);

    const user = this.userService.getUser(apiKey);
    if (!user) {
      throw new UnauthorizedException('Invalid API key');
    }

    req['user'] = user;

    return true;
  }
}
