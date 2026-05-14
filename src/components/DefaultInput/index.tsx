import styles from './styles.module.css';
type DefaultInputProps = {
   id: string;
   labelText?:string;
} & React.ComponentProps<'input'>;

export function DefaultInput({id, type, labelText, ...rest} : DefaultInputProps)
{
    return (
        <>
            {labelText && <span><label htmlFor="input">{labelText}</label></span> }
            <input className={styles.input} id={id} type={type} {...rest} />
        </>         
    )
}