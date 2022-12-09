import styled from 'styled-components';
import { View, TouchableOpacity, TextInput } from "react-native";

import colors from '../../helpers/colors';

export const Item = styled(View)`
  flex: 1px;
  flex-direction: row;
  border: 1px solid ${colors.black};
  border-radius: 8px;
`;

export const Card = styled(View)`
  /* flex: 1px; */
  width: 60%;
  background-color: ${colors.greyLight};
  
`;

export const CardButtons = styled(View)`
  /* flex: 1px; */
  width: 40%;
`;

export const InputCard = styled(TextInput)`
  border: 1px solid ${colors.black};
  width: 50px;
  height: 50px;
  padding: 10px;
  border-radius: 8px;
`;

export const ViewButtons = styled(View)`
  flex: 1px;
  align-items: center;
  justify-content: center;
`;

export const ButtonCard = styled(TouchableOpacity)`
  padding: 5px;
  background: #2B9751;
  width: 30px;
  justify-content: center;
  align-items: center;
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