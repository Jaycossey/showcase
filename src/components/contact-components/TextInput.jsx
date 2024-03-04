const TextInput = (props) => {
    const {label, type, placeholder} = props;

    return (
        <>
            <label for={label}>{label}:</label>
            <input className="p-1
                            rounded-md" 
                    type={type} 
                    name={label} 
                    placeholder={placeholder} />
        </>
    );
}

export default TextInput;