import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: "root"
})

export class ServiceOpts {
    public apiUrl: string = ''
}


@Injectable({
    providedIn: "root"
})

export class Service {
    private options: ServiceOpts;

    constructor(private http: HttpClient, options: ServiceOpts) {
        this.options = options;
        console.group("Service Constructor");
        console.log("Injected options");
        console.log(this.options);
        console.groupEnd();
    }
}