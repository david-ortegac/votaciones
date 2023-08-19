import { Questions } from './questions';
import { Time } from "@angular/common";
import { Apartment } from "./apartment";

export class Voting {
    id?: string;
    apartment?: Apartment;
    questions?: Questions;
    voting?: string;
    date?: Date;
    time?: Time
}
