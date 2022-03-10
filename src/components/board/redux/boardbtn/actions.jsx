import { btn_all, btn_que, btn_boast, btn_share } from "./types"

export const onSelectAll = () => {
  return {
    type : btn_all
  }
}

export const onSelectQuestion = () => {
  return {
    type : btn_que
  }
}

export const onSelectBoast = () => {
  return {
    type : btn_boast
  }
}

export const onSelectShare = () => {
  return {
    type : btn_share
  }
}
