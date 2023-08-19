import Owners from "./owners";

export default interface Apartment {
    id?: string;
    towel?: number;
    apartment?: number;
    status?: boolean;
    owner?: Owners;
}
