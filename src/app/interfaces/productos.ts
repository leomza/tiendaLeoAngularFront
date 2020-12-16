export interface Producto {
    _id: string;
    nombre: string;
    sku: string;
    precio: number;
    precio_oferta?: number;
    descripcion?: string;
    stock?: string;
    destacado?: boolean;
    estado?: "activo"|"no_activo";
    categoria : {
        _id: string;
        nombre: string;
        __v? : number
            };
    image_path?:string;
}

export interface ProductoPaginado {
        docs: Producto[];
        totalDocs: number;
        limit: number;
        totalPages: number;
        page: number;
        pagingCounter: number;
        hasPrevPage: boolean;
        hasNextPage: boolean;
        prevPage: number;
        nextPage: number
}