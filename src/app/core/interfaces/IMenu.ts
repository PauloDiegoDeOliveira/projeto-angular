import { IDados } from "./IDados"
import { IResponse } from "./IResponse"

export interface IMenuResponse extends IResponse {
    dados: {
        dados: IDados,
        pagina: IMenu[]
    }
}

export interface IMenu {
    id: string,
    nome: string,
    rota: string,
    icone: string,
    ordem: number,
    status: string,
    submenus: ISubmenu[]
}

export interface ISubmenu {
    id: string,
    menuId: string,
    nome: string,
    rota: string,
    icone: string,
    ordem: number,
    status: string
}