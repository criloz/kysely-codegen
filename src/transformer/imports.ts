import { ModuleReferenceNode } from '../ast';

export const GLOBAL_IMPORTS = {
  ColumnType: new ModuleReferenceNode('kysely'),
  JSONColumnType: new ModuleReferenceNode('kysely'),
};
