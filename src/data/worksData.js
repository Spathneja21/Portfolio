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
        id: 27,
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
        shortDesc: 'An Computer vision system to detect helmet-compliance violations.',
        description: `SafeSight is a multi-stage computer vision pipeline that processes uploaded videos to detect helmet-compliance violations. 

### How it works

It is built without YOLO — instead using Faster R-CNN (ResNet-50 FPN backbone) combined with a custom rule-based spatial reasoning engine that infers whether a person is wearing a helmet.

### Motivation
Industrial environments like warehouses and factories are high-risk zones where strict safety compliance—such as wearing helmets—is essential. However, _**manual monitoring is often inconsistent, error-prone, and not scalable**_ across large facilities. As a result, safety violations frequently go unnoticed until accidents occur.

SafeSight automates safety monitoring using computer vision to detect helmet compliance in real time. It enables continuous surveillance through existing camera systems, reduces reliance on manual supervision, and improves overall workplace safety efficiently.

### System Architecture Flowcharts![SafeSight Example](/elements/ai/safesight/system_architecture.png)
**The Backend Flowchart** 
![SafeSight Example](/elements/ai/safesight/backend_flowchart.png)

### Pipeline Walkthrough

**Step 1** — Upload & Job Creation
The user uploads a video through the frontend. The Flask backend:

1. Saves the file to uploads/ 
2. Generates a short job_id (UUID prefix)
3. Initialises an in-memory job record
4. Spawns a background daemon thread to process the video
5. Returns job_id immediately so the frontend can poll status

**Step 2** — Frame Sampling
Reading every frame from a long video is expensive. The system uses frame skipping:

1. Only frames where frame_idx % FRAME_SKIP == 0 are sent to the model
2. Skipped frames reuse the previous frame's bounding boxes
This gives 5× reduction in inference calls with minimal visual impact

**Step 3** — Batch Inference
Sampled frames are buffered until BATCH_SIZE = 8 accumulate, then sent to Faster R-CNN in a single GPU batch. This is significantly faster than one-by-one inference.

**Step 4** — Helmet Reasoning Engine
The raw detections are passed to the Helmet Reasoning Engine (see next section).

**Step 5** — Annotation & Video Reconstruction
Each frame is annotated with:

1. Gray boxes for detected persons
2. Green boxes for detected helmets
3. Red boxes with NO HELMET XX% for violations
4. A red alert banner across the top if any violation is found in that frame
5. The frames are written in order to an mp4v output file.

**Step 6** — Violation Aggregation
Individual frame violations are grouped by timestamp. Consecutive seconds are merged into ranges (e.g., 00:12 - 00:15), giving a clean, human-readable violation report.

**Core Logic: Helmet Reasoning Engine**
![SafeSight Example](/elements/ai/safesight/core_logic.png)

**Training Architecture**
![SafeSight Example](/elements/ai/safesight/training_architecture.png)

- **Dataset split:** 90% train / 10% validation
- **Annotation format:** Pascal VOC XML
- **Augmentations:** resize, horizontal flip, brightness/contrast jitter
- **Optimizer:** SGD with momentum
- **Checkpoint:** best validation loss saved as _best_model_v4.pth_
- **Model source:** available on Hugging Face (Spathneja21/fasterRCNN)


### Performance & Metrics

We used a **5000-image dataset** and achieved the following metrics:
* **Accuracy:** 82.6% for the detection of helmets in images
* **Robustness:** Handles varied lighting conditions
* **Deployment:** Fully serverless backend with React frontend

*This makes it ideal for automated construction site safety checks.*`,
        tags: ['FasterRCNN', 'ReactJs', 'HuggingFace', 'Flask'],
        src: '/elements/ai/safesight.png',
        link: 'https://safesight-two.vercel.app/'
    },
    {
        id: 26,
        category: 'ai',
        title: 'Fine Arts and Photography Website',
        shortDesc: 'Official Website for Fine Arts and Photography Society, Thapar University',
        description: `Built a website for Fine Arts and Photography Society, Thapar University. 
                      A platform for artists to showcase their work and for the society to manage its events and members.`,
        tags: ['Replit', 'TailwindCSS', 'Typescript'],
        src: '/elements/ai/faps.png',
        link: 'https://faps-website--ayushjuneja11.replit.app/'
    },
    {
        id: 24,
        category: 'ai',
        title: 'Market Place Navigation Bot',
        shortDesc: 'Details Coming Soon',
        src: '/elements/ai/ros.png',
    },
];

export default works;
