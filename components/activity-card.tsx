import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ImageSourcePropType,
  LayoutChangeEvent,
} from 'react-native';
import {colors} from '../theme/colors';

interface ActivityCardProps {
  title: string;
  subtitle: string;
  image: ImageSourcePropType;
  icon?: ImageSourcePropType;
}

const ActivityCard: React.FC<ActivityCardProps> = ({
  title,
  subtitle,
  image,
  icon,
}) => {
  const [cardWidth, setCardWidth] = React.useState(0);
  const [imageHeight, setImageHeight] = React.useState(0);

  const onCardLayout = (event: LayoutChangeEvent) => {
    const {width} = event.nativeEvent.layout;
    const height = width * 0.7;
    setCardWidth(width);
    setImageHeight(height);
  };
  const centerCircleLeft = (cardWidth - 50) / 2;
  const centerCircleTop = imageHeight - 25;

  return (
    <View style={styles.card} onLayout={onCardLayout}>
      <Image source={image} style={{height: imageHeight}} />
      <View style={styles.cardContent}>
        <Text style={styles.cardTitle}>{title}</Text>
        <Text style={styles.cardSubtitle}>{subtitle}</Text>
      </View>
      <View
        style={[
          styles.centerCircle,
          {left: centerCircleLeft, top: centerCircleTop},
        ]}>
        <Image source={icon} style={styles.icon} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    marginVertical: 15,
    marginHorizontal: 5,
    borderRadius: 15,
    overflow: 'hidden',
    elevation: 15,
    backgroundColor: colors.white,
  },
  cardContent: {
    alignItems: 'center',
    padding: 10,
  },
  cardTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 25,
    color: colors.darkGrey,
  },
  cardSubtitle: {
    fontSize: 10,
    marginBottom: 8,
    fontFamily: 'normal normal medium 10px Rift Soft',
    letterSpacing: 1.5,
    color: colors.darkGrey,
    opacity: 1,
  },
  centerCircle: {
    position: 'absolute',
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 15,
  },
  icon: {
    height: 30,
    width: 30,
  },
});

export default ActivityCard;
