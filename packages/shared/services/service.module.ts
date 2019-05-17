import { NgModule, ModuleWithProviders, InjectionToken } from "@angular/core";
import { Options } from 'selenium-webdriver';
import { ServiceOpts } from './service.service';
import { Service } from "./service.service";

// Re-export services, treating the module like a "barrel".
export { Service };
export { ServiceOpts };


@NgModule()
export class ServiceModule {

    static forRoot(options?: ModuleOptions): ModuleWithProviders {
        console.log("entre", options)
        return ({
            ngModule: ServiceModule,
            providers: [
                // {
                //     provide: FOR_ROOT_OPTIONS_TOKEN,
                //     useValue: options
                // },
                // {
                //     provide: ServiceOpts,
                //     useFactory: provideServiceOptions,
                //     deps: [FOR_ROOT_OPTIONS_TOKEN]
                // }
            ]
        });
    }
}

export interface ModuleOptions {
    apiUrl?: string;
}

export var FOR_ROOT_OPTIONS_TOKEN = new InjectionToken<ModuleOptions>("forRoot() Service configuration.");
export function provideServiceOptions(options?: ModuleOptions): ServiceOpts {
    console.log(options)
    var serviceOptions = new ServiceOpts();

    if (options) {
        if (typeof (options.apiUrl) === "string") {
            serviceOptions.apiUrl = options.apiUrl;
        }
    }

    return (serviceOptions);
}