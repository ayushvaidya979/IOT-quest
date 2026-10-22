# -*- coding: utf-8 -*-
"""
Builder Group 3: Push Button, Jumper Wires, Arduino Uno
"""

GROUP3_DATA = {
  "button": {
    "id": "button",
    "name": "Tactile Push Button & Debouncing",
    "shortName": "Push Button",
    "level": "LEVEL 13",
    "reward": "Tactile Trigger Badge",
    "xp": 135,
    "steps": [
      {
        "stepNum": 1,
        "altitude": "Ground Level • Introduction",
        "title": "The Mechanical Contact",
        "subtitle": "Step 1: What is a Momentary Tactile Switch?",
        "desc": "A tactile push button is a normally-open (NO) mechanical switch. Inside its tiny 6x6mm square case sits a convex metal dome. Pressing down deflects the dome with a satisfying physical 'click', bridging opposing metal contacts to complete the circuit. Releasing it lets the dome spring back.",
        "takeaways": [
          "Normally Open (NO): Circuit is disconnected until user pushes down",
          "Internal metal snap dome provides both tactile feel and spring return",
          "4 terminal legs: Opposite pairs are permanently connected internally",
          "Rated for up to 50mA current and 100,000+ mechanical actuations"
        ],
        "tip": "A standard 4-pin tactile switch has internal cross-connections! Leg 1 is connected to Leg 2, and Leg 3 is connected to Leg 4. Wire diagonally across corners to ensure you bridge the switch contacts!",
        "doodleLabel": "Internal Snap Dome Mechanism",
        "svgDoodle": """<svg viewBox="0 0 360 280" class="doodle-svg" xmlns="http://www.w3.org/2000/svg">
  <style>
    .d-case { fill: #1e293b; stroke: #64748b; stroke-width: 3.5; rx: 12; }
    .d-dome { stroke: #ffd978; stroke-width: 3.5; fill: none; stroke-linecap: round; }
    .d-txt { font-family: 'Press Start 2P', monospace; font-size: 8px; fill: #f0fdfa; }
  </style>
  <rect x="70" y="50" width="220" height="150" class="d-case"/>
  <!-- Button Plunger -->
  <circle cx="180" cy="125" r="45" fill="#0284c7" stroke="#38bdf8" stroke-width="3"/>
  <circle cx="180" cy="125" r="28" fill="#0369a1"/>
  <!-- Snap Dome schematic cutaway below -->
  <path d="M 140 180 Q 180 165 220 180" class="d-dome"/>
  <!-- Terminals -->
  <line x1="70" y1="85" x2="35" y2="85" stroke="#cbd5e1" stroke-width="4"/>
  <line x1="70" y1="165" x2="35" y2="165" stroke="#cbd5e1" stroke-width="4"/>
  <line x1="290" y1="85" x2="325" y2="85" stroke="#cbd5e1" stroke-width="4"/>
  <line x1="290" y1="165" x2="325" y2="165" stroke="#cbd5e1" stroke-width="4"/>
  <text x="50" y="240" class="d-txt" fill="#ffd978">Tactile Snap Dome • 6x6mm Momentary</text>
</svg>""",
        "annotations": [
          {"text": "Tactile actuator button plunger", "x": "35%", "y": "40%"},
          {"text": "Wire diagonally across corners", "x": "10%", "y": "25%"}
        ]
      },
      {
        "stepNum": 2,
        "altitude": "Low Atmosphere • Pull-Up & Floating Pins",
        "title": "Floating Pins & Pull-Up Resistors",
        "subtitle": "Step 2: Banishing erratic electrical static",
        "desc": "A microcontroller input pin has billions of ohms of impedance. If you wire a button directly to 3.3V with nothing else, releasing the button leaves the pin disconnected — it 'floats' like an antenna, picking up electromagnetic radio noise and randomly oscillating between 0 and 1! A pull-up or pull-down resistor anchors the voltage.",
        "takeaways": [
          "Floating pin: Unconnected input picks up static noise and triggers false reads",
          "Pull-Up resistor (10kΩ): Holds the pin HIGH at 3.3V when button is idle",
          "Pressing button connects pin to GND, pulling input firmly to LOW (Active-Low)",
          "ESP32 and Arduino have internal built-in pull-up resistors: INPUT_PULLUP"
        ],
        "tip": "Save breadboard clutter by using pinMode(BUTTON_PIN, INPUT_PULLUP)! It enables the microcontroller's internal ~45kΩ pull-up resistor inside the silicon, eliminating external resistors.",
        "doodleLabel": "Pull-Up Circuit Schematic",
        "svgDoodle": """<svg viewBox="0 0 360 280" class="doodle-svg" xmlns="http://www.w3.org/2000/svg">
  <style>
    .d-wire { stroke: #38bdf8; stroke-width: 3; fill: none; }
    .d-res { stroke: #fbbf24; stroke-width: 3.5; fill: none; }
    .d-txt { font-family: 'Press Start 2P', monospace; font-size: 8px; fill: #f0fdfa; }
  </style>
  <rect x="25" y="25" width="310" height="230" rx="10" fill="#02111d" stroke="#38bdf8" stroke-width="2.5"/>
  <text x="45" y="55" class="d-txt" fill="#ef4444">3.3V VCC</text>
  <line x1="80" y1="65" x2="80" y2="85" stroke="#ef4444" stroke-width="3"/>
  <!-- 10k Resistor -->
  <path d="M 80 85 L 70 95 L 90 105 L 70 115 L 90 125 L 80 135" class="d-res"/>
  <text x="100" y="115" class="d-txt" fill="#fbbf24">10kΩ PULLUP</text>
  <!-- Node to MCU -->
  <line x1="80" y1="135" x2="80" y2="160" class="d-wire"/>
  <line x1="80" y1="145" x2="190" y2="145" class="d-wire"/>
  <rect x="190" y="115" width="100" height="60" fill="#064e3b" stroke="#10b981" stroke-width="2" rx="6"/>
  <text x="200" y="140" class="d-txt" fill="#10b981">GPIO PIN</text>
  <text x="200" y="160" class="d-txt" fill="#fff">READS HIGH</text>
  <!-- Switch to GND -->
  <line x1="80" y1="160" x2="95" y2="185" stroke="#ffd978" stroke-width="3.5"/>
  <line x1="80" y1="195" x2="80" y2="220" class="d-wire"/>
  <line x1="65" y1="220" x2="95" y2="220" stroke="#94a3b8" stroke-width="3"/>
  <text x="105" y="225" class="d-txt" fill="#94a3b8">GND</text>
</svg>""",
        "annotations": [
          {"text": "10kΩ holds pin safely at 3.3V", "x": "10%", "y": "35%"},
          {"text": "Pressing button pulls pin to GND", "x": "10%", "y": "70%"}
        ]
      },
      {
        "stepNum": 3,
        "altitude": "Mid Atmosphere • The Bounce Mystery",
        "title": "Contact Bounce Phenomenon",
        "subtitle": "Step 3: Why one click looks like 20 button presses",
        "desc": "To human fingers, pressing a button feels like an instantaneous single click. But at microsecond CPU speeds, the elastic metal dome rebounds and chatters against the contacts 10 to 50 times over 5 to 20 milliseconds before settling firmly! Without debouncing, a digital counter will count 15 presses for a single click.",
        "takeaways": [
          "Mechanical contacts chatter back-and-forth for 5 to 20 milliseconds",
          "Microcontrollers execute millions of instructions per second, detecting each bounce",
          "Causes severe bugs in counter circuits, menu navigation, and toggle switches",
          "Debouncing can be solved with hardware RC filters or software timing algorithms"
        ],
        "tip": "Never write `count++` directly inside a naive digitalRead() loop without debouncing! You will increment by 8 to 25 every single time you push the switch.",
        "doodleLabel": "Contact Bounce Oscilloscope Trace",
        "svgDoodle": """<svg viewBox="0 0 360 280" class="doodle-svg" xmlns="http://www.w3.org/2000/svg">
  <style>
    .d-scope { stroke: #f43f5e; stroke-width: 2.5; fill: none; }
    .d-txt { font-family: 'Press Start 2P', monospace; font-size: 8px; fill: #f0fdfa; }
  </style>
  <rect x="25" y="25" width="310" height="230" rx="10" fill="#02111d" stroke="#f43f5e" stroke-width="2.5"/>
  <text x="40" y="55" class="d-txt" fill="#ffd978">OSCILLOSCOPE: CONTACT CHATTER</text>
  <!-- Oscilloscope grid -->
  <line x1="40" y1="120" x2="310" y2="120" stroke="#1e293b" stroke-width="1.5" stroke-dasharray="4 4"/>
  <line x1="40" y1="160" x2="310" y2="160" stroke="#1e293b" stroke-width="1.5" stroke-dasharray="4 4"/>
  <!-- Chatter Waveform -->
  <path d="M 40 90 L 90 90 L 90 170 L 105 90 L 115 170 L 125 90 L 135 170 L 140 90 L 150 170 L 155 100 L 165 170 L 310 170" class="d-scope"/>
  <text x="95" y="80" class="d-txt" fill="#f43f5e">CHATTER ZONE (10ms)</text>
  <text x="45" y="210" class="d-txt" fill="#38bdf8">Elastic dome bounces like a basketball!</text>
  <text x="45" y="235" class="d-txt" fill="#94a3b8">CPU reads 10+ false trigger clicks</text>
</svg>""",
        "annotations": [
          {"text": "Elastic metal dome bounces on impact", "x": "25%", "y": "25%"},
          {"text": "Settles into clean steady state after 15ms", "x": "55%", "y": "70%"}
        ]
      },
      {
        "stepNum": 4,
        "altitude": "High Stratosphere • Software Debounce",
        "title": "Software Debouncing with millis()",
        "subtitle": "Step 4: Non-blocking time threshold verification",
        "desc": "Instead of freezing code with delay(50), track timestamps using millis()! When the pin changes state, check if at least 50 milliseconds have elapsed since the last transition before confirming a valid user click.",
        "takeaways": [
          "Software debouncing eliminates the cost of external hardware capacitors",
          "50ms debounce threshold reliably absorbs all mechanical bounce",
          "millis() timer ensures zero loop() freezing or blocking delays",
          "Detects both state change (edge) and steady state (level)"
        ],
        "tip": "Popular libraries like ezButton or OneButton handle debouncing, long presses, and double-clicks with just a couple lines of clean code!",
        "doodleLabel": "millis() Debounce Logic Flow",
        "svgDoodle": """<svg viewBox="0 0 360 280" class="doodle-svg" xmlns="http://www.w3.org/2000/svg">
  <style>
    .d-box { fill: #02111d; stroke: #38bdf8; stroke-width: 3; }
    .d-code { font-family: monospace; font-size: 10px; fill: #7dd3fc; }
    .d-kw { fill: #f43f5e; font-weight: bold; }
    .d-fn { fill: #38bdf8; }
  </style>
  <rect x="20" y="25" width="320" height="230" rx="10" class="d-box"/>
  <text x="35" y="55" class="d-code"><tspan class="d-kw">int</tspan> reading = <tspan class="d-fn">digitalRead</tspan>(BTN);</text>
  <text x="35" y="80" class="d-code"><tspan class="d-kw">if</tspan> (reading != lastButtonState) {</text>
  <text x="50" y="105" class="d-code">lastDebounceTime = <tspan class="d-fn">millis</tspan>();</text>
  <text x="35" y="130" class="d-code">}</text>
  <text x="35" y="155" class="d-code"><tspan class="d-kw">if</tspan> ((<tspan class="d-fn">millis</tspan>() - lastDebounceTime) &gt; 50) {</text>
  <text x="50" y="180" class="d-code"><tspan class="d-kw">if</tspan> (reading != buttonState) {</text>
  <text x="65" y="205" class="d-code">buttonState = reading; <tspan fill="#34d399">// CONFIRMED CLICK!</tspan></text>
  <text x="50" y="225" class="d-code">}</text>
  <text x="35" y="245" class="d-code">}</text>
</svg>""",
        "annotations": [
          {"text": "Tracks time of last transition", "x": "15%", "y": "35%"},
          {"text": "Confirms click only after 50ms steady", "x": "20%", "y": "70%"}
        ]
      },
      {
        "stepNum": 5,
        "altitude": "Ionosphere • Cloud IoT Lab Quest",
        "title": "Multi-Function Smart IoT Button",
        "subtitle": "Step 5: Single click, double click & factory reset long-press",
        "desc": "Upgrade a simple push button into a smart IoT interface: a single click toggles smart lights, a double click activates movie mode, and holding the button down for 5 seconds triggers an emergency alert or resets Wi-Fi provisioning credentials.",
        "takeaways": [
          "Single click: Toggle local IoT smart light relay",
          "Double click: Cycle through RGB color ambiance scenes",
          "Long-press (3 seconds): Mute alarm or lock smart door",
          "Hold (10 seconds): Clear ESP32 flash and launch Wi-Fi AP portal"
        ],
        "tip": "Add a small tactile piezo buzzer to beep on clicks! Audible feedback gives users instant confidence that their press was registered.",
        "doodleLabel": "Multi-Action Event Dispatcher",
        "svgDoodle": """<svg viewBox="0 0 360 280" class="doodle-svg" xmlns="http://www.w3.org/2000/svg">
  <style>
    .d-act { fill: #082f49; stroke: #38bdf8; stroke-width: 2; rx: 6; }
    .d-txt { font-family: 'Press Start 2P', monospace; font-size: 8px; fill: #f0fdfa; }
  </style>
  <rect x="25" y="25" width="310" height="230" rx="10" fill="#02111d" stroke="#0284c7" stroke-width="3"/>
  <circle cx="70" cy="120" r="30" fill="#0369a1" stroke="#38bdf8" stroke-width="3"/>
  <text x="55" y="125" class="d-txt" fill="#fff">PUSH</text>
  <!-- 3 Actions -->
  <rect x="135" y="55" width="175" height="40" class="d-act"/>
  <text x="145" y="75" class="d-txt" fill="#34d399">1x: TOGGLE LIGHTS</text>
  <rect x="135" y="110" width="175" height="40" class="d-act"/>
  <text x="145" y="130" class="d-txt" fill="#ffd978">2x: SCENE CHANGE</text>
  <rect x="135" y="165" width="175" height="40" class="d-act"/>
  <text x="145" y="185" class="d-txt" fill="#f87171">HOLD: WI-FI RESET</text>
  <text x="45" y="235" class="d-txt" fill="#38bdf8">1 Button • 3 Unique Smart IoT Events</text>
</svg>""",
        "annotations": [
          {"text": "Simple hardware momentary switch", "x": "10%", "y": "35%"},
          {"text": "Rich multi-action event dispatcher", "x": "40%", "y": "30%"}
        ]
      }
    ]
  },

  "jumper": {
    "id": "jumper",
    "name": "Jumper Wires & Power Distribution",
    "shortName": "Jumper Wires",
    "level": "LEVEL 14",
    "reward": "Bus Navigator Badge",
    "xp": 130,
    "steps": [
      {
        "stepNum": 1,
        "altitude": "Ground Level • Introduction",
        "title": "The Circuit Arteries",
        "subtitle": "Step 1: What are Dupont Jumper Wires?",
        "desc": "Jumper wires are the flexible electrical veins that tie your breadboard circuits together. Terminated with standardized 2.54mm (0.1 inch) Dupont connector pins, they bridge microcontrollers, sensors, display screens, and breadboard power rails without a drop of solder.",
        "takeaways": [
          "Standardized 2.54mm (0.1 inch) pitch matches breadboard pin grids",
          "Three essential connector combinations: Male-to-Male (M-M), Male-to-Female (M-F), and Female-to-Female (F-F)",
          "Stranded copper core delivers maximum flexibility and bending fatigue resistance",
          "PVC insulation prevents accidental shorts between adjacent signal wires"
        ],
        "tip": "Male-to-Male wires connect breadboard tie points together. Male-to-Female wires connect sensors with pin headers directly to your microcontroller!",
        "doodleLabel": "The Three Dupont Wire Types",
        "svgDoodle": """<svg viewBox="0 0 360 280" class="doodle-svg" xmlns="http://www.w3.org/2000/svg">
  <style>
    .d-wire { stroke-width: 5; fill: none; stroke-linecap: round; }
    .d-pin { stroke: #e2e8f0; stroke-width: 3.5; stroke-linecap: round; }
    .d-hood { fill: #0f172a; stroke: #38bdf8; stroke-width: 2; rx: 3; }
    .d-txt { font-family: 'Press Start 2P', monospace; font-size: 8px; fill: #f0fdfa; }
  </style>
  <rect x="25" y="25" width="310" height="230" rx="10" fill="#02111d" stroke="#38bdf8" stroke-width="2.5"/>
  <!-- M-to-M -->
  <line x1="40" y1="75" x2="60" y2="75" class="d-pin"/>
  <rect x="60" y="65" width="25" height="20" class="d-hood"/>
  <path d="M 85 75 Q 180 50 275 75" stroke="#ef4444" class="d-wire"/>
  <rect x="275" y="65" width="25" height="20" class="d-hood"/>
  <line x1="300" y1="75" x2="320" y2="75" class="d-pin"/>
  <text x="120" y="105" class="d-txt" fill="#ef4444">MALE-TO-MALE (M-M)</text>
  <!-- M-to-F -->
  <line x1="40" y1="145" x2="60" y2="145" class="d-pin"/>
  <rect x="60" y="135" width="25" height="20" class="d-hood"/>
  <path d="M 85 145 Q 180 120 275 145" stroke="#3b82f6" class="d-wire"/>
  <rect x="275" y="135" width="25" height="20" class="d-hood"/>
  <text x="110" y="175" class="d-txt" fill="#38bdf8">MALE-TO-FEMALE (M-F)</text>
  <text x="45" y="235" class="d-txt" fill="#ffd978">Universal 2.54mm Breadboard Interconnects</text>
</svg>""",
        "annotations": [
          {"text": "Male pin plugs into breadboard", "x": "5%", "y": "22%"},
          {"text": "Female socket plugs onto sensor headers", "x": "75%", "y": "45%"}
        ]
      },
      {
        "stepNum": 2,
        "altitude": "Low Atmosphere • Color Coding Protocols",
        "title": "Standard Color Coding Protocols",
        "subtitle": "Step 2: Wiring conventions that prevent catastrophic shorts",
        "desc": "In electronics, color coding is a universal engineering discipline that prevents accidental polarity reversals. One reversed power wire can blow up an ESP32 in milliseconds. Adhering strictly to industry color conventions makes troubleshooting instant and painless.",
        "takeaways": [
          "RED: Positive Voltage Supply (+3.3V, +5V, +12V)",
          "BLACK (or Dark Blue): Ground return path (GND / 0V)",
          "YELLOW / ORANGE: Data / Transmit signals (SDA, TX, PWM)",
          "GREEN / WHITE: Clock / Receive signals (SCL, RX, Interrupts)"
        ],
        "tip": "NEVER use red for ground or black for power! Even if 'it works', you or someone else will eventually assume red is 5V and fry expensive components.",
        "doodleLabel": "Industry Color Code Standards",
        "svgDoodle": """<svg viewBox="0 0 360 280" class="doodle-svg" xmlns="http://www.w3.org/2000/svg">
  <style>
    .d-txt { font-family: 'Press Start 2P', monospace; font-size: 8px; fill: #f0fdfa; }
  </style>
  <rect x="25" y="25" width="310" height="230" rx="10" fill="#02111d" stroke="#f59e0b" stroke-width="2.5"/>
  <rect x="45" y="50" width="40" height="25" fill="#ef4444" rx="4"/>
  <text x="100" y="68" class="d-txt" fill="#ef4444">RED = +VCC (Power Rail)</text>
  <rect x="45" y="90" width="40" height="25" fill="#0f172a" stroke="#64748b" stroke-width="2" rx="4"/>
  <text x="100" y="108" class="d-txt" fill="#94a3b8">BLACK = GND (0V Ground)</text>
  <rect x="45" y="130" width="40" height="25" fill="#eab308" rx="4"/>
  <text x="100" y="148" class="d-txt" fill="#fde047">YELLOW = SDA / DATA / TX</text>
  <rect x="45" y="170" width="40" height="25" fill="#10b981" rx="4"/>
  <text x="100" y="188" class="d-txt" fill="#34d399">GREEN = SCL / CLOCK / RX</text>
  <text x="45" y="235" class="d-txt" fill="#ffd978">Consistent Colors Prevent Smoke!</text>
</svg>""",
        "annotations": [
          {"text": "Strict red/black power polarity", "x": "10%", "y": "22%"},
          {"text": "Color-coded signal lines", "x": "10%", "y": "50%"}
        ]
      },
      {
        "stepNum": 3,
        "altitude": "Mid Atmosphere • Resistance & Gauge",
        "title": "Wire Gauge & Contact Degradation",
        "subtitle": "Step 3: Hidden resistance, voltage drop & loose crimps",
        "desc": "Cheap jumper wires typically use thin 28 AWG aluminum or low-grade copper with loose crimped Dupont pins. When a high-current load (like an ESP32 Wi-Fi burst or motor driver) pulls 500mA, wire and contact resistance can cause a 0.5V voltage drop, resulting in mysterious brownouts and random resets.",
        "takeaways": [
          "28 AWG jumper wire has ~0.2Ω to 0.5Ω resistance per foot",
          "Poorly crimped Dupont pins add up to 1Ω of erratic contact resistance",
          "V_drop = I × R: Drawing 1 Amp through 0.5Ω drops a massive 0.5 Volts!",
          "Loose breadboard clip grip causes intermittent reboot glitches"
        ],
        "tip": "If your ESP32 reboots every time Wi-Fi connects, suspect jumper wire voltage drop! Swap thin jumper wires for shorter, thicker 22 AWG solid-core wire.",
        "doodleLabel": "Resistance & Voltage Drop",
        "svgDoodle": """<svg viewBox="0 0 360 280" class="doodle-svg" xmlns="http://www.w3.org/2000/svg">
  <style>
    .d-wire { stroke: #ef4444; stroke-width: 4; fill: none; }
    .d-txt { font-family: 'Press Start 2P', monospace; font-size: 8px; fill: #f0fdfa; }
  </style>
  <rect x="25" y="25" width="310" height="230" rx="10" fill="#02111d" stroke="#ef4444" stroke-width="2.5"/>
  <text x="40" y="55" class="d-txt" fill="#ffd978">VOLTAGE DROP PHENOMENON</text>
  <rect x="40" y="80" width="70" height="60" fill="#082f49" stroke="#38bdf8" stroke-width="2" rx="6"/>
  <text x="48" y="105" class="d-txt" fill="#38bdf8">POWER</text>
  <text x="48" y="125" class="d-txt" fill="#ffd978">5.0V</text>
  <path d="M 110 110 L 230 110" class="d-wire"/>
  <text x="140" y="95" class="d-txt" fill="#ef4444">0.8Ω WIRE</text>
  <rect x="230" y="80" width="90" height="60" fill="#7f1d1d" stroke="#ef4444" stroke-width="2" rx="6"/>
  <text x="240" y="105" class="d-txt" fill="#fff">ESP32</text>
  <text x="240" y="125" class="d-txt" fill="#fca5a5">4.3V (DROP!)</text>
  <text x="45" y="190" class="d-txt" fill="#fca5a5">V_drop = 0.8A x 0.8Ω = 0.64V drop!</text>
  <text x="45" y="225" class="d-txt" fill="#94a3b8">Causes immediate CPU brownout resets</text>
</svg>""",
        "annotations": [
          {"text": "Supply delivers 5.0V", "x": "10%", "y": "30%"},
          {"text": "Under-voltage triggers ESP32 brownout", "x": "60%", "y": "30%"}
        ]
      },
      {
        "stepNum": 4,
        "altitude": "High Stratosphere • Split Breadboard Rails",
        "title": "Split Breadboard Power Rails",
        "subtitle": "Step 4: The hidden midline rail break trap",
        "desc": "On many full-sized 830-point breadboards, the long blue and red power rails along the edges are physically severed right at the center line! Beginners will plug power into the left side and wonder why sensors on the right side receive zero voltage. Jumper wires must bridge this center gap.",
        "takeaways": [
          "Full-size breadboards frequently split side power buses into two isolated halves",
          "Visual indicator: Broken red/blue printed stripes signify an electrical gap",
          "Bridge the gap with two short U-shaped jumper wires (+ to + and - to -)",
          "Common ground: Tie all module grounds together in a unified star topology"
        ],
        "tip": "Take a multimeter in continuity (beep) mode and test the power rail from one end to the other! If it doesn't beep across the center, install two permanent jumper bridges.",
        "doodleLabel": "Split Power Bus Gap & Bridge",
        "svgDoodle": """<svg viewBox="0 0 360 280" class="doodle-svg" xmlns="http://www.w3.org/2000/svg">
  <style>
    .d-rail { stroke-width: 4; stroke-linecap: round; }
    .d-bridge { stroke: #ffd978; stroke-width: 3.5; stroke-dasharray: 4 3; fill: none; }
    .d-txt { font-family: 'Press Start 2P', monospace; font-size: 8px; fill: #f0fdfa; }
  </style>
  <rect x="25" y="25" width="310" height="230" rx="10" fill="#02111d" stroke="#38bdf8" stroke-width="2.5"/>
  <text x="40" y="55" class="d-txt" fill="#ffd978">THE SPLIT RAIL TRAP</text>
  <!-- Left Side Rails -->
  <line x1="40" y1="90" x2="150" y2="90" stroke="#ef4444" class="d-rail"/>
  <line x1="40" y1="120" x2="150" y2="120" stroke="#3b82f6" class="d-rail"/>
  <text x="45" y="80" class="d-txt" fill="#ef4444">+5V POWER</text>
  <!-- Center Break -->
  <rect x="155" y="70" width="50" height="70" fill="#0f172a" stroke="#f43f5e" stroke-width="2" rx="4"/>
  <text x="160" y="110" class="d-txt" fill="#f43f5e">GAP!</text>
  <!-- Right Side Rails -->
  <line x1="210" y1="90" x2="320" y2="90" stroke="#ef4444" class="d-rail"/>
  <line x1="210" y1="120" x2="320" y2="120" stroke="#3b82f6" class="d-rail"/>
  <!-- Jumper Bridges -->
  <path d="M 145 90 Q 180 50 215 90" class="d-bridge"/>
  <path d="M 145 120 Q 180 150 215 120" class="d-bridge"/>
  <text x="45" y="200" class="d-txt" fill="#ffd978">Install Jumper Bridges Across Gap</text>
  <text x="45" y="228" class="d-txt" fill="#94a3b8">Bridges power across full breadboard</text>
</svg>""",
        "annotations": [
          {"text": "Gap disconnects right side of board", "x": "40%", "y": "35%"},
          {"text": "Bridge with short U-jumpers", "x": "40%", "y": "15%"}
        ]
      },
      {
        "stepNum": 5,
        "altitude": "Ionosphere • Clean Prototyping",
        "title": "Master Prototyping & Cable Routing",
        "subtitle": "Step 5: Tidy wire harnesses & parasitic noise reduction",
        "desc": "A messy 'bird's nest' of wild looping jumper wires acts like radio antennas picking up electromagnetic noise and motor inductive hum. Cutting custom-length solid-core wires flat against the breadboard makes circuits look clean, reliable, and ready for production PCB layout.",
        "takeaways": [
          "Flat routing reduces mutual inductive crosstalk between high-speed buses",
          "Twisting power and ground wires together cancels out radiated magnetic fields",
          "Color-coded wire lengths streamline rapid breadboard debugging",
          "Clean breadboard layouts translate 1-to-1 into custom printed PCB designs"
        ],
        "tip": "Twist your I2C SDA and SCL wires loosely with a Ground wire! The ground shielding absorbs electrical interference from nearby DC motors and AC mains.",
        "doodleLabel": "Clean Wire Routing Layout",
        "svgDoodle": """<svg viewBox="0 0 360 280" class="doodle-svg" xmlns="http://www.w3.org/2000/svg">
  <style>
    .d-board { fill: #f8fafc; stroke: #94a3b8; stroke-width: 3; rx: 8; }
    .d-flat { stroke-width: 3.5; stroke-linecap: square; fill: none; }
    .d-txt { font-family: 'Press Start 2P', monospace; font-size: 8px; fill: #f0fdfa; }
  </style>
  <rect x="25" y="25" width="310" height="230" rx="10" fill="#02111d" stroke="#10b981" stroke-width="3"/>
  <rect x="45" y="55" width="270" height="135" class="d-board"/>
  <!-- Flat clean wires -->
  <path d="M 60 75 L 140 75 L 140 120" stroke="#ef4444" class="d-flat"/>
  <path d="M 60 165 L 200 165 L 200 120" stroke="#3b82f6" class="d-flat"/>
  <path d="M 170 75 L 280 75 L 280 140" stroke="#10b981" class="d-flat"/>
  <rect x="130" y="100" width="80" height="40" fill="#0f172a" stroke="#38bdf8" stroke-width="2" rx="4"/>
  <text x="145" y="125" font-family="'Press Start 2P', monospace" font-size="8" fill="#38bdf8">IC CHIP</text>
  <text x="45" y="225" class="d-txt" fill="#34d399">Tidy 90° Flat Wire Routing • Zero Snags</text>
</svg>""",
        "annotations": [
          {"text": "Clean 90-degree bend routing", "x": "15%", "y": "25%"},
          {"text": "Zero messy airborne wire loops", "x": "20%", "y": "80%"}
        ]
      }
    ]
  },

  "arduino": {
    "id": "arduino",
    "name": "Arduino Uno R3 Microcontroller",
    "shortName": "Arduino Uno",
    "level": "LEVEL 15",
    "reward": "Pioneer Spark Badge",
    "xp": 170,
    "steps": [
      {
        "stepNum": 1,
        "altitude": "Ground Level • Introduction",
        "title": "The Open-Source Legend",
        "subtitle": "Step 1: What is the Arduino Uno R3?",
        "desc": "Born in Ivrea, Italy in 2005, the Arduino Uno ignited the global maker and IoT revolution! Built around the bulletproof 8-bit Microchip ATmega328P microcontroller running at 16 MHz, its user-friendly hardware abstraction library made embedded programming accessible to millions of students and creators.",
        "takeaways": [
          "Heart: 8-bit AVR ATmega328P processor clocked at 16 MHz crystal oscillator",
          "Memory: 32 KB Flash storage, 2 KB SRAM, 1 KB EEPROM non-volatile memory",
          "5V native operating logic — directly drives 5V relays, sensors, and displays",
          "Over 10,000 community-contributed open-source sensor libraries"
        ],
        "tip": "The ATmega328P is virtually indestructible compared to delicate 3.3V modern chips. It can output 20mA (40mA absolute max) per pin and tolerate 5V signals all day long!",
        "doodleLabel": "Anatomy of the Arduino Uno R3",
        "svgDoodle": """<svg viewBox="0 0 360 280" class="doodle-svg" xmlns="http://www.w3.org/2000/svg">
  <style>
    .d-board { fill: #008784; stroke: #006468; stroke-width: 3.5; rx: 12; }
    .d-dip { fill: #0f172a; stroke: #94a3b8; stroke-width: 2; rx: 3; }
    .d-txt { font-family: 'Press Start 2P', monospace; font-size: 8px; fill: #f0fdfa; }
  </style>
  <rect x="40" y="40" width="280" height="190" class="d-board"/>
  <!-- USB Type-B Port -->
  <rect x="25" y="65" width="45" height="40" fill="#94a3b8" stroke="#cbd5e1" stroke-width="2" rx="4"/>
  <text x="32" y="90" font-family="monospace" font-size="8" fill="#000">USB</text>
  <!-- Barrel Jack Power -->
  <rect x="25" y="145" width="50" height="50" fill="#1e293b" stroke="#000" stroke-width="2" rx="4"/>
  <!-- ATmega328P DIP-28 Chip -->
  <rect x="150" y="150" width="130" height="30" class="d-dip"/>
  <text x="160" y="170" font-family="'Press Start 2P', monospace" font-size="8" fill="#ffd978">ATmega328P</text>
  <!-- Headers -->
  <line x1="120" y1="52" x2="300" y2="52" stroke="#1e293b" stroke-width="6" stroke-dasharray="6 4"/>
  <text x="140" y="45" class="d-txt" fill="#fff">DIGITAL PINS 0-13</text>
  <line x1="150" y1="218" x2="300" y2="218" stroke="#1e293b" stroke-width="6" stroke-dasharray="6 4"/>
  <text x="160" y="210" class="d-txt" fill="#ffd978">ANALOG A0-A5</text>
  <text x="60" y="260" class="d-txt" fill="#e0f2fe">Arduino Uno R3 • Made in Italy</text>
</svg>""",
        "annotations": [
          {"text": "Removable DIP-28 ATmega328P microcontroller", "x": "40%", "y": "55%"},
          {"text": "Rugged 5V USB Type-B connector", "x": "10%", "y": "25%"}
        ]
      },
      {
        "stepNum": 2,
        "altitude": "Low Atmosphere • Board Architecture",
        "title": "Pinout & Power Architecture",
        "subtitle": "Step 2: 14 Digital I/O, 6 PWM & 6 Analog Inputs",
        "desc": "The Uno provides 14 digital input/output pins (pins 0 through 13). Six of these pins (marked with a tilde ~: 3, 5, 6, 9, 10, 11) support 8-bit hardware PWM. Six dedicated analog pins (A0 to A5) feed a 10-bit Successive Approximation Register (SAR) ADC.",
        "takeaways": [
          "14 Digital I/O pins (0 to 13) with internal 20k-50kΩ pull-up resistors",
          "6 Hardware PWM pins (~3, ~5, ~6, ~9, ~10, ~11) running at 490 Hz / 980 Hz",
          "6 Analog inputs (A0-A5) with 10-bit resolution (readings from 0 to 1023)",
          "Dual power options: 5V USB or 7-12V DC input on 2.1mm center-positive barrel jack"
        ],
        "tip": "Pins 0 (RX) and 1 (TX) are directly wired to the USB-to-Serial converter chip. Do NOT connect external sensors to pins 0 and 1 while uploading code via USB!",
        "doodleLabel": "Uno Pin Architecture",
        "svgDoodle": """<svg viewBox="0 0 360 280" class="doodle-svg" xmlns="http://www.w3.org/2000/svg">
  <style>
    .d-box { fill: #006468; stroke: #00cec9; stroke-width: 2.5; rx: 8; }
    .d-txt { font-family: 'Press Start 2P', monospace; font-size: 8px; fill: #f0fdfa; }
  </style>
  <rect x="25" y="25" width="310" height="230" rx="10" fill="#02111d" stroke="#008784" stroke-width="2.5"/>
  <rect x="40" y="50" width="130" height="60" class="d-box"/>
  <text x="50" y="75" class="d-txt" fill="#38bdf8">14 DIGITAL</text>
  <text x="50" y="95" class="d-txt" fill="#fff">Pins 0 to 13</text>
  <rect x="190" y="50" width="130" height="60" class="d-box"/>
  <text x="200" y="75" class="d-txt" fill="#fde047">6 PWM (~)</text>
  <text x="200" y="95" class="d-txt" fill="#fff">8-Bit Timers</text>
  <rect x="40" y="130" width="130" height="60" class="d-box"/>
  <text x="50" y="155" class="d-txt" fill="#34d399">6 ANALOG</text>
  <text x="50" y="175" class="d-txt" fill="#fff">A0-A5 (10-bit)</text>
  <rect x="190" y="130" width="130" height="60" class="d-box"/>
  <text x="200" y="155" class="d-txt" fill="#fb7185">POWER RAILS</text>
  <text x="200" y="175" class="d-txt" fill="#fff">5V, 3.3V, VIN</text>
  <text x="45" y="225" class="d-txt" fill="#ffd978">5V High-Current Linear Power Supply</text>
</svg>""",
        "annotations": [
          {"text": "10-bit ADC maps 0-5V to 0-1023", "x": "15%", "y": "50%"},
          {"text": "PWM outputs on ~ pins", "x": "55%", "y": "20%"}
        ]
      },
      {
        "stepNum": 3,
        "altitude": "Mid Atmosphere • Execution Lifecycle",
        "title": "The setup() and loop() Lifecycle",
        "subtitle": "Step 3: Embedded C++ execution flow & hardware interrupts",
        "desc": "Unlike desktop operating systems with threads and task managers, the Arduino microcontroller runs a single continuous thread of bare-metal C++ machine code. The setup() function executes once when power turns on, and then loop() executes repeatedly forever.",
        "takeaways": [
          "setup(): Configures pin modes, serial baud rate, and peripheral registers once",
          "loop(): Repeats continuously at high frequency until power is cut",
          "Hardware interrupts (Pins 2 and 3) instantly pause loop() to service events",
          "millis() clock wraps around to zero after approximately 50 days"
        ],
        "tip": "Avoid blocking delay() calls in loop()! If you call delay(5000), the microcontroller is completely blind to button presses and sensor triggers for 5 entire seconds.",
        "doodleLabel": "Arduino Program Lifecycle",
        "svgDoodle": """<svg viewBox="0 0 360 280" class="doodle-svg" xmlns="http://www.w3.org/2000/svg">
  <style>
    .d-step { fill: #082f49; stroke: #38bdf8; stroke-width: 2.5; rx: 8; }
    .d-txt { font-family: 'Press Start 2P', monospace; font-size: 8px; fill: #f0fdfa; }
  </style>
  <rect x="25" y="25" width="310" height="230" rx="10" fill="#02111d" stroke="#008784" stroke-width="2.5"/>
  <rect x="105" y="45" width="150" height="40" class="d-step"/>
  <text x="120" y="70" class="d-txt" fill="#38bdf8">POWER ON / RESET</text>
  <line x1="180" y1="85" x2="180" y2="105" stroke="#38bdf8" stroke-width="3"/>
  <rect x="90" y="105" width="180" height="40" fill="#14532d" stroke="#22c55e" stroke-width="2.5" rx="8"/>
  <text x="105" y="130" class="d-txt" fill="#4ade80">setup() [ONCE]</text>
  <line x1="180" y1="145" x2="180" y2="165" stroke="#22c55e" stroke-width="3"/>
  <rect x="80" y="165" width="200" height="50" fill="#78350f" stroke="#f59e0b" stroke-width="2.5" rx="8"/>
  <text x="95" y="195" class="d-txt" fill="#ffd978">loop() [FOREVER ↻]</text>
  <!-- Loop Arrow -->
  <path d="M 280 190 Q 310 190 310 160 Q 310 130 280 170" fill="none" stroke="#f59e0b" stroke-width="3"/>
  <text x="45" y="242" class="d-txt" fill="#38bdf8">Single-Threaded Bare Metal Execution</text>
</svg>""",
        "annotations": [
          {"text": "setup() configures hardware registers", "x": "25%", "y": "40%"},
          {"text": "loop() executes millions of times", "x": "25%", "y": "65%"}
        ]
      },
      {
        "stepNum": 4,
        "altitude": "High Stratosphere • Serial & Optiboot",
        "title": "UART Serial & The Optiboot Bootloader",
        "subtitle": "Step 4: Flashing code over USB without an external programmer",
        "desc": "Before Arduino, programming microcontrollers required expensive external high-voltage In-System Programmers (ISPs). The Uno includes a tiny 512-byte program in high memory called the 'Optiboot' bootloader. When you click Upload, the USB chip pulses DTR to reset the chip, and Optiboot flashes your new program into flash memory over UART serial at 115,200 baud.",
        "takeaways": [
          "Optiboot bootloader occupies only 512 bytes of high flash memory",
          "Auto-reset circuit pulses the RESET pin LOW via DTR capacitor coupling",
          "UART Serial transmits binary hex bytecode over TX/RX pins 1 and 0",
          "Serial.begin(115200); establishes communication with PC Serial Monitor"
        ],
        "tip": "Use Serial.print() liberally when debugging! Printing variables out to the IDE Serial Monitor is the #1 tool for finding bugs in embedded C++.",
        "doodleLabel": "USB-to-UART Flashing Architecture",
        "svgDoodle": """<svg viewBox="0 0 360 280" class="doodle-svg" xmlns="http://www.w3.org/2000/svg">
  <style>
    .d-box { fill: #0f172a; stroke: #38bdf8; stroke-width: 2.5; rx: 8; }
    .d-txt { font-family: 'Press Start 2P', monospace; font-size: 8px; fill: #f0fdfa; }
  </style>
  <rect x="25" y="25" width="310" height="230" rx="10" fill="#02111d" stroke="#008784" stroke-width="2.5"/>
  <text x="40" y="55" class="d-txt" fill="#ffd978">USB-TO-UART BOOTLOADER</text>
  <rect x="40" y="75" width="90" height="75" class="d-box"/>
  <text x="48" y="105" class="d-txt" fill="#38bdf8">ATmega16U2</text>
  <text x="48" y="125" class="d-txt" fill="#94a3b8">USB CHIP</text>
  <!-- TX/RX Lines -->
  <line x1="130" y1="100" x2="210" y2="100" stroke="#f59e0b" stroke-width="3"/>
  <text x="145" y="92" class="d-txt" fill="#f59e0b">TX / RX</text>
  <line x1="130" y1="125" x2="210" y2="125" stroke="#ef4444" stroke-width="3" stroke-dasharray="4 3"/>
  <text x="145" y="140" class="d-txt" fill="#ef4444">DTR RESET</text>
  <rect x="210" y="75" width="110" height="75" class="d-box"/>
  <text x="218" y="105" class="d-txt" fill="#10b981">ATmega328P</text>
  <text x="218" y="125" class="d-txt" fill="#ffd978">OPTIBOOT</text>
  <text x="45" y="200" class="d-txt" fill="#10b981">Auto-Reset pulses DTR capacitor</text>
  <text x="45" y="228" class="d-txt" fill="#94a3b8">Baud rate: 115,200 bps flash speed</text>
</svg>""",
        "annotations": [
          {"text": "USB bridge manages PC serial link", "x": "15%", "y": "30%"},
          {"text": "Optiboot writes new bytecode into flash", "x": "60%", "y": "30%"}
        ]
      },
      {
        "stepNum": 5,
        "altitude": "Ionosphere • Cloud IoT Bridge",
        "title": "Bridging Arduino Uno to IoT",
        "subtitle": "Step 5: Co-processing with ESP32 & wireless gateways",
        "desc": "While the classic Uno lacks built-in Wi-Fi, it shines as a rugged 5V sensor coprocessor! Connect the Arduino Uno to an ESP32 or Raspberry Pi over UART serial or I2C: let the Uno handle high-precision 5V analog sensors, while the ESP32 publishes encrypted MQTT telemetry to cloud dashboards.",
        "takeaways": [
          "Co-processor architecture: Arduino handles 5V hardware, ESP32 handles Wi-Fi",
          "UART serial link sends JSON sensor packets at 115,200 baud",
          "Level shifting protects 3.3V ESP32 inputs from Uno 5V TX signals",
          "The ultimate combination of 5V ruggedness and modern cloud IoT connectivity"
        ],
        "tip": "Always insert a voltage divider (1kΩ + 2kΩ) on the Arduino Uno's TX line before connecting it to an ESP32's RX pin, because the Uno outputs 5V logic!",
        "doodleLabel": "Uno + ESP32 Hybrid IoT Bridge",
        "svgDoodle": """<svg viewBox="0 0 360 280" class="doodle-svg" xmlns="http://www.w3.org/2000/svg">
  <style>
    .d-txt { font-family: 'Press Start 2P', monospace; font-size: 8px; fill: #f0fdfa; }
  </style>
  <rect x="25" y="25" width="310" height="230" rx="10" fill="#02111d" stroke="#008784" stroke-width="3"/>
  <!-- Arduino Uno -->
  <rect x="40" y="65" width="110" height="90" rx="8" fill="#006468" stroke="#00cec9" stroke-width="2.5"/>
  <text x="50" y="95" class="d-txt" fill="#fff">ARDUINO</text>
  <text x="50" y="115" class="d-txt" fill="#38bdf8">5V SENSORS</text>
  <text x="50" y="135" class="d-txt" fill="#ffd978">COPROCESSOR</text>
  <!-- Serial Bridge -->
  <line x1="150" y1="110" x2="200" y2="110" stroke="#f59e0b" stroke-width="3"/>
  <text x="155" y="100" class="d-txt" fill="#f59e0b">UART</text>
  <!-- ESP32 IoT Node -->
  <rect x="200" y="65" width="115" height="90" rx="8" fill="#0f172a" stroke="#10b981" stroke-width="2.5"/>
  <text x="215" y="95" class="d-txt" fill="#10b981">ESP32</text>
  <text x="215" y="115" class="d-txt" fill="#38bdf8">WIFI + BLE</text>
  <text x="215" y="135" class="d-txt" fill="#34d399">CLOUD MQTT</text>
  <text x="45" y="195" class="d-txt" fill="#ffd978">Hybrid IoT: 5V Rugged + Cloud Wireless</text>
  <text x="45" y="225" class="d-txt" fill="#94a3b8">Best of both embedded worlds</text>
</svg>""",
        "annotations": [
          {"text": "Reads rugged 5V analog sensors", "x": "15%", "y": "25%"},
          {"text": "Uploads live data to cloud APIs", "x": "60%", "y": "25%"}
        ]
      }
    ]
  }
}

print("Group 3 Data compiled successfully!")
