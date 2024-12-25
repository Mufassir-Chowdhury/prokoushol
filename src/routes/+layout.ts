export type Department = {
    name: string;
    image: string;
    description: string;
};

export type Subject = {
    id: number;
    name: string;
    value: string;
};

export type Option = {
    id: number;
    text: string;
    value: string;
};

export type Card = {
    id: number;
    name: string;
    value: string;
    icon: string;
};

export type DepartmentData = {
    [key: string]: string;
};

export const load = () => {
    const data: { [key: string]: string[][]} = {
        'Agriculture & Mineral Sciences': [
            ['Forestry & Environmental Science', 'FES'],
        ],
        'Applied Sciences & Technology': [
            ['Architecture', 'ARCH'],
            ['Chemical Engineering & Polymer Science', 'CEP'],
            ['Civil & Environmental Engineering', 'CEE'],
            ['Computer Science & Engineering', 'CSE'],
            ['Electrical & Electronic Engineering', 'EEE'],
            ['Food Engineering & Tea Technology', 'FET'],
            ['Industrial & Production Engineering', 'IPE'],
            ['Petroleum and Mining Engineering', 'PME'],
            ['Mechanical Engineering' , 'ME'],
        ],
        'Life Sciences': [
            ['Biochemistry and Molecular Biology', 'BMB'],
            ['Genetic Engineering & Biotechnology', 'GBB'],
        ],
        'Management & Business Administration': [
            ['Business Administration', 'BA',]
        ],
        'Physical Sciences': [
            ['Chemistry', 'CHEM'],
            ['Geography and Environment', 'GE'],
            ['Mathematics', 'MATH'],
            ['Physics', 'PHY'],
            ['Statistics', 'STAT'],
            ['Oceanography', 'OCEANOGRAPHY'],
        ],
        'Social Sciences': [			
            ['Anthropology', 'ANTH'],
            ['Bangla', 'BANGLA'],
            ['Economics', 'ECON'],
            ['English', 'ENGLISH'],
            ['Political Studies', 'POLITICAL'],
            ['Public Administration', 'PUBADMIN'],
            ['Social Work', 'SOCIAL'],
            ['Sociology' , 'SOCIOLOGY'],
        ],
    }
    
    const lists: { [key: string]: string } = {
        'FES': 'Forestry & Environmental Science',
        'ARCH': 'Architecture',
        'CEP': 'Chemical Engineering & Polymer Science',
        'CEE': 'Civil & Environmental Engineering',
        'CSE': 'Computer Science & Engineering',
        'EEE': 'Electrical & Electronic Engineering',
        'FET': 'Food Engineering & Tea Technology',
        'IPE': 'Industrial & Production Engineering',
        'PME': 'Petroleum and Mining Engineering',
        'BMB': 'Biochemistry and Molecular Biology',
        'GBB': 'Genetic Engineering & Biotechnology',
        'BA': 'Business Administration',
        'CHEM': 'Chemistry',
        'GE': 'Geography and Environment',
        'MATH': 'Mathematics',
        'PHY': 'Physics',
        'STAT': 'Statistics',
        'OCEANOGRAPHY': 'Oceanography',
        'ANTH': 'Anthropology',
        'BANGLA': 'Bangla',
        'ECON': 'Economics',
        'ENGLISH': 'English',
        'POLITICAL': 'Political Studies',
        'PUBADMIN': 'Public Administration',
        'SOCIAL': 'Social Work',
        'SOCIOLOGY': 'Sociology',
    }

    const subjects: Subject[] = [
        { id: 0, name: 'CSE 133', value: 'CSE133' },
        { id: 1, name: 'CSE 134', value: 'CSE134' },
        { id: 2, name: 'CSE 143', value: 'CSE143' },
        { id: 3, name: 'EEE 109D', value: 'EEE109D' },
        { id: 4, name: 'EEE 110D', value: 'EEE110D' },
        { id: 5, name: 'MAT 102D', value: 'MAT102D' },
        { id: 6, name: 'ENG 101D', value: 'ENG101D' },
        { id: 7, name: 'ENG 102D', value: 'ENG102D' },
    ];

    const options: Option[] = [
        { id: 0, text: `1st year - 1st semester`, value: '1-1' },
        { id: 1, text: `1st year - 2nd semester`, value: '1-2' },
        { id: 2, text: `2nd year - 1st semester`, value: '2-1' },
        { id: 3, text: `2nd year - 2nd semester`, value: '2-2' },
        { id: 4, text: `3rd year - 1st semester`, value: '3-1' },
        { id: 5, text: `3rd year - 2nd semester`, value: '3-2' },
        { id: 6, text: `4th year - 1st semester`, value: '4-1' },
        { id: 7, text: `4th year - 2nd semester`, value: '4-2' },
    ];

    const cards: Card[] = [
        { id: 0, name: 'Syllabus', icon: 'library_books', value: 'syllabus' },
        { id: 1, name: 'Class Videos', icon: 'video_library', value: 'classes' },
        { id: 2, name: 'Lecture Notes',icon: 'edit_note', value: 'notes' },
        { id: 3, name: 'CT Questions', icon: 'help_outline', value: 'question-ct' },
        { id: 4, name: 'Term Final Questions', icon: 'help', value: 'question-term' },
        { id: 5, name: 'Assignments', icon: 'assignment', value: 'assignments' },
        { id: 6, name: 'Reference Books', icon: 'bookmarks', value: 'reference' },
        { id: 7, name: 'Related Softwares', icon: 'api', value: 'softwares' },
        { id: 8, name: 'Higher Study', icon: 'school', value: 'study' },
        { id: 9, name: 'Other', icon: 'local_offer', value: 'other' },
    ]

    return {
        departments: data,
        subjects,
        options,
        cards,
        lists
    };
};
