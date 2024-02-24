import Image from "next/image";
import React from "react";

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
    <div className="flex flex-col rounded-2xl overflow-hidden bg-white drop-shadow cursor-pointer hover:scale-[1.02] transition-all duration-300">
      <Image
        src={data.image}
        priority
        alt={data.title}
        width="0"
        height="0"
        sizes="100vw"
        className="w-full h-[350px] xl:h-[450px] object-cover relative"
      />
      <div className="px-8 py-4">
        <h1 className="capitalize font-medium text-2xl lg:text-3xl text-[#4B73FF] mb-2">
          {formatCurrency(data.price)}
        </h1>
        <h1 className="capitalize font font-medium text-base lg:text-lg">
          {data.title}
        </h1>
      </div>
      <div className="border" />
      <div className="px-8 pt-4 pb-8 text-[12px] md:text-[14px] lg:text-base">
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
    </div>
  );
}
