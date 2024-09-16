import React, { useRef, useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { MaterialCommunityIcons } from '@expo/vector-icons';

interface StatusItem {
  id: number;
  message: string;
  icon: any;
  mood: 'happy' | 'excited' | 'confused' | 'off';
  battery: string;
  activityDetails: string;
}

const statusData: StatusItem[] = [
  { id: 1, message: 'Happy', icon: require('../../assets/CHU-66Y/CloseUp_Mode_Purr.png'), mood: 'happy', battery: '67%', activityDetails: 'Chasing Dust Bunnies' },
  { id: 2, message: 'Excited', icon: require('../../assets/5-KY/CloseUp_Standard_Head.png'), mood: 'excited', battery: '85%', activityDetails: 'Playing with sprinkler' },
  { id: 3, message: 'Confused', icon: require('../../assets/CHU-66Y/CloseUp_Mode_Light.png'), mood: 'confused', battery: '72%', activityDetails: 'Trying to solve a puzzle' },
  { id: 4, message: 'Sleeping', icon: require('../../assets/N0-V4/CloseUp_Standard_Head.png'), mood: 'off', battery: '90%', activityDetails: 'Recharging' },
];

const StatusBox = () => {
  const SLIDER_WIDTH = 350;
  const ITEM_WIDTH = 360;
  const [activeSlide, setActiveSlide] = React.useState(0);
  const carouselRef = useRef<Carousel<StatusItem>>(null);

  useEffect(() => {
    const autoplayTimer = setTimeout(() => {
      if (carouselRef.current) {
        const nextIndex = (activeSlide + 1) % statusData.length;
        carouselRef.current.snapToItem(nextIndex);
      }
    }, 10000);

    return () => clearTimeout(autoplayTimer);
  }, [activeSlide]);

  const getBatteryIcon = (battery: string) => {
    const batteryLevel = parseInt(battery);
    if (batteryLevel >= 90) {
      return 'battery-charging';
    } else if (batteryLevel >= 80) {
      return 'battery-80';
    } else if (batteryLevel >= 70) {
      return 'battery-70';
    } else if (batteryLevel >= 60) {
      return 'battery-60';
    } else if (batteryLevel >= 30) {
      return 'battery-30';
    } else {
      return 'battery';
    }
  };

  const renderStatusCard = ({ item, index }: { item: StatusItem; index: number }) => {
    return (
      <View style={styles.statusCard}>
        <View style={styles.robotContainer}>
          <Image source={item.icon} style={styles.robotIcon} />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.activityText}>Current Status</Text>
          <View style={styles.statusTextContainer}>
            <MaterialCommunityIcons name={`robot-${item.mood}`} size={24} color="#000" />
            <Text style={styles.statusText}>{item.message}</Text>
          </View>
          <View style={styles.batteryContainer}>
            <MaterialCommunityIcons name={getBatteryIcon(item.battery)} size={24} color="#000" />
            <Text style={styles.batteryText}>Battery: {item.battery}</Text>
          </View>
          <Text style={styles.activityText}>Current Activity</Text>
          <Text style={styles.activityDetails}>{item.activityDetails}</Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Carousel<StatusItem>
        ref={carouselRef}
        layout="default"
        data={statusData}
        renderItem={renderStatusCard}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        onSnapToItem={(index) => setActiveSlide(index)}
        loop
        loopClonesPerSide={statusData.length}
        autoplay
        autoplayInterval={10000}
      />
      <Pagination
        dotsLength={statusData.length}
        activeDotIndex={activeSlide}
        containerStyle={styles.paginationContainer}
        dotStyle={styles.paginationDot}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
  },
  statusCard: {
    width: 330,
    height: 200,
    borderRadius: 8,
    marginHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#ffffff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 4,
  },
  robotContainer: {
    overflow: 'visible', 
    backgroundColor: '#ff8952',
    borderRadius: 100,
    padding: 15,
    marginRight: 16,
  },
  robotIcon: {
    width: 120,
    height: 120,
    resizeMode: 'contain', 
    margin: -15, 
  },
  textContainer: {
    flex: 1,
  },
  statusTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statusText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 18,
    marginLeft: 8,
  },
  batteryContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  batteryText: {
    color: '#000',
    marginLeft: 8,
  },
  activityText: {
    color: '#008000',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 8,
  },
  activityDetails: {
    color: '#000',
    marginTop: 4,
  },
  paginationContainer: {
    paddingTop: 8,
    paddingBottom: 16,
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 8,
    backgroundColor: '#ff8952',
  },
});

export default StatusBox;