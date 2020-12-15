export interface Props {
  items?: Array<Item>
}

export const defaultProps: Props = {
  items: [],
};

export interface Item {
  id: string
}
