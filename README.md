# Esum Acisum API

## Deploy

Deployed on Heroku at https://esum-acisum-api.herokuapp.com/

## The Chord Progressions API

### Get a specific chord progression

To get a specific chord progression, send a GET request to `/chord_progressions/query/`, with the following parameters:

- groupTitle | type: "Diatonic Major" | description: The group title of the chord progression
- collectionId | type: number | description: The collection id
- progressionId | type: number | description: The progression id
- isRootPosition | type: boolean | description: Whether the chord progression is in root positions
- inversionIndex | type: number | description: The inversion index

Example:

https://esum-acisum-api.herokuapp.com/chord-progressions/query/?groupTitle=diatonic-major&collectionId=1&progressionId=1&isRootPosition=false&inversionIndex=0

Response:

[ "I", "I6", "IV", "V" ]
