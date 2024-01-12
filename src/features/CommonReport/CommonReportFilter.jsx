import { useForm, Controller } from 'react-hook-form';

import { Accordion, Button, Icon, Select } from '../../ui';

function CommonReportFilter({ filters }) {
  const defaultValues = filters.reduce((acc, cur) => {
    const value = Array.isArray(cur.value)
      ? cur.options.filter((opt) => cur.value.includes(opt.value))
      : cur.options.find((opt) => cur.value === opt.value);

    return {
      ...acc,
      [cur.id]: value,
    };
  }, {});

  const { control, handleSubmit, reset } = useForm({
    defaultValues,
  });

  const onSubmit = (data) => console.log(data);

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
                      defaultValue={defaultValues[filter.id]}
                    />
                  );
                }}
              />
            ))}
          </div>
          <div className='flex flex-wrap gap-2'>
            <Button>Применить</Button>
            <Button appearance='outline' onClick={reset}>
              Сбросить
            </Button>
          </div>
        </form>
      </Accordion.Body>
    </Accordion>
  );
}

export default CommonReportFilter;