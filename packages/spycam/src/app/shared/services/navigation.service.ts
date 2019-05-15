import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface IMenuItem {
    id?: string;
    title?: string;
    description?: string;
    type: string;       // Possible values: link/dropDown/extLink
    name?: string;      // Used as display text for item and title for separator type
    state?: string;     // Router state
    icon?: string;      // Material icon name
    tooltip?: string;   // Tooltip text
    disabled?: boolean; // If true, item will not be appeared in sidenav.
    sub?: IChildItem[]; // Dropdown items
    badges?: IBadge[];
    active?: boolean;
}
export interface IChildItem {
    id?: string;
    parentId?: string;
    type?: string;
    name: string;       // Display text
    state?: string;     // Router state
    icon?: string;
    sub?: IChildItem[];
    active?: boolean;
}

interface IBadge {
    color: string;      // primary/accent/warn/hex color codes(#fff000)
    value: string;      // Display text
}

interface ISidebarState {
    sidenavOpen?: boolean;
    childnavOpen?: boolean;
}

@Injectable({
    providedIn: 'root'
})
export class NavigationService {
    sidebarState: ISidebarState = {
        sidenavOpen: true,
        childnavOpen: false
    };
    constructor() {
    }

    defaultMenu: IMenuItem[] = [
        {
            name: 'Dashboard',
            description: 'Victor te quiero <3.',
            type: 'dropDown',
            icon: 'i-Favorite-Window',
            sub: [
                { icon: 'i-Clock-3', name: 'Version 1', state: '/dashboard/v1', type: 'link' },
                { icon: 'i-Clock-4', name: 'Version 2', state: '/dashboard/v2', type: 'link' },
                { icon: 'i-Over-Time', name: 'Version 3', state: '/dashboard/v3', type: 'link' },
                { icon: 'i-Clock', name: 'Version 4', state: '/dashboard/v4', type: 'link' },
            ]
        },
        {
            name: 'Autorizaciones',
            description: 'Manejo de autorizaciones',
            type: 'dropDown',
            icon: 'i-Lock-2',
            sub: [
                { icon: 'i-Business-Mens', name: 'Administrador de Roles', state: '/authManagement/role-control', type: 'link' },
                { icon: 'i-Business-Mens', name: 'Detalle de Productos', state: '/authManagement/detail-role', type: 'extLink' },
                { icon: 'i-Administrator', name: 'Administrador de Usuarios', state: '/authManagement/user-control', type: 'link' },
            ]
        },
        {
            name: 'Parametros',
            description: 'Gestion de parámetros',
            type: 'dropDown',
            icon: 'i-Globe',
            sub: [
                { icon: 'i-Dollar-Sign', name: 'Monedas $€', state: '/params/currencies', type: 'link' },
                { icon: 'i-Dollar-Sign', name: 'Precio $', state: '/params/dolar-price', type: 'extLink' },
                { icon: 'i-Dollar-Sign', name: 'Historic', state: '/params/c/:id/historic', type: 'extLink' },
                { icon: 'i-Tag', name: 'Etiqueta', state: '/params/tag', type: 'link' },
                { icon: 'i-Posterous', name: 'Categoria', state: '/params/category', type: 'link' },
                { icon: 'i-Gear', name: 'Configuracion', state: '/params/config', type: 'link' }
            ]
        },
        {
            name: 'Reportes',
            description: 'Gestion de reportes',
            type: 'dropDown',
            icon: 'i-Bar-Chart',
            sub: [
                { icon: 'i-Dollar-Sign', name: 'Gap', state: '/purchase/gap', type: 'link' },
                { icon: 'i-Receipt-4', name: 'Venta', state: '/purchase/sale', type: 'link' },
                { icon: 'i-Receipt-4', name: 'Variacion de precio-productos', state: '/purchase/product-price-variation', type: 'link' }
            ]
        },
        {
            name: 'Productos',
            description: 'Gestion de productos',
            type: 'dropDown',
            icon: 'i-Empty-Box',
            sub: [
                { icon: 'i-Split-Vertical-2', name: 'Maestro de Productos', state: '/products/master-product', type: 'link' },
                { icon: 'i-Split-Vertical-2', name: 'Detalle de Productos', state: '/products/detail-product', type: 'extLink' }
            ]
        }


    ];


    // sets iconMenu as default;
    menuItems = new BehaviorSubject<IMenuItem[]>(this.defaultMenu);
    // navigation component has subscribed to this Observable
    menuItems$ = this.menuItems.asObservable();

    // You can customize this method to supply different menu for
    // different user type.
    // publishNavigationChange(menuType: string) {
    //   switch (userType) {
    //     case 'admin':
    //       this.menuItems.next(this.adminMenu);
    //       break;
    //     case 'user':
    //       this.menuItems.next(this.userMenu);
    //       break;
    //     default:
    //       this.menuItems.next(this.defaultMenu);
    //   }
    // }
}
