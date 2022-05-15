export type MyTextProps = {
  text: string;
};

const MyText = ({ text }: MyTextProps) => {
  return <div>{text}</div>;
};

export default MyText;
