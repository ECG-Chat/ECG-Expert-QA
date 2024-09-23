const leaderboardData = [
    { 
        rank: 1, 
        model: "GPT-4", 
        url: "https://openai.com/gpt-4",
        lab: "OpenAI",
        date: "2024-01-15",
        inDomain: 0.95, 
        outOfDomain: 0.92, 
        overall: 0.94 
    },
    { 
        rank: 2, 
        model: "Claude 2", 
        url: "https://www.anthropic.com",
        lab: "Anthropic",
        date: "2024-01-10",
        inDomain: 0.93, 
        outOfDomain: 0.90, 
        overall: 0.92 
    },
    { 
        rank: 3, 
        model: "PaLM 2", 
        url: "https://ai.google/discover/palm2",
        lab: "Google AI",
        date: "2024-01-05",
        inDomain: 0.91, 
        outOfDomain: 0.88, 
        overall: 0.90 
    },
    { 
        rank: 4, 
        model: "BERT-Large", 
        url: "https://github.com/google-research/bert",
        lab: "Google Research",
        date: "2023-12-20",
        inDomain: 0.89, 
        outOfDomain: 0.85, 
        overall: 0.87 
    },
    { 
        rank: 5, 
        model: "RoBERTa", 
        url: "https://github.com/pytorch/fairseq/tree/main/examples/roberta",
        lab: "Facebook AI Research",
        date: "2023-12-15",
        inDomain: 0.87, 
        outOfDomain: 0.83, 
        overall: 0.85 
    },
    { 
        rank: 6, 
        model: "XLNet", 
        url: "https://github.com/zihangdai/xlnet",
        lab: "Carnegie Mellon University & Google Brain",
        date: "2023-12-10",
        inDomain: 0.85, 
        outOfDomain: 0.81, 
        overall: 0.83 
    },
    { 
        rank: 7, 
        model: "ELECTRA", 
        url: "https://github.com/google-research/electra",
        lab: "Google Research",
        date: "2023-12-05",
        inDomain: 0.83, 
        outOfDomain: 0.79, 
        overall: 0.81 
    },
    { 
        rank: 8, 
        model: "T5", 
        url: "https://github.com/google-research/text-to-text-transfer-transformer",
        lab: "Google Research",
        date: "2023-11-30",
        inDomain: 0.81, 
        outOfDomain: 0.77, 
        overall: 0.79 
    },
    { 
        rank: 9, 
        model: "ALBERT", 
        url: "https://github.com/google-research/albert",
        lab: "Google Research",
        date: "2023-11-25",
        inDomain: 0.79, 
        outOfDomain: 0.75, 
        overall: 0.77 
    },
    { 
        rank: 10, 
        model: "DistilBERT", 
        url: "https://github.com/huggingface/transformers/tree/main/examples/research_projects/distillation",
        lab: "Hugging Face",
        date: "2023-11-20",
        inDomain: 0.77, 
        outOfDomain: 0.73, 
        overall: 0.75 
    },
    { 
        rank: 11, 
        model: "ERNIE 3.0", 
        url: "https://github.com/PaddlePaddle/ERNIE",
        lab: "Baidu Research",
        date: "2023-11-15",
        inDomain: 0.75, 
        outOfDomain: 0.71, 
        overall: 0.73 
    },
    { 
        rank: 12, 
        model: "MedBERT", 
        url: "https://huggingface.co/microsoft/BiomedNLP-PubMedBERT-base-uncased-abstract-fulltext",
        lab: "Microsoft Research",
        date: "2023-11-10",
        inDomain: 0.73, 
        outOfDomain: 0.69, 
        overall: 0.71 
    }
];

function populateLeaderboard() {
    const leaderboardBody = document.getElementById('leaderboardBody');
    leaderboardData.forEach(entry => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>
                <div class="rank">${entry.rank}</div>
                <div class="date">${entry.date}</div>
            </td>
            <td>
                <div class="model-name">${entry.model}</div>
                <div class="model-info">
                    <a href="${entry.url}" target="_blank">${entry.url}</a><br>
                    ${entry.lab}
                </div>
            </td>
            <td>${entry.inDomain.toFixed(2)}</td>
            <td>${entry.outOfDomain.toFixed(2)}</td>
            <td>${entry.overall.toFixed(2)}</td>
        `;
        leaderboardBody.appendChild(row);
    });
}

document.addEventListener('DOMContentLoaded', populateLeaderboard);