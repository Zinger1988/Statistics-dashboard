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

  const baseCssClasses =
    'inline-flex justify-center rounded-[4px] outline-none';

  const sizeMap = {
    sm: 'py-1 px-2.5 text-sm',
    md: 'py-2 px-4 text-sm',
    lg: '',
  };

  const appearanceMap = {
    primary:
      'bg-blue-500 text-white hover:ring-[3px] hover:ring-blue-500/40 border border-blue-500 focus:ring-[3px] focus:ring-blue-500/40',
    outline:
      'border-slate-600 bg-slate-800/50 border hover:ring-[3px] hover:ring-blue-500/40 hover:border-blue-500 focus:ring-[3px] focus:ring-blue-500/40',
    disabled:
      'cursor-no-drop bg-slate-700 text-white/20 border border-slate-600',
  };

  return (
    <ButtonElement
      className={`${baseCssClasses} ${sizeMap[size]} ${
        disabled ? appearanceMap.disabled : appearanceMap[appearance]
      } ${className}`}
      {...props}
    >
      {children}
    </ButtonElement>
  );
}

export default Button;
