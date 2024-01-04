import { Link } from 'react-router-dom';

function Button({
  children,
  className,
  size = 'md',
  appearance = 'primary',
  disabled,
  ...props
}) {
  const ButtonElement = props.to ? Link : 'button';

  const sizeMap = {
    sm: '',
    md: 'inline-flex py-2 px-4 rounded-[4px] text-sm',
    lg: '',
  };

  const appearanceMap = {
    primary:
      'bg-blue-500 text-white hover:ring-[3px] hover:ring-blue-500/40 border border-blue-500',
    outline:
      'border-slate-500 border hover:ring-[3px] hover:ring-blue-500/40 hover:border-blue-500',
    disabled:
      'cursor-no-drop bg-slate-700 text-white/20 border border-slate-600',
  };

  return (
    <ButtonElement
      className={`${sizeMap[size]} ${
        disabled ? appearanceMap.disabled : appearanceMap[appearance]
      } ${className}`}
      {...props}
    >
      {children}
    </ButtonElement>
  );
}

export default Button;
