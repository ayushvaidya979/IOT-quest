// Complete 5-step doodle journey data for all IoT components
const componentQuests = {
  esp32: {
    id: 'esp32',
    name: 'ESP32 Microcontroller',
    shortName: 'ESP32',
    level: 'LEVEL 01',
    reward: 'Circuit Scout Badge',
    xp: 150,
    steps: [
      {
        stepNum: 1,
        altitude: 'Ground Level • Introduction',
        title: 'Meet The Silicon Brain',
        subtitle: 'Step 1: What is the ESP32?',
        desc: 'Imagine a tiny powerhouse computer shrunk down to the size of a postage stamp. That is the ESP32! Created by Espressif Systems, it is a dual-core 32-bit microcontroller running at up to 240 MHz. It has built-in Wi-Fi and Bluetooth right onto its silicon wafer, meaning it can connect to the internet, cloud APIs, and smart devices without any extra hardware.',
        takeaways: [
          'Dual-core Xtensa processor running up to 240MHz',
          'Integrated 2.4 GHz Wi-Fi (802.11 b/g/n) & Bluetooth 4.2 / BLE',
          'Ultra-low power co-processor for battery-powered sensor nodes',
          '36 GPIO pins with touch sensing, ADC, DAC, PWM & SPI/I2C buses'
        ],
        tip: 'The ESP32 operates at 3.3V logic! Supplying 5V directly to its data pins can permanently fry the microcontroller.',
        doodleLabel: 'Anatomy of the ESP32 Chip',
        svgDoodle: `
          <svg viewBox="0 0 360 280" class="doodle-svg" xmlns="http://www.w3.org/2000/svg">
            <style>
              .d-line { stroke: #19e7bd; stroke-width: 3; fill: none; stroke-linecap: round; stroke-linejoin: round; }
              .d-accent { stroke: #ffc960; stroke-width: 3; fill: none; stroke-linecap: round; stroke-linejoin: round; }
              .d-dash { stroke: #7fe3ff; stroke-width: 2.5; stroke-dasharray: 6 5; fill: none; }
              .d-pin { stroke: #e0f2fe; stroke-width: 4; stroke-linecap: round; }
              .d-txt { fill: #f0fdfa; font-family: 'Press Start 2P', monospace; font-size: 9px; }
              .d-chip { fill: #0b2238; stroke: #19e7bd; stroke-width: 3.5; stroke-linejoin: round; }
              .d-metal { fill: #133959; stroke: #7fe3ff; stroke-width: 2.5; }
            </style>
            <!-- PCB Body hand-drawn -->
            <rect x="70" y="35" width="220" height="200" rx="12" class="d-chip"/>
            
            <!-- Metallic RF Shield (WiFi/BT) -->
            <rect x="100" y="60" width="160" height="110" rx="6" class="d-metal"/>
            <path d="M 115 80 Q 180 75 245 80" class="d-dash"/>
            <text x="135" y="115" class="d-txt" font-weight="700" font-size="11" fill="#ffd978">ESP32-WROOM</text>
            <text x="140" y="145" class="d-txt" fill="#7fe3ff">WiFi + Bluetooth</text>
            
            <!-- Antenna Doodle -->
            <path d="M 130 50 L 130 38 L 150 38 L 150 50 L 170 50 L 170 38 L 190 38 L 190 50 L 210 50 L 210 38 L 230 38 L 230 50" class="d-accent"/>
            <text x="145" y="25" class="d-txt" fill="#ffc960">Trace Antenna 📡</text>

            <!-- Left Pin Rows -->
            <line x1="50" y1="65" x2="68" y2="65" class="d-pin"/>
            <line x1="50" y1="95" x2="68" y2="95" class="d-pin"/>
            <line x1="50" y1="125" x2="68" y2="125" class="d-pin"/>
            <line x1="50" y1="155" x2="68" y2="155" class="d-pin"/>
            <line x1="50" y1="185" x2="68" y2="185" class="d-pin"/>
            <line x1="50" y1="215" x2="68" y2="215" class="d-pin"/>

            <!-- Right Pin Rows -->
            <line x1="292" y1="65" x2="310" y2="65" class="d-pin"/>
            <line x1="292" y1="95" x2="310" y2="95" class="d-pin"/>
            <line x1="292" y1="125" x2="310" y2="125" class="d-pin"/>
            <line x1="292" y1="155" x2="310" y2="155" class="d-pin"/>
            <line x1="292" y1="185" x2="310" y2="185" class="d-pin"/>
            <line x1="292" y1="215" x2="310" y2="215" class="d-pin"/>

            <!-- Micro USB port -->
            <rect x="155" y="222" width="50" height="22" rx="4" fill="#081827" stroke="#ffc960" stroke-width="2"/>
            <text x="135" y="265" class="d-txt">USB / Flash Port</text>
            
            <!-- Sparkles -->
            <path d="M 285 45 Q 295 45 295 35 Q 295 45 305 45 Q 295 45 295 55 Z" fill="#ffd978"/>
            <path d="M 60 40 Q 66 40 66 34 Q 66 40 72 40 Q 66 40 66 46 Z" fill="#19e7bd"/>
          </svg>
        `,
        annotations: [
          { text: 'Built-in Wi-Fi & BLE Antenna on board', x: '15%', y: '12%' },
          { text: 'Dual 240MHz 32-bit CPU cores inside', x: '58%', y: '45%' },
          { text: 'GPIO pins for sensors & actuators', x: '68%', y: '82%' }
        ]
      },
      {
        stepNum: 2,
        altitude: 'Lower Stratosphere • The Pins',
        title: 'Decoding The Pinout Magic',
        subtitle: 'Step 2: How It Talks to the Real World',
        desc: 'Pins are the arms and sensory nerves of the ESP32. General Purpose Input/Output (GPIO) pins allow it to sense whether a button is pressed, read temperature voltages through Analog-to-Digital converters (ADCs), and blast commands out to lights, motors, and displays.',
        takeaways: [
          'Power Pins: 3V3 (regulated 3.3V out), VIN/5V (power in), GND (common ground)',
          'ADC Pins: Converts analog sensor voltages (0V - 3.3V) into digital numbers (0 to 4095)',
          'PWM Pins: Pulse-Width Modulation lets you fade LEDs or control motor speed smoothly',
          'I2C & SPI: High speed digital highways for connecting OLED screens and environmental sensors'
        ],
        tip: 'Watch out for Strapping Pins (GPIO 0, 2, 12, 15)! Pulling these HIGH or LOW on boot might accidentally enter bootloader mode.',
        doodleLabel: 'Doodle Pinout Architecture',
        svgDoodle: `
          <svg viewBox="0 0 360 280" class="doodle-svg" xmlns="http://www.w3.org/2000/svg">
            <style>
              .d-line { stroke: #19e7bd; stroke-width: 3; fill: none; stroke-linecap: round; }
              .d-box { fill: #071e30; stroke: #19e7bd; stroke-width: 3; rx: 8; }
              .d-tag { font-family: 'Press Start 2P', monospace; font-size: 8px; fill: #ffd978; }
              .d-wire-red { stroke: #ff6b6b; stroke-width: 3; stroke-dasharray: 5 4; fill: none; }
              .d-wire-blue { stroke: #38bdf8; stroke-width: 3; fill: none; }
              .d-wire-green { stroke: #4ade80; stroke-width: 3; fill: none; }
            </style>
            <rect x="110" y="30" width="140" height="210" class="d-box"/>
            <text x="140" y="65" font-family="Press Start 2P, monospace" font-size="11" font-weight="700" fill="#19e7bd">ESP32 PINS</text>
            
            <!-- Pin tags on left -->
            <path d="M 110 90 L 40 90" class="d-wire-red"/>
            <circle cx="35" cy="90" r="5" fill="#ff6b6b"/>
            <text x="25" y="80" class="d-tag" fill="#ff6b6b">3V3 (Power)</text>

            <path d="M 110 130 L 40 130" class="d-wire-blue"/>
            <circle cx="35" cy="130" r="5" fill="#38bdf8"/>
            <text x="25" y="120" class="d-tag" fill="#38bdf8">GND (Ground)</text>

            <path d="M 110 170 L 40 170" class="d-wire-green"/>
            <circle cx="35" cy="170" r="5" fill="#4ade80"/>
            <text x="25" y="160" class="d-tag" fill="#4ade80">GPIO 2 (LED Pin)</text>

            <path d="M 110 210 L 40 210" class="d-wire-blue"/>
            <circle cx="35" cy="210" r="5" fill="#38bdf8"/>
            <text x="25" y="200" class="d-tag" fill="#a78bfa">GPIO 4 (ADC Sensor)</text>

            <!-- Pin tags on right -->
            <path d="M 250 90 L 320 90" class="d-line"/>
            <text x="260" y="80" class="d-tag">GPIO 21 (SDA - I2C)</text>

            <path d="M 250 130 L 320 130" class="d-line"/>
            <text x="260" y="120" class="d-tag">GPIO 22 (SCL - I2C)</text>

            <path d="M 250 170 L 320 170" class="d-line"/>
            <text x="260" y="160" class="d-tag">TX / RX (Serial UART)</text>

            <path d="M 250 210 L 320 210" class="d-line"/>
            <text x="260" y="200" class="d-tag">Touch Pins 0-9 👆</text>
          </svg>
        `,
        annotations: [
          { text: 'Analog & Touch pins detect human fingers!', x: '10%', y: '68%' },
          { text: 'I2C Bus connects dozens of sensors on 2 wires', x: '58%', y: '28%' }
        ]
      },
      {
        stepNum: 3,
        altitude: 'Mid Cloud Realm • Circuit Wiring',
        title: 'Building The First Circuit',
        subtitle: 'Step 3: Hooking Up With Breadboard & Jumper Wires',
        desc: 'Now we take the ESP32 out of theoretical space and plug it into a breadboard. Here we wire up a simple yet foundational IoT circuit: an LED status indicator with a current-limiting resistor, and a temperature/light sensor to send readings back to the brain.',
        takeaways: [
          'Seat the ESP32 over the center divider trench of a breadboard so opposite pins do not short',
          'Route Jumper Wires cleanly: Red for 3.3V, Black for GND, Yellow/Green for signals',
          'Series resistance (220Ω) is placed before the LED anode to protect both LED & ESP32 pin',
          'Sensor output voltage connects directly into an analog-capable ADC pin like GPIO 34'
        ],
        tip: 'Always disconnect USB power before rearranging wires on your breadboard to prevent accidental short circuits.',
        doodleLabel: 'Doodle Circuit Schematic',
        svgDoodle: `
          <svg viewBox="0 0 360 280" class="doodle-svg" xmlns="http://www.w3.org/2000/svg">
            <style>
              .d-board { fill: #f8fafc; stroke: #94a3b8; stroke-width: 4; rx: 10; }
              .d-dot { fill: #475569; }
              .d-wire { stroke-linecap: round; stroke-linejoin: round; fill: none; }
              .d-led { fill: #22c55e; stroke: #15803d; stroke-width: 3; }
              .d-lbl { font-family: 'Press Start 2P', monospace; font-size: 9px; fill: #f0fdfa; }
            </style>
            <!-- Breadboard Base -->
            <rect x="25" y="40" width="310" height="200" class="d-board"/>
            <!-- Center trench -->
            <rect x="25" y="132" width="310" height="16" fill="#cbd5e1"/>
            
            <!-- Breadboard pin grid holes -->
            <g class="d-dot" opacity="0.6">
              <circle cx="50" cy="70" r="3"/><circle cx="80" cy="70" r="3"/><circle cx="110" cy="70" r="3"/><circle cx="140" cy="70" r="3"/>
              <circle cx="50" cy="100" r="3"/><circle cx="80" cy="100" r="3"/><circle cx="110" cy="100" r="3"/><circle cx="140" cy="100" r="3"/>
              <circle cx="50" cy="170" r="3"/><circle cx="80" cy="170" r="3"/><circle cx="110" cy="170" r="3"/><circle cx="140" cy="170" r="3"/>
              <circle cx="50" cy="200" r="3"/><circle cx="80" cy="200" r="3"/><circle cx="110" cy="200" r="3"/><circle cx="140" cy="200" r="3"/>
            </g>

            <!-- ESP32 mounted across trench -->
            <rect x="40" y="85" width="130" height="110" rx="6" fill="#0f2b48" stroke="#19e7bd" stroke-width="3"/>
            <text x="65" y="145" font-family="'Press Start 2P', monospace" font-size="11" fill="#19e7bd">ESP32</text>

            <!-- LED and Resistor circuit -->
            <!-- Wire from GPIO 2 -->
            <path d="M 170 110 Q 210 90 230 105" class="d-wire" stroke="#f59e0b" stroke-width="3.5"/>
            <!-- 220 Ohm Resistor doodle -->
            <path d="M 230 105 L 245 105 L 250 95 L 255 115 L 260 95 L 265 115 L 270 105 L 285 105" class="d-wire" stroke="#ffd978" stroke-width="3"/>
            <!-- LED -->
            <path d="M 285 105 L 305 105" class="d-wire" stroke="#22c55e" stroke-width="3.5"/>
            <circle cx="305" cy="105" r="10" class="d-led"/>
            <!-- Glow rays -->
            <line x1="315" y1="95" x2="325" y2="85" stroke="#4ade80" stroke-width="2.5"/>
            <line x1="318" y1="105" x2="330" y2="105" stroke="#4ade80" stroke-width="2.5"/>
            <!-- Wire to Ground -->
            <path d="M 305 115 Q 305 210 170 175" class="d-wire" stroke="#3b82f6" stroke-width="3" stroke-dasharray="6 4"/>

            <text x="210" y="75" class="d-lbl" fill="#ffd978">220Ω Resistor ➔</text>
            <text x="265" y="145" class="d-lbl" fill="#4ade80">Blink LED ✨</text>
            <text x="180" y="225" class="d-lbl" fill="#60a5fa">GND Return Route</text>
          </svg>
        `,
        annotations: [
          { text: 'Center groove prevents left/right pins shorting', x: '18%', y: '62%' },
          { text: 'Green LED glows when GPIO2 is pulsed HIGH', x: '60%', y: '30%' }
        ]
      },
      {
        stepNum: 4,
        altitude: 'High Nimbus • The Code Logic',
        title: 'Breathing Life With Code',
        subtitle: 'Step 4: Writing Arduino C++ / MicroPython',
        desc: 'Hardware without software is just quiet plastic and silicon! Using the Arduino IDE or MicroPython, we flash a lightweight program into the ESP32 Flash memory. The program runs an infinite setup/loop cycle: polling sensors and toggling output pins.',
        takeaways: [
          'void setup() runs once on boot: configures pin modes and connects to Wi-Fi SSID',
          'void loop() executes continuously: reads analog voltage, calculates values, blinks LEDs',
          'pinMode(2, OUTPUT) declares GPIO 2 as a driver for the connected circuit',
          'digitalWrite(2, HIGH) sets the pin to 3.3V, completing the circuit loop!'
        ],
        tip: 'Avoid using blocking delay() in real IoT projects! Use millis() timers so your ESP32 can listen to Wi-Fi packets without freezing.',
        doodleLabel: 'Doodle Code Notebook',
        svgDoodle: `
          <svg viewBox="0 0 360 280" class="doodle-svg" xmlns="http://www.w3.org/2000/svg">
            <style>
              .d-page { fill: #071927; stroke: #38bdf8; stroke-width: 3; rx: 8; }
              .d-code { font-family: monospace; font-size: 13px; fill: #e2e8f0; }
              .d-kw { fill: #f43f5e; font-weight: bold; }
              .d-fn { fill: #38bdf8; }
              .d-str { fill: #4ade80; }
              .d-num { fill: #fbbf24; }
              .d-comm { fill: #94a3b8; font-style: italic; }
            </style>
            <!-- Code Editor Window -->
            <rect x="25" y="25" width="310" height="230" class="d-page"/>
            <rect x="25" y="25" width="310" height="28" fill="#0f2b48" rx="8 8 0 0"/>
            <!-- Window dots -->
            <circle cx="45" cy="39" r="5" fill="#f87171"/>
            <circle cx="62" cy="39" r="5" fill="#facc15"/>
            <circle cx="79" cy="39" r="5" fill="#4ade80"/>
            <text x="110" y="44" font-family="Press Start 2P, monospace" font-size="8" fill="#94a3b8">BlinkQuest.ino (Arduino C++)</text>

            <!-- Code lines -->
            <text x="45" y="80" class="d-code"><tspan class="d-kw">void</tspan> <tspan class="d-fn">setup</tspan>() {</text>
            <text x="65" y="102" class="d-code"><tspan class="d-fn">pinMode</tspan>(<tspan class="d-num">2</tspan>, OUTPUT); <tspan class="d-comm">// LED Pin</tspan></text>
            <text x="65" y="124" class="d-code">WiFi.<tspan class="d-fn">begin</tspan>(<tspan class="d-str">"HomeNet"</tspan>, <tspan class="d-str">"pass"</tspan>);</text>
            <text x="45" y="146" class="d-code">}</text>

            <text x="45" y="174" class="d-code"><tspan class="d-kw">void</tspan> <tspan class="d-fn">loop</tspan>() {</text>
            <text x="65" y="196" class="d-code"><tspan class="d-fn">digitalWrite</tspan>(<tspan class="d-num">2</tspan>, HIGH); <tspan class="d-comm">// Turn ON</tspan></text>
            <text x="65" y="218" class="d-code"><tspan class="d-fn">delay</tspan>(<tspan class="d-num">1000</tspan>);</text>
            <text x="65" y="238" class="d-code"><tspan class="d-fn">digitalWrite</tspan>(<tspan class="d-num">2</tspan>, LOW);  <tspan class="d-comm">// Turn OFF</tspan></text>
          </svg>
        `,
        annotations: [
          { text: 'pinMode configures pin as input or output', x: '52%', y: '34%' },
          { text: 'digitalWrite sends 3.3V or 0V logic signals', x: '52%', y: '72%' }
        ]
      },
      {
        stepNum: 5,
        altitude: 'Exosphere • Master Level',
        title: 'Ascending to the IoT Cloud',
        subtitle: 'Step 5: Telemetry Over Wi-Fi & MQTT',
        desc: 'The final frontier! Your ESP32 connects to local Wi-Fi, creates an encrypted MQTT or HTTP socket to a cloud server (like AWS IoT, Adafruit IO, or Blynk), and publishes live sensor telemetry packets. Congratulations, you have mastered the Internet of Things!',
        takeaways: [
          'MQTT Protocol: Lightweight publish/subscribe messaging perfect for low-power IoT',
          'JSON Payloads: Formats sensor readings into structured data packets { "temp": 24.5 }',
          'Cloud Dashboards: Render live gauges, charts, and send smartphone push alerts',
          'OTA (Over-The-Air) Updates: Flash new firmware wirelessly through the cloud!'
        ],
        tip: 'Use TLS/SSL (port 8883) when transmitting MQTT messages over the internet to encrypt sensitive home network telemetry.',
        doodleLabel: 'IoT Cloud Telemetry Pipeline',
        svgDoodle: `
          <svg viewBox="0 0 360 280" class="doodle-svg" xmlns="http://www.w3.org/2000/svg">
            <style>
              .d-cloud { fill: #1e3a5f; stroke: #38bdf8; stroke-width: 3.5; stroke-dasharray: 4 3; }
              .d-node { fill: #071927; stroke: #19e7bd; stroke-width: 3; rx: 8; }
              .d-stream { stroke: #ffd978; stroke-width: 3; stroke-dasharray: 6 5; fill: none; }
              .d-txt { font-family: 'Press Start 2P', monospace; font-size: 9px; fill: #f0fdfa; }
            </style>
            <!-- Physical Device -->
            <rect x="25" y="160" width="90" height="70" class="d-node"/>
            <text x="35" y="195" font-family="'Press Start 2P', monospace" font-size="9" fill="#19e7bd">ESP32</text>
            <text x="35" y="215" class="d-txt">Sensor Node</text>

            <!-- Wireless signal waves -->
            <path d="M 125 185 Q 150 170 170 145" class="d-stream"/>
            <text x="120" y="155" class="d-txt" fill="#ffd978">WiFi / MQTT 📶</text>

            <!-- Big Cloud in sky -->
            <path d="M 180 120 Q 170 85 205 75 Q 235 55 270 70 Q 305 60 320 90 Q 345 110 330 140 Q 315 160 275 160 Q 230 165 200 150 Z" class="d-cloud"/>
            <text x="215" y="110" font-family="'Press Start 2P', monospace" font-size="10" fill="#38bdf8">IOT CLOUD</text>
            <text x="220" y="135" class="d-txt" fill="#e0f2fe">AWS / Adafruit / Blynk</text>

            <!-- Smartphone / Dashboard Screen -->
            <rect x="240" y="180" width="85" height="75" rx="6" fill="#071927" stroke="#ec4899" stroke-width="3"/>
            <circle cx="282" cy="190" r="3" fill="#ec4899"/>
            <text x="250" y="215" font-family="'Press Start 2P', monospace" font-size="7" fill="#34d399">TEMP:24°C</text>
            <text x="250" y="235" font-family="'Press Start 2P', monospace" font-size="7" fill="#fbbf24">FAN: ON</text>

            <path d="M 270 160 L 270 176" stroke="#ec4899" stroke-width="2.5" stroke-linecap="round"/>
            <text x="145" y="240" class="d-txt" fill="#ec4899">Realtime Phone App 📱</text>
          </svg>
        `,
        annotations: [
          { text: 'Microcontroller streams encrypted telemetry packets', x: '5%', y: '80%' },
          { text: 'Cloud broker stores time-series historical data', x: '58%', y: '20%' },
          { text: 'Phone app lets you toggle physical relays globally', x: '52%', y: '88%' }
        ]
      }
    ]
  },

  breadboard: {
    id: 'breadboard',
    name: 'Solderless Breadboard',
    shortName: 'Breadboard',
    level: 'LEVEL 02',
    reward: 'Build Base Badge',
    xp: 120,
    steps: [
      {
        stepNum: 1,
        altitude: 'Ground Level • Introduction',
        title: 'The Prototyping Workbench',
        subtitle: 'Step 1: Why Do We Use Breadboards?',
        desc: 'Before solderless breadboards were invented in 1971 by Ronald J. Portugal, engineers literally drove nails and screws into wooden cutting bread boards to wire circuits! Modern solderless breadboards allow you to quickly plug in, test, and rewire electronic parts thousands of times without soldering or damaging components.',
        takeaways: [
          'Reusable prototyping platform with zero soldering required',
          'Standard 0.1 inch (2.54 mm) hole spacing matches IC and component legs',
          'Spring steel contact clips inside each hole grip wires tightly',
          'Saves countless hours of trial and error while designing circuits'
        ],
        tip: 'Never force oversized wire gauges into breadboard holes — use standard 22 AWG solid core wire or jumper pins to avoid bending the internal spring clips.',
        doodleLabel: 'Doodle Breadboard Concept',
        svgDoodle: `
          <svg viewBox="0 0 360 280" class="doodle-svg" xmlns="http://www.w3.org/2000/svg">
            <style>
              .d-body { fill: #f1f5f9; stroke: #64748b; stroke-width: 4; rx: 12; }
              .d-rail-p { stroke: #ef4444; stroke-width: 3.5; stroke-linecap: round; }
              .d-rail-m { stroke: #3b82f6; stroke-width: 3.5; stroke-linecap: round; }
              .d-txt { font-family: 'Press Start 2P', monospace; font-size: 9px; fill: #f0fdfa; }
            </style>
            <rect x="30" y="30" width="300" height="220" class="d-body"/>
            <!-- Power Rails -->
            <line x1="50" y1="48" x2="310" y2="48" class="d-rail-p"/>
            <line x1="50" y1="58" x2="310" y2="58" class="d-rail-m"/>
            
            <line x1="50" y1="222" x2="310" y2="222" class="d-rail-p"/>
            <line x1="50" y1="232" x2="310" y2="232" class="d-rail-m"/>

            <!-- Center divider -->
            <rect x="30" y="134" width="300" height="12" fill="#cbd5e1"/>
            <text x="120" y="145" class="d-txt" fill="#64748b">DIP IC Trench</text>

            <!-- Terminal strip holes -->
            <g fill="#475569">
              <circle cx="70" cy="80" r="3"/><circle cx="100" cy="80" r="3"/><circle cx="130" cy="80" r="3"/><circle cx="160" cy="80" r="3"/><circle cx="190" cy="80" r="3"/><circle cx="220" cy="80" r="3"/>
              <circle cx="70" cy="98" r="3"/><circle cx="100" cy="98" r="3"/><circle cx="130" cy="98" r="3"/><circle cx="160" cy="98" r="3"/><circle cx="190" cy="98" r="3"/><circle cx="220" cy="98" r="3"/>
              <circle cx="70" cy="116" r="3"/><circle cx="100" cy="116" r="3"/><circle cx="130" cy="116" r="3"/><circle cx="160" cy="116" r="3"/><circle cx="190" cy="116" r="3"/><circle cx="220" cy="116" r="3"/>
              <circle cx="70" cy="164" r="3"/><circle cx="100" cy="164" r="3"/><circle cx="130" cy="164" r="3"/><circle cx="160" cy="164" r="3"/><circle cx="190" cy="164" r="3"/><circle cx="220" cy="164" r="3"/>
              <circle cx="70" cy="182" r="3"/><circle cx="100" cy="182" r="3"/><circle cx="130" cy="182" r="3"/><circle cx="160" cy="182" r="3"/><circle cx="190" cy="182" r="3"/><circle cx="220" cy="182" r="3"/>
              <circle cx="70" cy="200" r="3"/><circle cx="100" cy="200" r="3"/><circle cx="130" cy="200" r="3"/><circle cx="160" cy="200" r="3"/><circle cx="190" cy="200" r="3"/><circle cx="220" cy="200" r="3"/>
            </g>

            <text x="240" y="90" class="d-txt" fill="#0f172a">5-hole vertical</text>
            <text x="240" y="110" class="d-txt" fill="#0f172a">connected clips</text>
            <text x="40" y="270" class="d-txt" fill="#ffd978">Red = VCC (+), Blue = GND (-)</text>
          </svg>
        `,
        annotations: [
          { text: 'Top & bottom horizontal buses distribute power', x: '10%', y: '12%' },
          { text: 'Main area has 5 vertical interconnected holes', x: '55%', y: '35%' }
        ]
      },
      {
        stepNum: 2,
        altitude: 'Lower Stratosphere • Internal Clips',
        title: 'Looking Inside The Metal Skeleton',
        subtitle: 'Step 2: How The Metal Clips Connect Underneath',
        desc: 'If you peel off the sticky backing of a breadboard, you will discover rows of tiny nickel-silver or bronze spring clips! In the main area, each column of 5 holes shares ONE continuous metallic spring clip strip.',
        takeaways: [
          'Holes a, b, c, d, e in column 1 are electrically linked together',
          'Columns are completely insulated from adjacent columns (Col 1 ≠ Col 2)',
          'The middle trench splits the board into two independent top and bottom halves',
          'Plugging two wire ends into the same 5-hole column connects them directly'
        ],
        tip: 'Never plug both legs of a resistor or LED into the SAME numbered column, or you create a direct short across the component!',
        doodleLabel: 'Internal Spring Clip X-Ray',
        svgDoodle: `
          <svg viewBox="0 0 360 280" class="doodle-svg" xmlns="http://www.w3.org/2000/svg">
            <style>
              .d-clip { fill: #ffd978; stroke: #d97706; stroke-width: 2.5; rx: 4; }
              .d-line { stroke: #19e7bd; stroke-width: 3; fill: none; }
              .d-txt { font-family: 'Press Start 2P', monospace; font-size: 9px; fill: #f0fdfa; }
            </style>
            <!-- Plastic housing sliced -->
            <rect x="40" y="35" width="280" height="210" rx="10" fill="#0f2b48" stroke="#38bdf8" stroke-width="3"/>
            
            <!-- Metallic clips showing electrical continuity -->
            <rect x="80" y="60" width="24" height="75" class="d-clip"/>
            <rect x="130" y="60" width="24" height="75" class="d-clip"/>
            <rect x="180" y="60" width="24" height="75" class="d-clip"/>
            <rect x="230" y="60" width="24" height="75" class="d-clip"/>

            <rect x="80" y="150" width="24" height="75" class="d-clip"/>
            <rect x="130" y="150" width="24" height="75" class="d-clip"/>
            <rect x="180" y="150" width="24" height="75" class="d-clip"/>
            <rect x="230" y="150" width="24" height="75" class="d-clip"/>

            <text x="80" y="52" class="d-txt">Col 1</text>
            <text x="130" y="52" class="d-txt">Col 2</text>
            <text x="180" y="52" class="d-txt">Col 3</text>
            <text x="230" y="52" class="d-txt">Col 4</text>

            <path d="M 270 95 L 330 95" class="d-line"/>
            <text x="270" y="85" class="d-txt" fill="#ffd978">5 Connected Holes</text>

            <line x1="50" y1="142" x2="310" y2="142" stroke="#ef4444" stroke-width="2.5" stroke-dasharray="6 4"/>
            <text x="100" y="142" class="d-txt" fill="#f87171">ISOLATION DIVIDER TRENCH</text>
          </svg>
        `,
        annotations: [
          { text: 'Continuous metal clips form vertical 5-point nodes', x: '18%', y: '30%' },
          { text: 'Trench breaks connectivity between top & bottom', x: '50%', y: '52%' }
        ]
      },
      {
        stepNum: 3,
        altitude: 'Mid Cloud Realm • Power Rails',
        title: 'Mastering The Power Rails',
        subtitle: 'Step 3: Power Buses (VCC & GND)',
        desc: 'The long horizontal rows at the top and bottom edges are Power Distribution Rails (buses). Unlike the 5-hole vertical columns, power rails run HORIZONTALLY along the entire length of the breadboard.',
        takeaways: [
          'Red line marked (+) carries positive voltage (e.g., 3.3V or 5V)',
          'Blue/Black line marked (-) carries 0V Ground (GND) return line',
          'Distributes stable power to any component plugged anywhere on the board',
          'Tip: On large 830-point boards, some power rails are split halfway and need a jumper bridge!'
        ],
        tip: 'Always bridge the top and bottom GND rails with a black jumper wire so all components share a single common reference ground.',
        doodleLabel: 'Power Bus Distribution',
        svgDoodle: `
          <svg viewBox="0 0 360 280" class="doodle-svg" xmlns="http://www.w3.org/2000/svg">
            <style>
              .d-line { stroke: #19e7bd; stroke-width: 3; fill: none; }
              .d-txt { font-family: 'Press Start 2P', monospace; font-size: 9px; fill: #f0fdfa; }
            </style>
            <!-- Power rail focus schematic -->
            <rect x="25" y="45" width="310" height="70" rx="8" fill="#071927" stroke="#ef4444" stroke-width="3"/>
            <line x1="45" y1="65" x2="315" y2="65" stroke="#ef4444" stroke-width="4"/>
            <text x="45" y="58" class="d-txt" fill="#ef4444">+ VCC BUS (3.3V / 5V) ➔ All Connected!</text>
            
            <line x1="45" y1="95" x2="315" y2="95" stroke="#3b82f6" stroke-width="4"/>
            <text x="45" y="112" class="d-txt" fill="#38bdf8">- GND BUS (0V) ➔ Common Ground</text>

            <!-- Jumper bridge demonstration -->
            <rect x="25" y="165" width="310" height="70" rx="8" fill="#071927" stroke="#3b82f6" stroke-width="3"/>
            <path d="M 60 95 Q 20 130 60 185" stroke="#38bdf8" stroke-width="4" fill="none" stroke-linecap="round"/>
            <text x="75" y="145" class="d-txt" fill="#ffd978">Common GND Jumper Wire ⚡</text>
            <text x="45" y="215" class="d-txt" fill="#38bdf8">Bottom Ground Rail Shared Successfully</text>
          </svg>
        `,
        annotations: [
          { text: 'Horizontal rails ensure clean, organized power', x: '12%', y: '15%' },
          { text: 'Jumper wire bridges connect top & bottom rails', x: '35%', y: '50%' }
        ]
      },
      {
        stepNum: 4,
        altitude: 'High Nimbus • Integrated Circuits',
        title: 'Straddling Chips Across The Trench',
        subtitle: 'Step 4: Placing Microcontrollers & DIP ICs',
        desc: 'Have you ever wondered why the center trench is exactly 0.3 inches wide? That dimension was engineered specifically to match standard Dual In-line Package (DIP) integrated circuits like the 555 timer, shift registers, and microcontrollers like the ESP32!',
        takeaways: [
          'Straddling across the trench places Pin 1 on top and opposite Pin 14 on the bottom',
          'If placed entirely on one side, opposing pins would be shorted by the vertical metal clips',
          'Use flat-nose tweezers or an IC puller to safely remove chips without bending their legs',
          'Orient the IC notch to the left as standard practice for reading pin numbers'
        ],
        tip: 'Look for the tiny dot or semicircular notch on the chip body: Pin 1 is always directly to the left or below that notch!',
        doodleLabel: 'Trench Straddle Technique',
        svgDoodle: `
          <svg viewBox="0 0 360 280" class="doodle-svg" xmlns="http://www.w3.org/2000/svg">
            <style>
              .d-trench { fill: #334155; stroke: #64748b; stroke-width: 2; }
              .d-ic { fill: #0f172a; stroke: #19e7bd; stroke-width: 3.5; rx: 4; }
              .d-leg { stroke: #e2e8f0; stroke-width: 4; stroke-linecap: round; }
              .d-txt { font-family: 'Press Start 2P', monospace; font-size: 9px; fill: #f0fdfa; }
            </style>
            <!-- Breadboard surface -->
            <rect x="25" y="30" width="310" height="220" rx="8" fill="#1e293b" stroke="#475569" stroke-width="3"/>
            <!-- Center Trench -->
            <rect x="25" y="125" width="310" height="30" class="d-trench"/>
            <text x="140" y="145" class="d-txt" fill="#94a3b8">CENTER TRENCH</text>

            <!-- IC Straddling Trench -->
            <rect x="100" y="95" width="160" height="90" class="d-ic"/>
            <!-- IC notch -->
            <path d="M 100 130 A 10 10 0 0 1 100 150" fill="#1e293b" stroke="#19e7bd" stroke-width="2.5"/>

            <!-- Top IC pins -->
            <line x1="125" y1="95" x2="125" y2="75" class="d-leg"/>
            <line x1="155" y1="95" x2="155" y2="75" class="d-leg"/>
            <line x1="185" y1="95" x2="185" y2="75" class="d-leg"/>
            <line x1="215" y1="95" x2="215" y2="75" class="d-leg"/>

            <!-- Bottom IC pins -->
            <line x1="125" y1="185" x2="125" y2="205" class="d-leg"/>
            <line x1="155" y1="185" x2="155" y2="205" class="d-leg"/>
            <line x1="185" y1="185" x2="185" y2="205" class="d-leg"/>
            <line x1="215" y1="185" x2="215" y2="205" class="d-leg"/>

            <text x="135" y="135" font-family="'Press Start 2P', monospace" font-size="10" fill="#ffd978">DIP-IC</text>
            <text x="135" y="155" class="d-txt">Pins Isolated!</text>
          </svg>
        `,
        annotations: [
          { text: 'Top & bottom legs enter isolated vertical clip rows', x: '15%', y: '20%' },
          { text: 'Notch indicates pin numbering start at bottom left', x: '58%', y: '78%' }
        ]
      },
      {
        stepNum: 5,
        altitude: 'Exosphere • Master Level',
        title: 'Mastering Clean Circuit Hygiene',
        subtitle: 'Step 5: Color Codes & Troubleshooting',
        desc: 'A messy bird\'s nest of wires will cause debugging nightmares when a loose wire slips out. Professional makers follow strict color codes, keep jumper wires flat to the board surface, and perform continuity multimeter checks before firing power.',
        takeaways: [
          'Color Coding Discipline: Red = Power, Black = Ground, Blue/Yellow = Analog, Green = Digital',
          'Trim resistor and capacitor leads so bare metal never touches neighbouring rows',
          'Keep wires flush to the board so you can easily reach buttons and probe points',
          'Use a multimeter in continuity mode (beeper) to verify connections before powering on'
        ],
        tip: 'If your circuit does not work on power up, immediately turn power OFF and touch chips with your finger. If a chip feels scalding hot, you have an inverted polarity short circuit!',
        doodleLabel: 'Pro Circuit Hygiene Guide',
        svgDoodle: `
          <svg viewBox="0 0 360 280" class="doodle-svg" xmlns="http://www.w3.org/2000/svg">
            <style>
              .d-check { stroke: #22c55e; stroke-width: 4; fill: none; stroke-linecap: round; }
              .d-cross { stroke: #ef4444; stroke-width: 4; fill: none; stroke-linecap: round; }
              .d-txt { font-family: 'Press Start 2P', monospace; font-size: 9px; fill: #f0fdfa; }
            </style>
            <!-- Comparison splits -->
            <rect x="25" y="35" width="145" height="210" rx="8" fill="#0f172a" stroke="#22c55e" stroke-width="3"/>
            <path d="M 45 65 L 60 80 L 95 48" class="d-check"/>
            <text x="105" y="65" class="d-txt" fill="#4ade80">PRO STYLE</text>
            <line x1="45" y1="100" x2="150" y2="100" stroke="#ef4444" stroke-width="3"/>
            <line x1="45" y1="130" x2="150" y2="130" stroke="#3b82f6" stroke-width="3"/>
            <line x1="45" y1="160" x2="150" y2="160" stroke="#22c55e" stroke-width="3"/>
            <text x="45" y="200" class="d-txt">Flat, flush &amp; color-coded wires</text>

            <rect x="190" y="35" width="145" height="210" rx="8" fill="#0f172a" stroke="#ef4444" stroke-width="3"/>
            <path d="M 215 50 L 235 70 M 235 50 L 215 70" class="d-cross"/>
            <text x="245" y="65" class="d-txt" fill="#f87171">MESSY BIRDS NEST</text>
            <!-- tangled wires -->
            <path d="M 205 100 Q 310 130 220 160 Q 300 200 250 110" stroke="#fbbf24" stroke-width="3" fill="none"/>
            <text x="205" y="225" class="d-txt">Loose wires &amp; short circuit hazard!</text>
          </svg>
        `,
        annotations: [
          { text: 'Neat horizontal routing avoids accidental disconnects', x: '8%', y: '82%' },
          { text: 'Strict color codes allow instant visual debugging', x: '55%', y: '82%' }
        ]
      }
    ]
  },

  resistor: {
    id: 'resistor',
    name: 'Resistors (Current Limiters)',
    shortName: 'Resistors',
    level: 'LEVEL 03',
    reward: 'Current Keeper Badge',
    xp: 100,
    steps: [
      {
        stepNum: 1,
        altitude: 'Ground Level • Introduction',
        title: 'Taming The Wild Electric Current',
        subtitle: 'Step 1: What is Resistance?',
        desc: 'Electricity wants to rush down a circuit at maximum speed like a bursting river dam. If too much current enters delicate parts like LEDs or computer chips, they burn out in a puff of smoke. Resistors are the traffic cops of electronics: they resist and restrict the flow of electric charge, converting excess electrical energy safely into tiny amounts of heat.',
        takeaways: [
          'Resistance is measured in Ohms (symbolized by the Greek letter Ω)',
          'Follows Ohm’s Law: V = I × R (Voltage = Current × Resistance)',
          'Passive, non-polarized component (can be placed in either direction!)',
          'Made of carbon film, metal oxide, or wound wire'
        ],
        tip: 'Because resistors do not have positive or negative polarity, you never have to worry about putting them backwards in a circuit.',
        doodleLabel: 'Water Pipe Analogy Doodle',
        svgDoodle: `
          <svg viewBox="0 0 360 280" class="doodle-svg" xmlns="http://www.w3.org/2000/svg">
            <style>
              .d-pipe { fill: #0f2b48; stroke: #38bdf8; stroke-width: 4; stroke-linejoin: round; }
              .d-water { fill: #38bdf8; opacity: 0.6; }
              .d-constrict { fill: #d97706; stroke: #ffd978; stroke-width: 3; rx: 6; }
              .d-txt { font-family: 'Press Start 2P', monospace; font-size: 9px; fill: #f0fdfa; }
            </style>
            <!-- Wide water pipe entering -->
            <path d="M 25 80 L 120 80 L 150 115 L 210 115 L 240 80 L 335 80 L 335 180 L 240 180 L 210 145 L 150 145 L 120 180 L 25 180 Z" class="d-pipe"/>
            
            <!-- Resistor constriction block -->
            <rect x="145" y="105" width="70" height="50" class="d-constrict"/>
            <text x="155" y="137" font-family="'Press Start 2P', monospace" font-size="10" fill="#0f172a">RESIST</text>

            <text x="35" y="135" class="d-txt" fill="#7fe3ff">High Flow ➔<br/>Big Current</text>
            <text x="250" y="135" class="d-txt" fill="#4ade80">Controlled Flow ➔<br/>Safe Circuit!</text>
            <text x="90" y="225" class="d-txt" fill="#ffd978">Ohm’s Law: Voltage = Current × Resistance (V = I × R)</text>
          </svg>
        `,
        annotations: [
          { text: 'Think of a resistor like a bottleneck in a garden hose', x: '10%', y: '15%' },
          { text: 'Restricts electron rush to prevent burning out LEDs', x: '55%', y: '78%' }
        ]
      },
      {
        stepNum: 2,
        altitude: 'Lower Stratosphere • Color Bands',
        title: 'Cracking The Secret Color Code',
        subtitle: 'Step 2: How to Read Resistor Stripes',
        desc: 'Resistors are too tiny to print numbers onto, so manufacturers paint colored rings around their bodies! A 4-band resistor uses the first two stripes as significant digits, the third stripe as the 10^x multiplier, and the fourth stripe as precision tolerance.',
        takeaways: [
          'Black=0, Brown=1, Red=2, Orange=3, Yellow=4, Green=5, Blue=6, Violet=7, Gray=8, White=9',
          'Gold stripe = ±5% tolerance; Silver stripe = ±10% tolerance',
          'Mnemonic: "Bad Boys Race Our Young Girls But Violet Generally Wins"',
          'Example: Brown (1), Black (0), Red (×100) = 1,000Ω = 1kΩ!'
        ],
        tip: 'Always position the Gold or Silver tolerance band on the RIGHT before reading colors left to right!',
        doodleLabel: 'Resistor Color Bands Schematic',
        svgDoodle: `
          <svg viewBox="0 0 360 280" class="doodle-svg" xmlns="http://www.w3.org/2000/svg">
            <style>
              .d-body { fill: #fef3c7; stroke: #92400e; stroke-width: 4; }
              .d-lead { stroke: #cbd5e1; stroke-width: 5; stroke-linecap: round; }
              .d-txt { font-family: 'Press Start 2P', monospace; font-size: 9px; fill: #f0fdfa; }
            </style>
            <!-- Wire leads -->
            <line x1="20" y1="130" x2="80" y2="130" class="d-lead"/>
            <line x1="280" y1="130" x2="340" y2="130" class="d-lead"/>

            <!-- Bone shaped resistor body -->
            <path d="M 80 100 Q 110 110 140 110 L 220 110 Q 250 110 280 100 L 280 160 Q 250 150 220 150 L 140 150 Q 110 150 80 160 Z" class="d-body"/>

            <!-- Color Bands -->
            <!-- Band 1: Red (2) -->
            <rect x="115" y="105" width="14" height="50" fill="#dc2626"/>
            <!-- Band 2: Red (2) -->
            <rect x="145" y="108" width="14" height="44" fill="#dc2626"/>
            <!-- Band 3: Brown (x10) -->
            <rect x="180" y="108" width="14" height="44" fill="#78350f"/>
            <!-- Band 4: Gold (5%) -->
            <rect x="235" y="105" width="14" height="50" fill="#fbbf24"/>

            <text x="110" y="90" class="d-txt" fill="#ef4444">2</text>
            <text x="145" y="90" class="d-txt" fill="#ef4444">2</text>
            <text x="175" y="90" class="d-txt" fill="#b45309">0</text>
            <text x="225" y="90" class="d-txt" fill="#facc15">±5%</text>

            <text x="75" y="215" class="d-txt" font-size="11" fill="#ffd978">2 - 2 - ×10Ω = 220 Ohms (Standard LED Guard!)</text>
          </svg>
        `,
        annotations: [
          { text: 'Digits 1 & 2 combine into base number (22)', x: '25%', y: '15%' },
          { text: 'Multiplier band adds zeros (×10 = 220Ω)', x: '52%', y: '15%' }
        ]
      },
      {
        stepNum: 3,
        altitude: 'Mid Cloud Realm • LED Protection',
        title: 'The Great LED Protector',
        subtitle: 'Step 3: Calculating Value for an LED',
        desc: 'Standard LEDs have almost zero internal resistance once their forward voltage threshold is crossed. Without a resistor in series, connecting an LED directly to 5V will draw hundreds of milliamps, instantly destroying the LED. Here is how we size the resistor!',
        takeaways: [
          'Supply Voltage (Vs) = 5V or 3.3V',
          'LED Forward Voltage (Vf) ≈ 2.0V for Red, 3.0V for Blue/White',
          'Safe LED Current (I) ≈ 15mA (0.015 Amperes)',
          'Formula: R = (Vs - Vf) / I ➔ (5V - 2V) / 0.015A = 200Ω (use standard 220Ω!)'
        ],
        tip: 'Higher resistance = dimmer LED and lower power draw. Using 1kΩ gives a gentle indicator glow that saves battery life!',
        doodleLabel: 'Current Limiter Calculation',
        svgDoodle: `
          <svg viewBox="0 0 360 280" class="doodle-svg" xmlns="http://www.w3.org/2000/svg">
            <style>
              .d-line { stroke: #19e7bd; stroke-width: 3.5; fill: none; stroke-linecap: round; }
              .d-txt { font-family: 'Press Start 2P', monospace; font-size: 9px; fill: #f0fdfa; }
            </style>
            <!-- Circuit loop -->
            <rect x="50" y="50" width="260" height="160" rx="12" fill="none" stroke="#38bdf8" stroke-width="3.5"/>
            
            <!-- Battery source -->
            <text x="25" y="135" class="d-txt" fill="#ffd978">5V Source</text>
            
            <!-- Resistor symbol -->
            <path d="M 120 50 L 135 50 L 142 35 L 152 65 L 162 35 L 172 65 L 182 50 L 200 50" class="d-line" stroke="#ffd978"/>
            <text x="135" y="25" class="d-txt" fill="#ffd978">R = 220Ω</text>

            <!-- LED symbol -->
            <circle cx="310" cy="130" r="16" fill="#ef4444" stroke="#f87171" stroke-width="3"/>
            <text x="280" y="175" class="d-txt" fill="#f87171">LED (Vf=2V)</text>

            <text x="75" y="245" class="d-txt" font-size="10" fill="#4ade80">R = (5V - 2V) / 0.015A = 200Ω ➔ 220Ω Safe!</text>
          </svg>
        `,
        annotations: [
          { text: 'Resistor drops the remaining 3 volts safely', x: '35%', y: '25%' },
          { text: 'LED receives precise 15mA operating current', x: '65%', y: '65%' }
        ]
      },
      {
        stepNum: 4,
        altitude: 'High Nimbus • Voltage Dividers',
        title: 'Building A Voltage Divider',
        subtitle: 'Step 4: Reading Analog Sensors',
        desc: 'Most analog sensors (like Light-Dependent Photoresistors and Thermistors) change their resistance when light or heat changes. But microcontrollers cannot read raw resistance—they only read voltage! Two resistors in series create a Voltage Divider that converts resistance into readable voltage.',
        takeaways: [
          'Two series resistors (R1 and R2) divide the total input voltage proportionally',
          'Vout = Vin × [ R2 / (R1 + R2) ]',
          'As photoresistor resistance drops in bright sunlight, Vout voltage shifts dynamically',
          'Allows the ESP32 ADC to read the exact ambient brightness of a room'
        ],
        tip: 'Voltage dividers are for low-current signal sensing only! Never use a voltage divider as a power supply to run motors or boards.',
        doodleLabel: 'Voltage Divider Bridge',
        svgDoodle: `
          <svg viewBox="0 0 360 280" class="doodle-svg" xmlns="http://www.w3.org/2000/svg">
            <style>
              .d-line { stroke: #19e7bd; stroke-width: 3.5; fill: none; }
              .d-txt { font-family: 'Press Start 2P', monospace; font-size: 9px; fill: #f0fdfa; }
            </style>
            <!-- Vin 3.3V top -->
            <line x1="160" y1="30" x2="160" y2="60" class="d-line"/>
            <text x="175" y="45" class="d-txt" fill="#ef4444">Vin = 3.3V</text>

            <!-- Resistor 1 (Photoresistor LDR) -->
            <rect x="140" y="60" width="40" height="50" rx="6" fill="#0f2b48" stroke="#ffd978" stroke-width="3"/>
            <text x="80" y="90" class="d-txt" fill="#ffd978">LDR (Light) ☀️</text>

            <!-- Middle node Tap -->
            <line x1="160" y1="110" x2="160" y2="150" class="d-line"/>
            <circle cx="160" cy="130" r="5" fill="#38bdf8"/>
            <line x1="160" y1="130" x2="260" y2="130" class="d-line" stroke="#38bdf8"/>
            <text x="210" y="120" class="d-txt" fill="#38bdf8">Vout to ESP32 ADC pin</text>

            <!-- Resistor 2 (Fixed 10k) -->
            <rect x="140" y="150" width="40" height="50" rx="6" fill="#0f2b48" stroke="#19e7bd" stroke-width="3"/>
            <text x="80" y="180" class="d-txt" fill="#19e7bd">Fixed 10kΩ</text>

            <!-- Ground bottom -->
            <line x1="160" y1="200" x2="160" y2="230" class="d-line"/>
            <line x1="140" y1="230" x2="180" y2="230" stroke="#38bdf8" stroke-width="4"/>
            <text x="175" y="240" class="d-txt" fill="#38bdf8">GND (0V)</text>
          </svg>
        `,
        annotations: [
          { text: 'Sensor resistance fluctuates with light', x: '10%', y: '30%' },
          { text: 'Voltage at center tap varies between 0V and 3.3V', x: '55%', y: '45%' }
        ]
      },
      {
        stepNum: 5,
        altitude: 'Exosphere • Master Level',
        title: 'Pull-Up & Pull-Down Magic',
        subtitle: 'Step 5: Preventing Floating Digital Pins',
        desc: 'When an input button isn\'t pressed, an open wire acts like an antenna picking up electromagnetic static from radio waves and lights. The pin "floats" unpredictably between 0 and 1! A 10kΩ pull-up or pull-down resistor anchors the pin to a known, rock-solid logic state.',
        takeaways: [
          'Floating Pin: Unconnected GPIO oscillates erratically causing fake button clicks',
          'Pull-Up Resistor: Holds pin HIGH (3.3V) until button connects it to GND',
          'Pull-Down Resistor: Holds pin LOW (0V) until button connects it to 3.3V',
          'ESP32 Secret: It has software-configurable internal pull-up resistors (pinMode(4, INPUT_PULLUP))!'
        ],
        tip: 'Using INPUT_PULLUP in your code saves physical space on your breadboard by eliminating external resistors for simple pushbuttons!',
        doodleLabel: 'Pull-Up Button Schematic',
        svgDoodle: `
          <svg viewBox="0 0 360 280" class="doodle-svg" xmlns="http://www.w3.org/2000/svg">
            <style>
              .d-line { stroke: #19e7bd; stroke-width: 3.5; fill: none; }
              .d-txt { font-family: 'Press Start 2P', monospace; font-size: 9px; fill: #f0fdfa; }
            </style>
            <text x="100" y="30" class="d-txt" fill="#ffd978">3.3V Rail</text>
            <!-- 10k Pull-Up resistor -->
            <line x1="140" y1="35" x2="140" y2="60" class="d-line"/>
            <rect x="125" y="60" width="30" height="50" rx="4" fill="#0f2b48" stroke="#ffd978" stroke-width="3"/>
            <text x="60" y="90" class="d-txt" fill="#ffd978">10kΩ Pull-Up</text>

            <line x1="140" y1="110" x2="140" y2="150" class="d-line"/>
            <circle cx="140" cy="130" r="5" fill="#38bdf8"/>
            <line x1="140" y1="130" x2="260" y2="130" class="d-line" stroke="#38bdf8"/>
            <text x="210" y="120" class="d-txt" fill="#38bdf8">GPIO Input (Normally HIGH)</text>

            <!-- Pushbutton -->
            <circle cx="140" cy="170" r="5" fill="#e2e8f0"/>
            <circle cx="140" cy="205" r="5" fill="#e2e8f0"/>
            <line x1="120" y1="180" x2="155" y2="165" stroke="#ec4899" stroke-width="4"/>
            <text x="60" y="195" class="d-txt" fill="#ec4899">Button 🔘</text>

            <line x1="140" y1="210" x2="140" y2="240" class="d-line"/>
            <text x="100" y="260" class="d-txt" fill="#38bdf8">GND (Pressed = LOW)</text>
          </svg>
        `,
        annotations: [
          { text: 'Pull-up guarantees default 3.3V state', x: '10%', y: '25%' },
          { text: 'Pressing button creates crisp LOW transition', x: '50%', y: '68%' }
        ]
      }
    ]
  },

  led: {
    id: 'led',
    name: 'Light Emitting Diodes (LEDs)',
    shortName: 'LEDs',
    level: 'LEVEL 04',
    reward: 'Glow Maker Badge',
    xp: 100,
    steps: [
      {
        stepNum: 1,
        altitude: 'Ground Level • Introduction',
        title: 'Photons From Pure Solid-State',
        subtitle: 'Step 1: What is a Light Emitting Diode?',
        desc: 'Unlike traditional incandescent bulbs with delicate tungsten filaments that heat up to thousands of degrees, an LED produces light through electroluminescence. When electrons recombine with electron holes inside a semiconductor crystal, energy is released directly as photons of visible light!',
        takeaways: [
          'Diode behavior: Conducts electric current in ONLY ONE direction',
          'Anode (+): Longer leg, connects toward positive voltage',
          'Cathode (-): Shorter leg, flat rim on epoxy body, connects to GND',
          'High energy efficiency: Converts 90% of energy to light instead of heat'
        ],
        tip: 'Look through the translucent epoxy bulb: the larger flag-shaped metal anvil inside is always the negative Cathode!',
        doodleLabel: 'Anatomy of an LED Doodle',
        svgDoodle: `
          <svg viewBox="0 0 360 280" class="doodle-svg" xmlns="http://www.w3.org/2000/svg">
            <style>
              .d-bulb { fill: #22c55e; fill-opacity: 0.25; stroke: #22c55e; stroke-width: 4; }
              .d-lead { stroke: #cbd5e1; stroke-width: 5; stroke-linecap: round; }
              .d-txt { font-family: 'Press Start 2P', monospace; font-size: 9px; fill: #f0fdfa; }
            </style>
            <!-- Dome bulb -->
            <path d="M 120 150 L 120 100 A 60 60 0 0 1 240 100 L 240 150 Z" class="d-bulb"/>
            <line x1="110" y1="150" x2="250" y2="150" stroke="#22c55e" stroke-width="4"/>

            <!-- Flat edge marker on right -->
            <text x="255" y="145" class="d-txt" fill="#38bdf8">Flat Edge (-)</text>

            <!-- Internal anvil & post -->
            <path d="M 150 150 L 150 110 L 170 120 Z" fill="#94a3b8"/>
            <line x1="190" y1="150" x2="190" y2="115" stroke="#94a3b8" stroke-width="3"/>

            <!-- Long Anode Leg (+) -->
            <line x1="150" y1="150" x2="150" y2="250" class="d-lead" stroke="#4ade80"/>
            <text x="90" y="230" class="d-txt" fill="#4ade80">Anode (+)<br/>Longer Leg</text>

            <!-- Short Cathode Leg (-) -->
            <line x1="190" y1="150" x2="190" y2="220" class="d-lead" stroke="#38bdf8"/>
            <text x="210" y="210" class="d-txt" fill="#38bdf8">Cathode (-)<br/>Shorter Leg</text>

            <!-- Photon rays -->
            <path d="M 230 65 L 265 45 M 255 45 L 265 45 L 260 55" stroke="#ffd978" stroke-width="3" fill="none"/>
            <path d="M 245 85 L 280 65 M 270 65 L 280 65 L 275 75" stroke="#ffd978" stroke-width="3" fill="none"/>
            <text x="270" y="40" class="d-txt" fill="#ffd978">Light Photons 🌟</text>
          </svg>
        `,
        annotations: [
          { text: 'Dome lens focuses emitted light beam', x: '18%', y: '18%' },
          { text: 'Flat collar identifies negative Cathode', x: '58%', y: '48%' }
        ]
      },
      {
        stepNum: 2,
        altitude: 'Lower Stratosphere • Bandgaps & Colors',
        title: 'Colors Of The Semiconductor Spectrum',
        subtitle: 'Step 2: Forward Voltage (Vf) vs Color',
        desc: 'Did you know the color of an LED is determined by the chemistry of its semiconductor crystal bandgap, not the colored plastic shell? Because blue and violet photons have more energy than red photons, blue LEDs require a higher forward voltage to turn on!',
        takeaways: [
          'Red LED: ~1.8V to 2.1V (Gallium Arsenide Phosphide)',
          'Yellow / Green LED: ~2.1V to 2.4V (Gallium Phosphide)',
          'Blue / White LED: ~3.0V to 3.4V (Indium Gallium Nitride)',
          'IR (Infrared): ~1.2V used in remote controls, invisible to human eyes'
        ],
        tip: 'An ESP32 outputting 3.3V can directly drive red, green, and blue LEDs through appropriate resistors, but cannot turn on high-voltage 9V LED arrays without a transistor switch.',
        doodleLabel: 'Color Voltage Chart Doodle',
        svgDoodle: `
          <svg viewBox="0 0 360 280" class="doodle-svg" xmlns="http://www.w3.org/2000/svg">
            <style>
              .d-txt { font-family: 'Press Start 2P', monospace; font-size: 9px; fill: #f0fdfa; }
            </style>
            <!-- Color rows -->
            <rect x="30" y="30" width="300" height="45" rx="8" fill="#450a0a" stroke="#ef4444" stroke-width="2.5"/>
            <circle cx="55" cy="52" r="10" fill="#ef4444"/>
            <text x="75" y="58" class="d-txt" fill="#fca5a5">RED: 1.8V - 2.0V (Lowest energy)</text>

            <rect x="30" y="85" width="300" height="45" rx="8" fill="#14532d" stroke="#22c55e" stroke-width="2.5"/>
            <circle cx="55" cy="107" r="10" fill="#22c55e"/>
            <text x="75" y="113" class="d-txt" fill="#86efac">GREEN: 2.1V - 2.4V</text>

            <rect x="30" y="140" width="300" height="45" rx="8" fill="#082f49" stroke="#0ea5e9" stroke-width="2.5"/>
            <circle cx="55" cy="162" r="10" fill="#0ea5e9"/>
            <text x="75" y="168" class="d-txt" fill="#7dd3fc">BLUE: 3.0V - 3.3V (High energy bandgap)</text>

            <rect x="30" y="195" width="300" height="45" rx="8" fill="#1e293b" stroke="#e2e8f0" stroke-width="2.5"/>
            <circle cx="55" cy="217" r="10" fill="#ffffff"/>
            <text x="75" y="223" class="d-txt" fill="#ffffff">WHITE: 3.2V (Blue crystal + Yellow phosphor!)</text>
          </svg>
        `,
        annotations: [
          { text: 'Photons with higher frequency require more forward voltage', x: '8%', y: '90%' }
        ]
      },
      {
        stepNum: 3,
        altitude: 'Mid Cloud Realm • PWM Dimming',
        title: 'Smooth Fading With PWM Signals',
        subtitle: 'Step 3: Pulse-Width Modulation Magic',
        desc: 'Can an LED only be completely ON or completely OFF? No! Microcontrollers create smooth dimming using Pulse-Width Modulation (PWM). By pulsing the LED ON and OFF hundreds of times per second faster than the human eye can see, changing the "duty cycle" mimics smooth analog brightness.',
        takeaways: [
          'Frequency: The rate of on/off pulses (typically 1000 Hz or 1 kHz)',
          'Duty Cycle: Percentage of time the signal stays HIGH during each pulse period',
          '25% Duty Cycle = Soft mood glow; 75% Duty Cycle = Bright beacon',
          'Persistence of Vision: Human brains blend rapid pulses into steady perceived brightness'
        ],
        tip: 'In ESP32 code, use ledcWrite(channel, duty) to dim an LED with 8-bit to 16-bit resolution without any extra parts!',
        doodleLabel: 'PWM Duty Cycle Waves',
        svgDoodle: `
          <svg viewBox="0 0 360 280" class="doodle-svg" xmlns="http://www.w3.org/2000/svg">
            <style>
              .d-wave { stroke: #19e7bd; stroke-width: 3.5; fill: none; }
              .d-txt { font-family: 'Press Start 2P', monospace; font-size: 9px; fill: #f0fdfa; }
            </style>
            <!-- 25% Duty Cycle -->
            <path d="M 30 70 L 60 70 L 60 40 L 80 40 L 80 70 L 140 70 L 140 40 L 160 40 L 160 70 L 220 70 L 220 40 L 240 40 L 240 70 L 300 70" class="d-wave"/>
            <text x="35" y="32" class="d-txt" fill="#ffd978">25% Duty Cycle ➔ Dim Glow (25% Brightness)</text>

            <!-- 50% Duty Cycle -->
            <path d="M 30 140 L 60 140 L 60 110 L 100 110 L 100 140 L 140 140 L 140 110 L 180 110 L 180 140 L 220 140 L 220 110 L 260 110 L 260 140 L 300 140" class="d-wave" stroke="#38bdf8"/>
            <text x="35" y="102" class="d-txt" fill="#38bdf8">50% Duty Cycle ➔ Half Brightness</text>

            <!-- 90% Duty Cycle -->
            <path d="M 30 210 L 40 210 L 40 180 L 100 180 L 100 210 L 110 210 L 110 180 L 170 180 L 170 210 L 180 210 L 180 180 L 240 180 L 240 210 L 300 210" class="d-wave" stroke="#4ade80"/>
            <text x="35" y="172" class="d-txt" fill="#4ade80">90% Duty Cycle ➔ Maximum Brightness</text>

            <text x="40" y="245" class="d-txt" fill="#ffd978">Pulsed faster than 1,000 times/second = Smooth Analog Look!</text>
          </svg>
        `,
        annotations: [
          { text: 'Changing the ratio of ON time vs OFF time controls brightness', x: '10%', y: '50%' }
        ]
      },
      {
        stepNum: 4,
        altitude: 'High Nimbus • Addressable RGB LEDs',
        title: 'NeoPixels & WS2812B Smart LEDs',
        subtitle: 'Step 4: Chaining Hundreds of Colors on 1 Pin',
        desc: 'Traditional RGB LEDs require 3 separate pins (Red, Green, Blue) for each LED. But addressable LEDs (WS2812B / NeoPixel) have a tiny microchip built right inside the 5050 LED package! You can daisy-chain hundreds of LEDs together and control each individual color with just ONE data pin.',
        takeaways: [
          'Built-in WS2811 driver IC inside every individual lamp bead',
          'Data In (DI) receives 24-bit color bytes (8-bit Green, 8-bit Red, 8-bit Blue)',
          'Data Out (DO) passes the remaining data packet down the daisy chain',
          'Allows creating scrolling animated rainbow signs and ambient backlights'
        ],
        tip: 'Always place a 1000µF capacitor across the 5V and GND power rails of a NeoPixel strip to absorb sudden current spikes when turning all LEDs bright white.',
        doodleLabel: 'NeoPixel Strip Daisy Chain',
        svgDoodle: `
          <svg viewBox="0 0 360 280" class="doodle-svg" xmlns="http://www.w3.org/2000/svg">
            <style>
              .d-pix { fill: #0f172a; stroke: #ec4899; stroke-width: 3; rx: 6; }
              .d-wire { stroke: #19e7bd; stroke-width: 3.5; stroke-dasharray: 5 4; fill: none; }
              .d-txt { font-family: 'Press Start 2P', monospace; font-size: 9px; fill: #f0fdfa; }
            </style>
            <!-- Pixel 1 -->
            <rect x="25" y="80" width="80" height="80" class="d-pix"/>
            <circle cx="65" cy="120" r="18" fill="#ef4444"/>
            <text x="35" y="105" font-family="'Press Start 2P', monospace" font-size="7" fill="#fff">PIXEL 1</text>

            <!-- Pixel 2 -->
            <rect x="140" y="80" width="80" height="80" class="d-pix"/>
            <circle cx="180" cy="120" r="18" fill="#22c55e"/>
            <text x="150" y="105" font-family="'Press Start 2P', monospace" font-size="7" fill="#fff">PIXEL 2</text>

            <!-- Pixel 3 -->
            <rect x="255" y="80" width="80" height="80" class="d-pix"/>
            <circle cx="295" cy="120" r="18" fill="#3b82f6"/>
            <text x="265" y="105" font-family="'Press Start 2P', monospace" font-size="7" fill="#fff">PIXEL 3</text>

            <!-- Data chain wire -->
            <path d="M 105 120 L 140 120" class="d-wire"/>
            <path d="M 220 120 L 255 120" class="d-wire"/>
            
            <text x="25" y="55" class="d-txt" fill="#ffd978">1 Single GPIO Data Pin from ESP32 ➔</text>
            <text x="50" y="210" class="d-txt" fill="#38bdf8">24-bit GRB data shifts sequentially through each chip!</text>
          </svg>
        `,
        annotations: [
          { text: 'Each pixel consumes up to 60mA at peak white', x: '12%', y: '82%' },
          { text: 'Internal driver latches color bytes reliably', x: '55%', y: '20%' }
        ]
      },
      {
        stepNum: 5,
        altitude: 'Exosphere • Master Level',
        title: 'Status Indicators in IoT Products',
        subtitle: 'Step 5: Designing Maker UI Feedback',
        desc: 'In real-world commercial IoT products, users cannot see serial monitors or Wi-Fi debug consoles. The humble LED is your primary communication bridge with the human user! A thoughtfully designed blink pattern conveys status, errors, and internet connectivity immediately.',
        takeaways: [
          'Slow gentle breathing / pulse: Standby / Connected to Wi-Fi normally',
          'Fast double-blink: Attempting to connect to Wi-Fi access point',
          'Rapid stutter: Sensor error / hardware fault detected',
          'Solid on: Bootloader mode or active firmware flash underway'
        ],
        tip: 'Always include a non-blocking "heartbeat" LED blink in your IoT loop() so you know if your code has locked up without rebooting.',
        doodleLabel: 'Status Blink UX Library',
        svgDoodle: `
          <svg viewBox="0 0 360 280" class="doodle-svg" xmlns="http://www.w3.org/2000/svg">
            <style>
              .d-txt { font-family: 'Press Start 2P', monospace; font-size: 9px; fill: #f0fdfa; }
            </style>
            <rect x="25" y="30" width="310" height="60" rx="8" fill="#064e3b" stroke="#10b981" stroke-width="2.5"/>
            <text x="45" y="55" font-family="'Press Start 2P', monospace" font-size="9" fill="#a7f3d0">HEARTBEAT (1Hz)</text>
            <text x="45" y="78" class="d-txt" fill="#ecfdf5">Everything healthy, loop running normally</text>

            <rect x="25" y="105" width="310" height="60" rx="8" fill="#713f12" stroke="#eab308" stroke-width="2.5"/>
            <text x="45" y="130" font-family="'Press Start 2P', monospace" font-size="9" fill="#fde047">FAST BLINK (5Hz)</text>
            <text x="45" y="153" class="d-txt" fill="#fef9c3">Searching for Wi-Fi router / DHCP IP</text>

            <rect x="25" y="180" width="310" height="60" rx="8" fill="#7f1d1d" stroke="#ef4444" stroke-width="2.5"/>
            <text x="45" y="205" font-family="'Press Start 2P', monospace" font-size="9" fill="#fca5a5">SOS PATTERN (... --- ...)</text>
            <text x="45" y="228" class="d-txt" fill="#fee2e2">Hardware failure or sensor disconnection</text>
          </svg>
        `,
        annotations: [
          { text: 'Professional IoT devices speak through LED blink rhythms', x: '10%', y: '90%' }
        ]
      }
    ]
  },

  transistor: {
    id: 'transistor',
    name: 'Transistors (Solid-State Switches)',
    shortName: 'Transistors',
    level: 'LEVEL 05',
    reward: 'Switch Master Badge',
    xp: 180,
    steps: [
      {
        stepNum: 1,
        altitude: 'Ground Level • Introduction',
        title: 'The Invention That Changed The World',
        subtitle: 'Step 1: What is a Transistor?',
        desc: 'Invented at Bell Labs in 1947, the transistor is widely regarded as one of the greatest inventions of the 20th century. Modern computer chips contain billions of them! In simple IoT maker circuits, a transistor acts as a microscopic electronic switch that lets a tiny, gentle signal turn on a much larger, high-power device.',
        takeaways: [
          'No moving mechanical parts: Switches millions of times per second silently',
          'Two primary families: BJT (Bipolar Junction) and MOSFET (Field Effect)',
          'Amplifies small currents into big currents, or works as a binary ON/OFF switch',
          'Protects delicate microcontrollers from high current loads'
        ],
        tip: 'Microcontroller pins can only deliver about 20mA to 40mA. To power a 500mA motor or relay, you MUST use a transistor as a power bridge!',
        doodleLabel: 'Valve Analogy Doodle',
        svgDoodle: `
          <svg viewBox="0 0 360 280" class="doodle-svg" xmlns="http://www.w3.org/2000/svg">
            <style>
              .d-pipe { fill: #0f2b48; stroke: #38bdf8; stroke-width: 4; }
              .d-valve { fill: #ef4444; stroke: #f87171; stroke-width: 3; }
              .d-txt { font-family: 'Press Start 2P', monospace; font-size: 9px; fill: #f0fdfa; }
            </style>
            <!-- Pipe system -->
            <path d="M 40 100 L 150 100 L 150 40 L 210 40 L 210 100 L 320 100 L 320 180 L 210 180 L 210 240 L 150 240 L 150 180 L 40 180 Z" class="d-pipe"/>
            
            <!-- Valve handle controlled by small signal -->
            <rect x="155" y="70" width="50" height="20" class="d-valve"/>
            <line x1="180" y1="40" x2="180" y2="70" stroke="#ffd978" stroke-width="4"/>

            <text x="35" y="75" class="d-txt" fill="#ffd978">Small Signal (Base / Gate) ➔</text>
            <text x="215" y="75" class="d-txt" fill="#38bdf8">Opens Heavy Flow (Collector ➔ Emitter)</text>

            <text x="50" y="215" class="d-txt" fill="#4ade80">A tiny 3.3V / 5mA signal unleashes 12V / 2000mA heavy current!</text>
          </svg>
        `,
        annotations: [
          { text: 'Think of a transistor like a water valve opened by a pinky finger', x: '10%', y: '15%' }
        ]
      },
      {
        stepNum: 2,
        altitude: 'Lower Stratosphere • The Three Terminals',
        title: 'BJT Anatomy: Base, Collector, Emitter',
        subtitle: 'Step 2: NPN vs PNP Transistors',
        desc: 'A Bipolar Junction Transistor (BJT) like the classic 2N2222 has three legs: the Base (B), the Collector (C), and the Emitter (E). For the popular NPN type, injecting a tiny trickle of current into the Base opens the floodgates between Collector and Emitter.',
        takeaways: [
          'Base (B): The control switch trigger (connects to microcontroller GPIO via 1kΩ resistor)',
          'Collector (C): Connects to the high-voltage load side',
          'Emitter (E): Connects to ground (completes the circuit loop)',
          'Saturation Mode: Base current is high enough that the switch is completely, fully ON'
        ],
        tip: 'Never connect an ESP32 pin directly to a BJT Base without a 1kΩ current-limiting resistor, or you will short the GPIO pin through the base-emitter diode!',
        doodleLabel: 'BJT NPN Pinout Schematic',
        svgDoodle: `
          <svg viewBox="0 0 360 280" class="doodle-svg" xmlns="http://www.w3.org/2000/svg">
            <style>
              .d-pkg { fill: #1e293b; stroke: #64748b; stroke-width: 4; }
              .d-leg { stroke: #cbd5e1; stroke-width: 5; stroke-linecap: round; }
              .d-txt { font-family: 'Press Start 2P', monospace; font-size: 9px; fill: #f0fdfa; }
            </style>
            <!-- TO-92 plastic package -->
            <path d="M 120 70 A 60 60 0 0 1 240 70 L 240 120 L 120 120 Z" class="d-pkg"/>
            <text x="145" y="105" font-family="'Press Start 2P', monospace" font-size="9" fill="#19e7bd">2N2222</text>

            <!-- 3 leads -->
            <line x1="140" y1="120" x2="140" y2="210" class="d-leg"/>
            <line x1="180" y1="120" x2="180" y2="210" class="d-leg"/>
            <line x1="220" y1="120" x2="220" y2="210" class="d-leg"/>

            <text x="110" y="240" class="d-txt" fill="#38bdf8">E (Emitter)</text>
            <text x="165" y="240" class="d-txt" fill="#ffd978">B (Base)</text>
            <text x="210" y="240" class="d-txt" fill="#ef4444">C (Collector)</text>
          </svg>
        `,
        annotations: [
          { text: 'Flat face facing you: Emitter, Base, Collector from left to right', x: '10%', y: '15%' }
        ]
      },
      {
        stepNum: 3,
        altitude: 'Mid Cloud Realm • Switching Relays & Motors',
        title: 'Switching Heavy High-Power Loads',
        subtitle: 'Step 3: Low-Side Switching Configuration',
        desc: 'In a Low-Side switch circuit, the load (motor, solenoid, 12V strip light) is connected to the positive supply rail, and the transistor sits between the load and Ground. When the ESP32 drives the Base HIGH, the transistor pulls the load to ground, activating it instantly.',
        takeaways: [
          'Protects the 3.3V microcontroller while switching 12V or 24V circuits',
          'Common Ground: The microcontroller GND and load 12V GND must be connected together',
          'Base resistor (typically 1kΩ) calculates to guarantee complete transistor saturation',
          'Efficient and heat-free switching when sized correctly'
        ],
        tip: 'Make sure your transistor\'s Collector Current (Ic) rating exceeds the maximum stall current of the motor you are controlling.',
        doodleLabel: 'Low-Side Switch Circuit',
        svgDoodle: `
          <svg viewBox="0 0 360 280" class="doodle-svg" xmlns="http://www.w3.org/2000/svg">
            <style>
              .d-line { stroke: #19e7bd; stroke-width: 3.5; fill: none; }
              .d-txt { font-family: 'Press Start 2P', monospace; font-size: 9px; fill: #f0fdfa; }
            </style>
            <!-- 12V Motor Load -->
            <circle cx="240" cy="70" r="25" fill="#0f2b48" stroke="#38bdf8" stroke-width="3"/>
            <text x="230" y="77" class="d-txt" fill="#38bdf8">Motor</text>
            <text x="220" y="30" class="d-txt" fill="#ef4444">+12V Supply</text>

            <!-- Transistor switch -->
            <circle cx="240" cy="160" r="25" fill="#071927" stroke="#19e7bd" stroke-width="3"/>
            <line x1="240" y1="95" x2="240" y2="135" class="d-line"/>
            <line x1="240" y1="185" x2="240" y2="230" class="d-line"/>
            <text x="220" y="255" class="d-txt" fill="#38bdf8">GND (0V)</text>

            <!-- ESP32 control via Base resistor -->
            <text x="25" y="165" class="d-txt" fill="#ffd978">ESP32 GPIO ➔</text>
            <rect x="130" y="150" width="40" height="20" rx="4" fill="#0f2b48" stroke="#ffd978" stroke-width="2.5"/>
            <text x="135" y="165" class="d-txt" font-size="14">1kΩ</text>
            <line x1="170" y1="160" x2="215" y2="160" class="d-line"/>
          </svg>
        `,
        annotations: [
          { text: 'Transistor safely completes circuit to ground on command', x: '55%', y: '65%' }
        ]
      },
      {
        stepNum: 4,
        altitude: 'High Nimbus • Inductive Kickback',
        title: 'The Flyback Diode Armor',
        subtitle: 'Step 4: Preventing Inductive Destruction',
        desc: 'Electromagnetic coils inside motors, relays, and solenoids store energy in magnetic fields. When the transistor suddenly switches OFF, that magnetic field collapses instantly, generating a massive reverse voltage spike (hundreds of volts!) called inductive kickback. A Flyback Diode absorbs this spike and saves your transistor from exploding.',
        takeaways: [
          'Inductive loads resist changes in current flow: V = -L × (di/dt)',
          'Voltage spike shoots backwards straight into the Collector pin',
          'Flyback diode (e.g., 1N4001) is placed in reverse bias across the motor coils',
          'Safely recirculates and dissipates the magnetic collapse energy'
        ],
        tip: 'Never drive an electromagnetic relay or DC motor with a transistor without placing a flyback diode across the coil terminals!',
        doodleLabel: 'Flyback Diode Defense',
        svgDoodle: `
          <svg viewBox="0 0 360 280" class="doodle-svg" xmlns="http://www.w3.org/2000/svg">
            <style>
              .d-line { stroke: #19e7bd; stroke-width: 3.5; fill: none; }
              .d-txt { font-family: 'Press Start 2P', monospace; font-size: 9px; fill: #f0fdfa; }
            </style>
            <!-- Motor coil -->
            <rect x="90" y="70" width="70" height="70" rx="8" fill="#0f2b48" stroke="#38bdf8" stroke-width="3"/>
            <text x="100" y="110" class="d-txt" fill="#38bdf8">Coil Load</text>

            <!-- Flyback Diode across coil in parallel -->
            <rect x="200" y="70" width="70" height="70" rx="8" fill="#450a0a" stroke="#ef4444" stroke-width="3"/>
            <text x="210" y="105" class="d-txt" fill="#fca5a5">1N4001<br/>Diode</text>

            <path d="M 125 70 L 125 50 L 235 50 L 235 70" class="d-line"/>
            <path d="M 125 140 L 125 160 L 235 160 L 235 140" class="d-line"/>

            <text x="50" y="210" class="d-txt" fill="#ffd978">Clamps lethal 200V magnetic spike to safe limits! 🛡️</text>
          </svg>
        `,
        annotations: [
          { text: 'Diode provides safe discharge path for collapsing magnetic flux', x: '10%', y: '82%' }
        ]
      },
      {
        stepNum: 5,
        altitude: 'Exosphere • Master Level',
        title: 'Level Up To MOSFETs For Monster Power',
        subtitle: 'Step 5: High-Current Metal-Oxide Silicon',
        desc: 'When you need to control heavy-duty 20-amp LED floodlights, 3D printer heated beds, or large robotics motors, BJTs get too hot. Enter the MOSFET (Metal-Oxide-Semiconductor Field-Effect Transistor)! Instead of current, MOSFETs are controlled by voltage on their insulated Gate.',
        takeaways: [
          'Terminals: Gate (G), Drain (D), Source (S)',
          'Voltage controlled: Gate draws virtually zero continuous current',
          'Ultra-low internal resistance (Rds(on) < 0.01Ω) generates negligible heat',
          'Logic-Level MOSFETs (like IRLZ44N) trigger completely ON with 3.3V or 5V logic'
        ],
        tip: 'Look for the "L" in MOSFET part names (e.g., IRLZ44N vs IRFZ44N). The "L" stands for Logic-Level, meaning it can be fully activated by 3.3V/5V microcontroller pins!',
        doodleLabel: 'MOSFET Powerhouse Blueprint',
        svgDoodle: `
          <svg viewBox="0 0 360 280" class="doodle-svg" xmlns="http://www.w3.org/2000/svg">
            <style>
              .d-txt { font-family: 'Press Start 2P', monospace; font-size: 9px; fill: #f0fdfa; }
            </style>
            <!-- TO-220 Heavy tab package -->
            <rect x="120" y="30" width="120" height="40" rx="4" fill="#94a3b8" stroke="#cbd5e1" stroke-width="2"/>
            <circle cx="180" cy="50" r="10" fill="#0f172a"/>
            
            <rect x="120" y="70" width="120" height="70" rx="4" fill="#0f172a" stroke="#19e7bd" stroke-width="3"/>
            <text x="145" y="110" font-family="'Press Start 2P', monospace" font-size="9" fill="#19e7bd">IRLZ44N</text>

            <!-- 3 thick leads -->
            <line x1="140" y1="140" x2="140" y2="230" stroke="#cbd5e1" stroke-width="5" stroke-linecap="round"/>
            <line x1="180" y1="140" x2="180" y2="230" stroke="#cbd5e1" stroke-width="5" stroke-linecap="round"/>
            <line x1="220" y1="140" x2="220" y2="230" stroke="#cbd5e1" stroke-width="5" stroke-linecap="round"/>

            <text x="110" y="255" class="d-txt" fill="#ffd978">Gate (G)</text>
            <text x="160" y="255" class="d-txt" fill="#ef4444">Drain (D)</text>
            <text x="210" y="255" class="d-txt" fill="#38bdf8">Source (S)</text>
          </svg>
        `,
        annotations: [
          { text: 'Metal heatsink tab dissipates high wattages easily', x: '10%', y: '15%' },
          { text: 'Switches 30+ Amps of continuous current effortlessly', x: '55%', y: '50%' }
        ]
      }
    ]
  },

  capacitor: {
    id: 'capacitor',
    name: 'Capacitors (Energy Buffers)',
    shortName: 'Capacitors',
    level: 'LEVEL 06',
    reward: 'Charge Keeper Badge',
    xp: 130,
    steps: [
      {
        stepNum: 1,
        altitude: 'Ground Level • Introduction',
        title: 'The Circuit’s Shock Absorber',
        subtitle: 'Step 1: What is a Capacitor?',
        desc: 'A capacitor is like a tiny, lightning-fast rechargeable battery and water reservoir combined! It stores electrical energy in an electrostatic field between two conductive metal plates separated by an insulator (dielectric). While chemical batteries take hours to charge and discharge, capacitors can release their stored charge in microseconds.',
        takeaways: [
          'Capacitance is measured in Farads (F) (commonly microfarads µF or picofarads pF)',
          'Blocks steady DC current while letting changing AC signals and noise pass through',
          'Two main families: Ceramic (non-polarized) and Electrolytic (polarized)',
          'Essential for smoothing out electrical ripples in IoT power supplies'
        ],
        tip: 'Electrolytic capacitors have strict polarity! Connecting one backwards can cause pressure buildup and make the can pop open.',
        doodleLabel: 'Parallel Plate Field Doodle',
        svgDoodle: `
          <svg viewBox="0 0 360 280" class="doodle-svg" xmlns="http://www.w3.org/2000/svg">
            <style>
              .d-plate { fill: #0f2b48; stroke: #38bdf8; stroke-width: 4; rx: 4; }
              .d-field { stroke: #ffd978; stroke-width: 2.5; stroke-dasharray: 4 4; fill: none; }
              .d-txt { font-family: 'Press Start 2P', monospace; font-size: 9px; fill: #f0fdfa; }
            </style>
            <!-- Left plate (+) -->
            <rect x="90" y="60" width="22" height="150" class="d-plate" stroke="#ef4444"/>
            <text x="92" y="50" class="d-txt" fill="#ef4444">++++</text>

            <!-- Right plate (-) -->
            <rect x="190" y="60" width="22" height="150" class="d-plate" stroke="#38bdf8"/>
            <text x="192" y="50" class="d-txt" fill="#38bdf8">----</text>

            <!-- Insulating dielectric gap & electrostatic field -->
            <rect x="114" y="60" width="74" height="150" fill="#1e293b" opacity="0.4"/>
            <line x1="114" y1="90" x2="188" y2="90" class="d-field"/>
            <line x1="114" y1="120" x2="188" y2="120" class="d-field"/>
            <line x1="114" y1="150" x2="188" y2="150" class="d-field"/>
            <line x1="114" y1="180" x2="188" y2="180" class="d-field"/>

            <text x="118" y="140" class="d-txt" fill="#ffd978">E-Field</text>

            <text x="35" y="245" class="d-txt" fill="#4ade80">Stores pure electric field energy without chemical reactions!</text>
          </svg>
        `,
        annotations: [
          { text: 'Opposite electrical charges collect on parallel plates', x: '10%', y: '15%' },
          { text: 'Insulating dielectric barrier prevents electrons jumping across', x: '55%', y: '35%' }
        ]
      },
      {
        stepNum: 2,
        altitude: 'Lower Stratosphere • Ceramic vs Electrolytic',
        title: 'Two Titans: Ceramic & Electrolytic',
        subtitle: 'Step 2: Choosing the Right Capacitor',
        desc: 'In your parts bin you will mostly encounter two physical types: tiny yellowish round Ceramic discs (often 0.1µF / 100nF) and cylindrical aluminum Electrolytic cans (10µF to 1000µF+). Each serves a distinct superpower in circuit design.',
        takeaways: [
          'Ceramic Disc: Non-polarized, tiny capacitance (10pF to 100nF), eats high-frequency digital noise',
          'Electrolytic Can: High capacitance (1µF to 4700µF), smooths large power supply dips',
          'Voltage Rating: Always pick a capacitor rated for at least 1.5× to 2× your circuit voltage',
          'Negative stripe on can indicates the negative cathode leg'
        ],
        tip: 'Look for the three-digit code on ceramic capacitors: 104 means 10 followed by 4 zeros in picofarads = 100,000 pF = 0.1 µF (the ultimate decoupling superhero)!',
        doodleLabel: 'Ceramic vs Electrolytic Visual',
        svgDoodle: `
          <svg viewBox="0 0 360 280" class="doodle-svg" xmlns="http://www.w3.org/2000/svg">
            <style>
              .d-txt { font-family: 'Press Start 2P', monospace; font-size: 9px; fill: #f0fdfa; }
            </style>
            <!-- Ceramic disc -->
            <circle cx="85" cy="110" r="40" fill="#fef3c7" stroke="#b45309" stroke-width="3"/>
            <text x="68" y="115" font-family="'Press Start 2P', monospace" font-size="9" fill="#78350f">104</text>
            <line x1="70" y1="150" x2="70" y2="220" stroke="#cbd5e1" stroke-width="4"/>
            <line x1="100" y1="150" x2="100" y2="220" stroke="#cbd5e1" stroke-width="4"/>
            <text x="35" y="245" class="d-txt" fill="#ffd978">Ceramic (0.1µF)</text>

            <!-- Electrolytic can -->
            <rect x="200" y="60" width="80" height="110" rx="8" fill="#1e3a8a" stroke="#60a5fa" stroke-width="3.5"/>
            <!-- negative stripe -->
            <rect x="255" y="60" width="25" height="110" rx="0 8 8 0" fill="#94a3b8"/>
            <text x="260" y="90" font-weight="bold" fill="#0f172a">-</text>
            <text x="260" y="120" font-weight="bold" fill="#0f172a">-</text>
            <text x="260" y="150" font-weight="bold" fill="#0f172a">-</text>
            
            <text x="210" y="115" font-family="'Press Start 2P', monospace" font-size="8" fill="#fff">100µF</text>
            <line x1="220" y1="170" x2="220" y2="230" stroke="#cbd5e1" stroke-width="4"/>
            <line x1="250" y1="170" x2="250" y2="215" stroke="#cbd5e1" stroke-width="4"/>
            <text x="180" y="245" class="d-txt" fill="#60a5fa">Electrolytic (Polarized!)</text>
          </svg>
        `,
        annotations: [
          { text: 'Ceramic discs are non-polarized and filter MHz noise', x: '10%', y: '15%' },
          { text: 'Electrolytic stripe marks the negative lead', x: '55%', y: '15%' }
        ]
      },
      {
        stepNum: 3,
        altitude: 'Mid Cloud Realm • Decoupling Power',
        title: 'Power Smoothing & Decoupling Magic',
        subtitle: 'Step 3: Keeping The ESP32 From Crashing',
        desc: 'When an ESP32 turns on its Wi-Fi radio, it suddenly demands a massive surge of current (up to 300mA in a few nanoseconds!). If wire resistance causes voltage to dip below 2.7V for even a microsecond, the microcontroller resets in a "Brownout Crash". A Decoupling Capacitor right next to the chip provides the instant charge reservoir.',
        takeaways: [
          'Placed in parallel directly between VCC (3.3V) and GND (0V)',
          'Keep capacitor traces as physically close to the chip power pins as possible',
          'Acts as a local reservoir delivering instantaneous current surges',
          'Eliminates mysterious random microcontroller reboots during Wi-Fi transmission'
        ],
        tip: 'If your ESP32 reboots continuously with a "Brownout detector was triggered" console error, add a 10µF to 100µF capacitor directly across its 3.3V and GND pins!',
        doodleLabel: 'Brownout Savior Schematic',
        svgDoodle: `
          <svg viewBox="0 0 360 280" class="doodle-svg" xmlns="http://www.w3.org/2000/svg">
            <style>
              .d-line { stroke: #19e7bd; stroke-width: 3.5; fill: none; }
              .d-txt { font-family: 'Press Start 2P', monospace; font-size: 9px; fill: #f0fdfa; }
            </style>
            <!-- 3.3V Rail -->
            <line x1="30" y1="60" x2="330" y2="60" stroke="#ef4444" stroke-width="4"/>
            <text x="40" y="45" class="d-txt" fill="#ef4444">+3.3V Power Line</text>

            <!-- Ground Rail -->
            <line x1="30" y1="200" x2="330" y2="200" stroke="#3b82f6" stroke-width="4"/>
            <text x="40" y="225" class="d-txt" fill="#38bdf8">GND Return Line</text>

            <!-- Decoupling cap bridging rails -->
            <rect x="110" y="100" width="30" height="60" rx="4" fill="#0f2b48" stroke="#ffd978" stroke-width="3"/>
            <line x1="125" y1="60" x2="125" y2="100" class="d-line"/>
            <line x1="125" y1="160" x2="125" y2="200" class="d-line"/>
            <text x="80" y="135" class="d-txt" fill="#ffd978">10µF Cap</text>

            <!-- ESP32 chip load -->
            <rect x="210" y="80" width="100" height="100" rx="6" fill="#0f172a" stroke="#19e7bd" stroke-width="3"/>
            <line x1="260" y1="60" x2="260" y2="80" class="d-line"/>
            <line x1="260" y1="180" x2="260" y2="200" class="d-line"/>
            <text x="225" y="135" font-family="'Press Start 2P', monospace" font-size="9" fill="#19e7bd">ESP32</text>
          </svg>
        `,
        annotations: [
          { text: 'Capacitor delivers instant current during Wi-Fi packet bursts', x: '5%', y: '68%' }
        ]
      },
      {
        stepNum: 4,
        altitude: 'High Nimbus • RC Timing Circuits',
        title: 'RC Timing Circuits: Clockwork Physics',
        subtitle: 'Step 4: Resistance + Capacitance = Time Delay',
        desc: 'When you charge a capacitor through a resistor, it does not fill up instantly. It charges along a smooth exponential curve! The time it takes to charge to 63.2% of full voltage is called the RC Time Constant (τ = R × C). This predictable physics principle is how analog timers, oscillators, and delay circuits operate.',
        takeaways: [
          'Time Constant Tau formula: τ = R × C (Resistance in Ohms × Capacitance in Farads)',
          '100kΩ resistor + 10µF capacitor = 1.0 second time constant!',
          'Reaches 99.3% full charge after 5 time constants (5τ)',
          'Heart of the iconic 555 Timer IC and hardware button debounce filters'
        ],
        tip: 'Use a simple 10kΩ + 0.1µF RC filter on a mechanical pushbutton to filter out button switch bounce in pure hardware!',
        doodleLabel: 'RC Charge Curve Doodle',
        svgDoodle: `
          <svg viewBox="0 0 360 280" class="doodle-svg" xmlns="http://www.w3.org/2000/svg">
            <style>
              .d-axis { stroke: #64748b; stroke-width: 3; }
              .d-curve { stroke: #19e7bd; stroke-width: 4; fill: none; }
              .d-txt { font-family: 'Press Start 2P', monospace; font-size: 9px; fill: #f0fdfa; }
            </style>
            <!-- Graph axes -->
            <line x1="60" y1="210" x2="310" y2="210" class="d-axis"/>
            <line x1="60" y1="210" x2="60" y2="40" class="d-axis"/>
            <text x="315" y="215" class="d-txt">Time (t)</text>
            <text x="35" y="35" class="d-txt">Voltage</text>

            <!-- Exponential charging curve -->
            <path d="M 60 210 Q 120 70 300 60" class="d-curve"/>

            <!-- 63% marker -->
            <line x1="60" y1="115" x2="160" y2="115" stroke="#ffd978" stroke-width="2.5" stroke-dasharray="4 4"/>
            <line x1="160" y1="115" x2="160" y2="210" stroke="#ffd978" stroke-width="2.5" stroke-dasharray="4 4"/>
            <text x="70" y="110" class="d-txt" fill="#ffd978">63.2% Vmax</text>
            <text x="145" y="235" class="d-txt" fill="#ffd978">1 τ = R × C</text>
          </svg>
        `,
        annotations: [
          { text: 'Charge curve follows predictable exponential physics', x: '10%', y: '15%' }
        ]
      },
      {
        stepNum: 5,
        altitude: 'Exosphere • Master Level',
        title: 'Supercapacitors: The Battery Killers',
        subtitle: 'Step 5: Next-Generation Green Energy Storage',
        desc: 'What happens when you increase capacitance from microfarads to whole Farads? You get a Supercapacitor! Rated from 1 Farad to thousands of Farads, supercapacitors bridge the gap between capacitors and batteries. They can charge in seconds, survive over 1,000,000 charge cycles, and power IoT sensors from solar harvesting.',
        takeaways: [
          'Ultra-high energy density using activated carbon electrodes',
          'Zero chemical degradation: Lasts 15+ years without battery wear',
          'Safe and eco-friendly: No lithium fire hazard or toxic battery disposal',
          'Powers solar-harvesting IoT nodes that run forever without battery replacement'
        ],
        tip: 'Pair a small solar cell with a 5.5V 1.0F supercapacitor to build a self-powered outdoor weather sensor that never needs a battery replacement!',
        doodleLabel: 'Supercapacitor Solar IoT Node',
        svgDoodle: `
          <svg viewBox="0 0 360 280" class="doodle-svg" xmlns="http://www.w3.org/2000/svg">
            <style>
              .d-txt { font-family: 'Press Start 2P', monospace; font-size: 9px; fill: #f0fdfa; }
            </style>
            <!-- Solar panel -->
            <rect x="25" y="70" width="85" height="90" rx="6" fill="#0f2b48" stroke="#38bdf8" stroke-width="3"/>
            <line x1="25" y1="115" x2="110" y2="115" stroke="#38bdf8" stroke-width="2"/>
            <line x1="67" y1="70" x2="67" y2="160" stroke="#38bdf8" stroke-width="2"/>
            <text x="30" y="55" class="d-txt" fill="#ffd978">Solar Cell ☀️</text>

            <!-- Supercapacitor coin -->
            <circle cx="175" cy="115" r="38" fill="#14532d" stroke="#22c55e" stroke-width="3.5"/>
            <text x="150" y="115" font-family="'Press Start 2P', monospace" font-size="8" fill="#fff">5.5V</text>
            <text x="153" y="130" font-family="'Press Start 2P', monospace" font-size="8" fill="#ffd978">1.0F</text>
            <text x="135" y="55" class="d-txt" fill="#4ade80">SuperCap ⚡</text>

            <!-- Wireless sensor node -->
            <rect x="245" y="75" width="90" height="80" rx="8" fill="#0f172a" stroke="#19e7bd" stroke-width="3"/>
            <text x="255" y="110" font-family="'Press Start 2P', monospace" font-size="8" fill="#19e7bd">ESP32</text>
            <text x="255" y="130" class="d-txt" fill="#e2e8f0">LoRa Node</text>
            
            <text x="45" y="215" class="d-txt" fill="#ffd978">1,000,000+ Charge Cycles • Zero Battery Maintenance!</text>
          </svg>
        `,
        annotations: [
          { text: 'Stores sunlight energy during the day', x: '5%', y: '72%' },
          { text: 'Powers wireless sensor transmissions at night', x: '55%', y: '72%' }
        ]
      }
    ]
  },

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
        altitude: "Ground Level • Introduction",
        title: "Meet The Echolocation Eyes",
        subtitle: "Step 1: What is the HC-SR04 Ultrasonic Sensor?",
        desc: "Just like bats and submarines navigate through total darkness using acoustic pulses, the HC-SR04 sensor uses sound waves to see! It transmits high-frequency 40,000 Hz ultrasound bursts and times how many microseconds elapse before the echo bounces back from an obstacle.",
        takeaways: [
          "Emits 40kHz ultrasound bursts completely silent to human ears",
          "Non-contact distance measurement from 2cm to 400cm with 3mm precision",
          "Narrow measuring angle of 15 degrees for focused directional obstacle sensing",
          "Dual transducers: Silver cylinder 'T' transmits, cylinder 'R' receives"
],
        tip: "Ultrasonic waves reflect best off hard, flat surfaces. Soft fabrics or plush toys absorb sonic waves, while angled walls can deflect the echo away.",
        doodleLabel: "Anatomy of the Ultrasonic Eyes",
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
  <text x="95" y="262" class="d-txt" fill="#ffc960">VCC TRIG ECHO GND</text>
</svg>
        `,
        annotations: [
          {
                    "text": "Transmitter emits 40kHz ultrasound blast",
                    "x": "4%",
                    "y": "30%"
          },
          {
                    "text": "Receiver catches reflected sonic echo",
                    "x": "62%",
                    "y": "30%"
          }
]
      },
      {
        stepNum: 2,
        altitude: "Low Atmosphere • Pinout & Schematics",
        title: "Trigger & Echo Pinout",
        subtitle: "Step 2: Pinout & 3.3V Logic Protection",
        desc: "The module has four pins: VCC (5V), TRIG (Digital Input), ECHO (Digital Output), and GND. Triggering requires a 10-microsecond HIGH pulse. The ECHO pin outputs a 5V signal pulse whose width equals the travel time.",
        takeaways: [
          "VCC requires 5V power supply for optimal acoustic transducer power",
          "TRIG pin needs a 10\u00b5s HIGH pulse to initiate ultrasound burst",
          "ECHO pin outputs a 5V logic pulse proportional to distance",
          "Use a voltage divider (1k\u03a9 + 2k\u03a9) to protect 3.3V ESP32 inputs"
],
        tip: "Connecting the HC-SR04 5V Echo pin directly to a 3.3V microcontroller like ESP32 can degrade the GPIO pin. Always step it down with a resistor divider!",
        doodleLabel: "3.3V Voltage Divider Protection",
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
          {
                    "text": "1k\u03a9 + 2k\u03a9 divides 5.0V down to 3.33V",
                    "x": "35%",
                    "y": "15%"
          },
          {
                    "text": "Protects delicate 3.3V microcontroller silicon",
                    "x": "40%",
                    "y": "85%"
          }
]
      },
      {
        stepNum: 3,
        altitude: "Mid Atmosphere • Physics & Math",
        title: "Speed of Sound Equation",
        subtitle: "Step 3: Calculating centimeters from microsecond timing",
        desc: "Sound travels through room temperature air at approximately 343 meters per second (0.0343 cm per microsecond). Because the wave travels out to the obstacle and bounces back, divide the total round-trip time by 2.",
        takeaways: [
          "Sound velocity: 343 m/s = 0.0343 cm/\u00b5s = 29.1 \u00b5s per cm",
          "Formula: Distance (cm) = (Echo Time in \u00b5s \u00d7 0.0343) / 2",
          "Alternative shortcut: Distance (cm) = Echo Time in \u00b5s / 58.2",
          "Temperature variations create minor +/-2% velocity changes"
],
        tip: "If no echo is detected, the sensor times out at ~38ms. Cap the readings in software at 400cm to filter out timeout noise.",
        doodleLabel: "Distance Calculation Formula",
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
          {
                    "text": "Forward transit + return echo",
                    "x": "10%",
                    "y": "78%"
          },
          {
                    "text": "Millimeter level resolution",
                    "x": "60%",
                    "y": "78%"
          }
]
      },
      {
        stepNum: 4,
        altitude: "High Stratosphere • Code & Logic",
        title: "Microcontroller Driver Code",
        subtitle: "Step 4: Non-blocking ultrasonic measurement routine",
        desc: "In C++, pulseIn() measures how long the ECHO pin stays HIGH. We send a 10µs pulse on TRIG, wait for the echo pulse with a timeout, and calculate distance.",
        takeaways: [
          "digitalWrite(TRIG_PIN, HIGH); delayMicroseconds(10); triggers sonar",
          "long t = pulseIn(ECHO_PIN, HIGH, 30000); measures microsecond duration",
          "float distanceCm = (t * 0.0343) / 2.0;",
          "A 30ms timeout prevents loop freeze if no echo returns"
],
        tip: "Taking the median of 3 consecutive readings filters out spurious acoustic spikes and ensures rock-solid readings.",
        doodleLabel: "C++ Distance Function",
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
          {
                    "text": "10\u00b5s pulse triggers ultrasound burst",
                    "x": "10%",
                    "y": "50%"
          },
          {
                    "text": "30,000\u00b5s timeout limits distance range",
                    "x": "20%",
                    "y": "88%"
          }
]
      },
      {
        stepNum: 5,
        altitude: "Ionosphere • Cloud IoT Lab Quest",
        title: "Smart Radar & Autonomous Rover",
        subtitle: "Step 5: Real-World IoT Radar & Vehicle Navigation",
        desc: "Mount the ultrasonic sensor onto a servo motor to build a 180-degree sweeping radar scanner, or position it above a garage bay to publish parking vacancy telemetry over MQTT to Home Assistant.",
        takeaways: [
          "Servo + Ultrasonic = 180\u00b0 sweeping radar map in WebGL",
          "Smart city parking occupancy broadcast over Wi-Fi / MQTT",
          "Autonomous collision avoidance for twin-motor robot rovers",
          "Non-contact liquid depth measurement in water tanks"
],
        tip: "For water tanks, mount the sensor at the top pointing straight down. Water provides a pristine acoustic reflective surface!",
        doodleLabel: "180° IoT Radar Scanner",
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
          {
                    "text": "Sweeping ultrasound beam maps walls",
                    "x": "15%",
                    "y": "20%"
          },
          {
                    "text": "Real-time telemetry sent over Wi-Fi",
                    "x": "20%",
                    "y": "90%"
          }
]
      }
    ]
  },

  pir: {
    id: 'pir',
    name: 'PIR Motion Sensor',
    shortName: 'PIR Sensor',
    level: 'LEVEL 08',
    reward: 'Ghost Tracker Badge',
    xp: 145,
    steps: [
      {
        stepNum: 1,
        altitude: "Ground Level • Introduction",
        title: "Infrared Thermal Eyes",
        subtitle: "Step 1: What is a Passive Infrared (PIR) Sensor?",
        desc: "Every living human and warm-blooded animal continuously radiates invisible infrared heat energy at roughly 9 to 10 micrometers wavelength. Passive Infrared (PIR) sensors don't emit any radiation — they passively observe temperature differentials as warm bodies walk across optical zones.",
        takeaways: [
          "Passive detection: Emits zero rays, only absorbs ambient thermal radiation",
          "Tuned to human body heat spectrum (~9.4 \u00b5m wavelength)",
          "Dual pyroelectric sensing crystals cancel out uniform room temperature changes",
          "Wide 110-degree cone of detection reaching up to 7 meters (23 feet)"
],
        tip: "Keep PIR sensors away from direct sunlight, air conditioner vents, and radiators! Sudden convective heat drafts can trigger false alarms.",
        doodleLabel: "Thermal Radiation Detection",
        svgDoodle: `
<svg viewBox="0 0 360 280" class="doodle-svg" xmlns="http://www.w3.org/2000/svg">
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
</svg>
        `,
        annotations: [
          {
                    "text": "Fresnel dome splits room into optical sectors",
                    "x": "20%",
                    "y": "25%"
          },
          {
                    "text": "Dual internal sensors detect differential movement",
                    "x": "35%",
                    "y": "80%"
          }
]
      },
      {
        stepNum: 2,
        altitude: "Low Atmosphere • Optics & The Dome",
        title: "The Fresnel Lens Secret",
        subtitle: "Step 2: How a Plastic Dome Creates Motion Sectors",
        desc: "Without the white plastic dome, a PIR sensor would just see a blurry average room temperature. The Fresnel lens is divided into dozens of tiny curved prism facets that focus infrared rays into alternating invisible detection beams. As a person walks across, they move in and out of beams, generating differential voltage pulses.",
        takeaways: [
          "Faceted plastic dome acts as multiple miniature condensing lenses",
          "Converts continuous movement into alternating ON/OFF thermal pulses",
          "Two pyroelectric windows wired in reverse-series cancel out ambient warming",
          "Differential voltage spike trips the BISS0001 comparator IC"
],
        tip: "Walking directly straight toward a PIR sensor creates less differential change than walking perpendicularly across its field of view!",
        doodleLabel: "Fresnel Optical Slicing",
        svgDoodle: `
<svg viewBox="0 0 360 280" class="doodle-svg" xmlns="http://www.w3.org/2000/svg">
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
</svg>
        `,
        annotations: [
          {
                    "text": "Moving between optical zones triggers voltage swing",
                    "x": "15%",
                    "y": "30%"
          },
          {
                    "text": "PIR Sensor Base at bottom",
                    "x": "40%",
                    "y": "85%"
          }
]
      },
      {
        stepNum: 3,
        altitude: "Mid Atmosphere • Tuning & Jumpers",
        title: "Trimpots & Retrigger Jumper",
        subtitle: "Step 3: Sensitivity, Time Delay & Mode Configuration",
        desc: "The back of the HC-SR501 features two orange potentiometers and a 3-pin mode jumper. One potentiometer tunes sensitivity (3m to 7m distance), while the other adjusts the output HIGH duration (from 3 seconds up to 5 minutes).",
        takeaways: [
          "Sensitivity Trimpot: Clockwise increases detection range up to 7m",
          "Time Delay Trimpot: Clockwise increases HIGH signal hold time (3s to 300s)",
          "Jumper 'L' (Single Trigger): Stays HIGH for set time, then drops LOW even if motion continues",
          "Jumper 'H' (Repeatable Trigger): Resets the delay timer with each movement, staying HIGH continuously"
],
        tip: "For IoT smart home motion sensors, set the jumper to 'H' (repeatable) and keep the time delay trimpot at minimum (~3s). Let your microcontroller code handle timeouts!",
        doodleLabel: "HC-SR501 Back Controls",
        svgDoodle: `
<svg viewBox="0 0 360 280" class="doodle-svg" xmlns="http://www.w3.org/2000/svg">
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
</svg>
        `,
        annotations: [
          {
                    "text": "3.3V digital OUT is directly compatible with ESP32",
                    "x": "15%",
                    "y": "82%"
          },
          {
                    "text": "Mode Jumper (H for repeatable)",
                    "x": "65%",
                    "y": "40%"
          }
]
      },
      {
        stepNum: 4,
        altitude: "High Stratosphere • Hardware Interrupts",
        title: "Low-Power Interrupt Driving",
        subtitle: "Step 4: Deep sleep wake-up on motion",
        desc: "Instead of polling the PIR sensor inside a CPU-burning loop(), configure a hardware interrupt! The ESP32 can sleep in micro-power mode drawing microamps, waking up in milliseconds when the PIR OUT pin goes HIGH.",
        takeaways: [
          "pinMode(PIR_PIN, INPUT); attaches digital sensor line",
          "attachInterrupt(digitalPinToInterrupt(PIR_PIN), onMotion, RISING);",
          "ESP32 ext0 / ext1 wake-up triggers allow sub-15\u00b5A battery life",
          "60-second warm-up stabilization period required on first power-up"
],
        tip: "Always allow a 30 to 60 second warm-up window when PIR sensors boot up. During this initial time, the sensor adapts to ambient infrared background levels.",
        doodleLabel: "Interrupt Flow Diagram",
        svgDoodle: `
<svg viewBox="0 0 360 280" class="doodle-svg" xmlns="http://www.w3.org/2000/svg">
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
</svg>
        `,
        annotations: [
          {
                    "text": "CPU sleeps until physical interrupt trips",
                    "x": "10%",
                    "y": "30%"
          },
          {
                    "text": "Instantly wakes up to broadcast Wi-Fi alert",
                    "x": "20%",
                    "y": "75%"
          }
]
      },
      {
        stepNum: 5,
        altitude: "Ionosphere • Cloud IoT Lab Quest",
        title: "Smart Home Automation Node",
        subtitle: "Step 5: Automated lighting, security alarms & occupancy tracking",
        desc: "Deploy PIR sensor nodes across every room to automate smart lighting, detect intruders when away, and publish occupancy metrics over MQTT to Home Assistant for room climate optimization.",
        takeaways: [
          "Hands-free automatic hallway and stairway lighting",
          "Real-time intruder push alerts sent to your phone via Telegram or Pushover",
          "HVAC power saving: Automatically shut off AC in vacant meeting rooms",
          "Multi-sensor fusion: Combine PIR with mmWave radar for micro-motion detection"
],
        tip: "PIR detects motion, not presence! A person sitting completely still reading a book will stop triggering PIR. Combine with an mmWave 24GHz radar sensor for true room occupancy.",
        doodleLabel: "IoT Security & Automation Node",
        svgDoodle: `
<svg viewBox="0 0 360 280" class="doodle-svg" xmlns="http://www.w3.org/2000/svg">
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
</svg>
        `,
        annotations: [
          {
                    "text": "Instant PIR state change",
                    "x": "10%",
                    "y": "25%"
          },
          {
                    "text": "Home Assistant triggers scene",
                    "x": "50%",
                    "y": "80%"
          }
]
      }
    ]
  },

  dht: {
    id: 'dht',
    name: 'DHT Temperature & Humidity Sensor',
    shortName: 'DHT Sensor',
    level: 'LEVEL 09',
    reward: 'Climate Warden Badge',
    xp: 150,
    steps: [
      {
        stepNum: 1,
        altitude: "Ground Level • Introduction",
        title: "Dual Weather Station",
        subtitle: "Step 1: What is the DHT11 / DHT22 Sensor?",
        desc: "The DHT family packs two essential environmental sensors inside a compact vented blue or white plastic shell: a capacitive or resistive humidity sensor, plus an NTC thermistor for temperature. An onboard 8-bit chip reads these analog elements and translates them into digital data.",
        takeaways: [
          "DHT11 (Blue): 20-80% RH humidity (5% accuracy), 0-50\u00b0C temp (+/-2\u00b0C)",
          "DHT22 (White/AM2302): 0-100% RH (2% accuracy), -40 to 80\u00b0C temp (+/-0.5\u00b0C)",
          "Integrated 8-bit microcontroller performs onboard calibration",
          "Single-bus digital output requires only 1 microcontroller GPIO pin"
],
        tip: "DHT22 is vastly more accurate than DHT11 and reads sub-zero temperatures, but costs slightly more. For weather stations, DHT22 is worth every penny!",
        doodleLabel: "Anatomy of the DHT Sensor",
        svgDoodle: `
<svg viewBox="0 0 360 280" class="doodle-svg" xmlns="http://www.w3.org/2000/svg">
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
</svg>
        `,
        annotations: [
          {
                    "text": "Air vents let atmospheric moisture reach sensor substrate",
                    "x": "10%",
                    "y": "25%"
          },
          {
                    "text": "4 pins on bare sensor (Pin 3 is unused NC)",
                    "x": "20%",
                    "y": "85%"
          }
]
      },
      {
        stepNum: 2,
        altitude: "Low Atmosphere • 1-Wire Protocol",
        title: "Single-Bus Digital Protocol",
        subtitle: "Step 2: Pull-up resistor & handshaking handshake",
        desc: "DHT sensors communicate over an asynchronous single data wire using a proprietary protocol. The microcontroller initiates communication by pulling the DATA line LOW for at least 18 milliseconds, releasing it, and waiting for the DHT sensor to reply with an 80µs LOW / 80µs HIGH handshake.",
        takeaways: [
          "Requires a 4.7k\u03a9 to 10k\u03a9 pull-up resistor between VCC and DATA line",
          "Host starts transmission with 18ms LOW pulse followed by 20-40\u00b5s HIGH",
          "Sensor responds with 80\u00b5s LOW then 80\u00b5s HIGH readiness preamble",
          "All communication occurs on a single bidirectional digital wire"
],
        tip: "Many breakout boards include the pull-up resistor built-in! If your DHT has 3 pins instead of 4, the pull-up is already mounted on the PCB.",
        doodleLabel: "Handshake Timing Waveform",
        svgDoodle: `
<svg viewBox="0 0 360 280" class="doodle-svg" xmlns="http://www.w3.org/2000/svg">
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
</svg>
        `,
        annotations: [
          {
                    "text": "Host wakes sensor up with 18ms pulse",
                    "x": "15%",
                    "y": "40%"
          },
          {
                    "text": "Sensor confirms readiness to send data",
                    "x": "55%",
                    "y": "20%"
          }
]
      },
      {
        stepNum: 3,
        altitude: "Mid Atmosphere • Data Packet",
        title: "The 40-Bit Signal Packet",
        subtitle: "Step 3: Decoding Humidity, Temperature & Parity Checksum",
        desc: "After the handshake, the sensor transmits 40 individual data bits (5 bytes total). Each bit starts with a 50µs LOW pulse. If the subsequent HIGH pulse lasts 26-28µs, it is a binary '0'. If the HIGH pulse lasts 70µs, it is a binary '1'.",
        takeaways: [
          "Byte 1: Humidity integer data",
          "Byte 2: Humidity decimal data",
          "Byte 3: Temperature integer data",
          "Byte 4: Temperature decimal data",
          "Byte 5: Parity checksum (Byte 1 + Byte 2 + Byte 3 + Byte 4 = Checksum)"
],
        tip: "Always verify the checksum! If (B1 + B2 + B3 + B4) != Checksum, discard the reading as transmission noise.",
        doodleLabel: "40-Bit Frame Architecture",
        svgDoodle: `
<svg viewBox="0 0 360 280" class="doodle-svg" xmlns="http://www.w3.org/2000/svg">
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
</svg>
        `,
        annotations: [
          {
                    "text": "16 bits total for Humidity",
                    "x": "15%",
                    "y": "20%"
          },
          {
                    "text": "Checksum ensures zero data corruption",
                    "x": "25%",
                    "y": "75%"
          }
]
      },
      {
        stepNum: 4,
        altitude: "High Stratosphere • Code & Reading Rates",
        title: "Sampling Rates & Driver Code",
        subtitle: "Step 4: Non-blocking reading with DHT.h library",
        desc: "Because the capacitive humidity element takes time to chemically re-equilibrate with surrounding moisture, the DHT11 must not be polled faster than once every 1 second (0.5 Hz for DHT22). Polling too fast returns stale cache data or causes bus timeouts.",
        takeaways: [
          "#include <DHT.h> simplifies communication completely",
          "DHT dht(DHTPIN, DHT22); initializes object instance",
          "float h = dht.readHumidity(); float t = dht.readTemperature();",
          "if (isnan(h) || isnan(t)) checks for failed wire connection"
],
        tip: "Use millis() timers instead of delay(2000) so your microcontroller can handle buttons, Wi-Fi requests, and displays without freezing while waiting to poll the sensor!",
        doodleLabel: "Arduino C++ DHT Code",
        svgDoodle: `
<svg viewBox="0 0 360 280" class="doodle-svg" xmlns="http://www.w3.org/2000/svg">
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
  <text x="65" y="210" class="d-code">Serial.<tspan class="d-fn">printf</tspan>(<tspan fill="#34d399">"%.1f C, %.1f %%\n"</tspan>, t, h);</text>
  <text x="50" y="230" class="d-code">}</text>
  <text x="35" y="248" class="d-code">}</text>
</svg>
        `,
        annotations: [
          {
                    "text": "Simple 2-line initialization",
                    "x": "15%",
                    "y": "25%"
          },
          {
                    "text": "Built-in isnan() error handling",
                    "x": "25%",
                    "y": "70%"
          }
]
      },
      {
        stepNum: 5,
        altitude: "Ionosphere • Cloud IoT Lab Quest",
        title: "Smart Greenhouse & Cloud Dashboard",
        subtitle: "Step 5: Automated misting, ventilation & climate tracking",
        desc: "Connect your DHT sensor node to an MQTT server, InfluxDB, and Grafana dashboard. If humidity drops below 40%, trigger an automated ultrasonic mister relay; if temperature exceeds 30°C, spin up exhaust fans.",
        takeaways: [
          "Live temperature/humidity telemetry charts in Grafana",
          "Automated greenhouse climate control via relay actuators",
          "Dew point calculation: Forecast condensation on plants",
          "Vapor Pressure Deficit (VPD) optimization for plant transpiration"
],
        tip: "Calculate Vapor Pressure Deficit (VPD) using temperature and relative humidity. VPD tells you exactly how easily plants can transpire and absorb nutrients!",
        doodleLabel: "IoT Greenhouse Climate Control",
        svgDoodle: `
<svg viewBox="0 0 360 280" class="doodle-svg" xmlns="http://www.w3.org/2000/svg">
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
</svg>
        `,
        annotations: [
          {
                    "text": "Real-time calculated VPD",
                    "x": "15%",
                    "y": "30%"
          },
          {
                    "text": "Automatic relay switching",
                    "x": "55%",
                    "y": "30%"
          }
]
      }
    ]
  },

  oled: {
    id: 'oled',
    name: '0.96" I2C OLED Display',
    shortName: 'OLED Display',
    level: 'LEVEL 10',
    reward: 'Pixel Wizard Badge',
    xp: 160,
    steps: [
      {
        stepNum: 1,
        altitude: "Ground Level • Introduction",
        title: "Self-Emitting Organic Pixels",
        subtitle: "Step 1: What is the SSD1306 OLED Display?",
        desc: "Unlike bulky LCD screens that require a fluorescent or LED backlight shining from behind, Organic Light Emitting Diodes (OLEDs) produce their own light pixel-by-pixel! With 128 columns and 64 rows, you get 8,192 individual crisp, self-illuminating pixels on a wafer-thin glass panel.",
        takeaways: [
          "128\u00d764 monochrome pixels with true infinite contrast ratio",
          "Zero backlight needed: Pure black pixels consume zero power",
          "Ultra-wide 160-degree viewing angle with zero color distortion",
          "Integrated SSD1306 driver chip with built-in charge pump for 3.3V/5V"
],
        tip: "Displaying a mostly black screen with minimalist white text consumes less than 10mA, making OLEDs perfect for battery-powered wearable IoT devices!",
        doodleLabel: "Anatomy of the 128x64 OLED Panel",
        svgDoodle: `
<svg viewBox="0 0 360 280" class="doodle-svg" xmlns="http://www.w3.org/2000/svg">
  <style>
    .d-bezel { fill: #090d16; stroke: #3b82f6; stroke-width: 3; rx: 8; }
    .d-screen { fill: #000000; stroke: #1e293b; stroke-width: 2; rx: 4; }
    .d-txt { font-family: 'Press Start 2P', monospace; font-size: 8px; fill: #f0fdfa; }
  </style>
  <rect x="40" y="30" width="280" height="200" class="d-bezel"/>
  <rect x="65" y="55" width="230" height="130" class="d-screen"/>
  <!-- Glowing OLED Pixels -->
  <text x="85" y="95" class="d-txt" fill="#38bdf8">IOT QUEST v2.0</text>
  <text x="85" y="125" class="d-txt" fill="#ffd978">IP: 192.168.1.42</text>
  <text x="85" y="155" class="d-txt" fill="#4ade80">TEMP: 24.8 C  [OK]</text>
  <!-- Top 4 I2C Pins -->
  <circle cx="130" cy="40" r="4" fill="#e2e8f0"/>
  <circle cx="160" cy="40" r="4" fill="#e2e8f0"/>
  <circle cx="190" cy="40" r="4" fill="#e2e8f0"/>
  <circle cx="220" cy="40" r="4" fill="#e2e8f0"/>
  <text x="110" y="25" class="d-txt" fill="#ffc960">GND VCC SCL SDA</text>
  <text x="60" y="255" class="d-txt" fill="#94a3b8">8,192 Self-Illuminating Organic Pixels</text>
</svg>
        `,
        annotations: [
          {
                    "text": "True pure black (unlit pixels draw 0 current)",
                    "x": "15%",
                    "y": "30%"
          },
          {
                    "text": "Only 4 header pins for power + I2C data",
                    "x": "30%",
                    "y": "10%"
          }
]
      },
      {
        stepNum: 2,
        altitude: "Low Atmosphere • The I2C Highway",
        title: "Two-Wire I2C Architecture",
        subtitle: "Step 2: Connecting via SDA and SCL data lines",
        desc: "Instead of needing 8 to 16 parallel data lines, this OLED communicates through Inter-Integrated Circuit (I2C) using just two lines: Serial Data (SDA) and Serial Clock (SCL). Up to 127 different devices can share these same two lines using unique 7-bit bus addresses.",
        takeaways: [
          "Default 7-bit I2C bus address: 0x3C (or 0x3D on some boards)",
          "Requires pull-up resistors (4.7k\u03a9) on both SDA and SCL lines",
          "Standard I2C speed: 100 kHz; Fast Mode: 400 kHz clock rate",
          "Shares the I2C bus seamlessly with temperature and pressure sensors"
],
        tip: "If your OLED fails to turn on, run an I2C scanner sketch to verify whether its address is 0x3C or 0x3D. Resoldering the back jumper selects between the two!",
        doodleLabel: "I2C Shared Bus Topology",
        svgDoodle: `
<svg viewBox="0 0 360 280" class="doodle-svg" xmlns="http://www.w3.org/2000/svg">
  <style>
    .d-box { fill: #0f172a; stroke: #38bdf8; stroke-width: 2.5; rx: 8; }
    .d-line { stroke: #38bdf8; stroke-width: 3; fill: none; }
    .d-txt { font-family: 'Press Start 2P', monospace; font-size: 8px; fill: #f0fdfa; }
  </style>
  <rect x="25" y="25" width="310" height="230" rx="10" fill="#02111d" stroke="#3b82f6" stroke-width="2.5"/>
  <rect x="40" y="50" width="90" height="90" class="d-box"/>
  <text x="55" y="90" class="d-txt" fill="#10b981">ESP32</text>
  <text x="50" y="115" class="d-txt" fill="#94a3b8">MASTER</text>
  <rect x="210" y="50" width="110" height="90" class="d-box"/>
  <text x="220" y="85" class="d-txt" fill="#38bdf8">SSD1306</text>
  <text x="220" y="105" class="d-txt" fill="#ffd978">Addr 0x3C</text>
  <text x="220" y="125" class="d-txt" fill="#94a3b8">SLAVE</text>
  <!-- Bus lines -->
  <line x1="130" y1="75" x2="210" y2="75" stroke="#38bdf8" stroke-width="3"/>
  <text x="145" y="70" class="d-txt" fill="#38bdf8">SDA</text>
  <line x1="130" y1="110" x2="210" y2="110" stroke="#f59e0b" stroke-width="3"/>
  <text x="145" y="105" class="d-txt" fill="#f59e0b">SCL</text>
  <text x="45" y="195" class="d-txt" fill="#ffd978">Both lines pulled HIGH to 3.3V</text>
  <text x="45" y="225" class="d-txt" fill="#94a3b8">Clock synchronizes byte transfers</text>
</svg>
        `,
        annotations: [
          {
                    "text": "Master generates clock pulses on SCL",
                    "x": "35%",
                    "y": "38%"
          },
          {
                    "text": "Bidirectional data flows on SDA",
                    "x": "35%",
                    "y": "22%"
          }
]
      },
      {
        stepNum: 3,
        altitude: "Mid Atmosphere • Framebuffer RAM",
        title: "Framebuffer & Memory Pages",
        subtitle: "Step 3: How 1,024 bytes in RAM control all pixels",
        desc: "To update the display smoothly without screen flicker, graphic libraries allocate a 1,024-byte 'framebuffer' array inside microcontroller RAM (128 columns × 64 rows ÷ 8 bits/byte = 1,024 bytes). You draw primitives into RAM, then push the buffer to the screen in one burst.",
        takeaways: [
          "Display memory is split into 8 horizontal pages, each 8 pixels tall",
          "1 byte represents a vertical strip of 8 pixels in a column",
          "Entire display requires only 1,024 bytes (1 KB) of microcontroller RAM",
          "display.display() flushes the buffer over I2C at 30-60 frames/sec"
],
        tip: "Always call display.clearDisplay() before drawing a new frame, and call display.display() only once at the end of loop() to prevent tearing and visible redraw lag!",
        doodleLabel: "Page Memory Architecture",
        svgDoodle: `
<svg viewBox="0 0 360 280" class="doodle-svg" xmlns="http://www.w3.org/2000/svg">
  <style>
    .d-page { fill: #0b1f3a; stroke: #38bdf8; stroke-width: 1.5; }
    .d-txt { font-family: 'Press Start 2P', monospace; font-size: 8px; fill: #f0fdfa; }
  </style>
  <rect x="25" y="25" width="310" height="230" rx="10" fill="#02111d" stroke="#3b82f6" stroke-width="2.5"/>
  <text x="40" y="55" class="d-txt" fill="#ffd978">GDDRAM: 8 PAGES x 128 COLUMNS</text>
  <rect x="40" y="70" width="270" height="16" class="d-page"/>
  <text x="50" y="82" class="d-txt" fill="#38bdf8">PAGE 0: Rows 0-7 (128 bytes)</text>
  <rect x="40" y="92" width="270" height="16" class="d-page"/>
  <text x="50" y="104" class="d-txt" fill="#94a3b8">PAGE 1: Rows 8-15</text>
  <rect x="40" y="114" width="270" height="16" class="d-page"/>
  <text x="50" y="126" class="d-txt" fill="#94a3b8">PAGE 2: Rows 16-23</text>
  <rect x="40" y="136" width="270" height="16" class="d-page"/>
  <text x="50" y="148" class="d-txt" fill="#94a3b8">PAGE 3: Rows 24-31</text>
  <rect x="40" y="158" width="270" height="16" class="d-page"/>
  <text x="50" y="170" class="d-txt" fill="#94a3b8">PAGES 4-7: Rows 32-63</text>
  <text x="45" y="215" class="d-txt" fill="#10b981">1 Byte in RAM = 8 Vertical Pixels</text>
  <text x="45" y="240" class="d-txt" fill="#ffd978">1,024 Bytes Total RAM Framebuffer</text>
</svg>
        `,
        annotations: [
          {
                    "text": "Organized into 8 vertical pages",
                    "x": "15%",
                    "y": "30%"
          },
          {
                    "text": "Transferred via high-speed burst over I2C",
                    "x": "20%",
                    "y": "80%"
          }
]
      },
      {
        stepNum: 4,
        altitude: "High Stratosphere • Adafruit Graphics Code",
        title: "Drawing Graphics with C++",
        subtitle: "Step 4: Lines, circles, bitmaps & pixel fonts",
        desc: "The Adafruit_SSD1306 and Adafruit_GFX libraries provide a rich graphic toolkit for C++. You can render geometric shapes, progress bars, custom bitmaps, and variable-sized bitmap text with simple one-line commands.",
        takeaways: [
          "Adafruit_SSD1306 display(128, 64, &Wire, -1); initializes screen",
          "display.drawPixel(x, y, SSD1306_WHITE); illuminates individual pixels",
          "display.drawRect(x, y, w, h, SSD1306_WHITE); draws outlines",
          "display.fillRect(x, y, w, h, SSD1306_WHITE); draws solid status bars"
],
        tip: "Convert custom 128x64 logos or icons to C array bitmaps using free tools like image2cpp. Render them instantly with display.drawBitmap()!",
        doodleLabel: "Adafruit GFX C++ Code",
        svgDoodle: `
<svg viewBox="0 0 360 280" class="doodle-svg" xmlns="http://www.w3.org/2000/svg">
  <style>
    .d-box { fill: #02111d; stroke: #38bdf8; stroke-width: 3; }
    .d-code { font-family: monospace; font-size: 10px; fill: #7dd3fc; }
    .d-kw { fill: #f43f5e; font-weight: bold; }
    .d-fn { fill: #38bdf8; }
  </style>
  <rect x="20" y="25" width="320" height="230" rx="10" class="d-box"/>
  <text x="35" y="55" class="d-code">display.<tspan class="d-fn">clearDisplay</tspan>();</text>
  <text x="35" y="80" class="d-code">display.<tspan class="d-fn">setTextSize</tspan>(1);</text>
  <text x="35" y="105" class="d-code">display.<tspan class="d-fn">setTextColor</tspan>(SSD1306_WHITE);</text>
  <text x="35" y="130" class="d-code">display.<tspan class="d-fn">setCursor</tspan>(0, 10);</text>
  <text x="35" y="155" class="d-code">display.<tspan class="d-fn">println</tspan>(<tspan fill="#34d399">"Hello IoT World!"</tspan>);</text>
  <text x="35" y="185" class="d-code">display.<tspan class="d-fn">drawRoundRect</tspan>(0, 30, 128, 12, 4, 1);</text>
  <text x="35" y="210" class="d-code">display.<tspan class="d-fn">fillRect</tspan>(2, 32, progress, 8, 1);</text>
  <text x="35" y="238" class="d-code">display.<tspan class="d-fn">display</tspan>(); <tspan fill="#ffd978">// Renders RAM buffer</tspan></text>
</svg>
        `,
        annotations: [
          {
                    "text": "High-level graphic primitives",
                    "x": "15%",
                    "y": "60%"
          },
          {
                    "text": "Pushes 1,024 bytes to screen glass",
                    "x": "35%",
                    "y": "85%"
          }
]
      },
      {
        stepNum: 5,
        altitude: "Ionosphere • Cloud IoT Lab Quest",
        title: "Mini IoT Game & System Telemetry HUD",
        subtitle: "Step 5: Retro games & real-time wireless monitors",
        desc: "Build a palm-sized retro gaming console running Flappy Bird or Chrome Dino, or assemble a portable Wi-Fi packet monitor displaying live access points, packet rates, and network telemetry in your pocket.",
        takeaways: [
          "Playable 60 FPS mini games with 2 tactile push buttons",
          "Real-time CPU load, RAM usage & IP address dashboard",
          "Crypto price tracker & live stock ticker over Wi-Fi APIs",
          "Audio visualizer with FFT spectrum analysis bars"
],
        tip: "To prevent OLED burn-in on devices that run 24/7, implement a screen saver or invert pixel colors every hour with display.invertDisplay(true)!",
        doodleLabel: "Retro Dino Runner on OLED",
        svgDoodle: `
<svg viewBox="0 0 360 280" class="doodle-svg" xmlns="http://www.w3.org/2000/svg">
  <style>
    .d-txt { font-family: 'Press Start 2P', monospace; font-size: 8px; fill: #f0fdfa; }
  </style>
  <rect x="25" y="25" width="310" height="230" rx="10" fill="#02111d" stroke="#3b82f6" stroke-width="3"/>
  <rect x="45" y="45" width="270" height="150" fill="#000" stroke="#1e293b" stroke-width="2" rx="4"/>
  <!-- Ground -->
  <line x1="55" y1="165" x2="305" y2="165" stroke="#38bdf8" stroke-width="2"/>
  <!-- Pixel Dino -->
  <rect x="90" y="130" width="20" height="25" fill="#38bdf8"/>
  <rect x="100" y="122" width="14" height="12" fill="#38bdf8"/>
  <rect x="106" y="125" width="3" height="3" fill="#000"/>
  <!-- Cactus -->
  <rect x="220" y="140" width="8" height="25" fill="#34d399"/>
  <rect x="215" y="145" width="5" height="10" fill="#34d399"/>
  <rect x="228" y="148" width="5" height="8" fill="#34d399"/>
  <text x="210" y="70" class="d-txt" fill="#ffd978">HI 04290</text>
  <text x="45" y="225" class="d-txt" fill="#38bdf8">Pocket IoT Console • 60 FPS Fluid Action</text>
</svg>
        `,
        annotations: [
          {
                    "text": "Frame rate up to 60 FPS via Fast I2C",
                    "x": "15%",
                    "y": "25%"
          },
          {
                    "text": "Zero noticeable ghosting or motion blur",
                    "x": "20%",
                    "y": "80%"
          }
]
      }
    ]
  },

  lcd: {
    id: 'lcd',
    name: '16x2 Character LCD',
    shortName: 'LCD Display',
    level: 'LEVEL 11',
    reward: 'Retro Terminal Badge',
    xp: 155,
    steps: [
      {
        stepNum: 1,
        altitude: "Ground Level • Introduction",
        title: "The Liquid Crystal Classic",
        subtitle: "Step 1: What is the 16x2 HD44780 LCD Display?",
        desc: "Before high-resolution graphical screens took over, the Hitachi HD44780 LCD controller defined electronics readouts for decades! It features 2 horizontal rows with 16 character cells per row (32 total characters), where each cell consists of a crisp 5×8 pixel alphanumeric grid.",
        takeaways: [
          "Displays 32 characters total: 2 rows of 16 characters each",
          "HD44780 industry-standard display controller protocol",
          "Built-in ROM contains 208 alphanumeric characters and symbols",
          "Bright LED backlight (classic green or cyber-cool blue)"
],
        tip: "A raw 16x2 LCD requires 16 pins! Always look for models with an attached black I2C backpack board that reduces wiring to just 4 wires.",
        doodleLabel: "16x2 Character Grid Anatomy",
        svgDoodle: `
<svg viewBox="0 0 360 280" class="doodle-svg" xmlns="http://www.w3.org/2000/svg">
  <style>
    .d-frame { fill: #064e3b; stroke: #10b981; stroke-width: 3.5; rx: 8; }
    .d-glass { fill: #022c22; stroke: #047857; stroke-width: 2.5; rx: 4; }
    .d-txt { font-family: 'Press Start 2P', monospace; font-size: 8px; fill: #f0fdfa; }
  </style>
  <rect x="35" y="40" width="290" height="180" class="d-frame"/>
  <rect x="55" y="65" width="250" height="110" class="d-glass"/>
  <text x="75" y="105" class="d-txt" fill="#34d399">HELLO IOT WORLD!</text>
  <text x="75" y="145" class="d-txt" fill="#ffd978">SYS TEMP: 24.5 C</text>
  <!-- 16 Header Pins -->
  <line x1="55" y1="50" x2="295" y2="50" stroke="#fef08a" stroke-width="4" stroke-dasharray="8 7"/>
  <text x="50" y="245" class="d-txt" fill="#a7f3d0">16 Columns x 2 Lines • 5x8 Matrix</text>
</svg>
        `,
        annotations: [
          {
                    "text": "16 character positions per row",
                    "x": "15%",
                    "y": "28%"
          },
          {
                    "text": "16 raw header pins along top edge",
                    "x": "20%",
                    "y": "10%"
          }
]
      },
      {
        stepNum: 2,
        altitude: "Low Atmosphere • The I2C Backpack",
        title: "The PCF8574 I2C Expander",
        subtitle: "Step 2: Shrinking 16 pins into 4 simple wires",
        desc: "Soldering a PCF8574 I2C expander chip to the back of the LCD saves 12 microcontroller pins! The PCF8574 receives I2C commands over SDA and SCL and drives the LCD's 4-bit data bus (D4-D7), Register Select (RS), and Enable (EN) lines automatically.",
        takeaways: [
          "Reduces wiring from 16 messy wires down to 4: VCC, GND, SDA, SCL",
          "Backpack I2C address is typically 0x27 (PCF8574T) or 0x3F (PCF8574AT)",
          "Blue potentiometer on backpack adjusts liquid crystal contrast",
          "Jumper clip connects or disconnects the LED backlight power"
],
        tip: "If the screen lights up blue or green but shows only solid white boxes with no letters, turn the blue contrast potentiometer on the back with a screwdriver until characters appear!",
        doodleLabel: "Backpack & Contrast Trimpot",
        svgDoodle: `
<svg viewBox="0 0 360 280" class="doodle-svg" xmlns="http://www.w3.org/2000/svg">
  <style>
    .d-box { fill: #0f172a; stroke: #38bdf8; stroke-width: 2.5; rx: 8; }
    .d-pot { fill: #2563eb; stroke: #e0f2fe; stroke-width: 2; }
    .d-txt { font-family: 'Press Start 2P', monospace; font-size: 8px; fill: #f0fdfa; }
  </style>
  <rect x="25" y="25" width="310" height="230" rx="10" fill="#02111d" stroke="#10b981" stroke-width="2.5"/>
  <rect x="50" y="50" width="260" height="130" fill="#1e293b" stroke="#64748b" stroke-width="2" rx="6"/>
  <rect x="70" y="75" width="90" height="70" fill="#000" stroke="#38bdf8" stroke-width="2" rx="4"/>
  <text x="78" y="105" class="d-txt" fill="#38bdf8">PCF8574</text>
  <text x="78" y="125" class="d-txt" fill="#94a3b8">I2C CHIP</text>
  <circle cx="230" cy="110" r="22" class="d-pot"/>
  <line x1="218" y1="110" x2="242" y2="110" stroke="#fff" stroke-width="3"/>
  <text x="185" y="150" class="d-txt" fill="#ffd978">CONTRAST</text>
  <text x="45" y="210" class="d-txt" fill="#34d399">4 PINS: GND • VCC • SDA • SCL</text>
  <text x="45" y="235" class="d-txt" fill="#94a3b8">Turn potentiometer to reveal text!</text>
</svg>
        `,
        annotations: [
          {
                    "text": "Converts I2C into parallel LCD signals",
                    "x": "15%",
                    "y": "30%"
          },
          {
                    "text": "Contrast pot sets liquid crystal bias voltage",
                    "x": "55%",
                    "y": "30%"
          }
]
      },
      {
        stepNum: 3,
        altitude: "Mid Atmosphere • Liquid Crystal Physics",
        title: "Nematic Liquid Crystal Polarizers",
        subtitle: "Step 3: How molecules twist light to make characters",
        desc: "Liquid crystals are rod-shaped organic molecules suspended between two perpendicular polarizing filters. In their natural unpowered state, they twist light by 90 degrees, allowing it to pass through both polarizers. Applying a small AC voltage untwists the molecules, blocking light and creating dark pixel segments.",
        takeaways: [
          "Twisted Nematic (TN) liquid crystal fluid aligns between glass layers",
          "Front and rear polarizing filters are oriented at 90 degrees to each other",
          "Voltage untwists liquid crystal rods to block transmitted light",
          "Pure AC drive waveform prevents electrolytic decomposition of fluid"
],
        tip: "Liquid crystals freeze in sub-zero temperatures (sluggish updates) and become permanently black above 60°C. Keep character LCDs indoors or within insulated enclosures!",
        doodleLabel: "Light Polarization Physics",
        svgDoodle: `
<svg viewBox="0 0 360 280" class="doodle-svg" xmlns="http://www.w3.org/2000/svg">
  <style>
    .d-polar { fill: rgba(56, 189, 248, 0.2); stroke: #38bdf8; stroke-width: 2; }
    .d-txt { font-family: 'Press Start 2P', monospace; font-size: 8px; fill: #f0fdfa; }
  </style>
  <rect x="25" y="25" width="310" height="230" rx="10" fill="#02111d" stroke="#047857" stroke-width="2.5"/>
  <rect x="50" y="60" width="40" height="120" class="d-polar"/>
  <text x="55" y="50" class="d-txt" fill="#38bdf8">POL 1</text>
  <rect x="150" y="60" width="60" height="120" fill="#065f46" stroke="#10b981" stroke-width="2" rx="4"/>
  <text x="145" y="50" class="d-txt" fill="#10b981">LIQUID CRYSTALS</text>
  <rect x="270" y="60" width="40" height="120" class="d-polar"/>
  <text x="275" y="50" class="d-txt" fill="#38bdf8">POL 2</text>
  <!-- Light beam -->
  <line x1="30" y1="120" x2="330" y2="120" stroke="#fde047" stroke-width="3" stroke-dasharray="6 4"/>
  <text x="45" y="215" class="d-txt" fill="#ffd978">Molecules Twist Light Waves 90°</text>
  <text x="45" y="238" class="d-txt" fill="#a7f3d0">Electrostatic field blocks dark pixels</text>
</svg>
        `,
        annotations: [
          {
                    "text": "First polarizing filter passes vertical light",
                    "x": "10%",
                    "y": "30%"
          },
          {
                    "text": "Second filter blocks horizontal light",
                    "x": "65%",
                    "y": "30%"
          }
]
      },
      {
        stepNum: 4,
        altitude: "High Stratosphere • LiquidCrystal Code",
        title: "LiquidCrystal_I2C Library Coding",
        subtitle: "Step 4: Printing text, formatting numbers & cursor control",
        desc: "The LiquidCrystal_I2C library makes driving this display effortless. With simple commands you can initialize the display, turn the backlight on or off, position the cursor anywhere on the 16x2 grid, and print formatted strings.",
        takeaways: [
          "LiquidCrystal_I2C lcd(0x27, 16, 2); initializes the driver",
          "lcd.init(); lcd.backlight(); powers on screen and illumination",
          "lcd.setCursor(col, row); positions writing location (0-indexed)",
          "lcd.print(\"text\"); outputs ASCII characters directly"
],
        tip: "Avoid calling lcd.clear() every loop iteration! It causes irritating screen flicker. Instead, overwrite old text by padding strings with spaces (e.g. sprintf(buf, \"%-16s\", text)).",
        doodleLabel: "Arduino C++ LCD Code",
        svgDoodle: `
<svg viewBox="0 0 360 280" class="doodle-svg" xmlns="http://www.w3.org/2000/svg">
  <style>
    .d-box { fill: #02111d; stroke: #10b981; stroke-width: 3; }
    .d-code { font-family: monospace; font-size: 10px; fill: #7dd3fc; }
    .d-kw { fill: #f43f5e; font-weight: bold; }
    .d-fn { fill: #38bdf8; }
  </style>
  <rect x="20" y="25" width="320" height="230" rx="10" class="d-box"/>
  <text x="35" y="55" class="d-code"><tspan class="d-kw">#include</tspan> &lt;LiquidCrystal_I2C.h&gt;</text>
  <text x="35" y="75" class="d-code">LiquidCrystal_I2C <tspan class="d-fn">lcd</tspan>(0x27, 16, 2);</text>
  <text x="35" y="105" class="d-code"><tspan class="d-kw">void</tspan> setup() {</text>
  <text x="50" y="130" class="d-code">lcd.<tspan class="d-fn">init</tspan>(); lcd.<tspan class="d-fn">backlight</tspan>();</text>
  <text x="50" y="155" class="d-code">lcd.<tspan class="d-fn">setCursor</tspan>(0, 0);</text>
  <text x="50" y="180" class="d-code">lcd.<tspan class="d-fn">print</tspan>(<tspan fill="#34d399">"IoT Station"</tspan>);</text>
  <text x="50" y="205" class="d-code">lcd.<tspan class="d-fn">setCursor</tspan>(0, 1);</text>
  <text x="50" y="230" class="d-code">lcd.<tspan class="d-fn">print</tspan>(<tspan fill="#ffd978">"Ready to scan..."</tspan>);</text>
  <text x="35" y="248" class="d-code">}</text>
</svg>
        `,
        annotations: [
          {
                    "text": "Simple initialization over I2C",
                    "x": "15%",
                    "y": "25%"
          },
          {
                    "text": "Zero-indexed: Row 0 is top, Row 1 is bottom",
                    "x": "25%",
                    "y": "70%"
          }
]
      },
      {
        stepNum: 5,
        altitude: "Ionosphere • Custom CGRAM Glyphs",
        title: "Custom 5x8 CGRAM Bitmaps",
        subtitle: "Step 5: Crafting custom battery, heart & Wi-Fi icons",
        desc: "The HD44780 has 64 bytes of Character Generator RAM (CGRAM), allowing you to define up to 8 completely custom 5×8 pixel icons! Design battery gauges, animated Pac-Man characters, temperature thermometer icons, or Wi-Fi signal strength bars.",
        takeaways: [
          "Define custom icons using an array of 8 bytes (each byte = 1 row of 5 pixels)",
          "lcd.createChar(0, heartIcon); registers the icon in CGRAM slot 0",
          "lcd.write(0); prints your custom icon to the screen",
          "Animated icons created by cycling CGRAM slots in real-time"
],
        tip: "Build a smooth animated battery gauge or water level tank by creating 5 custom vertical bar characters that fill from 1/5th to 5/5ths full!",
        doodleLabel: "5x8 Pixel Heart & Battery CGRAM",
        svgDoodle: `
<svg viewBox="0 0 360 280" class="doodle-svg" xmlns="http://www.w3.org/2000/svg">
  <style>
    .d-pix { fill: #000; stroke: #064e3b; stroke-width: 1; }
    .d-on { fill: #34d399; }
    .d-txt { font-family: 'Press Start 2P', monospace; font-size: 8px; fill: #f0fdfa; }
  </style>
  <rect x="25" y="25" width="310" height="230" rx="10" fill="#02111d" stroke="#10b981" stroke-width="3"/>
  <text x="45" y="55" class="d-txt" fill="#ffd978">5x8 CGRAM BITMAP EDITOR</text>
  <!-- 5x8 Grid Heart -->
  <g transform="translate(60, 75)">
    <!-- Row 0 -->
    <rect x="0" y="0" width="12" height="12" class="d-pix"/>
    <rect x="14" y="0" width="12" height="12" class="d-pix d-on"/>
    <rect x="28" y="0" width="12" height="12" class="d-pix"/>
    <rect x="42" y="0" width="12" height="12" class="d-pix d-on"/>
    <rect x="56" y="0" width="12" height="12" class="d-pix"/>
    <!-- Row 1 -->
    <rect x="0" y="14" width="12" height="12" class="d-pix d-on"/>
    <rect x="14" y="14" width="12" height="12" class="d-pix d-on"/>
    <rect x="28" y="14" width="12" height="12" class="d-pix d-on"/>
    <rect x="42" y="14" width="12" height="12" class="d-pix d-on"/>
    <rect x="56" y="14" width="12" height="12" class="d-pix d-on"/>
    <!-- Row 2 -->
    <rect x="0" y="28" width="12" height="12" class="d-pix d-on"/>
    <rect x="14" y="28" width="12" height="12" class="d-pix d-on"/>
    <rect x="28" y="28" width="12" height="12" class="d-pix d-on"/>
    <rect x="42" y="28" width="12" height="12" class="d-pix d-on"/>
    <rect x="56" y="28" width="12" height="12" class="d-pix d-on"/>
    <!-- Row 3 -->
    <rect x="0" y="42" width="12" height="12" class="d-pix"/>
    <rect x="14" y="42" width="12" height="12" class="d-pix d-on"/>
    <rect x="28" y="42" width="12" height="12" class="d-pix d-on"/>
    <rect x="42" y="42" width="12" height="12" class="d-pix d-on"/>
    <rect x="56" y="42" width="12" height="12" class="d-pix"/>
    <!-- Row 4 -->
    <rect x="0" y="56" width="12" height="12" class="d-pix"/>
    <rect x="14" y="56" width="12" height="12" class="d-pix"/>
    <rect x="28" y="56" width="12" height="12" class="d-pix d-on"/>
    <rect x="42" y="56" width="12" height="12" class="d-pix"/>
    <rect x="56" y="56" width="12" height="12" class="d-pix"/>
  </g>
  <rect x="160" y="75" width="140" height="90" fill="#064e3b" stroke="#34d399" stroke-width="2" rx="6"/>
  <text x="175" y="110" class="d-txt" fill="#fff">HEART ICON</text>
  <text x="175" y="135" class="d-txt" fill="#fde047">SLOT 0 READY</text>
  <text x="45" y="225" class="d-txt" fill="#38bdf8">Up to 8 Custom User Glyphs in CGRAM</text>
</svg>
        `,
        annotations: [
          {
                    "text": "Custom 5x8 pixel bitmask grid",
                    "x": "15%",
                    "y": "30%"
          },
          {
                    "text": "Stored inside on-chip character generator RAM",
                    "x": "40%",
                    "y": "80%"
          }
]
      }
    ]
  },

  dcmotor: {
    id: 'dcmotor',
    name: 'DC Motor & H-Bridge Driver',
    shortName: 'DC Motor',
    level: 'LEVEL 12',
    reward: 'Kinetic Overdrive Badge',
    xp: 165,
    steps: [
      {
        stepNum: 1,
        altitude: "Ground Level • Introduction",
        title: "Electromagnetism in Motion",
        subtitle: "Step 1: What is a DC Toy Motor?",
        desc: "Direct Current (DC) motors convert electrical current into mechanical rotation using the fundamental Lorentz Force. Inside, permanent stator magnets create a magnetic field. When electric current flows through copper wire coils wound around the rotor, it generates an opposing magnetic field that forces the shaft to spin.",
        takeaways: [
          "Lorentz force: F = I \u00d7 L \u00d7 B forces the rotor shaft to spin",
          "Commutator and copper brushes reverse current flow every half turn",
          "Rotational speed (RPM) is directly proportional to applied voltage",
          "Reversing electrical polarity reverses rotational direction instantly"
],
        tip: "Never connect a DC motor directly to a microcontroller pin! A small toy motor draws 200mA to 1500mA (1.5 Amps when stalled), which will instantly fry a 20mA microcontroller GPIO pin.",
        doodleLabel: "Internal Stator & Armature Anatomy",
        svgDoodle: `
<svg viewBox="0 0 360 280" class="doodle-svg" xmlns="http://www.w3.org/2000/svg">
  <style>
    .d-can { fill: #475569; stroke: #94a3b8; stroke-width: 3.5; rx: 12; }
    .d-shaft { fill: #cbd5e1; stroke: #e2e8f0; stroke-width: 2; }
    .d-txt { font-family: 'Press Start 2P', monospace; font-size: 8px; fill: #f0fdfa; }
  </style>
  <rect x="80" y="60" width="180" height="140" class="d-can"/>
  <rect x="260" y="115" width="55" height="30" class="d-shaft"/>
  <!-- Rotor coils & Magnets -->
  <circle cx="170" cy="130" r="50" fill="#0f172a" stroke="#f97316" stroke-width="3"/>
  <rect x="155" y="90" width="30" height="80" fill="#ea580c" rx="4"/>
  <text x="160" y="135" class="d-txt" fill="#fff">COIL</text>
  <path d="M 285 100 Q 315 130 285 160" fill="none" stroke="#fde047" stroke-width="3" stroke-linecap="round"/>
  <text x="270" y="90" class="d-txt" fill="#fde047">SPIN</text>
  <!-- Terminals -->
  <line x1="80" y1="95" x2="40" y2="95" stroke="#ef4444" stroke-width="4"/>
  <line x1="80" y1="165" x2="40" y2="165" stroke="#3b82f6" stroke-width="4"/>
  <text x="25" y="95" class="d-txt" fill="#ef4444">+</text>
  <text x="25" y="165" class="d-txt" fill="#3b82f6">-</text>
  <text x="50" y="240" class="d-txt" fill="#ffd978">High-RPM Brush DC Electromagnetic Motor</text>
</svg>
        `,
        annotations: [
          {
                    "text": "Spinning shaft delivers torque",
                    "x": "70%",
                    "y": "40%"
          },
          {
                    "text": "Dual electrical power terminals",
                    "x": "10%",
                    "y": "30%"
          }
]
      },
      {
        stepNum: 2,
        altitude: "Low Atmosphere • Back-EMF Protection",
        title: "The Back-EMF Voltage Spike",
        subtitle: "Step 2: Why inductive coils create deadly reverse voltage",
        desc: "A spinning motor is also an inductor storing energy in a magnetic field. When you suddenly switch the motor off, the magnetic field instantly collapses. According to Lenz's Law, this collapse induces a massive reverse voltage spike ('Flyback' or Back-EMF) reaching up to 50 to 100 Volts that can destroy driver transistors.",
        takeaways: [
          "Inductive kickback: V = -L (di/dt) spikes when current abruptly stops",
          "Can produce negative voltage spikes exceeding 50+ Volts",
          "Flyback diodes placed across motor coils safely clamp voltage spikes",
          "Separate motor power rail prevents microcontroller brownouts"
],
        tip: "Always solder a 0.1µF ceramic capacitor directly across the motor's metal terminal tabs! It absorbs high-frequency brush arcing noise that causes microcontroller resets.",
        doodleLabel: "Flyback Clamping Diode",
        svgDoodle: `
<svg viewBox="0 0 360 280" class="doodle-svg" xmlns="http://www.w3.org/2000/svg">
  <style>
    .d-wire { stroke: #38bdf8; stroke-width: 3; fill: none; }
    .d-txt { font-family: 'Press Start 2P', monospace; font-size: 8px; fill: #f0fdfa; }
  </style>
  <rect x="25" y="25" width="310" height="230" rx="10" fill="#02111d" stroke="#ef4444" stroke-width="2.5"/>
  <circle cx="210" cy="115" r="35" fill="#1e293b" stroke="#f97316" stroke-width="3"/>
  <text x="195" y="120" class="d-txt" fill="#f97316">MOTOR</text>
  <!-- Flyback Diode in Parallel -->
  <line x1="120" y1="80" x2="210" y2="80" class="d-wire"/>
  <line x1="120" y1="150" x2="210" y2="150" class="d-wire"/>
  <line x1="120" y1="80" x2="120" y2="150" class="d-wire"/>
  <polygon points="120,110 110,125 130,125" fill="#fde047"/>
  <line x1="110" y1="110" x2="130" y2="110" stroke="#fde047" stroke-width="3"/>
  <text x="40" y="125" class="d-txt" fill="#fde047">DIODE</text>
  <text x="45" y="205" class="d-txt" fill="#ef4444">Spike: Clamped Safely to VCC!</text>
  <text x="45" y="235" class="d-txt" fill="#94a3b8">Prevents Transistor Junction Breakdown</text>
</svg>
        `,
        annotations: [
          {
                    "text": "Flyback diode wired reverse-parallel",
                    "x": "15%",
                    "y": "40%"
          },
          {
                    "text": "Inductive motor coil generates back-EMF",
                    "x": "55%",
                    "y": "40%"
          }
]
      },
      {
        stepNum: 3,
        altitude: "Mid Atmosphere • The H-Bridge",
        title: "The H-Bridge Circuit Topology",
        subtitle: "Step 3: Forward, Reverse & Dynamic Braking",
        desc: "How do you reverse a motor electronically without manually swapping physical wires? You use an H-Bridge! Arranging 4 electronic switches (MOSFETs or BJTs) in the shape of the letter 'H' allows current to flow forward, reverse, freewheel, or lock in dynamic electronic braking.",
        takeaways: [
          "Closing switches S1 + S4: Motor spins FORWARD",
          "Closing switches S2 + S3: Motor spins REVERSE",
          "Shoot-through danger: Closing S1 + S2 creates a direct short-circuit to GND",
          "Closing both low-side switches (S3 + S4) creates active regenerative braking"
],
        tip: "Classic L298N drivers waste up to 2V as heat due to internal bipolar transistor drop. For modern battery projects, use MOSFET-based drivers like the TB6612FNG or DRV8833!",
        doodleLabel: "H-Bridge 4-Switch Architecture",
        svgDoodle: `
<svg viewBox="0 0 360 280" class="doodle-svg" xmlns="http://www.w3.org/2000/svg">
  <style>
    .d-sw { stroke: #38bdf8; stroke-width: 3.5; fill: none; }
    .d-txt { font-family: 'Press Start 2P', monospace; font-size: 8px; fill: #f0fdfa; }
  </style>
  <rect x="25" y="25" width="310" height="230" rx="10" fill="#02111d" stroke="#38bdf8" stroke-width="2.5"/>
  <text x="145" y="50" class="d-txt" fill="#ef4444">+VCC (12V)</text>
  <line x1="180" y1="55" x2="180" y2="75" stroke="#ef4444" stroke-width="3"/>
  <line x1="100" y1="75" x2="260" y2="75" stroke="#ef4444" stroke-width="3"/>
  <!-- Left Side -->
  <line x1="100" y1="75" x2="100" y2="100" stroke="#38bdf8" stroke-width="3"/>
  <line x1="100" y1="100" x2="115" y2="120" class="d-sw"/>
  <text x="70" y="115" class="d-txt" fill="#38bdf8">S1</text>
  <line x1="100" y1="140" x2="100" y2="165" stroke="#38bdf8" stroke-width="3"/>
  <line x1="100" y1="165" x2="115" y2="185" class="d-sw"/>
  <text x="70" y="180" class="d-txt" fill="#38bdf8">S3</text>
  <line x1="100" y1="205" x2="100" y2="225" stroke="#94a3b8" stroke-width="3"/>
  <!-- Motor Bridge -->
  <circle cx="180" cy="140" r="26" fill="#0f172a" stroke="#f97316" stroke-width="3"/>
  <text x="172" y="145" class="d-txt" fill="#f97316">M</text>
  <line x1="100" y1="140" x2="154" y2="140" stroke="#f97316" stroke-width="3"/>
  <line x1="206" y1="140" x2="260" y2="140" stroke="#f97316" stroke-width="3"/>
  <!-- Right Side -->
  <line x1="260" y1="75" x2="260" y2="100" stroke="#38bdf8" stroke-width="3"/>
  <line x1="260" y1="100" x2="275" y2="120" class="d-sw"/>
  <text x="280" y="115" class="d-txt" fill="#38bdf8">S2</text>
  <line x1="260" y1="140" x2="260" y2="165" stroke="#38bdf8" stroke-width="3"/>
  <line x1="260" y1="165" x2="275" y2="185" class="d-sw"/>
  <text x="280" y="180" class="d-txt" fill="#38bdf8">S4</text>
  <line x1="260" y1="205" x2="260" y2="225" stroke="#94a3b8" stroke-width="3"/>
  <line x1="100" y1="225" x2="260" y2="225" stroke="#94a3b8" stroke-width="3"/>
  <text x="165" y="245" class="d-txt" fill="#94a3b8">GND</text>
</svg>
        `,
        annotations: [
          {
                    "text": "S1 + S4 Closed = Forward",
                    "x": "15%",
                    "y": "30%"
          },
          {
                    "text": "S2 + S3 Closed = Reverse",
                    "x": "60%",
                    "y": "30%"
          }
]
      },
      {
        stepNum: 4,
        altitude: "High Stratosphere • PWM Speed Control",
        title: "Speed Control via PWM Duty Cycle",
        subtitle: "Step 4: Pulsing power at 1,000 to 20,000 Hz",
        desc: "You cannot slow a DC motor down by simply adding a resistor — it wastes massive power as heat and kills starting torque. Instead, Pulse Width Modulation (PWM) switches full voltage ON and OFF thousands of times per second. Varying the 'Duty Cycle' controls effective torque and speed smoothly.",
        takeaways: [
          "Duty Cycle = (Time ON \u00f7 Total Period) \u00d7 100%",
          "0% Duty = Stopped; 50% = Half Speed; 100% = Full Overdrive",
          "ESP32 uses ledcSetup() & ledcWrite() hardware PWM timers",
          "20 kHz PWM frequency moves motor switching beyond audible human hearing"
],
        tip: "If your motor whines or buzzes at low speeds, increase the PWM carrier frequency to 20 kHz. Human ears can't hear 20 kHz, silencing the annoying acoustic buzz!",
        doodleLabel: "PWM Duty Cycle Waveform",
        svgDoodle: `
<svg viewBox="0 0 360 280" class="doodle-svg" xmlns="http://www.w3.org/2000/svg">
  <style>
    .d-pwm { stroke: #34d399; stroke-width: 3; fill: none; }
    .d-txt { font-family: 'Press Start 2P', monospace; font-size: 8px; fill: #f0fdfa; }
  </style>
  <rect x="25" y="25" width="310" height="230" rx="10" fill="#02111d" stroke="#f97316" stroke-width="2.5"/>
  <text x="40" y="55" class="d-txt" fill="#ffd978">PWM SPEED MODULATION</text>
  <!-- 25% Duty -->
  <path d="M 40 100 L 60 100 L 60 70 L 80 70 L 80 100 L 140 100" class="d-pwm"/>
  <text x="155" y="85" class="d-txt" fill="#34d399">25% (SLOW)</text>
  <!-- 75% Duty -->
  <path d="M 40 160 L 60 160 L 60 130 L 120 130 L 120 160 L 140 160" class="d-pwm"/>
  <text x="155" y="145" class="d-txt" fill="#ffd978">75% (CRUISE)</text>
  <text x="45" y="205" class="d-txt" fill="#38bdf8">ledcWrite(channel, duty); // 0-255</text>
  <text x="45" y="235" class="d-txt" fill="#94a3b8">Inductance smooths current into torque</text>
</svg>
        `,
        annotations: [
          {
                    "text": "Short pulse = lower average motor current",
                    "x": "15%",
                    "y": "28%"
          },
          {
                    "text": "Longer pulse = higher magnetic torque",
                    "x": "15%",
                    "y": "50%"
          }
]
      },
      {
        stepNum: 5,
        altitude: "Ionosphere • Cloud IoT Lab Quest",
        title: "Wi-Fi Teleoperated Rover Bot",
        subtitle: "Step 5: Differential drive robotics & web joystick control",
        desc: "Combine two DC geared motors with an ESP32 and H-Bridge driver to assemble an autonomous rover. Spin the left motor forward and right motor reverse to perform a zero-radius spin turn, and control it from your browser over WebSockets!",
        takeaways: [
          "Differential drive: Independent dual wheel velocity allows 360\u00b0 skid steering",
          "Real-time WebSocket joystick dashboard hosted directly on ESP32",
          "Optical wheel encoders measure RPM and precise driving distance",
          "PID speed controller maintains straight paths across uneven carpet"
],
        tip: "Always power motors from an independent battery pack (like a 2S 7.4V LiPo) and tie all Ground (GND) wires together. Never power motors from the ESP32 3.3V rail!",
        doodleLabel: "Differential Drive Rover Bot",
        svgDoodle: `
<svg viewBox="0 0 360 280" class="doodle-svg" xmlns="http://www.w3.org/2000/svg">
  <style>
    .d-chassis { fill: #0f172a; stroke: #38bdf8; stroke-width: 3; rx: 12; }
    .d-wheel { fill: #1e293b; stroke: #f97316; stroke-width: 3; rx: 6; }
    .d-txt { font-family: 'Press Start 2P', monospace; font-size: 8px; fill: #f0fdfa; }
  </style>
  <rect x="25" y="25" width="310" height="230" rx="10" fill="#02111d" stroke="#f97316" stroke-width="3"/>
  <rect x="100" y="55" width="160" height="130" class="d-chassis"/>
  <!-- Wheels -->
  <rect x="65" y="70" width="30" height="100" class="d-wheel"/>
  <rect x="265" y="70" width="30" height="100" class="d-wheel"/>
  <!-- Front Caster -->
  <circle cx="180" cy="70" r="14" fill="#64748b"/>
  <!-- Controller on board -->
  <rect x="130" y="110" width="100" height="60" fill="#064e3b" stroke="#10b981" stroke-width="2" rx="6"/>
  <text x="145" y="135" class="d-txt" fill="#34d399">ESP32</text>
  <text x="140" y="155" class="d-txt" fill="#ffd978">WEB RC</text>
  <text x="45" y="225" class="d-txt" fill="#38bdf8">Wi-Fi Teleoperated Mobile Rover</text>
</svg>
        `,
        annotations: [
          {
                    "text": "Dual high-torque gearmotors",
                    "x": "10%",
                    "y": "30%"
          },
          {
                    "text": "Browser-based WebSocket control",
                    "x": "35%",
                    "y": "50%"
          }
]
      }
    ]
  },

  button: {
    id: 'button',
    name: 'Tactile Push Button & Debouncing',
    shortName: 'Push Button',
    level: 'LEVEL 13',
    reward: 'Tactile Trigger Badge',
    xp: 135,
    steps: [
      {
        stepNum: 1,
        altitude: "Ground Level • Introduction",
        title: "The Mechanical Contact",
        subtitle: "Step 1: What is a Momentary Tactile Switch?",
        desc: "A tactile push button is a normally-open (NO) mechanical switch. Inside its tiny 6x6mm square case sits a convex metal dome. Pressing down deflects the dome with a satisfying physical 'click', bridging opposing metal contacts to complete the circuit. Releasing it lets the dome spring back.",
        takeaways: [
          "Normally Open (NO): Circuit is disconnected until user pushes down",
          "Internal metal snap dome provides both tactile feel and spring return",
          "4 terminal legs: Opposite pairs are permanently connected internally",
          "Rated for up to 50mA current and 100,000+ mechanical actuations"
],
        tip: "A standard 4-pin tactile switch has internal cross-connections! Leg 1 is connected to Leg 2, and Leg 3 is connected to Leg 4. Wire diagonally across corners to ensure you bridge the switch contacts!",
        doodleLabel: "Internal Snap Dome Mechanism",
        svgDoodle: `
<svg viewBox="0 0 360 280" class="doodle-svg" xmlns="http://www.w3.org/2000/svg">
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
</svg>
        `,
        annotations: [
          {
                    "text": "Tactile actuator button plunger",
                    "x": "35%",
                    "y": "40%"
          },
          {
                    "text": "Wire diagonally across corners",
                    "x": "10%",
                    "y": "25%"
          }
]
      },
      {
        stepNum: 2,
        altitude: "Low Atmosphere • Pull-Up & Floating Pins",
        title: "Floating Pins & Pull-Up Resistors",
        subtitle: "Step 2: Banishing erratic electrical static",
        desc: "A microcontroller input pin has billions of ohms of impedance. If you wire a button directly to 3.3V with nothing else, releasing the button leaves the pin disconnected — it 'floats' like an antenna, picking up electromagnetic radio noise and randomly oscillating between 0 and 1! A pull-up or pull-down resistor anchors the voltage.",
        takeaways: [
          "Floating pin: Unconnected input picks up static noise and triggers false reads",
          "Pull-Up resistor (10k\u03a9): Holds the pin HIGH at 3.3V when button is idle",
          "Pressing button connects pin to GND, pulling input firmly to LOW (Active-Low)",
          "ESP32 and Arduino have internal built-in pull-up resistors: INPUT_PULLUP"
],
        tip: "Save breadboard clutter by using pinMode(BUTTON_PIN, INPUT_PULLUP)! It enables the microcontroller's internal ~45kΩ pull-up resistor inside the silicon, eliminating external resistors.",
        doodleLabel: "Pull-Up Circuit Schematic",
        svgDoodle: `
<svg viewBox="0 0 360 280" class="doodle-svg" xmlns="http://www.w3.org/2000/svg">
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
</svg>
        `,
        annotations: [
          {
                    "text": "10k\u03a9 holds pin safely at 3.3V",
                    "x": "10%",
                    "y": "35%"
          },
          {
                    "text": "Pressing button pulls pin to GND",
                    "x": "10%",
                    "y": "70%"
          }
]
      },
      {
        stepNum: 3,
        altitude: "Mid Atmosphere • The Bounce Mystery",
        title: "Contact Bounce Phenomenon",
        subtitle: "Step 3: Why one click looks like 20 button presses",
        desc: "To human fingers, pressing a button feels like an instantaneous single click. But at microsecond CPU speeds, the elastic metal dome rebounds and chatters against the contacts 10 to 50 times over 5 to 20 milliseconds before settling firmly! Without debouncing, a digital counter will count 15 presses for a single click.",
        takeaways: [
          "Mechanical contacts chatter back-and-forth for 5 to 20 milliseconds",
          "Microcontrollers execute millions of instructions per second, detecting each bounce",
          "Causes severe bugs in counter circuits, menu navigation, and toggle switches",
          "Debouncing can be solved with hardware RC filters or software timing algorithms"
],
        tip: "Never write \`count++\` directly inside a naive digitalRead() loop without debouncing! You will increment by 8 to 25 every single time you push the switch.",
        doodleLabel: "Contact Bounce Oscilloscope Trace",
        svgDoodle: `
<svg viewBox="0 0 360 280" class="doodle-svg" xmlns="http://www.w3.org/2000/svg">
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
</svg>
        `,
        annotations: [
          {
                    "text": "Elastic metal dome bounces on impact",
                    "x": "25%",
                    "y": "25%"
          },
          {
                    "text": "Settles into clean steady state after 15ms",
                    "x": "55%",
                    "y": "70%"
          }
]
      },
      {
        stepNum: 4,
        altitude: "High Stratosphere • Software Debounce",
        title: "Software Debouncing with millis()",
        subtitle: "Step 4: Non-blocking time threshold verification",
        desc: "Instead of freezing code with delay(50), track timestamps using millis()! When the pin changes state, check if at least 50 milliseconds have elapsed since the last transition before confirming a valid user click.",
        takeaways: [
          "Software debouncing eliminates the cost of external hardware capacitors",
          "50ms debounce threshold reliably absorbs all mechanical bounce",
          "millis() timer ensures zero loop() freezing or blocking delays",
          "Detects both state change (edge) and steady state (level)"
],
        tip: "Popular libraries like ezButton or OneButton handle debouncing, long presses, and double-clicks with just a couple lines of clean code!",
        doodleLabel: "millis() Debounce Logic Flow",
        svgDoodle: `
<svg viewBox="0 0 360 280" class="doodle-svg" xmlns="http://www.w3.org/2000/svg">
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
</svg>
        `,
        annotations: [
          {
                    "text": "Tracks time of last transition",
                    "x": "15%",
                    "y": "35%"
          },
          {
                    "text": "Confirms click only after 50ms steady",
                    "x": "20%",
                    "y": "70%"
          }
]
      },
      {
        stepNum: 5,
        altitude: "Ionosphere • Cloud IoT Lab Quest",
        title: "Multi-Function Smart IoT Button",
        subtitle: "Step 5: Single click, double click & factory reset long-press",
        desc: "Upgrade a simple push button into a smart IoT interface: a single click toggles smart lights, a double click activates movie mode, and holding the button down for 5 seconds triggers an emergency alert or resets Wi-Fi provisioning credentials.",
        takeaways: [
          "Single click: Toggle local IoT smart light relay",
          "Double click: Cycle through RGB color ambiance scenes",
          "Long-press (3 seconds): Mute alarm or lock smart door",
          "Hold (10 seconds): Clear ESP32 flash and launch Wi-Fi AP portal"
],
        tip: "Add a small tactile piezo buzzer to beep on clicks! Audible feedback gives users instant confidence that their press was registered.",
        doodleLabel: "Multi-Action Event Dispatcher",
        svgDoodle: `
<svg viewBox="0 0 360 280" class="doodle-svg" xmlns="http://www.w3.org/2000/svg">
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
</svg>
        `,
        annotations: [
          {
                    "text": "Simple hardware momentary switch",
                    "x": "10%",
                    "y": "35%"
          },
          {
                    "text": "Rich multi-action event dispatcher",
                    "x": "40%",
                    "y": "30%"
          }
]
      }
    ]
  },

  jumper: {
    id: 'jumper',
    name: 'Jumper Wires & Power Distribution',
    shortName: 'Jumper Wires',
    level: 'LEVEL 14',
    reward: 'Bus Navigator Badge',
    xp: 130,
    steps: [
      {
        stepNum: 1,
        altitude: "Ground Level • Introduction",
        title: "The Circuit Arteries",
        subtitle: "Step 1: What are Dupont Jumper Wires?",
        desc: "Jumper wires are the flexible electrical veins that tie your breadboard circuits together. Terminated with standardized 2.54mm (0.1 inch) Dupont connector pins, they bridge microcontrollers, sensors, display screens, and breadboard power rails without a drop of solder.",
        takeaways: [
          "Standardized 2.54mm (0.1 inch) pitch matches breadboard pin grids",
          "Three essential connector combinations: Male-to-Male (M-M), Male-to-Female (M-F), and Female-to-Female (F-F)",
          "Stranded copper core delivers maximum flexibility and bending fatigue resistance",
          "PVC insulation prevents accidental shorts between adjacent signal wires"
],
        tip: "Male-to-Male wires connect breadboard tie points together. Male-to-Female wires connect sensors with pin headers directly to your microcontroller!",
        doodleLabel: "The Three Dupont Wire Types",
        svgDoodle: `
<svg viewBox="0 0 360 280" class="doodle-svg" xmlns="http://www.w3.org/2000/svg">
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
</svg>
        `,
        annotations: [
          {
                    "text": "Male pin plugs into breadboard",
                    "x": "5%",
                    "y": "22%"
          },
          {
                    "text": "Female socket plugs onto sensor headers",
                    "x": "75%",
                    "y": "45%"
          }
]
      },
      {
        stepNum: 2,
        altitude: "Low Atmosphere • Color Coding Protocols",
        title: "Standard Color Coding Protocols",
        subtitle: "Step 2: Wiring conventions that prevent catastrophic shorts",
        desc: "In electronics, color coding is a universal engineering discipline that prevents accidental polarity reversals. One reversed power wire can blow up an ESP32 in milliseconds. Adhering strictly to industry color conventions makes troubleshooting instant and painless.",
        takeaways: [
          "RED: Positive Voltage Supply (+3.3V, +5V, +12V)",
          "BLACK (or Dark Blue): Ground return path (GND / 0V)",
          "YELLOW / ORANGE: Data / Transmit signals (SDA, TX, PWM)",
          "GREEN / WHITE: Clock / Receive signals (SCL, RX, Interrupts)"
],
        tip: "NEVER use red for ground or black for power! Even if 'it works', you or someone else will eventually assume red is 5V and fry expensive components.",
        doodleLabel: "Industry Color Code Standards",
        svgDoodle: `
<svg viewBox="0 0 360 280" class="doodle-svg" xmlns="http://www.w3.org/2000/svg">
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
</svg>
        `,
        annotations: [
          {
                    "text": "Strict red/black power polarity",
                    "x": "10%",
                    "y": "22%"
          },
          {
                    "text": "Color-coded signal lines",
                    "x": "10%",
                    "y": "50%"
          }
]
      },
      {
        stepNum: 3,
        altitude: "Mid Atmosphere • Resistance & Gauge",
        title: "Wire Gauge & Contact Degradation",
        subtitle: "Step 3: Hidden resistance, voltage drop & loose crimps",
        desc: "Cheap jumper wires typically use thin 28 AWG aluminum or low-grade copper with loose crimped Dupont pins. When a high-current load (like an ESP32 Wi-Fi burst or motor driver) pulls 500mA, wire and contact resistance can cause a 0.5V voltage drop, resulting in mysterious brownouts and random resets.",
        takeaways: [
          "28 AWG jumper wire has ~0.2\u03a9 to 0.5\u03a9 resistance per foot",
          "Poorly crimped Dupont pins add up to 1\u03a9 of erratic contact resistance",
          "V_drop = I \u00d7 R: Drawing 1 Amp through 0.5\u03a9 drops a massive 0.5 Volts!",
          "Loose breadboard clip grip causes intermittent reboot glitches"
],
        tip: "If your ESP32 reboots every time Wi-Fi connects, suspect jumper wire voltage drop! Swap thin jumper wires for shorter, thicker 22 AWG solid-core wire.",
        doodleLabel: "Resistance & Voltage Drop",
        svgDoodle: `
<svg viewBox="0 0 360 280" class="doodle-svg" xmlns="http://www.w3.org/2000/svg">
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
</svg>
        `,
        annotations: [
          {
                    "text": "Supply delivers 5.0V",
                    "x": "10%",
                    "y": "30%"
          },
          {
                    "text": "Under-voltage triggers ESP32 brownout",
                    "x": "60%",
                    "y": "30%"
          }
]
      },
      {
        stepNum: 4,
        altitude: "High Stratosphere • Split Breadboard Rails",
        title: "Split Breadboard Power Rails",
        subtitle: "Step 4: The hidden midline rail break trap",
        desc: "On many full-sized 830-point breadboards, the long blue and red power rails along the edges are physically severed right at the center line! Beginners will plug power into the left side and wonder why sensors on the right side receive zero voltage. Jumper wires must bridge this center gap.",
        takeaways: [
          "Full-size breadboards frequently split side power buses into two isolated halves",
          "Visual indicator: Broken red/blue printed stripes signify an electrical gap",
          "Bridge the gap with two short U-shaped jumper wires (+ to + and - to -)",
          "Common ground: Tie all module grounds together in a unified star topology"
],
        tip: "Take a multimeter in continuity (beep) mode and test the power rail from one end to the other! If it doesn't beep across the center, install two permanent jumper bridges.",
        doodleLabel: "Split Power Bus Gap & Bridge",
        svgDoodle: `
<svg viewBox="0 0 360 280" class="doodle-svg" xmlns="http://www.w3.org/2000/svg">
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
</svg>
        `,
        annotations: [
          {
                    "text": "Gap disconnects right side of board",
                    "x": "40%",
                    "y": "35%"
          },
          {
                    "text": "Bridge with short U-jumpers",
                    "x": "40%",
                    "y": "15%"
          }
]
      },
      {
        stepNum: 5,
        altitude: "Ionosphere • Clean Prototyping",
        title: "Master Prototyping & Cable Routing",
        subtitle: "Step 5: Tidy wire harnesses & parasitic noise reduction",
        desc: "A messy 'bird's nest' of wild looping jumper wires acts like radio antennas picking up electromagnetic noise and motor inductive hum. Cutting custom-length solid-core wires flat against the breadboard makes circuits look clean, reliable, and ready for production PCB layout.",
        takeaways: [
          "Flat routing reduces mutual inductive crosstalk between high-speed buses",
          "Twisting power and ground wires together cancels out radiated magnetic fields",
          "Color-coded wire lengths streamline rapid breadboard debugging",
          "Clean breadboard layouts translate 1-to-1 into custom printed PCB designs"
],
        tip: "Twist your I2C SDA and SCL wires loosely with a Ground wire! The ground shielding absorbs electrical interference from nearby DC motors and AC mains.",
        doodleLabel: "Clean Wire Routing Layout",
        svgDoodle: `
<svg viewBox="0 0 360 280" class="doodle-svg" xmlns="http://www.w3.org/2000/svg">
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
</svg>
        `,
        annotations: [
          {
                    "text": "Clean 90-degree bend routing",
                    "x": "15%",
                    "y": "25%"
          },
          {
                    "text": "Zero messy airborne wire loops",
                    "x": "20%",
                    "y": "80%"
          }
]
      }
    ]
  },

  arduino: {
    id: 'arduino',
    name: 'Arduino Uno R3 Microcontroller',
    shortName: 'Arduino Uno',
    level: 'LEVEL 15',
    reward: 'Pioneer Spark Badge',
    xp: 170,
    steps: [
      {
        stepNum: 1,
        altitude: "Ground Level • Introduction",
        title: "The Open-Source Legend",
        subtitle: "Step 1: What is the Arduino Uno R3?",
        desc: "Born in Ivrea, Italy in 2005, the Arduino Uno ignited the global maker and IoT revolution! Built around the bulletproof 8-bit Microchip ATmega328P microcontroller running at 16 MHz, its user-friendly hardware abstraction library made embedded programming accessible to millions of students and creators.",
        takeaways: [
          "Heart: 8-bit AVR ATmega328P processor clocked at 16 MHz crystal oscillator",
          "Memory: 32 KB Flash storage, 2 KB SRAM, 1 KB EEPROM non-volatile memory",
          "5V native operating logic \u2014 directly drives 5V relays, sensors, and displays",
          "Over 10,000 community-contributed open-source sensor libraries"
],
        tip: "The ATmega328P is virtually indestructible compared to delicate 3.3V modern chips. It can output 20mA (40mA absolute max) per pin and tolerate 5V signals all day long!",
        doodleLabel: "Anatomy of the Arduino Uno R3",
        svgDoodle: `
<svg viewBox="0 0 360 280" class="doodle-svg" xmlns="http://www.w3.org/2000/svg">
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
</svg>
        `,
        annotations: [
          {
                    "text": "Removable DIP-28 ATmega328P microcontroller",
                    "x": "40%",
                    "y": "55%"
          },
          {
                    "text": "Rugged 5V USB Type-B connector",
                    "x": "10%",
                    "y": "25%"
          }
]
      },
      {
        stepNum: 2,
        altitude: "Low Atmosphere • Board Architecture",
        title: "Pinout & Power Architecture",
        subtitle: "Step 2: 14 Digital I/O, 6 PWM & 6 Analog Inputs",
        desc: "The Uno provides 14 digital input/output pins (pins 0 through 13). Six of these pins (marked with a tilde ~: 3, 5, 6, 9, 10, 11) support 8-bit hardware PWM. Six dedicated analog pins (A0 to A5) feed a 10-bit Successive Approximation Register (SAR) ADC.",
        takeaways: [
          "14 Digital I/O pins (0 to 13) with internal 20k-50k\u03a9 pull-up resistors",
          "6 Hardware PWM pins (~3, ~5, ~6, ~9, ~10, ~11) running at 490 Hz / 980 Hz",
          "6 Analog inputs (A0-A5) with 10-bit resolution (readings from 0 to 1023)",
          "Dual power options: 5V USB or 7-12V DC input on 2.1mm center-positive barrel jack"
],
        tip: "Pins 0 (RX) and 1 (TX) are directly wired to the USB-to-Serial converter chip. Do NOT connect external sensors to pins 0 and 1 while uploading code via USB!",
        doodleLabel: "Uno Pin Architecture",
        svgDoodle: `
<svg viewBox="0 0 360 280" class="doodle-svg" xmlns="http://www.w3.org/2000/svg">
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
</svg>
        `,
        annotations: [
          {
                    "text": "10-bit ADC maps 0-5V to 0-1023",
                    "x": "15%",
                    "y": "50%"
          },
          {
                    "text": "PWM outputs on ~ pins",
                    "x": "55%",
                    "y": "20%"
          }
]
      },
      {
        stepNum: 3,
        altitude: "Mid Atmosphere • Execution Lifecycle",
        title: "The setup() and loop() Lifecycle",
        subtitle: "Step 3: Embedded C++ execution flow & hardware interrupts",
        desc: "Unlike desktop operating systems with threads and task managers, the Arduino microcontroller runs a single continuous thread of bare-metal C++ machine code. The setup() function executes once when power turns on, and then loop() executes repeatedly forever.",
        takeaways: [
          "setup(): Configures pin modes, serial baud rate, and peripheral registers once",
          "loop(): Repeats continuously at high frequency until power is cut",
          "Hardware interrupts (Pins 2 and 3) instantly pause loop() to service events",
          "millis() clock wraps around to zero after approximately 50 days"
],
        tip: "Avoid blocking delay() calls in loop()! If you call delay(5000), the microcontroller is completely blind to button presses and sensor triggers for 5 entire seconds.",
        doodleLabel: "Arduino Program Lifecycle",
        svgDoodle: `
<svg viewBox="0 0 360 280" class="doodle-svg" xmlns="http://www.w3.org/2000/svg">
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
</svg>
        `,
        annotations: [
          {
                    "text": "setup() configures hardware registers",
                    "x": "25%",
                    "y": "40%"
          },
          {
                    "text": "loop() executes millions of times",
                    "x": "25%",
                    "y": "65%"
          }
]
      },
      {
        stepNum: 4,
        altitude: "High Stratosphere • Serial & Optiboot",
        title: "UART Serial & The Optiboot Bootloader",
        subtitle: "Step 4: Flashing code over USB without an external programmer",
        desc: "Before Arduino, programming microcontrollers required expensive external high-voltage In-System Programmers (ISPs). The Uno includes a tiny 512-byte program in high memory called the 'Optiboot' bootloader. When you click Upload, the USB chip pulses DTR to reset the chip, and Optiboot flashes your new program into flash memory over UART serial at 115,200 baud.",
        takeaways: [
          "Optiboot bootloader occupies only 512 bytes of high flash memory",
          "Auto-reset circuit pulses the RESET pin LOW via DTR capacitor coupling",
          "UART Serial transmits binary hex bytecode over TX/RX pins 1 and 0",
          "Serial.begin(115200); establishes communication with PC Serial Monitor"
],
        tip: "Use Serial.print() liberally when debugging! Printing variables out to the IDE Serial Monitor is the #1 tool for finding bugs in embedded C++.",
        doodleLabel: "USB-to-UART Flashing Architecture",
        svgDoodle: `
<svg viewBox="0 0 360 280" class="doodle-svg" xmlns="http://www.w3.org/2000/svg">
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
</svg>
        `,
        annotations: [
          {
                    "text": "USB bridge manages PC serial link",
                    "x": "15%",
                    "y": "30%"
          },
          {
                    "text": "Optiboot writes new bytecode into flash",
                    "x": "60%",
                    "y": "30%"
          }
]
      },
      {
        stepNum: 5,
        altitude: "Ionosphere • Cloud IoT Bridge",
        title: "Bridging Arduino Uno to IoT",
        subtitle: "Step 5: Co-processing with ESP32 & wireless gateways",
        desc: "While the classic Uno lacks built-in Wi-Fi, it shines as a rugged 5V sensor coprocessor! Connect the Arduino Uno to an ESP32 or Raspberry Pi over UART serial or I2C: let the Uno handle high-precision 5V analog sensors, while the ESP32 publishes encrypted MQTT telemetry to cloud dashboards.",
        takeaways: [
          "Co-processor architecture: Arduino handles 5V hardware, ESP32 handles Wi-Fi",
          "UART serial link sends JSON sensor packets at 115,200 baud",
          "Level shifting protects 3.3V ESP32 inputs from Uno 5V TX signals",
          "The ultimate combination of 5V ruggedness and modern cloud IoT connectivity"
],
        tip: "Always insert a voltage divider (1kΩ + 2kΩ) on the Arduino Uno's TX line before connecting it to an ESP32's RX pin, because the Uno outputs 5V logic!",
        doodleLabel: "Uno + ESP32 Hybrid IoT Bridge",
        svgDoodle: `
<svg viewBox="0 0 360 280" class="doodle-svg" xmlns="http://www.w3.org/2000/svg">
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
</svg>
        `,
        annotations: [
          {
                    "text": "Reads rugged 5V analog sensors",
                    "x": "15%",
                    "y": "25%"
          },
          {
                    "text": "Uploads live data to cloud APIs",
                    "x": "60%",
                    "y": "25%"
          }
]
      }
    ]
  }
};
