import f from './Frends.module.css'
import {connect} from "react-redux";
import Messages from "../../Messages/Messages";


const Frends = (props) => {
    debugger
    let frend = props.sideBar.map(pers => <Person name={pers.name} />);
    return (
        frend
    )
}

const Person = (props) => {

    return (
        <div className={f.fren}>
            <div><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Smiley.svg/1200px-Smiley.svg.png" />
            {props.name}</div>
        </div>
    )
}

let mapStateToProps = (state) => {
    return{
        sideBar: state.sideBar
    }
}

let mapDispatchToProps = (state) => {
    return{
        sideBar: state
    }
}

export const FrendsWrapper = connect(mapStateToProps, mapDispatchToProps)(Frends);

export default Frends;