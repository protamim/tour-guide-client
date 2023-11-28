import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useLoadUsers = () => {
    const axiosPublic = useAxiosPublic();

    const {data: users = [], isLoading, refetch} = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const result = await axiosPublic.get('/users')
            return result.data;
        }
    })
    return {users, isLoading, refetch};
};

export default useLoadUsers;