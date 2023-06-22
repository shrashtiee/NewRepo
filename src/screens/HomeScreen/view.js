import React from "react";
import { connect } from 'react-redux';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import styles from "./style";
import icons from "../../utility/icons";
import { VectorIcon, KeyBoardScrollView, ScreenHeader } from "../../components";
import colorConstant from "../../utility/colorConstant";

const HomeView = (props) => {
  return (
    <><ScreenHeader />
      <KeyBoardScrollView>
        <View
          style={styles.topViewStyle}>
          <Image style={styles.imageStyle} source={icons.TOP_TEN_ICON} />
          <View style={styles.imageLayerViewStyle2}>
            <TouchableOpacity style={styles.textViewStyle}>
              <Text style={styles.textStyle}> Watch Now </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.textViewStyle2}>
              <Text style={styles.textStyle}>Add to My Watch List</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.mainContainerStyle}>
          <Text style={styles.decriptionTextStyle}>2017 | English</Text>
          <View style={styles.flexDirectionRow}>
            <Text style={styles.headlineTextStyle}>The Top Ten Revealed puts the spotlight</Text>
            <VectorIcon
              iconName={'sharealt'}
              color={colorConstant.BLACK_COLOR}
              iconSize={25}
              iconType={'ant'}
              style={{ paddingLeft: 10 }}
            />
            <VectorIcon
              iconName={'cast'}
              color={colorConstant.BLACK_COLOR}
              iconSize={25}
              style={{ paddingLeft: 10 }}
            />
          </View>
          <Text style={styles.decriptionTextStyle}>Sed ut perpiciatis unde iste natus error sit voluptatem accusantium doloremque laundantium, totam rem, eaque ipsai</Text>
          <View style={styles.lineStyle} />
          <View style={[styles.flexDirectionRow, styles.marginTop10]}>
            <Text style={styles.seeMoreTextStyle}>See More</Text>
            <VectorIcon
              iconName={'keyboard-arrow-up'}
              color={colorConstant.BLACK_COLOR}
              iconSize={32}
            />
          </View>
          <View style={styles.lineStyle} />
          <View style={[styles.flexDirectionRow, styles.marginTop10]}>
            <TouchableOpacity style={styles.activeSeasonStyle}>
              <Text style={styles.textStyle}>Season 1</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.inactiveSeasonStyle}>
              <Text style={styles.textStyle2}>Season 2</Text>
            </TouchableOpacity>
          </View>
          <View style={[styles.flexDirectionRow, styles.marginTop]}>
            <View style={styles.width40}>
              <Image source={icons.BANNER_IMAGE}
                style={{ width: '100%', height: 100, resizeMode: 'contain' }} />
            </View>
            <View style={styles.textContainerStyle}>
              <Text style={styles.subHeadingText}>The Top Ten</Text>
              <Text style={styles.dateTimeTextStyle}>2017| 02:03:30</Text>
              <Text style={styles.dateTimeTextStyle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed da eiusmed tempor incididunt</Text>
            </View>
            <View style={styles.iconViewStyle}>
              <VectorIcon
                iconName={'dots-three-vertical'}
                color={colorConstant.BLACK_COLOR}
                iconSize={20}
                iconType={'entypo'}
              />
            </View>
          </View>
          <View style={[styles.lineStyle, styles.marginTop10]} />
          <View style={[styles.flexDirectionRow, styles.marginTop10]}>
            <View style={styles.width40}>
              <Image source={icons.BANNER_IMAGE}
                style={{ width: '100%', height: 100, resizeMode: 'contain' }} />
            </View>
            <View style={styles.textContainerStyle}>
              <Text style={styles.subHeadingText}>The Top Ten 2</Text>
              <Text style={styles.dateTimeTextStyle}>2017| 02:03:30</Text>
            </View>
            <View style={styles.iconViewStyle}>
              <VectorIcon
                iconName={'dots-three-vertical'}
                color={colorConstant.BLACK_COLOR}
                iconSize={20}
                iconType={'entypo'}
              />
            </View>
          </View>
          <View style={[styles.lineStyle, styles.marginTop10]} />
          <View style={[styles.flexDirectionRow, styles.marginTop10]}>
            <View style={styles.width40}>
              <Image source={icons.BANNER_IMAGE}
                style={{ width: '100%', height: 100, resizeMode: 'contain' }} />
            </View>
            <View style={styles.textContainerStyle}>
              <Text style={styles.subHeadingText}>The Top Ten 3</Text>
              <Text style={styles.dateTimeTextStyle}>2017| 02:03:30</Text>
            </View>
            <View style={styles.iconViewStyle}>
              <VectorIcon
                iconName={'dots-three-vertical'}
                color={colorConstant.BLACK_COLOR}
                iconSize={20}
                iconType={'entypo'}
              />
            </View>
          </View>
          <View style={[styles.lineStyle, styles.marginTop10]} />
          <Text style={styles.youMayLikeTextStyle}>You May Also Like</Text>
          <View style={styles.lineStyle} />
          <View style={styles.upperContainerStyles}>
            <Image source={icons.BANNER}
              style={styles.bannerImageStyle} />
            <Image source={icons.TOP_TEN_ICON}
              style={styles.bannerImageStyle} />
          </View>
          <View style={styles.lowerContainerStyles}>
            <Image source={icons.BANNER_2}
              style={styles.bannerImageStyle} />
            <Image source={icons.BANNER_IMAGE}
              style={styles.bannerImageStyle} />
          </View>
        </View>
      </KeyBoardScrollView>
    </>
  );
}

const mapStateToProps = state => ({});

export default connect(mapStateToProps)(HomeView);