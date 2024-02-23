import { useMutation, useQueryClient } from '@tanstack/react-query';

import { editCommonReport as editCommonReportAPI } from '../../services/apiCommonReport';

export function useEditCommonReport() {
  const queryClient = useQueryClient();

  const { mutate: editCommonReport, isLoading: isEditing } = useMutation({
    mutationFn: (filterData) => editCommonReportAPI(filterData),
    onSuccess: (data) => {
      queryClient.setQueryData(['commonReport'], data);
    },
  });

  return { editCommonReport, isEditing };
}
