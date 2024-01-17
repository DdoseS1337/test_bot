import { IsString, IsNotEmpty, IsOptional, IsDate } from "class-validator";

export class CreateUserDTO {
  @IsString()
  @IsNotEmpty()
  client_id!: string;

  @IsString()
  @IsNotEmpty()
  wallet_address!: string;

  @IsOptional()
  @IsDate()
  created_at?: Date;

  @IsOptional()
  @IsDate()
  updated_at?: Date;
}

