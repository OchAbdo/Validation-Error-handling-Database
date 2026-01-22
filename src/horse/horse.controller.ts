import { Body, Controller, Delete, Get, NotFoundException, Param, Patch, Post } from '@nestjs/common';
import { HorseService } from './horse.service';
import { CreateHorse } from './dtos/create-horse.dto';
import { UpadateHorse } from './dtos/update-horse.dto';

@Controller('horse')
export class HorseController {
  constructor(private readonly horseService: HorseService) {}

  @Get('/all')
  findAllHorse(){
    return this.horseService.findall()
  }

  @Post('/add')
  addHorse(@Body() body : CreateHorse){
      return this.horseService.createhorse(body.name , body.age)
  }

  @Get('/find/:id')
  async findbyid(@Param('id') id : string){
    const horse = await this.horseService.findOne(+id)

    if(!horse){
      throw new NotFoundException('this horse is not found !')
    }
    return horse
  }

  @Patch('/update/:id')
  updatehorse(@Param('id') id : string , @Body() newhorse : UpadateHorse ){
    return this.horseService.update(+id , newhorse)
  }

  @Delete('/remove/:id')
  removeHorse(@Param('id') id : string){
    return this.horseService.remove(+id)
  }

}
