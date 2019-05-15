import { Inject } from '@nestjs/common';
import { SeedInterface } from 'src/common/interfaces/seedInterface.interface';
import { Tag } from 'src/database/models/VAD10/tag/tag.entity';
import * as faker from 'faker/locale/es';

export default class TagSeeder implements SeedInterface {
    constructor(@Inject(Tag) private tagRepository: typeof Tag) { }

    async run() {

        for (let i = 0; i < 10; i++) {
            try {
                await this.tagRepository.create({
                    name: faker.commerce.department()
                });
            }
            catch (e) {
                i--;
            }
        }
    }
}