import { useParams } from 'react-router-dom';

import ReportCommon from './ReportCommon';
import ReportEngineers from './ReportEngineers';
import ReportEngineer from './ReportEngineer';
import ReportArrivals from './ReportArrivals';
import ReportWorkParams from './ReportWorkParams';

function Report({ reportData, isRefetching }) {
  const { reportId } = useParams();

  switch (reportId) {
    case '7':
      return <ReportEngineers list={reportData} />;
    case '8':
      return <ReportEngineer engineer={reportData} />;
    case '9':
      return <ReportArrivals reportData={reportData} />;
    case '10':
      return <ReportWorkParams reportData={reportData} />;
    default:
      return (
        <ReportCommon reportData={reportData} isRefetching={isRefetching} />
      );
  }
}

export default Report;
