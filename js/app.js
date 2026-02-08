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
                closeBtn.textContent = '닫기';

                closeBtn.onclick = () => {
                    adModal.classList.add('hidden');
                    closeBtn.textContent = '닫기 (5)';
                    if (callback) callback();
                };
            }
        }, 1000);
    }

    showPremiumContent() {
        if (!this.selectedType) return;

        const data = mbtiData[this.selectedType];
        const deep = data.deepAnalysis;

        let content = `🧠 심리 분석\n${deep.psychology}\n\n`;
        content += `🌱 성장 포인트\n${deep.growth}\n\n`;
        content += `💼 추천 직업\n${deep.career}\n\n`;
        content += `⚡ 스트레스 반응\n${deep.stress}`;

        const premiumEl = document.getElementById('premium-content');
        premiumEl.textContent = content;
        premiumEl.style.whiteSpace = 'pre-line';
        
        const premiumResult = document.getElementById('premium-result');
        premiumResult.classList.remove('hidden');
        premiumResult.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }

    setupShareButton() {
        document.getElementById('share-btn').addEventListener('click', () => {
            this.shareResult();
        });
    }

    shareResult() {
        if (!this.selectedType) return;

        const data = mbtiData[this.selectedType];
        const url = 'https://swp1234.github.io/mbti-tips/';
        const text = `🧩 나는 ${data.name} (${data.title})!\n\n` +
            `💕 나의 찰떡궁합: ${data.compatibility.best.join(', ')}\n` +
            `⚡ 주의할 궁합: ${data.compatibility.bad ? data.compatibility.bad.join(', ') : '없음'}\n\n` +
            `너의 MBTI 궁합도 확인해봐! 👇\n${url}`;

        if (navigator.share) {
            navigator.share({ title: `나는 ${data.name}! 너의 MBTI 궁합은?`, text, url }).catch(() => {});
        } else {
            navigator.clipboard.writeText(text).then(() => {
                alert('결과가 복사되었습니다! 친구에게 공유해보세요 🎉');
            }).catch(() => {});
        }
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
});
