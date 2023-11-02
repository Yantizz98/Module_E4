function hasPropertyFunc(object, str) {
    if (object.hasOwnProperty(str)) {
        return true;
    } else {
        return false;
    }
}


const student = {
  name: 'Ivan',
  age: 21,
}

console.log(hasPropertyFunc(student,'surname'))