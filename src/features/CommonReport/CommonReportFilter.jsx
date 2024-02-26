import { useForm, Controller } from 'react-hook-form';

import { Accordion, Button, Icon, Select } from '../../ui';
import { useSearchParams } from 'react-router-dom';

function CommonReportFilter({ filters, isLoading }) {
  const initialValues = filters.reduce((acc, cur) => {
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

  const onSubmit = (filterData) => {
    const { producers, classifiers } = filterData;

    for (const key of Object.keys(searchParams)) {
      searchParams.delete(key);
    }

    searchParams.set('producers', producers.value);
    searchParams.set(
      'classifiers',
      classifiers.map((item) => item.value),
    );

    setSearchParams(searchParams);
  };

  const handleReset = () => {
    setSearchParams([]);

    reset({
      classifiers: [],
      producers: { value: '0', label: 'Усі виробники' },
    });
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
        <form className='py-2' onSubmit={handleSubmit(onSubmit)}>
          <div className='mb-3.5 grid grid-cols-3 gap-2'>
            {filters.map((filter) => (
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
            <Button disabled={isLoading}>Применить</Button>
            <Button
              disabled={isLoading}
              type='button'
              appearance='outline'
              onClick={handleReset}
            >
              Сбросить
            </Button>
          </div>
        </form>
      </Accordion.Body>
    </Accordion>
  );
}

export default CommonReportFilter;
