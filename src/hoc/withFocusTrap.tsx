import React, { Component, ComponentClass, StatelessComponent } from 'react';
import FocusTrap from 'focus-trap-react';
type ComponentType<P = {}> = ComponentClass<P> | StatelessComponent<P>;
// First we need to add a type to let us extend the incoming component.
// export default function <P = {}>(WrappedComponent: ComponentType<P>): ComponentClass<P> {
//   return class extends Component<P> {
//     render() {
//       // if (typeof WrappedComponent === React.Component) {

//       return (
//         <div>
//         {WrappedComponent}</div>
//       );
//     }
//   };
// }
// interface AwaysCoolStateProps {
//   areYouCool: boolean;
// }

// function youreAlwaysCoolHOC(ChildComp: React.ComponentType<any | string>) {
//   return class Component extends React.Component<{}, AwaysCoolStateProps> {
//     state = {
//       areYouCool: false
//     };

//     handleClick = () => this.setState({ areYouCool: true });

//     render() {
//       return (
//         <div>
//           <button onClick={this.handleClick}>Find yout if you're cool</button>
//           <ChildComp areYouCool={this.state.areYouCool} />
//         </div>
//       );
//     }
//   };
// }

const withFocusTrap = (WrappedComponent: React.FC) => (open: boolean) => {
  return open ? (
    <FocusTrap>
      <WrappedComponent />
    </FocusTrap>
  ) : (
    <WrappedComponent />
  );
};

export default withFocusTrap;

// function withOwner(owner: string) {
//   return function <T extends { owner: string }>(
//     Component: React.ComponentType<T>
//   ) {
//     return function (props: Omit<T, "owner">): JSX.Element {
//       const newProps = { ...props, owner } as T;
//       return <Component {...newProps} />;
//     };
//   };
// }

// export type WrapperProps = { special-prop?: string; specialProp?: string };
// const Wrapper = <P extends WrapperProps>(WrappedComponent: React.ComponentType<P>): React.FC<P> => {
//     const Wrapper = (props: P) => {
//         return <WrappedComponent data-special-prop={props['special-prop'] || props.specialProp} {...props} />;
//     };
// };

// export default Wrapper;
