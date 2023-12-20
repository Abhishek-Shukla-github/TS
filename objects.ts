//Creating type alias
type Person = {
    fullName: string,
    age: number,
    place: string
}

function printPerson(person: Person):string{
    return `Hi ,name: ${person.fullName} and I'm ${person.age} and i'm from ${person.place}`
}

printPerson({
    fullName: "Abhishek Shukla",
    age: 24,
    place: "Montreal"
})

