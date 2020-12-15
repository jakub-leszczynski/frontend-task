export interface Props {
  value?: string
  placeholder?: string
  handleChange?: () => void
}

export const defaultProps = {
  value: '',
  handleChange: () => {},
};
