import { useParams } from 'react-router-dom';

import ReportCommon from './ReportCommon';
import ReportEngineers from './ReportEngineers';
import ReportEngineer from './ReportEngineer';
import ReportArrivals from './ReportArrivals';
import ReportWorkParams from './ReportWorkParams';
import ReportComparative from './ReportComparative';

function Report({ reportData, isRefetching }) {
  const { reportId } = useParams();

  switch (reportId) {
    case '7':
    case '22':
      return <ReportEngineers list={reportData} />;
    case '8':
    case '23':
      return <ReportEngineer engineer={reportData} />;
    case '9':
    case '11':
    case '12':
      return <ReportArrivals reportData={reportData} />;
    case '10':
      return <ReportWorkParams reportData={reportData} />;
    case '16':
    case '17':
    case '18':
    case '19':
      return <ReportComparative reportData={reportData} />;
    default:
      return (
        <ReportCommon reportData={reportData} isRefetching={isRefetching} />
      );
  }
}

export default Report;
