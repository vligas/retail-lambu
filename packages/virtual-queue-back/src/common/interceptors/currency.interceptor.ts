import { Injectable, NestInterceptor, ExecutionContext, Inject, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Request } from 'express';
import { Currency } from 'src/database/models/VAD10/currency/currency.entity';

export interface Response<T> {
  data: T;
}

@Injectable()
export class CurrencyInterceptor<T> implements NestInterceptor<T, T> {

  constructor(@Inject(Currency) private readonly currencyRepository: typeof Currency) { }

  async intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Promise<Observable<T>> {
    const req = context.switchToHttp().getRequest();
    console.log(req.query);
    if (req.query.currency) {
      const currency = await this.currencyRepository.findOne({ where: {id :req.query.currency} });
      req.currency = currency;
      delete req.query.currency;
    }

    return next.handle();
  }
}