type TypeButton = {
  className: string;
  children: string;
  onClick: React.MouseEventHandler<HTMLDivElement> | undefined;
};
const Button = ({ className, children, onClick }: TypeButton) => {
  const classes = `${className || ""}`;
  return (
    <div
      className={`${classes} dark:font-bold dark:text-cyan-500`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default Button;
