import { useSearchParams } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';
import ReactSelect from 'react-select';

import { Accordion, Button, Icon, Select } from '../../ui';
import { useEffect } from 'react';

function CommonReportFilters({ filters }) {
  const [searchParams, setSearchParams] = useSearchParams({});
  const defaultValues = filters.reduce((acc, cur) => {
    acc[cur.id] = cur.values.filter((item) => item.selected);
    return acc;
  }, {});

  console.log('defaultValues:', defaultValues);

  const { handleSubmit, reset, control, setValue, getValues, register } =
    useForm({
      defaultValues,
    });

  // Check search parameters for invalid filter keys/values
  useEffect(() => {
    let shouldParametersUpdate = false;

    if (searchParams.size > 0) {
      for (const key of searchParams.keys()) {
        const filterItem = filters.find(({ id }) => id === key);
        const searchParameterValue = searchParams.get(key);

        if (filterItem && searchParameterValue) {
          const newSearchParameterValue = searchParameterValue
            .split('_')
            .filter((val) =>
              filterItem.values.some((item) => item.value === val),
            )
            .join('_');

          if (searchParameterValue !== newSearchParameterValue) {
            searchParams.set(key, newSearchParameterValue);
            shouldParametersUpdate = true;
          }
        } else {
          searchParams.delete(key);
          shouldParametersUpdate = true;
        }
      }

      shouldParametersUpdate && setSearchParams(searchParams);
    }
  }, [searchParams, filters, setValue, setSearchParams]);

  // Prefill form values depending on search parameters
  useEffect(() => {
    Object.keys(defaultValues)
      .map((key) => ({ key, parameter: searchParams.get(key) }))
      .filter((item) => !!item.parameter)
      .forEach((item) => {
        const paramValues = item.parameter.split('_');
        const filterValues = filters
          .find((filter) => filter.id === item.key)
          .values.filter((item) => paramValues.includes(item.value));

        setValue(item.key, filterValues);
      });
  }, [searchParams]);

  console.log('getValues:', getValues());

  const onSubmit = (data) => {
    for (const key in data) {
      if (Array.isArray(data[key])) {
        data[key] = data[key].map((item) => item.value).join('_');
      } else {
        console.log(data[key].value);
        data[key] = data[key].value;
      }
    }

    setSearchParams(data);
  };

  const handleReset = (e) => {
    e.preventDefault();
    const paramKeys = Object.keys(defaultValues);
    paramKeys.forEach((key) => searchParams.delete(key));
    setSearchParams(searchParams);
    reset();
  };

  return (
    <Accordion active='filter'>
      <Accordion.Header
        accordionId='filter'
        className='flex items-center gap-2.5'
      >
        <Icon id='gear-solid' className='h-4 w-4 fill-slate-400' />
        <span>Фильтры</span>
      </Accordion.Header>
      <Accordion.Body accordionId='filter'>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='mb-2 grid grid-cols-3 gap-2'>
            {filters.map((filter) => (
              <Controller
                key={filter.id}
                name={filter.id}
                control={control}
                render={({ field: { onChange, value } }) => {
                  return (
                    <Select
                      isMulti={filter.multi}
                      options={filter.values}
                      onChange={(value) => onChange(value)}
                      value={value}
                      defaultValue={defaultValues[filter.id]}
                    />
                  );
                }}
              />
            ))}
          </div>
          <div className='flex flex-wrap gap-2'>
            <Button>Применить</Button>
            <Button appearance='outline' onClick={handleReset}>
              Сбросить
            </Button>
          </div>
        </form>
      </Accordion.Body>
    </Accordion>
  );
}

export default CommonReportFilters;
