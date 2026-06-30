import Image from "next/image";
import {
  MdOutlineBathtub,
  MdOutlineLocationOn,
  MdOutlineDirectionsCar,
} from "react-icons/md";
import { LuBedDouble } from "react-icons/lu";

import { Card, CardContent } from "@/components/ui/card";
import { formatCurrency } from "@/utils/formatter";
import { Rent } from "@/common/types/response";

interface CardRentProps {
  data: Rent;
}

export default function CardRent({ data }: CardRentProps) {
  return (
    <Card className="cursor-pointer overflow-hidden bg-white shadow-sm transition-all duration-300 hover:scale-[1.01]">
      <Image
        alt={data.title}
        src={data.image}
        priority
        width="0"
        height="0"
        sizes="100vw"
        className="h-[350px] w-full object-cover xl:h-[450px]"
      />
      <CardContent className="px-4 py-4 lg:px-6 lg:py-6">
        <h2 className="mb-2 text-2xl font-medium capitalize text-primary lg:text-3xl">
          {formatCurrency(data.price)}
        </h2>
        <h3 className="text-base font-medium capitalize lg:text-lg">
          {data.title}
        </h3>
        <div className="my-4 border" />
        <div className="text-[12px] md:text-[14px] lg:text-base">
          <p className="mb-4 flex items-center gap-x-2 capitalize">
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
      </CardContent>
    </Card>
  );
}
