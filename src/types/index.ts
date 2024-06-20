export interface Person {
    id : number,
    name : string,
    age: number,
    x? : number
}

export type Persons = Array<Person>