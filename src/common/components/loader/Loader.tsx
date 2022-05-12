import { FC } from 'react';

interface Props {
  text?: string;
}
const Loader: FC<Props> = ({ text = 'Loading...' }) => {
  return <p>{text}</p>;
};
export default Loader;
