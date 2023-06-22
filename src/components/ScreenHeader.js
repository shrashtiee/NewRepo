import React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import { connect } from 'react-redux';
import Colors from '../utility/colorConstant';
import { VectorIcon } from './index';
import icons from '../utility/icons';

const ScreenHeader = () => {
  return (
    <View style={Styles.headerViewStyle}>
      <TouchableOpacity style={{ width: '30%' }}>
        <VectorIcon
          iconName={'arrow-back'}
          iconSize={30}
          color={Colors.BLACK_COLOR}
        />
      </TouchableOpacity>
      <View style={Styles.innerHeaderStyle}>
        <Image
          source={icons.LOGO}
          style={{ width: '100%', height: '100%' }}
          resizeMode='cover' />
      </View>
    </View>
  );
};

const Styles = StyleSheet.create({
  headerViewStyle: {
    elevation: 5,
    height: 70,
    alignItems: 'center',
    backgroundColor: Colors.WHITE_COLOR,
    paddingHorizontal: 5,
    flexDirection: 'row',
  },
  innerHeaderStyle: {
    width: '40%',
    alignItems: 'center',
    height: 55,
    marginTop: 10,
    justifyContent: 'center'
  },
});

const mapStateToProps = state => ({
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ScreenHeader);

