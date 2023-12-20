//Creating type alias
type Person = {
    fullName: string,
    age: number,
    place: string,
    race?: string    //Optional property is denoted with ? 
}

type Profession = {
    job: string
}

type LinkedIn = Person & Profession  //Combining 2 types

function printPerson(person: Person):string{
    return `Hi ,name: ${person.fullName} and I'm ${person.age} and i'm from ${person.place}`
}

function printLinkedin(person: LinkedIn):string{
    return `Hi ,name: ${person.fullName} and I'm ${person.age} and i'm from ${person.place}`
}

printPerson({
    fullName: "Abhishek Shukla",
    age: 24,
    place: "Montreal"
})
printLinkedin({
    fullName: "Abhishek Shukla",
    age: 24,
    place: "Montreal",
    job: "SE"
})

