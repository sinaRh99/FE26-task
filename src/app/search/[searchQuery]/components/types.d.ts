export interface SearchItemProps {
  item: SearchResponseObject;
}

export interface SearchResponseObject {
  id: number;
  date: string;
  fullLabel: string;
  price: string;
  time: string;
}
