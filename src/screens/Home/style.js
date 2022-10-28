import styled from 'styled-components';
import { View, TouchableOpacity, Text } from 'react-native';
import colors from '../../helpers/colors';

export const Content = styled(View)`
    flex: 1;
    background-color: ${colors.primary};
    align-items: center;
`;

export const ButtonArea = styled(View)`
    flex: 1;
    flex-wrap: wrap;
    flex-direction: row;
    align-content: center;
    justify-content: center;
`;

export const ContainerOption = styled(View)`
    margin: 8px;
    width: 180px;
    padding: 16px;
    height: 250px;
    border-radius: 8px;
    align-items: center;
    justify-content: center;
    ${props => props.color === 'beer' ? `background-color: ${colors.black};` : `background-color: ${colors.gourmet};`}
`;

export const ButtonCard = styled(TouchableOpacity)`
    color: ${colors.primary};
    align-items: center;
    justify-content: center;
`;

export const ButtonText = styled(Text)`
    font-size: 18px;
    text-align: center;
    color: ${colors.white};
    margin-top: 8px;
`;