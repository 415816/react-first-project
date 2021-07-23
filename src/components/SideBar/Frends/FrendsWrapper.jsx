
import {connect} from "react-redux";
import Frends from "./Frends";

let mapStateToProps = (state) => {
    return {
        sidebar: state.sideBar.sidebar
    }
}
const FrendsWrapper = connect(mapStateToProps)(Frends);

export default FrendsWrapper;