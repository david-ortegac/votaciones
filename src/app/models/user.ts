import { Rol } from "./rol";

export class User {
    id?: number;
    name?: string;
    email?: string;
    active?: boolean;
    rol?: Rol;
}
