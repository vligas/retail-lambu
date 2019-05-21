export interface HttpOptions {
    method: 'GET' | 'PUT' | 'POST' | 'DELETE';
    endpoint: string;
    body?: any;
    headers?: {
        [key: string]: string
    };
}