// @flow
import * as React from 'react';
import { StatusBar, Dimensions, TouchableWithoutFeedback, View, Image, Text, StyleSheet } from 'react-native';
import { Transition } from 'react-navigation-fluid-transitions'
import { Images } from '../../assets/index'
import styled from 'styled-components';

const { width, height } = Dimensions.get('window');

const paperHeight: number = height / 1.8;

const boxSize: number = (width / 2) - 40;

const Wrapper = styled.View`
  flex: 1;
  background-color: rgb(72,73,77);
  align-items: center;
`;

const GalleryItem = styled.View`
  width: ${boxSize};
  height: ${boxSize};
  background-color: #ededed;
  align-items: center;
  justify-content: center;
  margin: 0px 10px;
  border-radius: 5;
`;

const GalleryStack = styled.View`
  margin: 10px 0px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: ${width};
`;

const TextContainer = styled.View`
  width: ${width};
  align-items: center;
  justify-content: center;
  padding: 30px 0px;
`;

const Paper = styled.View`
  height: ${paperHeight};
  background-color: rgb(214,214,214);
  width: ${width};
`;

const ShoeWrapper = styled.View`
  padding: 10px;
  width: ${width};
  height: ${height - paperHeight};
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

const SmallText = styled.Text`
  font-size: 18;
  color: grey;
  font-weight: 800;
`;

const BigText = styled.Text`
  font-size: 45;
  color: black;
  font-weight: 800;
`;

const ShoeImages = styled.Image`
  width: 125;
  height: 75;
`;

const VaporMax = styled.Image.attrs({
  source: Images.vapor
})`
  width: ${500 / 1.75};
  height: ${300 / 1.75};
`;

type Props = {}
type State = {}

class VaporMaxDetails extends React.Component<Props, State> {
  render() {
    return (
      <Wrapper>
        <StatusBar barStyle="light-content" />
        <NikeLogo />
        <TouchableWithoutFeedback onPress={() => this.props.navigation.pop()}>
          <ShoeWrapper>
            <Transition shared="shoe">
              <VaporMax />
            </Transition>
          </ShoeWrapper>
        </TouchableWithoutFeedback>
        <Transition shared="circle">
          <Paper>
            <Transition appear="horizontal">
              <TextContainer>
                <BigText>THE TEN</BigText>
                <SmallText>VAPORMAX</SmallText>
              </TextContainer>
            </Transition>
              <GalleryStack>
                <Transition appear="bottom" delay={true}>
                  <GalleryItem>
                    <ShoeImages source={Images.vaporMax1} />
                  </GalleryItem>
                </Transition>
                <Transition appear="bottom" delay={true}>
                  <GalleryItem>
                    <ShoeImages source={Images.vaporMAx2} />
                  </GalleryItem>
                </Transition>
              </GalleryStack>
          </Paper>
        </Transition>
      </Wrapper>
    );
  }
}

export default VaporMaxDetails;