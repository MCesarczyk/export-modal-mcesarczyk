import "./style.css";

type innerWrapperProps = {
  children: JSX.Element | JSX.Element[]
}

const InnerWrapper = ({ children }: innerWrapperProps) => (
  <div className="InnerWrapper">
    {children}
  </div>
);

export default InnerWrapper;