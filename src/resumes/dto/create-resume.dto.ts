import { Transform, Type } from 'class-transformer';
import { IsNotEmpty, IsMongoId } from 'class-validator';
import mongoose from 'mongoose';

export class CreateResumeDto {
  @IsNotEmpty({ message: 'email không được để trống' })
  email: string;

  @IsNotEmpty({ message: 'userId không được để trống' })
  userId: mongoose.Schema.Types.ObjectId;

  @IsNotEmpty({ message: 'url không được để trống' })
  url: string;

  @IsNotEmpty({ message: 'status không được để trống' })
  status: number;

  @IsNotEmpty({ message: 'companyId không được để trống' })
  companyId: mongoose.Schema.Types.ObjectId;

  @IsNotEmpty({ message: 'jobId không được để trống' })
  jobId: mongoose.Schema.Types.ObjectId;
}

export class CreateUserCvDto {
  @IsNotEmpty({ message: 'url không được để trống' })
  url: string;

  @IsNotEmpty({ message: 'companyId không được để trống' })
  @IsMongoId({ message: 'companyId is mongo id' })
  companyId: mongoose.Schema.Types.ObjectId;

  @IsNotEmpty({ message: 'jobId không được để trống' })
  @IsMongoId({ message: 'companyId is mongo id' })
  jobId: mongoose.Schema.Types.ObjectId;
}
