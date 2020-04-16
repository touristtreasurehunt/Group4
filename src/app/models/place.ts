import { Question } from './question';

export class Place {
    name: string;
    info: string;
    photo: string;
    geolocation: { lat: number, lng: number };
    questions: Array<Question>
}