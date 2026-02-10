// MBTI 궁합 & 팁 앱
class MbtiApp {
    constructor() {
        this.selectedType = null;
        this.currentTipTab = 'love';
        this.init();
    }

    init() {
        this.setupMbtiGrid();
        this.setupTipTabs();
        this.setupPremiumButton();
        this.setupShareButton();
        this.setupCompare();
        this.registerServiceWorker();
        this.loadSavedType();
    }

    // 저장된 MBTI 타입 복원
    loadSavedType() {
        try {
            const saved = localStorage.getItem('mbti_selectedType');
            if (saved && mbtiData[saved]) {
                const btn = document.querySelector(`.mbti-btn[data-type="${saved}"]`);
                if (btn) {
                    document.querySelectorAll('.mbti-btn').forEach(b => b.classList.remove('selected'));
                    btn.classList.add('selected');
                    this.selectType(saved);
                }
            }
        } catch (e) {
            console.error('Failed to load saved type:', e);
        }
    }

    setupMbtiGrid() {
        const buttons = document.querySelectorAll('.mbti-btn');
        buttons.forEach(btn => {
            btn.addEventListener('click', () => {
                // 이전 선택 해제
                buttons.forEach(b => b.classList.remove('selected'));
                btn.classList.add('selected');
                
                const type = btn.dataset.type;
                this.selectType(type);
            });
        });
    }

    selectType(type) {
        this.selectedType = type;
        const data = mbtiData[type];
        if (!data) return;

        // localStorage에 저장
        try { localStorage.setItem('mbti_selectedType', type); } catch (e) {}

        // 기본 정보 업데이트
        document.getElementById('type-icon').textContent = data.icon;
        document.getElementById('type-name').textContent = data.name;
        document.getElementById('type-title').textContent = data.title;
        document.getElementById('type-description').textContent = data.description;

        // 특성 업데이트
        document.getElementById('trait-energy').textContent = data.traits.energy;
        document.getElementById('trait-mind').textContent = data.traits.mind;
        document.getElementById('trait-nature').textContent = data.traits.nature;
        document.getElementById('trait-tactic').textContent = data.traits.tactic;

        // 궁합 정보
        document.getElementById('best-match').textContent = data.compatibility.best.join(', ');
        document.getElementById('good-match').textContent = data.compatibility.good.join(', ');
        document.getElementById('bad-match').textContent = data.compatibility.bad.join(', ');

        // 팁 표시
        this.showTips('love');

        // 비교 섹션 업데이트
        this.updateCompareMyType();
        const friendSelect = document.getElementById('compare-friend-select');
        if (friendSelect && friendSelect.value) {
            this.compareWithFriend(friendSelect.value);
        }

        // 프리미엄 결과 숨기기
        document.getElementById('premium-result').classList.add('hidden');

        // 결과 섹션 표시
        const resultSection = document.getElementById('result-section');
        resultSection.classList.remove('hidden');
        resultSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    setupTipTabs() {
        const tabs = document.querySelectorAll('.tip-tab');
        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                tabs.forEach(t => t.classList.remove('active'));
                tab.classList.add('active');
                this.showTips(tab.dataset.tab);
            });
        });
    }

    showTips(category) {
        this.currentTipTab = category;
        if (!this.selectedType) return;

        const data = mbtiData[this.selectedType];
        const tips = data.tips[category] || [];
        const tipsList = document.getElementById('tips-list');
        
        tipsList.innerHTML = tips.map(tip => `<li>${tip}</li>`).join('');
    }

    setupPremiumButton() {
        const btn = document.getElementById('deep-analysis-btn');
        btn.addEventListener('click', () => {
            this.showInterstitialAd(() => {
                this.showPremiumContent();
            });
        });
    }

    showInterstitialAd(callback) {
        const adModal = document.getElementById('interstitial-ad');
        const closeBtn = document.getElementById('close-ad');
        const countdown = document.getElementById('countdown');

        adModal.classList.remove('hidden');
        closeBtn.disabled = true;

        let seconds = 5;
        countdown.textContent = seconds;

        const timer = setInterval(() => {
            seconds--;
            countdown.textContent = seconds;

            if (seconds <= 0) {
                clearInterval(timer);
                closeBtn.disabled = false;
                closeBtn.textContent = i18n.t('buttons.close');

                closeBtn.onclick = () => {
                    adModal.classList.add('hidden');
                    closeBtn.textContent = `${i18n.t('buttons.close')} (5)`;
                    if (callback) callback();
                };
            }
        }, 1000);
    }

    showPremiumContent() {
        if (!this.selectedType) return;

        const data = mbtiData[this.selectedType];
        const deep = data.deepAnalysis;

        let content = `🧠 ${i18n.t('premium.psychology')}\n${deep.psychology}\n\n`;
        content += `🌱 ${i18n.t('premium.growth')}\n${deep.growth}\n\n`;
        content += `💼 ${i18n.t('premium.career')}\n${deep.career}\n\n`;
        content += `⚡ ${i18n.t('premium.stress')}\n${deep.stress}`;

        const premiumEl = document.getElementById('premium-content');
        premiumEl.textContent = content;
        premiumEl.style.whiteSpace = 'pre-line';
        
        const premiumResult = document.getElementById('premium-result');
        premiumResult.classList.remove('hidden');
        premiumResult.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }

    setupShareButton() {
        document.getElementById('share-btn').addEventListener('click', () => {
            this.generateResultImage(() => {
                this.shareResult();
            });
        });
    }

    generateResultImage(callback) {
        if (!this.selectedType) return;

        const data = mbtiData[this.selectedType];
        const canvas = document.getElementById('share-canvas');
        canvas.width = 1080;
        canvas.height = 1080;
        const ctx = canvas.getContext('2d');

        // Get primary color based on MBTI group
        const colorMap = {
            analyst: '#667eea',
            diplomat: '#00b894',
            sentinel: '#fdcb6e',
            explorer: '#e17055'
        };
        const primaryColor = colorMap[data.group];
        const secondaryColor = '#0a0a1e';

        // Background gradient
        const grad = ctx.createLinearGradient(0, 0, 0, 1080);
        grad.addColorStop(0, primaryColor);
        grad.addColorStop(1, secondaryColor);
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, 1080, 1080);

        // Decorative circles
        ctx.fillStyle = 'rgba(255,255,255,0.02)';
        for (let i = 0; i < 25; i++) {
            const x = Math.random() * 1080;
            const y = Math.random() * 1080;
            const r = Math.random() * 50 + 10;
            ctx.beginPath();
            ctx.arc(x, y, r, 0, Math.PI * 2);
            ctx.fill();
        }

        // App title
        ctx.textAlign = 'center';
        ctx.fillStyle = 'rgba(255,255,255,0.5)';
        ctx.font = '32px sans-serif';
        ctx.fillText(i18n.t('canvas.myType'), 540, 140);

        // Main emoji (large)
        ctx.font = '140px serif';
        ctx.fillStyle = '#fff';
        ctx.fillText(data.icon, 540, 340);

        // MBTI Type
        ctx.font = 'bold 90px sans-serif';
        ctx.fillStyle = '#fff';
        ctx.fillText(data.name, 540, 450);

        // Title
        ctx.font = 'bold 52px sans-serif';
        ctx.fillStyle = 'rgba(255,255,255,0.9)';
        ctx.fillText(`"${data.title}"`, 540, 530);

        // Description (wrapped)
        ctx.font = '24px sans-serif';
        ctx.fillStyle = 'rgba(255,255,255,0.7)';
        this.wrapText(ctx, data.description, 540, 600, 900, 32);

        // Best match
        ctx.font = 'bold 32px sans-serif';
        ctx.fillStyle = 'rgba(255,255,255,0.8)';
        ctx.fillText(`💕 ${i18n.t('canvas.bestMatch')}: ${data.compatibility.best.join(', ')}`, 540, 820);

        // CTA
        ctx.font = '26px sans-serif';
        ctx.fillStyle = 'rgba(255,255,255,0.6)';
        ctx.fillText(i18n.t('canvas.cta'), 540, 900);

        // Branding
        ctx.font = '20px sans-serif';
        ctx.fillStyle = 'rgba(255,255,255,0.4)';
        ctx.fillText('🧬 DopaBrain', 540, 1010);

        // Convert canvas to blob and share
        canvas.toBlob((blob) => {
            if (navigator.share && navigator.canShare) {
                const file = new File([blob], 'mbti-result.png', { type: 'image/png' });
                navigator.share({
                    title: (window.i18n?.t('share.nativeTitle') || 'I am {type}!').replace('{type}', data.name),
                    text: (window.i18n?.t('share.nativeText') || 'My MBTI is {type} ({title})!').replace('{type}', data.name).replace('{title}', data.title),
                    files: [file]
                }).catch(() => {
                    // Fallback
                    const url = URL.createObjectURL(blob);
                    const a = document.createElement('a');
                    a.href = url;
                    a.download = `MBTI_${data.name}.png`;
                    a.click();
                });
            } else {
                // Desktop fallback
                const url = canvas.toDataURL('image/png');
                const a = document.createElement('a');
                a.href = url;
                a.download = `MBTI_${data.name}.png`;
                a.click();
            }
            if (callback) callback();
        });
    }

    wrapText(ctx, text, x, y, maxWidth, lineHeight) {
        const words = text.split(' ');
        let line = '';
        let curY = y;
        for (let i = 0; i < words.length; i++) {
            const testLine = line + (line ? ' ' : '') + words[i];
            if (ctx.measureText(testLine).width > maxWidth && line.length > 0) {
                ctx.fillText(line, x, curY);
                line = words[i];
                curY += lineHeight;
            } else {
                line = testLine;
            }
        }
        if (line) ctx.fillText(line, x, curY);
    }

    shareResult() {
        if (!this.selectedType) return;

        const data = mbtiData[this.selectedType];
        const url = 'https://dopabrain.com/mbti-tips/';
        const text = `🧩 ${i18n.t('share.intro')} ${data.name} (${data.title})!\n\n` +
            `💕 ${i18n.t('share.best')}: ${data.compatibility.best.join(', ')}\n` +
            `⚡ ${i18n.t('share.caution')}: ${data.compatibility.bad ? data.compatibility.bad.join(', ') : i18n.t('share.none')}\n\n` +
            `${i18n.t('share.cta')}\n${url}`;

        if (navigator.share) {
            navigator.share({ title: (window.i18n?.t('share.compareTitle') || 'I am {type}! What\'s your MBTI compatibility?').replace('{type}', data.name), text, url }).catch(() => {});
        } else {
            navigator.clipboard.writeText(text).then(() => {
                alert(i18n.t('share.copied'));
            }).catch(() => {});
        }
    }

    // 친구 비교 기능
    setupCompare() {
        const friendSelect = document.getElementById('compare-friend-select');
        if (!friendSelect) return;

        friendSelect.addEventListener('change', () => {
            this.compareWithFriend(friendSelect.value);
        });
    }

    updateCompareMyType() {
        const el = document.getElementById('compare-my-type');
        if (el && this.selectedType) {
            el.textContent = this.selectedType;
        }
    }

    compareWithFriend(friendType) {
        const resultEl = document.getElementById('compare-result');
        if (!resultEl || !this.selectedType || !friendType) {
            if (resultEl) resultEl.classList.add('hidden');
            return;
        }

        const myData = mbtiData[this.selectedType];
        const friendData = mbtiData[friendType];
        if (!myData || !friendData) return;

        // 궁합 레벨 결정
        let matchLevel, matchEmoji, matchText, matchDesc;

        if (myData.compatibility.best.includes(friendType)) {
            matchLevel = 'best';
            matchEmoji = '💖';
            matchText = window.i18n?.t('share.bestMatch') || 'Best Match!';
            matchDesc = (window.i18n?.t('share.bestDesc') || 'Perfect match description').replace('{type1}', this.selectedType).replace('{type2}', friendType);
        } else if (myData.compatibility.good.includes(friendType)) {
            matchLevel = 'good';
            matchEmoji = '💛';
            matchText = window.i18n?.t('share.goodMatch') || 'Good Match';
            matchDesc = (window.i18n?.t('share.goodDesc') || 'Good match description').replace('{type1}', this.selectedType).replace('{type2}', friendType);
        } else if (myData.compatibility.bad && myData.compatibility.bad.includes(friendType)) {
            matchLevel = 'bad';
            matchEmoji = '⚡';
            matchText = window.i18n?.t('share.badMatch') || 'Challenging Match';
            matchDesc = (window.i18n?.t('share.badDesc') || 'Bad match description').replace('{type1}', this.selectedType).replace('{type2}', friendType);
        } else {
            matchLevel = 'neutral';
            matchEmoji = '🤝';
            matchText = '보통 궁합';
            matchDesc = `${this.selectedType}와 ${friendType}는 무난한 관계입니다. 공통 관심사를 찾으면 더 가까워질 수 있어요.`;
        }

        // 공통점 / 차이점 분석
        const myTraits = this.selectedType.split('');
        const friendTraits = friendType.split('');
        let common = 0;
        for (let i = 0; i < 4; i++) {
            if (myTraits[i] === friendTraits[i]) common++;
        }

        resultEl.innerHTML = `
            <div class="compare-match-level">
                <span class="compare-match-emoji">${matchEmoji}</span>
                <span class="compare-match-text">${matchText}</span>
            </div>
            <div class="compare-match-desc">${matchDesc}</div>
            <div class="compare-match-desc" style="margin-top: 10px; color: var(--primary-light);">
                4가지 성향 중 ${common}개 일치 · ${4 - common}개 차이
            </div>
        `;
        resultEl.classList.remove('hidden');
    }

    registerServiceWorker() {
        if ('serviceWorker' in navigator) {
            navigator.serviceWorker.register('sw.js')
                .then(() => console.log('Service Worker registered'))
                .catch(err => console.log('SW registration failed:', err));
        }
    }
}

// 앱 시작
document.addEventListener('DOMContentLoaded', () => {
    new MbtiApp();

    // Hide app loader
    const loader = document.getElementById('app-loader');
    if (loader) {
        loader.classList.add('hidden');
        setTimeout(() => loader.remove(), 300);
    }
});
