import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useLoadWishList = () => {
    const axiosPublic = useAxiosPublic();

    const {data: wishList = [], isLoading, refetch} = useQuery({
        queryKey: ['wishList'],
        queryFn: async () => {
            const result = await axiosPublic.get('/wishlist')
            return result.data;
        }
    })
    return {wishList, isLoading, refetch};
};

export default useLoadWishList;