let student = {};
student.firstName = "Anna";
student.lastName = "Ivanova";
student.age = "18";
student.address = {};
student.address.city = "Moscow";
student.address.street = "Lenina";
student["age"] = "19";
delete student.lastName;
console.log(student.address.city);

let count = 0;
for (let key in student) {
    count += 1;
}
console.log(count);

function hasProperty(obj, propertyName) {
    for (let key in obj) {
        if (key === propertyName) {
            return true;
        }
    }
    return false;
}
let result = hasProperty(student, "firstNam");
console.log(result);

function ageWithRange(age) {
    if (age >= 14 && age <= 90) {
        return("Возраст входит в диапазон 14 - 90");
    }
    else {
        return("Возраст не в диапазоне 14 - 90");
    }
}
console.log(ageWithRange(90));

// if (14 <= age <= 90) {
//     console.log("1");
// }
// if (90 <= age <= 14) {
//     console.log("2");
// }