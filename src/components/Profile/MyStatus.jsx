import React from "react";

class MyStatus extends React.Component {

    state = {
        editModeOn: false,
        status: this.props.status,
    }
    textStatus = React.createRef();

    activatedEditMode = () => {
        this.setState({
            editModeOn: true,
        })
    }
    deactivatedEditMode = () => {
        this.setState({
            editModeOn: false,
        })
        this.props.updateStatusFromUIThunk(this.state.status);
    }

    editStatus = (e) => {
        this.setState({
            status: e.currentTarget.value,
        })
    }


    render() {
        return <>
            {!this.state.editModeOn && <div onClick={this.activatedEditMode}>{this.props.status || 'Что нового?'}</div>}
            {this.state.editModeOn && <input onChange={this.editStatus} value={this.state.status} autoFocus={true}  onBlur={this.deactivatedEditMode}/>}
        </>
    }
}
export default MyStatus;