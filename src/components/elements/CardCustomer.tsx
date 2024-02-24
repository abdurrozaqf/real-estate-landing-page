import { Avatar, Card } from "antd";
import Image from "next/image";

import { Customer } from "@/common/types/response";

interface CardCustomerProps {
  data: Customer;
}

export default function CardCustomer({ data }: CardCustomerProps) {
  return (
    <Card className="w-full h-auto">
      <Image
        src="/icons/quotation-mark.png"
        alt="quotation-mark"
        priority
        width="0"
        height="0"
        sizes="100vw"
        className="w-[35px] xl:w-[50px] h-auto mb-6"
      />
      <p className="capitalize text-[12px] md:text-[14px] xl:text-base mb-4">
        {data.message}
      </p>
      <div className="flex items-center gap-x-3">
        <Avatar
          src={data.image}
          alt={data.name}
          className="w-[35px] xl:w-[50px] h-[35px] xl:h-[50px]"
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
    </Card>
  );
}
