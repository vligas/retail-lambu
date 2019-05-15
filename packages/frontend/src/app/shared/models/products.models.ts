import { ResponseProductDto, ResponseSimpleProductDto } from '../dto/product.dto';

export type Product = ResponseProductDto;
export type SimpleProductDto = ResponseSimpleProductDto['products'][0];
