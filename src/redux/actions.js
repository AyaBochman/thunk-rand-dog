import { ACTIONS } from "./action.config";


export const getDog = ()=> dispatch=> {
console.log("inside action")
fetch('https://dog.ceo/api/breeds/image/random')
.then(res=>res.json())
.then(data=>dispatch({
    type: ACTIONS.GET_DOG,
    payload: data.message

}))


}