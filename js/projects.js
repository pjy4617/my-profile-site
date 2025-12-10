// ===== Projects Data =====
const projects = [
    {
        id: 1,
        title: "고정밀 모션 제어 시스템",
        description: "C++로 개발한 실시간 모션 제어 시스템. 마이크로초 단위의 정밀한 위치 제어와 고속 응답성을 구현하여 산업용 로봇 제어에 적용.",
        image: "https://via.placeholder.com/400x300/8B5CF6/F3F4F6?text=Motion+Control+System",
        tags: ["C++", "Real-time", "Motion Control"],
        link: "#",
        category: "cpp"
    },
    {
        id: 2,
        title: "ROS 기반 자율 주행 플랫폼",
        description: "ROS를 활용한 자율주행 시스템 개발. SLAM, 경로 계획, 장애물 회피 등의 핵심 기능을 통합하여 안정적인 자율 주행 구현.",
        image: "https://via.placeholder.com/400x300/A78BFA/F3F4F6?text=ROS+Platform",
        tags: ["ROS", "SLAM", "Autonomous"],
        link: "#",
        category: "ros"
    },
    {
        id: 3,
        title: "모션 모니터링 대시보드",
        description: "React로 구축한 실시간 모션 시스템 모니터링 웹 애플리케이션. 센서 데이터 시각화, 알람 관리, 원격 제어 기능을 제공.",
        image: "https://via.placeholder.com/400x300/10B981/F3F4F6?text=Monitoring+Dashboard",
        tags: ["React", "WebSocket", "Dashboard"],
        link: "#",
        category: "react"
    }
];

// ===== Render Project Cards =====
function renderProjects() {
    const container = document.getElementById('projects-container');

    if (!container) {
        console.error('Projects container not found');
        return;
    }

    // Clear container
    container.innerHTML = '';

    // Create and append project cards
    projects.forEach((project, index) => {
        const card = createProjectCard(project, index);
        container.appendChild(card);
    });
}

// ===== Create Project Card Element =====
function createProjectCard(project, index) {
    const card = document.createElement('div');
    card.className = 'project-card rounded-lg overflow-hidden';

    card.innerHTML = `
        <div class="relative overflow-hidden">
            <img
                src="${project.image}"
                alt="${project.title}"
                class="w-full h-48 object-cover"
                loading="lazy"
            >
            <div class="absolute inset-0 bg-gradient-to-t from-card-bg to-transparent opacity-60"></div>
        </div>

        <div class="p-6">
            <h3 class="text-xl font-bold mb-3 text-text-primary">
                ${project.title}
            </h3>

            <p class="text-text-secondary mb-4 text-sm leading-relaxed">
                ${project.description}
            </p>

            <div class="flex flex-wrap gap-2 mb-4">
                ${project.tags.map(tag => `
                    <span class="tag">${tag}</span>
                `).join('')}
            </div>

            <a
                href="${project.link}"
                class="inline-flex items-center text-accent-primary hover:text-highlight transition-colors font-semibold"
            >
                자세히 보기
                <i class="fas fa-arrow-right ml-2"></i>
            </a>
        </div>
    `;

    return card;
}

// ===== Initialize Projects on DOM Load =====
document.addEventListener('DOMContentLoaded', () => {
    renderProjects();
});

// ===== Export for potential future use =====
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { projects, renderProjects };
}
