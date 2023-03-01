import { ExecutionContext, Injectable, CanActivate } from '@nestjs/common';

@Injectable()
export class IsAdminGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getNext().req;
    const username: string | undefined = request.user?.username;

    return username === 'admin';
  }
}