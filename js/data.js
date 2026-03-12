// MBTI data — i18n keys + English fallbacks
const mbtiData = {
    // Analysts
    "INTJ": {
        name: "INTJ",
        titleKey: "mbti.INTJ.title",
        title: "The Strategist",
        icon: "\uD83C\uDFAF",
        group: "analyst",
        descriptionKey: "mbti.INTJ.description",
        description: "Imaginative and strategic thinker with a plan for everything. Independent and determined, moving toward goals with high standards and a dislike for inefficiency.",
        traits: {
            energyKey: "mbti.traits.introvertI",
            energy: "Introvert (I)",
            mindKey: "mbti.traits.intuitionN",
            mind: "Intuition (N)",
            natureKey: "mbti.traits.thinkingT",
            nature: "Thinking (T)",
            tacticKey: "mbti.traits.judgingJ",
            tactic: "Judging (J)"
        },
        compatibility: {
            best: ["ENFP", "ENTP"],
            good: ["INTJ", "ENTJ", "INFJ"],
            bad: ["ESFP", "ISFP", "ESFJ"]
        },
        tips: {
            loveKeys: ["mbti.INTJ.love.0","mbti.INTJ.love.1","mbti.INTJ.love.2","mbti.INTJ.love.3"],
            love: [
                "Even if expressing feelings is hard, try telling your partner you care",
                "Don't just analyze your partner's emotional needs logically",
                "Sometimes enjoy an unplanned date",
                "Practice giving compliments before criticism"
            ],
            workKeys: ["mbti.INTJ.work.0","mbti.INTJ.work.1","mbti.INTJ.work.2","mbti.INTJ.work.3"],
            work: [
                "Be patient when sharing ideas with team members",
                "Practice explaining your vision in simple terms",
                "Don't try to do everything alone; consider delegating",
                "Participate in team building even if it seems inefficient"
            ],
            friendKeys: ["mbti.INTJ.friend.0","mbti.INTJ.friend.1","mbti.INTJ.friend.2","mbti.INTJ.friend.3"],
            friend: [
                "Value your friends' everyday conversations too",
                "Sometimes just listening is better than giving advice",
                "Sometimes they just want emotional support",
                "Focusing on a few deep relationships is also great"
            ]
        },
        deepAnalysis: {
            psychologyKey: "mbti.INTJ.psychology",
            psychology: "INTJs have a rich inner world of imagination. They likely asked 'why?' a lot as children and excel at understanding systems and patterns. They prioritize logic over emotions, but this doesn't mean they lack feelings. They feel deeply but may not know how to express it.",
            growthKey: "mbti.INTJ.growth",
            growth: "Focus on developing emotional intelligence (EQ). Let go of perfectionism a little and accept failure as a learning opportunity. Acknowledging that others' methods can also be valuable will improve your relationships.",
            careerKey: "mbti.INTJ.career",
            career: "Strategy consultant, scientist, software architect, investment analyst, writer — jobs that allow independent deep thinking are ideal.",
            stressKey: "mbti.INTJ.stress",
            stress: "Under stress, you may become unusually impulsive or obsess over details. Alone time and meditation help with recovery."
        }
    },
    "INTP": {
        name: "INTP",
        titleKey: "mbti.INTP.title",
        title: "The Logician",
        icon: "\uD83D\uDD2C",
        group: "analyst",
        descriptionKey: "mbti.INTP.description",
        description: "An innovative inventor with an endless thirst for knowledge. Loves logic and theory, enjoys exploring abstract ideas. Quiet but always generating new ideas internally.",
        traits: {
            energyKey: "mbti.traits.introvertI",
            energy: "Introvert (I)",
            mindKey: "mbti.traits.intuitionN",
            mind: "Intuition (N)",
            natureKey: "mbti.traits.thinkingT",
            nature: "Thinking (T)",
            tacticKey: "mbti.traits.prospectingP",
            tactic: "Prospecting (P)"
        },
        compatibility: {
            best: ["ENTJ", "ENFJ"],
            good: ["INTP", "ENTP", "INTJ"],
            bad: ["ESFJ", "ISFJ", "ESTJ"]
        },
        tips: {
            loveKeys: ["mbti.INTP.love.0","mbti.INTP.love.1","mbti.INTP.love.2","mbti.INTP.love.3"],
            love: [
                "Practice expressing interest through words and actions",
                "Pay more attention to your partner's emotional needs",
                "Learn to distinguish when empathy is needed over analysis",
                "Try spontaneous romantic gestures sometimes"
            ],
            workKeys: ["mbti.INTP.work.0","mbti.INTP.work.1","mbti.INTP.work.2","mbti.INTP.work.3"],
            work: [
                "Turning ideas into action is also important",
                "Create a system to meet deadlines",
                "Share your insights in team meetings",
                "Even small tasks are part of the big picture"
            ],
            friendKeys: ["mbti.INTP.friend.0","mbti.INTP.friend.1","mbti.INTP.friend.2","mbti.INTP.friend.3"],
            friend: [
                "Pay more attention to your friends' emotions",
                "Sometimes just being there is enough",
                "Not every conversation needs to be a debate",
                "Set reminders so you don't forget plans"
            ]
        },
        deepAnalysis: {
            psychologyKey: "mbti.INTP.psychology",
            psychology: "INTPs are true thinkers. They gain energy from understanding complex systems and exploring new ideas. They tend to question social norms and constantly ask 'why should it be that way?'",
            growthKey: "mbti.INTP.growth",
            growth: "You need practice turning ideas into reality. A 'good enough' execution can be more valuable than a perfect theory. Try feeling emotions instead of trying to understand them logically.",
            careerKey: "mbti.INTP.career",
            career: "Researcher, philosopher, programmer, mathematician, analyst — jobs that involve independent thinking and problem-solving are ideal.",
            stressKey: "mbti.INTP.stress",
            stress: "Under stress, you may worry excessively or become unusually emotionally sensitive. Simple activities like walks or puzzles can help."
        }
    },
    "ENTJ": {
        name: "ENTJ",
        titleKey: "mbti.ENTJ.title",
        title: "The Commander",
        icon: "\uD83D\uDC54",
        group: "analyst",
        descriptionKey: "mbti.ENTJ.description",
        description: "A bold, imaginative, strong-willed leader who always finds or creates a way. Values efficiency and results, excels at leading others toward goals.",
        traits: {
            energyKey: "mbti.traits.extrovertE",
            energy: "Extrovert (E)",
            mindKey: "mbti.traits.intuitionN",
            mind: "Intuition (N)",
            natureKey: "mbti.traits.thinkingT",
            nature: "Thinking (T)",
            tacticKey: "mbti.traits.judgingJ",
            tactic: "Judging (J)"
        },
        compatibility: {
            best: ["INTP", "INFP"],
            good: ["ENTJ", "INTJ", "ENTP"],
            bad: ["ISFP", "ESFP", "ISFJ"]
        },
        tips: {
            loveKeys: ["mbti.ENTJ.love.0","mbti.ENTJ.love.1","mbti.ENTJ.love.2","mbti.ENTJ.love.3"],
            love: [
                "Don't treat your partner like a 'project'",
                "Sometimes harmony matters more than winning",
                "Respect your partner's pace",
                "Showing vulnerability is also a form of strength"
            ],
            workKeys: ["mbti.ENTJ.work.0","mbti.ENTJ.work.1","mbti.ENTJ.work.2","mbti.ENTJ.work.3"],
            work: [
                "Take time to listen to team members' opinions",
                "Don't try to control everything",
                "Be constructive with criticism, generous with praise",
                "Sometimes consensus-based decisions are needed"
            ],
            friendKeys: ["mbti.ENTJ.friend.0","mbti.ENTJ.friend.1","mbti.ENTJ.friend.2","mbti.ENTJ.friend.3"],
            friend: [
                "Don't always try to lead every conversation",
                "Celebrate your friends' small achievements too",
                "Sometimes support is needed more than advice",
                "Keep your promises — trust is important"
            ]
        },
        deepAnalysis: {
            psychologyKey: "mbti.ENTJ.psychology",
            psychology: "ENTJs are born leaders. They likely led groups or planned activities from childhood. They have little patience for inefficiency and prefer fast decision-making.",
            growthKey: "mbti.ENTJ.growth",
            growth: "Developing emotional intelligence will elevate your leadership. Understanding that process matters as much as results, and that people don't move on logic alone, will give you greater influence.",
            careerKey: "mbti.ENTJ.career",
            career: "CEO, management consultant, lawyer, judge, entrepreneur — jobs where you can exercise leadership are ideal.",
            stressKey: "mbti.ENTJ.stress",
            stress: "Under stress, you may become more aggressive or try to control even more. Talking with someone you trust helps."
        }
    },
    "ENTP": {
        name: "ENTP",
        titleKey: "mbti.ENTP.title",
        title: "The Debater",
        icon: "\uD83D\uDCA1",
        group: "analyst",
        descriptionKey: "mbti.ENTP.description",
        description: "Smart, curious thinker who enjoys intellectual challenges. Loves debate and isn't afraid to challenge conventions. Lives in a world of ideas.",
        traits: {
            energyKey: "mbti.traits.extrovertE",
            energy: "Extrovert (E)",
            mindKey: "mbti.traits.intuitionN",
            mind: "Intuition (N)",
            natureKey: "mbti.traits.thinkingT",
            nature: "Thinking (T)",
            tacticKey: "mbti.traits.prospectingP",
            tactic: "Prospecting (P)"
        },
        compatibility: {
            best: ["INTJ", "INFJ"],
            good: ["ENTP", "INTP", "ENTJ"],
            bad: ["ISFJ", "ISTJ", "ESFJ"]
        },
        tips: {
            loveKeys: ["mbti.ENTP.love.0","mbti.ENTP.love.1","mbti.ENTP.love.2","mbti.ENTP.love.3"],
            love: [
                "Don't turn everything into a debate",
                "Don't tell your partner their feelings are 'wrong'",
                "Deeply focusing on one relationship has value too",
                "Follow through on what you say"
            ],
            workKeys: ["mbti.ENTP.work.0","mbti.ENTP.work.1","mbti.ENTP.work.2","mbti.ENTP.work.3"],
            work: [
                "Finish projects you start",
                "Consider your team members' feelings too",
                "Rules sometimes have good reasons",
                "Details can be important too"
            ],
            friendKeys: ["mbti.ENTP.friend.0","mbti.ENTP.friend.1","mbti.ENTP.friend.2","mbti.ENTP.friend.3"],
            friend: [
                "Don't just refute your friends' opinions",
                "Sometimes just agreeing is fine too",
                "Deep, lasting friendships are valuable too",
                "Hold back on jokes when a friend is feeling down"
            ]
        },
        deepAnalysis: {
            psychologyKey: "mbti.ENTP.psychology",
            psychology: "ENTPs are alchemists of ideas. They gain energy from exploring new possibilities and challenging existing systems. They enjoy playing 'devil's advocate' and sometimes treat debate like a sport.",
            growthKey: "mbti.ENTP.growth",
            growth: "You need practice finishing what you start. You're easily captivated by new ideas, but building execution skills can lead to truly great results. Don't dismiss others' emotions as 'irrational.'",
            careerKey: "mbti.ENTP.career",
            career: "Entrepreneur, lawyer, marketer, inventor, comedian — jobs where you can think creatively and explore new ideas are ideal.",
            stressKey: "mbti.ENTP.stress",
            stress: "Under stress, you may become more argumentative or obsess over trivial things. New environments or travel can help refresh you."
        }
    },

    // Diplomats
    "INFJ": {
        name: "INFJ",
        titleKey: "mbti.INFJ.title",
        title: "The Advocate",
        icon: "\uD83C\uDF1F",
        group: "diplomat",
        descriptionKey: "mbti.INFJ.description",
        description: "Quiet, mysterious, and inspiring idealist. Has a deep desire to help others and make the world a better place. One of the rarest personality types.",
        traits: {
            energyKey: "mbti.traits.introvertI",
            energy: "Introvert (I)",
            mindKey: "mbti.traits.intuitionN",
            mind: "Intuition (N)",
            natureKey: "mbti.traits.feelingF",
            nature: "Feeling (F)",
            tacticKey: "mbti.traits.judgingJ",
            tactic: "Judging (J)"
        },
        compatibility: {
            best: ["ENTP", "ENFP"],
            good: ["INFJ", "INTJ", "INFP"],
            bad: ["ESTP", "ISTP", "ESTJ"]
        },
        tips: {
            loveKeys: ["mbti.INFJ.love.0","mbti.INFJ.love.1","mbti.INFJ.love.2","mbti.INFJ.love.3"],
            love: [
                "Don't try to solve everything alone",
                "Express your own needs to your partner too",
                "Accept that no relationship is perfect",
                "Try to understand rather than change your partner"
            ],
            workKeys: ["mbti.INFJ.work.0","mbti.INFJ.work.1","mbti.INFJ.work.2","mbti.INFJ.work.3"],
            work: [
                "Share your ideas more actively",
                "You can't help everyone — set boundaries",
                "Don't just avoid conflict; resolve it constructively",
                "Let go of perfectionism a little"
            ],
            friendKeys: ["mbti.INFJ.friend.0","mbti.INFJ.friend.1","mbti.INFJ.friend.2","mbti.INFJ.friend.3"],
            friend: [
                "Don't let friends take advantage of you",
                "Remember that your needs matter too",
                "You don't need to solve every friend's problems",
                "Speak up when you need alone time"
            ]
        },
        deepAnalysis: {
            psychologyKey: "mbti.INFJ.psychology",
            psychology: "INFJs have deep empathy and intuition. They can read others' emotions almost telepathically. But this ability can sometimes be a burden, as they may absorb others' emotions and become exhausted.",
            growthKey: "mbti.INFJ.growth",
            growth: "Setting boundaries for yourself is crucial. Helping others is great, but you need to fill your own cup first. Forgive yourself when you can't reach your perfect vision.",
            careerKey: "mbti.INFJ.career",
            career: "Counselor, psychologist, writer, teacher, social worker — jobs where you can help people and create meaningful change are ideal.",
            stressKey: "mbti.INFJ.stress",
            stress: "Under extreme stress, you might suddenly cut off relationships in what's known as a 'door slam.' Regular self-care and talking with someone you trust are important."
        }
    },
    "INFP": {
        name: "INFP",
        titleKey: "mbti.INFP.title",
        title: "The Mediator",
        icon: "\uD83E\uDD8B",
        group: "diplomat",
        descriptionKey: "mbti.INFP.description",
        description: "Poetic, kind, and altruistic, always ready to help for a good cause. Follows deep inner values and ideals, and values authenticity highly.",
        traits: {
            energyKey: "mbti.traits.introvertI",
            energy: "Introvert (I)",
            mindKey: "mbti.traits.intuitionN",
            mind: "Intuition (N)",
            natureKey: "mbti.traits.feelingF",
            nature: "Feeling (F)",
            tacticKey: "mbti.traits.prospectingP",
            tactic: "Prospecting (P)"
        },
        compatibility: {
            best: ["ENTJ", "ENFJ"],
            good: ["INFP", "INFJ", "ENFP"],
            bad: ["ESTJ", "ISTJ", "ESTP"]
        },
        tips: {
            loveKeys: ["mbti.INFP.love.0","mbti.INFP.love.1","mbti.INFP.love.2","mbti.INFP.love.3"],
            love: [
                "Love your real partner, not an idealized version",
                "Don't avoid conflict — handle it in a healthy way",
                "Express your feelings in words",
                "Don't expect your partner to read your mind"
            ],
            workKeys: ["mbti.INFP.work.0","mbti.INFP.work.1","mbti.INFP.work.2","mbti.INFP.work.3"],
            work: [
                "Don't take criticism personally",
                "Create a system to meet deadlines",
                "Work that doesn't align with your values is sometimes necessary",
                "Apply your creativity in practical ways"
            ],
            friendKeys: ["mbti.INFP.friend.0","mbti.INFP.friend.1","mbti.INFP.friend.2","mbti.INFP.friend.3"],
            friend: [
                "Share everyday things with your friends too",
                "Don't only seek deep conversations; enjoy light ones too",
                "Don't be too hurt by friends' small mistakes",
                "Taking the initiative to reach out is good too"
            ]
        },
        deepAnalysis: {
            psychologyKey: "mbti.INFP.psychology",
            psychology: "INFPs have a deep inner world. They hold strong values and ideals, pursuing authenticity and meaning. They have excellent artistic sensitivity and often express themselves through writing or art.",
            growthKey: "mbti.INFP.growth",
            growth: "Finding balance between ideals and reality is important. Dream of a perfect world, but also acknowledge the value of small changes. Practice not taking criticism as a personal attack.",
            careerKey: "mbti.INFP.career",
            career: "Writer, counselor, artist, graphic designer, social worker — jobs where you can express creativity and values are ideal.",
            stressKey: "mbti.INFP.stress",
            stress: "Under stress, you may escape from reality or fall into self-criticism. Creative activities or time in nature help with recovery."
        }
    },
    "ENFJ": {
        name: "ENFJ",
        titleKey: "mbti.ENFJ.title",
        title: "The Protagonist",
        icon: "\uD83D\uDC51",
        group: "diplomat",
        descriptionKey: "mbti.ENFJ.description",
        description: "Charismatic and inspiring leader who can captivate an audience. Finds great joy in helping others grow and naturally leads people.",
        traits: {
            energyKey: "mbti.traits.extrovertE",
            energy: "Extrovert (E)",
            mindKey: "mbti.traits.intuitionN",
            mind: "Intuition (N)",
            natureKey: "mbti.traits.feelingF",
            nature: "Feeling (F)",
            tacticKey: "mbti.traits.judgingJ",
            tactic: "Judging (J)"
        },
        compatibility: {
            best: ["INTP", "INFP"],
            good: ["ENFJ", "INFJ", "ENTJ"],
            bad: ["ISTP", "ESTP", "ISTJ"]
        },
        tips: {
            loveKeys: ["mbti.ENFJ.love.0","mbti.ENFJ.love.1","mbti.ENFJ.love.2","mbti.ENFJ.love.3"],
            love: [
                "Don't be overly controlling in the name of 'helping'",
                "Prioritizing your own needs isn't selfish",
                "Respect your partner's growth pace",
                "It's okay not to maintain harmony at all times"
            ],
            workKeys: ["mbti.ENFJ.work.0","mbti.ENFJ.work.1","mbti.ENFJ.work.2","mbti.ENFJ.work.3"],
            work: [
                "Validate yourself without needing others' approval",
                "You can't please everyone",
                "You can deliver criticism constructively",
                "Watch out for burnout — self-care matters"
            ],
            friendKeys: ["mbti.ENFJ.friend.0","mbti.ENFJ.friend.1","mbti.ENFJ.friend.2","mbti.ENFJ.friend.3"],
            friend: [
                "It's okay to let friends solve things on their own",
                "You don't need to be the 'savior' in every relationship",
                "Share your own struggles with friends too",
                "Allow yourself to receive in relationships"
            ]
        },
        deepAnalysis: {
            psychologyKey: "mbti.ENFJ.psychology",
            psychology: "ENFJs excel at seeing others' potential and drawing it out. They are natural mentors and coaches. But they tend to exhaust themselves helping others.",
            growthKey: "mbti.ENFJ.growth",
            growth: "Learn that prioritizing your own needs isn't selfish. Understand that you can't save everyone and that people need the opportunity to learn on their own.",
            careerKey: "mbti.ENFJ.career",
            career: "Teacher, counselor, HR professional, coach, politician — jobs where you can lead and develop people are ideal.",
            stressKey: "mbti.ENFJ.stress",
            stress: "Under stress, you may become self-critical or overly involved in others' problems. Healthy boundary-setting is important."
        }
    },
    "ENFP": {
        name: "ENFP",
        titleKey: "mbti.ENFP.title",
        title: "The Campaigner",
        icon: "\uD83C\uDF08",
        group: "diplomat",
        descriptionKey: "mbti.ENFP.description",
        description: "Enthusiastic, creative, and sociable free spirit. Always discovering new possibilities and inspiring others with passion.",
        traits: {
            energyKey: "mbti.traits.extrovertE",
            energy: "Extrovert (E)",
            mindKey: "mbti.traits.intuitionN",
            mind: "Intuition (N)",
            natureKey: "mbti.traits.feelingF",
            nature: "Feeling (F)",
            tacticKey: "mbti.traits.prospectingP",
            tactic: "Prospecting (P)"
        },
        compatibility: {
            best: ["INTJ", "INFJ"],
            good: ["ENFP", "ENTP", "INFP"],
            bad: ["ISTJ", "ESTJ", "ISTP"]
        },
        tips: {
            loveKeys: ["mbti.ENFP.love.0","mbti.ENFP.love.1","mbti.ENFP.love.2","mbti.ENFP.love.3"],
            love: [
                "Your quest for novelty can make your partner anxious",
                "Keep your promises — trust is important",
                "Value the everyday aspects of your relationship too",
                "Learn to deeply focus on one relationship"
            ],
            workKeys: ["mbti.ENFP.work.0","mbti.ENFP.work.1","mbti.ENFP.work.2","mbti.ENFP.work.3"],
            work: [
                "Finish projects you start",
                "Pay attention to details",
                "Use scheduling tools",
                "You can't pursue every idea"
            ],
            friendKeys: ["mbti.ENFP.friend.0","mbti.ENFP.friend.1","mbti.ENFP.friend.2","mbti.ENFP.friend.3"],
            friend: [
                "Deep friendships are just as valuable as many friends",
                "Listen to your friends' stories all the way through",
                "Being on time shows respect",
                "Sometimes quiet time with friends is needed too"
            ]
        },
        deepAnalysis: {
            psychologyKey: "mbti.ENFP.psychology",
            psychology: "ENFPs are explorers of possibility. They are endlessly drawn to new ideas and experiences. They crave deep emotional connections and pursue authentic relationships. They start passionately but may struggle to maintain things when interest wanes.",
            growthKey: "mbti.ENFP.growth",
            growth: "Practice finishing what you start. Enthusiasm for new things is a strength, but deep expertise is also valuable. Daily routines can actually be a foundation for freedom.",
            careerKey: "mbti.ENFP.career",
            career: "Marketer, writer, actor, counselor, entrepreneur — jobs where you can be creative and connect with people are ideal.",
            stressKey: "mbti.ENFP.stress",
            stress: "Under stress, you may become excessively self-critical or obsess over trivial things. New environments or creative activities help with recovery."
        }
    },

    // Sentinels
    "ISTJ": {
        name: "ISTJ",
        titleKey: "mbti.ISTJ.title",
        title: "The Realist",
        icon: "\uD83D\uDCCB",
        group: "sentinel",
        descriptionKey: "mbti.ISTJ.description",
        description: "Fact-based thinker with a strong sense of responsibility. Always keeps promises and values tradition and order. Known as someone you can rely on.",
        traits: {
            energyKey: "mbti.traits.introvertI",
            energy: "Introvert (I)",
            mindKey: "mbti.traits.sensingS",
            mind: "Sensing (S)",
            natureKey: "mbti.traits.thinkingT",
            nature: "Thinking (T)",
            tacticKey: "mbti.traits.judgingJ",
            tactic: "Judging (J)"
        },
        compatibility: {
            best: ["ESFP", "ESTP"],
            good: ["ISTJ", "ISFJ", "ESTJ"],
            bad: ["ENFP", "ENTP", "INFP"]
        },
        tips: {
            loveKeys: ["mbti.ISTJ.love.0","mbti.ISTJ.love.1","mbti.ISTJ.love.2","mbti.ISTJ.love.3"],
            love: [
                "Practice expressing emotions — it matters to your partner",
                "Be a little more open to change",
                "Sometimes enjoy things without a plan",
                "Respect your partner's different approach"
            ],
            workKeys: ["mbti.ISTJ.work.0","mbti.ISTJ.work.1","mbti.ISTJ.work.2","mbti.ISTJ.work.3"],
            work: [
                "Stay open-minded to new approaches",
                "Not everything needs to be perfect",
                "Team members' creative ideas have value too",
                "Sometimes apply rules flexibly"
            ],
            friendKeys: ["mbti.ISTJ.friend.0","mbti.ISTJ.friend.1","mbti.ISTJ.friend.2","mbti.ISTJ.friend.3"],
            friend: [
                "Listen to your friends' emotional needs too",
                "Sometimes listening is better than offering solutions",
                "Sometimes enjoy spontaneous plans",
                "Share your own feelings too"
            ]
        },
        deepAnalysis: {
            psychologyKey: "mbti.ISTJ.psychology",
            psychology: "ISTJs seek stability and order. They keep promises faithfully and have a strong sense of responsibility. They prefer tradition and proven methods, valuing stability over change. They have rich inner emotions but may find them hard to express.",
            growthKey: "mbti.ISTJ.growth",
            growth: "Learn that change can be an opportunity, not a threat. Understanding that expressing emotions isn't weakness will deepen your relationships. Sometimes 'good enough' is okay.",
            careerKey: "mbti.ISTJ.career",
            career: "Accountant, lawyer, military officer, project manager, inspector — systematic and responsible roles are ideal.",
            stressKey: "mbti.ISTJ.stress",
            stress: "Under stress, you may become more rigid or fixate on worst-case scenarios. Reliable routines and support from close ones help."
        }
    },
    "ISFJ": {
        name: "ISFJ",
        titleKey: "mbti.ISFJ.title",
        title: "The Defender",
        icon: "\uD83D\uDEE1\uFE0F",
        group: "sentinel",
        descriptionKey: "mbti.ISFJ.description",
        description: "Very devoted and warm protector, always ready to defend loved ones. Quiet but social, seeking stability and harmony.",
        traits: {
            energyKey: "mbti.traits.introvertI",
            energy: "Introvert (I)",
            mindKey: "mbti.traits.sensingS",
            mind: "Sensing (S)",
            natureKey: "mbti.traits.feelingF",
            nature: "Feeling (F)",
            tacticKey: "mbti.traits.judgingJ",
            tactic: "Judging (J)"
        },
        compatibility: {
            best: ["ESTP", "ESFP"],
            good: ["ISFJ", "ISTJ", "ESFJ"],
            bad: ["ENTP", "INTP", "ENFP"]
        },
        tips: {
            loveKeys: ["mbti.ISFJ.love.0","mbti.ISFJ.love.1","mbti.ISFJ.love.2","mbti.ISFJ.love.3"],
            love: [
                "Remember that your needs matter too",
                "You don't need to do everything your partner doesn't ask for",
                "Don't avoid conflict — handle it healthily",
                "Don't hold on to past mistakes for too long"
            ],
            workKeys: ["mbti.ISFJ.work.0","mbti.ISFJ.work.1","mbti.ISFJ.work.2","mbti.ISFJ.work.3"],
            work: [
                "Don't overwork just to be recognized",
                "Learn to say no",
                "It's important to show your contributions",
                "Be more open to change"
            ],
            friendKeys: ["mbti.ISFJ.friend.0","mbti.ISFJ.friend.1","mbti.ISFJ.friend.2","mbti.ISFJ.friend.3"],
            friend: [
                "Don't let friends take advantage of you",
                "It's okay to ask for help too",
                "Share your own feelings too",
                "Invest time in self-care too"
            ]
        },
        deepAnalysis: {
            psychologyKey: "mbti.ISFJ.psychology",
            psychology: "ISFJs are quiet heroes. They find deep satisfaction in caring for others, often putting their own needs last. They pay attention to details and cherish lessons learned from past experiences.",
            growthKey: "mbti.ISFJ.growth",
            growth: "Learn that putting your own needs first isn't selfish. Saying 'no' to others is also a healthy boundary. Change isn't always bad.",
            careerKey: "mbti.ISFJ.career",
            career: "Nurse, teacher, social worker, administrator, librarian — jobs where you can care for others and maintain order are ideal.",
            stressKey: "mbti.ISFJ.stress",
            stress: "Under stress, you may hide yourself more rather than asserting, or imagine worst-case scenarios. Opening up to someone you trust helps."
        }
    },
    "ESTJ": {
        name: "ESTJ",
        titleKey: "mbti.ESTJ.title",
        title: "The Executive",
        icon: "\uD83D\uDCCA",
        group: "sentinel",
        descriptionKey: "mbti.ESTJ.description",
        description: "Excellent manager who excels at managing people and things. Honest, devoted, values tradition and order. Leads organizations with strong leadership.",
        traits: {
            energyKey: "mbti.traits.extrovertE",
            energy: "Extrovert (E)",
            mindKey: "mbti.traits.sensingS",
            mind: "Sensing (S)",
            natureKey: "mbti.traits.thinkingT",
            nature: "Thinking (T)",
            tacticKey: "mbti.traits.judgingJ",
            tactic: "Judging (J)"
        },
        compatibility: {
            best: ["ISFP", "ISTP"],
            good: ["ESTJ", "ISTJ", "ENTJ"],
            bad: ["INFP", "ENFP", "INTP"]
        },
        tips: {
            loveKeys: ["mbti.ESTJ.love.0","mbti.ESTJ.love.1","mbti.ESTJ.love.2","mbti.ESTJ.love.3"],
            love: [
                "Your partner's feelings are as important as data",
                "You don't always need to be right — learn to compromise",
                "Softness is also a part of strength",
                "Respect your partner's different approach"
            ],
            workKeys: ["mbti.ESTJ.work.0","mbti.ESTJ.work.1","mbti.ESTJ.work.2","mbti.ESTJ.work.3"],
            work: [
                "Consider team members' personal situations",
                "Sometimes people come before rules",
                "Stay open to different approaches",
                "Give praise more often"
            ],
            friendKeys: ["mbti.ESTJ.friend.0","mbti.ESTJ.friend.1","mbti.ESTJ.friend.2","mbti.ESTJ.friend.3"],
            friend: [
                "Don't ignore your friends' emotional needs",
                "Sometimes just listening is better than giving advice",
                "Don't try to control everything",
                "Flexibility is sometimes needed"
            ]
        },
        deepAnalysis: {
            psychologyKey: "mbti.ESTJ.psychology",
            psychology: "ESTJs are born organizers. They like clear structures and rules and dislike disorder. They are direct and honest, acting as they speak. Sometimes they may appear inflexible.",
            growthKey: "mbti.ESTJ.growth",
            growth: "Learn that emotions are as important as facts. Not every situation can have rules applied. Recognizing that others' methods can be valuable will make your leadership more effective.",
            careerKey: "mbti.ESTJ.career",
            career: "Manager, executive, judge, military officer, financial officer — jobs where you can lead and manage organizations are ideal.",
            stressKey: "mbti.ESTJ.stress",
            stress: "Under stress, you may become more controlling or critical. Exercise or activities that give a sense of achievement help."
        }
    },
    "ESFJ": {
        name: "ESFJ",
        titleKey: "mbti.ESFJ.title",
        title: "The Consul",
        icon: "\uD83E\uDD1D",
        group: "sentinel",
        descriptionKey: "mbti.ESFJ.description",
        description: "Very caring, social, and popular. Loves helping others and strives to create a harmonious environment. Plays a central role in the community.",
        traits: {
            energyKey: "mbti.traits.extrovertE",
            energy: "Extrovert (E)",
            mindKey: "mbti.traits.sensingS",
            mind: "Sensing (S)",
            natureKey: "mbti.traits.feelingF",
            nature: "Feeling (F)",
            tacticKey: "mbti.traits.judgingJ",
            tactic: "Judging (J)"
        },
        compatibility: {
            best: ["ISTP", "ISFP"],
            good: ["ESFJ", "ISFJ", "ENFJ"],
            bad: ["INTP", "ENTP", "INTJ"]
        },
        tips: {
            loveKeys: ["mbti.ESFJ.love.0","mbti.ESFJ.love.1","mbti.ESFJ.love.2","mbti.ESFJ.love.3"],
            love: [
                "You don't need to sacrifice everything for your partner",
                "Conflict is normal — don't avoid it",
                "Don't worry too much about others' opinions",
                "It's okay that your partner is different from you"
            ],
            workKeys: ["mbti.ESFJ.work.0","mbti.ESFJ.work.1","mbti.ESFJ.work.2","mbti.ESFJ.work.3"],
            work: [
                "You don't need to meet everyone's expectations",
                "Don't take criticism personally",
                "Your opinion matters too — speak up",
                "Make time for self-care"
            ],
            friendKeys: ["mbti.ESFJ.friend.0","mbti.ESFJ.friend.1","mbti.ESFJ.friend.2","mbti.ESFJ.friend.3"],
            friend: [
                "You don't need to solve all your friends' problems",
                "Don't spend too much energy on gossip",
                "Accept friends who are different from you",
                "Express your own needs too"
            ]
        },
        deepAnalysis: {
            psychologyKey: "mbti.ESFJ.psychology",
            psychology: "ESFJs are guardians of social harmony. They are sensitive to others' needs and work to make everyone feel comfortable. They value tradition and customs and often play central roles in communities.",
            growthKey: "mbti.ESFJ.growth",
            growth: "Learn to value yourself without others' approval. Conflict isn't always bad. Treat your own needs as important as others'.",
            careerKey: "mbti.ESFJ.career",
            career: "Nurse, teacher, event planner, HR representative, sales — jobs where you can be with people and care for them are ideal.",
            stressKey: "mbti.ESFJ.stress",
            stress: "Under stress, you may feel deeply hurt if you feel unappreciated. Support and expressions of gratitude from close ones help."
        }
    },

    // Explorers
    "ISTP": {
        name: "ISTP",
        titleKey: "mbti.ISTP.title",
        title: "The Craftsman",
        icon: "\uD83D\uDD27",
        group: "explorer",
        descriptionKey: "mbti.ISTP.description",
        description: "Bold and practical experimenter. Loves building and taking things apart, stays calm in crises. Values freedom highly.",
        traits: {
            energyKey: "mbti.traits.introvertI",
            energy: "Introvert (I)",
            mindKey: "mbti.traits.sensingS",
            mind: "Sensing (S)",
            natureKey: "mbti.traits.thinkingT",
            nature: "Thinking (T)",
            tacticKey: "mbti.traits.prospectingP",
            tactic: "Prospecting (P)"
        },
        compatibility: {
            best: ["ESFJ", "ESTJ"],
            good: ["ISTP", "ESTP", "ISFP"],
            bad: ["ENFJ", "INFJ", "ENFP"]
        },
        tips: {
            loveKeys: ["mbti.ISTP.love.0","mbti.ISTP.love.1","mbti.ISTP.love.2","mbti.ISTP.love.3"],
            love: [
                "Practice expressing emotions in words",
                "Share your thoughts with your partner",
                "Acknowledge that emotional needs are important too",
                "Relationships need investment too"
            ],
            workKeys: ["mbti.ISTP.work.0","mbti.ISTP.work.1","mbti.ISTP.work.2","mbti.ISTP.work.3"],
            work: [
                "Share your insights in team meetings",
                "Long-term plans are sometimes necessary",
                "Consider others' emotional reactions",
                "Try to understand why rules exist"
            ],
            friendKeys: ["mbti.ISTP.friend.0","mbti.ISTP.friend.1","mbti.ISTP.friend.2","mbti.ISTP.friend.3"],
            friend: [
                "Join your friends' emotional conversations sometimes",
                "Keeping promises is important",
                "Reach out to friends first sometimes",
                "Invite friends to your activities"
            ]
        },
        deepAnalysis: {
            psychologyKey: "mbti.ISTP.psychology",
            psychology: "ISTPs are practical problem solvers. They love building, analyzing, and fixing things. They are remarkably calm in crises and respond logically. They highly value personal freedom and independence.",
            growthKey: "mbti.ISTP.growth",
            growth: "Acknowledge that emotions are an important source of information. Maintaining long-term commitments deepens relationships. Paying more attention to others' emotional needs will improve your relationships.",
            careerKey: "mbti.ISTP.career",
            career: "Engineer, technician, pilot, paramedic, athlete — jobs using practical skills with autonomy are ideal.",
            stressKey: "mbti.ISTP.stress",
            stress: "Under stress, you may isolate further or engage in reckless behavior. Hands-on activities or time in nature help."
        }
    },
    "ISFP": {
        name: "ISFP",
        titleKey: "mbti.ISFP.title",
        title: "The Adventurer",
        icon: "\uD83C\uDFA8",
        group: "explorer",
        descriptionKey: "mbti.ISFP.description",
        description: "Flexible and charming artist, ready to explore and try new experiences. Quiet on the outside but burning with inner passion. Lives in the present moment.",
        traits: {
            energyKey: "mbti.traits.introvertI",
            energy: "Introvert (I)",
            mindKey: "mbti.traits.sensingS",
            mind: "Sensing (S)",
            natureKey: "mbti.traits.feelingF",
            nature: "Feeling (F)",
            tacticKey: "mbti.traits.prospectingP",
            tactic: "Prospecting (P)"
        },
        compatibility: {
            best: ["ESTJ", "ENTJ"],
            good: ["ISFP", "ESFP", "ISTP"],
            bad: ["INTJ", "ENTJ", "ENFJ"]
        },
        tips: {
            loveKeys: ["mbti.ISFP.love.0","mbti.ISFP.love.1","mbti.ISFP.love.2","mbti.ISFP.love.3"],
            love: [
                "Practice expressing emotions in words",
                "Don't avoid conflict — talk it through",
                "Make long-term plans together too",
                "Don't take your partner's criticism as a personal attack"
            ],
            workKeys: ["mbti.ISFP.work.0","mbti.ISFP.work.1","mbti.ISFP.work.2","mbti.ISFP.work.3"],
            work: [
                "Create a system to meet deadlines",
                "Show your work more actively",
                "Set long-term goals too",
                "Structure doesn't kill creativity"
            ],
            friendKeys: ["mbti.ISFP.friend.0","mbti.ISFP.friend.1","mbti.ISFP.friend.2","mbti.ISFP.friend.3"],
            friend: [
                "Reach out to friends first sometimes",
                "Share your feelings too",
                "Being on time matters",
                "Try having deeper conversations"
            ]
        },
        deepAnalysis: {
            psychologyKey: "mbti.ISFP.psychology",
            psychology: "ISFPs are quiet artists. They pursue beauty and harmony, enjoying sensory experiences. They have strong inner values but may struggle to express them. They value living in the present moment.",
            growthKey: "mbti.ISFP.growth",
            growth: "Practice expressing your emotions and values in words. Handling conflict healthily rather than avoiding it will deepen your relationships. Future planning is sometimes necessary.",
            careerKey: "mbti.ISFP.career",
            career: "Artist, designer, musician, chef, nurse — jobs that utilize emotion and aesthetic sense are ideal.",
            stressKey: "mbti.ISFP.stress",
            stress: "Under stress, you may isolate further or fall into self-criticism. Artistic activities or time in nature help with recovery."
        }
    },
    "ESTP": {
        name: "ESTP",
        titleKey: "mbti.ESTP.title",
        title: "The Entrepreneur",
        icon: "\uD83C\uDFB2",
        group: "explorer",
        descriptionKey: "mbti.ESTP.description",
        description: "Smart, energetic, and enjoys taking risks. Quickly assesses situations and acts immediately. Loves adventure and thrills.",
        traits: {
            energyKey: "mbti.traits.extrovertE",
            energy: "Extrovert (E)",
            mindKey: "mbti.traits.sensingS",
            mind: "Sensing (S)",
            natureKey: "mbti.traits.thinkingT",
            nature: "Thinking (T)",
            tacticKey: "mbti.traits.prospectingP",
            tactic: "Prospecting (P)"
        },
        compatibility: {
            best: ["ISFJ", "ISTJ"],
            good: ["ESTP", "ISTP", "ESFP"],
            bad: ["INFJ", "ENFJ", "INFP"]
        },
        tips: {
            loveKeys: ["mbti.ESTP.love.0","mbti.ESTP.love.1","mbti.ESTP.love.2","mbti.ESTP.love.3"],
            love: [
                "Pay attention to your partner's emotional needs too",
                "Invest in long-term relationships too",
                "Promises and consistency are important",
                "Serious conversations are needed sometimes"
            ],
            workKeys: ["mbti.ESTP.work.0","mbti.ESTP.work.1","mbti.ESTP.work.2","mbti.ESTP.work.3"],
            work: [
                "Make long-term plans too",
                "Reduce impulsive decisions",
                "Consider your team members' feelings too",
                "Pay attention to details too"
            ],
            friendKeys: ["mbti.ESTP.friend.0","mbti.ESTP.friend.1","mbti.ESTP.friend.2","mbti.ESTP.friend.3"],
            friend: [
                "Respect your friends' boundaries",
                "Try having deeper conversations",
                "Not everything needs to be spontaneous",
                "Respect your friend's quiet time"
            ]
        },
        deepAnalysis: {
            psychologyKey: "mbti.ESTP.psychology",
            psychology: "ESTPs are people of action. They are fully immersed in the present moment, with quick judgment and adaptability. They enjoy thrills and adventure and dislike boredom. Their charisma naturally draws people to follow them.",
            growthKey: "mbti.ESTP.growth",
            growth: "Practice considering long-term consequences. Others' emotions are also important information. Sometimes stopping to think is also necessary.",
            careerKey: "mbti.ESTP.career",
            career: "Entrepreneur, sales professional, athlete, paramedic, marketer — jobs requiring quick judgment and action are ideal.",
            stressKey: "mbti.ESTP.stress",
            stress: "Under stress, you may become more impulsive or engage in risky behavior. Physical activity or new experiences help with stress relief."
        }
    },
    "ESFP": {
        name: "ESFP",
        titleKey: "mbti.ESFP.title",
        title: "The Entertainer",
        icon: "\uD83C\uDFAD",
        group: "explorer",
        descriptionKey: "mbti.ESFP.description",
        description: "Spontaneous, energetic, and passionate entertainer. Life is a party and you're the star. Loves enjoying the moment and making people happy.",
        traits: {
            energyKey: "mbti.traits.extrovertE",
            energy: "Extrovert (E)",
            mindKey: "mbti.traits.sensingS",
            mind: "Sensing (S)",
            natureKey: "mbti.traits.feelingF",
            nature: "Feeling (F)",
            tacticKey: "mbti.traits.prospectingP",
            tactic: "Prospecting (P)"
        },
        compatibility: {
            best: ["ISTJ", "ISFJ"],
            good: ["ESFP", "ESTP", "ISFP"],
            bad: ["INTJ", "INFJ", "INTP"]
        },
        tips: {
            loveKeys: ["mbti.ESFP.love.0","mbti.ESFP.love.1","mbti.ESFP.love.2","mbti.ESFP.love.3"],
            love: [
                "Invest in long-term relationships too",
                "Serious conversations are needed too",
                "Respect your partner's quiet time",
                "Keeping promises builds trust"
            ],
            workKeys: ["mbti.ESFP.work.0","mbti.ESFP.work.1","mbti.ESFP.work.2","mbti.ESFP.work.3"],
            work: [
                "Pay attention to deadlines and details",
                "Not every task will be fun",
                "Set long-term goals too",
                "Reduce impulsive decisions"
            ],
            friendKeys: ["mbti.ESFP.friend.0","mbti.ESFP.friend.1","mbti.ESFP.friend.2","mbti.ESFP.friend.3"],
            friend: [
                "Respect your friends' quiet needs too",
                "Try having deeper conversations",
                "A party atmosphere isn't always needed",
                "Sincerely celebrate your friends' success"
            ]
        },
        deepAnalysis: {
            psychologyKey: "mbti.ESFP.psychology",
            psychology: "ESFPs are people who enjoy life's celebrations. They are fully immersed in the present, love bringing joy to people, enjoy sensory experiences, and are spontaneous and flexible. They enjoy being the center of attention.",
            growthKey: "mbti.ESFP.growth",
            growth: "Practice considering long-term consequences. Life has responsibilities as well as parties. Serious conversations and deep relationships are also valuable. Planning for the future is sometimes necessary.",
            careerKey: "mbti.ESFP.career",
            career: "Entertainer, event planner, sales, tour guide, teacher — jobs where you can be with people and bring joy are ideal.",
            stressKey: "mbti.ESFP.stress",
            stress: "Under stress, you may escape from reality or seek excessive stimulation. Time with close friends or creative activities help."
        }
    }
};
