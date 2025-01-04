import { ChangeEventHandler } from "react";
import { SmallLoadingSpinner } from "../Loader/Loader";

interface SpacerProps {
  width?: number;
  height?: number;
  className?: string;
}

export const Spacer = ({ width, height, className }: SpacerProps) => {
  return <div style={{ width, height }} className={className || ""}></div>;
};

interface InputProps {
  type: string;
  className?: string;
  onChange?: ChangeEventHandler | undefined;
  placeholder?: string;
  outerClassName?: string;
  name?: string;
  label?: string;
}

interface ButtonProps {
  className?: string;
  onClick: () => void;
  isBusy?: boolean;
  name?: string;
}

export const AppInput = ({
  type,
  className,
  onChange,
  placeholder,
  outerClassName,
  label,
  name,
}: InputProps) => {
  return (
    <div className={outerClassName}>
      {label && <label className="ilabel">{label}</label>}
      <input
        onChange={onChange}
        className={`${className} app-input`}
        type={type ? type : "text"}
        placeholder={placeholder}
        name={name}
      />
    </div>
  );
};

export const AppButton = ({
  onClick,
  isBusy,
  name,
  className,
}: ButtonProps) => {
  return (
    <button onClick={onClick} className={`${className} button`}>
      {isBusy ? <SmallLoadingSpinner /> : name}
    </button>
  );
};

export const EmptyComponent = () => {
  return (
    <div className="full-width full-height d-flex justify-center align-center flex-column ">
      <p className="fw600 fontSize-13em">Not Found</p>
      <p className="fontSize-12em">User not found</p>
    </div>
  );
};
