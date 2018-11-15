import React, {Component, Fragment} from 'react';
import { Button } from 'react-bootstrap';

class QuoteMachine extends Component {

    constructor() {
        super();
        this.state = {
            quote: '',
            hasQuote: false
        }
        this.END_POINT = 'https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1';
    }

    getRandomQuote = event => {
        fetch(this.END_POINT)
        .then(response => response.json())
        .then(data => {
            console.log(data)
        })
    }

    render() {
        const { hasQuote } = this.state;
        // console.log(this.state);
        return (
            <Fragment>
                <div>QuoteMachine</div>
                <Button onClick={this.getRandomQuote}>
                Push Me!
                </Button>
                <br/>
                {hasQuote === true ? null : 'no quote yet'}
            </Fragment>
        )
    }
}

export default QuoteMachine;