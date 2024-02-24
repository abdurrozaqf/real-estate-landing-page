import { MENU_CUSTOMER } from "@/common/mocks/customer";
import CardCustomer from "@/components/elements/CardCustomer";
import React from "react";

type CustomersProps = {};

export default function Customers({}: CustomersProps) {
  return (
    <section
      id="customers"
      className="w-full flex flex-col gap-y-12 items-center px-4 md:px-16 2xl:px-48 py-28"
    >
      <h1 className="font-medium text-3xl md:text-4xl xl:text-5xl text-center">
        Kind Words From Our <br /> Happy Customers
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 overflow-auto">
        {MENU_CUSTOMER.map((item) => (
          <CardCustomer data={item} />
        ))}
      </div>
    </section>
  );
}
