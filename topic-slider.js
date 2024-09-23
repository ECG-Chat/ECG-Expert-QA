const topics = [
    "Professional Knowledge Assessment",
    "Cardiology Basics",
    "Medical Fundamentals in Cardiology",
    "ECG Expertise",
    "ECG Analysis Skills",
    "ECG-Text Diagnosis Correlation",
    "Cross-modal Diagnosis",
    "Complex Diagnostics",
    "Challenging Case Analysis",
    "Complex Algorithm Reasoning",
    "Long-text Diagnosis",
    "Medical Inquiries",
    "Memory Correction",
    "Doctor-Patient Dialogue",
    "Cardiology Entity Extraction",
    "Medical Entity Extraction",
    "Medical Risk Assessment",
    "Hypothetical Decision Making",
    "Psychological Impact",
    "Risk Assessment Generation",
    "Patient Informed Consent",
    "Patient Privacy",
    "Diagnosis and Complex Reasoning Evaluation"
];

function initTopicSliders() {
    console.log("Initializing topic sliders");
    const sliders = document.querySelectorAll('.topic-slider');
    console.log("Found sliders:", sliders.length);
    sliders.forEach((slider, index) => {
        console.log("Processing slider", index);
        const shuffledTopics = [...topics].sort(() => Math.random() - 0.5);
        const content = shuffledTopics.join(' • ');
        slider.innerHTML = `${content} • ${content} • ${content} • ${content}`;
        console.log("Slider content set for", index);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM content loaded");
    initTopicSliders();
});