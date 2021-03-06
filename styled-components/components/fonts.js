/*
 * @Description 文字组件
 * @Author: DongDong
 * @Date: 2018-07-20 13:15:53
 * @Last Modified by: DongDong
 * @Last Modified time: 2018-08-31 18:04:47
 */

// Examples
// <Styled.H1 style={styles.H1} light type='primaryText' align='center' bold>$1</Styled.H1>
// /title/primaryText/secondaryText/disabled/border/divider/bg/tableHeader

import styled from 'styled-components';
import constants from '../constants';

export const Text = styled.Text`
  color: ${(props) => {
    // const color = props.light ? 'light' : 'dark';
    const type = props.type || 'title';
    return constants.theme[`${type}`];
  }};
  text-align: ${props => props.align || 'justify'};
  font-weight: ${props => (props.bold ? constants.fw.l : constants.fw.m)};
`;

// title1
export const H1 = Text.extend`
  font-size: ${constants.fs.xxl};
`;
// title2
export const H2 = Text.extend`
  font-size: ${constants.fs.xl};
`;
// title3
export const H3 = Text.extend`
  font-size: ${constants.fs.l};
`;
// headline
export const H4 = Text.extend`
  font-size: ${constants.fs.m};
`;
export const Pbody = Text.extend`
  font-size: ${constants.fs.s};
`;
export const Pcaption = Text.extend`
  font-size: ${constants.fs.mini};
`;
