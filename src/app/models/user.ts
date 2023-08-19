import { Rol } from "./rol";

export class User {
    id?: string;
    name?: string;
    email?: string;
    active?: boolean;
    rol?: Rol;
}
