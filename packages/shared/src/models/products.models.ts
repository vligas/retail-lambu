import { ResponseProductDto, ResponseSimpleProductDto } from '../dto';

export type Product = ResponseProductDto;
export type SimpleProductDto = ResponseSimpleProductDto['products'][0];
