var $ = require('jquery');

//var Person = require('./modules/Person');
import Person from './modules/Person';

//alert('77777777777');

class Adult extends Person {
	payTaxes(){
		console.log(this.name + ' now ows 0€ in taxes.');
	}
}

var john= new Person('jonas','blue');
john.greet();

var jane= new Adult('jane smith','bla bla');
jane.greet();
jane.payTaxes();

//$("h1").remove();
