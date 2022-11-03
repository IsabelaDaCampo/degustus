import { View, Text } from 'react-native';
import styled from 'styled-components';

import colors from '../../helpers/colors';

export const TypeContent = styled(View)`
  flex-direction: row;
  height: 30px;
  margin-top: 5px;
  justify-content: flex-start;
  margin-left: 10px;
`;

export const AddressView = styled(View)`
  flex-direction: row;
  margin-top: 5px;
  justify-content: flex-start;
  margin-left: 10px;
`;

export const TypeText = styled(Text)`
  font-size: 22px;
  margin-left: 10px;
  color: ${colors.primary};
`;

export const AdressText = styled(Text)`
  font-size: 17px;
  margin-left: 10px;
`;

export const Separator = styled(View)`
  margin-top: 10px;
  height: 1px;
  margin-horizontal: 10px;
  background-color: ${colors.primary};
`;