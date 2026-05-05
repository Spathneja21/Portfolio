const works = [
    // Graphic Design - Posters
    { id: 1, category: 'graphic', src: '/elements/posters/marshM.png', title: 'MarshM' },
    { id: 2, category: 'graphic', src: '/elements/posters/simar-01.png', title: 'Simar 01' },
    { id: 3, category: 'graphic', src: '/elements/posters/simar-02.png', title: 'Simar 02' },
    { id: 4, category: 'graphic', src: '/elements/posters/simar-03.png', title: 'Simar 03' },
    // Graphic Design - Grids
    { id: 5, category: 'graphic', src: '/elements/grids/Artboard 1 (2).png', title: 'Artboard V2' },
    { id: 6, category: 'graphic', src: '/elements/grids/Artboard 1 (3).png', title: 'Eyes behind the Camera' },
    { id: 7, category: 'graphic', src: '/elements/grids/RECRUITMENT grid full-01.png', title: 'Recruitment Grid' },
    { id: 8, category: 'graphic', src: '/elements/grids/eyes behind the camera.png', title: 'Eyes Behind Camera' },
    { id: 9, category: 'graphic', src: '/elements/designs/Album cover 2.jpg', title: 'Album Cover' },
    { id: 10, category: 'graphic', src: '/elements/designs/baatcheet.png', title: 'Baatcheet' },
    { id: 11, category: 'graphic', src: '/elements/designs/baatein.png', title: 'Baatein' },
    { id: 12, category: 'graphic', src: '/elements/designs/doors.png', title: 'Doors' },
    { id: 13, category: 'graphic', src: '/elements/designs/enrique iglesias.png', title: 'Enrique Iglesias' },
    { id: 14, category: 'graphic', src: '/elements/designs/front page.png', title: 'Front Page' },
    { id: 15, category: 'graphic', src: '/elements/designs/Main grid-16.png', title: 'Main Grid' },
    { id: 16, category: 'graphic', src: '/elements/designs/MELANIE.png', title: 'Melanie' },
    { id: 17, category: 'graphic', src: '/elements/designs/poster2-01.png', title: 'Poster 2' },
    { id: 18, category: 'graphic', src: '/elements/designs/SIMAR 2.png', title: 'Simar 2' },
    { id: 19, category: 'graphic', src: '/elements/designs/SMILE.png', title: 'Smile' },
    { id: 20, category: 'graphic', src: '/elements/designs/squirral love design.png', title: 'Squirral Love' },
    { id: 21, category: 'graphic', src: '/elements/designs/VOGUE.png', title: 'Vogue' },
    { id: 22, category: 'graphic', src: '/elements/designs/website is live-01.png', title: 'Website is Live' },

    // AI / Development
    {
        id: 24,
        category: 'ai',
        title: 'Diamond Price Predictor',
        shortDesc: 'End-to-end ML pipeline with 98% accuracy.',
        description: `Developed an end-to-end machine learning system to automate diamond pricing using a dataset of 53,940 records. 
        After rigorous data cleaning, deduplication, and outlier removal, I engineered a pipeline to evaluate 7 regression and 8 classification models. XGBoost emerged as the top performer for both tasks, achieving a 98.11% R2 score for price prediction and 96.01% accuracy for quality classification. The suite included diverse architectures from Linear Regression and SVMs to MLP Neural Networks.
        To conclude the lifecycle, I deployed the optimal regression model into a Streamlit web application, providing real-time, data-driven valuations for the gemstone industry.`,
        tags: ['XGBoost', 'Python', 'Streamlit', 'Scikit-Learn'],
        src: '/elements/ai/diamond.jpg',
        link: 'https://github.com/Spathneja21/Diamond_price_predictor.git'
    },
    {
        id: 23,
        category: 'ai',
        title: 'S.A.A.R.T.H.I. AI',
        shortDesc: 'Coming Soon',
        description: `Ever thought of having a personal manager?
        Well, here it is! An AI-powered personal manager that can help you with your daily tasks, schedule, and more.
        Coming soon...`,
        src: '/elements/ai/saarthi.jpg',
    },
    {
        id: 25,
        category: 'ai',
        title: 'SafeSight',
        shortDesc: 'An end-to-end pipeline that processes uploaded videos to detect helmet-compliance violations.',
        description: `SafeSight is a multi-stage computer vision pipeline that processes uploaded videos to detect helmet-compliance violations. 
                      It is built without YOLO — instead using Faster R-CNN (ResNet-50 FPN backbone) combined with a custom rule-based spatial reasoning engine that infers whether a person is wearing a helmet.
                      Used 5000 images data and the accuracy is 82.6% for the detection of helmets in images`,
        tags: ['FasterRCNN', 'ReactJs', 'HuggingFace', 'Flask'],
        src: '/elements/ai/safesight.png',
        link: 'https://safesight-two.vercel.app/'
    },
    {
        id: 26,
        category: 'ai',
        title: 'Fine Arts and Photography Website',
        shortDesc: 'Official Website for Fine Arts and Photography Society',
        description: `Built a website for Fine Arts and Photography Society, Thapar University. 
                      A platform for artists to showcase their work and for the society to manage its events and members.`,
        tags: ['Replit', 'TailwindCSS', 'Typescript'],
        src: '/elements/ai/faps.png',
        link: 'https://faps-website--ayushjuneja11.replit.app/'
    },
    {
        id: 27,
        category: 'ai',
        title: 'Market Place Navigation Bot',
        shortDesc: 'Details Coming Soon',
        src: '/elements/ai/ros.png',
    },
];

export default works;
