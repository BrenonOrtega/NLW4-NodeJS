import { Column, Entity, PrimaryColumn } from "typeorm";
import {v4 as uuid} from 'uuid'
import 'reflect-metadata';


@Entity("users")
class User {
    
    @PrimaryColumn()
    readonly id: string;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    created_at: Date;

    constructor() {
        if (!this.id) this.id = uuid() 
    }
}

export { User };