import { StyleSheet } from 'react-native';

const colors = {
  primary: '#00aaff',
  secondary: '#fafafa',
  darkBlue: '#00607E',
  lightWhite: '#F9FDFF',
  backgroundDarkerBlue: '#a5e8ff',
  button: '#1173cf',
  grey: 'rgba(0,0,0,.7)',
  bottomBorderShadow: 'rgba(0, 96, 126, .33)',
  borderWhite: 'rgba(255,255,255,.3)',
  glassWhite: 'rgba(255,255,255,.35)',
}

const fontSizes = {
  h1: 32,
  h2: 22,
  h3: 18,
  h4: 16,
  h5: 14,
}

const fontWeights = {
  bold: "800",
  heavy: "600",
  medium: "500",
  light: "400",
}

export { styles, fontWeights, fontSizes, colors };

const styles = StyleSheet.create({
  tabBarIcon: {
    width: 40,
    height: 40,
    resizeMode: 'center',
  },
  screen: {
    width: '100%',
    alignSelf: 'center',
  },
  container: {
    alignSelf: 'center',
    width: 350,
  },
  group: {
    width: '100%',
    justifyContent: 'center',
    marginVertical: 7,
    borderRadius: 7,
    paddingHorizontal: 5,
    paddingBottom: 7,
  },
  groupContent: {

  },
  barGroup: {
    borderRadius: 7,
    padding: 7,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
    backgroundColor: colors.lightWhite,
  },
  prayerTimeStyle:{
    paddingHorizontal: 7,
  },
  scrollGroup:{
    maxHeight: 200,
  },
  buttonTextH2:{
    fontSize: fontSizes.h2,
    fontWeight: fontWeights.medium,
    color: colors.primary,
    fontWeight: fontWeights.bold
  },
  buttonView:{
    borderRadius:7, 
    height: 35, 
    width:115, 
    alignItems: 'center', 
    justifyContent:'center', 
    alignSelf: 'center', 
    marginBottom: 7,
    backgroundColor: colors.lightWhite,
  },
  numPadButton: {
    fontSize: fontSizes.h1,
    color: colors.primary,
    fontWeight: fontWeights.heavy,
    fontFamily: 'Verdana',
    textAlign: 'center'
  },
  barGroupButtonView: {
    flex: 1,
  },
  barGroupButtonText: {
    fontSize: fontSizes.h5,
    color: colors.button,
    fontWeight: fontWeights.heavy,
    fontFamily: 'Verdana',
    textAlign: 'center',
  },
  barGroupTextView: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    flex: 10,
  },
  barGroupImage: {
    height: 50, 
    width: 50, 
    resizeMode: 'contain',
    marginRight: 7
  },
  barGroupSubjectTextStyle: {
    fontSize: fontSizes.h5,
    color: colors.darkBlue,
    fontWeight: fontWeights.medium,
    fontFamily: 'Verdana',
    paddingBottom: 3,
  },
  barGroupContentTextStyle: {
    fontSize: fontSizes.h5,
    color: colors.grey,
    fontWeight: fontWeights.light,
    fontFamily: 'Verdana',
  },
  view: {
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center',
  },
  iconPic: {
    width: 115,
    height: 115,
  },
  profilePic: {
    width: 115,
    height: 115,
    borderRadius: 230,
    marginTop: 7,
    backgroundColor: colors.secondary,
  },
  h4: {
    color: colors.darkBlue,
    fontSize: fontSizes.h4,
    fontWeight: fontWeights.heavy,
    fontFamily: 'Verdana',
  },
  h3: {
    color: colors.darkBlue,
    fontSize: fontSizes.h3,
    fontWeight: fontWeights.heavy,
    fontFamily: 'Verdana',
    paddingTop: 7,
    paddingBottom: 3,
  },
  h2: {
    color: colors.darkBlue,
    fontSize: fontSizes.h2,
    fontWeight: fontWeights.heavy,
    fontFamily: 'Verdana',
    paddingTop: 7,
  },
  h1: {
    color: colors.darkBlue,
    fontSize: fontSizes.h1,
    fontWeight: fontWeights.heavy,
    fontFamily: 'Verdana',
    paddingTop: 7,
  },
});
