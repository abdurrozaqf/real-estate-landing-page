import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineAlignRight } from "react-icons/ai";

import { Button } from "@/components/ui/button";
import { toggleValue, selectToggleValue } from "@/utils/toggleSlice";
import { MenuItems } from "@/common/types/menu";

interface MenuItemProps {
  items: MenuItems[];
}

export default function MenuItem({ items }: MenuItemProps) {
  const dispatch = useDispatch();
  const toggleState = useSelector(selectToggleValue);
  const handleToggle = () => {
    dispatch(toggleValue());
  };

  return (
    <div className="flex w-full flex-col gap-y-6 lg:flex-row lg:items-center lg:gap-x-8 2xl:gap-x-16">
      <div className="flex items-center justify-between">
        <Link href="#home" aria-label="home">
          <Image
            src="/logo.png"
            alt="logo"
            width="0"
            height="0"
            sizes="100vw"
            className="h-auto w-[120px]"
          />
        </Link>
        <button
          type="button"
          onClick={handleToggle}
          aria-label="btn-navbar"
          className="block lg:hidden"
        >
          <AiOutlineAlignRight />
        </button>
      </div>
      {toggleState && (
        <>
          <div className="ml-2 flex flex-col gap-y-6 tracking-wide lg:hidden">
            {items.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="text-sm font-medium capitalize text-neutral-600 lg:text-lg"
              >
                {item.title}
              </Link>
            ))}
          </div>
          <div className="flex flex-col gap-y-4 lg:hidden">
            <Button variant="ghost" size="lg" aria-label="login">
              Log in
            </Button>
            <Button variant="inverse" size="lg" aria-label="create-account">
              Create Account
            </Button>
          </div>
        </>
      )}
      <div className="hidden gap-x-12 tracking-wide lg:flex">
        {items.map((item) => (
          <Link
            key={item.title}
            href={item.href}
            className="font-medium capitalize text-neutral-600"
          >
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
}
