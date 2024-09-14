import { libraryGenerator } from '@nx/angular/generators';
import { Tree, formatFiles } from '@nx/devkit';
import { Schema } from './schema';

export async function moduleGenerator(tree: Tree, options: Schema) {
  await libraryGenerator(tree, {
    ...options,
    style: 'scss',
    directory: options.directory
      ? `libs/${options.directory}/${options.name}`
      : `libs/${options.name}`,
    projectNameAndRootFormat: 'as-provided',
    lazy: options.routing,
  });
  await formatFiles(tree);
}

export default moduleGenerator;
