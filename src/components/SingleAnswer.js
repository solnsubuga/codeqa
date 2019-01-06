import React from 'react'
import { Header } from './Header';


const SingleAnswer = props => (
    <div className="row" id="ans-row">
        <div className=" votes col-sm-1">votes</div>
        <div className=" answer col-sm-6">
            <a href="">This is an Answer</a>
            <p>Answered April 28th, 2016 1:16pm|Modified April 28th, 2016 1:16pm </p>

        </div>

    </div>

)

export default SingleAnswer;