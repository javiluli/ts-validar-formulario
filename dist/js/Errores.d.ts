declare class Errores {
    private _errores;
    constructor(errores: Array<string>);
    get errores(): string[];
    set errores(v: string[]);
    message(message: string | any): string;
}
