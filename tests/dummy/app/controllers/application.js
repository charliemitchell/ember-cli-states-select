import Ember from "ember";
const {Controller} = Ember;
export default Controller.extend({
	actions:{
		blur(){
			console.log("foo");
		}
	}
});
