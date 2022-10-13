# Esum Acisum API

## Deploy

Deployed on Heroku at https://esum-acisum-api.herokuapp.com/

## The Chord Progressions API

&nbsp;
### Get a specific chord progression
---

To get a specific chord progression, send a GET request to `/chord_progressions`, with a query string with the following parameters:

- groupTitle | type: "Diatonic Major" | description: The group title of the chord progression
- collectionId | type: number | description: The collection id
- progressionId | type: number | description: The progression id
- isRootPosition | type: boolean | description: Whether the chord progression is in root positions
- inversionIndex | type: number | description: The inversion index

Example:

https://esum-acisum-api.herokuapp.com/chord-progressions/?groupTitle=diatonic-major&collectionId=1&progressionId=1&isRootPosition=false&inversionIndex=0

Response:

[ "I", "I6", "IV", "V" ]

&nbsp;
### Get an array of specific chord progressions
---

To get an array of specific chord progressions, send a POST request to `/chord_progressions/array`, with a JSON with one property: "progressions", which is an array of objects with the same properties as the GET request above.

Example:

(POST) https://esum-acisum-api.herokuapp.com/chord-progressions/array

(request body):

```
{
	"progressions": [
		{
			"groupTitle": "diatonic-major",
			"collectionId": 1,
			"progressionId": 2,
			"isRootPosition": true,
			"inversionIndex": -1
		},
		{
			"groupTitle": "diatonic-major",
			"collectionId": 1,
			"progressionId": 2,
			"isRootPosition": false,
			"inversionIndex": 0
		}
	]
}
```

Response:

```
[
    ["I", "vi", "IV", "V"],
    ["I", "vi6", "IV", "V"]
]
```
