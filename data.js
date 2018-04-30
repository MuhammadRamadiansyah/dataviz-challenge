// const fs = require('fs')
// const d3 = require('d3')

// let dataEnergy = fs.readFileSync('cleaned_generation.csv', 'utf8')
// "no","area_id","area_names","state","registered.voters","total_votes","invalid_first_votes","invalid_second_votes","valid_first_votes","valid_second_votes"

function getData (callback) {
  d3.csv('2017_german_election_overall.csv', function(d) {
    return {
      no: +d.no,
      area_id: d.area_id,
      area_names: d.area_names,
      state: d.state,
      registeredVoters: d['registered.voters'],
      totalVotes: d.total_votes,
      invalidFirstVotes: d.invalid_first_votes,
      invalidSecondVotes: d.invalid_second_votes,
      validFirstVotes: d.valid_first_votes,
      validSecondVotes: d.valid_second_votes
      }
    }).then(dataJSON => {
      callback(dataJSON)
    })
}


