import React, {Component, Fragment} from 'react';
import { Button } from 'react-bootstrap';

class QuoteMachine extends Component {

    constructor() {
        super();
        this.state = {
            quote:  {
                content: '',
                link: '',
                title: ''
            },
            hasQuote: false
        }
        this.END_POINT = 'https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1';
    }

    getRandomQuote = event => {
        fetch(this.END_POINT)
        .then(response => response.json())
        .then(data => {
            if(data[0].content && data[0].title && data[0].link) {
                let { quote } = this.state;
                let quoteData = data[0];
                quote.content = quoteData.content;
                quote.link = quoteData.link;
                quote.title = quoteData.title;
                this.setState({ quote }, () => {
                    if(this.state.hasQuote === false) {
                        this.setState({ hasQuote: true })
                    }
                })
            } 
            else {
                return console.error('no quote has been found');
            }
        })
    }

    render() {
        const { hasQuote, quote } = this.state;
        // console.log(this.state);
        return (
            <Fragment>
                <div>QuoteMachine</div>
                <Button onClick={this.getRandomQuote}>
                Push Me!
                </Button>
                <br/>
                {hasQuote === true ? JSON.stringify(quote) : 'no quote yet'}
            </Fragment>
        )
    }
}

export default QuoteMachine;