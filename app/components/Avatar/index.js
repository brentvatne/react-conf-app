// @flow
import React from 'react';
import { Image, Platform, View } from 'react-native';

import theme from '../../theme';

type Props = {
  size?: number,
  source: string,
  style: Object | null | Array<Object | null>,
};

export default class Avatar extends React.Component {
  render() {
    let { size, source, style, ...props } = this.props;
    size = size || 44;

    const styles = {
      wrapper: {
        backgroundColor: theme.color.sceneBg,
        borderRadius: size,
        overflow: 'hidden',
        height: size,
        width: size,
      },
      image: {
        borderRadius: Platform.OS === 'android' ? size : 0,
        height: size,
        width: size,
      },
    };

    return (
      <View style={[styles.wrapper, style]} {...props}>
        <Image source={{ uri: source }} style={styles.image} />
      </View>
    );
  }
}
