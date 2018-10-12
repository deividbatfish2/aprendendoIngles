export class Coracao {
    constructor(public cheio: boolean,
        public urlCoracaoCheio: string = '/src/assets/coracao_cheio.png',
        public urlCoracaoVazio: string = '/src/assets/coracao_vazio.png'
    ) { }

    public exibeCoracao(): string {
        if (this.cheio) {
            return this.urlCoracaoCheio;
        }
        return this.urlCoracaoVazio;
    }
}
