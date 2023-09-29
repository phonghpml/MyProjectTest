import { Injectable, NestMiddleware } from '@nestjs/common'
import { NextFunction } from 'express'
import { AuthService } from 'src/module/auth/auth.service'
@Injectable()
export class AuthMiddleware implements NestMiddleware {
  constructor(
    private authService: AuthService
  ) { }

  use(req: Request, res: Response, next: NextFunction) {
    next()
  }
}
