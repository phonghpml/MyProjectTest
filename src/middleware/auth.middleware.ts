import { Injectable, NestMiddleware } from '@nestjs/common'
import { NextFunction } from 'express'
import { AuthService } from 'src/module/auth/auth.service'
@Injectable()
export class AuthMiddleware implements NestMiddleware {
  constructor(
    // private userService: UserService,
    private authService: AuthService
  ) {}

  use(req: Request, res: Response, next: NextFunction) {
    // const body = req.body
    // const data = JSON.stringify(body)
    // const dataResult = JSON.parse(data)
    // console.log(dataResult)
    // this.authService.validateUser(dataResult.user, dataResult.password)
    next()
  }
}
