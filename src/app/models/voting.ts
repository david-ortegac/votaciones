import { Time } from "@angular/common";
import { Apartment } from "./apartment";

export class Voting {
    id?: number;
    apartment?: Apartment;
    voting?: string;
    date?: Date;
    time?: Time
}
