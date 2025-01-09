import { ResponsiveBar } from '@nivo/bar';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

import { StatsTable } from '../../ui';

import { useUser } from '../Auth/useUser';
import { calcBarChartSettings } from './utils';

function EngineerCard({
  id,
  name,
  stats,
  chartSettings,
  maxChartValue = 'auto',
  className = '',
}) {
  const { reportId } = useParams();
  const navigate = useNavigate();
  const { search } = useLocation();
  const { data: userData } = useUser();
  const { is_admin, id: userId } = userData.user;
  const hasDetails =
    ((is_admin || userId === id) && reportId === '7') || reportId === '22';

  let targetReportId = null;

  if (reportId === '7' || reportId === '8') {
    targetReportId = '8';
  }

  if (reportId === '22' || reportId === '23') {
    targetReportId = '23';
  }

  const headingClass = `${
    hasDetails ? 'cursor-pointer hover:text-blue-400' : ''
  } text-lg font-medium mb-2 inline-block`;

  const handleHeadingClick = () => {
    return hasDetails
      ? navigate(`/reports/${targetReportId}?engineer_id=${id}`)
      : null;
  };

  return (
    <article className={`grid grid-cols-12 gap-5 ${className}`}>
      <div className='col-span-5'>
        <h3 className={headingClass} onClick={handleHeadingClick}>
          {name}
        </h3>
        <StatsTable stats={stats} className='col-span-full' />
      </div>
      <div className='col-span-7'>
        <ResponsiveBar
          {...calcBarChartSettings(chartSettings)}
          maxValue={maxChartValue}
          className='h-full'
          tooltip={({ id, value, color }) => (
            <div className='flex items-center gap-2 rounded-md bg-slate-800 px-3 py-1.5 shadow-md'>
              <i style={{ background: color }} className='h-3 w-3'></i>
              <span className='text-sm'>{id}</span>
            </div>
          )}
          onClick={(line, e) => {
            if (is_admin || userId === id) {
              navigate(
                `/reports/${targetReportId}?engineer_id=${id}#${line.id}`,
              );
            }
            (reportId === '8' || reportId === '23') &&
              navigate(`${search}#${line.id}`);
          }}
          onMouseEnter={(_datum, event) => {
            if (is_admin || userId === id) {
              event.currentTarget.style.cursor = 'pointer';
            }
          }}
          isInteractive
        />
      </div>
    </article>
  );
}

export default EngineerCard;
