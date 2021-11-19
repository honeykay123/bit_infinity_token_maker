import React from "react";
import clsx from "clsx";

interface Props {
  label?: string;
  classes?: Partial<Record<"root" | "input" | "label", string>>;
  onChange(arg: boolean): void;
  value: boolean;
}

const Toggle: React.FunctionComponent<Props> = (props) => {
  const {label, classes, onChange, value} = props;
  return (
    <div
      onClick={() => onChange(!value)}
      className={clsx(classes?.root || "flex items-center justify-center")}
    >
      {label && <span className="text-sm mr-4"> {label}</span>}
      <input type="checkbox" className="hidden" />
      <label
        className="relative w-12 h-6 flex select-none cursor-pointer"
        htmlFor="toggle"
      >
        <span
          className={clsx(
            `
        absolute
        left-0
        top-0
        h-full
        w-full
        rounded-full
        `,
            value ? `bg-purple-700` : `bg-gray-300`
          )}
        ></span>
        <span
          className={clsx(
            `
        h-6
        w-6
        border-2
        absolute
        z-10
        rounded-full
        bg-white
        transform
        transition-transform
        duration-300
        ease-in-out
        flex
        justify-center
        items-center
        border-gray-300
        `,
            value && `translate-x-6`
          )}
        ></span>
      </label>
    </div>
  );
};

export default Toggle;
