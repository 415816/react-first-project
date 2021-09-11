import si from './input.module.css'

export const Input = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={si.inputWrapper}>
            <div>
                <input className={hasError ? si.borderRed : ""} {...input} {...props}/>
            </div>

            {hasError && <span>{meta.error}</span>}

        </div>
    )
}