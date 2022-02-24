import { createStateHook, createActionsHook } from 'overmind-react'
import { state } from './state'
import * as actions from './actions'

export const config = { state, actions }

export const useAppState = createStateHook()
export const useActions = createActionsHook()