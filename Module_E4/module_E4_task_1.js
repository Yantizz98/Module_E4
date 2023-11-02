function getobj(obj) {
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            console.log(key + ' = ' + obj[key])
        }
    }
}

const studentCity = {
    city: 'Moscow',
}


const studentInfo = Object.create(studentCity)

studentInfo.name = 'Ivan'

studentInfo.surname = 'Avdeev'

studentInfo.age = 18



console.log(getobj(studentInfo))
