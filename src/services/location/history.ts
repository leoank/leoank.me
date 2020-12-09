import { createHistory } from '@reach/router'

/**
 * createHistory function needs to be updated to also accept Window:
 * like export function createHistory(source: HistorySource | Window): History;
 *
 * But currently it only accept source as HistorySource so we have used
 * window as any
 *
 * More details at:
 * https://github.com/DefinitelyTyped/DefinitelyTyped/issues/36198
 *
 * TODO: Update when @types/reach__router updates.
 */
const history = createHistory(window as any)

export { history }
