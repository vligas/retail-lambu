import { Title } from '@angular/platform-browser';

export class Utils {


    static isMobile() {
        return window && window.matchMedia('(max-width: 767px)').matches;
    }
    static ngbDateToDate(ngbDate: { month, day, year }) {
        if (!ngbDate) {
            return null;
        }
        return new Date(`${ngbDate.month}/${ngbDate.day}/${ngbDate.year}`);
    }
    static dateToNgbDate(date: Date) {
        if (!date) {
            return null;
        }
        date = new Date(date);
        return { month: date.getMonth() + 1, day: date.getDate(), year: date.getFullYear() };
    }
    static scrollToTop(selector: string) {
        if (document) {
            const element = document.querySelector(selector) as HTMLElement;
            element.scrollTop = 0;
        }
    }
    static genId() {
        let text = '';
        const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        for (let i = 0; i < 5; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        return text;
    }

    /**
     * This util build the http query
     * ex: httpQueryBuilder('foo/bar', {'q': 'foo', 'q2': 'bar'})
     * @string url 
     * @object params 
     */
    static httpQueryBuilder(url: string, params: {}) {

        if (Object.keys(params).length > 0) {
            const sParams = new URLSearchParams();
            Object.keys(params).map((key) => {
                sParams.append(key, params[key]);
            });

            url += `?${sParams.toString()}`;
        }
        return url;
    }

    static formatFilterObject(filter: { page?: number; pageSize?: number; where?: any }) {
        const result = {};
        result['filter.page'] = filter.page;
        result['filter.pageSize'] = filter.pageSize;

        for (const key in filter.where) {
            for (const op in filter.where[key]) {
                if (filter.where[key][op].trim() !== '') {
                    result[`filter.where.${key}.${op}`] = filter.where[key][op];
                }
            }
        }

        return result;
    }

    static isNullOrBlank(obj) {
        return (obj === null || obj === undefined || obj!.toString().trim() === '');
    }

    static dateMask = [/\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];

    static phoneMask = ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];

}
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export interface Toast {
    message: string;
    title: string;
    options: OptionToast;
}
export interface OptionToast {
    timeOut: number;
    closeButton: boolean;
    progressBar: boolean;
}