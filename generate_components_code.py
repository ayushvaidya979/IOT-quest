import sys
import os

modules_to_add = [
    {
        "id": "ultrasonic",
        "name": "Ultrasonic Sensor (HC-SR04)",
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
                "desc": "Just like bats navigate total darkness using echolocation, the HC-SR04 sensor uses high-frequency sound waves to see its surroundings! It sends out a high-pitched 40,000 Hz ultrasound pulse and times how many microseconds elapse before the echo bounces back from an obstacle.",
                "takeaways": [
                    "Emits 40kHz sonic burst completely silent to human ears",
                    "Non-contact distance measurement from 2cm to 400cm (up to 13 feet)",
                    "Measuring angle of 15 degrees for focused directional obstacle sensing",
                    "Dual transducers: Silver cylinder 'T' transmits, cylinder 'R' receives"
                ],
                "tip": "Ultrasonic waves reflect best off hard, flat surfaces like walls. Soft fabrics, angled foam, or plush toys can absorb the sound waves and create false infinite readings!",
                "doodleLabel": "Anatomy of the Ultrasonic Eyes",
                "svg": """<svg viewBox="0 0 360 280" class="doodle-svg" xmlns="http://www.w3.org/2000/svg">
  <style>
    .d-chip { fill: #082f49; stroke: #00cec9; stroke-width: 3.5; stroke-linejoin: round; }
    .d-barrel { fill: #0f172a; stroke: #e0f2fe; stroke-width: 3; }
    .d-grid { stroke: #38bdf8; stroke-width: 1.5; stroke-dasharray: 3 3; }
    .d-wave { stroke: #00cec9; stroke-width: 2.5; fill: none; stroke-linecap: round; }
    .d-txt { font-family: 'Press Start 2P', monospace; font-size: 8px; fill: #f0fdfa; }
  </style>
  <rect x="50" y="70" width="260" height="130" rx="14" class="d-chip"/>
  <!-- Transmit barrel -->
  <circle cx="115" cy="135" r="45" class="d-barrel"/>
  <circle cx="115" cy="135" r="32" fill="#1e293b" stroke="#00cec9" stroke-width="2"/>
  <text x="108" y="140" class="d-txt" fill="#38bdf8">T</text>
  <!-- Receive barrel -->
  <circle cx="245" cy="135" r="45" class="d-barrel"/>
  <circle cx="245" cy="135" r="32" fill="#1e293b" stroke="#00cec9" stroke-width="2"/>
  <text x="238" y="140" class="d-txt" fill="#38bdf8">R</text>
  <!-- Ultrasonic waves emitting -->
  <path d="M 60 115 A 30 30 0 0 0 60 155" class="d-wave"/>
  <path d="M 40 100 A 50 50 0 0 0 40 170" class="d-wave"/>
  <!-- Pins -->
  <line x1="120" y1="200" x2="120" y2="245" stroke="#e0f2fe" stroke-width="4"/>
  <line x1="150" y1="200" x2="150" y2="245" stroke="#e0f2fe" stroke-width="4"/>
  <line x1="180" y1="200" x2="180" y2="245" stroke="#e0f2fe" stroke-width="4"/>
  <line x1="210" y1="200" x2="210" y2="245" stroke="#e0f2fe" stroke-width="4"/>
  <text x="100" y="260" class="d-txt" fill="#ffc960">VCC TRIG ECHO GND</text>
</svg>""",
                "annotations": [
                    {"text": "Transmitter emits 40kHz ultrasound blast", "x": "4%", "y": "30%"},
                    {"text": "Receiver catches reflected sonic echo", "x": "62%", "y": "30%"}
                ]
            },
            {
                "stepNum": 2,
                "altitude": "Low Atmosphere • Pinout & Schematics",
                "title": "Trigger & Echo Signals",
                "subtitle": "Step 2: Pinout and 3.3V Logic Level Protection",
                "desc": "The HC-SR04 has four pins: VCC (5V), TRIG (Digital Input), ECHO (Digital Output), and GND. When you send a brief 10-microsecond HIGH pulse to the TRIG pin, the module fires eight 40kHz pulses. The ECHO pin goes HIGH and stays HIGH until the reflected sound returns to the microphone.",
                "takeaways": [
                    "VCC requires 5V power supply for optimal ultrasonic acoustic power",
                    "TRIG needs a short 10-microsecond HIGH pulse to start ranging cycle",
                    "ECHO pin outputs a 5V logic pulse whose duration equals the sound travel time",
                    "Use a simple voltage divider (1kΩ + 2kΩ) to protect 3.3V ESP32 GPIOs"
                ],
                "tip": "Connecting the HC-SR04 5V Echo pin directly to an ESP32 3.3V input can over-volt the pin over time. Use two resistors as a voltage divider to step 5V down to a safe 3.3V!",
                "doodleLabel": "3.3V Voltage Divider Protection",
                "svg": """<svg viewBox="0 0 360 280" class="doodle-svg" xmlns="http://www.w3.org/2000/svg">
  <style>
    .d-wire { stroke: #38bdf8; stroke-width: 3; fill: none; stroke-linecap: round; }
    .d-res { stroke: #fbbf24; stroke-width: 3.5; fill: none; }
    .d-txt { font-family: 'Press Start 2P', monospace; font-size: 8px; fill: #f0fdfa; }
  </style>
  <rect x="20" y="60" width="80" height="120" rx="8" fill="#082f49" stroke="#00cec9" stroke-width="3"/>
  <text x="32" y="125" class="d-txt" fill="#00cec9">ECHO</text>
  <text x="32" y="145" class="d-txt" fill="#f87171">5V OUT</text>
  <line x1="100" y1="120" x2="160" y2="120" class="d-wire"/>
  <!-- Resistor 1k -->
  <path d="M 160 120 L 170 110 L 180 130 L 190 110 L 200 130 L 210 120" class="d-res"/>
  <text x="165" y="98" class="d-txt" fill="#fbbf24">1kΩ</text>
  <!-- Wire to ESP32 -->
  <line x1="210" y1="120" x2="270" y2="120" class="d-wire"/>
  <rect x="270" y="60" width="70" height="120" rx="8" fill="#0f172a" stroke="#10b981" stroke-width="3"/>
  <text x="275" y="115" class="d-txt" fill="#10b981">ESP32</text>
  <text x="275" y="135" class="d-txt" fill="#38bdf8">3.3V OK</text>
  <!-- Resistor 2k to GND -->
  <line x1="210" y1="120" x2="210" y2="160" class="d-wire"/>
  <path d="M 210 160 L 200 170 L 220 180 L 200 190 L 220 200 L 210 210" class="d-res"/>
  <text x="228" y="190" class="d-txt" fill="#fbbf24">2kΩ</text>
  <line x1="210" y1="210" x2="210" y2="240" class="d-wire"/>
  <line x1="195" y1="240" x2="225" y2="240" stroke="#f0fdfa" stroke-width="3"/>
  <text x="235" y="245" class="d-txt" fill="#94a3b8">GND</text>
</svg>""",
                "annotations": [
                    {"text": "1kΩ + 2kΩ divides 5.0V to precisely 3.33V", "x": "35%", "y": "15%"},
                    {"text": "100% safe for ESP32 & Arduino 3.3V GPIO pins", "x": "40%", "y": "85%"}
                ]
            },
            {
                "stepNum": 3,
                "altitude": "Mid Atmosphere • Speed of Sound Physics",
                "title": "Mastering the Distance Formula",
                "subtitle": "Step 3: Calculating centimeters from microsecond timing",
                "desc": "Sound travels through ambient air at approximately 343 meters per second (at 20°C). That equals 0.0343 centimeters per microsecond! Because the sound pulse must travel to the obstacle AND bounce all the way back, we divide the total flight time by 2.",
                "takeaways": [
                    "Speed of sound in dry air: 343 m/s = 0.0343 cm/µs = 29.1 µs per cm",
                    "Distance (cm) = (Echo Time in µs × 0.0343) / 2",
                    "Alternatively: Distance (cm) = Echo Time in µs / 58.2",
                    "Temperature variations cause minor +/-2% shifts in sound velocity"
                ],
                "tip": "If the obstacle is out of range (> 4 meters) or absorbed, the Echo pin times out at around 38 milliseconds. Always handle timeout bounds in your code!",
                "doodleLabel": "Flight Time Physics Map",
                "svg": """<svg viewBox="0 0 360 280" class="doodle-svg" xmlns="http://www.w3.org/2000/svg">
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
                    {"text": "Forward transit time + Return echo time", "x": "10%", "y": "78%"},
                    {"text": "Accurate down to 3 millimeters", "x": "60%", "y": "78%"}
                ]
            },
            {
                "stepNum": 4,
                "altitude": "High Stratosphere • Code & Logic",
                "title": "Arduino & ESP32 Driver Code",
                "subtitle": "Step 4: Non-blocking ultrasonic measurement routine",
                "desc": "Using the Arduino pulseIn() function makes reading distances straightforward. We toggle the TRIG pin for 10 microseconds, wait for pulseIn() to measure the Echo pulse duration in microseconds, and apply our distance formula.",
                "takeaways": [
                    "digitalWrite(TRIG_PIN, HIGH); delayMicroseconds(10); triggers sonar burst",
                    "long duration = pulseIn(ECHO_PIN, HIGH, 30000); captures microsecond time",
                    "float distanceCm = duration * 0.0343 / 2.0;",
                    "Using a 30ms timeout prevents code from hanging if no echo returns"
                ],
                "tip": "For smooth radar displays, take the median of 3 consecutive readings to eliminate erratic acoustic reflections from angled obstacles!",
                "doodleLabel": "Clean C++ Distance Function",
                "svg": """<svg viewBox="0 0 360 280" class="doodle-svg" xmlns="http://www.w3.org/2000/svg">
  <style>
    .d-box { fill: #02111d; stroke: #38bdf8; stroke-width: 3; }
    .d-code { font-family: monospace; font-size: 10px; fill: #7dd3fc; }
    .d-kw { fill: #f43f5e; font-weight: bold; }
    .d-fn { fill: #38bdf8; }
    .d-com { fill: #64748b; font-style: italic; }
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
                    {"text": "10µs pulse triggers internal module clock", "x": "10%", "y": "50%"},
                    {"text": "Timeout of 30,000µs limits range to ~5 meters", "x": "20%", "y": "88%"}
                ]
            },
            {
                "stepNum": 5,
                "altitude": "Ionosphere • Cloud IoT Lab Quest",
                "title": "Smart Parking & Autonomous Rover",
                "subtitle": "Step 5: Real-World IoT Radar & Vehicle Navigation",
                "desc": "Now take your ultrasonic sensor to the cutting edge! Mount it on a servo motor to create a 180-degree sweep radar scanner, or install it above a garage bay to publish parking space vacancy over MQTT to your smart home dashboard.",
                "takeaways": [
                    "Servo + Ultrasonic = 180° sweeping radar map in Processing or WebGL",
                    "Smart city parking space telemetry transmitted over Wi-Fi / LoRaWAN",
                    "Autonomous collision avoidance for twin-motor robotic rovers",
                    "Liquid level depth monitoring in water tanks and rain collection barrels"
                ],
                "tip": "For water tank depth measuring, place the sensor at the top facing downward. Since water has a flat, acoustic-reflective surface, ultrasonic echo gives millimeter precision!",
                "doodleLabel": "Radar Sweep & Collision Bot",
                "svg": """<svg viewBox="0 0 360 280" class="doodle-svg" xmlns="http://www.w3.org/2000/svg">
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
                    {"text": "Sweeping ultrasonic beam maps nearby walls", "x": "15%", "y": "20%"},
                    {"text": "Instant MQTT alert when obstacle breaches 20cm", "x": "20%", "y": "90%"}
                ]
            }
        ]
    }
]

print("Script template ready")
