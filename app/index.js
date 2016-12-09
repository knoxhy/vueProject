import Vue from 'vue'
import Favlist from './components/Favlist'

new Vue({
	el: 'body',
	render: (createElement) => createElement(Favlist)
	/*components: { Favlist }*/
})