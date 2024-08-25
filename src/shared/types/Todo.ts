export interface ITodo {
  id: number;
  title: string;
  description: string;
  completed: boolean;
}

export enum EFilter {
  ALL = "All",
  COMPLETE = "incomplete",
  INCOMPLETE = "complete",
}
