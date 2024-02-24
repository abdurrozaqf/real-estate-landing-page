import { Card } from "antd";

import {
  MdOutlineBathtub,
  MdOutlineLocationOn,
  MdOutlineDirectionsCar,
} from "react-icons/md";
import { LuBedDouble } from "react-icons/lu";

import { formatCurrency } from "@/utils/formatter";
import { Rent } from "@/common/types/response";

interface CardRentProps {
  data: Rent;
}

export default function CardRent({ data }: CardRentProps) {
  return (
    <Card
      cover={
        <img
          alt={data.title}
          src={data.image}
          loading="lazy"
          className="w-full h-[350px] xl:h-[450px] object-cover"
        />
      }
      className="rounded-2xl overflow-hidden bg-white drop-shadow-sm cursor-pointer hover:scale-[1.01] transition-all duration-300"
    >
      <div className="px-0 lg:px-4 py-0 lg:py-4">
        <h1 className="capitalize font-medium text-2xl lg:text-3xl text-[#4B73FF] mb-2">
          {formatCurrency(data.price)}
        </h1>
        <h1 className="capitalize font font-medium text-base lg:text-lg">
          {data.title}
        </h1>
      </div>
      <div className="border mx-0 lg:mx-4 my-4" />
      <div className="px-0 lg:px-4 pb-0 lg:pb-8 text-[12px] md:text-[14px] lg:text-base">
        <p className="capitalize flex items-center gap-x-2 mb-4">
          <MdOutlineLocationOn /> {data.location}
        </p>
        <p className="flex justify-between capitalize">
          <span className="flex items-center gap-x-2">
            <LuBedDouble /> {data.rooms.bed} Bed
          </span>
          <span className="flex items-center gap-x-2">
            <MdOutlineBathtub /> {data.rooms.bath} Bath
          </span>
          <span className="flex items-center gap-x-2">
            <MdOutlineDirectionsCar />
            {data.rooms.parking} Parking
          </span>
        </p>
      </div>
    </Card>
  );
}
