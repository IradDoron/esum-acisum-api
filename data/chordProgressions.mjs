const chordProgressions = [
	{
		groupTitle: 'Diatonic Major',
		collections: [
			{
				beats: 4,
				collectionStructure: ['T', 'T', 'SD', 'D'],
				structureString: 'T-T-SD-D',
				progressions: [
					{ rootPosition: 'I-I-IV-V', inversions: ['I-I6-IV-V'] },
					{ rootPosition: 'I-vi-IV-V', inversions: ['I-iv6-IV-V'] },
					{ rootPosition: 'I-vi-ii-V', inversions: ['I-vi6-ii-V'] },
					{ rootPosition: 'I-iii-IV-V', inversions: ['I-iii6-IV-V'] },
					{ rootPosition: 'I-vi-ii-V', inversions: ['I-vi6-ii-V'] },
				],
			},
			{
				beats: 4,
				collectionStructure: ['T', 'SD', 'D', 'T'],
				structureString: 'T-SD-D-T',
				progressions: [
					{ rootPosition: 'I-ii-V-I', inversions: ['I-ii6-V-I'] },
					{ rootPosition: 'I-ii-V-vi', inversions: ['I-ii6-V-vi'] },
					{ rootPosition: 'I-ii-V-iii', inversions: ['I-ii6-V-iii'] },
					{ rootPosition: 'I-IV-V-I', inversions: ['I-IV6-V-I'] },
					{ rootPosition: 'I-IV-V-vi', inversions: ['I-IV6-V-vi'] },
					{ rootPosition: 'I-IV-V-iii', inversions: ['I-IV6-V-iii'] },
				],
			},
			{
				beats: 4,
				collectionStructure: ['T', 'SD', 'SD', 'D'],
				structureString: 'T-SD-SD-D',
				progressions: [
					{ rootPosition: 'I-IV-ii-V', inversions: ['I-IV6-ii-V'] },
				],
			},
			{
				beats: 4,
				collectionStructure: ['T', 'SD', 'T', 'D'],
				structureString: 'T-SD-T-D',
				progressions: [
					{ rootPosition: 'I-IV-vi-V', inversions: ['I-IV6-vi-V'] },
					{ rootPosition: 'I-IV-iii-V', inversions: ['I-IV6-iii-V'] },
					,
				],
			},
		],
	},
];

export default chordProgressions;
