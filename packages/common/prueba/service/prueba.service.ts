import { Injectable } from '@nestjs/common';

@Injectable()
export class PruebaServiceOptions {
    public cadena: string;
}


// tslint:disable-next-line:max-classes-per-file
@Injectable()
export class PruebaService {
    constructor (public options: PruebaServiceOptions) {
    }

    log() {
        console.log(this.options.cadena);
    }
}