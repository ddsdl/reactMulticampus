import { combineReducers } from 'redux'
import countStore from './countStore';
import todoStore from './todoStore'
import boardStore from './boardStore'

const rootStore = combineReducers({
  countStore, todoStore, boardStore,
})
export default rootStore;
