class Person {
	constructor(name,color){
		this.name=name;
		this.color=color;
	}

	
	greet(){
		console.log('hi 77777788 '+this.name+' and color is '+this.color+'...');
	}
}

//module.exports = Person;
export default Person;