import { MouseEventHandler } from "react";
import "./Backdrop.css";
interface backdropProps {
  clicked: MouseEventHandler<HTMLDivElement>;
}
const Backdrop = (props: backdropProps) => {
  return <div onClick={props.clicked} className="backdrop"></div>;
};
export default Backdrop;
