import Vue from "vue";
var $ = require("jquery");
module.exports = function(){
	new Vue({
	el: "#demo",
	data: {
		name: "abc",
		text: "",
		input: ""
	},
	template: `
		<div>
			<input v-model="input" @keyup="Click" />
			<p>{{text}}</p>
		</div>
	`,
	methods: {
		Click() {
			$.ajax({
				url: "http://www.tuling123.com/openapi/api?key=c75ba576f50ddaa5fd2a87615d144ecf",
				type: "GET",
				data: {
					info: this.input
				},
				success: function(data) {
					console.log(data)
					this.text = data.text
				}.bind(this)
			})
		}
	}
})
}
