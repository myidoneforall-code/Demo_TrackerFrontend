// sampleBusData.js
const sampleBusData = [
  {
    deviceId: 'DEV1001',
    name: 'City Express',
    busNumber: 'AB-1234',
    type: 'AC',
    totalTrips: 3,
    state: 'State 1',
    district: 'District 1-1',
    forwardRoute: {
      from: 'Central Station',
      to: 'North Terminal',
      stops: ['1st Avenue', 'Park Street', 'River Side']
    },
    returnRoute: {
      from: 'North Terminal',
      to: 'Central Station',
      stops: ['River Side', 'Park Street', '1st Avenue']
    }
  },
  {
    deviceId: 'DEV1002',
    name: 'Metro Shuttle',
    busNumber: 'CD-5678',
    type: 'Non-AC',
    totalTrips: 2,
    state: 'State 2',
    district: 'District 2-2',
    forwardRoute: {
      from: 'East Station',
      to: 'West Station',
      stops: ['Market Road', 'City Mall', 'Bridge Park']
    },
    returnRoute: {
      from: 'West Station',
      to: 'East Station',
      stops: ['Bridge Park', 'City Mall', 'Market Road']
    }
  },
  {
    deviceId: 'DEV1003',
    name: 'Rapid Line',
    busNumber: 'EF-9012',
    type: 'AC',
    totalTrips: 4,
    state: 'State 1',
    district: 'District 1-2',
    forwardRoute: {
      from: 'Downtown',
      to: 'Airport',
      stops: ['Tech Park', 'University', 'Shopping Center']
    },
    returnRoute: {
      from: 'Airport',
      to: 'Downtown',
      stops: ['Shopping Center', 'University', 'Tech Park']
    }
  }
];

export default sampleBusData;
