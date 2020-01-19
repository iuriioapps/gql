// TODO: There's an issue with fragments.
// Tracking here: https://github.com/stems/graphql-depth-limit/issues/9
import depthLimit from 'graphql-depth-limit';

export default [
    depthLimit(5)
];
