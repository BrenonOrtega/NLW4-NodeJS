import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { User } from "../models/User";
import 'reflect-metadata';

class UserController {
    async create(request: Request, response: Response){
        const { name, email } = request.body;
        const usersRepo = getRepository(User);

        const userExists = await usersRepo.findOne({
            email
        });

        if (userExists) {
            return response.status(400).json({ 
                error: "User already exists!" 
            });
        }

        const user = await usersRepo.create({
            name, email
        });
        
        usersRepo.save(user);
        return response.status(200).json(user);
    }

    async retrieve(request: Request, response: Response) {
        const body = request.body;
        console.log(body);
        return response.send();        
    }
}

export { UserController };