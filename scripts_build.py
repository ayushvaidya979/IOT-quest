import re
import subprocess

# 1. ULTRASONIC
ultrasonic_data = """
  ultrasonic: {
    id: 'ultrasonic',
    name: 'Ultrasonic Distance Sensor',
    shortName: 'Ultrasonic',
    level: 'LEVEL 07',
    reward: 'Sonar Scout Badge',
    xp: 140,
    steps: [
      {
        stepNum: 1,
        altitude: 'Ground Level • Introduction',
        title: 'Meet The Echolocation Eyes',
        subtitle: 'Step 1: What is the HC-SR04 Ultrasonic Sensor?',
        desc: 'Just like bats and submarines navigate through total darkness using acoustic pulses, the HC-SR04 sensor uses sound waves to see! It transmits high-frequency 40,000 Hz ultrasound bursts and times how many microseconds elapse before the echo bounces back from an obstacle.',
        takeaways: [
          'Emits 40kHz ultrasound inaudible to human ears',
          'Non-contact distance measurement from 2cm to 400cm with 3mm precision',
          'Measuring angle of 15 degrees for directional object detection',
          'Dual transducers: Silver cylinder T transmits, cylinder R receives'
        ],
        tip: 'Ultrasonic waves reflect best off hard, flat surfaces. Soft fabrics or plush toys absorb sonic waves, while angled walls can deflect the echo away.',
        doodleLabel: 'Anatomy of the Ultrasonic Eyes',
        svgDoodle: `
          <svg viewBox="0 0 360 280" class="doodle-svg" xmlns="http://www.w3.org/2000/svg">
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
            <text x="100" y="260" class="d-txt" fill="#ffc960">VCC TRIG ECHO GND</text>
          </svg>
        `,
        annotations: [
          { text: 'Transmitter emits 40kHz ultrasound blast', x: '4%', y: '30%' },
          { text: 'Receiver catches reflected sonic echo', x: '62%', y: '30%' }
        ]
      },
      {
        stepNum: 2,
        altitude: 'Low Atmosphere • Pinout & Schematics',
        title: 'Trigger & Echo Pinout',
        subtitle: 'Step 2: Pinout & 3.3V Logic Protection',
        desc: 'The module has four pins: VCC (5V), TRIG (Digital Input), ECHO (Digital Output), and GND. Triggering requires a 10-microsecond HIGH pulse. The ECHO pin outputs a 5V signal pulse whose width equals the travel time.',
        takeaways: [
          'VCC requires 5V power supply for optimal acoustic range',
          'TRIG needs a 10µs HIGH pulse to start ultrasound ranging',
          'ECHO pin outputs a 5V logic pulse',
          'Use a voltage divider (1kΩ + 2kΩ) to protect 3.3V ESP32 inputs'
        ],
        tip: 'Connecting the HC-SR04 5V Echo pin directly to a 3.3V microcontroller like the ESP32 can degrade the pin over time. Always step it down with a resistor divider!',
        doodleLabel: '3.3V Voltage Divider Protection',
        svgDoodle: `
          <svg viewBox="0 0 360 280" class="doodle-svg" xmlns="http://www.w3.org/2000/svg">
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
          </svg>
        `,
        annotations: [
          { text: '1kΩ + 2kΩ divides 5.0V to 3.33V', x: '35%', y: '15%' },
          { text: 'Safe for 3.3V GPIO pins', x: '40%', y: '85%' }
        ]
      },
      {
        stepNum: 3,
        altitude: 'Mid Atmosphere • Physics & Math',
        title: 'Speed of Sound Equation',
        subtitle: 'Step 3: Calculating centimeters from microsecond timing',
        desc: 'Sound travels through room temperature air at approximately 343 meters per second (0.0343 cm per microsecond). Because the wave travels out to the obstacle and bounces back, divide the total round-trip time by 2.',
        takeaways: [
          'Sound velocity: 343 m/s = 0.0343 cm/µs = 29.1 µs per cm',
          'Formula: Distance (cm) = (Echo Time in µs × 0.0343) / 2',
          'Alternative shortcut: Distance (cm) = Echo Time in µs / 58.2',
          'Temperature variations create minor +/-2% velocity changes'
        ],
        tip: 'If no echo is detected, the sensor times out at ~38ms. Cap the readings in software at 400cm to filter out timeout noise.',
        doodleLabel: 'Distance Calculation Formula',
        svgDoodle: `
          <svg viewBox="0 0 360 280" class="doodle-svg" xmlns="http://www.w3.org/2000/svg">
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
          </svg>
        `,
        annotations: [
          { text: 'Forward transit + return echo', x: '10%', y: '78%' },
          { text: 'Millimeter level resolution', x: '60%', y: '78%' }
        ]
      },
      {
        stepNum: 4,
        altitude: 'High Stratosphere • Code & Logic',
        title: 'Microcontroller Driver Code',
        subtitle: 'Step 4: Non-blocking ultrasonic measurement routine',
        desc: 'In C++, pulseIn() measures how long the ECHO pin stays HIGH. We send a 10µs pulse on TRIG, wait for the echo pulse with a timeout, and calculate distance.',
        takeaways: [
          'digitalWrite(TRIG_PIN, HIGH); delayMicroseconds(10); triggers sonar',
          'long t = pulseIn(ECHO_PIN, HIGH, 30000); measures microsecond duration',
          'float distanceCm = (t * 0.0343) / 2.0;',
          'A 30ms timeout prevents loop freeze if no echo returns'
        ],
        tip: 'Taking the median of 3 consecutive readings filters out spurious acoustic spikes and ensures rock-solid readings.',
        doodleLabel: 'C++ Distance Function',
        svgDoodle: `
          <svg viewBox="0 0 360 280" class="doodle-svg" xmlns="http://www.w3.org/2000/svg">
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
          </svg>
        `,
        annotations: [
          { text: '10µs pulse triggers ultrasound burst', x: '10%', y: '50%' },
          { text: '30,000µs timeout limits distance range', x: '20%', y: '88%' }
        ]
      },
      {
        stepNum: 5,
        altitude: 'Ionosphere • Cloud IoT Lab Quest',
        title: 'Smart Radar & Autonomous Rover',
        subtitle: 'Step 5: Real-World IoT Radar & Vehicle Navigation',
        desc: 'Mount the ultrasonic sensor onto a servo motor to build a 180-degree sweeping radar scanner, or position it above a garage bay to publish parking vacancy telemetry over MQTT to Home Assistant.',
        takeaways: [
          'Servo + Ultrasonic = 180° sweeping radar map in WebGL',
          'Smart city parking occupancy broadcast over Wi-Fi / MQTT',
          'Autonomous collision avoidance for twin-motor robot rovers',
          'Non-contact liquid depth measurement in water tanks'
        ],
        tip: 'For water tanks, mount the sensor at the top pointing straight down. Water provides a pristine acoustic reflective surface!',
        doodleLabel: '180° IoT Radar Scanner',
        svgDoodle: `
          <svg viewBox="0 0 360 280" class="doodle-svg" xmlns="http://www.w3.org/2000/svg">
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
          </svg>
        `,
        annotations: [
          { text: 'Sweeping ultrasound beam maps walls', x: '15%', y: '20%' },
          { text: 'Real-time telemetry sent over Wi-Fi', x: '20%', y: '90%' }
        ]
      }
    ]
  },
"""

print("Ultrasonic module parsed successfully")
