import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { environment } from '@frontend/environments/environment';
import { Turn } from '../../models/turn.model';

@Injectable({ providedIn: 'root' })
export class QueueService {

    constructor(private http: HttpClient) {

    }

    getAll() {
        return this.http.get<any>(`${environment.apiUrl}/queue`);
    }

    nextTurn(turn: Turn) {
        return this.http.post<any>(`${environment.apiUrl}/queue/${turn.id}/next-turns`, turn);
    }
}