import f from './Frends.module.css'

const Frends = (props) => {
    let frend = props.sidebar.map(pers => <Person name={pers.name} />);
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

export default Frends;