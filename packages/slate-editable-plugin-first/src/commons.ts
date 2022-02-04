export const compose = <R>(fn1: (a: R) => R, ...fns: Array<(a: R) => R>) =>
  fns.reduceRight((prevFn, nextFn) => (value) => nextFn(prevFn(value)), fn1);
