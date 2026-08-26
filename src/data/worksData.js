const works = [
    // Graphic Design - Posters
    { id: 1, category: 'graphic', src: '/elements/posters/marshM.webp', title: 'MarshM' },
    { id: 2, category: 'graphic', src: '/elements/posters/simar-01.webp', title: 'Simar 01' },
    { id: 3, category: 'graphic', src: '/elements/posters/simar-02.webp', title: 'Simar 02' },
    { id: 4, category: 'graphic', src: '/elements/posters/simar-03.webp', title: 'Simar 03' },
    // Graphic Design - Grids
    { id: 5, category: 'graphic', src: '/elements/grids/Artboard 1 (2).webp', title: 'Artboard V2' },
    { id: 6, category: 'graphic', src: '/elements/grids/Artboard 1 (3).webp', title: 'Eyes behind the Camera' },
    { id: 7, category: 'graphic', src: '/elements/grids/RECRUITMENT grid full-01.webp', title: 'Recruitment Grid' },
    { id: 8, category: 'graphic', src: '/elements/grids/eyes behind the camera.webp', title: 'Eyes Behind Camera' },
    { id: 9, category: 'graphic', src: '/elements/designs/Album cover 2.webp', title: 'Album Cover' },
    { id: 10, category: 'graphic', src: '/elements/designs/baatcheet.webp', title: 'Baatcheet' },
    { id: 11, category: 'graphic', src: '/elements/designs/baatein.webp', title: 'Baatein' },
    { id: 12, category: 'graphic', src: '/elements/designs/doors.webp', title: 'Doors' },
    { id: 13, category: 'graphic', src: '/elements/designs/enrique iglesias.webp', title: 'Enrique Iglesias' },
    { id: 14, category: 'graphic', src: '/elements/designs/front page.webp', title: 'Front Page' },
    { id: 16, category: 'graphic', src: '/elements/designs/MELANIE.webp', title: 'Melanie' },
    { id: 17, category: 'graphic', src: '/elements/designs/poster2-01.webp', title: 'Poster 2' },
    { id: 18, category: 'graphic', src: '/elements/designs/SIMAR 2.webp', title: 'Simar 2' },
    { id: 19, category: 'graphic', src: '/elements/designs/SMILE.webp', title: 'Smile' },
    { id: 20, category: 'graphic', src: '/elements/designs/squirral love design.webp', title: 'Squirral Love' },
    { id: 21, category: 'graphic', src: '/elements/designs/VOGUE.webp', title: 'Vogue' },
    { id: 22, category: 'graphic', src: '/elements/designs/website is live-01.webp', title: 'Website is Live' },

    // AI / Development
    
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
        id: 27,
        category: 'ai',
        title: 'Fine Arts and Photography Website',
        shortDesc: 'Official Website for Fine Arts and Photography Society, Thapar University',
        description: `Built a website for Fine Arts and Photography Society, Thapar University. 
                      A platform for artists to showcase their work and for the society to manage its events and members.`,
        tags: ['Replit', 'TailwindCSS', 'Typescript'],
        src: '/elements/ai/faps.png',
        link: 'https://faps-website.vercel.app/'
    },
    {
        id: 26,
        category: 'ai',
        title: 'Unexplored Field Navigator',
        shortDesc: 'Details Coming Soon',
    },
    {
        id: 24,
        category: 'ai',
        title: 'Market Place Navigation Bot',
        shortDesc: 'Autonomous differential-drive robot that navigates supermarket aisles using SLAM and Nav2.',
        description: `Design and simulation of a differential-drive autonomous mobile robot for large supermarkets, featuring SLAM-based mapping and Nav2 autonomous navigation in ROS 2.

### Overview
The robot assists customers by autonomously navigating to product locations within a simulated supermarket — modeled with shelving aisles, a checkout counter, product crates, and a customer, all built in Gazebo Sim.

### Key Features
- **Custom CAD-designed chassis** — multi-layer body modeled in Fusion 360, exported as STL meshes and converted to URDF via Xacro
- **360° GPU LiDAR** — 360 samples at 10 Hz, 0.1–10 m range with Gaussian noise for realistic aisle mapping
- **SLAM Toolbox** — online synchronous SLAM with Ceres-based scan matching and loop closure to build the store map
- **Full Nav2 stack** — AMCL localisation, NavFn global planning, DWB local control, and a collision monitor for safe navigation around customers
- **ROS–Gazebo bridge** — bidirectional topic bridges (odometry, joint states, LiDAR, cmd_vel, TF) for seamless sim-to-ROS communication

### Why Differential Drive?
Supermarket aisles are narrow (1.5–2.5 m), so the robot needed to be maneuverable without the added complexity of mecanum or Ackermann steering. Differential drive gives zero-turn-radius maneuvering with just two motors and full support from ROS's *diff_drive_controller*.

### Pipeline
LiDAR scans and odometry feed SLAM Toolbox to build a 0.05 m/pixel occupancy grid map of the store. Once mapped, Nav2's AMCL localises the robot on that map, NavFn plans a global path to the target shelf, and DWB generates real-time velocity commands — with a collision monitor watching for customers stepping into the aisle.

*This makes it ideal for real-time, obstacle-aware in-store navigation.*`,
        tags: ['ROS 2', 'Gazebo', 'SLAM Toolbox', 'Nav2'],
        src: '/elements/ai/ros.png',
        link: 'https://github.com/ctxnn/Ros-AMR-Mobile-Robot/tree/fix-nav2-compatibility'
    },
    {
        id: 28,
        category: 'blogs',
        title: 'The Closed-Loop Workflow: A better approach to use Gemini and NotebookLM together',
        shortDesc: 'An approach to use Gemini and NotebookLM together',
        description: `Most workflows treat AI tools as isolated steps — you ask Gemini a question, then separately dump sources into NotebookLM, with no real feedback loop between the two. This post walks through a closed-loop approach that lets Gemini and NotebookLM inform each other continuously, so research, synthesis, and writing stay connected instead of scattered across disconnected sessions.`,
        src: '/elements/blogs/1.png',
        link: 'https://shubhampathneja21.substack.com/p/the-closed-loop-workflow-a-better'
    },
    {
        id: 29,
        category: 'blogs',
        title: 'Keras-Tuner: Letting Your Neural Network Tune Itself',
        shortDesc: 'Why guessing the number of neurons, layers, and optimizers by hand is a thing of the past',
        description: `Picking the right number of layers, neurons, and optimizer settings by hand is slow and mostly guesswork. This post covers how Keras-Tuner automates that search, letting the framework explore the hyperparameter space systematically instead of manually trying configurations one at a time.`,
        src: '/elements/blogs/2.png',
        link: 'https://shubhampathneja21.substack.com/p/keras-tuner-letting-your-neural-network'
    },
    {
        id: 29,
        category: 'blogs',
        title: 'Stop Your AI from Over-Engineering: Meet Ponytail',
        shortDesc: 'A lazy supportive senior to make your code compress without compromising the logic.',
        description: `Ponytail is a tool that helps you compress your code without losing the logic. It identifies redundant or overly complex code patterns and suggests simpler alternatives, making your codebase cleaner and more maintainable.`,
        src: '/elements/blogs/2.png',
        link: 'https://shubhampathneja21.substack.com/p/stop-your-ai-from-over-engineering'
    },
];

export default works;
