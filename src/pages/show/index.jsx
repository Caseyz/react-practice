import React, { Component } from 'react'
import { connect } from 'react-redux'

class Index extends Component {
    render() {
        const { count, isFive } = this.props
        return (
            <div>
                <div>{count}</div>
                <div>{isFive === 0 ? '否' : '是'}</div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        count: state.btnReducer.count,
        isFive: state.btnReducer.isFive
    }
}

export default connect(mapStateToProps)(Index)

