/*
 * @Description view组件
 * @Author: DongDong
 * @Date: 2018-07-20 13:17:25
 * @Last Modified by: DongDong
 * @Last Modified time: 2018-09-01 16:56:10
 */

// Examples
// <Styled.ViewFlex style={styles.container} bg='green' justifyContent='center' alignItems='center'></Styled.ViewFlex>
import styled from 'styled-components';
import { SafeAreaView } from 'react-navigation';

export const SafeArea = styled(SafeAreaView)`
  background-color: ${props => props.bg || 'transparent'};
  flex: 1;
`;
export const ScrollView = styled.ScrollView`
  background-color: ${props => props.bg || 'transparent'};
  width: 100%;
`;
export const View = styled.View`
  background-color: ${props => props.bg || 'transparent'};
  width: 100%;
`;

export const ViewFlex = View.extend`
  display: flex;
  flex-direction: row;
  justify-content: ${props => props.justifyContent || 'flex-start'};
  align-items: ${props => props.alignItems || 'flex-start'};
`;
