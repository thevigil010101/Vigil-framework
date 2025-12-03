// VIGIL FRAMEWORK - JAVASCRIPT

// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }
});

// VC Calculator (for visuals.html page)
function calculateVC() {
    const g1 = parseFloat(document.getElementById('g1-slider')?.value || 0) / 100;
    const r = parseFloat(document.getElementById('r-slider')?.value || 0) / 100;
    const a = parseFloat(document.getElementById('a-slider')?.value || 0) / 100;
    
    const vc = 125 * (1 - g1) * (1 - r) * (1 - a);
    
    const resultElement = document.getElementById('vc-result');
    const barElement = document.getElementById('vc-bar');
    
    if (resultElement) {
        resultElement.textContent = Math.round(vc);
    }
    
    if (barElement) {
        barElement.style.width = (vc / 102 * 100) + '%';
    }
    
    // Update slider value displays
    const g1Display = document.getElementById('g1-value');
    const rDisplay = document.getElementById('r-value');
    const aDisplay = document.getElementById('a-value');
    
    if (g1Display) g1Display.textContent = Math.round(g1 * 100) + '%';
    if (rDisplay) rDisplay.textContent = Math.round(r * 100) + '%';
    if (aDisplay) aDisplay.textContent = Math.round(a * 100) + '%';
    
    // Update interpretation
    updateInterpretation(vc);
}

function updateInterpretation(vc) {
    const interpretElement = document.getElementById('vc-interpretation');
    if (!interpretElement) return;
    
    let interpretation = '';
    
    if (vc < 15) {
        interpretation = '🚨 CRISIS ZONE: Immediate support needed. Call 988 or use CARE protocol now.';
    } else if (vc < 31) {
        interpretation = '⚠️ Below humanity average (31). High dysfunction. Start: Daily journaling + therapy.';
    } else if (vc < 45) {
        interpretation = '📈 Progress zone. Cement breaking. Continue: Journaling, therapy, integration work.';
    } else if (vc < 60) {
        interpretation = '✅ Functional zone. Can process most experiences. Ready for: Medicine work (if appropriate).';
    } else if (vc < 102) {
        interpretation = '🌟 Integration zone. Approaching baseline. Maintain: Practice, boundaries, community.';
    } else {
        interpretation = '💎 At/above baseline! You\'re at full capacity. Maintain and help others rise.';
    }
    
    interpretElement.textContent = interpretation;
}

// Attach calculator listeners
document.addEventListener('DOMContentLoaded', function() {
    const g1Slider = document.getElementById('g1-slider');
    const rSlider = document.getElementById('r-slider');
    const aSlider = document.getElementById('a-slider');
    
    if (g1Slider) {
        g1Slider.addEventListener('input', calculateVC);
        calculateVC(); // Initial calculation
    }
    
    if (rSlider) {
        rSlider.addEventListener('input', calculateVC);
    }
    
    if (aSlider) {
        aSlider.addEventListener('input', calculateVC);
    }
});

// Copy prompt function for AI verification boxes
function copyPrompt(button) {
    const promptBox = button.previousElementSibling;
    if (promptBox && promptBox.tagName === 'TEXTAREA') {
        promptBox.select();
        document.execCommand('copy');
        
        const originalText = button.textContent;
        button.textContent = '✓ Copied!';
        
        setTimeout(() => {
            button.textContent = originalText;
        }, 2000);
    }
}

// Smooth scroll for anchor links
document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});
