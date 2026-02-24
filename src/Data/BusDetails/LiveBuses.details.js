// // src/data/buses.data.js
// export const buses = [
//   {
//     id: "BUS_001",
//     name: "TN38 AB 1234",
//     from: "Gandhipuram",
//     to: "Ukkadam",
//     stops: [
//       { name: "Omni Bus Stand", eta: "10:05 AM" },
//       { name: "Lakshmi Mills", eta: "10:12 AM" },
//       { name: "Sungam", eta: "10:20 AM" },
//       { name: "Ukkadam", eta: "10:35 AM" },
//     ],
//     currentStopIndex: 2,
//   },
//     {
//     id: "BUS_007",
//     name: "TN23 AB 1234",
//     from: "Vellore",
//     to: "Kaniyambadi",
//     stops: [
//       { name: "Old bus stand", eta: "10:05 AM" },
//       { name: "Bagayam", eta: "10:12 AM" },
//       { name: "Adukambarai", eta: "10:20 AM" },
//       { name: "Kaniyambadi", eta: "10:35 AM" },
//     ],
//     currentStopIndex: 2,
//   },
//   {
//     id: "BUS_002",
//     name: "TN37 XY 5678",
//     from: "Saravanampatti",
//     to: "Railway Station",
//     stops: [
//       { name: "Keeranatham", eta: "09:40 AM" },
//       { name: "Peelamedu", eta: "09:55 AM" },
//       { name: "Railway Station", eta: "10:15 AM" },
//     ],
//     currentStopIndex: 1,
//   },
//   {
//     id: "BUS_003",
//     name: "TN23 CC 9090",
//     from: "Vellore",
//     to: "Vellore",
//     stops: [
//       { name: "Vellore", eta: "09:00 AM" },
//       { name: "Adukkamparai", eta: "09:15 AM" },
//       { name: "Kaniyambadi", eta: "09:30 AM" },
//       { name: "Kannamangalam", eta: "09:50 AM" },
//       { name: "Kaniyambadi", eta: "10:10 AM" },
//       { name: "Adukkamparai", eta: "10:25 AM" },
//       { name: "Vellore", eta: "10:45 AM" },
//     ],
//     currentStopIndex: 3,
//   },
// ];


export const buses     = [
   
  {
    /* ===== IDENTIFIERS ===== */
    deviceId: "GPS_095",
    name: "95",
    busNumber: "TN38 N 5095",
    type: "Red",

    /* ===== FORWARD ROUTE ===== */
    forwardRoute: {
      from: "Gandhipuram",
      to: "Ukkadam",
      stops: [
        { name: "Gandhipuram Bus Stand", eta: "10:00 AM" },
        { name: "Town Hall", eta: "10:10 AM" },
        { name: "Oppanakara Street", eta: "10:18 AM" },
        { name: "Ukkadam Bus Stand", eta: "10:30 AM" },
      ],
      currentStopIndex: 1,
    },

    /* ===== RETURN ROUTE ===== */
    returnRoute: {
      from: "Ukkadam",
      to: "Gandhipuram",
      stops: [
        { name: "Ukkadam Bus Stand", halt: "—" },
        { name: "Oppanakara Street", halt: "3 min" },
        { name: "Town Hall", halt: "4 min" },
        { name: "Gandhipuram Bus Stand", halt: "—" },
      ],
      currentStopIndex: 2,
    },

    /* ===== STATE ===== */
    isReturning: false,
    completedTrips: 3,
    totalTrips: 8,
  },
  {
    
    /* ===== IDENTIFIERS ===== */
    deviceId: "GPS_001",          // GPS device ID
    name: "11D",                  // Route name
    busNumber: "TN38 AB 1234",     // Bus number
    type: "AC",

    /* ===== FORWARD ROUTE ===== */
    forwardRoute: {
      from: "Gandhipuram",
      to: "Ukkadam",
      stops: [
        { name: "Gandhipuram", eta: "10:00 AM" },
        { name: "Omni Bus Stand", eta: "10:05 AM" },
        { name: "Lakshmi Mills", eta: "10:12 AM" },
        { name: "Sungam", eta: "10:20 AM" },
        { name: "Ukkadam", eta: "10:35 AM" },
      ],
      currentStopIndex: 2,
    },

    /* ===== RETURN ROUTE ===== */
    returnRoute: {
      from: "Ukkadam",
      to: "Gandhipuram",
      stops: [
        { name: "Gandhipuram", halt: "—" },
        { name: "F Town", halt: "3 min" },
        { name: "G Market", halt: "2 min" },
        { name: "H Colony", halt: "4 min" },
        { name: "I Junction", halt: "1 min" },
        { name: "Ukkadam", halt: "—" },
      ],
      currentStopIndex: 4,
    },

    /* ===== STATE ===== */
    isReturning: false,
    completedTrips: 2,
    totalTrips: 5,
  },

  {
    deviceId: "GPS_002",
    name: "1A",
    busNumber: "TN37 CD 5678",
    type: "BLUE",

    forwardRoute: {
      from: "Singanallur",
      to: "Saibaba Colony",
      stops: [
        { name: "Singanallur", eta: "09:30 AM" },
        { name: "Peelamedu", eta: "09:40 AM" },
        { name: "Gandhipuram", eta: "09:55 AM" },
        { name: "RS Puram", eta: "10:10 AM" },
        { name: "Saibaba Colony", eta: "10:25 AM" },
      ],
      currentStopIndex: 1,
    },

    returnRoute: {
      from: "Saibaba Colony",
      to: "Singanallur",
      stops: [
        { name: "Singanallur", halt: "—" },
        { name: "Town Hall", halt: "4 min" },
        { name: "Ukkadam", halt: "3 min" },
        { name: "RS Puram", halt: "2 min" },
        { name: "Saibaba Colony", halt: "—" },
      ],
      currentStopIndex: 3,
    },

    isReturning: true,
    completedTrips: 1,
    totalTrips: 4,
  },

  {
    deviceId: "GPS_003",
    name: "95",
    busNumber: "TN39 EF 9012",
    type: "PINK",

    forwardRoute: {
      from: "Town Hall",
      to: "Coimbatore Airport",
      stops: [
        { name: "Town Hall", eta: "11:00 AM" },
        { name: "Ukkadam", eta: "11:15 AM" },
        { name: "Singanallur", eta: "11:35 AM" },
        { name: "Airport", eta: "11:55 AM" },
      ],
      currentStopIndex: 0,
    },

    returnRoute: {
      from: "Coimbatore Airport",
      to: "Town Hall",
      stops: [
        { name: "Town Hall", halt: "—" },
        { name: "Singanallur", halt: "5 min" },
        { name: "Ukkadam", halt: "3 min" },
        { name: "Airport", halt: "—" },
      ],
      currentStopIndex: 2,
    },

    isReturning: false,
    completedTrips: 0,
    totalTrips: 3,
  },
  
];
