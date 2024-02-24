import { Customer } from "@/common/types/response";
import Image from "next/image";
import React from "react";

interface CardCustomerProps {
  data: Customer;
}

export default function CardCustomer({ data }: CardCustomerProps) {
  return (
    <div className="w-full h-auto border rounded-2xl p-6 lg:p-10 flex flex-col gap-y-4 drop-shadow">
      <Image
        src="/icons/quotation-mark.png"
        alt="quotation-mark"
        priority
        width="0"
        height="0"
        sizes="100vw"
        className="w-[35px] xl:w-[50px] h-auto"
      />
      <p className="capitalize text-[12px] md:text-[14px] xl:text-base">
        {data.message}
      </p>
      <div className="flex items-center gap-x-3">
        <Image
          src={data.image}
          alt={data.name}
          priority
          width="0"
          height="0"
          sizes="100vw"
          className="w-[35px] xl:w-[50px] h-[35px] xl:h-[50px] object-cover rounded-full"
        />
        <div>
          <h1 className="font-medium text-[14px] md:text-base xl:text-lg">
            {data.name}
          </h1>
          <p className="text-[12px] md:text-[14px] xl:text-base">
            {data.position}
          </p>
        </div>
      </div>
    </div>
  );
}
