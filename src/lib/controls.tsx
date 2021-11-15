import React from 'react';

interface HasChildren {
  children: React.ReactElement | React.ReactElement[]
}
interface ConditionProps extends HasChildren {
  condition: boolean
}
interface ForProps {
  of: any,
  body: (item: any, index: number) => React.ReactElement
}
interface WithProps extends HasChildren {
  [s: string]: any
}

export const If: React.FC<ConditionProps> = ({ condition, children }) => {
  const [ otherwise, kids ] = ((kids) => [
    kids.find(
      // @ts-ignore
      (kid) => kid?.props?.__type === 'Otherwise'
    ) || null,
    kids.filter(
      // @ts-ignore
      (kid) => kid?.props?.__type !== 'Otherwise'
    ),
  ])(React.Children.toArray(children));

  if (condition) {
    return (<>{kids}</>);
  }
  return otherwise as React.ReactElement;
};

export const For: React.FC<ForProps> = ({ of: source, body }) => {
  const content = [] as React.ReactElement[];
  let index = 0;
  for (let item of source) {
    content.push(body(item, index++));
  }

  return (<>{content}</>);
};

export const With: React.FC<WithProps> = ({ children, ...rest }) => {
  const clones = React.Children.map(
    children,
    (child) => (
      // @ts-ignore
      React.cloneElement(child, rest)
    )
  );
  return (
    <>{ clones }</>
  )
};

export const When = If;

export const Otherwise: React.FC<HasChildren> = ({ children }) => (<>{children}</>);
Otherwise.defaultProps = {
  __type: 'Otherwise'
} as any;

export const Choose: React.FC<{
  children: React.ReactElement<ConditionProps | HasChildren>[]
}> = ({ children }) => {
  const child = React.Children
    .toArray(children)
    .find(child => !!child);

  return (<>{child}</>);
};
