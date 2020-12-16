export interface UsuarioWeb {
    nombre: string;
    apellido: string;
    telefono: string;
    email: string;
    password: string
}

export interface UsuarioWebLogin {
    email: string;
    token: string
}