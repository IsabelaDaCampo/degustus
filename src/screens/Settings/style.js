import styled from 'styled-components';
import { TextInput } from "react-native";

import colors from '../../helpers/colors';

export const IpInput = styled(TextInput)`
  height: 54px;
  border-bottom-width: 1px;
  border-bottom-color: ${colors.grey};
  margin-bottom: 16px;
  margin-horizontal: 10px;
`;