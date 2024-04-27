export enum EStatus {
  Ativo = "Ativo",
  Inativo = "Inativo"
}

export type Status = 'Ativo' | 'Inativo';

export const status = Object.keys(EStatus).map((e: string) => { return { value: e, viewValue: EStatus[e as keyof typeof EStatus] } });
