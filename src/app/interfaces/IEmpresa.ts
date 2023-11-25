export interface IDataEmpresa {
    isExitoso: boolean;
    resultado: Empresa[];
    mensaje:   string;
}

export interface Empresa {
    id:             number;
    nombreCompania: string;
    direccion:      string;
    telefono:       string;
    telefono2:      string;
}