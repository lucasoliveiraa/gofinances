import React, { useContext, useState } from 'react';
import { RFValue } from 'react-native-responsive-fontsize';
import { ActivityIndicator, Alert, Platform } from 'react-native';

import AppleSvg from '../../assets/apple.svg';
import GoogleSvg from '../../assets/google.svg';
import LogoSvg from '../../assets/logo.svg';

import { useAuth } from '../../hooks/auth';
import { SignInSocialButton } from '../../components/SignInSocialButton';
import theme from '../../global/styles/theme';

import { 
  Container,
  Header,
  TitleWrapper,
  Title,
  SignInTitle,
  Footer,
  FooterWrapper,
} from './styles';

export function SignIn() {
  const [ isLoading, setIsLoading ] = useState(false);
  const { signInWithGoogle, signInWithApple } = useAuth();

  async function handleSignInWithGoogle() {
    try {
      setIsLoading(true);
      return await signInWithGoogle();
    } catch (err) {
      console.log(err);
      Alert.alert('Nao foi possivel conectar a conta Google');
      setIsLoading(false);
    }
  }

  async function handleSignInWithApple() {
    try {
      return await signInWithApple();
    } catch (err) {
      console.log(err);
      Alert.alert('Nao foi possivel conectar a conta Apple');
      setIsLoading(false);
    }
  }

  return (
    <Container>
      <Header>
        <TitleWrapper>
          <LogoSvg 
            width={RFValue(120)}
            height={RFValue(68)}
          />

          <Title>
            Controle suas {'\n'}
            finanças de forma {'\n'}
            muito simples {'\n'}
          </Title>

          <SignInTitle>
            Faça seu login com {'\n'}
            uma das contas abaixo
          </SignInTitle>
        </TitleWrapper>
      </Header>

      <Footer>
        <FooterWrapper>
          <SignInSocialButton 
            svg={GoogleSvg} 
            title={'Entrar com Google'}
            onPress={handleSignInWithGoogle}
          />

          { Platform.OS === 'ios' && 
            <SignInSocialButton 
              svg={AppleSvg} 
              title={'Entrar com Apple'}
              onPress={handleSignInWithApple}
            />
          }
          
        </FooterWrapper>

        { isLoading && 
          <ActivityIndicator 
            color={theme.colors.shape} 
            size={20} 
            style={{ marginTop: 18 }} 
          /> 
        }
      </Footer>
    </Container>
  )
}