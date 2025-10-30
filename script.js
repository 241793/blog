// 动态加载内容
async function loadContent() {
    try {
        const response = await fetch('./data.json');
        const data = await response.json();
        
        // 更新个人信息
        document.getElementById('name').textContent = data.profile.name;
        document.getElementById('title').textContent = data.profile.title;
        document.getElementById('bio').textContent = data.profile.bio;
        document.getElementById('avatar').src = data.profile.avatar;
        
        // 渲染技能列表
        renderSkills(data.skills);
        
        // 渲染项目列表
        renderProjects(data.projects);
        
    } catch (error) {
        console.error('加载内容失败:', error);
    }
}

function renderSkills(skills) {
    const container = document.getElementById('skills-container');
    container.innerHTML = skills.map(skill => `
        <div class="skill">${skill}</div>
    `).join('');
}

function renderProjects(projects) {
    const container = document.getElementById('projects-container');
    container.innerHTML = projects.map(project => `
        <div class="project">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <a href="${project.link}" target="_blank">查看项目</a>
        </div>
    `).join('');
}

// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', loadContent);
