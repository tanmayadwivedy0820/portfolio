export const profile = {
  name: "Tanmaya Dwivedy",
  tagline: "Machine Learning · Data Science · Generative AI",
  summary:
    "Computer Science student building and deploying data-driven applications with Python, FastAPI, and Streamlit — with a focus on machine learning, deep learning, and generative AI.",
  location: "Odisha, India",
  meta: ["Odisha, India", "B.Tech CSE · KIIT"],
  email: "23052363@kiit.ac.in",
  phone: "+91 93487 18730",
  linkedin: "https://www.linkedin.com/in/tanmaya-dwivedy-b0b4a1325/",
  github: "https://github.com/tanmayadwivedy0820",
  resume: "/assets/resume.pdf",
};

export const about = {
  lead:
    "I'm a motivated Computer Science student with hands-on experience in data analysis, machine learning, and predictive modeling.",
  body:
    "I enjoy taking a problem end-to-end — from cleaning raw data and exploratory analysis through model building, validation, and deployment as a usable application. I have strong analytical and problem-solving abilities and a growing interest in deep learning and generative AI systems such as RAG and LLM applications.",
};

export const skills = [
  { title: "Machine Learning & Deep Learning", body: "Scikit-Learn, Neural Networks, Transformer Architecture, model validation & tuning" },
  { title: "Generative AI", body: "LLM Fundamentals, Prompt Engineering, Retrieval-Augmented Generation (RAG), LangChain" },
  { title: "Data Analysis", body: "SQL, Exploratory Data Analysis (EDA), Statistical Analysis, Matplotlib, Seaborn" },
  { title: "Languages & Libraries", body: "Python, NumPy, Pandas, JavaScript, HTML, CSS" },
  { title: "Tools & Platforms", body: "Git, GitHub, AWS EC2, Streamlit, FastAPI" },
  { title: "Professional", body: "Problem Solving, Analytical Thinking, Communication, Team Collaboration" },
];

export const projects = [
  {
    id: "P1",
    title: "MedBuddy.ML — Heart Disease Risk Prediction",
    body:
      "An end-to-end ML application predicting heart disease risk. Built data cleaning, exploratory analysis, and outlier detection on healthcare datasets, then trained and evaluated supervised models using robust validation and domain-relevant metrics like Recall and F1. Converted notebooks into modular Python scripts and deployed via a FastAPI backend and Streamlit frontend on AWS EC2 for real-time predictions.",
    metrics: ["End-to-end ML", "FastAPI + Streamlit", "Deployed on AWS EC2"],
    tags: ["Python", "Scikit-Learn", "FastAPI", "Streamlit", "AWS EC2"],
    link: "https://github.com/tanmayadwivedy0820/med-buddy-ml",
  },
  {
    id: "P2",
    title: "House Price Prediction System",
    body:
      "A regression-based ML application predicting housing prices from structured real-estate data. Performed EDA with Matplotlib and Seaborn, built a robust preprocessing pipeline (ColumnTransformer, One-Hot Encoding, Standard Scaling, Simple Imputer), and selected the best model using MAE, RMSE, and R². Applied cross-validation and hyperparameter tuning to improve generalization.",
    metrics: ["Full preprocessing pipeline", "Cross-validated", "Tuned regression"],
    tags: ["Python", "Regression", "Pipelines", "Cross-Validation"],
    link: "https://github.com/tanmayadwivedy0820/house-price-prediction",
  },
  {
    id: "P3",
    title: "Customer Churn Prediction System",
    body:
      "A supervised model predicting customer churn from behavioral and usage data. Handled class imbalance with SMOTE, engineered features, and evaluated models with 5-fold cross-validation. Compared multiple classification algorithms and finalized an optimized Random Forest classifier to support data-driven retention strategies.",
    metrics: ["SMOTE-balanced", "5-fold CV", "Optimized Random Forest"],
    tags: ["Python", "SMOTE", "Random Forest", "Classification"],
    link: "https://github.com/tanmayadwivedy0820/customer-churn-prediction",
  },
];

export const education = [
  {
    when: "Jul 2023 – Apr 2027",
    title: "B.Tech, Computer Science",
    org: "Kalinga Institute of Industrial Technology (KIIT)",
    detail: "CGPA 8.8/10 (88%, till Sem 6). Active in technical clubs and coding competitions.",
  },
  {
    when: "Jun 2021 – Apr 2023",
    title: "Intermediate",
    org: "BridgeWell Global School, BBSR, Odisha",
    detail: "",
  },
  {
    when: "Matriculation",
    title: "Secondary",
    org: "DAV Public School, NTPC/TTPS, Thermal/Talcher, Odisha",
    detail: "",
  },
];

export const certifications = [
  "Machine Learning Bootcamp (2026)",
  "The Complete SQL Bootcamp (2026)",
  "Data Structures & Algorithms (DSA) using Java",
];

export const languages = "English, Hindi, Odia";