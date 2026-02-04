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

        document.getElementById('premium-content').textContent = content;
        
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
        const text = `🧬 나의 MBTI: ${data.name} (${data.title})\n\n` +
            `${data.description}\n\n` +
            `💕 최고 궁합: ${data.compatibility.best.join(', ')}\n` +
            `💛 좋은 궁합: ${data.compatibility.good.join(', ')}\n\n` +
            `MBTI 궁합 & 팁 앱에서 확인하세요!`;

        if (navigator.share) {
            navigator.share({ title: 'MBTI 결과', text });
        } else {
            navigator.clipboard.writeText(text);
            alert('결과가 클립보드에 복사되었습니다!');
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
