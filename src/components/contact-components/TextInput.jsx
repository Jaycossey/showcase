const TextInput = (props) => {
    const {label, labelName, type, placeholder} = props;

    return (
        <>
            <label for={label}>{labelName}:</label>
            <input className="p-1
                            rounded-md" 
                    type={type} 
                    name={label} 
                    placeholder={placeholder} />
        </>
    );
}

export default TextInput;