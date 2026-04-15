import { CanActivate, ExecutionContext, ForbiddenException, Injectable, UnauthorizedException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';
import { Role } from 'src/enum/roles.enum';

@Injectable()
export class RoleGuard implements CanActivate {
  constructor(private reflector: Reflector) {}
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const role = this. reflector.get<Role[]>('roles', context.getHandler());

    if (!role) {
      return true;
    }

    const { user } = context.switchToHttp().getRequest();
    if (!user || !user.roles) {
      throw new ForbiddenException('You are not authorized to access this resource');
    }

    const hasRole = role.some((r) => user.roles.includes(r));

    if (!hasRole) {
      throw new ForbiddenException('Access denied');
    }

    return true;
  }
}
