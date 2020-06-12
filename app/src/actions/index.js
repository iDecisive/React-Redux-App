import axios from 'axios';

export const RAN_ADVICE = 'RAN_ADVICE';

export const ranAdvice = () => dispatch => {


    axios.get('https://api.adviceslip.com/advice').then(response => { //https://github.com/axios/axios/issues/853

        dispatch({

            type: RAN_ADVICE,
            payload: {

                advice: response.data.slip.advice
    
            }

        });


        console.log('axios: ', response.data.slip.advice)

    }).catch();

}

