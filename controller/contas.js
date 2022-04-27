export class Conta{

    constructor(login,senha){
        this.login = login
        this.senha = senha
    };
}
export const contas = [];
contas[0] = new Conta('rikinm', 'senha12');
contas[1] = new Conta('lerolero', 'lero123');
contas[2] = new Conta('mitsum', 'mikelly');