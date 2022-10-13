const chordProgressions = [
	{
		groupTitle: 'Diatonic Major',
		collections: [
			{
				id: 1,
				beats: 4,
				collectionStructure: ['T', 'T', 'SD', 'D'],
				structureString: 'T-T-SD-D',
				progressions: [
					{
						id: 1,
						rootPosition: ['I', 'I', 'IV', 'V'],
						inversions: [['I', 'I6', 'IV', 'V']],
					},
					{
						id: 2,
						rootPosition: ['I', 'vi', 'IV', 'V'],
						inversions: [['I', 'iv6', 'IV', 'V']],
					},
					{
						id: 3,
						rootPosition: ['I', 'vi', 'ii', 'V'],
						inversions: [['I', 'vi6', 'ii', 'V']],
					},
					{
						id: 4,
						rootPosition: ['I', 'iii', 'IV', 'V'],
						inversions: [['I', 'iii6', 'IV', 'V']],
					},
					{
						id: 5,
						rootPosition: ['I', 'vi', 'ii', 'V'],
						inversions: [['I', 'vi6', 'ii', 'V']],
					},
				],
			},
			{
				id: 2,
				beats: 4,
				collectionStructure: ['T', 'SD', 'D', 'T'],
				structureString: 'T-SD-D-T',
				progressions: [
					{
						id: 1,
						rootPosition: ['I', 'ii', 'V', 'I'],
						inversions: [['I', 'ii6', 'V', 'I']],
					},
					{
						id: 2,
						rootPosition: ['I', 'ii', 'V', 'vi'],
						inversions: [['I', 'ii6', 'V', 'vi']],
					},
					{
						id: 3,
						rootPosition: ['I', 'ii', 'V', 'iii'],
						inversions: [['I', 'ii6', 'V', 'iii']],
					},
					{
						id: 4,
						rootPosition: ['I', 'IV', 'V', 'I'],
						inversions: [['I', 'IV6', 'V', 'I']],
					},
					{
						id: 5,
						rootPosition: ['I', 'IV', 'V', 'vi'],
						inversions: [['I', 'IV6', 'V', 'vi']],
					},
					{
						id: 6,
						rootPosition: ['I', 'IV', 'V', 'iii'],
						inversions: [['I', 'IV6', 'V', 'iii']],
					},
				],
			},
			{
				id: 3,
				beats: 4,
				collectionStructure: ['T', 'SD', 'SD', 'D'],
				structureString: 'T-SD-SD-D',
				progressions: [
					{
						id: 1,
						rootPosition: ['I', 'IV', 'ii', 'V'],
						inversions: [['I', 'IV6', 'ii', 'V']],
					},
				],
			},
			{
				id: 4,
				beats: 4,
				collectionStructure: ['T', 'SD', 'T', 'D'],
				structureString: 'T-SD-T-D',
				progressions: [
					{
						id: 1,
						rootPosition: ['I', 'IV', 'vi', 'V'],
						inversions: [['I', 'IV6', 'vi', 'V']],
					},
					{
						id: 2,
						rootPosition: ['I', 'IV', 'iii', 'V'],
						inversions: [['I', 'IV6', 'iii', 'V']],
					},
					,
				],
			},
		],
	},
];

export default chordProgressions;
