import { useQuery } from "@tanstack/react-query";
import { getLabels } from "../actions";

export const LabelPicker = () => {

  const labelsQuery = useQuery({
    queryKey: ['labels'],
    queryFn: getLabels,
  })

  if (labelsQuery.isLoading) {
    return (
      <div className="flex justify-center items-center h-25">
        Espere...
      </div>
    )
  } 


  return (
    <>
      <span
        className="px-2 py-1 rounded-full text-xs font-semibold hover:bg-slate-800 cursor-pointer"
        style={{ border: `1px solid #ffccd3`, color: '#ffccd3' }}
      >
        Primary
      </span>
    </>
  );
};
