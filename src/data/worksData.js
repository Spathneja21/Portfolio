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
        section: 'projects',
        order: 2,
        title: 'SAARTHI (COMING SOON)',
        subtitle: 'Smart AI Assistant for Task Handling and Information',
        meta: 'June 2025 – Present · Team Lead',
        hideLead: true,
        shortDesc: 'Engineering an intelligent AI task-scheduling assistant tailored for college students juggling coursework, deadlines, and personal commitments.',
        bullets: [
            'Designed a custom weighted-scoring model powered by reinforcement learning that learns and adapts to individual student behavior over time',
            'Full-stack architecture: Flutter frontend, PostgreSQL + Firebase backend, NLP/LLM-based input parsing for text and voice, cloud-deployed decision models',
        ],
        description: `Engineering an intelligent AI task-scheduling assistant tailored for college students juggling coursework, deadlines, and personal commitments.

- Designed a custom weighted-scoring model powered by reinforcement learning that learns and adapts to individual student behavior over time
- Full-stack architecture: Flutter frontend, PostgreSQL + Firebase backend, NLP/LLM-based input parsing for text and voice, cloud-deployed decision models`,
        tags: ['Flutter', 'PostgreSQL', 'Firebase', 'Reinforcement Learning'],
        src: '/elements/ai/saarthi.jpg',
        media: [
            { type: 'video', src: '/elements/website media/SAARTHI/app demo.mp4', caption: 'App demo' },
        ],
    },
    {
        id: 25,
        category: 'ai',
        section: 'projects',
        order: 3,
        title: 'SafeSight',
        meta: 'January 2026 – April 2026',
        shortDesc: 'Built a real-time behavioral anomaly detection system for industrial safety monitoring, deployed on existing CCTV infrastructure using Faster R-CNN with a ResNet50 backbone.',
        bullets: [
            'Detects and classifies anomalous behavior (e.g. helmet-compliance violations) directly from standard camera feeds',
            'Generates automated violation reports with timestamps, severity, and confidence scores',
        ],
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
        link: 'https://safesight-two.vercel.app/',
        homeGallery: [
            '/elements/website media/safesight/home page of website.png',
            '/elements/website media/safesight/violation report.png',
        ],
        media: [
            { type: 'image', src: '/elements/website media/safesight/home page of website.png', caption: 'Landing page' },
            { type: 'video', src: '/elements/website media/safesight/sample output of pipeline.mp4', caption: 'Detection output with bounding boxes' },
            { type: 'image', src: '/elements/website media/safesight/violation report.png', caption: 'Violation report UI' },
        ],
    },
    {
        id: 27,
        category: 'ai',
        section: 'projects',
        order: 5,
        title: 'Fine Arts and Photography Website',
        shortDesc: 'Official Website for Fine Arts and Photography Society, Thapar University',
        description: `Built a website for Fine Arts and Photography Society, Thapar University.
                      A platform for artists to showcase their work and for the society to manage its events and members.`,
        tags: ['Replit', 'TailwindCSS', 'Typescript'],
        src: '/elements/ai/faps.png',
        link: 'https://faps-website.vercel.app/'
    },
    {
        id: 24,
        category: 'ai',
        section: 'projects',
        order: 1,
        title: 'Marketplace Navigation Robot Simulator',
        meta: 'March 2026 – June 2026',
        hideLead: true,
        shortDesc: 'Designed and simulated a differential-drive autonomous mobile robot (AMR) in MuJoCo for indoor supermarket navigation.',
        bullets: [
            'Implemented 2D LiDAR-based SLAM to build and continuously update an occupancy map of the supermarket',
            'Integrated the ROS2 Nav2 stack for global path planning to target product locations, with local planning for obstacle avoidance',
        ],
        description: `Designed and simulated a differential-drive autonomous mobile robot (AMR) in MuJoCo, targeting the problem of indoor navigation and product-location assistance in large supermarket environments. The project addressed a practical retail-robotics use case: enabling a robot to autonomously navigate crowded, aisle-structured indoor spaces while helping customers or store staff locate specific products efficiently, rather than relying on static store maps or manual search.

![MuJoCo AMR render](/elements/website%20media/marketplace%20simulator/robot%20model.png)

Built the robot's low-level motion model around a differential-drive kinematic setup within MuJoCo's physics simulation, allowing realistic modeling of wheel dynamics, friction, and collision response — providing a more physically grounded testbed than purely kinematic simulators, and surfacing control challenges (wheel slip, momentum, turning radius constraints) that are typically hidden in idealized simulations.

![LiDAR raycast simulation](/elements/website%20media/marketplace%20simulator/mujoco%20simulation.png)

Implemented 2D LiDAR-based SLAM to construct and continuously update an occupancy map of the supermarket layout, allowing the robot to localize itself and build a persistent representation of aisles, shelving units, and open walkways as it moved through the environment. This map formed the foundation for both global navigation (moving between distant sections of the store) and local reactive avoidance of dynamic obstacles such as customers, carts, or staff.

Integrated the ROS2 Nav2 stack to handle global and local path planning on top of the SLAM-generated map — using Nav2's global planner to compute efficient routes to target product locations or store sections, and its local planner/costmap layers to handle real-time obstacle avoidance and smooth trajectory execution as conditions in the aisles changed dynamically.

![Rviz Nav2 stack in action](/elements/website%20media/marketplace%20simulator/rviz%20nav2%20navigation.png)

The full system was developed on ROS2 Humble, with Rviz used throughout development to visualize the SLAM map, planned global/local paths, and robot state during simulation runs, enabling rapid debugging and iteration before considering real-world deployment.

**Tech stack:** ROS2 Humble, SLAM, Nav2, Rviz, MuJoCo, Differential-Drive Kinematics`,
        tags: ['MuJoCo', 'ROS 2', 'Nav2', 'SLAM'],
        src: '/elements/website media/marketplace simulator/robot model.png',
        homeGallery: [
            '/elements/website media/marketplace simulator/mujoco simulation.png',
            '/elements/website media/marketplace simulator/rviz nav2 navigation.png',
        ],
    },
    {
        id: 30,
        category: 'ai',
        section: 'experience',
        order: 1,
        title: 'Robotics Intern @ IIT Mandi',
        subtitle: 'Last-Mile Delivery Robot',
        meta: 'CAIR Lab · May 2026 – July 2026',
        hideLead: true,
        shortDesc: "Designed and implemented an end-to-end autonomous navigation and perception pipeline for the Clearpath Husky A200, deployed on a Jetson AGX Orin for real-time inference using CUDA's parallel processing.",
        bullets: [
            "Integrated Autoware's perception and planning stack with NVIDIA TensorRT-optimized inference",
            "Validated the driving stack in the AWSIM simulator before hardware trials",
            "Built a GPS-based localization and tracking module that streams the robot's live position to a host website, densifying raw GPS waypoints into smooth, continuous trajectories for improved path navigation",
        ],
        description: `Designed and implemented an end-to-end autonomous navigation and perception pipeline for the Clearpath Husky A200 mobile robot, targeting real-world last-mile delivery scenarios. The system integrated Autoware's perception and planning stack with NVIDIA TensorRT-optimized inference, deployed and accelerated on a Jetson AGX Orin to enable real-time performance under onboard compute constraints, using CUDA for low-latency parallel processing of sensor data.

![Husky A200 hardware](/elements/website%20media/iit%20mandi/husky.png)

Built a GPS-based localization and tracking module that interfaced with a host website to stream and visualize the robot's live position, combined with a dense path-following controller that translated GPS waypoints into smooth, continuous trajectories rather than sparse point-to-point navigation — improving path adherence and reducing deviation in outdoor, unstructured environments.

![GPS live-tracking map](/elements/website%20media/iit%20mandi/gps%20tracking%20pic.jpeg)

To handle dynamic and static obstacles encountered during delivery runs, developed an obstacle avoidance algorithm that was tightly fused with the GPS path-tracking system, allowing the robot to dynamically replan or adjust its trajectory around obstacles while still converging back to the intended GPS path — directly addressing core challenges in the Last Mile Delivery Problem such as maintaining route efficiency while ensuring safe navigation through semi-structured, real-world terrain.

![Rviz path-planning](/elements/website%20media/iit%20mandi/husky%20simulation.png)`,
        tags: ['Autoware', 'Jetson AGX Orin', 'TensorRT', 'AWSIM'],
        src: '/elements/website media/iit mandi/husky.png',
        secondaryImage: '/elements/website media/iit mandi/gps tracking pic.jpeg',
        homeGallery: [
            '/elements/website media/iit mandi/scene seg trial.png',
        ],
        media: [
            { type: 'image', src: '/elements/website media/iit mandi/scene seg trial.png', caption: 'Autoware segmentation output' },
            { type: 'image', src: '/elements/website media/iit mandi/awsim simulation.png', caption: 'AWSIM simulation run' },
            { type: 'video', src: '/elements/website media/iit mandi/gps tracking video.mp4', caption: 'GPS live-tracking' },
            { type: 'image', src: '/elements/website media/iit mandi/iit mandi lab.png', caption: 'CAIR Lab, IIT Mandi' },
            { type: 'image', src: '/elements/website media/iit mandi/my desk setup.png', caption: 'Workstation setup' },
            { type: 'image', src: '/elements/website media/iit mandi/my picture in iit mandi.png', caption: 'On site at IIT Mandi' },
        ],
    },
    {
        id: 31,
        category: 'ai',
        section: 'experience',
        order: 2,
        title: 'Autonomous Exploration Bot',
        meta: 'Robotics Lab, TIET · July 2026 – Present',
        hideLead: true,
        shortDesc: 'Architecting an autonomous exploration and SLAM pipeline using RRT-based algorithms, enabling the differential-drive Trossen Robotics LoCoBot WX250 (6DOF) to navigate unknown indoor workspaces.',
        bullets: [
            'Built real-time occupancy mapping using 2D LiDAR for large-scale spatial structure, fused with RGB-D depth camera data',
            'Next step: implementing the TARE exploration method (Cao, Zhu, Choset & Zhang) to improve exploration efficiency',
        ],
        description: `Architected an autonomous exploration and SLAM pipeline enabling the Trossen Robotics LoCoBot WX250 6DOF to map and navigate entirely unknown indoor workspaces without any prior environmental knowledge, under the guidance of Dr. Raja Rout. The core exploration strategy was built around Rapidly-exploring Random Tree (RRT) based algorithms, which incrementally grew a tree of feasible paths into unmapped space, allowing the robot to efficiently identify and navigate toward unexplored regions rather than relying on exhaustive or purely reactive search. This RRT-based frontier selection formed the backbone of the active exploration behavior, continuously steering the robot toward the most informative unmapped areas while avoiding redundant revisits.

![LoCoBot hardware](/elements/website%20media/robotics%20lab/locobot%20in%20lab%20pic.png)

Used 2D LiDAR scan data as the primary source for real-time occupancy mapping, building and continuously updating a consistent map of the environment as the robot explored. The LiDAR-based map served as the geometric backbone for the SLAM pipeline, providing reliable, long-range structural information about walls, corridors, and open regions even in varying lighting conditions.

![Occupancy map / Rviz output](/elements/website%20media/robotics%20lab/posssible%20paths%20in%20map.png)

In parallel, integrated the RGB-D depth camera as the primary sensor for close-range navigation and obstacle avoidance — using dense depth data to detect obstacles directly in the robot's path, correct short-horizon trajectories, and safely navigate around dynamic or previously unmapped obstacles that the LiDAR's 2D scan plane might miss (e.g. low-lying or overhanging objects). This combination allowed the system to use LiDAR for large-scale spatial mapping while relying on the depth camera for fine-grained, real-time navigation decisions.

![Point cloud visualization](/elements/website%20media/robotics%20lab/depth%20camera%20data.png)

The full pipeline was implemented on ROS2 Galactic, built on top of the Nav2 stack for costmap management and local trajectory execution, with custom RRT-based exploration logic layered on top for frontier/goal selection in unmapped regions. Rviz was used extensively during development to visualize the growing RRT tree, the LiDAR-built occupancy map, and depth-camera-based obstacle detections in real time. Motion execution was grounded in classical control systems techniques to ensure smooth, stable trajectory tracking on the physical hardware.

![LoCoBot CAD model](/elements/website%20media/robotics%20lab/locobot%20model.png)

**Tech stack:** ROS, SLAM, RRT-based exploration, Rviz, Nav2, 2D LiDAR mapping, RGB-D depth-based navigation, Control Systems`,
        tags: ['RRT', 'SLAM', 'LiDAR', 'RGB-D'],
        src: '/elements/website media/robotics lab/locobot in lab pic.png',
        secondaryImage: '/elements/website media/robotics lab/posssible paths in map.png',
        homeGallery: [
            '/elements/website media/robotics lab/depth camera data.png',
        ],
        media: [
            { type: 'video', src: '/elements/website media/robotics lab/nav2 goal working on hardware.mp4', caption: 'Nav2 goal execution on hardware' },
        ],
    },
    {
        id: 32,
        category: 'ai',
        section: 'other',
        order: 1,
        title: 'LoCoBot Robotic Arm — Trajectory Planning & Optimization',
        shortDesc: 'Trajectory planning and optimization work on the Trossen Robotics LoCoBot arm, including joint-angle and end-effector path analysis.',
        media: [
            { type: 'image', src: '/elements/website media/extra projects/robot arm simulation.png', caption: 'Arm simulation' },
            { type: 'image', src: '/elements/website media/extra projects/robot arm trajectory tracking.png', caption: 'Trajectory tracking' },
        ],
    },
    {
        id: 33,
        category: 'ai',
        section: 'other',
        order: 2,
        title: 'Flowcraft',
        shortDesc: 'A private, Miro-style board workspace built for documenting personal project work — supports unlimited boards in a single-user workspace.',
        media: [
            { type: 'image', src: '/elements/website media/extra projects/safesight boards page.png', caption: 'Boards workspace' },
            { type: 'image', src: '/elements/website media/extra projects/safesight login.png', caption: 'Login page' },
        ],
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
