import React from "react";

class MyStatus extends React.Component {
    state = {
        editModeOn: false,
        status: 'Что нового?',
    }

    textStatus = React.createRef();

    activatedEditMode() {
        this.setState({
            editModeOn: true,
        })
    }
    deactivatedEditMode() {
        this.setState({
            editModeOn: false,
        })
    }
    changeStatus(){
        this.setState({
            status: this.textStatus.current.value
        })
    }

    render() {
        return <>
            {!this.state.editModeOn && <div onDoubleClick={this.activatedEditMode.bind(this)}>{this.state.status}</div>}
            {this.state.editModeOn && <input ref={this.textStatus} autoFocus={true} onChange={this.changeStatus.bind(this)} onBlur={this.deactivatedEditMode.bind(this)} value={this.state.status}/>}
        </>
    }
}
export default MyStatus;