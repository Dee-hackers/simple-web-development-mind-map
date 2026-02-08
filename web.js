// Ensure HTML, CSS, and JS content is hidden by default
document.addEventListener("DOMContentLoaded", () => {
    // Hide all children content by default
    document.querySelectorAll(".children").forEach(el => {
        el.classList.remove("show");
    });
    
    // Show Web Development Basics content initially
    const webBasicsPanel = document.getElementById("web-basics");
    const webBasicsBtn = document.querySelector('[data-tab="web-basics"]');
    
    // Ensure Web Development Basics tab is active
    webBasicsBtn.classList.add("active");
    webBasicsPanel.classList.add("active");
});

// Root click
document.getElementById("root").addEventListener("click", () => {
    const level1 = document.getElementById("level1");
    const connector = document.getElementById("strightline");
    const isOpen = level1.classList.toggle("show");
    connector.classList.toggle("show", isOpen);

    if (!isOpen) {
        document
            .querySelectorAll(".children, .sub-children")
            .forEach((el) => {
                el.classList.remove("show");
            });
    }
});

// Level 1 clicks
document.getElementById("html").addEventListener("click", () => {
    const target = document.getElementById("htmlKids");
    const isOpen = target.classList.contains("show");
    if (isOpen) {
        target.classList.remove("show");
    } else {
        document
            .querySelectorAll(".children")
            .forEach((el) => el.classList.remove("show"));
        target.classList.add("show");
        // Force left alignment for HTML section
        const htmlLeaves = target.querySelectorAll('.leaf, .sub-leaf');
        htmlLeaves.forEach(leaf => {
            leaf.style.textAlign = 'left';
        });
    }
});
document.getElementById("css").addEventListener("click", () => {
    const target = document.getElementById("cssKids");
    const isOpen = target.classList.contains("show");
    if (isOpen) {
        target.classList.remove("show");
    } else {
        document
            .querySelectorAll(".children")
            .forEach((el) => el.classList.remove("show"));
        target.classList.add("show");
    }
});
document.getElementById("js").addEventListener("click", () => {
    const target = document.getElementById("jsKids");
    const isOpen = target.classList.contains("show");
    if (isOpen) {
        target.classList.remove("show");
    } else {
        document
            .querySelectorAll(".children")
            .forEach((el) => el.classList.remove("show"));
        target.classList.add("show");
    }
});

// Manage only one open sub-children group at a time + auto-close others
const allSubContainers = document.querySelectorAll(".sub-children");

document
    .querySelectorAll('.leaf[data-has-sub="true"]')
    .forEach((leaf) => {
        leaf.addEventListener("click", (e) => {
            e.stopPropagation();

            const targetSubId = leaf.id + "-kids";
            const targetSub = document.getElementById(targetSubId);

            if (!targetSub) return;

            const isCurrentlyOpen = targetSub.classList.contains("show");

            // Close ALL sub-children first
            allSubContainers.forEach((sub) => sub.classList.remove("show"));

            // Then open the clicked one (unless it was already open → toggle off)
            if (!isCurrentlyOpen) {
                targetSub.classList.add("show");
            }
        });
    });

// Sub-tab functionality
const subTabsContainer = document.getElementById("subTabsContainer");
const subTabBtns = document.querySelectorAll(".sub-tab-btn");
const subTabPanels = document.querySelectorAll(".sub-tab-panel");

// Tab switching logic
subTabBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        const tabId = btn.getAttribute("data-tab");
        
        // Remove active class from all buttons and panels
        subTabBtns.forEach(b => b.classList.remove("active"));
        subTabPanels.forEach(p => p.classList.remove("active"));
        
        // Add active class to clicked button and corresponding panel
        btn.classList.add("active");
        document.getElementById(tabId).classList.add("active");
    });
});

// Attach click handlers to main topics to show corresponding tabs
document.getElementById("root").addEventListener("click", () => {
    // Show sub-tabs container
    subTabsContainer.classList.add("show");
    
    // Activate Web Development Basics tab
    subTabBtns.forEach(b => b.classList.remove("active"));
    subTabPanels.forEach(p => p.classList.remove("active"));
    
    const webBasicsBtn = document.querySelector('[data-tab="web-basics"]');
    const webBasicsPanel = document.getElementById("web-basics");
    
    webBasicsBtn.classList.add("active");
    webBasicsPanel.classList.add("active");
});

document.getElementById("html").addEventListener("click", () => {
    // Show sub-tabs container
    subTabsContainer.classList.add("show");
    
    // Activate HTML Basics tab
    subTabBtns.forEach(b => b.classList.remove("active"));
    subTabPanels.forEach(p => p.classList.remove("active"));
    
    const htmlBtn = document.querySelector('[data-tab="html-basics"]');
    const htmlPanel = document.getElementById("html-basics");
    
    htmlBtn.classList.add("active");
    htmlPanel.classList.add("active");
});

document.getElementById("css").addEventListener("click", () => {
    // Show sub-tabs container
    subTabsContainer.classList.add("show");
    
    // Activate CSS Basics tab
    subTabBtns.forEach(b => b.classList.remove("active"));
    subTabPanels.forEach(p => p.classList.remove("active"));
    
    const cssBtn = document.querySelector('[data-tab="css-basics"]');
    const cssPanel = document.getElementById("css-basics");
    
    cssBtn.classList.add("active");
    cssPanel.classList.add("active");
});

document.getElementById("js").addEventListener("click", () => {
    // Show sub-tabs container
    subTabsContainer.classList.add("show");
    
    // Activate JavaScript Basics tab
    subTabBtns.forEach(b => b.classList.remove("active"));
    subTabPanels.forEach(p => p.classList.remove("active"));
    
    const jsBtn = document.querySelector('[data-tab="js-basics"]');
    const jsPanel = document.getElementById("js-basics");
    
    jsBtn.classList.add("active");
    jsPanel.classList.add("active");
});