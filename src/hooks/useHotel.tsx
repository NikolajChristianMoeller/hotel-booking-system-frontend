import {useEffect, useState} from "react";
import Api from "../utils/Api.tsx";
import type {THotel} from "../types/hotel.type.ts";

export default function useHotel() {

    const [hotel, setHotel] = useState<THotel[]>([]);

    useEffect(() => {
        void getHotels();
    },[])

    const getHotels = async () => {
        try {
            const res = await Api.get("hotels");
            setHotel(res)
        }
        catch (e) {
            console.error(e);
        }
    }

    const createHotel = async (hotel: THotel) => {
        try {
            const res = await Api.post("hotels", hotel);
            setHotel((prev) => [...prev, res]);
        }
        catch (e) {
            console.error(e);
        }
    }

    return {
        hotel,
        createHotel
    }
}