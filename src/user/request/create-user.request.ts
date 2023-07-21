import { IsNotEmpty, IsString } from 'class-validator';

export class CreateUserRequest {
  @IsNotEmpty()
  @IsString()
  name: string;
}
