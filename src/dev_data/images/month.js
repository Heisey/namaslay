const data = {
  days: [
    {
      id: 1, // ref to this key in the outer object
      date: {
        year: 2020, 
        monthNumber: 7,
        dayNumber: 1
      },
      // ?? first class starts at 6am; last class starts at 8pm
      classes: [ 
        {
          id: 1,
          name: 'Standing on your head #2',
          program_id: 2,
          start_time: '8am',
          spotsAvailable: 25,
          teacher_id: 1,
          discipline_id: 1,
          difficulty: 'hard'
        },
        {
          id: 2,
          name: 'Whatever #5',
          program_id: 1,
          start_time: '9am',
          spotsAvailable: 25,
          teacher_id: 2,
          discipline_id: 2,
          difficulty: 'easy'
        },
        {
          id: 3,
          name: 'yin morning',
          program_id: null,
          start_time: '10am',
          spotsAvailable: 25,
          teacher_id: 3,
          discipline_id: 3,
          difficulty: 'easy'
        }
      ]
    }
  ],
  disciplines: [
    {
      id: 1,
      name: 'Inversions',
      description: 'discipline description 1'
    },
    {
      id: 2,
      name: 'Hatha',
      description: 'discipline description 2'
    },
    {
      id: 3,
      name: 'Yin',
      description: 'discipline description 3'
    }
  ],
  teachers: [
    {
      id: 1,
      name: 'Alice',
      bio: 'Alice is great',
      imageUrl: 'blah'
    },
    {
      id: 2,
      name: 'Bob',
      bio: 'Bob\'s the best',
      imageUrl: 'blah'
    },
    {
      id: 3,
      name: 'Clarice',
      bio: 'Clarice is kinda weird',
      imageUrl: 'blah'
    }
  ],
  programs: [
    {
      id: 1,
      name: 'Intro to Standing on Your Head',
      description: 'learn to stand on your head you fat lazy fuck'
    },
    {
      id: 2,
      name: 'Intro to Whatever',
      description: 'learn to whatever'
    }
  ]
}


const createMonthDays = () => {
  const value = []
  for (let i = 1; i < 32; i++) {
    if (i % 2 === 0) {
      value.push(new Date(2020, 6, i))
    }
    
  }
  return value
}


export default createMonthDays
