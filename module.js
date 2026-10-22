// Controller for Module Doodle Journey & Cloud Transitions

(function () {
  // Parse target module from URL query parameter ?module=xyz
  const urlParams = new URLSearchParams(window.location.search);
  let activeModuleId = urlParams.get('module') || 'esp32';

  if (!componentQuests[activeModuleId]) {
    activeModuleId = 'esp32';
  }

  let currentStepIdx = 0; // 0 to 4 (5 steps total)
  let isCloudTransitioning = false;

  // DOM Elements
  const moduleTag = document.getElementById('moduleTag');
  const moduleHeadingName = document.getElementById('moduleHeadingName');
  const altitudeDisplay = document.getElementById('altitudeDisplay');
  const stepperLine = document.getElementById('stepperLine');
  const stepperItems = document.getElementById('stepperItems');

  const stepBadge = document.getElementById('stepBadge');
  const stepTitle = document.getElementById('stepTitle');
  const stepSubtitle = document.getElementById('stepSubtitle');
  const stepDesc = document.getElementById('stepDesc');
  const takeawaysList = document.getElementById('takeawaysList');
  const stickyBody = document.getElementById('stickyBody');

  const doodleLabel = document.getElementById('doodleLabel');
  const doodleCanvasWrapper = document.getElementById('doodleCanvasWrapper');
  const doodleAnnotations = document.getElementById('doodleAnnotations');

  const prevStepBtn = document.getElementById('prevStepBtn');
  const nextStepBtn = document.getElementById('nextStepBtn');
  const stepCounterText = document.getElementById('stepCounterText');

  const quickModulePills = document.getElementById('quickModulePills');
  const cloudTransition = document.getElementById('cloudTransition');
  const cloudTransitionText = document.getElementById('cloudTransitionText');

  const completionDialog = document.getElementById('completionDialog');
  const completeTitle = document.getElementById('completeTitle');
  const completeDesc = document.getElementById('completeDesc');
  const completeBadgeName = document.getElementById('completeBadgeName');
  const completeXp = document.getElementById('completeXp');
  const replayQuestBtn = document.getElementById('replayQuestBtn');

  // Initialize Quick Module Switcher
  function initQuickSwitcher() {
    quickModulePills.innerHTML = '';
    Object.keys(componentQuests).forEach(key => {
      const quest = componentQuests[key];
      const pill = document.createElement('button');
      pill.type = 'button';
      pill.className = `quick-pill ${key === activeModuleId ? 'is-active' : ''}`;
      pill.textContent = quest.shortName;
      pill.addEventListener('click', () => {
        if (key === activeModuleId || isCloudTransitioning) return;
        switchModule(key);
      });
      quickModulePills.appendChild(pill);
    });
  }

  // Build the 5-step Stepper Navigation
  function renderStepper() {
    const quest = componentQuests[activeModuleId];
    stepperItems.innerHTML = '';

    quest.steps.forEach((step, idx) => {
      const li = document.createElement('li');
      const isCompleted = idx < currentStepIdx;
      const isActive = idx === currentStepIdx;

      li.className = `step-node-item ${isActive ? 'is-active' : ''} ${isCompleted ? 'is-completed' : ''}`;
      li.innerHTML = `
        <div class="step-circle">${isCompleted ? '✓' : idx + 1}</div>
        <div class="step-node-label">${step.title.split(' ')[0]}</div>
      `;

      li.addEventListener('click', () => {
        if (idx !== currentStepIdx && !isCloudTransitioning) {
          triggerCloudAscent(idx);
        }
      });

      stepperItems.appendChild(li);
    });

    const progressPct = (currentStepIdx / 4) * 100;
    stepperLine.style.setProperty('--progress-pct', `${progressPct}%`);
  }

  // Render content of current step
  function renderStepContent() {
    const quest = componentQuests[activeModuleId];
    const step = quest.steps[currentStepIdx];

    document.title = `${step.title} — ${quest.name} | IoT Quest`;
    moduleTag.textContent = `${quest.level} QUEST`;
    moduleHeadingName.textContent = quest.name.toUpperCase();
    altitudeDisplay.textContent = `STEP ${currentStepIdx + 1} OF 5 • ${step.altitude.toUpperCase()}`;

    stepBadge.textContent = `STEP 0${currentStepIdx + 1} / 05 • ${step.altitude.toUpperCase()}`;
    stepTitle.textContent = step.title;
    stepSubtitle.textContent = step.subtitle;
    stepDesc.textContent = step.desc;

    // Bullet points
    takeawaysList.innerHTML = step.takeaways
      .map(item => `<li>${item}</li>`)
      .join('');

    // Pro Tip
    stickyBody.textContent = step.tip;

    // Doodle Canvas
    doodleLabel.textContent = step.doodleLabel.toUpperCase();
    doodleCanvasWrapper.innerHTML = step.svgDoodle;

    // Doodle Annotations
    doodleAnnotations.innerHTML = step.annotations
      .map(ann => `<span class="annotation-badge">✎ ${ann.text}</span>`)
      .join('');

    // Counter and Buttons
    stepCounterText.textContent = `STEP ${currentStepIdx + 1} / 5`;
    prevStepBtn.disabled = currentStepIdx === 0;

    if (currentStepIdx === 4) {
      nextStepBtn.innerHTML = `<span>FINISH QUEST</span> <span class="btn-cloud-spark">🏆</span>`;
    } else {
      nextStepBtn.innerHTML = `<span>NEXT STEP</span> <span class="btn-cloud-spark">☁️ ➔</span>`;
    }

    renderStepper();
  }

  // Cloud Transition Function
  function triggerCloudAscent(targetStepIdx) {
    if (isCloudTransitioning) return;
    isCloudTransitioning = true;

    const nextStepNum = targetStepIdx + 1;
    const isGoingUp = targetStepIdx > currentStepIdx;

    const flightText = cloudTransitionText.querySelector('.flight-step');
    if (flightText) {
      flightText.textContent = isGoingUp
        ? `ASCENDING THROUGH CLOUDS TO STEP ${nextStepNum}...`
        : `DESCENDING TO STEP ${nextStepNum}...`;
    }

    // Trigger cloud curtain animation
    cloudTransition.classList.remove('is-transitioning');
    void cloudTransition.offsetWidth; // Force reflow
    cloudTransition.classList.add('is-transitioning');

    // Midway through cloud transition (around 650ms), swap content behind peak cloud cover
    setTimeout(() => {
      currentStepIdx = targetStepIdx;
      renderStepContent();
      window.scrollTo({ top: 120, behavior: 'instant' });
    }, 650);

    // End transition cleanly after ascent completes
    setTimeout(() => {
      cloudTransition.classList.remove('is-transitioning');
      isCloudTransitioning = false;
    }, 1420);
  }

  // Switch Module
  function switchModule(newModuleId) {
    activeModuleId = newModuleId;
    currentStepIdx = 0;
    const newUrl = `${window.location.pathname}?module=${newModuleId}`;
    window.history.pushState({ module: newModuleId }, '', newUrl);

    initQuickSwitcher();
    triggerCloudAscent(0);
  }

  // Event Listeners for Next / Prev buttons
  nextStepBtn.addEventListener('click', () => {
    if (currentStepIdx < 4) {
      triggerCloudAscent(currentStepIdx + 1);
    } else {
      showCompletionModal();
    }
  });

  prevStepBtn.addEventListener('click', () => {
    if (currentStepIdx > 0) {
      triggerCloudAscent(currentStepIdx - 1);
    }
  });

  // Completion Dialog Modal
  function showCompletionModal() {
    const quest = componentQuests[activeModuleId];
    completeTitle.textContent = `${quest.shortName} Mastered!`;
    completeDesc.textContent = `You climbed through all 5 cloud levels of the ${quest.name} doodle journey. You've earned the ${quest.reward} and +${quest.xp} Maker XP!`;
    completeBadgeName.textContent = quest.reward;
    completeXp.textContent = `+${quest.xp} XP EARNED`;
    completionDialog.showModal();
  }

  replayQuestBtn.addEventListener('click', () => {
    completionDialog.close();
    triggerCloudAscent(0);
  });

  // ==========================================
  // 10-QUESTION MODULE QUIZ ENGINE
  // ==========================================
  const startQuizBtn = document.getElementById('startQuizBtn');
  const moduleQuizDialog = document.getElementById('moduleQuizDialog');
  const closeQuizModalBtn = document.getElementById('closeQuizModalBtn');

  const quizActiveScreen = document.getElementById('quizActiveScreen');
  const quizResultsScreen = document.getElementById('quizResultsScreen');

  const quizModuleBadge = document.getElementById('quizModuleBadge');
  const quizMainTitle = document.getElementById('quizMainTitle');
  const quizQuestionNum = document.getElementById('quizQuestionNum');
  const quizProgressBar = document.getElementById('quizProgressBar');
  const quizQuestionText = document.getElementById('quizQuestionText');
  const quizOptionsGrid = document.getElementById('quizOptionsGrid');

  const quizFeedbackBox = document.getElementById('quizFeedbackBox');
  const feedbackIcon = document.getElementById('feedbackIcon');
  const feedbackHeading = document.getElementById('feedbackHeading');
  const feedbackExplain = document.getElementById('feedbackExplain');
  const quizContinueBtn = document.getElementById('quizContinueBtn');

  const resultsIcon = document.getElementById('resultsIcon');
  const resultsTitle = document.getElementById('resultsTitle');
  const resultsDesc = document.getElementById('resultsDesc');
  const resultsScoreDisplay = document.getElementById('resultsScoreDisplay');
  const resultsRankTitle = document.getElementById('resultsRankTitle');
  const resultsScoreSummary = document.getElementById('resultsScoreSummary');
  const resultsXpAward = document.getElementById('resultsXpAward');
  const retakeQuizBtn = document.getElementById('retakeQuizBtn');

  let currentQuizQuestionIdx = 0;
  let quizScore = 0;
  let hasAnsweredCurrentQuestion = false;

  // Open Quiz from Completion Dialog
  startQuizBtn.addEventListener('click', () => {
    completionDialog.close();
    openModuleQuiz();
  });

  closeQuizModalBtn.addEventListener('click', () => {
    moduleQuizDialog.close();
  });

  retakeQuizBtn.addEventListener('click', () => {
    openModuleQuiz();
  });

  function openModuleQuiz() {
    const quizData = moduleQuizzes[activeModuleId];
    if (!quizData || !quizData.questions || quizData.questions.length === 0) return;

    currentQuizQuestionIdx = 0;
    quizScore = 0;
    hasAnsweredCurrentQuestion = false;

    quizModuleBadge.textContent = quizData.kicker;
    quizMainTitle.textContent = quizData.title;

    quizActiveScreen.hidden = false;
    quizResultsScreen.hidden = true;
    quizFeedbackBox.hidden = true;

    renderQuizQuestion();
    moduleQuizDialog.showModal();
  }

  function renderQuizQuestion() {
    const quizData = moduleQuizzes[activeModuleId];
    const q = quizData.questions[currentQuizQuestionIdx];
    const totalQ = quizData.questions.length; // 10 questions

    hasAnsweredCurrentQuestion = false;
    quizFeedbackBox.hidden = true;

    // Header info & progress
    const qNumberFormatted = (currentQuizQuestionIdx + 1).toString().padStart(2, '0');
    quizQuestionNum.textContent = `${qNumberFormatted} / 10`;

    const progressPct = ((currentQuizQuestionIdx + 1) / totalQ) * 100;
    quizProgressBar.style.width = `${progressPct}%`;

    // Question content
    quizQuestionText.textContent = q.question;

    // Build 4 option buttons
    quizOptionsGrid.innerHTML = '';
    const optionLetters = ['A', 'B', 'C', 'D'];

    q.options.forEach((optText, optIdx) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'quiz-option-choice';
      btn.innerHTML = `
        <span class="quiz-option-letter">${optionLetters[optIdx]}</span>
        <span class="quiz-option-text">${optText}</span>
      `;

      btn.addEventListener('click', () => {
        if (!hasAnsweredCurrentQuestion) {
          handleQuizAnswer(optIdx, btn);
        }
      });

      quizOptionsGrid.appendChild(btn);
    });
  }

  function handleQuizAnswer(selectedIdx, selectedBtn) {
    hasAnsweredCurrentQuestion = true;
    const quizData = moduleQuizzes[activeModuleId];
    const q = quizData.questions[currentQuizQuestionIdx];
    const isCorrect = selectedIdx === q.correct;

    if (isCorrect) {
      quizScore += 1;
    }

    // Disable all options and highlight
    const optionButtons = quizOptionsGrid.querySelectorAll('.quiz-option-choice');
    optionButtons.forEach((btn, idx) => {
      btn.disabled = true;
      if (idx === q.correct) {
        btn.classList.add('is-revealed-correct');
      }
    });

    if (isCorrect) {
      selectedBtn.classList.remove('is-revealed-correct');
      selectedBtn.classList.add('is-selected-correct');
      feedbackIcon.textContent = '✅';
      feedbackHeading.textContent = 'Brilliant! Correct Answer.';
      feedbackHeading.style.color = '#34d399';
      quizFeedbackBox.className = 'quiz-feedback-box is-correct';
    } else {
      selectedBtn.classList.add('is-selected-wrong');
      feedbackIcon.textContent = '❌';
      feedbackHeading.textContent = 'Not quite! Review the schematic.';
      feedbackHeading.style.color = '#f43f5e';
      quizFeedbackBox.className = 'quiz-feedback-box is-wrong';
    }

    feedbackExplain.textContent = q.explanation;
    quizFeedbackBox.hidden = false;

    const isLastQuestion = currentQuizQuestionIdx === quizData.questions.length - 1;
    quizContinueBtn.innerHTML = isLastQuestion
      ? `VIEW FINAL SCORE REPORT 🏆`
      : `NEXT QUESTION (${currentQuizQuestionIdx + 2}/10) ➔`;
  }

  quizContinueBtn.addEventListener('click', () => {
    const quizData = moduleQuizzes[activeModuleId];
    if (currentQuizQuestionIdx < quizData.questions.length - 1) {
      currentQuizQuestionIdx += 1;
      renderQuizQuestion();
    } else {
      showQuizResults();
    }
  });

  function showQuizResults() {
    const quest = componentQuests[activeModuleId];
    quizActiveScreen.hidden = true;
    quizResultsScreen.hidden = false;

    resultsScoreDisplay.textContent = quizScore;
    resultsScoreSummary.textContent = `You correctly answered ${quizScore} out of 10 questions on the ${quest.name}.`;

    if (quizScore >= 9) {
      resultsIcon.textContent = '🏆';
      resultsTitle.textContent = 'Grandmaster Silicon Achiever!';
      resultsDesc.textContent = 'Spectacular score! You have completely mastered the theory, wiring, and code logic of this IoT component.';
      resultsRankTitle.textContent = 'MASTER RANK: GRANDMASTER ENGINEER';
      resultsRankTitle.style.color = 'var(--gold)';
      resultsXpAward.textContent = '⚡ +250 BONUS MAKER XP EARNED!';
    } else if (quizScore >= 7) {
      resultsIcon.textContent = '🎖️';
      resultsTitle.textContent = 'Quest Passed with Distinction!';
      resultsDesc.textContent = 'Great work! You scored high above the passing threshold and earned full module proficiency.';
      resultsRankTitle.textContent = 'RANK: SENIOR HARDWARE BUILDER';
      resultsRankTitle.style.color = 'var(--aqua)';
      resultsXpAward.textContent = '⚡ +175 BONUS MAKER XP EARNED!';
    } else {
      resultsIcon.textContent = '💡';
      resultsTitle.textContent = 'Checkpoint Completed!';
      resultsDesc.textContent = 'Good effort! You can retake the quiz anytime or review the 5 doodle steps to aim for a perfect 10/10.';
      resultsRankTitle.textContent = 'RANK: JUNIOR EXPLORER';
      resultsRankTitle.style.color = '#cbd5e1';
      resultsXpAward.textContent = '⚡ +100 PARTICIPATION XP EARNED!';
    }
  }

  // Keyboard navigation (Arrow keys)
  window.addEventListener('keydown', (e) => {
    if (completionDialog.open || moduleQuizDialog.open) return;
    if (e.key === 'ArrowRight' && currentStepIdx < 4) {
      triggerCloudAscent(currentStepIdx + 1);
    } else if (e.key === 'ArrowLeft' && currentStepIdx > 0) {
      triggerCloudAscent(currentStepIdx - 1);
    }
  });

  // Initial Run
  initQuickSwitcher();
  renderStepContent();
})();
