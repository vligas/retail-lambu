import { BranchOffice } from './branchOffice.entity';
import { Provider } from '@nestjs/common';

export const branchOfficeProviders: Provider[] = [
    {
        provide: BranchOffice,
        useValue: BranchOffice,
    }
];