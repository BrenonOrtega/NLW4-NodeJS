import { request, response } from 'express';
class UserController {
    async create(request: Request, response: Response){
        const body = request.body;

        return request.body
    }
}

export { UserController };