import { useState } from "react";
import { FaClock, FaEye } from "react-icons/fa";
import { IoIosLock } from "react-icons/io";
import { IoMail } from "react-icons/io5";
import { RiSearch2Fill, RiUser3Fill } from "react-icons/ri";
import { Spinner } from "../suportPages/loading";
type IconTypes = "password" | "user" | "email" | "search" | "time";
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  errors?: string;
  icon?: IconTypes;
  searching?: boolean;
  afterLabel?: string;
}

export const Input = (props: InputProps) => {
  const { label, icon, errors } = props;

  const RenderIcon = () => {
    switch (icon) {
      case "password":
        return <IoIosLock />;
      case "user":
        return <RiUser3Fill />;
      case "email":
        return <IoMail />;
      case "search":
        return <RiSearch2Fill />;
      case "time":
        return <FaClock />;
      default:
        return null;
    }
  };
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className={`flex gap-1 flex-col  ${props.className}`}>
      {(label || errors) && (
        <div className="flex w-full justify-between items-center text-black dark:text-white">
          {label && <label className="font-medium">{label}</label>}
          {errors && <span className="text-red-500 text-sm">* {errors}</span>}
        </div>
      )}

      <div
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className={`w-full flex items-center border transition-colors ${
          errors
            ? "border-red-500"
            : isFocused
            ? "border-purple-500 "
            : "border-zinc-700"
        } rounded-xl dark:bg-zinc-950 bg-zinc-200 p-2 px-3 dark:text-zinc-500 text-zinc-600 text-xl`}
      >
        <RenderIcon />

        <input
          {...props}
          className={`bg-transparent w-full dark:text-white text-black px-3 outline-none text-base`}
        />
        {props.afterLabel && (
          <label className="font-medium text-sm">{props.afterLabel}</label>
        )}
        {props.type === "password" && (
          <FaEye
            className="text-zinc-500 text-xl cursor-pointer mr-1"
            onClick={() => {
              const input = document.querySelector(
                `input[name="${props.name}"]`
              ) as HTMLInputElement;
              if (input) {
                input.type = input.type === "password" ? "text" : "password";
              }
            }}
          />
        )}
        {props.searching && <Spinner />}
      </div>
    </div>
  );
};
