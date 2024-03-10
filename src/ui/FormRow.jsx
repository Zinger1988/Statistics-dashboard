import InfoMessage from './InfoMessage';

function FormRow({ children, label, error, className = '' }) {
  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      {label && <label htmlFor={children.props.id}>{label}</label>}
      {children}
      {error && <InfoMessage type='error'>{error}</InfoMessage>}
    </div>
  );
}

export default FormRow;
