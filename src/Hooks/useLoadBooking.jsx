import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";

const useLoadBooking = () => {
    const axiosPublic = useAxiosPublic();
    const {user} = useContext(AuthContext)

    const {data: bookings = [], isLoading, refetch} = useQuery({
        queryKey: ['bookings'],
        queryFn: async () => {
            const result = await axiosPublic.get(`/booking/${user?.email}`)
            return result.data;
        }
    })
    return {bookings, isLoading, refetch};
};

export default useLoadBooking;