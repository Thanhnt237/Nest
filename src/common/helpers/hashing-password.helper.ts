import * as bcrypt from 'bcrypt';
import { HttpException } from "@nestjs/common";

export async function hashingPassword(password: any, saltOrRounds: any = 10): Promise<string>{
  return await bcrypt.hash(password, saltOrRounds);
}

export async function checkComparePassword(password: any, hash: any): Promise<any>{
  console.log(password, hash)
  return await bcrypt.compare(password, hash);
}
