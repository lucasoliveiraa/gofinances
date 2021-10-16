import React from 'react';
import { HistoryCar } from '../../components/HistoryCar';

import { 
  Container,
  Content,
  Header,
  Title, 
} from './styles';

export function Resume(){
  return (
    <Container>
      <Header>
        <Title>Resumo por categoria</Title>
      </Header>

      <Content>

        <HistoryCar 
          title="Resumo"
          amount="15,50"
          color="red"
        />
      </Content>
    </Container>
  )
}