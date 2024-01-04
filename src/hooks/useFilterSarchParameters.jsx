import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

function useFilterSarchParameters(defaultParameters) {
  const [searchParams] = useSearchParams();
  const [params, setParams] = useState();

  setParams(
    Object.keys(defaultParameters)
      .map((key) => ({ key, parameter: searchParams.get(key) }))
      .filter((item) => !!item.parameter),
  );

  return params;
}

export default useFilterSarchParameters;
