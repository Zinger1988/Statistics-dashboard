import { Accordion, Icon, Table, Loader, Box } from '../../ui';
import Filter from './Filter';

function ReportArrivals({ reportData, isRefetching }) {
  const { filters, data } = reportData;

  console.log(data);

  return (
    <div>
      <Accordion active='filter' className='mb-5'>
        <Accordion.Header
          accordionId='filter'
          className='flex items-center gap-2.5'
        >
          <Icon id='gear-solid' className='h-4 w-4 fill-slate-400' />
          <span>Фильтры</span>
        </Accordion.Header>
        <Accordion.Body accordionId='filter'>
          <Filter
            data={filters}
            isLoading={isRefetching}
            className='col-span-9'
          />
        </Accordion.Body>
      </Accordion>

      <Box className='relative'>
        {isRefetching && (
          <Loader className='absolute left-0 top-0 z-10 flex h-full w-full items-center justify-center bg-slate-950/70' />
        )}
        <Table columns='grid-cols-[1.1fr_1.5fr_3fr_1.3fr_1.5fr_1.5fr_1.5fr_1.6fr_1.5fr]'>
          <Table.Heading
            data={data.head}
            render={(cell, i) => (
              <Table.Cell className='p-3 text-xs' key={i}>
                {cell}
              </Table.Cell>
            )}
          />
          <Table.Body
            data={data.rows}
            render={(row, i) => (
              <Table.Row
                data={row}
                key={i}
                render={(cell, i) => (
                  <Table.Cell key={i}>
                    {typeof cell === 'boolean' ? (
                      <Icon
                        id={cell ? 'check-circled' : 'cancel-circled'}
                        className={
                          cell
                            ? 'h-5 w-5 fill-green-500'
                            : 'h-5 w-5 fill-red-500'
                        }
                      />
                    ) : (
                      cell
                    )}
                  </Table.Cell>
                )}
              />
            )}
          />
        </Table>
      </Box>
    </div>
  );
}

export default ReportArrivals;
