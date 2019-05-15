// import {ResponseAllBranchOfficeDto } from '@frontend/app/shared/dto/branchOffice.dto';
import { ResponseBranchOfficeDto } from '../dto/branchOffice.dto';
export type BranchCompetitor = ResponseBranchOfficeDto;
export type Branch = {
    name: string;
    location: string;
    competitorId: number;
};



