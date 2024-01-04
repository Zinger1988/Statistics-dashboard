import ReactSelect from 'react-select';

import Icon from './Icon';

function Select({ value, options, isMulti, defaultValue, onChange }) {
  const customClearIndicator = ({ clearValue }) => (
    <div className='group/wrapper cursor-pointer px-1'>
      <Icon
        onClick={clearValue}
        id='close'
        className='h-4 w-4 fill-slate-600 group-hover/wrapper:fill-white'
      />
    </div>
  );

  const customDropdownIndicator = () => (
    <div className='px-1'>
      <Icon id='arrow-triangle-down' className='h-3 w-3 fill-slate-600' />
    </div>
  );

  const customMultiValueRemove = ({ innerProps: { onClick } }) => {
    return (
      <div
        className='group/wrapper group/wrapper flex cursor-pointer items-center px-1.5'
        onClick={onClick}
      >
        <Icon
          id='close-alt'
          className='h-3 w-3 fill-slate-500 group-hover/wrapper:fill-white'
        />
      </div>
    );
  };

  return (
    <ReactSelect
      unstyled
      components={{
        ClearIndicator: customClearIndicator,
        DropdownIndicator: customDropdownIndicator,
        MultiValueRemove: customMultiValueRemove,
      }}
      classNames={{
        menuList: () => 'bg-slate-900 py-2 rounded-md mt-1 text-sm',
        control: (state) =>
          `text-white bg-slate-900 border border-slate-700 rounded-md hover:border-blue-500 hover:ring-[3px] hover:ring-blue-500/40 ${
            state.isMulti ? 'pl-2' : 'pl-3'
          } pr-2 py-1`,
        singleValue: () => 'text-sm',
        multiValue: () => 'bg-slate-700 pl-1.5 rounded-sm',
        multiValueLabel: () => 'text-white text-sm py-[2px] ',
        valueContainer: () => 'gap-1',
        indicatorSeparator: () => 'bg-slate-800',
        indicatorsContainer: () => 'gap-1 py-1',
        placeholder: () => 'text-slate-600 text-sm',
        input: () => 'text-sm',
        option: (state) =>
          `px-3 py-1.5 cursor-pointer ${
            state.isSelected ? ' bg-blue-500' : 'hover:bg-blue-500/10'
          }`,
      }}
      onChange={onChange}
      isMulti={isMulti}
      options={options}
      value={value}
      defaultValue={defaultValue}
    />
  );
}

export default Select;
