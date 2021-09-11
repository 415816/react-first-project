import si from './FormControl.module.css'

const FormControl = ({input, meta, child,  ...props}) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={si.FormControl}>
            <div className={hasError ? si.borderRed : ""}>
                {props.children}
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}

export const TextArea = (props) => {
    const {input, meta, child, ...restProps} = props;
    return  <FormControl {...props}> <textarea {...input} {...restProps} /> </FormControl>
}

export const Input = (props) => {
    const {input, meta, child, ...restProps} = props;
    return  <FormControl {...props}> <input {...input} {...restProps} /> </FormControl>
}