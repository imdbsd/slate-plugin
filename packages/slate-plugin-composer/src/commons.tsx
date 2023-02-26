import {RenderElementProps, DefaultElement} from 'slate-react'

export const compose = <R,>(fn1: (a: R) => R, ...fns: Array<(a: R) => R>) =>
  fns.reduceRight((prevFn, nextFn) => (value) => nextFn(prevFn(value)), fn1)

export type RenderElementFunc = (
  props: RenderElementProps,
  next?: RenderElementFunc
) => JSX.Element

export const composeRenderElements = (
  ...renderElements: RenderElementFunc[]
) => (props: RenderElementProps) => {
  const render = renderElements.reduceRight(
    (sum, renderElement) => (props, next) =>
      renderElement(props, (nextProps) => sum({...props, ...nextProps}, next))
  )
  return render(props, DefaultElement)
}
