import { ResponseProductDto, ResponseSimpleProductDto } from '../src/dto';

export type Product = ResponseProductDto;
export type SimpleProductDto = ResponseSimpleProductDto['products'][0];
