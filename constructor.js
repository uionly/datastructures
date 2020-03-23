function User(fName, lName, age, sex){
    this.fName = fName;
    this.lName = lName;
    this.age = age;
    this.sex =sex;
}

var user1 = new User('Deepak', 'Kumar', 18, 'male');
var user2 = new User('Arya', 'Jha', 10, 'female');

User.prototype.emailDomain = '@facebook.com';
User.prototype.getFullName = function(){
    return this.fName + " " +this.lName;
}

console.log(user1);
console.log(user2);
console.log(user2.getFullName());
console.log(user1.getFullName());