export interface Tasks {
  id?: number;
  name: string;
  description: string;
  status?: string;
  duration: number;
  dueDate: number;
}
export interface UserData {
  id: number;
  tasks: Tasks[];
}
