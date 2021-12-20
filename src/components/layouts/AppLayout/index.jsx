// Dependencies
import React from 'react';

// Styled Components
import * as styled from './styles';

// Components
import Header from "@components/navigation/Header";
import StakingForm from "@components/forms/StakingForm";


function App() {
  return (
    <styled.Layout>
      <Header />
      <StakingForm />
    </styled.Layout>
  );
}

export default App;