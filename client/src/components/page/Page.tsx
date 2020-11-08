import './Page.css';

import { block } from 'bem-cn';
import React from 'react';

const b = block('page');

type PropsWithChildren = React.PropsWithChildren<Record<string, unknown>>;

function Page(props: PropsWithChildren): JSX.Element {
  return (
    <div className={b()}>
      <div className={b('content')}>{props.children}</div>
    </div>
  );
}

export default Page;
