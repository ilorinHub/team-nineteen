import styled, { css } from 'styled-components/native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { AppText } from '../theme/style.component';
import { CardWrapper, Wrapper } from './Wallet';
import { Textt } from '../components/atoms/Typography';
import HeaderWithBackArrow from '../components/molecules/HeaderWithBack';
import { useNavigation } from '@react-navigation/native';
import { THomeNav } from './Home';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import ButtonEl from '../components/molecules/ButtonEl';
import { View } from 'react-native';
import Scrollable from '../components/atoms/icons/Scrollable';

const Name = styled.View`
  flex-direction: row;
  align-items: center;
`;
const NameCont = styled(Name)`
  justify-content: space-between;
  margin-bottom: ${hp(2)}px;
`;
const InfoText = styled(AppText)``;
const cardArr = [
  {
    name: 'Diamond',
    icon: <FontAwesome name="diamond" size={24} color="#00BFFF" />,
    amount: '#50,000',
    details: 'Unlimited ride for a month to anywhere in your city',
    duration: '1month',
    bg: '#ff656a',
  },
  {
    name: 'Gold',
    icon: <MaterialCommunityIcons name="gold" size={24} color="#FFA07A" />,
    amount: '#30,000',
    details: 'Access to 20 ride in a month',
    duration: '1month',
    bg: 'gold',
  },
  {
    name: 'Silver',
    icon: (
      <MaterialCommunityIcons name="podium-silver" size={24} color="gray" />
    ),
    amount: '#10,000',
    details: '7 rides in a week',
    duration: '1week',
    bg: 'silver',
  },
];
const Packages = () => {
  const navigation = useNavigation<THomeNav>();
  return (
    <Wrapper>
      <HeaderWithBackArrow
        headerText="Packages"
        goBack={() => navigation.goBack()}
      />
      <Scrollable>
        {cardArr.map((item) => (
          <CardWrapper key={item.name} bg={item.bg}>
            <NameCont>
              <Name>
                <Textt size="20px" weight={600} mr={`${wp(2)}px`}>
                  {item.name}
                </Textt>
                {item.icon}
              </Name>
              <Textt size="20px" weight={600}>
                {item.amount}
              </Textt>
            </NameCont>
            <NameCont>
              <Textt style={{ width: wp('60%') }}>{item.details}</Textt>
              <Textt size="18px">{item.duration}</Textt>
            </NameCont>
            <View
              style={{
                width: wp(35),
                alignSelf: 'flex-end',
              }}
            >
              <ButtonEl
                onPress={() => navigation.navigate('topup')}
                height={hp(5)}
                bg=""
              >
                <Textt size="20px" weight={500}>
                  Subscribe
                </Textt>
              </ButtonEl>
            </View>
          </CardWrapper>
        ))}
      </Scrollable>
    </Wrapper>
  );
};

export default Packages;
