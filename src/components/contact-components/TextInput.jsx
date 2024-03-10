const TextInput = (props) => {
    const {label, labelName, type, placeholder, register, required} = props;

    return (
        <>
            <label htmlFor={label}>{labelName}:</label>
            <input className="p-1
                            rounded-md" 
                    {...register(label, {required})}
                    type={type} 
                    name={label} 
                    placeholder={placeholder} />
        </>
    );
}

export default TextInput;