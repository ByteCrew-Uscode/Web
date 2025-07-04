import { Button } from '@/shared/ui';

export const HomeButton = ({
  icon,
  label,
  description,
  buttonLabel,
  onClick = () => {},
  isAtag = false,
}: {
  icon: string;
  label: string;
  description: string;
  buttonLabel: string;
  onClick?: () => void;
  isAtag?: boolean;
}) => {
  return (
    <div className="shadow-homeBox py-normal w-full rounded-md bg-white px-[17px]">
      <p className="mb-2 text-xl font-bold">{label}</p>
      {description.split('<br/>').map((line, index) => (
        <p className="text-s" key={index}>
          {line}
        </p>
      ))}
      {isAtag ? (
        <a
          href="tel:+13239911974"
          className="border-m text-m hover:bg-m-hover active:bg-m-hover mt-[26px] flex w-full cursor-pointer items-center justify-center rounded-full border-[1px] py-3 font-semibold focus:outline-none"
          onClick={onClick}
        >
          <img src={icon} className="mr-2" />
          <span>{buttonLabel}</span>
        </a>
      ) : (
        <Button onClick={onClick} className="mt-[26px]" intent="home">
          <img src={icon} className="mr-2" />
          <span>{buttonLabel}</span>
        </Button>
      )}
    </div>
  );
};
