import fetch from 'node-fetch';

const fetchRequests = {
  getAllIdeas() {
    // const response = await fetch('http://localhost:3001/api/v1/ideas');
    // const data = await response.json()
    // return data
    return fetch('http://localhost:3001/api/v1/ideas')
      .then(response => response.json())
      .then(data => data)
      .catch(error => console.log(error))
  }
}


export default fetchRequests;
// export default data;

// const fetchRequests = {
//   checkData(userID) {
//     return Promise.all([this.getTravelerData(userID), this.getDestinationsData(), this.getTripsData()])
//       .then(data => data)
//       .catch(error => console.log(error))
//   },
//   getTravelerData(userID) {
//     return fetch(`https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/travelers/travelers/${userID}`)
//       .then(response => response.json())
//       .then(data => data)
//       .catch(error => console.log(error))
//   },
//   getDestinationsData() {
//     return fetch('https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/destinations/destinations')
//       .then(response => response.json())
//       .then(data => data.destinations)
//       .catch(error => console.log(error))
//   },
//   getTripsData() {
//     return fetch('https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/trips/trips')
//       .then(response => response.json())
//       .then(data => data.trips)
//       .catch(error => console.log(error))
//   },
//   postNewTrip(trip) {
//     fetch('https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/trips/trips', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({
//         "id": trip.id,
//         "userID": trip.userID,
//         "destinationID": trip.destinationID,
//         "travelers": trip.travelers,
//         "date": trip.date,
//         "duration": trip.duration,
//         "status": trip.status,
//         "suggestedActivities": trip.suggestedActivities
//       })
//     })
//       .then(response => response.json())
//       .then(data => console.log(data))
//       .catch(error => console.log(error))
//   }
// }