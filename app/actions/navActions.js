import { POP_ROUTE, PUSH_ROUTE, CHANGE_TAB } from '../constants/ActionTypes'

export function push (route) {
  return {
    type: PUSH_ROUTE,
    route
  }
}

export function pop () {
  return {
    type: POP_ROUTE
  }
}

export function changeTab (index) {
  return {
    type: CHANGE_TAB,
    index
  }
}
