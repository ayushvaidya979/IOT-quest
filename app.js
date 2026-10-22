const modules = {
  esp32: { name: 'ESP32', reward: 'Circuit Scout Badge', xp: 150, doodle: 'esp32-doodle', quiz: { question: 'What feature lets an ESP32 connect to your home network without an extra part?', answers: ['Wi-Fi', 'A resistor', 'A battery clip'], correct: 0 }, steps: [
    ['DISCOVER THE BRAIN BLOCK', 'Meet the ESP32', 'The ESP32 is a tiny computer that reads the world through sensors and controls lights, motors, and more.', ['Has Wi-Fi and Bluetooth built in', 'Reads inputs and creates outputs', 'Perfect for connected projects']],
    ['BUILD THE CIRCUIT', 'Give it a <em>mission</em>', 'Connect an LED to one output pin. Your code can tell that pin exactly when to send power.', ['Use a safe resistor with the LED', 'Connect a ground wire', 'Upload a simple blink program']],
    ['MASTER THE SIGNAL', 'Make it <em>talk</em>', 'Add a sensor and let the ESP32 send its reading over Wi-Fi. You just made an IoT project!', ['Read one sensor value', 'Send it to a dashboard', 'Test your project in the real world']]
  ] },
  breadboard: { name: 'Breadboard', reward: 'Build Base Badge', xp: 120, doodle: 'breadboard-doodle', quiz: { question: 'What do the connected rows on a breadboard help you do?', answers: ['Join component legs without soldering', 'Recharge a battery', 'Measure voltage'], correct: 0 }, steps: [
    ['DISCOVER THE BUILD BASE', 'Meet the Breadboard', 'A breadboard is a reusable building platform. It lets you make circuits without permanently soldering parts together.', ['Rows of tiny holes are electrically connected', 'The centre gap separates each side', 'Side rails can carry power']],
    ['BUILD THE PATH', 'Place the <em>parts</em>', 'Place each component leg into a separate row, then use jumper wires to create the route your electricity follows.', ['Keep each connection visible', 'Use red for positive power', 'Use black for ground']],
    ['MASTER THE MAP', 'Trace the <em>current</em>', 'Before powering up, trace the route from your power rail to every component and back to ground.', ['Check for accidental shorts', 'Keep power rails organised', 'Build confidently without soldering']]
  ] },
  resistor: { name: 'Resistors', reward: 'Current Keeper Badge', xp: 100, doodle: 'resistor-doodle', quiz: { question: 'Why do we add a resistor before most LEDs?', answers: ['To limit current and protect the LED', 'To make the LED brighter forever', 'To connect to Wi-Fi'], correct: 0 }, steps: [
    ['DISCOVER THE CURRENT KEEPER', 'Meet a Resistor', 'A resistor slows down electric current. Think of it as a narrow path that keeps your circuit from getting a power rush.', ['Measured in ohms (Ω)', 'Often marked with coloured bands', 'Protects delicate components']],
    ['BUILD A SAFE PATH', 'Read the <em>bands</em>', 'The coloured stripes tell you a resistor value. Use the correct value to make your circuit safe and predictable.', ['Read bands from left to right', 'Choose a value for your load', 'Place it in series with the component']],
    ['MASTER THE FLOW', 'Control the <em>spark</em>', 'Try different resistor values with an LED. More resistance means less current and a gentler glow.', ['Higher ohms = lower current', 'Use a resistor with LEDs', 'Never short power to ground']]
  ] },
  led: { name: 'LEDs', reward: 'Glow Maker Badge', xp: 100, doodle: 'led-doodle', quiz: { question: 'Which LED leg usually connects toward ground?', answers: ['The shorter leg (cathode)', 'The longer leg (anode)', 'Either leg'], correct: 0 }, steps: [
    ['DISCOVER THE LIGHT BLOCK', 'Meet an LED', 'An LED is a light-emitting diode: electricity flows one way through it and creates a bright little glow.', ['Long leg is usually positive', 'Short leg is usually negative', 'Needs a current-limiting resistor']],
    ['BUILD THE GLOW', 'Aim the <em>light</em>', 'Place the LED with the right direction, then connect a resistor in series before giving it power.', ['Anode toward the positive side', 'Cathode toward ground', 'Resistor anywhere in series']],
    ['MASTER THE COLOUR', 'Code a <em>signal</em>', 'Use the ESP32 to blink an LED. That tiny light becomes a status message your project can speak with.', ['Blink once for a heartbeat', 'Use patterns for errors', 'Mix RGB LEDs for more colour']]
  ] },
  transistor: { name: 'Transistors', reward: 'Switch Master Badge', xp: 180, doodle: 'transistor-doodle', quiz: { question: 'In a simple circuit, a transistor can act most like a…', answers: ['Tiny electronic switch', 'Storage battery', 'Wi-Fi antenna'], correct: 0 }, steps: [
    ['DISCOVER THE TINY SWITCH', 'Meet a Transistor', 'A transistor uses a small signal to control a larger one. It is the tiny switch behind almost every digital device.', ['Can switch a load on and off', 'Can amplify a small signal', 'Has three connecting legs']],
    ['BUILD THE CONTROL', 'Use a <em>small signal</em>', 'Let one ESP32 pin control a transistor, then use it to safely switch a motor, strip light, or buzzer.', ['Use a base or gate resistor', 'Share a common ground', 'Choose a transistor rated for the load']],
    ['MASTER THE POWER', 'Control the <em>big blocks</em>', 'Your microcontroller stays safe while the transistor handles the higher-power work.', ['Check current ratings', 'Add a diode for motors', 'Switch power with confidence']]
  ] },
  capacitor: { name: 'Capacitors', reward: 'Charge Keeper Badge', xp: 130, doodle: 'capacitor-doodle', quiz: { question: 'What is a capacitor designed to do?', answers: ['Store and release electrical charge', 'Create Wi-Fi signals', 'Measure light'], correct: 0 }, steps: [
    ['DISCOVER THE CHARGE KEEPER', 'Meet a Capacitor', 'A capacitor stores a small amount of electrical energy, then releases it when your circuit needs a quick boost.', ['Measured in farads (F)', 'Smooths bumpy power', 'Some types have positive and negative legs']],
    ['BUILD THE BUFFER', 'Smooth the <em>power</em>', 'Place a capacitor across power and ground near your component to help clean up sudden dips and spikes.', ['Mind the polarity on electrolytics', 'Use values recommended by the part', 'Keep leads short near noisy circuits']],
    ['MASTER THE PULSE', 'Store a <em>spark</em>', 'Pair a resistor and capacitor to make a slow pulse or delay. You have built a simple timing circuit.', ['Charge through resistance', 'Discharge creates a delay', 'Use RC timing in real projects']]
  ] },
  ultrasonic: { name: 'Ultrasonic Sensor', reward: 'Sonar Scout Badge', xp: 140, doodle: 'ultrasonic-doodle', quiz: { question: 'How does an ultrasonic sensor determine distance to an obstacle?', answers: ['By measuring time taken for sound waves to bounce back', 'By measuring light reflection', 'By weighing the air'], correct: 0 }, steps: [
    ['DISCOVER THE SONIC EYES', 'Meet HC-SR04', 'An ultrasonic sensor emits high-frequency sound waves and measures how long they take to bounce back from objects.', ['Uses 40kHz ultrasound inaudible to human ears', 'Accurate from 2cm up to 400cm', 'Has Trigger and Echo pins']],
    ['BUILD THE RANGEFINDER', 'Time the <em>echo</em>', 'Send a 10µs pulse to Trig. The Echo pin stays high for the exact travel time of the ultrasonic wave.', ['Calculate speed of sound (343 m/s)', 'Distance = (Time × 0.0343) / 2', 'Filter out false reflections']],
    ['MASTER THE OBSTACLE RADAR', 'Build an <em>avoidance bot</em>', 'Connect the sensor to your ESP32 to steer robot rovers away from walls and detect intruders.', ['Map surroundings in real-time', 'Trigger alerts when threshold breached', 'Use in autonomous navigation']]
  ] },
  pir: { name: 'PIR Motion Sensor', reward: 'Sentry Sentinel Badge', xp: 130, doodle: 'pir-doodle', quiz: { question: 'What does a PIR sensor detect to register movement?', answers: ['Changes in infrared radiation from body heat', 'Sound volume shifts', 'Magnetic fields'], correct: 0 }, steps: [
    ['DISCOVER THE THERMAL SENTRY', 'Meet the PIR Sensor', 'PIR stands for Passive Infrared. It detects changes in the heat radiation given off by human bodies and warm animals.', ['Passive design consumes microamps of power', 'Fresnel lens focuses infrared rays onto pyroelectric crystals', 'Digital HIGH output upon movement']],
    ['BUILD THE SECURITY NODE', 'Tune the <em>sensitivity</em>', 'Use the dual onboard trimmer potentiometers to adjust the detection range and hold-time delay.', ['Adjust range from 3m to 7m', 'Select repeatable vs non-repeatable trigger modes', 'Wait 30s during initial warm-up boot']],
    ['MASTER THE AUTOMATION', 'Automate your <em>room</em>', 'Pair the PIR with a relay or smart bulb to automatically turn on lights only when a person enters.', ['Zero false positives with proper placement', 'Send push notifications via ESP32 Wi-Fi', 'Save energy with smart room occupancy']]
  ] },
  dht: { name: 'DHT Sensor', reward: 'Atmosphere Pilot Badge', xp: 120, doodle: 'dht-doodle', quiz: { question: 'What two climate measurements does a DHT11 or DHT22 sensor provide?', answers: ['Ambient temperature and relative humidity', 'Air pressure and altitude', 'CO2 levels and wind speed'], correct: 0 }, steps: [
    ['DISCOVER THE WEATHER PROBE', 'Meet the DHT Sensor', 'DHT sensors combine a capacitive humidity sensor and a thermistor with a built-in micro-chip to output digital weather data.', ['Measures relative humidity from 20% to 90%', 'Measures temperature with digital accuracy', 'Communicates over a single data wire']],
    ['BUILD THE WEATHER STATION', 'Read the <em>packet</em>', 'The sensor sends a 40-bit serial packet containing humidity integer, decimal, temp integer, and checksum.', ['Requires a 10k pull-up resistor on the data line', 'Sample once every 1 to 2 seconds', 'Verify checksum to reject noisy packets']],
    ['MASTER CLOUD TELEMETRY', 'Log to the <em>dashboard</em>', 'Push live temperature and humidity readings over MQTT to home automation dashboards like Grafana or Home Assistant.', ['Trigger climate alerts for frost or high heat', 'Control smart fans and humidifiers', 'Track historical weather trends']]
  ] },
  oled: { name: 'OLED Display', reward: 'Pixel Artisan Badge', xp: 160, doodle: 'oled-doodle', quiz: { question: 'What is a major visual advantage of OLED displays over traditional LCDs?', answers: ['Each pixel emits its own light, giving true blacks and infinite contrast', 'They require a blinding white backlight', 'They can only show one character at a time'], correct: 0 }, steps: [
    ['DISCOVER THE MINI CANVAS', 'Meet the SSD1306 OLED', 'A 0.96-inch OLED packs 128×64 self-illuminating pixels that light up individually with zero backlight bleed.', ['True pure blacks with ultra-high contrast', 'Visible in sunlight and sharp from wide angles', 'Uses standard I2C bus with only 2 data wires']],
    ['BUILD THE GRAPHICS BUFFER', 'Draw your <em>first pixels</em>', 'Send commands over SDA and SCL to render custom bitmap sprites, animated icons, text, and sensor gauges.', ['I2C address is usually 0x3C', 'Use Adafruit_SSD1306 or U8g2 libraries', 'Render retro voxel animations at 30+ FPS']],
    ['MASTER THE HUD', 'Craft a <em>wearable gadget</em>', 'Turn your OLED into an IoT smartwatch screen, crypto ticker, portable oscilloscope, or game console screen.', ['Low power consumption on dark themes', 'Display real-time Wi-Fi network diagnostics', 'Create interactive multi-level menus']]
  ] },
  lcd: { name: '16x2 LCD Display', reward: 'Matrix Master Badge', xp: 135, doodle: 'lcd-doodle', quiz: { question: 'How many total alphanumeric characters can a 16x2 LCD display simultaneously?', answers: ['32 characters (16 per line across 2 lines)', '16 characters total', '64 characters'], correct: 0 }, steps: [
    ['DISCOVER THE RETRO READOUT', 'Meet the 16x2 LCD', 'The classic 16-character by 2-line liquid crystal display is the undisputed king of clean, legible industrial diagnostic screens.', ['Displays ASCII characters and custom 5×8 pixel symbols', 'Backlit in cool blue or classic yellow-green', 'Often paired with an I2C backpack adapter to save pins']],
    ['BUILD THE I2C INTERFACE', 'Stream the <em>messages</em>', 'Using an I2C backpack (PCF8574), control all 16 pins of the LCD using just 2 microcontroller wires: SDA and SCL.', ['Address typically 0x27 or 0x3F', 'Adjust contrast via the small blue potentiometer', 'Print text with simple lcd.print() commands']],
    ['MASTER CUSTOM GLYPHS', 'Design <em>custom icons</em>', 'Create up to 8 unique pixel characters like hearts, battery bars, Wi-Fi signal waves, and temperature thermometers.', ['Define 8-byte pixel bit arrays', 'Create auto-scrolling news tickers', 'Build clean physical instrument readouts']]
  ] },
  dcmotor: { name: 'DC Motor', reward: 'Torque Driver Badge', xp: 155, doodle: 'motor-doodle', quiz: { question: 'Why should you NEVER connect a DC motor directly to a microcontroller GPIO pin?', answers: ['Motors draw far more current than a GPIO can supply and generate high-voltage inductive kickback', 'Motors operate exclusively on Wi-Fi', 'Microcontrollers only turn counter-clockwise'], correct: 0 }, steps: [
    ['DISCOVER THE KINETIC ENGINE', 'Meet the DC Motor', 'DC motors convert electrical current into mechanical rotation using electromagnetic coils and permanent magnets.', ['Speed depends on supplied voltage and PWM duty cycle', 'Direction reverses by flipping polarity', 'Requires an external driver chip or transistor switch']],
    ['BUILD THE H-BRIDGE DRIVER', 'Tame the <em>flyback</em>', 'Use an H-Bridge (L298N, L9110S) or MOSFET transistor paired with a flyback diode to safely control motor direction and speed.', ['PWM signal sets smooth variable rotation speed', 'H-Bridge configuration enables forward and reverse', 'Flyback diode absorbs inductive voltage spikes']],
    ['MASTER MOTORIZED ROBOTICS', 'Drive your <em>first robot</em>', 'Command twin DC motors from your ESP32 to build an autonomous rover, motorized fan, conveyor belt, or smart blinds.', ['Implement closed-loop encoder PID speed control', 'Build remote-controlled Bluetooth cars', 'Orchestrate synchronized robotics movements']]
  ] },
  button: { name: 'Push Button', reward: 'Trigger Tactician Badge', xp: 110, doodle: 'button-doodle', quiz: { question: 'Why is a pull-up or pull-down resistor necessary when connecting a push button to an input pin?', answers: ['To prevent a floating pin state when the button is unpressed', 'To make the button feel physically heavier', 'To increase the internet speed of the button'], correct: 0 }, steps: [
    ['DISCOVER THE TACTILE TRIGGER', 'Meet the Momentary Button', 'A momentary tactile button closes a circuit while held down, providing instant physical input from the user.', ['Normally open (NO) mechanical contact mechanism', 'Provides tactile click feedback when actuated', 'Must have a defined logic level when open']],
    ['BUILD THE PULL-UP CIRCUIT', 'Eliminate the <em>floating state</em>', 'Use the microcontroller internal pull-up resistor (INPUT_PULLUP) so the pin reads steady HIGH until pressed to ground.', ['Floating pins read random electrical static noise', 'Internal pull-ups eliminate external resistors', 'Reads digital 0 (LOW) when pressed']],
    ['MASTER HARDWARE DEBOUNCING', 'Eliminate <em>switch bounce</em>', 'Mechanical switch leaves bounce microscopically for milliseconds. Write debounce software to register exactly one clean click.', ['Software delay or timestamp debouncing', 'Detect short clicks vs long press actions', 'Create multi-function control buttons']]
  ] },
  jumper: { name: 'Jumper Wires', reward: 'Highway Weaver Badge', xp: 105, doodle: 'jumper-doodle', quiz: { question: 'Which jumper wire type is used to connect a breadboard hole directly to another breadboard hole?', answers: ['Male-to-Male (M-M) jumper wire', 'Male-to-Female (M-F) jumper wire', 'Female-to-Female (F-F) jumper wire'], correct: 0 }, steps: [
    ['DISCOVER THE CIRCUIT HIGHWAY', 'Meet Jumper Wires', 'Jumper wires are the flexible veins and arteries that route electrical current and digital signals between components.', ['Color-coded to keep circuits readable and clean', 'Standard 2.54mm pitch DuPont terminal pins', 'Available in Male-to-Male, Male-to-Female, and Female-to-Female']],
    ['BUILD THE CABLING STANDARDS', 'Standardize your <em>colors</em>', 'Professional engineers use Red for positive power rails, Black for ground, and distinct bright colors for data signals.', ['Red: VCC (+3.3V or +5V)', 'Black/Brown: GND (Common Ground)', 'Yellow/Green/Blue: I2C, SPI, and GPIO signals']],
    ['MASTER SIGNAL INTEGRITY', 'Route without <em>noise</em>', 'Keep jumper wire paths tidy and short to avoid parasitic capacitance, antenna pickup, and loose connections.', ['Secure breadboard tie-points firmly', 'Twist differential and high-speed signal pairs', 'Build rock-solid, production-ready prototypes']]
  ] },
  arduino: { name: 'Arduino Uno', reward: 'Maker Pioneer Badge', xp: 175, doodle: 'arduino-doodle', quiz: { question: 'What is the standard clock speed and core microcontroller chip of the Arduino Uno R3?', answers: ['ATmega328P running at 16 MHz', 'ARM Cortex-M7 running at 600 MHz', 'ESP8266 running at 80 MHz'], correct: 0 }, steps: [
    ['DISCOVER THE MAKER LEGEND', 'Meet the Arduino Uno', 'The board that started the open-source hardware revolution. Built around the rock-solid ATmega328P 8-bit microcontroller.', ['5V operating logic level with 16 MHz crystal oscillator', '14 digital I/O pins (6 PWM outputs) and 6 analog inputs', 'Built-in USB bootloader for one-click code uploading']],
    ['BUILD THE FIRMWARE SKETCH', 'Understand <em>setup() & loop()</em>', 'Arduino C/C++ sketches use two fundamental functions: setup() runs once on power-up, and loop() runs continuously.', ['pinMode(), digitalWrite(), and digitalRead() API', 'analogRead() provides 10-bit resolution (0-1023)', 'Serial monitor for real-time debugging at 9600-115200 baud']],
    ['MASTER SHIELD EXPANSION', 'Stack onto the <em>ecosystem</em>', 'Standardized Uno header pin spacing lets you snap on pre-built shields for motor drivers, LCDs, relays, and Ethernet.', ['Massive open-source library ecosystem', 'Extremely resilient to accidental short circuits', 'The ultimate hardware learning companion']]
  ] }
};

let activeModule = 'esp32';
let activeStep = 0;

const moduleName = document.querySelector('#questModuleName');
const rewardName = document.querySelector('#rewardName');
const stepNumber = document.querySelector('#stepNumber');
const eyebrow = document.querySelector('#journeyEyebrow');
const title = document.querySelector('#journey-title');
const text = document.querySelector('#journeyText');
const knowledgeList = document.querySelector('#knowledgeList');
const doodle = document.querySelector('#componentDoodle');
const previous = document.querySelector('#previousStep');
const next = document.querySelector('#nextStep');
const questSteps = document.querySelector('#questSteps');
const quizDialog = document.querySelector('#quizDialog');
const quizScreen = document.querySelector('#quizScreen');
const rewardScreen = document.querySelector('#rewardScreen');
const quizTitle = document.querySelector('#quizTitle');
const quizQuestion = document.querySelector('#quizQuestion');
const quizOptions = document.querySelector('#quizOptions');
const quizFeedback = document.querySelector('#quizFeedback');

function renderJourney() {
  const module = modules[activeModule];
  const step = module.steps[activeStep];
  moduleName.textContent = module.name;
  rewardName.textContent = module.reward;
  stepNumber.textContent = `0${activeStep + 1} / 03`;
  eyebrow.textContent = step[0];
  title.innerHTML = step[1];
  text.textContent = step[2];
  knowledgeList.innerHTML = step[3].map(item => `<li>${item}</li>`).join('');
  doodle.className = `component-doodle ${module.doodle}`;
  doodle.innerHTML = module.doodle === 'esp32-doodle' ? '<span class="doodle-screen">IoT</span><i></i><i></i><i></i><i></i>' : '<i></i><i></i><i></i>';
  [...questSteps.children].forEach((item, index) => item.classList.toggle('is-current', index === activeStep));
  previous.disabled = activeStep === 0;
  next.innerHTML = activeStep === 2 ? 'Take checkpoint <span>✦</span>' : 'Next checkpoint <span>→</span>';
}

function openQuiz() {
  const module = modules[activeModule];
  quizScreen.hidden = false;
  rewardScreen.hidden = true;
  quizTitle.textContent = `${module.name} signal test`;
  quizQuestion.textContent = module.quiz.question;
  quizFeedback.textContent = '';
  quizOptions.innerHTML = module.quiz.answers.map((answer, index) => `<button type="button" class="quiz-option" data-answer="${index}"><span>${String.fromCharCode(65 + index)}</span>${answer}</button>`).join('');
  quizDialog.showModal();
}

// Main landing page module interactions
document.querySelectorAll('.module-card').forEach(card => {
  card.addEventListener('click', (e) => {
    e.preventDefault();
    const selectedMod = card.dataset.module;
    window.location.href = `./module.html?module=${encodeURIComponent(selectedMod)}`;
  });
});

if (next && previous && quizDialog) {
  next.addEventListener('click', () => {
    if (activeStep === 2) openQuiz();
    else { activeStep += 1; renderJourney(); }
  });
  previous.addEventListener('click', () => { if (activeStep > 0) { activeStep -= 1; renderJourney(); } });
}

if (quizOptions) {
  quizOptions.addEventListener('click', event => {
    const option = event.target.closest('.quiz-option');
    if (!option) return;
    const isCorrect = Number(option.dataset.answer) === modules[activeModule].quiz.correct;
    document.querySelectorAll('.quiz-option').forEach(button => button.disabled = true);
    if (!isCorrect) {
      option.classList.add('is-wrong');
      quizFeedback.textContent = 'Almost! The correct answer is highlighted — trace that signal and try the next quest.';
      quizOptions.children[modules[activeModule].quiz.correct].classList.add('is-correct');
      return;
    }
    option.classList.add('is-correct');
    quizFeedback.textContent = 'Signal locked in. Reward incoming…';
    window.setTimeout(showReward, 650);
  });
}

function showReward() {
  const module = modules[activeModule];
  const earnedXp = document.querySelector('#earnedXp');
  const earnedBadge = document.querySelector('#earnedBadge');
  if (earnedXp) earnedXp.textContent = `${module.xp} XP`;
  if (earnedBadge) earnedBadge.textContent = module.reward;
  if (quizScreen) quizScreen.hidden = true;
  if (rewardScreen) rewardScreen.hidden = false;
}

const closeQuizBtn = document.querySelector('#closeQuiz');
const claimRewardBtn = document.querySelector('#claimReward');
if (closeQuizBtn) closeQuizBtn.addEventListener('click', () => quizDialog.close());
if (claimRewardBtn) claimRewardBtn.addEventListener('click', () => quizDialog.close());
if (moduleName && questSteps) renderJourney();

// ==========================================================================
// INTUITIVE CREATION SHOWCASE INTERACTIVE LOGIC
// ==========================================================================
const btnGameMode = document.querySelector('#btnGameMode');
const btnIotMode = document.querySelector('#btnIotMode');
const creationTitle = document.querySelector('#creation-title');
const creationDesc = document.querySelector('#creationDescription');
const eventActorIcon = document.querySelector('#eventActorIcon');
const eventActorLabel = document.querySelector('#eventActorLabel');
const eventVerbLabel = document.querySelector('#eventVerbLabel');
const eventTargetTag = document.querySelector('#eventTargetTag');
const eventActionVerb = document.querySelector('#eventActionVerb');
const eventActionTargetTag = document.querySelector('#eventActionTargetTag');

if (btnGameMode && btnIotMode) {
  btnGameMode.addEventListener('click', () => {
    btnGameMode.classList.add('is-active');
    btnIotMode.classList.remove('is-active');
    
    if (creationTitle) {
      creationTitle.innerHTML = 'Learn easy with<br /><span class="intuitive-text">gamified</span> learning';
    }
    if (creationDesc) {
      creationDesc.textContent = 'What makes IoT Quest unique and so easy to master is gamified learning. Quests, visual events, and interactive electronics turn hardware into an intuitive adventure — without getting stuck in complex syntax.';
    }
    if (eventActorIcon) eventActorIcon.textContent = '👾';
    if (eventActorLabel) eventActorLabel.textContent = 'Player';
    if (eventVerbLabel) eventVerbLabel.textContent = 'completes quest with';
    if (eventTargetTag) {
      eventTargetTag.className = 'target-tag coin-tag';
      eventTargetTag.innerHTML = '<span class="coin-icon">🪙</span><span class="target-name">150 XP</span>';
    }
    if (eventActionVerb) eventActionVerb.textContent = 'Unlock';
    if (eventActionTargetTag) {
      eventActionTargetTag.className = 'target-tag coin-tag';
      eventActionTargetTag.innerHTML = '<span class="coin-icon">🏅</span><span class="target-name">Circuit Scout Badge</span>';
    }
  });

  btnIotMode.addEventListener('click', () => {
    btnIotMode.classList.add('is-active');
    btnGameMode.classList.remove('is-active');
    
    if (creationTitle) {
      creationTitle.innerHTML = 'Build circuits with<br /><span class="intuitive-text">gamified</span> logic';
    }
    if (creationDesc) {
      creationDesc.textContent = 'What makes IoT Quest unique and so easy to use is visual event logic. Express the behavior of your circuits, sensors, and smart devices effortlessly — without writing complex boilerplate code.';
    }
    if (eventActorIcon) eventActorIcon.textContent = '📡';
    if (eventActorLabel) eventActorLabel.textContent = 'Ultrasonic Sensor';
    if (eventVerbLabel) eventVerbLabel.textContent = 'detects distance < 10cm from';
    if (eventTargetTag) {
      eventTargetTag.className = 'target-tag iot-tag';
      eventTargetTag.innerHTML = '<span>📦</span><span class="target-name">Obstacle</span>';
    }
    if (eventActionVerb) eventActionVerb.textContent = 'Trigger';
    if (eventActionTargetTag) {
      eventActionTargetTag.className = 'target-tag iot-tag';
      eventActionTargetTag.innerHTML = '<span>💡</span><span class="target-name">Red LED & Buzzer</span>';
    }
  });
}

// ==========================================================================
// REFERRAL & XP REWARDS INTERACTIONS
// ==========================================================================
const copyReferralBtn = document.querySelector('#copyReferralBtn');
const referralCodeText = document.querySelector('#referralCodeText');
const shareMoreBtn = document.querySelector('#shareMoreBtn');
const welcomeBonusBtn = document.querySelector('#welcomeBonusBtn');

if (copyReferralBtn && referralCodeText) {
  copyReferralBtn.addEventListener('click', async () => {
    const code = referralCodeText.textContent.trim();
    try {
      if (navigator.clipboard) {
        await navigator.clipboard.writeText(code);
      }
    } catch (_) {}
    
    copyReferralBtn.textContent = 'Copied! ✓';
    copyReferralBtn.classList.add('is-copied');
    setTimeout(() => {
      copyReferralBtn.textContent = 'Copy';
      copyReferralBtn.classList.remove('is-copied');
    }, 2000);
  });
}

if (shareMoreBtn && referralCodeText) {
  shareMoreBtn.addEventListener('click', async () => {
    const code = referralCodeText.textContent.trim();
    const shareData = {
      title: 'IoT Quest — Refer & Earn',
      text: `Join me on IoT Quest and earn 100 XP with code ${code}!`,
      url: window.location.href
    };
    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (_) {}
    } else if (copyReferralBtn) {
      copyReferralBtn.click();
    }
  });
}


