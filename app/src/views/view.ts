import { inspect } from '../decorators/inspect.js';
import { logarTempoDeExecucao } from '../decorators/logar-tempo-de-execucao.js';

export abstract class View<T> {
    protected elemento: HTMLElement;
    constructor(seletor: string) {
        const elemento = document.querySelector(seletor); 
        if (elemento) {
            this.elemento = elemento as HTMLInputElement;
        } else {
            throw new Error(`Seletor ${seletor} não existe no DOM`);
        }
    }

    @inspect
    @logarTempoDeExecucao(true)
    public update(model: T): void {
        this.elemento.innerHTML = this.template(model);
    }

    protected abstract template(model: T): string;
}
