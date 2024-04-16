import { Module } from '@nestjs/common';
import { GigsService } from './gigs.service';
import { GigsController } from './gigs.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { GigSchema } from './schemas/gigs.schema';

@Module({


  imports:[
    MongooseModule.forFeature([{name:'Gig',schema:GigSchema}]),
  ],
  providers: [GigsService],
  controllers: [GigsController]
})
export class GigsModule {}
