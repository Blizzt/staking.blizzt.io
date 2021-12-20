// Dependencies
import React from 'react';

// Assets
import BlizztLogo from '@assets/logo.svg';

// Styled Components
import * as styled from './styles'

function Header() {
  return (
    <styled.Layout>
      <styled.Logotype
        src={BlizztLogo}
        alt={'Blizzt logo'}
        width={42}
        height={42}
      />
    </styled.Layout>
  );
}

export default Header;