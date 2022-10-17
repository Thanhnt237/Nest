import { IsEmail, IsNotEmpty } from "class-validator";

export class FindByIDDto{
  @IsNotEmpty()
  readonly ID: string
}

export class FindByEmail{
  @IsNotEmpty()
  @IsEmail()
  readonly email: string
}