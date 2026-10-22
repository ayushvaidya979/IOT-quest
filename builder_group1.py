# -*- coding: utf-8 -*-
"""
Builder Group 1: Ultrasonic, PIR, DHT
"""

GROUP1_DATA = {
  "ultrasonic": {
    "id": "ultrasonic",
    "name": "Ultrasonic Distance Sensor",
    "shortName": "Ultrasonic",
    "level": "LEVEL 07",
    "reward": "Sonar Scout Badge",
    "xp": 140,
    "steps": [
      {
        "stepNum": 1,
        "altitude": "Ground Level • Introduction",
        "title": "Meet The Echolocation Eyes",
        "subtitle": "Step 1: What is the HC-SR04 Ultrasonic Sensor?",
        "desc": "Just like bats and submarines navigate through total darkness using acoustic pulses, the HC-SR04 sensor uses sound waves to see! It transmits high-frequency 40,000 Hz ultrasound bursts and times how many microseconds elapse before the echo bounces back from an obstacle.",
        "takeaways": [
          "Emits 40kHz ultrasound bursts completely silent to human ears",
          "Non-contact distance measurement from 2cm to 400cm with 3mm precision",
          "Narrow measuring angle of 15 degrees for focused directional obstacle sensing",
          "Dual transducers: Silver cylinder 'T' transmits, cylinder 'R' receives"
        ],
        "tip": "Ultrasonic waves reflect best off hard, flat surfaces. Soft fabrics or plush toys absorb sonic waves, while angled walls can deflect the echo away.",
        "doodleLabel": "Anatomy of the Ultrasonic Eyes",
        "svgDoodle": """<svg viewBox="0 0 360 280" class="doodle-svg" xmlns="http://www.w3.org/2000/svg">
  <style>
    .d-chip { fill: #082f49; stroke: #00cec9; stroke-width: 3.5; stroke-linejoin: round; }
    .d-barrel { fill: #0f172a; stroke: #e0f2fe; stroke-width: 3; }
    .d-wave { stroke: #00cec9; stroke-width: 2.5; fill: none; stroke-linecap: round; }
    .d-txt { font-family: 'Press Start 2P', monospace; font-size: 8px; fill: #f0fdfa; }
  </style>
  <rect x="50" y="70" width="260" height="130" rx="14" class="d-chip"/>
  <circle cx="115" cy="135" r="45" class="d-barrel"/>
  <circle cx="115" cy="135" r="32" fill="#1e293b" stroke="#00cec9" stroke-width="2"/>
  <text x="108" y="140" class="d-txt" fill="#38bdf8">T</text>
  <circle cx="245" cy="135" r="45" class="d-barrel"/>
  <circle cx="245" cy="135" r="32" fill="#1e293b" stroke="#00cec9" stroke-width="2"/>
  <text x="238" y="140" class="d-txt" fill="#38bdf8">R</text>
  <path d="M 60 115 A 30 30 0 0 0 60 155" class="d-wave"/>
  <path d="M 40 100 A 50 50 0 0 0 40 170" class="d-wave"/>
  <line x1="120" y1="200" x2="120" y2="245" stroke="#e0f2fe" stroke-width="4"/>
  <line x1="150" y1="200" x2="150" y2="245" stroke="#e0f2fe" stroke-width="4"/>
  <line x1="180" y1="200" x2="180" y2="245" stroke="#e0f2fe" stroke-width="4"/>
  <line x1="210" y1="200" x2="210" y2="245" stroke="#e0f2fe" stroke-width="4"/>
  <text x="95" y="262" class="d-txt" fill="#ffc960">VCC TRIG ECHO GND</text>
</svg>""",
        "annotations": [
          {"text": "Transmitter emits 40kHz ultrasound blast", "x": "4%", "y": "30%"},
          {"text": "Receiver catches reflected sonic echo", "x": "62%", "y": "30%"}
        ]
      },
      {
        "stepNum": 2,
        "altitude": "Low Atmosphere • Pinout & Schematics",
        "title": "Trigger & Echo Pinout",
        "subtitle": "Step 2: Pinout & 3.3V Logic Protection",
        "desc": "The module has four pins: VCC (5V), TRIG (Digital Input), ECHO (Digital Output), and GND. Triggering requires a 10-microsecond HIGH pulse. The ECHO pin outputs a 5V signal pulse whose width equals the travel time.",
        "takeaways": [
          "VCC requires 5V power supply for optimal acoustic transducer power",
          "TRIG pin needs a 10µs HIGH pulse to initiate ultrasound burst",
          "ECHO pin outputs a 5V logic pulse proportional to distance",
          "Use a voltage divider (1kΩ + 2kΩ) to protect 3.3V ESP32 inputs"
        ],
        "tip": "Connecting the HC-SR04 5V Echo pin directly to a 3.3V microcontroller like ESP32 can degrade the GPIO pin. Always step it down with a resistor divider!",
        "doodleLabel": "3.3V Voltage Divider Protection",
        "svgDoodle": """<svg viewBox="0 0 360 280" class="doodle-svg" xmlns="http://www.w3.org/2000/svg">
  <style>
    .d-wire { stroke: #38bdf8; stroke-width: 3; fill: none; stroke-linecap: round; }
    .d-res { stroke: #fbbf24; stroke-width: 3.5; fill: none; }
    .d-txt { font-family: 'Press Start 2P', monospace; font-size: 8px; fill: #f0fdfa; }
  </style>
  <rect x="20" y="60" width="80" height="120" rx="8" fill="#082f49" stroke="#00cec9" stroke-width="3"/>
  <text x="32" y="125" class="d-txt" fill="#00cec9">ECHO</text>
  <text x="32" y="145" class="d-txt" fill="#f87171">5V OUT</text>
  <line x1="100" y1="120" x2="160" y2="120" class="d-wire"/>
  <path d="M 160 120 L 170 110 L 180 130 L 190 110 L 200 130 L 210 120" class="d-res"/>
  <text x="165" y="98" class="d-txt" fill="#fbbf24">1kΩ</text>
  <line x1="210" y1="120" x2="270" y2="120" class="d-wire"/>
  <rect x="270" y="60" width="70" height="120" rx="8" fill="#0f172a" stroke="#10b981" stroke-width="3"/>
  <text x="275" y="115" class="d-txt" fill="#10b981">ESP32</text>
  <text x="275" y="135" class="d-txt" fill="#38bdf8">3.3V OK</text>
  <line x1="210" y1="120" x2="210" y2="160" class="d-wire"/>
  <path d="M 210 160 L 200 170 L 220 180 L 200 190 L 220 200 L 210 210" class="d-res"/>
  <text x="228" y="190" class="d-txt" fill="#fbbf24">2kΩ</text>
  <line x1="210" y1="210" x2="210" y2="240" class="d-wire"/>
  <line x1="195" y1="240" x2="225" y2="240" stroke="#f0fdfa" stroke-width="3"/>
  <text x="235" y="245" class="d-txt" fill="#94a3b8">GND</text>
</svg>""",
        "annotations": [
          {"text": "1kΩ + 2kΩ divides 5.0V down to 3.33V", "x": "35%", "y": "15%"},
          {"text": "Protects delicate 3.3V microcontroller silicon", "x": "40%", "y": "85%"}
        ]
      },
      {
        "stepNum": 3,
        "altitude": "Mid Atmosphere • Physics & Math",
        "title": "Speed of Sound Equation",
        "subtitle": "Step 3: Calculating centimeters from microsecond timing",
        "desc": "Sound travels through room temperature air at approximately 343 meters per second (0.0343 cm per microsecond). Because the wave travels out to the obstacle and bounces back, divide the total round-trip time by 2.",
        "takeaways": [
          "Sound velocity: 343 m/s = 0.0343 cm/µs = 29.1 µs per cm",
          "Formula: Distance (cm) = (Echo Time in µs × 0.0343) / 2",
          "Alternative shortcut: Distance (cm) = Echo Time in µs / 58.2",
          "Temperature variations create minor +/-2% velocity changes"
        ],
        "tip": "If no echo is detected, the sensor times out at ~38ms. Cap the readings in software at 400cm to filter out timeout noise.",
        "doodleLabel": "Distance Calculation Formula",
        "svgDoodle": """<svg viewBox="0 0 360 280" class="doodle-svg" xmlns="http://www.w3.org/2000/svg">
  <style>
    .d-box { fill: #082f49; stroke: #38bdf8; stroke-width: 3; }
    .d-txt { font-family: 'Press Start 2P', monospace; font-size: 8px; fill: #f0fdfa; }
  </style>
  <rect x="25" y="30" width="310" height="220" rx="12" class="d-box"/>
  <text x="45" y="70" class="d-txt" fill="#ffd978">THE ECHOLOCATION MATH</text>
  <rect x="45" y="90" width="270" height="60" rx="6" fill="#0f172a" stroke="#00cec9" stroke-width="2"/>
  <text x="60" y="125" class="d-txt" fill="#00cec9">Distance = (t * 0.0343) / 2</text>
  <text x="50" y="180" class="d-txt" fill="#94a3b8">Time = 582 microseconds</text>
  <text x="50" y="205" class="d-txt" fill="#10b981">→ Distance = 10.0 cm!</text>
  <text x="50" y="230" class="d-txt" fill="#f43f5e">Divide by 2 because round-trip!</text>
</svg>""",
        "annotations": [
          {"text": "Forward transit + return echo", "x": "10%", "y": "78%"},
          {"text": "Millimeter level resolution", "x": "60%", "y": "78%"}
        ]
      },
      {
        "stepNum": 4,
        "altitude": "High Stratosphere • Code & Logic",
        "title": "Microcontroller Driver Code",
        "subtitle": "Step 4: Non-blocking ultrasonic measurement routine",
        "desc": "In C++, pulseIn() measures how long the ECHO pin stays HIGH. We send a 10µs pulse on TRIG, wait for the echo pulse with a timeout, and calculate distance.",
        "takeaways": [
          "digitalWrite(TRIG_PIN, HIGH); delayMicroseconds(10); triggers sonar",
          "long t = pulseIn(ECHO_PIN, HIGH, 30000); measures microsecond duration",
          "float distanceCm = (t * 0.0343) / 2.0;",
          "A 30ms timeout prevents loop freeze if no echo returns"
        ],
        "tip": "Taking the median of 3 consecutive readings filters out spurious acoustic spikes and ensures rock-solid readings.",
        "doodleLabel": "C++ Distance Function",
        "svgDoodle": """<svg viewBox="0 0 360 280" class="doodle-svg" xmlns="http://www.w3.org/2000/svg">
  <style>
    .d-box { fill: #02111d; stroke: #38bdf8; stroke-width: 3; }
    .d-code { font-family: monospace; font-size: 10px; fill: #7dd3fc; }
    .d-kw { fill: #f43f5e; font-weight: bold; }
    .d-fn { fill: #38bdf8; }
  </style>
  <rect x="20" y="25" width="320" height="230" rx="10" class="d-box"/>
  <text x="35" y="55" class="d-code"><tspan class="d-kw">float</tspan> readDistanceCm() {</text>
  <text x="50" y="78" class="d-code"><tspan class="d-fn">digitalWrite</tspan>(TRIG, LOW);</text>
  <text x="50" y="98" class="d-code"><tspan class="d-fn">delayMicroseconds</tspan>(2);</text>
  <text x="50" y="118" class="d-code"><tspan class="d-fn">digitalWrite</tspan>(TRIG, HIGH);</text>
  <text x="50" y="138" class="d-code"><tspan class="d-fn">delayMicroseconds</tspan>(10);</text>
  <text x="50" y="158" class="d-code"><tspan class="d-fn">digitalWrite</tspan>(TRIG, LOW);</text>
  <text x="50" y="188" class="d-code"><tspan class="d-kw">long</tspan> t = <tspan class="d-fn">pulseIn</tspan>(ECHO, HIGH, 30000);</text>
  <text x="50" y="210" class="d-code"><tspan class="d-kw">return</tspan> (t * 0.0343) / 2.0;</text>
  <text x="35" y="235" class="d-code">}</text>
</svg>""",
        "annotations": [
          {"text": "10µs pulse triggers ultrasound burst", "x": "10%", "y": "50%"},
          {"text": "30,000µs timeout limits distance range", "x": "20%", "y": "88%"}
        ]
      },
      {
        "stepNum": 5,
        "altitude": "Ionosphere • Cloud IoT Lab Quest",
        "title": "Smart Radar & Autonomous Rover",
        "subtitle": "Step 5: Real-World IoT Radar & Vehicle Navigation",
        "desc": "Mount the ultrasonic sensor onto a servo motor to build a 180-degree sweeping radar scanner, or position it above a garage bay to publish parking vacancy telemetry over MQTT to Home Assistant.",
        "takeaways": [
          "Servo + Ultrasonic = 180° sweeping radar map in WebGL",
          "Smart city parking occupancy broadcast over Wi-Fi / MQTT",
          "Autonomous collision avoidance for twin-motor robot rovers",
          "Non-contact liquid depth measurement in water tanks"
        ],
        "tip": "For water tanks, mount the sensor at the top pointing straight down. Water provides a pristine acoustic reflective surface!",
        "doodleLabel": "180° IoT Radar Scanner",
        "svgDoodle": """<svg viewBox="0 0 360 280" class="doodle-svg" xmlns="http://www.w3.org/2000/svg">
  <style>
    .d-radar { fill: #042f2e; stroke: #14b8a6; stroke-width: 2.5; }
    .d-sweep { stroke: #2dd4bf; stroke-width: 3; stroke-linecap: round; }
    .d-txt { font-family: 'Press Start 2P', monospace; font-size: 8px; fill: #f0fdfa; }
  </style>
  <rect x="25" y="25" width="310" height="230" rx="12" fill="#02111d" stroke="#00cec9" stroke-width="3"/>
  <path d="M 60 210 A 120 120 0 0 1 300 210 Z" class="d-radar"/>
  <path d="M 100 210 A 80 80 0 0 1 260 210 Z" fill="none" stroke="#2dd4bf" stroke-width="1.5" stroke-dasharray="4 4"/>
  <line x1="180" y1="210" x2="250" y2="130" class="d-sweep"/>
  <circle cx="230" cy="150" r="6" fill="#ef4444"/>
  <text x="245" y="150" class="d-txt" fill="#ef4444">OBSTACLE!</text>
  <text x="80" y="245" class="d-txt" fill="#ffd978">180° IoT Radar Scanner</text>
</svg>""",
        "annotations": [
          {"text": "Sweeping ultrasound beam maps walls", "x": "15%", "y": "20%"},
          {"text": "Real-time telemetry sent over Wi-Fi", "x": "20%", "y": "90%"}
        ]
      }
    ]
  },

  "pir": {
    "id": "pir",
    "name": "PIR Motion Sensor",
    "shortName": "PIR Sensor",
    "level": "LEVEL 08",
    "reward": "Ghost Tracker Badge",
    "xp": 145,
    "steps": [
      {
        "stepNum": 1,
        "altitude": "Ground Level • Introduction",
        "title": "Infrared Thermal Eyes",
        "subtitle": "Step 1: What is a Passive Infrared (PIR) Sensor?",
        "desc": "Every living human and warm-blooded animal continuously radiates invisible infrared heat energy at roughly 9 to 10 micrometers wavelength. Passive Infrared (PIR) sensors don't emit any radiation — they passively observe temperature differentials as warm bodies walk across optical zones.",
        "takeaways": [
          "Passive detection: Emits zero rays, only absorbs ambient thermal radiation",
          "Tuned to human body heat spectrum (~9.4 µm wavelength)",
          "Dual pyroelectric sensing crystals cancel out uniform room temperature changes",
          "Wide 110-degree cone of detection reaching up to 7 meters (23 feet)"
        ],
        "tip": "Keep PIR sensors away from direct sunlight, air conditioner vents, and radiators! Sudden convective heat drafts can trigger false alarms.",
        "doodleLabel": "Thermal Radiation Detection",
        "svgDoodle": """<svg viewBox="0 0 360 280" class="doodle-svg" xmlns="http://www.w3.org/2000/svg">
  <style>
    .d-dome { fill: #f8fafc; stroke: #94a3b8; stroke-width: 2.5; }
    .d-facet { fill: #e2e8f0; stroke: #cbd5e1; stroke-width: 1.5; }
    .d-heat { stroke: #f97316; stroke-width: 2.5; stroke-dasharray: 4 3; fill: none; }
    .d-txt { font-family: 'Press Start 2P', monospace; font-size: 8px; fill: #f0fdfa; }
  </style>
  <rect x="60" y="140" width="240" height="100" rx="10" fill="#064e3b" stroke="#10b981" stroke-width="3"/>
  <path d="M 120 140 A 60 60 0 0 1 240 140 Z" class="d-dome"/>
  <line x1="150" y1="90" x2="150" y2="140" class="d-facet"/>
  <line x1="180" y1="80" x2="180" y2="140" class="d-facet"/>
  <line x1="210" y1="90" x2="210" y2="140" class="d-facet"/>
  <path d="M 60 60 Q 90 90 130 95" class="d-heat"/>
  <path d="M 300 60 Q 270 90 230 95" class="d-heat"/>
  <text x="120" y="50" class="d-txt" fill="#f97316">IR HEAT WAVES ~10µm</text>
  <text x="95" y="185" class="d-txt" fill="#f0fdfa">HC-SR501 PIR SENSOR</text>
  <text x="110" y="210" class="d-txt" fill="#34d399">DUAL PYRO CRYSTALS</text>
</svg>""",
        "annotations": [
          {"text": "Fresnel dome splits room into optical sectors", "x": "20%", "y": "25%"},
          {"text": "Dual internal sensors detect differential movement", "x": "35%", "y": "80%"}
        ]
      },
      {
        "stepNum": 2,
        "altitude": "Low Atmosphere • Optics & The Dome",
        "title": "The Fresnel Lens Secret",
        "subtitle": "Step 2: How a Plastic Dome Creates Motion Sectors",
        "desc": "Without the white plastic dome, a PIR sensor would just see a blurry average room temperature. The Fresnel lens is divided into dozens of tiny curved prism facets that focus infrared rays into alternating invisible detection beams. As a person walks across, they move in and out of beams, generating differential voltage pulses.",
        "takeaways": [
          "Faceted plastic dome acts as multiple miniature condensing lenses",
          "Converts continuous movement into alternating ON/OFF thermal pulses",
          "Two pyroelectric windows wired in reverse-series cancel out ambient warming",
          "Differential voltage spike trips the BISS0001 comparator IC"
        ],
        "tip": "Walking directly straight toward a PIR sensor creates less differential change than walking perpendicularly across its field of view!",
        "doodleLabel": "Fresnel Optical Slicing",
        "svgDoodle": """<svg viewBox="0 0 360 280" class="doodle-svg" xmlns="http://www.w3.org/2000/svg">
  <style>
    .d-zone { fill: rgba(249, 115, 22, 0.15); stroke: #f97316; stroke-width: 1.5; stroke-dasharray: 4 4; }
    .d-txt { font-family: 'Press Start 2P', monospace; font-size: 8px; fill: #f0fdfa; }
  </style>
  <rect x="25" y="25" width="310" height="230" rx="10" fill="#0f172a" stroke="#38bdf8" stroke-width="2.5"/>
  <path d="M 180 220 L 70 60 L 110 60 Z" class="d-zone"/>
  <path d="M 180 220 L 140 50 L 170 50 Z" class="d-zone"/>
  <path d="M 180 220 L 190 50 L 220 50 Z" class="d-zone"/>
  <path d="M 180 220 L 250 60 L 290 60 Z" class="d-zone"/>
  <circle cx="180" cy="220" r="14" fill="#38bdf8"/>
  <circle cx="130" cy="55" r="8" fill="#10b981"/>
  <line x1="130" y1="55" x2="230" y2="55" stroke="#10b981" stroke-width="2" stroke-linecap="round"/>
  <text x="145" y="45" class="d-txt" fill="#10b981">WALKING PERSON 🚶</text>
  <text x="45" y="245" class="d-txt" fill="#ffd978">Alternating Interleaved IR Zones</text>
</svg>""",
        "annotations": [
          {"text": "Moving between optical zones triggers voltage swing", "x": "15%", "y": "30%"},
          {"text": "PIR Sensor Base at bottom", "x": "40%", "y": "85%"}
        ]
      },
      {
        "stepNum": 3,
        "altitude": "Mid Atmosphere • Tuning & Jumpers",
        "title": "Trimpots & Retrigger Jumper",
        "subtitle": "Step 3: Sensitivity, Time Delay & Mode Configuration",
        "desc": "The back of the HC-SR501 features two orange potentiometers and a 3-pin mode jumper. One potentiometer tunes sensitivity (3m to 7m distance), while the other adjusts the output HIGH duration (from 3 seconds up to 5 minutes).",
        "takeaways": [
          "Sensitivity Trimpot: Clockwise increases detection range up to 7m",
          "Time Delay Trimpot: Clockwise increases HIGH signal hold time (3s to 300s)",
          "Jumper 'L' (Single Trigger): Stays HIGH for set time, then drops LOW even if motion continues",
          "Jumper 'H' (Repeatable Trigger): Resets the delay timer with each movement, staying HIGH continuously"
        ],
        "tip": "For IoT smart home motion sensors, set the jumper to 'H' (repeatable) and keep the time delay trimpot at minimum (~3s). Let your microcontroller code handle timeouts!",
        "doodleLabel": "HC-SR501 Back Controls",
        "svgDoodle": """<svg viewBox="0 0 360 280" class="doodle-svg" xmlns="http://www.w3.org/2000/svg">
  <style>
    .d-pot { fill: #f97316; stroke: #e0f2fe; stroke-width: 2; }
    .d-txt { font-family: 'Press Start 2P', monospace; font-size: 8px; fill: #f0fdfa; }
  </style>
  <rect x="40" y="40" width="280" height="200" rx="12" fill="#064e3b" stroke="#34d399" stroke-width="3"/>
  <circle cx="100" cy="110" r="24" class="d-pot"/>
  <line x1="88" y1="110" x2="112" y2="110" stroke="#000" stroke-width="3"/>
  <text x="60" y="155" class="d-txt" fill="#ffd978">SENSITIVITY</text>
  <circle cx="200" cy="110" r="24" class="d-pot"/>
  <line x1="188" y1="110" x2="212" y2="110" stroke="#000" stroke-width="3"/>
  <text x="175" y="155" class="d-txt" fill="#ffd978">TIME DELAY</text>
  <rect x="260" y="90" width="25" height="50" fill="#0f172a" stroke="#fff" stroke-width="1.5"/>
  <rect x="258" y="92" width="29" height="22" fill="#fbbf24"/>
  <text x="250" y="155" class="d-txt" fill="#38bdf8">L / H</text>
  <text x="70" y="210" class="d-txt" fill="#94a3b8">VCC (5V) • OUT (3.3V) • GND</text>
</svg>""",
        "annotations": [
          {"text": "3.3V digital OUT is directly compatible with ESP32", "x": "15%", "y": "82%"},
          {"text": "Mode Jumper (H for repeatable)", "x": "65%", "y": "40%"}
        ]
      },
      {
        "stepNum": 4,
        "altitude": "High Stratosphere • Hardware Interrupts",
        "title": "Low-Power Interrupt Driving",
        "subtitle": "Step 4: Deep sleep wake-up on motion",
        "desc": "Instead of polling the PIR sensor inside a CPU-burning loop(), configure a hardware interrupt! The ESP32 can sleep in micro-power mode drawing microamps, waking up in milliseconds when the PIR OUT pin goes HIGH.",
        "takeaways": [
          "pinMode(PIR_PIN, INPUT); attaches digital sensor line",
          "attachInterrupt(digitalPinToInterrupt(PIR_PIN), onMotion, RISING);",
          "ESP32 ext0 / ext1 wake-up triggers allow sub-15µA battery life",
          "60-second warm-up stabilization period required on first power-up"
        ],
        "tip": "Always allow a 30 to 60 second warm-up window when PIR sensors boot up. During this initial time, the sensor adapts to ambient infrared background levels.",
        "doodleLabel": "Interrupt Flow Diagram",
        "svgDoodle": """<svg viewBox="0 0 360 280" class="doodle-svg" xmlns="http://www.w3.org/2000/svg">
  <style>
    .d-box { fill: #0f172a; stroke: #10b981; stroke-width: 2.5; rx: 8; }
    .d-txt { font-family: 'Press Start 2P', monospace; font-size: 8px; fill: #f0fdfa; }
  </style>
  <rect x="25" y="25" width="310" height="230" rx="10" fill="#02111d" stroke="#38bdf8" stroke-width="2.5"/>
  <rect x="45" y="50" width="120" height="50" class="d-box"/>
  <text x="55" y="75" class="d-txt" fill="#94a3b8">ESP32 SLEEP</text>
  <text x="55" y="90" class="d-txt" fill="#38bdf8">&lt; 15µA draw</text>
  <line x1="165" y1="75" x2="200" y2="75" stroke="#f97316" stroke-width="3" stroke-linecap="round"/>
  <rect x="200" y="50" width="120" height="50" fill="#7f1d1d" stroke="#ef4444" stroke-width="2.5" rx="8"/>
  <text x="210" y="75" class="d-txt" fill="#fff">PIR HIGH!</text>
  <text x="210" y="90" class="d-txt" fill="#fca5a5">RISING EDGE</text>
  <path d="M 260 100 L 260 150 L 180 150" stroke="#ef4444" stroke-width="2.5" fill="none"/>
  <rect x="60" y="130" width="120" height="60" fill="#064e3b" stroke="#34d399" stroke-width="2.5" rx="8"/>
  <text x="70" y="155" class="d-txt" fill="#34d399">ISR TRIGGERED</text>
  <text x="70" y="175" class="d-txt" fill="#ffd978">Send MQTT Alert</text>
  <text x="45" y="235" class="d-txt" fill="#38bdf8">Zero CPU Polling Overhead</text>
</svg>""",
        "annotations": [
          {"text": "CPU sleeps until physical interrupt trips", "x": "10%", "y": "30%"},
          {"text": "Instantly wakes up to broadcast Wi-Fi alert", "x": "20%", "y": "75%"}
        ]
      },
      {
        "stepNum": 5,
        "altitude": "Ionosphere • Cloud IoT Lab Quest",
        "title": "Smart Home Automation Node",
        "subtitle": "Step 5: Automated lighting, security alarms & occupancy tracking",
        "desc": "Deploy PIR sensor nodes across every room to automate smart lighting, detect intruders when away, and publish occupancy metrics over MQTT to Home Assistant for room climate optimization.",
        "takeaways": [
          "Hands-free automatic hallway and stairway lighting",
          "Real-time intruder push alerts sent to your phone via Telegram or Pushover",
          "HVAC power saving: Automatically shut off AC in vacant meeting rooms",
          "Multi-sensor fusion: Combine PIR with mmWave radar for micro-motion detection"
        ],
        "tip": "PIR detects motion, not presence! A person sitting completely still reading a book will stop triggering PIR. Combine with an mmWave 24GHz radar sensor for true room occupancy.",
        "doodleLabel": "IoT Security & Automation Node",
        "svgDoodle": """<svg viewBox="0 0 360 280" class="doodle-svg" xmlns="http://www.w3.org/2000/svg">
  <style>
    .d-txt { font-family: 'Press Start 2P', monospace; font-size: 8px; fill: #f0fdfa; }
  </style>
  <rect x="25" y="25" width="310" height="230" rx="10" fill="#02111d" stroke="#10b981" stroke-width="3"/>
  <circle cx="90" cy="110" r="35" fill="#064e3b" stroke="#34d399" stroke-width="3"/>
  <text x="68" y="115" class="d-txt" fill="#fff">PIR</text>
  <line x1="125" y1="110" x2="175" y2="110" stroke="#34d399" stroke-width="3"/>
  <rect x="175" y="75" width="135" height="70" rx="8" fill="#082f49" stroke="#38bdf8" stroke-width="2.5"/>
  <text x="185" y="100" class="d-txt" fill="#38bdf8">MQTT BROKER</text>
  <text x="185" y="125" class="d-txt" fill="#ffd978">topic: home/pir</text>
  <text x="45" y="190" class="d-txt" fill="#f87171">⚡ LIGHTS ON!</text>
  <text x="45" y="215" class="d-txt" fill="#10b981">📲 PHONE NOTIFICATION DISPATCHED</text>
</svg>""",
        "annotations": [
          {"text": "Instant PIR state change", "x": "10%", "y": "25%"},
          {"text": "Home Assistant triggers scene", "x": "50%", "y": "80%"}
        ]
      }
    ]
  },

  "dht": {
    "id": "dht",
    "name": "DHT Temperature & Humidity Sensor",
    "shortName": "DHT Sensor",
    "level": "LEVEL 09",
    "reward": "Climate Warden Badge",
    "xp": 150,
    "steps": [
      {
        "stepNum": 1,
        "altitude": "Ground Level • Introduction",
        "title": "Dual Weather Station",
        "subtitle": "Step 1: What is the DHT11 / DHT22 Sensor?",
        "desc": "The DHT family packs two essential environmental sensors inside a compact vented blue or white plastic shell: a capacitive or resistive humidity sensor, plus an NTC thermistor for temperature. An onboard 8-bit chip reads these analog elements and translates them into digital data.",
        "takeaways": [
          "DHT11 (Blue): 20-80% RH humidity (5% accuracy), 0-50°C temp (+/-2°C)",
          "DHT22 (White/AM2302): 0-100% RH (2% accuracy), -40 to 80°C temp (+/-0.5°C)",
          "Integrated 8-bit microcontroller performs onboard calibration",
          "Single-bus digital output requires only 1 microcontroller GPIO pin"
        ],
        "tip": "DHT22 is vastly more accurate than DHT11 and reads sub-zero temperatures, but costs slightly more. For weather stations, DHT22 is worth every penny!",
        "doodleLabel": "Anatomy of the DHT Sensor",
        "svgDoodle": """<svg viewBox="0 0 360 280" class="doodle-svg" xmlns="http://www.w3.org/2000/svg">
  <style>
    .d-case { fill: #0284c7; stroke: #38bdf8; stroke-width: 3.5; rx: 10; }
    .d-vent { fill: #075985; stroke: #0284c7; stroke-width: 1.5; }
    .d-txt { font-family: 'Press Start 2P', monospace; font-size: 8px; fill: #f0fdfa; }
  </style>
  <rect x="80" y="40" width="200" height="170" class="d-case"/>
  <rect x="100" y="60" width="160" height="15" rx="3" class="d-vent"/>
  <rect x="100" y="85" width="160" height="15" rx="3" class="d-vent"/>
  <rect x="100" y="110" width="160" height="15" rx="3" class="d-vent"/>
  <rect x="100" y="135" width="160" height="15" rx="3" class="d-vent"/>
  <text x="110" y="185" class="d-txt" fill="#ffd978">DHT11 / DHT22</text>
  <line x1="110" y1="210" x2="110" y2="255" stroke="#e2e8f0" stroke-width="4"/>
  <line x1="150" y1="210" x2="150" y2="255" stroke="#e2e8f0" stroke-width="4"/>
  <line x1="190" y1="210" x2="190" y2="255" stroke="#e2e8f0" stroke-width="4"/>
  <line x1="230" y1="210" x2="230" y2="255" stroke="#e2e8f0" stroke-width="4"/>
  <text x="75" y="270" class="d-txt" fill="#ffc960">VCC  DATA  NC  GND</text>
</svg>""",
        "annotations": [
          {"text": "Air vents let atmospheric moisture reach sensor substrate", "x": "10%", "y": "25%"},
          {"text": "4 pins on bare sensor (Pin 3 is unused NC)", "x": "20%", "y": "85%"}
        ]
      },
      {
        "stepNum": 2,
        "altitude": "Low Atmosphere • 1-Wire Protocol",
        "title": "Single-Bus Digital Protocol",
        "subtitle": "Step 2: Pull-up resistor & handshaking handshake",
        "desc": "DHT sensors communicate over an asynchronous single data wire using a proprietary protocol. The microcontroller initiates communication by pulling the DATA line LOW for at least 18 milliseconds, releasing it, and waiting for the DHT sensor to reply with an 80µs LOW / 80µs HIGH handshake.",
        "takeaways": [
          "Requires a 4.7kΩ to 10kΩ pull-up resistor between VCC and DATA line",
          "Host starts transmission with 18ms LOW pulse followed by 20-40µs HIGH",
          "Sensor responds with 80µs LOW then 80µs HIGH readiness preamble",
          "All communication occurs on a single bidirectional digital wire"
        ],
        "tip": "Many breakout boards include the pull-up resistor built-in! If your DHT has 3 pins instead of 4, the pull-up is already mounted on the PCB.",
        "doodleLabel": "Handshake Timing Waveform",
        "svgDoodle": """<svg viewBox="0 0 360 280" class="doodle-svg" xmlns="http://www.w3.org/2000/svg">
  <style>
    .d-sig { stroke: #38bdf8; stroke-width: 3; fill: none; }
    .d-txt { font-family: 'Press Start 2P', monospace; font-size: 8px; fill: #f0fdfa; }
  </style>
  <rect x="20" y="25" width="320" height="230" rx="10" fill="#02111d" stroke="#0284c7" stroke-width="2.5"/>
  <text x="35" y="55" class="d-txt" fill="#ffd978">START SIGNAL WAVEFORM</text>
  <path d="M 35 100 L 70 100 L 70 160 L 140 160 L 140 100 L 170 100 L 170 160 L 210 160 L 210 100 L 250 100 L 250 160 L 320 160" class="d-sig"/>
  <text x="75" y="180" class="d-txt" fill="#f87171">MCU LOW (18ms)</text>
  <text x="175" y="85" class="d-txt" fill="#10b981">DHT ACK (80µs)</text>
  <text x="45" y="225" class="d-txt" fill="#94a3b8">Pull-up keeps line HIGH when idle</text>
</svg>""",
        "annotations": [
          {"text": "Host wakes sensor up with 18ms pulse", "x": "15%", "y": "40%"},
          {"text": "Sensor confirms readiness to send data", "x": "55%", "y": "20%"}
        ]
      },
      {
        "stepNum": 3,
        "altitude": "Mid Atmosphere • Data Packet",
        "title": "The 40-Bit Signal Packet",
        "subtitle": "Step 3: Decoding Humidity, Temperature & Parity Checksum",
        "desc": "After the handshake, the sensor transmits 40 individual data bits (5 bytes total). Each bit starts with a 50µs LOW pulse. If the subsequent HIGH pulse lasts 26-28µs, it is a binary '0'. If the HIGH pulse lasts 70µs, it is a binary '1'.",
        "takeaways": [
          "Byte 1: Humidity integer data",
          "Byte 2: Humidity decimal data",
          "Byte 3: Temperature integer data",
          "Byte 4: Temperature decimal data",
          "Byte 5: Parity checksum (Byte 1 + Byte 2 + Byte 3 + Byte 4 = Checksum)"
        ],
        "tip": "Always verify the checksum! If (B1 + B2 + B3 + B4) != Checksum, discard the reading as transmission noise.",
        "doodleLabel": "40-Bit Frame Architecture",
        "svgDoodle": """<svg viewBox="0 0 360 280" class="doodle-svg" xmlns="http://www.w3.org/2000/svg">
  <style>
    .d-byte { stroke: #38bdf8; stroke-width: 2; rx: 6; }
    .d-txt { font-family: 'Press Start 2P', monospace; font-size: 8px; fill: #f0fdfa; }
  </style>
  <rect x="25" y="25" width="310" height="230" rx="10" fill="#0b1727" stroke="#38bdf8" stroke-width="2.5"/>
  <rect x="40" y="50" width="125" height="45" fill="#082f49" class="d-byte"/>
  <text x="50" y="70" class="d-txt" fill="#38bdf8">HUMIDITY INT</text>
  <text x="50" y="85" class="d-txt" fill="#fff">8 BITS (e.g. 55%)</text>
  <rect x="180" y="50" width="125" height="45" fill="#082f49" class="d-byte"/>
  <text x="190" y="70" class="d-txt" fill="#38bdf8">HUMIDITY DEC</text>
  <text x="190" y="85" class="d-txt" fill="#fff">8 BITS</text>
  <rect x="40" y="110" width="125" height="45" fill="#78350f" class="d-byte"/>
  <text x="50" y="130" class="d-txt" fill="#f59e0b">TEMP INT</text>
  <text x="50" y="145" class="d-txt" fill="#fff">8 BITS (e.g. 24°C)</text>
  <rect x="180" y="110" width="125" height="45" fill="#78350f" class="d-byte"/>
  <text x="190" y="130" class="d-txt" fill="#f59e0b">TEMP DEC</text>
  <text x="190" y="145" class="d-txt" fill="#fff">8 BITS</text>
  <rect x="40" y="170" width="265" height="45" fill="#064e3b" class="d-byte"/>
  <text x="50" y="195" class="d-txt" fill="#34d399">CHECKSUM: B1 + B2 + B3 + B4</text>
  <text x="45" y="240" class="d-txt" fill="#ffd978">Total: 40 Bits Transmitted in ~4ms</text>
</svg>""",
        "annotations": [
          {"text": "16 bits total for Humidity", "x": "15%", "y": "20%"},
          {"text": "Checksum ensures zero data corruption", "x": "25%", "y": "75%"}
        ]
      },
      {
        "stepNum": 4,
        "altitude": "High Stratosphere • Code & Reading Rates",
        "title": "Sampling Rates & Driver Code",
        "subtitle": "Step 4: Non-blocking reading with DHT.h library",
        "desc": "Because the capacitive humidity element takes time to chemically re-equilibrate with surrounding moisture, the DHT11 must not be polled faster than once every 1 second (0.5 Hz for DHT22). Polling too fast returns stale cache data or causes bus timeouts.",
        "takeaways": [
          "#include <DHT.h> simplifies communication completely",
          "DHT dht(DHTPIN, DHT22); initializes object instance",
          "float h = dht.readHumidity(); float t = dht.readTemperature();",
          "if (isnan(h) || isnan(t)) checks for failed wire connection"
        ],
        "tip": "Use millis() timers instead of delay(2000) so your microcontroller can handle buttons, Wi-Fi requests, and displays without freezing while waiting to poll the sensor!",
        "doodleLabel": "Arduino C++ DHT Code",
        "svgDoodle": """<svg viewBox="0 0 360 280" class="doodle-svg" xmlns="http://www.w3.org/2000/svg">
  <style>
    .d-box { fill: #02111d; stroke: #38bdf8; stroke-width: 3; }
    .d-code { font-family: monospace; font-size: 10px; fill: #7dd3fc; }
    .d-kw { fill: #f43f5e; font-weight: bold; }
    .d-fn { fill: #38bdf8; }
  </style>
  <rect x="20" y="25" width="320" height="230" rx="10" class="d-box"/>
  <text x="35" y="55" class="d-code"><tspan class="d-kw">#include</tspan> &lt;DHT.h&gt;</text>
  <text x="35" y="75" class="d-code">DHT dht(4, DHT22);</text>
  <text x="35" y="105" class="d-code"><tspan class="d-kw">void</tspan> loop() {</text>
  <text x="50" y="130" class="d-code"><tspan class="d-kw">float</tspan> h = dht.<tspan class="d-fn">readHumidity</tspan>();</text>
  <text x="50" y="155" class="d-code"><tspan class="d-kw">float</tspan> t = dht.<tspan class="d-fn">readTemperature</tspan>();</text>
  <text x="50" y="185" class="d-code"><tspan class="d-kw">if</tspan> (!<tspan class="d-fn">isnan</tspan>(h) &amp;&amp; !<tspan class="d-fn">isnan</tspan>(t)) {</text>
  <text x="65" y="210" class="d-code">Serial.<tspan class="d-fn">printf</tspan>(<tspan fill="#34d399">"%.1f C, %.1f %%\\n"</tspan>, t, h);</text>
  <text x="50" y="230" class="d-code">}</text>
  <text x="35" y="248" class="d-code">}</text>
</svg>""",
        "annotations": [
          {"text": "Simple 2-line initialization", "x": "15%", "y": "25%"},
          {"text": "Built-in isnan() error handling", "x": "25%", "y": "70%"}
        ]
      },
      {
        "stepNum": 5,
        "altitude": "Ionosphere • Cloud IoT Lab Quest",
        "title": "Smart Greenhouse & Cloud Dashboard",
        "subtitle": "Step 5: Automated misting, ventilation & climate tracking",
        "desc": "Connect your DHT sensor node to an MQTT server, InfluxDB, and Grafana dashboard. If humidity drops below 40%, trigger an automated ultrasonic mister relay; if temperature exceeds 30°C, spin up exhaust fans.",
        "takeaways": [
          "Live temperature/humidity telemetry charts in Grafana",
          "Automated greenhouse climate control via relay actuators",
          "Dew point calculation: Forecast condensation on plants",
          "Vapor Pressure Deficit (VPD) optimization for plant transpiration"
        ],
        "tip": "Calculate Vapor Pressure Deficit (VPD) using temperature and relative humidity. VPD tells you exactly how easily plants can transpire and absorb nutrients!",
        "doodleLabel": "IoT Greenhouse Climate Control",
        "svgDoodle": """<svg viewBox="0 0 360 280" class="doodle-svg" xmlns="http://www.w3.org/2000/svg">
  <style>
    .d-txt { font-family: 'Press Start 2P', monospace; font-size: 8px; fill: #f0fdfa; }
  </style>
  <rect x="25" y="25" width="310" height="230" rx="10" fill="#02111d" stroke="#0284c7" stroke-width="3"/>
  <rect x="45" y="50" width="120" height="75" rx="8" fill="#082f49" stroke="#38bdf8" stroke-width="2"/>
  <text x="55" y="75" class="d-txt" fill="#38bdf8">TEMP: 26.4°C</text>
  <text x="55" y="95" class="d-txt" fill="#34d399">HUMID: 68%</text>
  <text x="55" y="115" class="d-txt" fill="#ffd978">VPD: 1.1 kPa</text>
  <rect x="185" y="50" width="130" height="75" rx="8" fill="#14532d" stroke="#22c55e" stroke-width="2"/>
  <text x="195" y="75" class="d-txt" fill="#4ade80">ACTUATORS</text>
  <text x="195" y="95" class="d-txt" fill="#fff">FAN: OFF</text>
  <text x="195" y="115" class="d-txt" fill="#67e8f9">MISTER: READY</text>
  <text x="50" y="165" class="d-txt" fill="#94a3b8">WIFI MQTT TELEMETRY</text>
  <path d="M 45 190 Q 110 170 180 195 T 310 180" fill="none" stroke="#34d399" stroke-width="2.5"/>
  <text x="50" y="235" class="d-txt" fill="#ffd978">24/7 Cloud Historical Logs</text>
</svg>""",
        "annotations": [
          {"text": "Real-time calculated VPD", "x": "15%", "y": "30%"},
          {"text": "Automatic relay switching", "x": "55%", "y": "30%"}
        ]
      }
    ]
  }
}

print("Group 1 Data compiled successfully!")
