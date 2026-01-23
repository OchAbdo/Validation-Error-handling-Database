import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Horse } from './horse.entity';
import { Repository } from 'typeorm';

@Injectable()
export class HorseService {
    constructor( @InjectRepository(Horse) private repo : Repository<Horse> ){}

    async createhorse(name : string , age : number){
        const horse = await this.repo.create({name , age})
        return this.repo.save(horse)
    }

    findOne(id : number){
        return this.repo.findOneBy({id})
    }

    find(name : string){
        return this.repo.find({where : {name}})
    }

    findall (){
        return this.repo.find() 
    }

    async update(id : number , uphorse : Partial<Horse>){
        const horse = await this.findOne(id)
        if(!horse){
            throw new NotFoundException(`the horse with id ${id} not found !`)
        }
        Object.assign(horse , uphorse)
        
        return this.repo.save(horse)
    }

    async remove(id : number){
        const horse = await this.findOne(id)
        if (! horse) {
            throw new NotFoundException(`the horse with id ${id} not found !`)
        }
        return this.repo.remove(horse)
    }


}
