import {StyleSheet} from 'react-native';
import {colors} from '../../theme/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: colors.darkGrey,
  },
  main: {
    height: '100%',
    width: '100%',
    padding: 20,
  },
  closeButton: {
    alignSelf: 'flex-start',
    marginBottom: 30,
  },
  closeButtonImage: {
    width: 20,
    height: 20,
    color: colors.white,
  },
  header: {
    fontSize: 30,
    fontFamily: 'Europa-Bold',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
    color: colors.white,
  },
  iconContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  iconHolder: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: colors.brown,
  },
  durationItem: {
    padding: 4,
  },
  durationText: {
    fontSize: 20,
  },
  icon: {
    height: 30,
    width: 30,
  },
  iconText: {
    fontSize: 12,
    textAlign: 'center',
    color: colors.white,
    letterSpacing: 2,
    marginTop: 8,
    fontFamily: 'Rift Soft',
  },
  selectedIcon: {
    backgroundColor: colors.brown,
  },
  unselectedIcon: {
    backgroundColor: colors.white,
  },
  selectedIconImage: {
    tintColor: 'white',
  },
  formContainer: {
    marginBottom: 30,
  },
  formLabel: {
    fontSize: 16,
    color: colors.white,
    marginBottom: 8,
    fontWeight: '300',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  pickerContainer: {
    paddingBottom: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  picker: {
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  scheduleButton: {
    borderRadius: 30,
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 30,
    borderColor: colors.lightBlue,
    borderWidth: 1,
    width: '80%',
    bottom: 80,
  },
  scheduleButtonText: {
    fontSize: 14,
    color: colors.white,
    fontWeight: '300',
    fontFamily: 'Rift Soft',
    letterSpacing: 2,
  },
  bottomModal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  modalContent: {
    backgroundColor: colors.white,
    padding: 22,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
  },
});
