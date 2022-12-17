export const hasDuplicateInArray = arr => {
    return new Set(arr).size !== arr.length
}

export const hasDuplicates = list => {
    const nameList = list.map(person => person.name)
    const emailList = list.map(person => person.email)
    return hasDuplicates(nameList) || hasDuplicates(emailList)
}

export const matchPeople = people => {
    // Return an array of randomly matched up people.
    // The array should have objects with the following structure:
    // { giver: {name: 'NAME_HERE, email: 'EMAIL_HERE'}, receiver: {name: 'NAME_HERE, email: 'EMAIL_HERE'}}

    // Rules:
    // 1. For every person there has to be a giver
    // 2. A person cannot be their own giver
    let pool = [...people]
    pool = pool.sort(() => 0.5 - Math.random())
    let secretSantaList = []

    people.forEach(person => {
        const secretSanta = pool.find(poolPerson => poolPerson.email === person.email)

        if (secretSanta) {
            pool.filter(poolPerson => poolPerson.email !== secretSanta.email)
            secretSantaList.push({receiver: person, giver: secretSanta})
        } else {
            const lastSecretSanta = secretSantaList[0];
            const newSecretSantaIndex = secretSantaList.findIndex(lastPerson => {
                return lastPerson.email !== lastSecretSanta.giver.email
            })
            secretSantaList.push({
                receiver: person,
                giver: secretSantaList[newSecretSantaIndex].giver,
            })
            secretSantaList[newSecretSantaIndex].secretSanta = person
        }
    })

    return secretSantaList
}