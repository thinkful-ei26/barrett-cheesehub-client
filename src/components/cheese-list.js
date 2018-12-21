import React from 'react';
import { connect } from 'react-redux';
import Spinner from 'react-spinkit';

import { fetchCheeses } from '../actions/cheese';

class CheeseList extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchCheeses());
    }

    renderCheeses() {
        if (this.props.loading) {
            return <Spinner spinnername="circle" fadeIn="none" />;
        }

        if (this.props.error) {
            return <strong>{this.props.error}</strong>;
        }

        const cheeseList = this.props.cheeses.map((cheese, index) => 
            <li key={index}>{cheese}</li>
        );

        return <ul>{cheeseList}</ul>;
    }
    
    

    render() {
        return (
            <div>
                {this.renderCheeses()}
            </div>
        );
    }
    
}

const mapStateToProps = state => {
    console.log(state);
    return {
        cheeses: state.cheeses,
        loading: state.loading,
        error: state.error
    }  
}

export default connect(mapStateToProps)(CheeseList);