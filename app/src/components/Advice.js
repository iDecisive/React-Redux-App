import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { ranAdvice } from '../actions';

let AdviceDisplay = props => {

    console.log('advicedisplay: ', props.advice);

    useEffect(() => {

        props.ranAdvice()

    },[]);


    let newAdvice = event => {

        event.preventDefault();

        props.ranAdvice();

    }

    return (

        <div>

            <h3>Advice</h3>
            <p>{props.advice}</p>
            <button onClick={newAdvice}>New advice</button>

        </div>

    )

}

let mapStateToProps = state => {

    return {
        
        advice: state.slip.advice

    }
}

export default connect(mapStateToProps, { ranAdvice })(AdviceDisplay);