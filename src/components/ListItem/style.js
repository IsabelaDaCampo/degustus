import styled from 'styled-components';
import { View, TouchableOpacity } from "react-native";

import colors from '../../helpers/colors';

export const Card = styled(View)`
  height: 10%;
  flex: 1px;
  flex-direction: row;
  background-color: ${colors.greyLight};
  border-radius: 8px;
  border: 1px solid ${colors.black};
`;

export const CardBody = styled(View)`
  width: 50%;
`;

export const CardHeader = styled(View)`
  margin: 5px;
`;

export const CardFooter = styled(View)`
  margin: 5px;
`;

export const Selection = styled(View)`
  flex: 1px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ButtonSelection = styled(TouchableOpacity)`
  border: 1px solid ${colors.black};
  border-radius: 30px;
  width: 40px;
  height: 40px;
  justify-content: center;
  align-items: center;
`; 