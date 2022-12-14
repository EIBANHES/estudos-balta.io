import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
    selector: '[mask]', // <input [mask]="###.###.###-##"> -> mascara de CPF
})
export class MaskDirective {
    @Input('mask') mask: string; //recebe uma string, recebendo uma informações

    constructor(private element: ElementRef) { } //retorna o input

    @HostListener('input', ['$event']) onInputChange(event) { //@HostListener -> vai ficar ouvindo so o input quando o user digitar entre 0-9
        if (event.inputType == 'deleteContentBackward')//se  o user apertar o backspace, somente retorna, não faz nada
            return;

        const initalValue = this.element.nativeElement.value; //pega o valor inicial
        initalValue.replace(/[^0-9]*/g, ''); //tira todos os caracteres que não são de 0 a 9
        if (initalValue !== this.element.nativeElement.value) { //se o meu valor inicial for diferente do valor do elemento, o cpf esta correto, e para
            event.stopPropagation();  //cpf correto, stopa
        }

        this.element.nativeElement.value = this.format(this.mask, initalValue); //se nao estiver correto ele aplica a mascara no valor
    }

    format(mask: string, value: any): string {
        let text = '';
        let data = value;
        let c, m, i, x;

        for (i = 0, x = 1; x && i < mask.length; ++i) {
            c = data.charAt(i);
            m = mask.charAt(i);

            switch (mask.charAt(i)) {
                case '#':
                    if (/\d/.test(c)) {
                        text += c;
                    } else {
                        x = 0;
                    }
                    break;

                case 'A':
                    if (/[a-z]/i.test(c)) {
                        text += c;
                    } else {
                        x = 0;

                    }
                    break;

                case 'N':
                    if (/[a-z0-9]/i.test(c)) {
                        text += c;
                    } else {
                        x = 0;
                    }
                    break;

                case 'X':
                    text += c;
                    break;

                default:
                    text += m;
                    break;
            }
        }
        return text;
    }
}