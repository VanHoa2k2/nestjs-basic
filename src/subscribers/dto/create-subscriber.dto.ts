import { IsArray, IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateSubscriberDto {
  @IsNotEmpty({ message: 'Name không được để trống' })
  name: string;

  @IsEmail({}, { message: 'Email không đúng định dang' })
  @IsNotEmpty({ message: 'Name không được để trống' })
  email: string;

  @IsNotEmpty({ message: 'Name không được để trống' })
  @IsArray({ message: 'Skills có định dạng là array' })
  @IsString({ each: true, message: 'Skills định dạng là string' })
  skills: string[];
}
