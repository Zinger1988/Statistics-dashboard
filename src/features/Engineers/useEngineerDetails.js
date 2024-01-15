import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';

import { getEngineer } from '../../services/apiEngineers';

export function useEngineerDetails() {
  const { id } = useParams();

  const { isLoading, data, error } = useQuery({
    queryKey: ['engineerDetails'],
    queryFn: () => getEngineer(id),
  });

  return { isLoading, data, error };
}
