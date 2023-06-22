import { StyleSheet, Dimensions } from 'react-native';
import Colors from '../../utility/colorConstant';
import Fonts from '../../utility/fonts';
const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    mainContainerStyle: {
        width: deviceWidth * 0.95,
        alignSelf: 'center',
    },
    headlineTextStyle: {
        color: Colors.BLACK_COLOR,
        fontSize: 16,
        fontWeight: 'bold',
        fontStyle: 'italic',
    },
    seeMoreTextStyle: {
        color: Colors.BLACK_COLOR,
        fontSize: 16,
        fontWeight: 'bold',
        fontStyle: 'italic',
        width: '90%',
    },
    imageStyle: {
        height: '100%',
        width: deviceWidth,
        resizeMode: 'cover',
    },
    imageLayerViewStyle2: {
        height: '100%',
        width: '100%',
        position: 'absolute',
    },
    textViewStyle: {
        position: 'absolute',
        bottom: 10,
        marginLeft: 10,
        width: '32%',
        justifyContent: 'center',
        backgroundColor: Colors.BLUE_COLOR,
    },
    textViewStyle2: {
        position: 'absolute',
        alignSelf: 'flex-end',
        marginRight: 30,
        bottom: 10,
        width: '45%',
        justifyContent: 'center',
        backgroundColor: Colors.BLUE_COLOR,
    },
    textStyle: {
        fontSize: 16,
        color: Colors.WHITE_COLOR,
        alignSelf: 'center',
    },
    textStyle2: {
        fontSize: 16,
        color: Colors.BLACK_COLOR,
        alignSelf: 'center'
    },
    topViewStyle: { width: '100%', height: 200 },
    decriptionTextStyle: {
        fontSize: 12,
        color: Colors.GREY_COLOR,
        marginVertical: 10,
        lineHeight: 15,
    },
    dateTimeTextStyle: {
        fontSize: 12,
        color: Colors.GREY_COLOR,
    },
    flexDirectionRow: { flexDirection: 'row' },
    lineStyle: {
        borderWidth: 0.5,
        borderColor: Colors.GREY_COLOR,
        marginVertical: 5,
    },
    marginTop: {
        marginTop: 25,
    },
    marginTop10: { marginTop: 10 },
    activeSeasonStyle: {
        borderColor: Colors.BLUE_COLOR,
        backgroundColor: Colors.BLUE_COLOR,
        padding: 8,
    },
    inactiveSeasonStyle: {
        borderColor: Colors.GREY_COLOR,
        backgroundColor: Colors.WHITE_COLOR,
        padding: 8,
        borderWidth: 1,
        marginLeft: 10,
    },
    subHeadingText: {
        fontSize: 12,
        fontWeight: 'bold',
        fontStyle: 'italic',
        color: Colors.BLACK_COLOR,
    },
    textContainerStyle: { flexDirection: 'column', width: '55%', paddingLeft: 10 },
    youMayLikeTextStyle: {
        fontWeight: 'bold',
        fontStyle: 'italic',
        fontSize: 18,
        color: Colors.BLACK_COLOR,
        marginTop: 20,
    },
    iconViewStyle: { width: '5%', justifyContent: 'center' },
    width40: { width: '40%' },
    upperContainerStyles: {
        width: '50%',
        height: 100,
        flexDirection: 'row'
    },
    lowerContainerStyles: {
        width: '50%',
        height: 100,
        flexDirection: 'row',
        marginVertical: 15
    },
    bannerImageStyle: { width: '100%', height: '100%', resizeMode: 'contain' },
});

export default styles;