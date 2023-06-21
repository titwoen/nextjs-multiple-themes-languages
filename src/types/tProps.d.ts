/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/no-redeclare */
import type { JSXElementConstructor, PropsWithoutRef } from 'react';
import type React from 'react';

export type TProps<P, A extends keyof JSX.IntrinsicElements = 'div'> = P &
  Omit<JSX.IntrinsicElements[A], keyof P>;

declare let __: '1D45E01E-AF44-47C4-988A-19A94EBAF55C';
export declare type __ = typeof __;
export type ReactTag =
  | keyof JSX.IntrinsicElements
  | JSXElementConstructor<any>
  | React.ComponentType;
type PropsOf<TTag extends ReactTag> = TTag extends React.ElementType
  ? Omit<React.ComponentProps<TTag>, 'ref'>
  : never;

type OurProps<TTag extends ReactTag, TSlot> = {
  ref?: React.Ref<HTMLElement>;
  as?: TTag;
  children?: React.ReactNode | ((bag: TSlot) => React.ReactElement);
};
type PropsWeControl = keyof OurProps<any, any>;
declare type CleanProps<
  TTag extends ReactTag,
  TOmitableProps extends PropertyKey = __
> = TOmitableProps extends __
  ? Omit<PropsOf<TTag>, PropsWeControl>
  : Omit<PropsOf<TTag>, TOmitableProps | PropsWeControl>;

type PropsWithStandardRef<T extends ReactTag, Props = unknown> = Props &
  CleanProps<T> &
  OurProps<T, object>;
export type CustomElementProps<
  T extends React.ElementType<any> = 'div',
  P = unknown
> = P & Omit<CleanProps<T>, keyof P> & OurProps<T, object>;

export type Props<T extends ReactTag, P = unknown, TSlot = object> = P &
  Omit<CleanProps<T>, keyof P> &
  Omit<OurProps<T, TSlot>, keyof P>;
// export type Props<TTag extends ReactTag, TSlot = {}, TOmitableProps extends PropertyKey = never, Overrides = {}> = CleanProps<TTag, TOmitableProps | keyof Overrides> & OurProps<TTag, TSlot> & ClassNameOverride<TTag, TSlot> & Overrides;

type GetObject<T extends object> = { [K in keyof T]: T[K] };

export type ComponentDynamicRef<Props, S extends ReactTag = 'section'> = <
  T extends React.ElementType<Props> | ReactTag = S
>(
  props: PropsWithStandardRef<T, Props>
) => React.ReactElement<any, any> | null;

// With ref as element
export type ComponentWithRef<
  Props,
  S extends ReactTag
> = React.ForwardRefExoticComponent<
  PropsWithoutRef<TProps<Props, S>> & React.RefAttributes<any>
>;
