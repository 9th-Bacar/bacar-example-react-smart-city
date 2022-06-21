import { proxy } from 'valtio'

const informationState = proxy({
    title: "",
    info: ""
})
export default informationState