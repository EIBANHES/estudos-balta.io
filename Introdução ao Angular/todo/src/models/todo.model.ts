//definindo uma classe publica no ts
export class Todo{
    //criando um metodo construtor
    /**
     *
     */
    constructor(
        //     atr: type
        public id: Number,
        public title: String,
        public done: boolean,
    ) {}
}