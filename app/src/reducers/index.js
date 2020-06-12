import { RAN_ADVICE } from '../actions/';

const initialState = {

    slip: {

        advice: ''

    }

}

export const foxReducer = (state = initialState, action) => {

    switch(action.type) {

        case RAN_ADVICE:
            return {

                ...state,

                slip: {

                    advice: action.payload.advice

                }

            }

        default:
            return state

    }

}