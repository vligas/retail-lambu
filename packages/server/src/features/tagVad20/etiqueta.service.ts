import { Injectable, Inject } from '@nestjs/common';
import { Etiqueta } from 'src/database/models/VAD20/etiqueta/etiqueta.entity';

@Injectable()
export class EtiquetaService {
    constructor(
        @Inject(Etiqueta) private readonly etiquetaRepository: typeof Etiqueta,
    ) { }

    
    async all() {
        return await this.etiquetaRepository.findAll();
    }
}