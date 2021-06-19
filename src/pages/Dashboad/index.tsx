import React from 'react';

import { HighlightCard } from '../../components/HighlightCard';
import { TransactionCard, TransactionCardProps } from '../../components/TransactionCard';

import { 
  Container,
  Header,
  UserWrapper,
  UserInfo,
  Photo,
  User,
  UserGreeting,
  UserName,
  Icon,
  HighlightCards,
  Transactions,
  Title,
  TransactionsList,
} from './styles';

export interface DataListProps extends TransactionCardProps {
  id: string;
}

export function Dashboard() {
  const data: DataListProps[] = [
    {
      id: '1',
      type: 'positive',
      title: "Desenvolvimento de site" ,
      amount: "R$ 12.000,00" ,
      category: {
        name: 'Vendas',
        icon: 'dollar-sign'
      },
      date: "13/04/2021",
    },
    {
      id: '2',
      type: 'negative',
      title: "Desenvolvimento de site" ,
      amount: "R$ 7.000,00" ,
      category: {
        name: 'Vendas',
        icon: 'shopping-bag'
      },
      date: "13/04/2021",
    },
    {
      id: '3',
      type: 'negative',
      title: "Desenvolvimento de site" ,
      amount: "R$ 10.000,00" ,
      category: {
        name: 'Vendas',
        icon: 'shopping-bag'
      },
      date: "13/04/2021",
    }
  ]

  return (
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <Photo source={{ uri: 'https://avatars.githubusercontent.com/u/35904773?v=4' }}/>
            <User>
              <UserGreeting>Olá, </UserGreeting>
              <UserName>Lucas</UserName>
            </User>
          </UserInfo>

          <Icon name="power"/>
        </UserWrapper>
      </Header>

      <HighlightCards>
        <HighlightCard 
          type='up'
          title="Entradas" 
          amount="R$ 17.000,00" 
          lastTransaction="Última entrada dia 13 de abril"  
        />
        <HighlightCard 
          type='down'
          title="Saídas" 
          amount="R$ 7.000,00" 
          lastTransaction="Última saída dia 13 de abril" 
        />
        <HighlightCard 
          type='total'
          title="Total" 
          amount="R$ 10.000,00" 
          lastTransaction="01 à 13 de abril" 
        />
      </HighlightCards>
    
      <Transactions>
        <Title>Listagem</Title>

        <TransactionsList 
          data={data} 
          keyExtractor={item => item.id}
          renderItem={({ item }) => <TransactionCard data={item} />}
        />

      </Transactions>
    </Container>
  );
}
