import { IDados } from "./IDados"

export interface IResponse {
    mensagem: string[],
    sucesso: boolean,
    dados: {
        dados: IDados
    }
}

export interface IRequestResponse {
    mensagem: string[],
    sucesso: boolean,
}