export interface IButtonCommonProps {
  children: React.ReactNode;
  dark?: boolean;
}
export function ButtonCommon({ children, dark }: IButtonCommonProps) {
  return (
    <button
      className={`${
        dark ? "hover:bg-black text-white bg-primary border-white" : ""
      } border border-black md:p-4 md:px-6 p-1`}
    >
      {children}
    </button>
  );
}
