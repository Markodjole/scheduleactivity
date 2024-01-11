import {StyleSheet} from 'react-native';
import {colors} from '../../theme/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  header: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  headerImage: {
    marginHorizontal: '20%',
  },
  headerSubtitle: {
    fontSize: 18,
    color: colors.darkGrey,
  },
  mainTitle: {
    alignItems: 'center',
    paddingVertical: 20,
    borderTopWidth: 0.5,
    borderTopColor: colors.darkGrey,
  },
  mainHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.darkGrey,
  },
  cardContainer: {
    padding: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  cardItem: {
    width: '50%',
  },
  scheduleContainer: {
    width: '100%',
    justifyContent: 'flex-start',
    padding: 10,
  },
  sectionList: {
    flexDirection: 'row',
  },
  headerScheduleTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.black,
    marginBottom: 10,
  },
  descriptionHolder: {
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    padding: 10,
  },
  buttonHolder: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    marginVertical: 20,
  },
  scheduleButton: {
    flexDirection: 'row',
    backgroundColor: colors.brown,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 25,
    elevation: 15,
  },
  buttonText: {
    color: colors.white,
    fontFamily: 'normal normal normal 14px/35px Rift Soft',
    letterSpacing: 2,
  },
  buttonIcon: {
    width: 50,
    paddingHorizontal: 10,
  },
  sectionHeader: {
    fontFamily: 'Europa-Bold',
    fontWeight: 'bold',
    letterSpacing: 1.1,
    fontSize: 20,
    marginTop: 2,
    marginBottom: 5,
  },
  activityItem: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  activityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#fff',
  },
  date: {
    marginTop: 20,
    fontFamily: 'rift-soft-demi-bold',
    fontSize: 16,
    fontWeight: '400',
    letterSpacing: 1.5,
    color: colors.blue,
  },
  activityCircle: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 60,
    height: 60,
    borderRadius: 30,
    overflow: 'hidden',
    elevation: 15,
    backgroundColor: colors.white,
  },
  activityIcon: {
    width: 30,
    height: 30,
  },
  activityTime: {
    fontSize: 16,
  },
});
