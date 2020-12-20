import { Props, defaultProps } from './Loader.types';
import * as S from './Loader.styles';

const Loader: React.FC<Props> = ({ loading, children }) => (
  <>
    {loading ? (
      <S.Loader />
    ) : (
      children
    )}
  </>
);

Loader.defaultProps = defaultProps;

export default Loader;
