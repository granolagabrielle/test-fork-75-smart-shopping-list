const TextInputElement = ({ children, type, id, onChange, value }) => {
	return (
		<>
			<label htmlFor={id}>{children}</label>
			<br />
			<input type={type} id={id} onChange={onChange} value={value} required />
			<br />
		</>
	);
};

export default TextInputElement;
