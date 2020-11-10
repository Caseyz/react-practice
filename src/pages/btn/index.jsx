import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addCount, reduceCount, toVerification } from './store/actionCreator'

class Index extends Component {
    render() {
        const { count, addCount, reduceCount, isFive } = this.props
        return (
            <div>
                <button
                    onClick={addCount}
                >+</button>
                <button
                    onClick={reduceCount}
                >-</button>
                <button
                    onClick={() => { isFive(count) }}
                >判断当前值是否等于5</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    count: state.btnReducer.count
})

const mapDispatchToProps = (dispatch) => ({
    addCount() {
        dispatch(addCount())
    },
    reduceCount() {
        dispatch(reduceCount())
    },
    isFive(count) {
        dispatch(toVerification(count))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Index)


