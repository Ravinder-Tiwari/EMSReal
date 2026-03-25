export const ROADMAP_ITEMS = {
  basics: {
    title: 'C Language Fundamentals',
    icon: '🔤',
    color: '#4ADE80',
    items: [
      {
        id: 1,
        title: 'Variables & Data Types',
        done: true,
        subtopics: ['int, float, char, double', 'Type casting', 'Constants'],
      },
      {
        id: 2,
        title: 'Operators & Expressions',
        done: true,
        subtopics: ['Arithmetic', 'Logical', 'Bitwise'],
      },
      {
        id: 3,
        title: 'Control Flow',
        done: true,
        subtopics: ['if-else', 'switch', 'loops'],
      },
      {
        id: 4,
        title: 'Functions & Recursion',
        done: true,
        subtopics: ['Function declaration', 'Recursion', 'Stack'],
      },
      {
        id: 5,
        title: 'Arrays & Strings',
        done: true,
        subtopics: ['1D/2D arrays', 'String functions'],
      },
      {
        id: 6,
        title: 'Pointers',
        done: false,
        subtopics: ['Pointer arithmetic', 'Double pointers', 'Function pointers'],
      },
      {
        id: 7,
        title: 'Structures & Unions',
        done: false,
        subtopics: ['struct', 'union', 'typedef'],
      },
      {
        id: 8,
        title: 'File Handling',
        done: false,
        subtopics: ['fopen/fclose', 'fread/fwrite', 'fprintf'],
      },
      {
        id: 9,
        title: 'Memory Management',
        done: false,
        subtopics: ['malloc', 'calloc', 'free'],
      },
    ],
  },
  dsa: {
    title: 'Data Structures & Algorithms',
    icon: '📊',
    color: '#60A5FA',
    items: [
      {
        id: 1,
        title: 'Arrays & Hashing',
        done: true,
        subtopics: ['Sliding window', 'Two pointers', 'Hash maps'],
      },
      {
        id: 2,
        title: 'Linked Lists',
        done: true,
        subtopics: ["Singly/Doubly", "Floyd's cycle", 'Reversal'],
      },
      {
        id: 3,
        title: 'Stacks & Queues',
        done: true,
        subtopics: ['Monotonic stack', 'Deque', 'Priority Queue'],
      },
      {
        id: 4,
        title: 'Trees',
        done: false,
        subtopics: ['BST', 'BFS/DFS', 'Segment Tree'],
      },
      {
        id: 5,
        title: 'Heaps',
        done: false,
        subtopics: ['Min/Max heap', 'K-th largest'],
      },
      {
        id: 6,
        title: 'Graphs',
        done: false,
        subtopics: ['Dijkstra', 'Topological sort', 'Union Find'],
      },
      {
        id: 7,
        title: 'Dynamic Programming',
        done: false,
        subtopics: ['Memoization', 'Tabulation', 'LCS', 'Knapsack'],
      },
      {
        id: 8,
        title: 'Backtracking',
        done: false,
        subtopics: ['N-Queens', 'Sudoku', 'Permutations'],
      },
    ],
  },
  development: {
    title: 'Web Development',
    icon: '🌐',
    color: '#F472B6',
    items: [
      {
        id: 1,
        title: 'HTML5 Fundamentals',
        done: true,
        subtopics: ['Semantic HTML', 'Forms', 'Accessibility'],
      },
      {
        id: 2,
        title: 'CSS3 & Flexbox/Grid',
        done: true,
        subtopics: ['Flexbox', 'Grid', 'Animations', 'Responsive'],
      },
      {
        id: 3,
        title: 'JavaScript ES6+',
        done: true,
        subtopics: ['Promises', 'Async/Await', 'Destructuring'],
      },
      {
        id: 4,
        title: 'React.js',
        done: true,
        subtopics: ['Hooks', 'Context', 'Redux', 'Router'],
      },
      {
        id: 5,
        title: 'Node.js & Express',
        done: false,
        subtopics: ['REST APIs', 'Middleware', 'Authentication'],
      },
      {
        id: 6,
        title: 'MongoDB & Databases',
        done: false,
        subtopics: ['Mongoose', 'Aggregation', 'Indexing'],
      },
      {
        id: 7,
        title: 'Deployment & DevOps',
        done: false,
        subtopics: ['Docker', 'CI/CD', 'AWS/Vercel'],
      },
    ],
  },
  resume: {
    title: 'Resume & ATS',
    icon: '📄',
    color: '#FBBF24',
    items: [
      {
        id: 1,
        title: 'Resume Structure',
        done: true,
        subtopics: ['Format', 'Sections', 'Length'],
      },
      {
        id: 2,
        title: 'Writing Work Experience',
        done: true,
        subtopics: ['STAR Method', 'Metrics', 'Action verbs'],
      },
      {
        id: 3,
        title: 'Projects Section',
        done: true,
        subtopics: ['Tech stack', 'Impact', 'GitHub links'],
      },
      {
        id: 4,
        title: 'Skills Optimization',
        done: true,
        subtopics: ['Keywords', 'ATS optimization'],
      },
      {
        id: 5,
        title: 'ATS Score Improvement',
        done: false,
        subtopics: ['Keyword matching', 'Formatting tips'],
      },
      {
        id: 6,
        title: 'LinkedIn Optimization',
        done: false,
        subtopics: ['Headline', 'Summary', 'Skills'],
      },
    ],
  },
  interview: {
    title: 'Interview Practice',
    icon: '🎤',
    color: '#A78BFA',
    items: [
      {
        id: 1,
        title: 'Behavioral Questions',
        done: false,
        subtopics: ['STAR Method', 'Common questions', 'Practice answers'],
      },
      {
        id: 2,
        title: 'Technical Interviews',
        done: false,
        subtopics: ['Coding rounds', 'Problem solving approach'],
      },
      {
        id: 3,
        title: 'System Design',
        done: false,
        subtopics: ['HLD', 'LLD', 'Scalability'],
      },
      {
        id: 4,
        title: 'HR Round',
        done: false,
        subtopics: ['Salary negotiation', 'Company research'],
      },
    ],
  },
  jobs: {
    title: 'Job Applications',
    icon: '💼',
    color: '#FB923C',
    items: [
      {
        id: 1,
        title: 'Job Search Strategy',
        done: false,
        subtopics: ['Platforms', 'Referrals', 'Cold outreach'],
      },
      {
        id: 2,
        title: 'Application Tracking',
        done: false,
        subtopics: ['Spreadsheet', 'Follow-ups'],
      },
      {
        id: 3,
        title: 'Offer Evaluation',
        done: false,
        subtopics: ['CTC breakdown', 'Benefits', 'Growth'],
      },
    ],
  },
};

export const ROLES = [
  {
    id: 'student',
    icon: '🎓',
    title: 'Student / Job Seeker',
    desc: 'Learn, practice DSA, build resume, crack interviews',
    color: 'var(--accent)',
  },
  {
    id: 'creator',
    icon: '🎬',
    title: 'Course Creator',
    desc: 'Create courses, grow your audience, earn revenue',
    color: 'var(--accent2)',
  },
];
