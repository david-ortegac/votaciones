import Rol from "./rol";

export default interface User {
    id?: string;
    name?: string;
    email?: string;
    active?: boolean;
    rol?: Rol;
}
