import { libraryGenerator } from '@nx/angular/generators';
import { Tree, formatFiles } from '@nx/devkit';
import { Schema } from './schema';

export async function moduleGenerator(tree: Tree, options: Schema) {
  await libraryGenerator(tree, {
    ...options,
    style: 'scss',
    directory: options.directory
      ? `modules/${options.directory}/${options.name}`
      : `modules/${options.name}`,
    lazy: options.routing,
  });
  await formatFiles(tree);
}

export default moduleGenerator;
