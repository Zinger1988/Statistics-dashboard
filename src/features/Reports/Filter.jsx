import { useForm, Controller } from 'react-hook-form';

import { Button, Select } from '../../ui';

import { useSearchParams } from 'react-router-dom';

function Filter({ data, isLoading }) {
  const initialValues = data.reduce((acc, cur) => {
    const value = Array.isArray(cur.value)
      ? cur.options.filter((opt) => cur.value.includes(opt.value))
      : cur.options.find((opt) => cur.value === opt.value);

    return {
      ...acc,
      [cur.id]: value,
    };
  }, {});

  const [searchParams, setSearchParams] = useSearchParams();
  const { control, handleSubmit, reset } = useForm({
    defaultValues: initialValues,
  });

  function onSubmit(formData) {
    for (const key in formData) {
      searchParams.delete(key);

      let param = null;
      const currentValue = formData[key];
      const isArray = Array.isArray(currentValue);

      if (isArray && currentValue.length !== 0) {
        param = currentValue.map((item) => item.value).join('_');
        param += '_';
      }

      if (currentValue.value) {
        param = currentValue.value;
      }

      param && searchParams.set(key, param);
    }

    setSearchParams(searchParams);
  }

  const handleReset = () => {
    const defaultValues = data.reduce((acc, cur) => {
      acc[cur.id] = Array.isArray(cur.defaultValue)
        ? cur.defaultValue
        : cur.options.find((item) => item.value === cur.defaultValue);
      return acc;
    }, {});

    setSearchParams([]);
    reset(defaultValues);
  };

  return (
    <form className='py-2' onSubmit={handleSubmit(onSubmit)}>
      <div className='mb-3.5 grid grid-cols-3 gap-2'>
        {data.map((filter) => (
          <Controller
            key={filter.id}
            name={filter.id}
            control={control}
            render={({ field: { onChange, value } }) => {
              return (
                <Select
                  isMulti={filter.isMulti}
                  options={filter.options}
                  onChange={(value) => onChange(value)}
                  value={value}
                  defaultValue={initialValues[filter.id]}
                  placeholder={filter.title}
                />
              );
            }}
          />
        ))}
      </div>
      <div className='flex flex-wrap gap-2'>
        <Button disabled={isLoading}>Застосувати</Button>
        <Button
          disabled={isLoading}
          type='button'
          appearance='outline'
          onClick={handleReset}
        >
          Скинути
        </Button>
      </div>
    </form>
  );
}

export default Filter;
