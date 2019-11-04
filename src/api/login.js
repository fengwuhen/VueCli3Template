import Axios from "axios"

const login = {
	get() {
		return Axios.get('/api/wxarticle/chapters/json');
	},
}

export default login