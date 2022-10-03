/*

all possible properties:

id: number
title: string
description: string
difficulty: string
composers: [string]
tags: [string]
bars: number
keys: [string]
mainKey: string
meter: string
noteLength: string
chords: [string]
range: [string]
notes: [string]
body: string
geners: [string],
subGeners: [string],
album: string,
trackNumber: number, 
originalKey: string, // example: C#
bpm: [number, string], // [bpm, bpmUnit] // example: [120, '1/4']
catalogName: string // example: 'BWV'
catalogNumber: number, // example: 1

*/

/*

minimal example:


{
id: 1,
mainKey: 'C',
meter: '4/4',
noteLength: '1/4',
body: `"C" E E C C |"G" D D E E`,
},

*/

// series

const tunes = [
	{
		seriesId: 1,
		seriesTitle: 'Piano Pieces for Newbies',
		seriesDescription: 'A collection of easy piano pieces for beginners.',
		collections: [
			{
				collectionId: 1,
				collectionTitle: 'First Steps',
				collectionDescription: 'The first steps in learning to play the piano',

				pieces: [
					{
						pieceId: 1,
						mainKey: 'C',
						meter: '4/4',
						noteLength: '1/2',
						body: `"C" CC | DE |"G" DE | "C" DC |
"C" EE | DC | "G" ED | D2 |
"C" CC | DC | "G" EC | "C" C2 |]`,
						composers: ['Irad Doron'],
						title: 'Little Exercise',
						tags: ['exercise', 'easy'],
					},
					{
						pieceId: 2,
						mainKey: 'C',
						meter: '4/4',
						noteLength: '1/1',
						body: `"C" C | "G" D | "C" E/ C/| "G" D/ E/ | "C" C |]`,
						composers: ['Irad Doron'],
						title: 'Little Exercise',
						tags: ['exercise', 'easy'],
					},
					{
						pieceId: 3,
						mainKey: 'C',
						meter: '4/4',
						noteLength: '1/2',
						body: `"C" C C | "G" D C | "C" E2| "G" D2 | "C" C2 |]`,
						composers: ['Irad Doron'],
						title: 'Little Exercise',
						tags: ['exercise', 'easy'],
					},
					{
						pieceId: 4,
						mainKey: 'C',
						meter: '4/4',
						noteLength: '1/2',
						body: `"G" D E | D C | "C" E D| "G" C E | "C" C2 |]`,
						composers: ['Irad Doron'],
						title: 'Little Exercise',
						tags: ['exercise', 'easy'],
					},
					{
						pieceId: 5,
						mainKey: 'C',
						meter: '4/4',
						noteLength: '1/2',
						body: `"G" D2 | "C" E2 | "G" D E|  C D| "C" E2 |]`,
						composers: ['Irad Doron'],
						title: 'Little Exercise',
					},
					{
						pieceId: 6,
						mainKey: 'C',
						meter: '4/4',
						noteLength: '1/2',
						body: `"C" C D | E C | "G" D E | D C |
"C" E C | "G" D E | D2 | "C" C2|]`,
						composers: ['Irad Doron'],
						title: 'Little Exercise',
					},
					{
						pieceId: 7,
						mainKey: 'C',
						meter: '4/4',
						noteLength: '1/2',
						body: `"C" E2 | "G" D2 | "C" E D | "G" D C |
"C" E2 | "G" D E | D E | "C" C2 |]`,
						composers: ['Irad Doron'],
						title: 'Little Exercise',
					},
					{
						pieceId: 8,
						mainKey: 'C',
						meter: '4/4',
						noteLength: '1/2',
						body: `"C" CC | DE |"G" DE | "C" DC |
"C" EE | DC | "G" ED | D2 |
"C" CC | DC | "G" EC | "C" C2 |]`,
						composers: ['Irad Doron'],
						title: 'Little Exercise',
					},
					{
						pieceId: 9,
						mainKey: 'C',
						meter: '4/4',
						noteLength: '1/4',
						body: `"C" C2 E2 | C2 E2 |"G" D2 E2 | D4 |
"C" E2 C2 |"G" D2 E2 |"C" C2 E2 |"G" D2 C2 |
"C" C2 E2 | C2 E2 |"G" D2 C2 |"C" C4 |]`,
						composers: ['Irad Doron'],
						title: 'Little Exercise',
					},
					{
						pieceId: 10,
						mainKey: 'C',
						meter: '4/4',
						noteLength: '1/4',
						body: `"C" C2 D2 | E2 D2 |"G" E2 D2 |"C" E4 |
"C" E2 D2 | C2 D2 |"G" D4 |"C" C4 |
"C" C2 D2 | E2 D2 | "G" E2 E2 | D4 |
"C" C2 E2 | D2 E2 |"G" C2 D2 |"C" C4 |]`,
						composers: ['Irad Doron'],
						title: 'Little Exercise',
					},

					{
						pieceId: 11,
						mainKey: 'C',
						meter: '4/4',
						noteLength: '1/4',
						body: `"C" E4 |"G" D4 |"C" z2 E2 |"G" D4 |
"C" C2 E2 |"G" E2 D2 |"C" C2 E2 |"G" D4 |
"C" E4 |"G" D4 |"C" z2 E2 |"G" E2 D2 |
"C" C2 E2 |"G" D4 | C2 E2 |"C" C4 |]`,
						composers: ['Irad Doron'],
						title: 'Little Exercise',
					},
					{
						pieceId: 12,
						mainKey: 'C',
						meter: '4/4',
						noteLength: '1/4',
						body: `"C" C2 D2 | E2 E2 |"G" D4 | z4 |
"C" C2 D2 | E2 E2 |"G" E4 | D2 E2 |
"C" C2 D2 | E2 E2 |"G" D4 | E2 D2 |
"C" C2 D2 | E2 C2 |"G" z2 D2 |"C" C4 |]`,
						composers: ['Irad Doron'],
						title: 'Little Exercise',
					},
					{
						pieceId: 13,
						mainKey: 'C',
						meter: '4/4',
						noteLength: '1/4',
						body: `"C" E2 E2 | C2 C2 |"G" D2 D2 |"C" E2 E2 |
C2 E2 | D2 C2 |"G" E2 D2 |"C" D2 C2 |
E2 E2 | C2 C2 |"G" D2 C2 | E4 |
D2 C2 | E2 D2 | D2 C2 |"C" C4 |]`,
						composers: ['Irad Doron'],
						title: 'Little Exercise',
					},
					{
						pieceId: 14,
						mainKey: 'C',
						meter: '4/4',
						noteLength: '1/4',
						body: `"C" E E C C |"G" D D E E |"C" D C D E |"G" E D D2 |
"C" E E C C |"G" D D D E | D C D E |"C" D C C2 |
E E E2 |"G" E D D2 |"C" E D C D |"G" E D D2 |
"C" E E C C |"G" D D D E | D C E D |"C" D C C2 |]`,
						composers: ['Irad Doron'],
						title: 'Little Exercise',
					},
					{
						pieceId: 15,
						mainKey: 'C',
						meter: '4/4',
						noteLength: '1/4',
						body: `"G" D2 D2 |"C" C E E2 |"G" D E E2 |"C" C E E2 |
"G" D2 D2 |"C" C2 E C |"G" z C E C |"C" E C C2 |
"G" D2 D2 |"C" C E E2 |"G" D E E D |"C" C E E C |
"G" D C D C |"C" C E E C |"G" C C E C |"C" C4 |]`,
						composers: ['Irad Doron'],
						title: 'Little Exercise',
					},
					{
						pieceId: 16,
						mainKey: 'C',
						meter: '4/4',
						noteLength: '1/4',
						body: `"C" z D E C | z D E C | z D C E |"G" D E D C |
"C" E D E C | z D E C |E D C E |"G" D D D2 |
"C" D E C2 | D E C2 | D C E D |"G" E D C2 |
"C" E D E C | z D E C |"G" E D C E |"C" C4 |]`,
						composers: ['Irad Doron'],
						title: 'Little Exercise',
					},
					{
						pieceId: 17,
						mainKey: 'C',
						meter: '4/4',
						noteLength: '1/4',
						body: `"C" E2 D C |"G" E D D2 |"C" E D C E |"G" C D D2 |
"C" E2 D C | E E D C |"G" D C D E | D2 D2 |
"C" E2 D C |"G" E D D2 | D E D C |"C" C4 |]`,
						composers: ['Irad Doron'],
						title: 'Little Exercise',
					},
					{
						pieceId: 18,
						mainKey: 'C',
						meter: '4/4',
						noteLength: '1/4',
						body: `"C" E E E D | E E E D |"G" C D D E | E2 E D |
"C" C E E D | C E E D |"G" D C D C | D E E2 |
"C" C C C D | C C C D |"G" E D D C |"C" C E C2 |]`,
						composers: ['Irad Doron'],
						title: 'Little Exercise',
					},
					{
						pieceId: 19,
						mainKey: 'C',
						meter: '4/4',
						noteLength: '1/4',
						body: `"C" C2 D E |"G" E2 D2 |"C" E C D C |"G" D2 E2 |
"C" E2 D C |"G" D4 |"C" E2 D C |"G" E2 D2 |
"C" C2 D E |"G" E2 D2 |"C" E D C D |"G" D C D E |
"C" E2 D C |"G" D4 | E C D C |"C" C4 |] `,
						composers: ['Irad Doron'],
						title: 'Little Exercise',
					},
					{
						pieceId: 20,
						mainKey: 'C',
						meter: '4/4',
						noteLength: '1/4',
						body: `"C" C2 E2 |"G" G2 F2 |"C" E4 |"G" D4 |
"C" E2 C2 |"G" D2 F2 |"C" E2 G2 |"G" D4 |
"C" C2 E2 |"G" G2 F2 |"C" G2 E2 |"G" D4 |
"C" F2 E2 |"G" C2 D2 | E2 D2 |"C" D2 C2 |] `,
						composers: ['Irad Doron'],
					},
				],
			},
			{
				collectionId: 2,
				collectionTitle: 'Practice in C Major',
				pieces: [
					{
						id: 21,
						mainKey: 'C',
						meter: '4/4',
						noteLength: '1/4',
						body: `"C" G2 G2 |"G" G2 G2 |"C" E D F E |"G" E2 D2 |
"C" E2 G2 |"G" D E F2 | F2 E2 | E2 D2 |
"C" G2 G G |"G" G G G F | E D F E |"C" D2 E F |
"C" G E F G |"G" G D E F | E D F E |"C" C4 |] `,
						composers: ['Irad Doron'],
					},
					{
						id: 22,
						mainKey: 'C',
						meter: '4/4',
						noteLength: '1/4',
						body: `"C" C C C D | E E E2 |"G" G G G D |"C" F2 E2 |
"G" G G G D |"C" D2 E2 |"G" E D F E |"C" D2 C2 |
"C" C C C D | E E E2 |"G" G G G F |"C" G F E D |
"G" G G G F |"C" E D E C |"G" E D F E |"C" D2 C2 |] `,
						composers: ['Irad Doron'],
					},
					{
						id: 23,
						mainKey: 'C',
						meter: '4/4',
						noteLength: '1/4',
						body: `"C" C E G2 |"G" D E F2 |"C" E D C D |"G" E F E D |
"C" C E G2 |"G" F E D2 |"C" C D E C |"G" D4 |
"C" C E G2 |"G" D E F2 |"C" E D C D |"G" E F E D |
"C" C D E F |"G" G D F2 | E G D C |"C" C4 |] `,
						composers: ['Irad Doron'],
					},
					{
						id: 24,
						mainKey: 'C',
						meter: '4/4',
						noteLength: '1/4',
						body: `"C" C E E D |"F" D C C2 |"C" C E E C |"G" C D D2 |
"C" E E E D |"F" D2 C2 |"C" E E D C |"G" D4 |
"F" C E E D |"C" D C C2 |"F" C E E D |"C" C4 |] `,
						composers: ['Irad Doron'],
					},
					{
						id: 25,
						mainKey: 'C',
						meter: '4/4',
						noteLength: '1/4',
						body: `"C" C2 C2 |"F" C2 C2 |"C" E F G E |"G" D4 |
"C" C E C E |"F" G F C2 |"C" G F E G |"G" E D D2 |
"F" E D D C |"C" C D E2 | E F G E |"G" E D D2 |
"F" E D D C |"C" D C C2 |"G" E D D C |"C" C4 |] `,
						composers: ['Irad Doron'],
					},
					{
						id: 26,
						mainKey: 'C',
						meter: '4/4',
						noteLength: '1/4',
						body: `"C" C D E F |"F" G2 F2 |"C" C D E F |"G" D4 |
"C" C D E F |"F" E F E D |"G" F G F E |"C" D C E2 |
"C" C D E F |"F" G2 F2 | E F E D |"G" E D F2 |
E F E D |"F" D E D C |"G" F G F E |"C" D E C2 |] `,
						composers: ['Irad Doron'],
					},
					{
						id: 27,
						mainKey: 'C',
						meter: '4/4',
						noteLength: '1/4',
						body: `"F" C2 F E |"G" D2 E F |"C" G E D C |"G" D4 |
"F" F2 C D |"G" D2 E F |"C" E2 D C |"G" D2 D2 |
"F" D2 C D |"G" D2 E D |"F" E2 D C |"G" D2 D2 |
"F" C2 F E |"G" D2 E F | G E D C |"C" C4 |]  `,
						composers: ['Irad Doron'],
					},
					{
						id: 28,
						mainKey: 'C',
						meter: '4/4',
						noteLength: '1/4',
						body: `"C" z C D E |"F" z F E C |"G" z G F D |"C" D2 E2 |
"F" z C D E |"G" F E D2 |"F" z C D E |"G" G F E2 |
"C" z E F G |"G" D E"F" F2 |"G" z G F D |"C" D2 C2 |]  `,
						composers: ['Irad Doron'],
					},
					{
						id: 29,
						mainKey: 'C',
						meter: '4/4',
						noteLength: '1/4',
						body: `"C" z2 G C |"F" z G C2 |"G" G C z G |"C" C D E D |
"F" C G2 C |"G" G2 C G |"F" z C G z |"G" E D C D |
"C" E2 G C |"F" F G C2 |"G" G C D G |"C" G4 |]`,
						composers: ['Irad Doron'],
					},
					{
						id: 30,
						mainKey: 'C',
						meter: '4/4',
						noteLength: '1/4',
						body: `"C" C D E2 |"F" E2 D2 |"G" G F E D |"Am" D2 C2 |
"G" G F E D |"F" D2 C2 |"G" D2 F2 |"C" E4 |]`,
						composers: ['Irad Doron'],
					},
					{
						id: 31,
						mainKey: 'C',
						meter: '4/4',
						noteLength: '1/4',
						body: `"C" G2 G2 |"G" G2 D2 |"Am" F E C F |"F" E D"G" D2 |
"C" G2"G" G2 |"F" G2"G" D2 |"Am" F E"F" C D |"C" C4 |]`,
						composers: ['Irad Doron'],
					},
					{
						id: 32,
						mainKey: 'C',
						meter: '4/4',
						noteLength: '1/4',
						body: `"C" E D E F |"F" E D C E |"G" D C D E |"Am" D C E2 |
"C" E D E G |"F" G F C D |"G" D C D F |"C" E D E2 |]`,
						composers: ['Irad Doron'],
					},
					{
						id: 33,
						mainKey: 'C',
						meter: '4/4',
						noteLength: '1/4',
						body: `"C" C D E D- |"F" D E F E- |"G" E F G D- |"C" D2 E2- |
"Am" E G C G- |"Dm" G F C2- |"F" C F C D- |"C" D2"Em" E2 |
"C" C D E D- |"F" D E F E- |"G" E F G D- |"Am" D2 E2- |
"C" E G C G- |"F" G F C2- |C F"G" C D- |"C" D2 C2 |]`,
						composers: ['Irad Doron'],
					},
					{
						id: 34,
						mainKey: 'C',
						meter: '4/4',
						noteLength: '1/8',
						body: `"C" E2 ED E2 GC- |"Am" C6 GF- |"F" F2 E2 F2 GG- |"G" G4 F4 |
"Am" E2 ED E2 DC- |"Dm" CD- D2 F4 |"F" z2 E2 F2 ED- |"G" D2 CD- D4 |
"C" E2 ED E2 CG- |"Am" GG C2 C G2 F- |"F" F2 E2 F E2 D |"G" E2 ED- D4 |
"C" E2 ED E2 CG- |"Am" GG C2 C G2 F- |"F" F2 E2"G" E D2 C- |"C" C8 |]`,
						composers: ['Irad Doron'],
					},
					{
						id: 35,
						mainKey: 'C',
						meter: '4/4',
						noteLength: '1/4',
						body: `"C" E C D E |"G" D E"Am" C2 |"F" C E D C |"G" D E E2 |
"C" E C D E |"F" D C C2 |"Am" D C C D |"Em" D2 E2 |
"C" E C D E |"F" D C C2 |"G" D C C2 |"C" C4 |]`,
						composers: ['Irad Doron'],
					},
					{
						id: 36,
						mainKey: 'C',
						meter: '4/4',
						noteLength: '1/4',
						body: `"C" C2 G F |"G" G2 E D |"Dm" F2 E D |"G" D4 |
"C" E F G F |"F" E D C2 |"Dm" D E F E |"G" E2 D2 |
"C" E F G F |"Dm" E F D C |"F" E F G F |"G" E F D C |
"C" C2 G F |"G" G2 E D |"F" F2 E D |"C" C4 |] `,
						composers: ['Irad Doron'],
					},
					{
						id: 37,
						mainKey: 'C',
						meter: '4/4',
						noteLength: '1/4',
						body: `"Dm" D E F E | D E F E |"G" D2 D E |"F" D2"G" D2 |
"C" E F G F | E F G F |"F" E2 E F |"G" E2 D2 |
"Dm" G F D C |"F" G E F2 |"C" F E C D |"G" E F D C |
"Dm" D E F E |"C" E F G F |"F" F E C D |"C" E4 |] `,
						composers: ['Irad Doron'],
					},
					{
						id: 38,
						mainKey: 'C',
						meter: '4/4',
						noteLength: '1/4',
						body: `"C" E D E C |"G" D C D E |"F" F E F D |"C" E G"G" F E |
"Am" E D E C |"Dm" D C D E |"F" F C D C |"G" D E D C |
"C" E D E C |"G" D C D E |"F" F E F D |"C" E G"G" F E |
"F" G F G E |"Dm" F E F G |"G" F E D C |"C" C4 |]`,
						composers: ['Irad Doron'],
					},
					{
						id: 39,
						mainKey: 'C',
						meter: '4/4',
						noteLength: '1/4',
						body: `"C" C D E F | G F E D |"F" C D E F |"G" G E D C |
"F" G F E D |"C" G F E2 |"G" G E D C |"Dm" F E"G" D2 |
"C" C D E F |"G" G F E D |"Am" C D E F |"F" E D C D |
"C" D C E F |"Am" G F E D |"Dm" C D"G" E F |"C" E D C2 |]`,
						composers: ['Irad Doron'],
					},
					{
						id: 40,
						mainKey: 'C',
						meter: '4/4',
						noteLength: '1/4',
						body: `"C" C2 E2 |"Em" G G G E |"F" E2 F2 |"G" E F E D |
"Am" C2 E2 |"Dm" F F F E |"G" D C D C |"C" D E E2 |
"F" G2 F2 |"Em" D E E2 |"Dm" G F F E |"G" E D D C |
"C" C2 E2 |"Em" G G G E |"F" E2"G" F2 |"C" E4 |]`,
						composers: ['Irad Doron'],
					},
					{
						id: 41,
						mainKey: 'C',
						meter: '4/4',
						noteLength: '1/8',
						body: `"Am" z4 G2 GE |"Em" DE E4 z2 |"F" z4 G2 GE |"G" DE E4 z2 |
"Am" z4 E2 EC |"Dm" CD D4 DE |"Em" FE E2 FEED |"Am" E8 |
"C" z4 G2 GE |"F" DE E4 z2 |"C" z4 G2 GE |"Dm" DEED"G" E2 z2 |
"Am" C4 G2 GE |"F" DE C4 DE |"Dm" FE E2"G" FEED |"C" E8 |]`,
						composers: ['Irad Doron'],
					},
					{
						id: 42,
						mainKey: 'C',
						meter: '4/4',
						noteLength: '1/8',
						body: `"C" C2 CC C2 C2 |"F" C2 CC C2 C2 |"C" C2 DE "Em" DEFG |"Dm" EFEF"G" D4 |
"Am" C2 CC C2 D2 |"Em" E2 EE E2 EF |"F" G4 F2 E2 |"G" E4 D4 |
"Em" GG G4 F2 |"Dm" EF F4 E2 |"C" DF E4 D2 |"G" D4"Em" D4 |
"Am" C2 CC C2 D2 |"Em" E2 EE E2 E2 |"F" E2 F2"G" E2 D2 |"C" D4 C4 |]`,
						composers: ['Irad Doron'],
					},
					{
						id: 43,
						mainKey: 'C',
						meter: '4/4',
						noteLength: '1/8',
						body: `"G" z2 z G FDFE |"C" E2 E4 DE |"F" FGFG "C" EFED |"Dm" EFEF "G" DEDC |
"Dm" z GFD "G" FEDC |"F" z FEC "G" EDEC |"F" z FEC "G" EDEC |"C" C4 "Am" z4 |
"Dm" z2 z G "G" FDFE |"C" E2 E2- "Am" E2 DE |"F" z CDE "Dm" z EDE |"G" z GDE "Em" E4 |
"Dm" z GFD "G" FEDC |"F" z FEC "G" EDEC |"F" z FEC "G" EDEC |"C" C4 z4 |]`,
						composers: ['Irad Doron'],
					},
					{
						id: 44,
						mainKey: 'C',
						meter: '4/4',
						noteLength: '1/4',
						body: `"C" G3 F |"Em" E3 D |"F" C C D E |"Dm" E2"G" D2 |
"Am" C3 G |"F" C3 G |"Dm" F3 C |"G" D4 |
"C" G3 F |"Em" E3 D |"F" C C D E |"Dm" F2"Em" E2 |
"F" D2 C D |"G" E3 D |"Em" D2 C2 |"C" C4 |]`,
						composers: ['Irad Doron'],
					},
					{
						id: 45,
						mainKey: 'C',
						meter: '4/4',
						noteLength: '1/8',
						body: `"F" C6 D2 |"Am" C4 E4 |"Em" z2 G2 F2 E2 |"Dm" z2 F2 E2 D2 |
"F" C6 D2 |"C" E8 |"Em" z2 GF FEED |"Dm" z2 FE EDDC |
"G" z2 DC D2 DC |"Dm" DCDE"G" D2 D2 |"Am" z2 ED E2 ED |"Em" EGED E2 D2 |
"F" C6 D2 |"Am" CDCD E4 |"Dm" z2 F2"G" E2 D2 |"C" C8 |]`,
						composers: ['Irad Doron'],
					},
					{
						id: 46,
						mainKey: 'C',
						meter: '4/4',
						noteLength: '1/8',
						body: `"C" C3 G"F" F3 C |"Am" E3 C"G" D4 |"F" C3 F"C" E3 F |"Dm" D4-"G" D4 |
"C" C3 G"Am" G3 E |"Dm" G2 F2"G" E2 D2 |"Dm" GDFE"G" E3 D |"C" D3 C"Am" C4 |
"F" C3 F"C" E3 D |"Em" E3 G"Dm" F3 E |"F" F6 E2 |"Dm" E2 FE"G" D4 |
"C" C3 G"F" F3 C |"Am" E3 C"G" D4 |"F" C6 C2 |"C" C8 |]`,
						composers: ['Irad Doron'],
					},
					{
						id: 47,
						mainKey: 'C',
						meter: '4/4',
						noteLength: '1/8',
						body: `"C" C3 C G2 GE- |"Dm" EF F4 z2 |"F" EF F4 E2 |"G" DCDE D4 |
"Am" C3 C G2 GE |"F" G3 G C2 CE |"Dm" EF F4 E2 |"Em" DCDE D4 |
"F" C3 C F2 FC |"C" C3 C G2 GC |"Am" C3 C AGFE |"Dm" FEFG"G" E2 D2 | 
"C" C3 C G2 GE- |"Dm" EFFE EDEC |"F" z FFE"G" EDEC- |"C" C8 |]`,
						composers: ['Irad Doron'],
					},
					{
						id: 48,
						mainKey: 'C',
						meter: '4/4',
						noteLength: '1/8',
						body: `"C" E6- ED |"Am" E3 E E2 DE- |"F" E3 E GFED |"G" D2 EC- C D2 C |
"C" E6- EE |"Am" G3 F E2 DC |"F" G G2 F E2 DC |"G" EDED- DCEC- |
"C" CCDC ECDC- |"Am" CCDC ECDC- |"F" CCDC GFED |"G" D2 EC- C D2 C |
"C" CD E4- ED |"Am" E3 E "Em" E2 DE- |"Dm" E3 E "G" FEDC- |"C" C8 |]`,
						composers: ['Irad Doron'],
					},
					{
						id: 49,
						mainKey: 'C',
						meter: '4/4',
						noteLength: '1/8',
						body: `"C" G2 GE G2 GE |"F" GAGE GEDC |"Dm" FGFE "G" FE D2 |"Dm" FGFE "G" D4 |
"C" G2 GE G2 GE |"F" A2 AG E2 GA |"Am" cBAG "Em" cB G2 |"F" cBAG "G" G4 |
"Am" c2 cA c2 cA |"G" BcBG "F" A2 GA |"Am" c2 cA c2 cA |"Em" G4 "Dm" F2 B2 |
"Am" c2 cA c2 cA |"G" BcBG "F" A2 GA |"Am" c4 A4 |"Em" G4"G" F4 |
"C" E2 EC E2 EC |"F" DEDC ED C2 |"G" DEDC D4 |"C" E8 |]`,
						composers: ['Irad Doron'],
					},
				],
			},
			{
				collectionId: 3,
				collectionTitle: 'TODO: organize into collections',
				pieces: [
					{
						id: 50,
						mainKey: 'C',
						meter: '4/4',
						noteLength: '1/8',
						body: `"C" C4 E2 GA- |"F" A6 GE- |"C" E6 FE |"G" E2 GD- D4 |
"C" C4 E2 GA- |"Am" A6- AG |"Em" G6 E2 |"Dm" G2 AF- F4 |
"Am" E3 F EFED |"Em" DDFF "Am" EDC2 | E3 F EAED |"Em" DDFF"Am" E3 D |
"C" C4 E2 GF |"F" A6 GF |"Dm" E4-"G" E2 FE |"C" E2 DC- C4 |]`,
						composers: ['Irad Doron'],
					},
					{
						id: 51,
						mainKey: 'C',
						meter: '4/4',
						noteLength: '1/8',
						body: `"C" CEGA- AG E2 |"Am" CEGA- A4 |"F" CEGA- AGEG |"G" GAED- D4 |
"Am" CEAE- E G2 E |"Em" GAED E4 |"F" EFCA- AGFE |"G" FGDE-"Am" E4 |
"C" CDEE E2 DC |"Em" D3 E- E4 |"Dm" CDFA- ADFA |"G" A3 G- G4 |
"C" CEGA- AG E2 |"Am" CEGA- A4 |"F" CEFA"G" EFDC- |"C" C8 |]`,
						composers: ['Irad Doron'],
					},
					{
						id: 52,
						mainKey: 'C',
						meter: '4/4',
						noteLength: '1/8',
						body: `"C" E2 ED- D C2 C |"Am" C2 DE- E4 |"F" G G2 C2 G2 F- |"G" F2 E2 D4 |
"C" E3 E E2 EE- |"Bmb5" ED- D4 DC- |"Am" C3 C C2 CC- |"G" CD- D4 z2 |
"C" z2 ED- D C2 C |"Am" C2 DE- E4 |"F" G G2 C2 G2 F- |"G" FGEF DECD |
"C" ECCE ECCE- |"Bmb5" EDDE FEDC- |"Am" C3 C"F" C2 CC- |"C" C8 |]`,
						composers: ['Irad Doron'],
					},
					{
						id: 53,
						mainKey: 'C',
						meter: '4/4',
						noteLength: '1/4',
						body: `"Dm" D2 F G |"F" A3 F |"C" G2 E D |"Dm" F4 |
"G" D2 F G |"F" F2"Bmb5" E3/2 D/ |"C" D E-"Am" E F/E/ |"Dm" D2"G" z E |
"Am" A3/2 E/ E A |"Em" G3 E |"F" F2"Bmb5" E3/2 D/ |"G" E D2 E |
"Am" A3/2 E/ E A |"Em" G3 G |"F" A E"G" E D |"C" C4 |]`,
						composers: ['Irad Doron'],
					},
					{
						id: 54,
						mainKey: 'C',
						meter: '4/4',
						noteLength: '1/8',
						body: `"Dm" z DEF AGFE |"Am" CDEG FEDC |"G" D2 EF- FEDC- |"F" CFEC"G" D4 |
"Dm" z DEF AGFE |"Am" CDEG FEFE |"G" EDFE EDEC |"F" DCED "G" DCDC |
"Am" c E2 c- c E2 B- |"Em" B E2 B- B E2 A- |"F" AGFE FCDE |"G" D2 EF- FEDC |
"Am" c E2 c- c E2 B- |"Em" B E2 B- B E2 A- |"F" AGFE FCDE |"G" D2 E2 D2 C2 |
"Dm" z DEF AGFE |"Am" C4 z2 DC |"G" D2 EF- FEDC- |"F" C2 z C"G" D4 |
"Dm" z DEF AFAB |"Am" cBAG FEDC |"G" BAGF GFED |"F" AGFE "G" DCDC |
"Am" c E2 c- c E2 B- |"Em" B E2 B- B E2 A- |"F" AGFE FCDE |"G" D2 EF- FEDC |
"Am" c E2 c- c E2 B- |"Em" B E2 B- B A2 c- |"F" c4 C4 |"G" D4 B4 |"C" B8 | c8 |]`,
						composers: ['Irad Doron'],
					},
					{
						id: 55,
						mainKey: 'C',
						meter: '4/4',
						noteLength: '1/8',
						body: `"Am" c4 c4 |"Em" B8 |"F" AB c2 c2 BA |"G" A2 B2 B3 A |
"C" G4 G2 FG |"F" G2 A2 A2 EF |"G" G4 F3 E |"C" E4 z4 |
"Am" c4 c4 |"Em" B8 |"F" AB c2 c2 BA |"G" A2 G2 G2 F2 |
"C" E4 E2 DE |"F" E2 F2 F2 DE |"G" F4 E3 D |"C" E4 z4 |
"Em" G4 E2 G2 |"Am" B2 A2 D2 E2 |"Dm" G2 F2 C2 D2 |"G" F2 E2 D2 C2 |
"Em" G2 EG "Am" BADE |"Dm" GFCD "G" FEDC |"Em" GFDE "F" AGEF |"G" BAFG "Em" cBGA |
"Am" c4 c4 |"Em" B8 |"F" AB c2 c2 BA |"G" A2 G2 G2 F2 |
"C" E4 E2 DE |"F" E2 F2 F2 DE |"G" F4 E4 |"C" E4 z4 |]`,
						composers: ['Irad Doron'],
					},
					{
						id: 56,
						mainKey: 'C',
						meter: '4/4',
						noteLength: '1/8',
						body: `"Dm" D2 A2 F2 D2 |"Am" C2 DE "F" F2 FE |"G" D2 EF "Em" G2 GF |"Am" E2 c2 A2 E2 |
"Dm" F2 cB "G" B2 FE |"C" E2 BA "F" A2 ED |"Bmb5" D2 AG "Em" G2 DC |"Am" CDEG "Dm" FEFC |
"G" DEFG "C" E2 DC |"Dm" D2 A2 F2 D2 |"Am" C2 DE "F" F2 FE |"G" D2 EF "Em" G2 GF |
"Am" E2 c2 A2 E2 |"Dm" F2 cB "G" BAGF |"Em" GFED "Am" EDEC |"Dm" FEFA "G" GFGB |
"F" AGAc "G" EcDB |"C" cE B2- "F" B2 AG |"Dm" F2 c2 "G" B4 |"C" E2 B2 "F" A4 |
"Bmb5" D2 A2 "Em" GFED |"Am" CDEF "Dm" E2 D2 |"G" C2 D2 E2 F2 |"C" E8 |]`,
						composers: ['Irad Doron'],
					},
					{
						id: 57,
						mainKey: 'C',
						meter: '4/4',
						noteLength: '1/8',
						body: `"Am" cB c2 E2 A2- |"Dm" AE F2- "G" FD G2- |"C" GEFc "Em" G4 |"F" A4 "G" B4 |
"Am" c4 E2 A2 |"Em" G4- GAGA |"Dm" FAGF "C" EGFE |"G" DFED "Am" CEDC |
"G" D2 G2- "F" GE F2 |"Am" E2 A2- "Em" AF G2 |"F" A2 c2- "G" c2 B2 |"Dm" c2 B2 "G" A2 B2 |
"Am" cB c2 E2 A2- |"Dm" AE F2- "G" FD G2- |"C" GEFc "Em" G4 |"F" A4 "G" B4 |
"Dm" c2 F2- F2 c2 |"G" BABc BGAB |"F" ABcB AFGA |"C" G4 "Em" F2 E2 |
"Dm" c2 F2- F2 c2 |"G" BABc "Em" BGAB |"F" ABcB "Dm" AFGA |"G" A2 G2 "Em" F2 E2 |
"Am" CEAc BcAc |"Dm" DFAc BcAc |"G" DFGB ABGB |"C" CEGB ABGB |
"F" CEFA GAFA |"Bmb5" DEFA GAFA |"Em" DEGB AGcB |"Am" A8 |]`,
						composers: ['Irad Doron'],
					},
					{
						id: 58,
						mainKey: 'C',
						meter: '4/4',
						noteLength: '1/8',
						body: `"C" CDEF GABc |"F" FAcB AGFE |"G" DEFG ABcA |"Em" BAGF GFED |
"Am" ECDE FGAG |"Dm" FDEF GAcB |"G" AGBA cBAB |"C" cBcB cGEG |
CDEF GABc |"F" FAcB AGFE |"G" DEFG ABcA |"Em" BAGF GFED |
"Am" ECDE FGAG |"Dm" FDEF GAcB |"G" AGBA cBAB |"C" cBAG FEDC |
"F" FCFG AGFC |"C" ECEF GFEC |"F" FCFG AGFC |"G" GDGA BAGD |
"Am" AEAB cBAE |"Em" GEGA BAGE |"Am" AEAB cBAE |"Dm" FGFE "G" DFED |
"C" CDEF GABc |"F" FAcB AGFE |"G" DEFG ABcA |"Em" BAGF GFED |
"Am" ECDE FGAG |"Dm" FDEF GAcB |"F" AFGA "G" BABG |"C" cBcB c4 |]`,
						composers: ['Irad Doron'],
					},
					{
						id: 59,
						mainKey: 'C',
						meter: '4/4',
						noteLength: '1/8',
						body: `"C" C B2 c- cBAG |"F" A B2 A- A2 GF |"C" E G2 G- GFEF |"G" E D2 D- D4 |
"C" C B2 c- cBAG |"F" A B2 A- AFGF |"C" EGFE "G" DEFG |"C" F2 EE- E4 |"G" D8 |
"Am" C B2 c- cBAG |"Em" A B2 B- B4 |"F" A B2 A- AFAB |"G" c B2 B- B4 |
"Am" C B2 c- cBAG |"Em" A B2 B- B2 DE |"Dm" FGAc "G" BGAF |"Em" E4 D4 |
"Am" C B2 c- cBAG |"Em" ABGE BGEG |"F" ABcB cFAB |"G" cBAB- BGFD |
"Am" C B2 c- cBAG |"Em" A B2 B- B2 DE |"Dm" FGAc AGFE |"G" D8 |
"C" C B2 c- cGFE |"F" F G2 F- FDEF |"Dm" G A2 G- "G" G2 F2 |"C" E8|]`,
						composers: ['Irad Doron'],
					},
					{
						id: 60,
						mainKey: 'C',
						meter: '4/4',
						noteLength: '1/8',
						body: `"F" C F2 G A G2 A |"G" B A2 c "C" E4 |"Dm" c F2 E F c2 B |"G" B8 |
"F" C F2 G A G2 A |"G" B A2 c "C" E2 DE |"Dm" FAGF "C" EDEF |"G" ED D6 |
"Am" c E2 D E c2 E |"Dm" FGAB "Am" ED E2 |"F" c E2 D E c2 B |"G" B8 |
"F" C F2 G A G2 A |"G" B A2 B "Em" B A2 B | "Am" B4 c4 | z4 G4 |"Dm" FAGF "C" EGFE |
"G" DCDG "Em" FEDE |"F" C F2 G "Dm" A G2 A |"G" B A2 c "C" E4 |"Dm" c F2 E "F" F c2 B |"G" BAAG "Em" GFFB |
"Am" cEDE cEDE |"Dm" BFEF BFEF |"F" AGFG AGFG |"G" BGFG EcDB |
"Am" cEDE cEDE |"Dm" BFEF BFEF |"F" AGFG AGFG |"G" B2 A2 G2 B2- |"C" BcBA GFED | C8 |]`,
						composers: ['Irad Doron'],
					},
					{
						id: 61,
						mainKey: 'C',
						meter: '4/4',
						noteLength: '1/8',
						body: `"C" GEDE CEDE |"F" G2 A6 |"Dm" AFEF DFEF |"G" A2 B6 |
"Am" cAGA EAGA |"Em" BGFG EGFG |"F" AFEF CFEF |"G" BGFG DGAB |
"C" cGFG EGFG |"F" cAGA FAGA |"G" BGFG DGFG |"Em" BGFG EGFG |
"Am" cAGA EAGA |"Dm" FAGA DFEF |"C" EDEF EDCE |"G" DEFE DEDC |
"C" GEDE CEDE |"F" GAAG AGFE |"Dm" AFEF DFEF |"G" AABA BAGF |
"Em" BGFG EGFG |"Am" ABcB cBAG |"F" AGFE DCDE |"G" FGFE DEDC |
"C" GEDE CEDE |"F" GAAG AGFE |"Dm" AFEF DFEF |"G" ABBA BAGF |
"Em" GEDE GEDE |"F" AFEF AFEF |"G" BFEF AFEF | GFEF BFEF |
"Am" B2 c6 |"G" c2 B6 |"F" z AGA FAGA |"G" cBBA BAGF |"Em" GEDE GEGB |
"Am" BAAG AGEG |$"F" AGEG AGEG |"Dm" AGFG AFEF |"G" BGFG DGAB |"C" cGEG c4- | c8 |]`,
						composers: ['Irad Doron'],
					},
					{
						id: 62,
						mainKey: 'C',
						meter: '4/4',
						noteLength: '1/4',
						body: `"Dm" F A2 F |"Am" E C3 |"F" G A F C |"G" E2 D2 |
"Dm" F A2 F |"Am" E c C c |"F" G A F C |"G" D2 c B- | B4 |
"Am" c C c C |"F" B C A C |"C" G C F C |"G" E D B c- |
"Am" c C c C |"F" B C c C |"C" c C B A |"G" B D E B |
"Am" c/ C c C B/- |"F" B/ C A C G/- |"C" G/ C F E D/- |"G" D2 B3/ c/- |"Am" c/ C c C B/- |
"F" B/ C A C A/- |"C" A/ C G C B/- |"Em" B4- | B2 c/ B A/- |"Am" A4- | A4 |
"Dm" F A2 F |"Am" E C3 |"F" G A F C |"G" C2 D2 |
"Dm" F A2 F |"Am" E c C c |"F" G A F c |"G" B2 c B |"C" B2 c2 |] `,
						composers: ['Irad Doron'],
					},
					{
						id: 63,
						mainKey: 'C',
						meter: '4/4',
						noteLength: '1/8',
						body: `"C" z CEC GCcG |"F" Accc- c2 AF |"C" Gccc- c2 AG |"G" GFFE D G3 |
"C" z CEC GCcG |"F" Accc- c2 AF |"C" Gccc- cGFE |"G" D4- DEDE |
"C" GCEC GCcG |"F" Accc BcAF |"G" Gccc BccB |"C" c8 | z4"G" z4 | 
"Am" cCEC ACcA |"Em" ABBB- B4 |"F" z CFC ACcF |"G" AGGG- GFED |
"C" EGGG GFEF |"G" DGGG GFED |"Am" CAAA cAcA |"Dm" FGFE"G" D4 |
"C" z CEC GCcG |"F" Accc- c2 AF |"C" Gccc- cGFE |"G" D8 |
"Am" z CEC ACcA |"Em" ABBB- BAGF- |"F" FCFC ACcF |"G" AGGG- G4 |
"C" EGGG GFEF |"G" DGGG GFED |"Am" CAAA cAcA |"Dm" FGFE"G" D4 |
"Dm" FAGF EDCD |"C" EGFE DCDE |"G" FEED- D3 D |"F" FEDC"G" D4 |"C" E8 |]`,
						composers: ['Irad Doron'],
					},

					{
						id: 65,
						mainKey: 'C',
						meter: '4/4',
						noteLength: '1/16',
						body: `"C" z2 ed cAGA "Am" cdcA c2AG |"F" AcAG AGED "G" EGED EDEC |
"C" z2 ed cGAc- "Am" cdcA c2AG |"F" AcAG AGED "G" EGED EFGC |
"C" z2 EE EECE "Am" z EEE GAGE |"F" z EEE F2GF "G" z EEE F2ED |
"C" CEEE EECE "Am" GEEE GAGA |"F" ccAc AccA "G" cded- dedc |
"C" z2 ed cAGA "Am" cdcA c2AG |"F" AcAG AGED "G" EGED EDEC |
"C" z2 ed cGAc- "Am" cdeg aAGA |"F" cdeg- gged "G" gedc dcAc- |"C" c8 z8 |]`,
						composers: ['Irad Doron'],
					},
					{
						id: 66,
						mainKey: 'C',
						meter: '4/4',
						noteLength: '1/16',
						body: `"C" z2 e2 d2cA- "Am" A4 cdc2- |"F" c4 cdcA- "G" A2G2 G4 |
"C" z2 e2 d2cA- "Am" A4 cdc2- |"F" c4 cdeA- "G" Acde Acde |
"Am" g2ge gage "F" efed c2de |"Dm" fgfe fedc "G" d2ed z cde |
"Am" g2ge gage "F" gac'c'- c'ac'd' |"Dm" d'2d'c' d'e'd'a "G" c'd'e'd'- d'2c'c' |
"C" z2 e2 d2cA- "Am" A4 cdc2- |"F" c4 cdcA- "G" A2G2 G4 |
"C" z2 e2 d2cA- "Am" A4 cdee- |"F" ecde edc2- "G" ccde AdBc- |"C" c8 z8 |]`,
						composers: ['Irad Doron'],
					},
					{
						id: 67,
						mainKey: 'C',
						meter: '4/4',
						noteLength: '1/4',
						body: `"F" A2 C A |"G" A2 G F |"Am" F2 E2 |"Em" E4 |
"F" A2 C A |"G" A2 G2 |"C" G4 |"E" ^G2 B2 |"Am" c2 E c |
"Dm" c2 B A |"E" B2 B A |"F" c2"E" B A |
"Am" E2 z2 |"F" A2 C A |"G" A2 B2 |"C" c4 |]`,
						composers: ['Irad Doron'],
					},
					{
						id: 68,
						mainKey: 'C',
						meter: '4/4',
						noteLength: '1/4',
						body: `"C" E G c B |"F" A2 B c |"G" d B G A |"Em" c B G2 |
"Dm" F A d c |"G" B d g f |"C" e2"Em" d2 |"Am" c4 |
"Dm" F A d c |"G" B d g f |"C" e g c' b |"F" a2 b2 |
"Am" c'2 c' b |"Em" g2 z2 |"Dm" F A d c |"G" B2 c2 |"C" c4 |]`,
						composers: ['Irad Doron'],
					},
					{
						id: 69,
						mainKey: 'C',
						meter: '4/4',
						noteLength: '1/4',
						body: `"Dm" F A G A |"Am" E A G A |"G" D B A B |"C" E G D G |
"F" C A G A |"G" D B A B |"C" E c B c | "G" G B A B |
"F" A c B c |"G" B c G c |"Am" A c B c |"Em" B c G c |
"F" A c B c |"G" B d G d |"F" A e d e |"C" d2 c2 |] `,
						composers: ['Irad Doron'],
					},
					{
						id: 70,
						mainKey: 'C',
						meter: '4/4',
						noteLength: '1/4',
						body: `"C" E2 c B |"Am" c2 c B |"F" c2 c B |"G" d2 G A |
"Dm" F d c d |"G" B G F G |"Em" E c B c |"Am" B2 A2 |
"C" E2 c B |"Am" c2 c B |"F" c2 d e |"G" d B A B |
"Em" G f e f |"Am" c A G A |"Dm" F d c d |"G" B3 c |"C" c4 |]`,
						composers: ['Irad Doron'],
					},
					{
						id: 71,
						mainKey: 'C',
						meter: '4/4',
						noteLength: '1/8',
						body: `"C" e4 edcd- |"G/B" d G2 G- G c2 c- |"Am" c8 |"F" z8 |
"C" e4 edcd- |"G/B" d G2 G- G d2 c- |"Am" c8 |"F" z4 z2 cd |
"C" ecde gedc |"G/B" dBcd gdcB |"Am" c a2 e- e c2 A- |"F" AccA ccAc |
"C" e4 edcd- |"G/B" d G2 G- G F2 E- |"Am" E8 | z4 z2 g2 |
"F" a4 a2 c'a- |"C" ag- g2 z2 de |"Dm" fedA fedA |"Am" decA- AAce |
"F" acfa acc'a |"C" gcef gcde |"Dm" fAde fedA |"Am" decA- AGAc |
"F" dedc AGAc |"G" dedc AGAc |"Am" d2 ec- cA-Ac |"G" d2 ed- dcAG |
"F" Acde dcAG |"G" Acde dcAG |"Am" A2 cA- A4 | z8 |]`,
						composers: ['Irad Doron'],
					},
				],
			},
		],
	},
	{
		seriesId: 2,
		seriesTitle: 'Piano Pieces for Intermediate Players',
		seriesDescription: 'Piano Pieces for Intermediate Players',
		collections: [
			{
				collectionId: 1,
				collectionsTitle: 'TODO: organize these',
				pieces: [
					{
						id: 64,
						mainKey: 'Eb',
						meter: '4/4',
						noteLength: '1/16',
						body: `"Cm" z Gcd egfe "Ab" efde c4 |"Eb" z GBe gfed "Bb" decd BcAB |
"Cm" G2cd egfe "Ab" efde cdBc |"Fm" ABGA FGEF "G" DFED C=B,ED |
"Ab" DCC2 C2DE "Cm" DCC2 C2FG |"Fm" AGFE DCDE "G" FEDC =B,CDE |
"Ab" DCC2 C2DE "Eb" FGFE E2FG |"Fm" AGFE FGAB "G" _cBAG BAGF |
"Cm" G2cd egfe "Ab" efde c2BA |"Eb" G2Be gfed "Bb" decd BcAB |
"Cm" G2cd egfe "Ab" efde cdBc |"Fm" ABGA FGEF "G" DEDC =B,CED | 
"Ab" DCC2 C2DE "Cm" DCC2 C2FG |"Fm" AGFE DCDE "G" FEDC =B,CDE |
"Ab" DCC2 C2EF "Eb" GFE2 E2FG |"Fm" AGFE FGAB "G" _c2B2A2G2 |
"Cm" G4 e2d2 "Ab" d2c2 c4 |"Eb" B4 g2f2 "Bb" f2e2d2e2 |"Cm" G4 e2d2 "Ab" c2B2A2G2 |"Fm" A4 F2B2 "G" A2G2F2E2 |
"Ab" E4 E4 "Cm" E4 E4 |"Fm" F4 C2D2 "G" E4 D4 |"Ab" C4 C2E2 "Bb" D4 "Cm" E4 |"Fm" F4 E4 "G" D8 |"Cm" C16 |] `,
						composers: ['Irad Doron'],
					},

					{
						id: 72,
						mainKey: 'Gm',
						meter: '4/4',
						noteLength: '1/8',
						body: `"Gm" z/ G/A/B/ cG "D7" ^FGAE |"Gm" D2 D2 z4 |"Eb" z/ G/A/B/ cG "D7" ^FGAC |"Gm" D4 z4 |
"Bb" z/ B/c/d/ eB "F" A4 |"Dm" z/ A/B/c/ dA"Gm" A2 B2 |"Bb" z/ B/c/d/ eB "F" Agfe |"Dm" d/A/B/c/ "D7" BA "Gm" A2 G2 ||
"Gm" gdBd "F/A" fcAc |"Bb" dBFB "Cm" cG E2 |"Eb" BGEG "D" A^F Dc/d/ |"Cm" ecGc "D" de d2 |
"Gm" gdBd "F/A" fcAc |"G7/B" fd=Bf "Cm" f2 e2 |"Abmaj7" d2 c2 d2 e2 |"D7" f2 e2 d2 c2 ||
"Gm" B/G/A/B/ cG "D7" ^FGAe |"Gm" d2 d2 z4 |"Eb" z/ G/A/B/ cG "D7" ^FGAc |"Gm" d2 B2 G2 D2 |
"Bb" z/ B/c/d/ eB "F" A4 |"Dm" z/ A/B/c/ dA "Gm" A2 B2 |"Bb" z/ B/c/d/ eB "F" Agfe |"Dm" d2 "D7" A2 "Gm" A2 G2 |
"Bb" z/ B/c/d/ eB "F" A/B/A/B/ A2 |"Dm" z/ A/B/c/ dA "Gm" A/B/A/B/ G2 |"Bb" z/ B/c/d/ eB "F" Ag/f/ f/e/e/d/ |"D7" d3 A "Gm" G4 |]`,
						composers: ['Irad Doron'],
					},
					{
						id: 73,
						mainKey: 'Gb',
						meter: '4/4',
						noteLength: '1/8',
						body: `z4 dfga |"Gb" b3 d d2 db |"Db/F" ba a2- a2 da |"Ebm" ag g2- g2 Bg |"Bbm/Db" fedB- Bdef |
"Gb" b3 d d2 db |"Db/F" ba a2- a2 da |"Ebm" ag g2- g2 Bg |"Bbm/Db" f2 e2 d2 B2 ||
"Cbmaj7" Bded e2 Bd |"Db" ed e2 Bdef |"Ebm" ed e2- e4 |"Ebm/Db" z8 |
"Cbmaj7" Bded e2 Bd |"Db" ed e2 Bdef |"Ebm" e8 | z4 (3dfg (3fga ||
"Gb" b3 d d2 db |"Db/F" ba a2- a2 da |"Ebm" ag g2- g2 Bg |"Bbm/Db" fedB- Bdef |
"Gb" b3 =c' d'2 c'b |"Db/F" ad' a2- afga |"Ebm" ag g2- ggfe |"Bbm/Db" fBed"Cm7b5" eGd=c |
"Gbmaj7" BFB=c BFBd |"Bbm" =cBcB F>G F>F |"Gbmaj7" BFB=c BFBd |"Bbm" =cBcB-"Bbm/Ab" B2 F2 |
"Gbmaj7" BFB=c BFBd |"Bbm" =cBcB F>G F>F |"Gbmaj7" BFB=c B4 |"Bbm" B=c B2- Bd fg/a/ |
"Gb" b3 d d2 db |"Db/F" ba a2- a2 da |"Ebm" f2 g2- g2 Bg |"Bbm/Db" efdB- Bd fg/a/ |
"Gb" b3 d d2 =cd |"Db/F" cd=cA- A4 |"Abm" BcBA-"Db/Ab" A4 |"Abm" BcBA-"Db/F" A4 |"Gbmaj7" ABFE- E G3 |]`,
						composers: ['Irad Doron'],
					},
					{
						id: 74,
						mainKey: 'Eb',
						meter: '6/8',
						noteLength: '1/8',
						body: `[M:6/8]"Cm" gfg a2 g/f/ |"Gm/Bb" fgf/e/ d2 e/d/ |"Ab" cde fed |"G" c>=Bc/A/ G3 |
"Cm" gfg a2 g/f/ |"Gm/Bb" fBc dfd |"Abm" e_c=d efd |"Bb" e>=de/_c/ B2- B/B/ |
"Ebm" bab _c'2 b/a/ |"Bb7" ab_c' b3 |"Abm" aef _gfe |"Bb" e>=de/_c/ B2- B/B/ |
"Abm" bab"Emaj7" _c'2 b/a/ |"Dm7b5" ab_c'"G7#9" b2 a |"Abmaj7" gfg agf |"Cm" gfg bgf |
"Fm7" gfg agf |"G7" a3 g3 |[M:3/8] f3 |[M:6/8]"Cm" ede f2 e/d/ |"Gm/Bb" ded/c/ B2 c/B/ |
"Fm" ABc dcB |"Eb" B>AB/A/"G7" A G2 |"Cm" gfg a2 g/f/ |"Gm/Bb" fgf/e/ d2 e/d/ |
"Ab" c3- c2 e/d/ |"Cm/G" d c2- c2 e/d/ |"Fm" c3-"Fm6" c2 e/d/ |"Cm" d c2- c3 |]`,
						composers: ['Irad Doron'],
					},
					{
						id: 75,
						mainKey: 'Dm',
						meter: '4/4',
						noteLength: '1/16',
						body: `D2 F2G2 |"Dm" A4 A2G2 A2d2A2G2 |"F" GFF2- F4- F2FG A2GF |"C" GFE2- E4- ECDE FGFE |
"Dm" FGFE D4 z2 D2F2G2 |"Bbmaj7" A4 A2GA- "C" A2<d2 A2GF |"Dm" GFF2- F4- F2FG A2GF |"Am7" GFE2 C4- CCDE FGFE |
"Dm" FED2- D4 z2 d2f2g2 |"Dm" a4 a2g2 a2d'2a2g2 |"F" gff2- f4- f2fg a2gf |"C" gfe2 gfe2- ecde fgfe |
"Dm" fed2 fed2 z2 dd ffgg |"Bbmaj7" a4 a2ga- "C" a2<d'2 a2gf |"Dm" gff2- f4- f2fg a2gf |"Am7" gfe2 gfe2- ecde fgfe |
"Dm" fed2- d4 z2 D2F2G2 |"Dm" A4 A2GA- A2<d2 A2GF |"F" GFF2- F4- F2FG A2GF |"C" GFE2- E4- ECDE FGFE |
"Dm" FGFE D4 z2 D2F2G2 ||[K:Eb] "Dm7b5" A4 A2GA- "G7" A2<=B2 c2de |"Cm" dee2- e4- "Cm/Bb" e2ed c2de |
"Fm/Ab" def2 def2- "Fm7" fagf "Bb" edef |"Eb" efg2- g4 "Eb/D" z2 c2e2f2 |"Cm" g4 g2f2 g2c'2g2f2 |
"Eb" fee2- e4- e2ef g2fe |"Bb" fed2 fed2- dBcd efed |"Cm" edc2 edc2 "Cm/Bb" z2 cc eeff |
"Abmaj7" g4 g2fg- "Bb" g2<c'2 g2fe |"Cm" fee2- e4- "Dm7b5" e2de "G7" f2ed |
"Fm7" edc2 cBA2 "Dm7b5" AGF2 FED2 |"Bbdim" _D6 =D2 "A7" F4 =E4 ||[K:F] "Bbmaj7" A4 A2GA- "C" A2<d2 A2GF |
"Dm" GFF2- F4- F2FG A2GF |"Am7" GFE2 GFE2- E2C2F2E2 |"Dm" FED2- D4 z8 |]`,
						composers: ['Irad Doron'],
					},
					{
						id: 76,
						mainKey: 'Cm',
						meter: '4/4',
						noteLength: '1/16',
						body: `"Cm" G4 e2G2 "Gm/Bb" G4 d2G2 |"Abmaj7" G2A2 A4- A4 ABAB |"Cm" G4 e2G2 "Gm/Bb" G4 d2G2 |
"Abmaj7" G4 A4- A4 z2 de |"Fm/Ab" f4 e2ef "Eb" g2e2 B2>e2 |"Bbsus4" e2fd- "Bb" d4 z4 edcB |
"Abmaj7" c8 z4 edcB |"Cm" c2ec- c4 z8 |"Cm" G4 e2G2 "Gm/Bb" G4 d2G2 |
"Abmaj7" G2A2 A4- A4 ABAB |"Cm" G4 e2G2 "Gm/Bb" G4 d2G2 |"Abmaj7" G2FE- E4- EFGA Bcde |
"Fm/Ab" fedc "Bb" dBef "Cm7" gbba "Dm7b5" aggf |"G7" feed- d4 z4 edcB |
"Abmaj7" c2ed cBc2- "Bb" c2ed cBce- |"Cm" e4 c4 z8 |"Ebm" B4 _g2B2 "Bbm/Db" B4 f2B2 |
"Cbmaj7" B2_c2 c4- c4 z2 _de |"Bbdim" e2_f2 f4- "Gb7" fe_d_c edcB |"Abm" B2_c2 c4 z8 |
"Dbm/Fb" _d_cBA "Gb" B_Gcd "Cbmaj7" e_g_fe "Dbm" d4- |"Bbdim" d4 B4 "Emaj7" _c8 |
"Dbm7" z2 _cB A_GA2- "Emaj7" A2_fe _dcdf |"Gb7" e4 _d4 b4 a4 |
"Abm" _c'4 e'2c'2 "Ebm/Gb" b4 e'2b2 |"Abm" _c'4 e'2c'2 "Ebm" b4 e'2b2 |"Emaj7" a4 e'4 "Gb7" a4 e'4 |"Abm" a8 z8 |
"Abm" _c'4 e'2c'2 "Ebm/Gb" b4 e'2b2 |"Abm" _c'4 e'2c'2 "Ebm" b4 e'2b2 |"Emaj7" a4 e'4 "Gb7" a4 e'4 |"Abm" a8 z8 |]`,
						composers: ['Irad Doron'],
					},
					{
						id: 77,
						mainKey: 'Am',
						meter: '4/4',
						noteLength: '1/16',
						body: `z8 z4 z Ace |:"Am" a2a2 ac'ae "G" bgbg d2ga |"Em" bgbg e2ab "Am" c'bc'b aAce |
"Am" a2a2 ac'ae "G" bgbg d4 |"F" afaf cBcB "Am" BAA2 z Ace :|
"D/F#" a2a2 a^fga "G" abb2 bdga |"E/G#" b2b2 b^gab "A" b^c'c'2 c'eab |
"F#7" ^c'2c'2 c'^f^ab "Bm" c'd'd'2 d'fbc' |[M:2/4]"Em7" d'4- d'e'd'^c' |[M:4/4]"F#7" b^c'd'c'- c'8 z Bd^f |
"Bm" b2b2 bd'b^f "A" ^c'ac'a e2ab |"F#m" ^c'ac'a ^f2bc' "Bm" d'c'd'c' bBdf |
"Bm" b2b2 bd'b^f "A" ^c'ac'a e4 |"G" bgbg d^cdc "Bm" cBB2 z Bd^f |
"Bm" b^fbf bd'bf "A" ^c'ac'a eac'a |"F#m" ^c'ac'a ^fac'a "Bm" bd'fb dfBd |
"Bm" ^fbdf bd'fb "A" ^c'e'c'a ec'ae |"G" bd'gb "F#7" ^f^a^cf "Bm" dbfb B4 |]`,
						composers: ['Irad Doron'],
					},
					{
						id: 78,
						mainKey: 'Dm',
						meter: '4/4',
						noteLength: '1/16',
						body: `z8 z4 z Ade |"Dm" f2f2 f2fg- "Gm/Bb" gfdB- BBde |"A7" fe^cA- AAce "Dm" fgfe dAde |
"Bb" f2f2 f2fg- "C" gfec- ccef |"Am7" gfec- cceg "Dm" fed2 z Ade ||
"Dm" fAfA fAfg- "Gm/Bb" gfdB- BBde |"A7" fe^cA- AAce "Dm" fgfe dAde |
"Bb" fBfB fBfg- "C" gfec- ccef/a/ |"Am7" gfec- cceg "Dm" fed2 z cfg |]
"F" a2a2 a2ab- "Gm" bagd- ddga |[M:2/4]"A7" bage- eegb |[M:4/4]"Bbmaj7" aggf- f4- f4 gffe |
"Gm" feed- d4- "Gm6" d4 gffe |"Dm" fed2- d4 z4 z Ade |]
"Dm" f2f2 f2fg- "Gm/Bb" gfdB- BBde |"A7" fe^cA- AAce "Dm" fgfe dAde |
"Bb" f2f2 f2fg- "C" gfec- ccef |"Am7" gfec- cceg "Dm" fed2 z Ade ||
"Dm" fAfA fAfg- "Gm/Bb" gfdB- BBde |"A7" fe^cA- AAce "Dm" fgef dAde |
"Bb" fBfB fBfg- "C" gaba- aefg |"Am7" gaba- "A7" abc'b bac'b bac'b |
"Gm" d'c'c'b c'bc'a "Gm6" c'bba babg |"Dm/A" a8 "A7" a8 |"Dm" d'8- d'8 |] `,
						composers: ['Irad Doron'],
					},
					{
						id: 79,
						mainKey: 'Dm',
						meter: '4/4',
						noteLength: '1/8',
						body: `"Dm" z AdA "Gm" BdGB |"C" EGCE "F" FACE |"Dm" DAdA "Gm" BdGB |"A" ^ceAc "Dm" dAGA |
"Dm" FAdA "Gm" BdGB |"C" EGCE "F" FACE |"Dm" DAdA "Gm" BdGB |"A" ^ceAc "Dm" d2 d2 |
"Eb" _egBd "F7" ceAc |"Gm" BdGB "Dm" AdFA |"Eb" G_eBd "A" ^c=eAc |"Bb" dfBd "A" ^ceAc |
"Dm" dAdA "Gm" BdGB |"C" EGCE "F" FACE |"Dm" DAdA "Gm" BdGB |"A" ^ceAc "Bb" dfBd |
"A" eg^ce "Gm7" dfBd |"A7" ^ceAc "Dm" dAdA | dAdA "Gm" BdGB |"C" EGCE "F" FACE |
"Dm" DAdA "Eb" BG_ed |"A" ^ceAc "Dm" dfAd |"Eb" _egBd "F7" ceAc |"Gm" BdGB "Fm" _AcFA |
"C7" GBEG "Db" F_A_DF |"C7" EGCE "Fm" FCFC |"Bbm" _DFB,D "Bbdim" G,E=D^C |"A7" GFEB AGed |
"Dm" ^cdAd "Gm" BdGf |"C" egcb "F" bafg |"Bbmaj7" afaf "Gm" bg d2 |"A7" bg ^c2 "Dm" c2 d2 |]`,
						composers: ['Irad Doron'],
					},
					{
						id: 80,
						mainKey: 'Gm',
						meter: '4/4',
						noteLength: '1/8',
						body: `"Gm" z DdB"Ebmaj7" A G3 |"F" B A3 z2 z E |"Gm" DGdB"Ebmaj7" AGFE |"F" D C3 E D2 C |
"Gm" B,2 dB "Ebmaj7" AGdc |"F" BAed "D7" cfed |"Gm" cBgb "Ebmaj7" agfe |"F" d c3 "F#dim" e d2 c |
"Gm7" d2 de "Ebmaj7" fBcd |"Cm7" e3 G "D7" ^FdAc |"Ebmaj7" BdGB "D7" ^FGcB |"Gm" e d3 c B3 |
"Bbmaj7" d2 de "F" fBcd |"Eb" e3 G "D7" ^FdAc |"Cm7" Be^FG "D7" BAcB |"Gm" A G3 z4 |
"Gm" z DdB "Ebmaj7" (3AGB (3AcB |"F" (3BAc (3Bdc "F#dim" (3cBd (3ced |
"Gm" (3dBd (3gab "Ebmaj7" (3agf (3efe |"F" (3dce (3dcB "F#dim" (3cBd (3cBA |
"Gm" (3BGB (3def "Ebmaj7" (3fBc (3Bcd |"Cm7" e3 G "D7" (3^FAd (3ABc |
"Ebmaj7" (3Bcd (3GAB "D7" ^FGcB |"Gm" e d3 c B3 |"Bbmaj7" d2 (3dcd "F" (3fBc (3Bcd |
"Eb" e3 G "D7" ^FdAc |"Cm7" Be^FG "D7" BAcB |"Gm" A G3 z4 |
"Gm" z DdB "Ebmaj7" A G3 |"F" B A3 z2 z z |"Ebmaj7" z DdB "Cm7" A G3 |"C#dim" B A3- "Dsus4"A2- "D7" A2 |"Gmaj7" =B4 z4 |]`,
						composers: ['Irad Doron'],
					},
					{
						id: 81,
						mainKey: 'Cm',
						meter: '4/4',
						noteLength: '1/8',
						body: `"Cm7" EBed- "F7" dBcd |"Bbmaj7" cBdF- "G7" F3 D |"Cm7" EBed- "F7" dBcd |"Bbmaj7" fd- d2 "G7" z2 z d |
"Cm7" eBEd- "F7" dBcd |"Bbmaj7" cBFE "G7" AGDF |"Cm7" EGBd- "F7" dGBB- |"Bb6" B4 z4 |]
"Gm7" Bfb=a- "A7" a=efg |"Dm" g/f/=a/d/- d/g/f/a/ "Am/C" =ee/d/ g/e/d/c/ |
"Bbmaj7" d/c/d/F/ d/G/d/=A/ "A7" B/A/B/A/- AB |"D7" c2 B2 =A4 |
"Gm7" Bfb=a- "A7" a=efg |"Bbmaj7" =a/g/c'/f/- fg/a/ "F/A" g/f/c'- c'2 |"Gm" g/f/b/d/- df/g/ "Dm" f/=e/=a- a2 |
"Eb" e/d/g/c/- cB "Bb" d/c/f- fB |"F" =A2 G2 F4 |]"Cm7" EBed- "F7" dBcd |
"Bbmaj7" cBdF- "G7" F3 D |"Cm7" EBed- "F7" dBcd |"Bbmaj7" fd- d2 "G7" z2 z d |
"Cm7" eBEd- "F7" dBcd |"Bbmaj7" cBFE "G7" AGDF |"Cm7" EGBd- "F7" dGBB- |"Bb6" B4 z4 |]`,
						composers: ['Irad Doron'],
					},
					{
						id: 82,
						mainKey: 'Dm',
						meter: '4/4',
						noteLength: '1/16',
						body: `"Dm" z2 d2A2B2- "Gm" BdcB cBAG |"F" z cAG AGF2 "C" GcGF GFEF- |
"Dm" F2d2A2B2- "Gm" BdcB cBAG |"F" A2G2 F2GG- "C" G8 |
"Dm" z2 d2A2B2- "Gm" BGAB ABcd |"F" z Acd cdf2 "C" z cdf dffd |
"Dm" f2f2^c2d2- "Gm" dgfe fedc |"A7" z ^cBA BAG2 z bag fede |
"Dm" fagf "Am/C" egfe "Bbmaj7" d8 |"Dm" fagf "Am/C" edeg "Bbmaj7" fed2- d4 |
"Dm" fagf "Am/C" egfe "Bbmaj7" dfed "F/A" cedc |"Gm" BdcB "F" AcBA "Em7b5" GBAG "Dm" FAGF |
"Bbmaj7" EDFE GFAG BAcB dced |"C7" fegf agba c'bd'c' bagf |
gfag fedc BAGF EDEF | GABc defe gfag fede |
"Dm" f2d2A2B2- "Gm" BdcB cBAG |"F" z cAG AGF2 "C" GcGF GFEF- |
"Dm" F2d2A2B2- "Gm" BdcB cBAG |"F" A2G2 F2GG- "C" G8 |
"Dm" z2 d2A2B2- "Gm" BGAB ABcd |"F" z Acd cdf2 "C" z cdf dffd |"F6" f2dc AGFD F8 |]`,
						composers: ['Irad Doron'],
					},
					{
						id: 83,
						mainKey: 'Dm',
						meter: '4/4',
						noteLength: '1/8',
						body: `"Dm" e2 FA- A2 ef |"Gm/Bb" e2 GB- B2 ef |"F/A" gfcA- Acfg |"Am" edcA- AAcd |
"Dm" e2 FA- A2 ef |"Gm/Bb" e^cdG Bdef |"F/A" gfcA gfcA |"Am" decA d e3 |
"Dm" e/f/e/d/ ed- d/A/d/e/ f/e/d/c/ |"Gm/Bb" d/e/d/c/ dc- c B2 A |"F/A" c/A/F Fc/A/ F>F c/B/A/B/ |
"Am" c/A/E E>c d e3 |"Dm" e/f/e/d/ ed- d/A/f/g/ a/g/f/e/ |"Gm/Bb" g/a/g/f/ gf- f e2 d |
"F/A" f/c/A Af/c/ A>A f/e/d/e/ |"Am" e/d/c/d/ e2 d e3 |"Dm" e2 FA- A2 ef |
"Gm" e2 DE- E2 FG |"Bbmaj7" ADcB- B A2 G |"Am7" GEBA- A G2 F |"Dm" E2 F,A,-"Dm/C" A,2 E2 |
"Bbmaj7" F, A,2 E-"Am" EGAc |"Bbmaj7" d>e- ef- f<g ab |"Am" b>a- ag- g(3d/e/a/- a2 |
"Dm"!8va(! e'2 fa- a2 e'f' |"Gm/Bb" e'2 gb- b2 e'f' |"F" g'f'c'a- ac' g'2 |"Am" d' e'3- e'4 |"Dm" d''8!8va)! |]`,
						composers: ['Irad Doron'],
					},
					{
						id: 84,
						mainKey: 'Dm',
						meter: '4/4',
						noteLength: '1/8',
						body: ` A |"Dm" ADFd "Bbmaj7" cBAG |"F" ACAc "A7" BA GF/G/ |"Dm" ADFd "Gm/Bb" d^cde |
"A" ^cBGA "A7" gfde |"Dm" f4- "Gm" f2 de |"A7" e^cBG =c B2 A |
"Dm" ADFd "Bbmaj7" cBAG |"F" ACAc "A7" BA GF/G/ |"Dm" ADFd "Gm/Bb" d^cde |
"A" (3^cBA (3=cBA- A2 z a/g/ |"Dm" fd de/f/ "Am/C" ea/e/ ca/g/ |
"Dm" fd de/f/ "Am/C" ea aa/g/ |"Dm" fd de/f/ "Am/C" ea/e/ cc'/b/ |
"Bbmaj7" a/b/b/a/ ag/a/ "A7" a/c'/c'/b/ aa/g/ |"Dm" fd de/f/ "Am/C" ea/e/ ca/g/ |
"Dm" fd de/f/ "Am/C" ea aa/g/ |"Dm" ff/e/ de/f/ "Am/C" ea/e/ cc'/b/ |
"Bbmaj7" a/b/b/a/ a/g/g/f/ "A7" f/e/e/^d/ e2- | e2 ^c2 B2 A2 |
"Dm" ADFd "Bbmaj7" cBAG |"F" ACAc "A7" BA GF/G/ |"Dm" ADFd "Gm/Bb" d^cde |
"A" ^cBGA "A7" gfcd |"D7" _edAB "D7/F#" cBGA |"Eb/G" BA^FG "D7" F_EDC |
"Gm" B,G, G,C/B,/ "Dm" A,D/A,/ F,G/F/ |"Cm" _EC CF/E/ "Gm" DG/D/ B,B/A/ |
"Em7b5" GE Ee/d/ "A7" ^cc/=B/ Ag/f/ |"Gdim" ee/d/ ^cb/a/ "A7" gg/f/ ec'/b/ |
"Bbmaj7" ac'/b/ ac'/b/ ac'/b/ a/c'/b/a/ |c'/b/a/c'/ b/a/c'/b/ a/b/c'/d'/ c'/b/a/g/ |
"Dm" adfd' "Bbmaj7" c'3 g |"Gm" fe^cd "Dm/A" "A7" d3 d |"Gm/D" d4- "D" d4 |]`,
						composers: ['Irad Doron'],
					},
					{
						id: 85,
						mainKey: 'Eb',
						meter: '4/4',
						noteLength: '1/8',
						body: `"Eb" egbc' bgeg |"Fm" ac'fa "Bb" dfBd |"Eb" egBe "Ab" ceAc |"Bb" dfBd "Eb" eBef |
"Eb" egbc' bgeg |"Fm" ac'fa "Bb" dfBd |"Eb" egBe "Ab" ceAc |"Bb" dfBd "Eb" efed |
"Cm" cega gece |"Dm7b5" fadf "G" =BdGB |"Cm" ceGc "Fm" AcFA |"G" =BdGB "Cm" cGcd |
"Cm" egc'=b c'bd'c' |"G" =bd'gb df=Bd |"Ab" ceag "Dm7b5" fad'c' |"G" =bd'gb "Cm" c'gec |
"Eb" egbc' bgeg |"Fm" ac'fa "Bb" dfBd |"Eb" egBe "Ab" ceAc |"Bb" dfBd "Eb" eBef |
"Ebm" e_gb_c' bgeg |"Fm7b5" a_c'fa "Bb" dfBd |"Ebm" e_gBe "Abm" _ceAc |"Bb" dfBd "Ebm" eBef |
"Ebm" _gbe'd' e'd'f'e' |"Bb" d'f'bd' fadf |"Cb" e_g_ce "Fm7b5" AcFA |"Bb" DFB,D "Ebm" EB,EF |
"Eb" EGBc BGEG |"Fm" AcFA "Bb" DFB,D |"Eb" EGB,E "Ab" CEA,C |"Bb" DFB,D FBDF |
BdFB dfBd |"Bdim" fadf a_c'fa |"Bb" dfBd FBdf |"Eb" egBe GBEG | B,EG,B, E,4 |]`,
						composers: ['Irad Doron'],
					},
					{
						id: 86,
						mainKey: 'Cm',
						meter: '4/4',
						noteLength: '1/16',
						body: `e2g'2d'2 |:"Cm" f'2e'2g2e'2 "Ab" d'2c'2f2b2 |"Eb" a2g2B2e2 "Bb" d2e2g'2d'2 |
"Cm" f'2e'2g2e'2 "Ab" d'2c'2f2d2 |$"Eb" e2d2e2f2 "Bb" d2c2d2f2 |"Cm" f2e2G2e2 "Ab" d2c2F2B2 |
"Eb" G2A2B2E2 "Bb" D2E2F2f2 |$"Cm" f2e2 G2ba "Ab" g2f2e2c'2 |"Eb" b2a2g2a2 "Bb" d6 e2 |
"Cm7" e2!8va(!e'f' g'2g'2 "Abmaj7" g'2g'f' e'g'f'e'!8va)! |"Eb"!8va(! e'f'e'f' g'2bc'"Bb" d'e'd'e' f'e'd'e' |
"Cm7" e2e'f' g'2g'2 "Abmaj7" g'2g'f' e'g'f'e' |1"Eb" e'2b2g2e2 "Bb" d2e2g'2d'2!8va)! :|2
"Eb"!8va(! e'2b2g2e2 "Bb" d2e2d2e2!8va)! ||"Cm" E2ef g2g2 "Abmaj7" g2gf egfe |
"Eb" efef g2Bc "Bb" dede fede |"Cm" E2ef g2g2 "Abmaj7" g2gf egfe |
"Eb" e2B2G2E2 "Bb" DEEF FGFE |"Cm" EGcd efgf "Abmaj7" gfgf egfe |
"Eb" efef gBce "Bb" dede fede |"Cm" EGcd efgf "Abmaj7" gfba aggf |
"Eb" gfba aggf "Bb" feed dede |"Cm" E2ef g2g2 "Abmaj7" g2gf egfe |
"Eb" efef g2Bc "Bb" dede fede |"Cm" E2ef g2g2 "Abmaj7" g2gf egfe |
"Eb" e2B2G2E2 "Bb" (3D2G2F2 (3c2B2f2 | (3d2g2f2 (3c'2b2f'2 (3d'2g'2f'2 (3c''2b'2g'2 |
f'4 c'4 g'4 d'4 |"Cm" f'2e'2g2e'2 "Ab" d'2c'2f2b2 |"Eb" a2g2B2e2 "Bb" d8 |
"Cm" f2e2G2e2 "Ab" d2c2F2B2 |"Eb" G2E2G2A2 "Bb" D8 |"Eb" G16 |] `,
						composers: ['Irad Doron'],
					},

					{
						id: 100,
						mainKey: 'C',
						meter: '4/4',
						noteLength: '1/16',
						body: `"C" CDEF GABc "F" FAcB AGFE |"G" DEFG ABcd "Em" GBdc BAGF |
"Am" EFGA Bcde "Dm" Adfe dcBA |"G" GABc defg "Bmb5" Bdgf edcB |
"C" cdef gabc' "F" fac'b agfe |"G" defg abc'd' "Em" gbd'c' bagf |
"Am" efga bc'd'e' "Dm" ad'f'e' d'c'ba |"G" gabc' d'e'f'g' "Bmb5" bd'g'f' e'd'c'b |
"C" c'c''b'a' g'f'e'd' c'e'd'c' bagf | egfe dcBA GcBA GFED | C16 |]`,
						composers: ['Irad Doron'],
					},
					{
						id: 101,
						mainKey: 'C',
						meter: '4/4',
						noteLength: '1/16',
						body: `"C" EGcB cGEG "F" FAcB cAFA |"C" EGcB cGEG "G" DFGA BAGF |
"C" EGcB cGEG "F" FAcB cAFA |"C" EGcB cGEG "G" DFGA BAGF |
"C" EGAB cBAG "F" FGAB cBAG |"C" EGAB cBAG "G" DFGA BAGF |
"C" EGAB cBAG "F" FGAB cBAG |"C" EGAB cBAG "G" DFGA BGAB |
"C" cBAG EGAB "F" cBAG FGAB |"C" cBAG EFGA "G" BAGF DGAB |
"C" cBAG EGAB "F" cBAG FGAB |"C" cBAG EFGA "G" BAGF DAGF |
"C" EGcB cGEG "F" FAcB cAFA |"C" EGcB cGEG "G" DFGA BGAB |"C" c16 |]`,
						composers: ['Irad Doron'],
					},
					{
						id: 102,
						mainKey: 'C',
						meter: '4/4',
						noteLength: '1/16',
						body: `"C" z2 ce gage "Am" dcAc- c4 |"F" z Aef edcB "G" dedc B2AG |
"C" z2 eg aged "Am" eged c2AG- |"F" G2A2 B2dB- "G" B8 |
"Dm" z fed ABcd "Am" ecAg- gA2e- |"C" e4 fecd- "G" d8 | 
"Dm" z fed ABcd "Am" cAAg gAAe- |"C" e4 fefd- "G" d8 |
"C" z2 ce gage "Am" dcAc- c4 |"F" z Aef edcB "G" dedc B2AG |
"C" z2 eg aged "Am" eged c2AG- |"F" G2A2 B2dB- "G" B4 z2 z A |
"Dm" f2fe- ed2A "Am" e2dc- cA2A |"F" cAcd e2cA "G" cAcd- d2<e2 |
"Dm" f2ed- dA2A "Am" e2dc- cA2a- |"F" aA2a- aA2a- "G" aB2c- c2dc |
"C" z2 ce gage "Am" dcAc- c4 |"F" z Aef edcB "G" dedc B2AG |
"C" z2 eg aegd "Am" ecdB cABG- |"F" G2A2 B2dB- "G" B2c2B2c2- |"C" c8 z8 |] `,
						composers: ['Irad Doron'],
					},
					{
						id: 103,
						mainKey: 'C',
						meter: '4/4',
						noteLength: '1/16',
						body: `"C" z2 ed e2gB- "G" B4 z2 gc- |"Am" c4 z2 gf- "Dm" f2ed-"G" d4 |
"C" z2 ed e2gG- "Em" G4 z2 z G |"F" A2B2 c2de- "G" e2d2 c2dc- |
"C" c2dc- c2dc- "Am" c2dc- c2ec- |"F" c2Ac- c2dc- "G" c2Ac cAec- |
"C" c2dc- c2dc- "Am" c2dc- c2Ac- |"F" cAcd e2Ac "G" deg2 edcd |
"C" c2dc- cAcd "F" efe2 a2gf |"G" edcB AGAB "Am" cBAG AEGA |
"Dm" c2de- edcB- "G" B4 z2 de |"Dm" f2ed- dA2G- "G" G8 |
"C" z2 ed e2gB- "G" B4 z2 gc- |"Am" c4 z2 gf- "Dm" f2ed- "G" d4 |
"C" z2 ed e2gG- "Em" G4 z2 z G |"F" A2B2 c2de- "G" e2d2 c2dc- |"C" c8 z8 |] `,
						composers: ['Irad Doron'],
					},
					{
						id: 104,
						mainKey: 'C',
						meter: '4/4',
						noteLength: '1/8',
						body: `"C" z edc "Am" cB A2 |"F" z fed "G" dc B2 |
"Em" z gfe "Am" de/c/- cd/e/- |"F" e<c de/d/- "G" d4 |
"C" z edc "Am" cB A2 |"Dm" z f/g/ f/e/d/c/ "G" d/e/d/c/ B/c/B/A/ |
"Em" G2 g/a/g/e/ "Dm" f2 f/g/f/d/ |"C" ef ec/d/- "G" de f2- |[M:2/4] f2 ga/b/ |
[M:4/4] "Am" z c'ba "F" ag f2 |"Dm" z d'c'b "G" ba g2 |
"Em" z2 d'c' "Am" c'b c'b/c'/- |"F" c'/b/c' c'b/c'/ "G" b2 ab |
"Am" z c'ba "F" ag f2 |"Dm" z d'c'b "G" ba g/a/b/c'/ |
"Em" d'/c'/b/a/ e'/d'/c'/b/ "Am" e'/f'/e'/d'/ e'/d'/c'/b/ |
"Dm" d'/c'/b/a/ g/f/e/d/ "G" d/e/d/c/ d/c/B/A/ |
"C" z edc "Am" cB A2 |"F" z fed "G" dc B2 |
"Em" z gfe "Am" de/c/- cd/e/- |"F" e<c de/d/- "G" d2 cB/c/- |"C" c4 z4 |]`,
						composers: ['Irad Doron'],
					},
					{
						id: 105,
						mainKey: 'C',
						meter: '4/4',
						noteLength: '1/16',
						body: `|:"C" z2 ed egce- "G" e2d2 B4 |"Am" z2 cB ceAB- "Em" B2d2 G4 |
"F" ABcd A4 "Dm" ABcd e2d2- |"F" dABc dedc "G" B4 G4 :|
"Am" z2 cB ceAe "Dm" AfAe AdAc |"G" B2BA BdGd "C" GeGd GcGB | 
"F" AGAB ABcA "G" BABc BcdB |"Am" cBcd cdec "Dm" defe dcBA |
"G" Bcdc BABA "E" ^GEGB d2ec- |"Am" c2cB ceAe "Dm" AfAe AdAc |
"G" B2BA BdGd "C" GeGd GcBc |"F" ABcd edcd "G" Bcde fede |
"Am" cdef edcd "Dm" efga gfed |"G" efed edcB cded c2B2- |"Em" Bcde dcBA B8 |
"C" z2 ed egce- "G" e2d2 B4 |"Am" z2 cB ceAB- "Em" B2d2 G4 |
"F" ABcd A4 "Dm" ABcd e2d2- |"F" dABc dedc "G" B4 e2dc- |"C" c8 z8 |]`,
						composers: ['Irad Doron'],
					},
					{
						id: 106,
						mainKey: 'C',
						meter: '4/4',
						noteLength: '1/16',
						body: ` Ade |"Dm" fAfA fAfe-"G" e4 d2cd- |"Em" dGdG dGde- "Am" e2<c2- c4 |
"Dm" z AfA fAfe- "G" e2<d2- d4 |"Em" z GdG dGde- "Am" e2<c2- c2 z e |
"D" ^f2f2 f2ag- "Em" g2<e2 efga- |"Bm" a^fdB dfag- "Em" g4 z Bef |
"Am" g2e2 c2ef- "Dm" f2A2- A2Bc |"G" d2c2 B2cc- "C" c8 |"Am" z8 z4 z Ade |
"Dm" fAfA fAfe- "G" e4 d2cd- |"Em" dGdG dGde- "Am" e2<c2- c4 |
"Dm" z AfA fAfe- "G" edcB cedc |"Em" BGdG dGde- "Am" ecde ^fgag | 
"D" ^fAfA fAag- "Em" g2<e2 efga- |"Bm" a^fdB dfag "Em" bgeB- BBef |
"Am" g2e2 c2ef- "Dm" f2A2- A2Bc |"G" d2c2 B2cc- "C" c8 |] `,
						composers: ['Irad Doron'],
					},
					{
						id: 107,
						mainKey: 'C',
						meter: '4/4',
						noteLength: '1/16',
						body: `"C" cdef edcd "Am" efed c4 |"Dm" defg fede "G" fgfe d4 |
"Am" cdef edcd "F" efe2- eefe- |"C" eefe- eefe "G" eddc d4 |
"F" efga gfef "Em" gagf g2ga |"Am" bc'ba gabc' "F" bc'd'c' "G" b2bc'- |
"C" c'8 z4 z2 cB |"F" ABcd cBAB "Am" cdcB Agfe |"Dm" fgfe defg "G" fgfe d4 |
"C" efga gfef "Em" gagf gabc' |"F" abc'd' c'bab "G" d'c'ba b4 |
"Am" c'bag agfe "F" fedc agfe |"C" gfed edcB "G" gfed dcBA |
"F" ABcd cBAB "Am" cdcB Agfe |"Dm" fgfe defg "G" f4 e4 |
"C" cdef edcd "Am" efed c4 |"Dm" defg fede "G" fgfe d4 |
"Am" cdef edcd "F" efe2- eefe- |"C" eefe- eefe "G" eddc d4 |
"F" efga gfef "Em" gagf g2ga |"Am" bc'ba gabc' "F" bc'd'c' "G" b2bc'- |"C" c'8 z8 |] `,
						composers: ['Irad Doron'],
					},

					{
						id: 108,
						mainKey: 'Cm',
						meter: '4/4',
						noteLength: '1/8',
						body: `Cm" z ceg fedc |"Gm" dede d2 ed |"Cm" ecde gfef |"Gm" dcdf d2 ed |
"Ab" cded fefg |"Bb" d4 z2 ed |"Ab" cded"Bb" fede |"Cm" dcdc e4 |"Ab" z4"Bb" z4 |
"Cm" z ceg fedc |"Gm" dede d2 ed |"Cm" ecde gfef |"Gm" dcdf d2 ed |
"Ab" cded"Fm" fefg |"Bb" d4"Gm" z2 ed |"Ab" cded"Bb" fede |"Cm" dcdc c4 |"Ab" z4"Bb" z4 |
"Eb" gfed e2 de |"Gm" d4 z2 ed |"Ab" cded"Fm" fefg |"Bb" e f3"Gm" g a2 g |
"Fm" a2 g2"Bb" a2 g2 |"Gm" a2 g2"Cm" e2 fg |"Fm" agfe"Bb" decd |"Eb" egfg e4 |"Ab" z4"Bb" z4 |
"Eb" gfed"Cm" edef |"Gm" dede"Bb" dced |"Ab" cded"Fm" fefg |"Bb" edfe"Gm" edfg |
"Fm" agag"Bb" agag |"Gm" agba"Cm" efeg |"Fm" agfe"Bb" decd |"Eb" egfg e4 |"Ab" z4"Bb" z4 |
"Cm" z ceg fedc |"Gm" dede d2 ed |"Cm" ecde gfef |"Gm" dcdf d2 ed |
"Ab" cded"Fm" fefg |"Bb" e d3"Gm" a g2 f |"Fm" agag"Bb" agfe |"Ab" agba"Bb" gfed |"Eb" d4 e4 |]`,
						composers: ['Irad Doron'],
					},
					{
						id: 109,
						mainKey: 'G',
						meter: '4/4',
						noteLength: '1/8',
						body: `"G" z2 z D B2 BA |"Bm" B d3 z2 Bd |"C" e2 eg"D" fedc |"Bm" dfag-"Em" g2 Bc |
"Am" c3 c"C" edcB |"D" B4"Bm" A4 |"C" G4"Am" B3 c |"D" A8 |
"G" z2 z D B2 d^c |"F#7" B^AB^c edcd- |"Bm" d3 B f2 fe |"Em" gfed"A7" ^cege |
"D" f3 A f2 fe |"F#m" f a3 z2 fa |"G" b2 bd'"A" ^c'bag |"F#m" a^c'e'd'-"Bm" d'2 fg |
"Em" gfed"A" ^ceag |"D" fedc"G7" Bdg=f |"Cm" _edc_B"D" Acfe |"Eb" dc=f_e"D7" dc_BA |
"Gm" _B3 D B2 BA |"Bb" _B d3 z2 Bd |"Cm" _e2 eg"D7" fedc |"Eb" A2 _B2 c3 A |
"Eb" _Bd_eg"F" Ag=fe |"Gm" d_Bcd"D7" ^F_edc |"Eb" _BAcB"F" AG=FA |"Bb" _B=FAB"D7" cBAG |
"G" G3 D B2 BA |"Bm" B F3 z2 B,D |"C" E2 EG"D" FEDc |"G" BGBd"C" e3 e |
"Am" eAce"Bm" f3 d |"C" eceg"D7" b2 a2 |"Cm" a6 g2 |"G" g8 |] `,
						composers: ['Irad Doron'],
					},
				],
			},
			{
				collectionId: 2,
				collectionTitle: 'Wide Range Ballads',
				pieces: [
					{
						id: 110,
						mainKey: 'C',
						meter: '4/4',
						noteLength: '1/8',
						body: `"C" eeed"C/E" dccB |"F" BAAB"G" ccBA |"C" BBBA"Am" GAcB |"F" ABce"G" BGed |
"C" eeed"C/E" dccB |"F" BAAB"G" ccBA |"Am" BBBA"Dm" GFcB |"G" ABce"C" d2 c2 |
"Bb" d2 ef"F" c2 AG |"G" GGGF"Am" EGAc |"Bb" ddef"F" agfe |"G" d3 c"Em" d4 |
"C" eeed"C/E" dccB |"F" BAAB"G" ccBA |"C" BBBA"Am" GAcB |"F" ABce"G" BGgf |
"Em" g2 ab"Am" e2 cB |"F" AAAG"G" GBdf |"C" e2 fg"Am" c2 ag |"Dm" gfc'b"G" abc'e' |
"Bb" d'2 e'f'"F" c'2 ag |"G" gggf"Am" egac' |"Bb" d'd'e'f'"F" a'g'f'e' |"G" d'3 c'"Em" d'4 |
"C" e'e'e'd'"C/E" d'c'c'b |"F" baab"G" c'c'ba |"Em" g2 ab"Am" e3 d |"C" e2 fg"Am" c3 B |
"F" A2 Bc"G" e2 d2 |"Em" g2 fe"Am" c3 d |"F" d3 c"G" e2 d2 |"C" c8 |] `,
						composers: ['Irad Doron'],
					},
				],
			},
		],
	},
	{
		seriesId: 3,
		seriesTitle: 'Melodic Patterns',
		seriesDescription: 'Practice melodic patterns in various keys',
		collections: [
			{
				collectionId: 1,
				collectionTitle: 'Melodic Patterns',
				pieces: [
					{
						id: 87,
						mainKey: 'C',
						meter: '4/4',
						noteLength: '1/16',
						body: `"F" e4 e4 d4 c4 |"C" e4 e4 d4 c4 |"F" e4 e4 d4 c4 |"C" e4 f4"Em" e4 d4 |
"F" e2e2e2d2 d2c2c2d2 | "C" e2e2e2d2 d2c2 c4 |"F" e2e2e2d2 d2c2c2d2 |"C" e2e2f2e2 "Em" e2d2d2c2 |
|:"F" eAeA eAdA dAcA cAdA | "C" eGeG eGdG dGcG cGcG |
"F" eAeA eAdA dAcA cAdA |"C" eGeG fGeG "Em" eGdG dGcG :|
"F" e2e2e2d2 d2c2c2d2 |"C" e2e2e2d2 d2c2 c4 |"F" e2e2e2d2 d2c2c2d2 |"C" e2e2f2e2 "Em" e2d2d2c2 |
"F" e4 e4 d4 c4 |"C" e4 e4 d4 c4 |"F" e4 e4 d4 c4 |"C" e4 f4 "Em" e4 d4 |"C" e16 |] `,
						composers: ['Irad Doron'],
						geners: ['Melodic Patterns'],
						subGeners: ['Repeated Note'],
					},
					{
						id: 88,
						mainKey: 'C',
						meter: '4/4',
						noteLength: '1/16',
						body: `|:"C" z ede ceBe Gede ceBe |"F" AeBe ceBe dece BeAe |
"C" Gede ceBe Gede ceBe |"F" AeBe ceBe ceBe AeGe |
"Dm" Ffef dfef Afef Ffef |"Em" Ggfg egfg Bgfg Ggfg |
"Am" AcBc AcBc AcBc AcBc | AcBc AcBc ABcd e2c2 :|
|:"G" GBAB dBAB GBAB dBAB | "C" GcBc ecBc GcBc ecBc |
"F" AcBc fcBc AcBc fcBc |"C" GcBc ecBc GcBc ecBc |
"G" GBAB dBAB GBAB dBAB | FBAB dBAB FBAB dBAB |
"Am" EA^GA cAGA EAGA cAGA | "E" E^GFG BGFG EGFG BGFG |
"Dm" DFEF BFEF DFEF BFEF |"Am" CEDE BEDE CEDE AEDE |
"E" B,DCD FDCD B,DCD FDCD |"Am" A,CB,C A,CB,C A,B,CD E2C2 | A,4 C4 E4 A4 :| `,
						composers: ['Irad Doron'],
						geners: ['Melodic Patterns'],
						subGeners: ['Repeated Note'],
					},
					{
						id: 89,
						mainKey: 'Gm',
						meter: '4/4',
						noteLength: '1/16',
						body: `|:"Gm" z GAG BGcG dGAG BGcG |"Eb" BGcG BGAG BGBG AGAG |
"Gm" z GAG BGeG dGcG BGAG | "Eb" cGAG cGAG BGAG BGAG |
"Cm" z FGA GFGA GFGA GFGB |"F" AGAB AGAB AGAB AGAc |
|1 "Bb" BABc BABc B2B2 B4 :|2"Bb" BABc BABc Bcdef2f2 |]
"F" f6 a2"D7" a6 ga | "Gm" b6 c'2"Am7b5" c'6 bc' |"Bb" d'8"D" d'c'ba c'bag |"Eb" g6 g2"D" (3^f2g2f2- fefe |"Gm" d2d2d2d2-"Bb" d8 |
"Cm" c6 cd"D7" e6 dc |"Eb" B2B2B2B2-"Cm" B8 |"D7" A6 AB c6 BA | "Gm" G2G2G2G2- G8 |"Eb" z8"D" z8 |]
"Gm" z GAG BGcG dGAG BGcG |"Eb" BGcG BGAG BGdG fG^fG |
"Gm" gGdG eGdG gGdG eGdG |"Eb" gGfG eGdG cGBG cGdG |
"Cm" cBcd cBcd cBcd cBce |"D" dcde dcde dcde dcBA |
"Gm" Bdcd Bdcd GBAB GBAB | G2G2G2G2- G8 |]`,
						composers: ['Irad Doron'],
						geners: ['Melodic Patterns'],
						subGeners: ['Repeated Note'],
					},
					{
						id: 90,
						mainKey: 'C',
						meter: '4/4',
						noteLength: '1/8',
						body: `"C" z CB,C ECB,C | G,CB,C ECB,C | z EDE FEFD | EEDE FEFD |
ECDB, CEDB, | CG,A,B, CG,A,B, |CG,A,B, CDEF |
G/C/E/G/ c/B/A/G/ "D" ^F/D/F/A/ d/c/B/A/ |"G" BG^FG ABAG | DG^FG ABAG |z BAB cBcA |
BBAB cBcA | BGA^F GBAF | GDE^F GDEF | GDE^F GABc |
ddee dGGG | ddee dGGG |"G7" ddee fffe | eddc BGGG |
GGGG FFFF | EEEE DDDD | GGGG FFFF | EEEE DD D2 |
"Cm" z CB,C _DCB,C |z CB,C _DCB,C | z _EDE FEFD | _EEDE F_AGF |
_EC_DB, CEDB, | CG,_A,B, CB,A,B, | G,F_ED CB,ED |CG,_A,B, CB,A,B, |
"G" G,G,F,G, _A,G,A,F, | G,G,F,G, _A,G,A,F, | G,G,F,G, _A,G,CB, |"C" z CB,C ECB,C |
G,CB,C ECB,C | z EDE FEFD | EEDE FAGF | ECDB, CEDB, |
CG,A,B, CEDB, |CCB,C DCDB, | z cBc dcdB | z2 c'2 z4 |] `,
						composers: ['Irad Doron'],
						geners: ['Melodic Patterns'],
						subGeners: ['Repeated Note', 'Drums Style'],
					},
				],
			},
		],
	},
	{
		seriesId: 4,
		seriesTitle: 'Classical Arrangements',
		seriesDescription: 'Classical Arrangements in lead sheets format',
		collections: [
			{
				collectionId: 1,
				collectionTitle: 'Notebook for Anna Magdalena Bach',
				pieces: [
					{
						id: 91,
						mainKey: 'F',
						meter: '3/4',
						noteLength: '1/8',
						body: `|:"F" c2 d/e/f"C/G" e2 |"F/A" (3fed"F" c2-"F/A" c2 |"Bb" (3d_ed "C" (3cdc "C7" (3BcB |"Fsus4" B2"F/C" A2"C" G2 |
"F" Ac Fc Gc | Ac Bc Gc |"C" Ac Fc Gc | Ac Bc Gc |
"F" Ac de "Dm" fd | "G" c=B "Em" AG "Am" c/d/c/B/ |"F" cf "C/G" e2"G" d/c/d |"C" c6 :|
|:"C" g2 fe fd |"C7" eg b2 z2 |"F" a2 "Bb6" gf "Gm6" ed |"Asus4" d2 "A" ^c4 |
"A" ^cd ec de |"A/C#" A2 A2 A2 |"A" ^cd ec de |"A7/C#" G2 G2 G2 |
"A7/G" ^cd ec de |"Dm/F" Ad cB "Gm" AG |"Dm/A" F2 G2 "A" E2 |"Dm" D6 |
"F/A" cf ef "Eb/G" _ef |"F" af "Bb" df "F/A" cf |"Gm/Bb" dg ^fg "F/A" =fg |"Gm" bg "C" eg "C/E" cB |
"F" Af ga gf |"Gm" Bg ab ag |"Am" cc' "Bb" ba "C7" ga |"F" g2 f4 :| `,
						composers: ['Johann Sebastian Bach'],
						geners: ['Classical Music'],
						subGeners: ['Baroque'],
						album: 'Notebook for Anna Magdalena Bach',
						trackNumber: 1,
						originalKey: 'F',
						bpm: [80, '1/4'],
						title: 'Minuet in F',
						catalogName: 'BWV Anh',
						catalogNumber: 113,
					},

					{
						id: 92,
						mainKey: 'G',
						meter: '3/4',
						noteLength: '1/8',
						body: `|:"G" d2 GA Bc | d2 G2 G2 |"C" e2 cd ef |"G" g2 G2 G2 |
"Am" c2 dc BA |"G" B2 cB AG |"D" F2 GA BG |"D7" A6 |
"G" d2 GA Bc | d2 G2 G2 |"C" e2 cd ef |"G" g2 G2 G2 |
"Am" c2 dc "D/F#" BA |"G" B2 cB "G/B" AG |"C6" A2 BA "D" GF |"G" G6 :|
|:"G" b2 ga bg |"D/F#" a2 de fd |"Em" g2 ef gd |"A" ^c2 Bc A2 |
AB ^cd ef |"G/B" g2"D" f2"A/C#" e2 |"D" f2"D/F#" A2"A" ^c2 |"D" d6 |
"G" d2 GF G2 |"C" e2 GF G2 |"G/B" d2"Am" c2"G" B2 |"D" AG FG A2 |
DE FG AB |"C/E" c2"G" B2"D/F#" A2 |"G" Bd"G/B" G2"D" F2 |"G" G6 :|`,
						composers: ['Johann Sebastian Bach'],
						geners: ['Classical Music'],
						subGeners: ['Baroque'],
						album: 'Notebook for Anna Magdalena Bach',
						trackNumber: 2,
						originalKey: 'G',
						bpm: [80, '1/4'],
						title: 'Minuet in G',
						catalogName: 'BWV Anh',
						catalogNumber: 114,
					},
					{
						id: 93,
						mainKey: 'Gm',
						meter: '3/4',
						noteLength: '1/8',
						body: `|:"Gm" b2 a2 g2 |"Dm/F" a2 d2 d2 |"Eb" g2 GA Bc |"D" d6 |
"Eb/G" e2 fe "Amb5" dc | "Bb" d2 ed "Gm" cB |"Amb5" c2 "D/F#" dc "Gm/D" Bc |"D" A6 |
"Gm" b2 a2 g2 |"Dm/F" a2 d2 d2 |"Eb" g2 GA Bc |"D" d6 |
"G7" f2 gf ed |"Cm" e2 "F/A" fe "F7" dc |"Bb" d2 "Eb" g2"F" c2 |"Bb" B6 :|
|:"Bb" d2 Bc d=e |"F/A" f2 "Gm" g2"F" a2 |"Gm" b2 "C/E" ga "C7" bg |"F" a2 ga f2 |
"F" FG AB cd |"Eb/G" e2 "Bb/F" d2 "Cm/Eb" c2 |"Bb/D" f2 "Eb" B2 "F" A2 |"Bb" B6 |
"G" G2 dc d2 |"Cm" G2 ed e2 |"Gm/Bb" Gd "D/A" ^Fc "Gm" GB |"D" A4 z2 |
D=E ^FG AB |"Cm/Eb" c2"Gm/D" B2"Cm6" A2 |"Gm/Bb" Bc/d/"Cm" G2"D" ^F2 |"Gm" G6 :|`,
						composers: ['Johann Sebastian Bach'],
						geners: ['Classical Music'],
						subGeners: ['Baroque'],
						album: 'Notebook for Anna Magdalena Bach',
						trackNumber: 3,
						originalKey: 'Gm',
						bpm: [80, '1/4'],
						title: 'Minuet in G minor',
						catalogName: 'BWV Anh',
						catalogNumber: 115,
					},
					{
						id: 94,
						mainKey: 'G',
						meter: '3/4',
						noteLength: '1/8',
						body: `|:"G" GB dg "D" Af |"G" g2 G2 G2 | GB dg "D" Af |"G" g2 G2 G2 |
"C" e2 e2 eg |"G/B" d2 d2 dg |"Am" c2 "D/F#" dc "G" Bc |"D" A6 |
"G" GB dg "D" Af |"G" g2 G2 G2 | GB dg "D" Af |"G" g2 G2 G2 |
"C" e2 dc BA |"G/B" d2 cB AG |"C6" (3ABc D2 "D" F2 |"G" G6 :|
|:"Em" GA "B/D#" BA "B" GF |"Em" G2 E2 E2 | gf eg fe |"B" f2 B2 B2 |
"Em" gf eg fe |"B7" f2 B2"Em/G" e2 |"Am" (3fga"B" B2 ^d2 |"Em" e2 ^de f2 |
"G/B" g2 gf ed |"C" e2 ed cB |"Am" c2 cB AG |"D" F2 EF D2 |
A2 D2 D2 |"G/D" B2 D2 D2 |"D7" c2 dc Bc | A6 |
"G" GB dg "D" Af|"G" g2 G2 G2 | GB dg "D" Af |"G" g2 G2 G2 |
"C" e2 dc BA |"G/B" d2 cB AG |"C6" AB D2 "D" F2 |"G" G6 :|`,
						composers: ['Johann Sebastian Bach'],
						geners: ['Classical Music'],
						subGeners: ['Baroque'],
						album: 'Notebook for Anna Magdalena Bach',
						trackNumber: 4,
						originalKey: 'G',
						bpm: [80, '1/4'],
						title: 'Minuet in G',
						catalogName: 'BWV Anh',
						catalogNumber: 116,
					},
					{
						id: 95,
						mainKey: 'F',
						meter: '3/4',
						noteLength: '1/16',
						body: `|:"F" f2fg gaga bagf |"C/E" g2ga "G/D" gfed "C" e2c2 |"Bb" B2A2 d4 "F/A" c4 |
"Gm" B2cd "C" cBAG "F" A2F2 |A2Bc "Bb" d2de "F/A" d2c2 |"Bb/D" cBcd "C/E" cBAG "F" A2F2 |
"F/A" f2fe "Bb"d2"C"c2"Bb/D"B2"Bb"A2 |"C" GBAG "F" G4 F4 :|
|:"F" a2ag gaga bagf |"C/E" g2gf fgfg agfe |"F" a2ag f2e2 d2c2 |
"G" =BcdB "C" c4 "C7" _B4 |"F" A2c2 c2Bc "Bb" c2d2 |"C7" G2B2 B2AB "F" B2c2 |
"F/A" f2fe "Bb"d2"C"c2"Bb/D"B2"Bb"A2 |"C" GBAG"F" G4 F4 :| |`,
						composers: ['Johann Sebastian Bach'],
						geners: ['Classical Music'],
						subGeners: ['Baroque'],
						album: 'Notebook for Anna Magdalena Bach',
						trackNumber: 4,
						originalKey: 'F',
						bpm: [80, '1/4'],
						title: 'Minuet in F',
						catalogName: 'BWV Anh',
						catalogNumber: 117,
					},
					{
						id: 96,
						mainKey: 'Bb',
						meter: '3/4',
						noteLength: '1/8',
						body: `|:"Bb" B2 B2 F>G |"F" F2 E2 "Bb" D2 |"Cm/Eb" C2 c3 d/e/ |"F" B2 A2 B2 |
c2 F2 e2 |"Bb" dc BA B2 |"Eb/G" e/f/g "F/A" fe "Bb" de |"F" c6 :|
|:"F" A2 A>B B3/2A/4B/4 | c2 BA GF |"Bb" B2 AG AF |"C" GF =ED EC |
CD =EF GA |"C7" B2 =e2 e/f/g |"F/A" c2 "Bb" BA "C" GA |"F" F6 |
"Bb" F2 B2 B/c/d |"F/A" F2 c2 c/d/e |"Bb" df "Eb/G" ed "Cm/Eb" cB |
"F" A2 GA F2 |"Bb/D" B2 B2 "Cm6" A2 |"Eb" G2 FE "Bb" D2 |"Eb/G" e2 "Eb" d2 "F" c2 |"Bb" B6 :|`,
						composers: ['Johann Sebastian Bach'],
						geners: ['Classical Music'],
						subGeners: ['Baroque'],
						album: 'Notebook for Anna Magdalena Bach',
						trackNumber: 5,
						originalKey: 'Bb',
						bpm: [80, '1/4'],
						title: 'Minuet in F',
						catalogName: 'BWV Anh',
						catalogNumber: 118,
					},
					{
						id: 97,
						mainKey: 'Gm',
						meter: '3/4',
						noteLength: '1/8',
						body: `|:"Gm" G>A B2 c2 | AA/B/"D/F#" c2-"D" c2 |"Gm" BB/c/ dg"Cm"cg |"Gm/D" BA/B/"Gm" G4 ::
"Gm" B>c"Bb" d2"F/A" f2 |"Bb" dc/B/ "F"A/B/c/A/"F7" F2 |"Bb/D" fd"Bb/F"Bf "Eb"g/f/e/d/ |"Cm" ec"F7"Ae "Bb/D"f/e/d/c/ |
"Bb" dc/d/ "Eb/G"ed"Cm/Eb"cB |"F" A/B/c/A/"Bb/D" B2 B,2 |"Bb" d2"Cm" e2"Eb" G2 |"D" ^FF/G/ AD FA |
"Bb" d2"Cm"e2"Eb"G2 |"D" ^FF/G/ AD FA |"Bb" dd/e/ "Gm"dd/e/ "Gm/Bb" dg |"Gm/D" BA/B/"Gm" G2 G,2 :|`,
						composers: ['Johann Sebastian Bach'],
						geners: ['Classical Music'],
						subGeners: ['Baroque'],
						album: 'Notebook for Anna Magdalena Bach',
						trackNumber: 6,
						originalKey: 'Gm',
						bpm: [80, '1/4'],
						title: 'Polonaise in G minor',
						catalogName: 'BWV Anh',
						catalogNumber: 119,
					},
				],
			},
			{
				collectionId: 2,
				collectionTitle: 'The Well-Tempered Clavier Book 1',
				pieces: [
					{
						id: 98,
						mainKey: 'F',
						meter: '12/8',
						noteLength: '1/16',
						body: `"F" fcAGAc FAc_edc "Bb" dBFEFB DFAcBA |"Gm" BGEDEG "C" CEGBAG "F" AGFEFA CEFAGF |
"G7" =B12 "C" cGEDEG CEG_BAG |"A7" ^c12 "Dm" dAFEFA DFA=cBA |
"Gm" BGEDEG "C" CEGBAG "F" AFD^CDF "Bb" B,DFAGF |"Emb5" GE^C=B,CE "A7" A,CEGFE "Dm" F2A2d2 A2F2D2 |
"Gm" G2B2d2 B2G2D2 "A7" G2^c2e2 c2G2E2 |"Dm" dAFEFA DFAcBA "Bb" fdBABd FBdfed |
"E7" ^g12 "A7" ae^c=Bce Ace=g^fe |"D7" ^f12 "G7" gd=BABd GBd=f_ed |
"Cm" _ecAGAc "F" FAcedc "Bb" dBGFGB "Eb" _EGBdcB |"Amb5" cA^FEFA "D7" DFAcBA "Gm" B12 |
"C7" B12 "F7" A12- |"Bb" AAFEFA DFAcBA "Gm/Bb" GdBABd GBdfed |
"C/Bb" egedeg cegbag "F" c'afefa "Dm" dfac'ba |"Gm" bgedeg "C" cegbag "F" afcBcf Ac_egfe |
"Bb" d6- dcBAGF "C7" B2g2e2 c2B2g2 |"F" AGFEFA "Bb" DFDB,G,E "F" FB,A,G,A,C F,4 z2 |]`,
						composers: ['Johann Sebastian Bach'],
						geners: ['Classical Music'],
						subGeners: ['Baroque'],
						album: 'The Well-Tempered Clavier Book 1',
						trackNumber: 11,
						originalKey: 'F',
						bpm: [88, '3/8'],
						title: 'Prelude in F major',
						catalogName: 'BWV',
						catalogNumber: 856,
					},
				],
			},
			{
				collectionId: 3,
				collectionTitle: 'The Well-Tempered Clavier Book 2',
				pieces: [],
			},
			{
				collectionId: 4,
				collectionTitle: 'The English Suites',
				pieces: [
					{
						id: 99,
						mainKey: 'Am',
						meter: '3/4',
						noteLength: '1/16',
						body: `"Am7" z2 e2 A2a2 gefd | edcB cBcf BeAd |"E7" ^GdBG dBGB EdcB |"Am" cBA^G ABcF BEAB |
"E" ^G2E2 G2B2 G2E2 |"A7" A=ge^c gece AG^FE |"D" ^F2d2 ^f2a2 f2d2 |"G7" g=fdB fdBd Gfed |
"C" edcB "D" Acd^f "G" gBcA |"G7" Bde=f "C7" gA_BG gABG |"Fmaj7" Acde "Bmb57" fGAF fGAF |
"Em" GEGB "Am7" eFGE eFGE |"Dm" FDFA "G7" dEFD dEFD |"Cmaj7" EDCB, C^G,A,E DB,CA, |
"E7" B,DB,^G, DB,G,B, E,DCB, |"A7" CA,^CE GECE A,GFE |"Dm" FA,DF "B7" A^F^DF B,A^GF |
"E7" ^GEGB dBGB EdcB |"Am7" c2e2 A2a2 gefd |"E" ba^g^f gfgb egac |"Bmb57" dfcf Bfcf BfAf |
"E" ^GBeE "Am" AceE "E7" GBdE |"Am" cBAG FEDE "Dm" FEFc |"G" BAGF EDCD "C" EDE_B |
"F" AGFE "Dm" FEFA "E7" ^GBAc |"G#dim" BcdB ^GEFD ECDB, |"Am" CEA^G ADEC DB,CA, |
"E" ^G,EBA BEFD ECDB, |"Am" CDEB, C2D2 "E" C2B,2 |"F" A,B,C^G, A,EFB "E" EAD^G |
"Am" CEA2- "E" A2^G,2 "F" A,CB,D |"E" ^G,B,DF DB,G,B, E,DCB, |"Am" CEA2- "E" A2^G2 "F" AcBd |
"E" ^GBdf dBGB EdcB |"Am" cea2- "E" a2^g2 "F" ac'ba |"E" ^g^fgb agac' gfgb | ^fefa =fefb edea |
dcd^g edea dcdg | cBc^f dcd^g cBcf | BABe dBcA B^GA^F | ^G^FGB E^DEG =DCD=F |
B,A,B,D ^G,^F,G,B, E,2 z2 | z DCB, FDCB, ^GDCB, | BFED ^GFED BFED | d^G^FE BGFE dBAG |
fedc BA^G^F EDCB, |"Am" A,2e2 A2a2 "G" gefd |"C" eBc^G "F" Acfd "E" ecdB |
"Am" cBc^G Acec "Bmb5" dBcA |"E" BAB^G "F" AGAf "E" ecdB |"Am" cBA^G ABcf "G" ecdB |
"C" cBA^G"F" ABcd "E" cABG |"Am" ABcA ^GAcA "G#mb5" BGA^F |"E" ^GFED "Am" CB,CA "E" B,AB,G |
"Am" A2E2 EFE2 E2E2 |"Dm" F2D2 DED2 "G" D2D2 |"C" E2G2 GAG2 G2G2 |"B7" A2^F2 FGF2 F2F2 |
"Em" G2B2 E2e2 "D/F#" dBcA |"G" BAG^F "Em" GFGc "D" FBEA |"B7" ^DA^FD AFDF B,AGF |
"Em" G2B,2 B,CB,2 B,2B,2 |"Am" C2A,2 A,B,A,2 "D" A,2A,2 |"G" B,2D2 DED2 D2D2 |
"F#7" E2^C2 CDC2 C2C2 |"Bm" DB,D^F BDFB d2d2 |"E7" dE^GB dBGB EdcB |"Am" cA,CE ACEA c2c2 |
"D7" cD^FA cAFA DcBA |"G" B^FGB DFGB DFGB |"Am7" c^FGc DFGc DFGc |"G/B" d^FGd DFGd DFGd |
"C" EDEd EDEd EDEd |"Am" EDEc EDEc EDEc |"D7" ^FEFc FEFc FEFc |"G/D" G^FGB GFGB GFGB |
"C#mb5/D" G^FGe GFGe GFGe |"D7" ^FDFA "Bmb5" dE=FD "G7" dEFD |"C" ECEG "Am" cDEC "D7" cDEC |
"Bm" D2d2 ded2 d2d2- |"Am" d2c2 cdc2 c2c2 |"Em" BAG^F GFGc FBEA |"B7" ^DcBA ^FcBA AcBA |
B,AG^F ^DAGF FAGF | A,^FE^D CFED _EF=ED | A^FE^D cFED BAGF |"Em" G2B2 E2e2 "Bm" dBcA |
"G" B^FG^D "C" EGcA "B7" BGAF |"Em" G^FG^D EGBG "D#mb" AFGE |"B7" ^FEF^D "C" EDEc "B7" BGAF |
"Em" G^FE^D EFGc "Bm" BGAF |"Em" G^FE^D "C" EFGA "B7" GEFD |"Em" E^FGE ^DEGE "D#mb5" FDE^C |
"B7" ^DcBA "Am7" GABc "B7" ^F2>E2 |"Em" E2G2 GAG2 G2G2 |"A7" _B2G2 GAG2 GBAG |"Dm" F2F2 FGF2 F2F2 |
"G7" d2F2 FGF2 FAGF |"C" EB,CE G,B,CE G,B,CE |"Dm" FB,CF G,B,CF "G7" G,B,CF |
"C" GB,CG G,B,CG G,B,CG |"F" A,G,A,G A,G,A,G A,G,A,G |"Dm/F" A,G,A,F A,G,A,F A,G,A,F |
"G7" B,A,B,F B,A,B,F B,A,B,F |"C/G" CB,CE CB,CE CB,CE |"Cdim/G" CB,C_E CB,CE CB,CA |
"G7" B,DF_A FDB,G, z4 |"F#dim" c4 _E4 "G/F" z2 B2 |"C/E" c2>d2 "G7" d6 c2 |"C" c2e2 A2a2 gefd |
"Am" edcB cBcf BeAd |"E7" ^GdBG dBGB EdcB |"Am" cBA^G ABcF BEAB |"E" ^G2E2 G2B2 G2E2 |
"A7" Age^c gece AG^FE |"D" ^F2d2 ^f2a2 f2d2 |"G7" gfdB fdBd Gfed |"C" edcB "D" Acd^f "G" gBcA |
"G7" Bdef "C7" gA_BG gABG |"F" Acde "Bmb5" fGAF fGAF |"Em" GEGB "Am" eFGE eFGE |
"Dm" FDFA "G7" dEFD dEFD |"C" EDCB, C^G,A,E DB,CA, |"E" B,DB,^G, DB,G,B, E,DCB, |
"A7" CA,^CE GECE A,GFE |"Dm" FA,DF "B7" A^F^DF B,A^GF |"E7" ^GEGB dBGB EdcB |"Am" c2e2 A2a2 gefd |
"E7" ba^g^f gfgb egac |"Bmb5" dfcf Bfcf BfAf |"E" ^GBeE "Am" AceE "E" GBdE |
"Am" cBAG FEDE "Dm" FEFc |"G" BAGF EDCD "C7" EDE_B |"F" AGFE "Dm" FEFA "E7" ^GBAc |
"G#dim" BcdB ^GEFD ECDB, |"Am" CEA^G ADEC DB,CA, |"E" ^G,EBA BEFD ECDB, |
"Am" CDEB, C2D2 "E" C2B,2 |"F" A,B,C^G, A,EFB "E" EAD^G |"Am" CEA2- "E" A2^G,2 "F" A,CB,D |
"E" ^G,B,DF DB,G,B, E,DCB, |"Am" CEA2- "E" A2^G2 "F" AcBd |"E" ^GBdf dBGB EdcB |
"Am" cea2- "E" a2^g2 "F" ac'ba |"E" ^g^fgb agac' gfgb | ^fefa =fefb edea | dcd^g edea dcdg |
cBc^f dcd^g cBcf | BABe dBcA B^GA^F | ^G^FGB E^DEG =DCD=F | B,A,B,D ^G,^F,G,B, E,2 z2 |
z DCB, FDCB, ^GDCB, | BFED ^GFED BFED | d^G^FE BGFE dBAG | fedc BA^G^F EDCB, |
"Am" A,2e2 A2a2 "G" gefd |"C" eBc^G "F" Acfd "E" ecdB |"Am" cBc^G Acec "Bmb5" dBcA |
"E" BAB^G "F" AGAf "E" ecdB |"Am" cBA^G ABcf "G" ecdB |"C" cBA^G "F" ABcd "E" cABG |
"Am" ABcA ^GAcA "G#mb5" BGA^F |"E" ^GFED "Am" CB,CA "E" B,AB,G | A12 |]`,
						composers: ['Johann Sebastian Bach'],
						geners: ['Classical Music'],
						subGeners: ['Baroque'],
						album: 'The English Suite trackNumber. 2',
						trackNumber: 1,
					},
				],
			},
		],
	},
];

export default tunes;
