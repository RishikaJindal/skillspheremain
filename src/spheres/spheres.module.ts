import { Module } from '@nestjs/common';
import { SpheresController } from './spheres.controller';
import { SpheresService } from './spheres.service';
import { MongooseModule } from '@nestjs/mongoose';
import { SphereSchema } from './schemas/spheres.schema';

@Module({
   imports:[
    MongooseModule.forFeature([{name:'Sphere',schema:SphereSchema}]),
  ],
  controllers: [SpheresController],
  providers: [SpheresService]
})
export class SpheresModule {}
