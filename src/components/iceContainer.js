import React from 'react'
import {buyice} from '../redux'
import { connect } from 'react-redux'


function Icecontainer(props) {
    return (
        <div>
      <h2>Number of ice - {props.numofice} </h2>
      <button onClick={props.buyice}>Buy Cake</button>

        </div>
    )
}


const mapStateToProps = state => {
    return {
      numofice: state.ice.numofice
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
      buyice: () => dispatch(buyice())
    }
  }
  

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Icecontainer)
