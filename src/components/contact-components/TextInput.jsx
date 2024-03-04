const TextInput = (props) => {
    const {label, placeholder} = props;

    return (
        <>
            <label for={label}>{label}:</label>
            <input className="p-1
                            rounded-md" 
                    type="text" 
                    name={label} 
                    placeholder={placeholder} />
        </>
    );
}

export default TextInput;