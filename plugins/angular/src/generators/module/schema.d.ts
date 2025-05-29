export interface Schema {
  name: string;
  directory?: string;
  prefix?: string;
  routing?: boolean;
  tags?: string;
  standalone?: boolean;
  projectNameAndRootFormat?: 'as-provided' | 'derived';
}
