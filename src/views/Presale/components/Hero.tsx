import React from 'react'
import styled from 'styled-components'
import { Heading, Text } from '@pancakeswap-libs/uikit'
import useI18n from 'hooks/useI18n'
import Container from 'components/layout/Container'

const Title = styled(Heading).attrs({ as: 'h1', size: 'xl' })`
  color: 'white';
  margin-bottom: 24px;
  font-size: 32px;
`

const Blurb = styled(Text)`
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 20px;
  font-weight: 600;
`

const StyledHero = styled.div`
  // background-image: linear-gradient(180deg, #53dee9 0%, #1fc7d4 100%);
  // background-image: ${({ theme }) => theme.colors.gradients.bubblegum};
  padding-bottom: 30px;
  padding-top: 30px;
  flex-direction: row;
`

const StyledContainer = styled(Container)`
  flex: 1;
  // padding-right: 0;
  text-align: center;
  // background-image: url(/images/egg/2d.png);
  background-repeat: no-repeat;
  background-position: center center;
  padding-bottom: 120px;
  padding-top: 80px;
  display: flex;
  flex-direction: row;

  ${({ theme }) => theme.mediaQueries.sm} {
    padding-right: 24px;
    background-image: url(/images/egg/LogoTextNewWhite.png);
  }

  ${({ theme }) => theme.mediaQueries.xs} {
    padding-right: 24px;
    background-image: url(/images/egg/LogoTextNewWhite.png);
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    padding-right: 32px;
    background-image: url(/images/egg/2d.png);
  }
`
const StyledText = styled.div`
display: block;
text-align: center;
`

const Hero = () => {
  const TranslateString = useI18n()

  return (
    <StyledHero>
      <StyledContainer>
        {/* <Title>{TranslateString(20000, 'PreSale')}</Title> */}
        {/* <Blurb>{TranslateString(999, `Share the referral link below to invite your friends and earn 3% of your friends' earnings FOREVER!`)}</Blurb> */}
      </StyledContainer>
      <StyledText>
        <Heading color='#000'>
        Sapphire token is at the heart of the Sapphire defi ecosystem.
        <br /> Buy it, spend it, stake it... heck, you can even vote with it!
        </Heading>
      </StyledText>      
    </StyledHero>
  )
}

export default Hero
