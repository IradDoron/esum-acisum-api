import cors from 'cors';
import express from 'express';
import artists from './data/artists.mjs';
import chordProgressions from './data/chordProgressions.mjs';
import leadSheetPieces from './data/leadSheetPieces.mjs';
import musicTheory from './data/musicTheory.mjs';
import songs from './data/songs.mjs';

const { PORT, HOST } = process.env;

const app = express();

app.use(cors());
app.use(express.json({ extended: true, limit: '1mb' }));

app.get('/', (req, res) => {
	res.send('API is running...');
});

app.get('/lead-sheet-pieces/all', (req, res) => {
	res.send(leadSheetPieces);
});

app.get('/lead-sheet-pieces/search/:key/:value', (req, res) => {
	let { key, value } = req.params;
	console.log(key, value);
	if (key === 'id') {
		value = parseInt(value);
	}
	const piece = leadSheetPieces.find((piece) => piece[key] === value);
	console.log(piece);
	res.send(piece);
});

app.get('/lead-sheet-pieces/help', (req, res) => {
	res.send(`
		<h1>TODO</h1>
		<p>Write help page.</p>
		
	`);
});

app.get('/chord-progressions/all', (req, res) => {
	res.send(chordProgressions);
});

app.get('/chord-progressions', (req, res) => {
	// should get: groupTitle, collectionId, progressionId, isRootPosition, inversionIndex
	const {
		groupTitle,
		collectionId,
		progressionId,
		isRootPosition,
		inversionIndex,
	} = req.query;
	console.log(req.query);
	const group = chordProgressions.find(
		(group) => group.groupTitle === groupTitle
	);

	const collection = group.collections.find(
		(collection) => collection.id === parseInt(collectionId)
	);

	const progression = collection.progressions.find(
		(progression) => progression.id === parseInt(progressionId)
	);

	if (isRootPosition === 'true') {
		res.send(progression.rootPosition);
	} else {
		res.send(progression.inversions[inversionIndex]);
	}
});

app.post('/chord-progressions/array', (req, res) => {
	// should get array of: groupTitle, collectionId, progressionId, isRootPosition, inversionIndex

	function fineProgression(
		groupTitle,
		collectionId,
		progressionId,
		isRootPosition,
		inversionIndex
	) {
		console.log(isRootPosition);
		const group = chordProgressions.find(
			(group) => group.groupTitle === groupTitle
		);

		const collection = group.collections.find(
			(collection) => collection.id === parseInt(collectionId)
		);

		const progression = collection.progressions.find(
			(progression) => progression.id === parseInt(progressionId)
		);

		if (isRootPosition) {
			return progression.rootPosition;
		} else {
			return progression.inversions[inversionIndex];
		}
	}

	const { progressions } = req.body;
	const progressionsTokens = progressions.map((progression) => {
		const {
			groupTitle,
			collectionId,
			progressionId,
			isRootPosition,
			inversionIndex,
		} = progression;
		return fineProgression(
			groupTitle,
			collectionId,
			progressionId,
			isRootPosition,
			inversionIndex
		);
	});

	res.send(progressionsTokens);
});

app.get('/music-theory/all', (req, res) => {
	res.send(musicTheory);
});

app.get('/songs/all', (req, res) => {
	res.send(songs);
});

app.get('/artists/all', (req, res) => {
	res.send(artists);
});

app.listen(PORT, HOST, () => {
	console.log(`server listen on http://${HOST}:${PORT}...`);
});
