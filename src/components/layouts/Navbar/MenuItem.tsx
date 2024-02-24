import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import { Button } from "antd";
import Link from "next/link";

import { AiOutlineAlignRight } from "react-icons/ai";

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
    <div className="w-full flex flex-col lg:flex-row gap-y-6 lg:gap-x-8 2xl:gap-x-16 lg:items-center">
      <div className="flex justify-between items-center">
        <Link href="#home" aria-label="home">
          <Image
            src="/logo.png"
            alt="logo"
            width="0"
            height="0"
            sizes="100vw"
            className="w-[120px] h-auto"
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
          <div className="flex lg:hidden flex-col gap-y-6 tracking-wide ml-2">
            {items.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="text-sm lg:text-lg capitalize font-medium text-neutral-600"
              >
                {item.title}
              </Link>
            ))}
          </div>
          <div className="lg:hidden flex flex-col gap-y-4">
            <Button
              type="text"
              aria-label="login"
              className="h-auto font-medium tracking-wide"
            >
              <p className="text-lg">Log in</p>
            </Button>
            <Button
              aria-label="create-account"
              className="h-auto py-2 px-8 rounded-2xl bg-black text-white"
            >
              <p className="text-lg">Create Account</p>
            </Button>
          </div>
        </>
      )}
      <div className="hidden lg:flex gap-x-12 tracking-wide">
        {items.map((item) => (
          <Link
            key={item.title}
            href={item.href}
            className="capitalize font-medium text-neutral-600"
          >
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
}
