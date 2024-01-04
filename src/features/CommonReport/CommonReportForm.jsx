import Select from 'react-select';
import { Button } from '../../ui';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

function CommonReportForm() {
  return (
    <div>
      <Button>Button</Button>
      <Button appearance='outline'>Button</Button>
      <Button disabled>Button</Button>
      <Button disabled appearance='outline'>
        Button
      </Button>
      <Select value={options[0]} options={options} className=' text-black' />
    </div>
  );
}

export default CommonReportForm;
