export interface Props {
  value?: string
  placeholder?: string
  handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  handleSubmit?: (event: React.KeyboardEvent<HTMLInputElement>) => void
}

export const defaultProps = {
  value: '',
  placeholder: '',
  handleSubmit: () => {},
  handleChange: () => {},
};
