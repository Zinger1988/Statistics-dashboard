import { Accordion } from '../../ui/Accordion';
import Icon from '../../ui/Icon';

function CommonReportFilters() {
  return (
    <Accordion>
      <Accordion.Header
        accordionId='test'
        className='flex items-center gap-2.5'
      >
        <Icon id='gear-solid' className='h-4 w-4 fill-slate-400' />
        <span>Фильтры</span>
      </Accordion.Header>
      <Accordion.Body accordionId='test'>Body</Accordion.Body>
    </Accordion>
  );
}

export default CommonReportFilters;
