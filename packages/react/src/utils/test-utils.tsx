import React, { PropsWithChildren } from 'react';

import { Navigation } from '../components/navigation';

export const NavigationWrapper = ({ children }: PropsWithChildren<{}>) => (
  <Navigation
    menuCloseAriaLabel="close"
    menuOpenAriaLabel="open"
    skipTo="#content"
    skipToContentLabel="Skip to content"
    title="Foo"
  >
    {children}
  </Navigation>
);
