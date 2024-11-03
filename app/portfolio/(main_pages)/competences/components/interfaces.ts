export interface Technology {
  _id: number;
  name: string;
  icon: string;
}

export interface DataStructure {
  backend: Technology[];
  frontend: Technology[];
  other: Technology[];
}
