import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CustomUnauthorizedException } from '../errors/custom-exceptions';
import serviceConfiguration from 'src/config/service-configuration';
import { Observable } from 'rxjs';

@Injectable()
export class JwtAuthGuard implements CanActivate {
  constructor(private jwtService: JwtService) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    const token = this.extractTokenFromHeader(request);

    if (!token) {
      throw new CustomUnauthorizedException('', '');
    }

    try {
      const payload = this.jwtService.verify(token, {
        secret: serviceConfiguration().auth.secret, // Reemplaza con tu secreto real
      });
      request['user'] = payload;
      return true;
    } catch {
      throw new CustomUnauthorizedException('', '');
    }
  }

  private extractTokenFromHeader(request: Request): string | undefined {
    const [type, token] = request.headers['authorization']?.split(' ') ?? [];
    return type === 'Bearer' ? token : undefined;
  }
}
