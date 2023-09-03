import { IsNotEmpty, IsBoolean, IsArray, IsMongoId } from 'class-validator';
import mongoose from 'mongoose';

export class CreateRoleDto {
  @IsNotEmpty({ message: 'Name không được để trống' })
  name: string;

  @IsNotEmpty({ message: 'description không được để trống' })
  description: string;

  @IsNotEmpty({ message: 'isActive không được để trống' })
  @IsBoolean({ message: 'IsActive có định dạng là boolean' })
  isActive: Boolean;

  @IsNotEmpty({ message: 'permissions không được để trống' })
  @IsMongoId({ each: true, message: 'each permissions là mongo object id' })
  @IsArray({ message: 'permissions có định dạng là array' })
  permissions: mongoose.Schema.Types.ObjectId[];
}
