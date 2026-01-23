import { Test, TestingModule } from '@nestjs/testing';
import { HorseService } from './horse.service';
import { Horse } from './horse.entity';
import { getRepositoryToken } from '@nestjs/typeorm';
import { NotFoundException } from '@nestjs/common';


describe('HorseService', () => {
  let service: HorseService;

  const mockRepository = {
    create: jest.fn(),
    save: jest.fn(),
    findOneBy: jest.fn(),
    find: jest.fn(),
    remove: jest.fn()
  }

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HorseService,
        {
          provide: getRepositoryToken(Horse),
          useValue: mockRepository
        }

      ],
    }).compile();

    service = module.get<HorseService>(HorseService);
  });

  afterEach(() =>{
    jest.clearAllMocks()
  })

  it('should be defined', () => {
    expect(service).toBeDefined();
  });


  it('should create a horse' , async() => {
    const horse = {name : 'lilo' , age : 6}

    mockRepository.create.mockResolvedValue(horse)
    mockRepository.save.mockResolvedValue(horse)

    const result = await service.createhorse('lilo' , 6)
    expect(result).toEqual(horse)

  })

  it('should find one horse by id' , async()=>{
    const horse = {id :1 , name:"lilo" , age:6}

    mockRepository.findOneBy.mockResolvedValue(horse)

    const result = await service.findOne(1);

    expect(result).toEqual(horse)

  })

    it('should find horses by name', async () => {
    const horses = [{ name: "misk", age: 7 }];

    mockRepository.find.mockResolvedValue(horses);

    const result = await service.find('misk');
    
    expect(result).toEqual(horses);
  });


  it('should return all horses', async () => {
    const horses = [{ name: 'misk', age: 7 } ,{ name: 'lilo', age: 6 }];

    mockRepository.find.mockResolvedValue(horses);

    const result = await service.findall();

    expect(result).toEqual(horses);
  });


    it('should update a horse', async () => {
    const horse = { id: 1, name: 'misk', age: 5 };

    mockRepository.findOneBy.mockResolvedValue(horse);
    mockRepository.save.mockResolvedValue({ ...horse, age: 7 });

    const result = await service.update(1, { age: 7 });

    expect(result.age).toBe(7);
  });

    it('should throw error if horse not found on update', async () => {
    mockRepository.findOneBy.mockResolvedValue(null);

    await expect(service.update(99, { age: 10 }))
      .rejects
      .toThrow(NotFoundException);
  });


    it('should remove a horse', async () => {
    const horse = { id: 1, name: 'nishmya', age: 5 };

    mockRepository.findOneBy.mockResolvedValue(horse);
    mockRepository.remove.mockResolvedValue(horse);

    const result = await service.remove(1);

    expect(result).toEqual(horse);
  });

    it('should throw error if horse not found on remove', async () => {
    mockRepository.findOneBy.mockResolvedValue(null);

    await expect(service.remove(99))
      .rejects
      .toThrow(NotFoundException);
  });

});





