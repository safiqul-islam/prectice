const person = {
    firstName : "safiqul",
    lastName : "islam",
    language : "english",
    get fullName(){
        return this.firstName+" "+this.lastName;
    }
};

console.log(person.fullName);

const human = {
    name : "rafi",
    age : 25,
    lang : "",
    set lan(x){
        this.lang = x; 
    },
};
human.lan = "sasel bc";
console.log(human.lang);