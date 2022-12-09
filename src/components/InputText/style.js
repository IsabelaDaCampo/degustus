import styled from 'styled-components';
import { TextInput } from "react-native";

import colors from '../../helpers/colors';

export const InputCard = styled(TextInput)`
  border: 1px solid ${colors.black};
  width: 50px;
  height: 50px;
  padding: 10px;
  border-radius: 8px;
`;