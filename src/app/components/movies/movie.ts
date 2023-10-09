import { Time } from "@angular/common";

export interface IMovie{
    id:number;
    title:string;
    description?: string;
    year:number;
    imageUrl:string;
    duration:Time;
    isCurrent:boolean;
    genres?:string[];
}