export interface Technology {
  _id: string;
  name: string;
  icon: string;
}

export interface DataStructure {
  backend: Technology[];
  frontend: Technology[];
  other: Technology[];
}
