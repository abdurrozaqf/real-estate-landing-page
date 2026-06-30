import Image from "next/image";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Customer } from "@/common/types/response";

interface CardCustomerProps {
  data: Customer;
}

export default function CardCustomer({ data }: CardCustomerProps) {
  const initials = data.name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <Card className="h-auto w-full">
      <CardContent className="pt-6">
        <Image
          src="/icons/quotation-mark.png"
          alt="quotation-mark"
          priority
          width="0"
          height="0"
          sizes="100vw"
          className="mb-6 h-auto w-[35px] xl:w-[50px]"
        />
        <p className="mb-4 text-[12px] capitalize md:text-[14px] xl:text-base">
          {data.message}
        </p>
        <div className="flex items-center gap-x-3">
          <Avatar size="lg" className="size-[35px] xl:size-[50px]">
            <AvatarImage src={data.image} alt={data.name} />
            <AvatarFallback>{initials}</AvatarFallback>
          </Avatar>
          <div>
            <h3 className="text-[14px] font-medium md:text-base xl:text-lg">
              {data.name}
            </h3>
            <p className="text-[12px] md:text-[14px] xl:text-base">
              {data.position}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
