import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addCount, reduceCount } from './store/actionCreator'


class Index extends Component {
    render() {
        const { addCount, reduceCount } = this.props
        return (
            <div>
                <button
                    onClick={addCount}
                >+</button>
                <button
                    onClick={reduceCount}
                >-</button>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    addCount() {
        dispatch(addCount())
    },
    reduceCount() {
        dispatch(reduceCount())
    }
})

export default connect(null, mapDispatchToProps)(Index)


