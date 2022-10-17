import { PipeTransform, Injectable, ArgumentMetadata, BadRequestException } from '@nestjs/common';

@Injectable()
export class ParseArrayPipe implements PipeTransform<string, number> {
  transform(value: string, metadata: ArgumentMetadata): number {
    return
  }
}