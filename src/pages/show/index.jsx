import React, { Component } from 'react'
import { connect } from 'react-redux'

class Index extends Component {
    render() {
        const { count } = this.props
        return (
            <div>
                {count}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        count: state.btnReducer.count
    }
}

export default connect(mapStateToProps)(Index)

