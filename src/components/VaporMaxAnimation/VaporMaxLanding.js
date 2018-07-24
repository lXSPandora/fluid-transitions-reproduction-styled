// @flow
import * as React from 'react';
import { StatusBar, TouchableWithoutFeedback, View, Text, Image, StyleSheet } from 'react-native';
import { Transition } from 'react-navigation-fluid-transitions'
import { ROUTENAMES } from '../../routerConfig/Router'
import { Images } from '../../assets';
import styled from 'styled-components';

const Wrapper = styled.View`
  flex: 1;
  background-color: rgb(72,73,77);
  align-items: center;
  justify-content: center;
`;

const NikeLogo = styled.Image.attrs({
  source: Images.logo
})`
  width: 50;
  height: 20;
  tint-color: white;
  position: absolute;
  left: 30;
  top: 50;
  z-index: 100;
`;

const VaporMax = styled.Image.attrs({
  source: Images.vapor
})`
  width: 500;
  height: 300;
  transform: rotate(35deg);
  margin-right: -140;
  margin-bottom: 10;
  ${'' /* position: absolute;
  right: -140;
  transform: rotate(35deg); */}
`;

const BigText = styled.Text`
  color: white;
  font-size: 60;
  font-weight: bold;
`;

const SmallText = styled.Text`
  color: rgb(182,182,182);
  font-weight: bold;
  font-size: 28;
`;

const HeaderView = styled.View`
  position: absolute;
  left: 50;
  right: 50;
  top: 90;
  align-items: center;
  justify-content: center;
`;

const CenteredContent = styled.View`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  align-items: center;
  justify-content: center;
`;

const CircleView = styled.View`
  width: 230;
  height: 230;
  border-radius: ${230/2};
  background-color: rgb(214,214,214);
`;

type Props = {}
type State = {}

class VaporMaxLanding extends React.Component<Props, State> {
  render() {
    return (
      <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate(ROUTENAMES.VAPOR_MAX_DETAILS)}>
        <Wrapper>
          <StatusBar barStyle="light-content" />
              <HeaderView>
                <Transition appear="horizontal">
                  <BigText>THE TEN</BigText>
                </Transition>
                <Transition appear="horizontal">
                  <SmallText>AIR VAPORMAX</SmallText>
                </Transition>
              </HeaderView>
            <CenteredContent>
              <Transition shared="circle">
                <CircleView />
              </Transition>
            </CenteredContent>
            <NikeLogo />
            <Transition shared="shoe">
              <VaporMax />
            </Transition>
        </Wrapper>
      </TouchableWithoutFeedback>
    );
  }
}

export default VaporMaxLanding;