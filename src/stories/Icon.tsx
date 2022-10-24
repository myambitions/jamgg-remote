import { Icon } from "components/icon";
import "./index.module.css";

interface Props {
  name: "arrowRight" | "arrowLeft";
  onClick?: () => void;
}

export const CoreIcon = ({ name, ...props }: Props) => {
  return <Icon name={name} {...props} />;
};
