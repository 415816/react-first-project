import sta from './textArea.module.css'

export const TextArea = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={sta.textAreaWrapper}>
            <textarea className={hasError ? sta.borderRed : ""} {...input} {...props}/>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}

