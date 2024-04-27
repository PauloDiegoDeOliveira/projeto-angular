import { Status } from "../enums/EStatus"
import { IDados } from "./IDados"
import { IResponse } from "./IResponse"

export interface IPermissoes {
    id: string,
    nome: string,
    observacao: string,
    status: Status,
}

export interface IPermissoesResponse extends IResponse {
    dados: {
        dados: IDados,
        lyceum: boolean,
        pagina: IPermissoes[]
    }
}

interface IPermissao {
    Administrador: string[];
    Operador: string[];
    Mec: string[];
}

export const permissao: IPermissao = {
    Administrador: ['Administrador'],
    Operador: ['Operador', 'Administrador'],
    Mec: ['Mec', 'Operador', 'Administrador']
};