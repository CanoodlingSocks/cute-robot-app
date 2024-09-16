import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { LineChart, BarChart } from 'react-native-chart-kit';
import { fetchMetricsData } from '../api/MetricsDataFetch';
import { StyleSheet } from 'react-native';

const MetricsChart = ({ uniqueRobotCode }) => {
  const [metricsData, setMetricsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchMetricsData(uniqueRobotCode);
      setMetricsData(data);
    };

    fetchData();
  }, [uniqueRobotCode]);

  const placeholderData = Array.from({ length: 24 }).map((_, index) => {
    const timestamp = new Date(new Date().getTime() - index * 60 * 60 * 1000).toISOString();
    const batteryLevel = 50 + 30 * Math.sin((index / 24) * Math.PI * 2);
    const personalityChipStability =
      70 + 30 * Math.sin((index / 6) * Math.PI) + 10 * Math.random();

    if (index === 0 && metricsData.length > 0) {
      // If it's the last entry, replace with fetched data
      const latestData = metricsData[0];
      return {
        timestamp: latestData.timestamp,
        batteryLevel: latestData.batteryLevel,
        temperature: latestData.temperature,
        personalityChipStability: latestData.personalityChipStability,
      };
    }

    return {
      timestamp,
      batteryLevel,
      temperature: Math.random() * (35 - 15) + 15,
      personalityChipStability,
    };
  });

  const combinedData = [...metricsData, ...placeholderData];

  const temperatureData = combinedData
  .map((entry) => entry.temperature)
    .slice(0, 5);
  
  const temperatureColors = temperatureData.map((temperature) => {
    if (temperature > 45) {
      return () => 'rgba(255, 0, 0, 1)'; // Danger - Red
    } else if (temperature > 35) {
      return () => 'rgba(255, 255, 0, 1)'; // Warning - Yellow
    } else if (temperature >= 20 && temperature <= 34) {
      return () => 'rgba(0, 255, 0, 1)'; // Normal - Green
    } else if (temperature >= 11 && temperature <= 19) {
      return () => 'rgba(0, 0, 255, 1)'; // Below Normal - Blue
    } else {
      return () => 'rgba(0, 0, 0, 1)'; // Dangerously Low - Black
    }
  });
  
  const latestData = metricsData.length > 0 ? metricsData[0] : {};

  const {
    interactionLog = '',
    sentimentAnalysis = '',
    taskCompletionTime = '',
  } = latestData;

  const formatTaskCompletionTime = (completionTime) => {
    const [hours, minutes] = completionTime.split(':').map(Number);
  
    const formattedTime =
      (hours > 0 ? `${hours} hour${hours > 1 ? 's' : ''} ` : '') +
      (minutes > 0 ? `${minutes} min` : '');
  
    return formattedTime;
  };

  return (
    <View style={styles.chartContainer}>
      <View style={styles.infoContainer}>
        <Text style={styles.title}>Latest Interaction Log:</Text>
        <Text style={styles.text}>{interactionLog}</Text>
        <Text style={styles.title}>Sentiment Analysis:</Text>
        <Text style={styles.text}>{sentimentAnalysis}</Text>
        <Text style={styles.title}>Latest Task Completion Time:</Text>
         <Text style={styles.text}>{formatTaskCompletionTime(taskCompletionTime)}</Text>
      </View>

      <View style={styles.chartContainer}>
        <Text style={styles.textStyle}>Battery Level Last 24 Hours</Text>
        <LineChart
          data={{
            labels: combinedData.map((entry) => entry.timestamp),
            datasets: [
              {
                data: combinedData.map((entry) => entry.batteryLevel),
              },
            ],
          }}
          width={300}
          height={200}
          yAxisLabel="%"
          chartConfig={{
            backgroundGradientFrom: '#fff',
            backgroundGradientTo: '#fff',
            decimalPlaces: 2,
            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            style: {
              borderRadius: 16,
            },
          }}
          bezier
        />
      </View>

      <View style={styles.chartContainer}>
        <Text style={styles.textStyle}>Temperature Last 24 Hours</Text>
        <BarChart
          data={{
            labels: combinedData.map((entry) => entry.timestamp),
            datasets: [
              {
                data: temperatureData,
                colors: temperatureColors,
              },
            ],
          }}
          width={300}
          height={200}
          yAxisLabel="°C"
          yAxisSuffix=""
          chartConfig={{
            backgroundGradientFrom: '#fff',
            backgroundGradientTo: '#fff',
            decimalPlaces: 2,
            style: {
              borderRadius: 16,
            },
            color: (opacity = 0) => `rgba(0, 0, 0, ${opacity})`,
            propsForBackgroundLines: {
              strokeWidth: 2,
            },
          }}
        />
      </View>

      <View style={styles.chartContainer}>
        <Text style={styles.textStyle}>Personality Chip Stability Last 24 Hours</Text>
        <LineChart
          data={{
            labels: combinedData.map((entry) => entry.timestamp),
            datasets: [
              {
                data: combinedData.map((entry) => entry.personalityChipStability),
              },
            ],
          }}
          width={300}
          height={200}
          yAxisLabel="%"
          chartConfig={{
            backgroundGradientFrom: '#fff',
            backgroundGradientTo: '#fff',
            decimalPlaces: 2,
            color: (opacity = 1) => `rgba(0, 0, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(0, 0, 255, ${opacity})`,
            style: {
              borderRadius: 16,
            },
          }}
          bezier
        />
      </View>
    </View>
  );
};

 const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
   infoContainer: {
    marginTop: 10,
    marginBottom: 16,
    backgroundColor: 'teal',
    width: 300,
    padding: 10,
    borderRadius: 5,
  },
   title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 2,
    color: 'white',
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
    color: 'white',
  },
  textStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    fontSize: 18,
  },
  chartContainer: {
    marginBottom: 16,
  },
});

export default MetricsChart;