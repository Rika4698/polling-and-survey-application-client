import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";


const useSurveyList = () => {
    const axiosPublic = useAxiosPublic();
    const {data: survey = [],  isLoading, refetch,isFetching} = useQuery({
        queryKey: ['survey'], 
        queryFn: async() =>{
            const res = await axiosPublic.get('/survey');
            // console.log(res.data);
            return res.data;
        }
    })


    return [survey, isLoading, refetch,isFetching]
};

export default useSurveyList;