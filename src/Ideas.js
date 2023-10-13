import './Ideas.css';
import Card from "./Card"
function Ideas({ ideas, deleteIdea }){
  
  const ideaCards = ideas.map(idea => {
    return (
      <Card
        title={idea.title}
        description={idea.description}
        id={idea.id}
        key={idea.id}
        deleteIdea={deleteIdea}
      />
    )
  })

  return (
    <div className='ideas-container'>
      {ideaCards}
    </div>
  )
}
export default Ideas;

// function loadTravelerInfo(userID) {
//   fetchRequests.checkData(userID).then(data => {
//     currentTraveler = new Traveler(data[0])
//     destinationsData = data[1]
//     currentTrips = data[2].filter(trip => trip.userID === currentTraveler.id)
//     currentTraveler.determineTrips(currentTrips, now, destinationsData)
//     displayMainDashboard()
//   })
// }