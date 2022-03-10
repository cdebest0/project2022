import { btn_all, btn_que, btn_boast, btn_share } from "./types"

const initialState = {
  alignment : 'all',
}

const valueAll = "all"
const valueQuestion = "question"
const valueBoast = "boast"
const valueShare = "share"


const btnReducer = (state=initialState, action) => {
  switch(action.type){
    case btn_all:
      return {...state,  alignment : valueAll}
    case btn_que:
      return {...state, alignment : valueQuestion}
    case btn_boast:
      return {...state, alignment : valueBoast}
    case btn_share :
      return {...state, alignment : valueShare}
    default :
      return state
  }
}

export default btnReducer;