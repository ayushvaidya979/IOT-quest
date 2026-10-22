# -*- coding: utf-8 -*-
"""
Builder Group 2: OLED Display, LCD Display, DC Motor
"""

GROUP2_DATA = {
  "oled": {
    "id": "oled",
    "name": "0.96\" I2C OLED Display",
    "shortName": "OLED Display",
    "level": "LEVEL 10",
    "reward": "Pixel Wizard Badge",
    "xp": 160,
    "steps": [
      {
        "stepNum": 1,
        "altitude": "Ground Level • Introduction",
        "title": "Self-Emitting Organic Pixels",
        "subtitle": "Step 1: What is the SSD1306 OLED Display?",
        "desc": "Unlike bulky LCD screens that require a fluorescent or LED backlight shining from behind, Organic Light Emitting Diodes (OLEDs) produce their own light pixel-by-pixel! With 128 columns and 64 rows, you get 8,192 individual crisp, self-illuminating pixels on a wafer-thin glass panel.",
        "takeaways": [
          "128×64 monochrome pixels with true infinite contrast ratio",
          "Zero backlight needed: Pure black pixels consume zero power",
          "Ultra-wide 160-degree viewing angle with zero color distortion",
          "Integrated SSD1306 driver chip with built-in charge pump for 3.3V/5V"
        ],
        "tip": "Displaying a mostly black screen with minimalist white text consumes less than 10mA, making OLEDs perfect for battery-powered wearable IoT devices!",
        "doodleLabel": "Anatomy of the 128x64 OLED Panel",
        "svgDoodle": """<svg viewBox="0 0 360 280" class="doodle-svg" xmlns="http://www.w3.org/2000/svg">
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
</svg>""",
        "annotations": [
          {"text": "True pure black (unlit pixels draw 0 current)", "x": "15%", "y": "30%"},
          {"text": "Only 4 header pins for power + I2C data", "x": "30%", "y": "10%"}
        ]
      },
      {
        "stepNum": 2,
        "altitude": "Low Atmosphere • The I2C Highway",
        "title": "Two-Wire I2C Architecture",
        "subtitle": "Step 2: Connecting via SDA and SCL data lines",
        "desc": "Instead of needing 8 to 16 parallel data lines, this OLED communicates through Inter-Integrated Circuit (I2C) using just two lines: Serial Data (SDA) and Serial Clock (SCL). Up to 127 different devices can share these same two lines using unique 7-bit bus addresses.",
        "takeaways": [
          "Default 7-bit I2C bus address: 0x3C (or 0x3D on some boards)",
          "Requires pull-up resistors (4.7kΩ) on both SDA and SCL lines",
          "Standard I2C speed: 100 kHz; Fast Mode: 400 kHz clock rate",
          "Shares the I2C bus seamlessly with temperature and pressure sensors"
        ],
        "tip": "If your OLED fails to turn on, run an I2C scanner sketch to verify whether its address is 0x3C or 0x3D. Resoldering the back jumper selects between the two!",
        "doodleLabel": "I2C Shared Bus Topology",
        "svgDoodle": """<svg viewBox="0 0 360 280" class="doodle-svg" xmlns="http://www.w3.org/2000/svg">
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
</svg>""",
        "annotations": [
          {"text": "Master generates clock pulses on SCL", "x": "35%", "y": "38%"},
          {"text": "Bidirectional data flows on SDA", "x": "35%", "y": "22%"}
        ]
      },
      {
        "stepNum": 3,
        "altitude": "Mid Atmosphere • Framebuffer RAM",
        "title": "Framebuffer & Memory Pages",
        "subtitle": "Step 3: How 1,024 bytes in RAM control all pixels",
        "desc": "To update the display smoothly without screen flicker, graphic libraries allocate a 1,024-byte 'framebuffer' array inside microcontroller RAM (128 columns × 64 rows ÷ 8 bits/byte = 1,024 bytes). You draw primitives into RAM, then push the buffer to the screen in one burst.",
        "takeaways": [
          "Display memory is split into 8 horizontal pages, each 8 pixels tall",
          "1 byte represents a vertical strip of 8 pixels in a column",
          "Entire display requires only 1,024 bytes (1 KB) of microcontroller RAM",
          "display.display() flushes the buffer over I2C at 30-60 frames/sec"
        ],
        "tip": "Always call display.clearDisplay() before drawing a new frame, and call display.display() only once at the end of loop() to prevent tearing and visible redraw lag!",
        "doodleLabel": "Page Memory Architecture",
        "svgDoodle": """<svg viewBox="0 0 360 280" class="doodle-svg" xmlns="http://www.w3.org/2000/svg">
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
</svg>""",
        "annotations": [
          {"text": "Organized into 8 vertical pages", "x": "15%", "y": "30%"},
          {"text": "Transferred via high-speed burst over I2C", "x": "20%", "y": "80%"}
        ]
      },
      {
        "stepNum": 4,
        "altitude": "High Stratosphere • Adafruit Graphics Code",
        "title": "Drawing Graphics with C++",
        "subtitle": "Step 4: Lines, circles, bitmaps & pixel fonts",
        "desc": "The Adafruit_SSD1306 and Adafruit_GFX libraries provide a rich graphic toolkit for C++. You can render geometric shapes, progress bars, custom bitmaps, and variable-sized bitmap text with simple one-line commands.",
        "takeaways": [
          "Adafruit_SSD1306 display(128, 64, &Wire, -1); initializes screen",
          "display.drawPixel(x, y, SSD1306_WHITE); illuminates individual pixels",
          "display.drawRect(x, y, w, h, SSD1306_WHITE); draws outlines",
          "display.fillRect(x, y, w, h, SSD1306_WHITE); draws solid status bars"
        ],
        "tip": "Convert custom 128x64 logos or icons to C array bitmaps using free tools like image2cpp. Render them instantly with display.drawBitmap()!",
        "doodleLabel": "Adafruit GFX C++ Code",
        "svgDoodle": """<svg viewBox="0 0 360 280" class="doodle-svg" xmlns="http://www.w3.org/2000/svg">
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
</svg>""",
        "annotations": [
          {"text": "High-level graphic primitives", "x": "15%", "y": "60%"},
          {"text": "Pushes 1,024 bytes to screen glass", "x": "35%", "y": "85%"}
        ]
      },
      {
        "stepNum": 5,
        "altitude": "Ionosphere • Cloud IoT Lab Quest",
        "title": "Mini IoT Game & System Telemetry HUD",
        "subtitle": "Step 5: Retro games & real-time wireless monitors",
        "desc": "Build a palm-sized retro gaming console running Flappy Bird or Chrome Dino, or assemble a portable Wi-Fi packet monitor displaying live access points, packet rates, and network telemetry in your pocket.",
        "takeaways": [
          "Playable 60 FPS mini games with 2 tactile push buttons",
          "Real-time CPU load, RAM usage & IP address dashboard",
          "Crypto price tracker & live stock ticker over Wi-Fi APIs",
          "Audio visualizer with FFT spectrum analysis bars"
        ],
        "tip": "To prevent OLED burn-in on devices that run 24/7, implement a screen saver or invert pixel colors every hour with display.invertDisplay(true)!",
        "doodleLabel": "Retro Dino Runner on OLED",
        "svgDoodle": """<svg viewBox="0 0 360 280" class="doodle-svg" xmlns="http://www.w3.org/2000/svg">
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
</svg>""",
        "annotations": [
          {"text": "Frame rate up to 60 FPS via Fast I2C", "x": "15%", "y": "25%"},
          {"text": "Zero noticeable ghosting or motion blur", "x": "20%", "y": "80%"}
        ]
      }
    ]
  },

  "lcd": {
    "id": "lcd",
    "name": "16x2 Character LCD",
    "shortName": "LCD Display",
    "level": "LEVEL 11",
    "reward": "Retro Terminal Badge",
    "xp": 155,
    "steps": [
      {
        "stepNum": 1,
        "altitude": "Ground Level • Introduction",
        "title": "The Liquid Crystal Classic",
        "subtitle": "Step 1: What is the 16x2 HD44780 LCD Display?",
        "desc": "Before high-resolution graphical screens took over, the Hitachi HD44780 LCD controller defined electronics readouts for decades! It features 2 horizontal rows with 16 character cells per row (32 total characters), where each cell consists of a crisp 5×8 pixel alphanumeric grid.",
        "takeaways": [
          "Displays 32 characters total: 2 rows of 16 characters each",
          "HD44780 industry-standard display controller protocol",
          "Built-in ROM contains 208 alphanumeric characters and symbols",
          "Bright LED backlight (classic green or cyber-cool blue)"
        ],
        "tip": "A raw 16x2 LCD requires 16 pins! Always look for models with an attached black I2C backpack board that reduces wiring to just 4 wires.",
        "doodleLabel": "16x2 Character Grid Anatomy",
        "svgDoodle": """<svg viewBox="0 0 360 280" class="doodle-svg" xmlns="http://www.w3.org/2000/svg">
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
</svg>""",
        "annotations": [
          {"text": "16 character positions per row", "x": "15%", "y": "28%"},
          {"text": "16 raw header pins along top edge", "x": "20%", "y": "10%"}
        ]
      },
      {
        "stepNum": 2,
        "altitude": "Low Atmosphere • The I2C Backpack",
        "title": "The PCF8574 I2C Expander",
        "subtitle": "Step 2: Shrinking 16 pins into 4 simple wires",
        "desc": "Soldering a PCF8574 I2C expander chip to the back of the LCD saves 12 microcontroller pins! The PCF8574 receives I2C commands over SDA and SCL and drives the LCD's 4-bit data bus (D4-D7), Register Select (RS), and Enable (EN) lines automatically.",
        "takeaways": [
          "Reduces wiring from 16 messy wires down to 4: VCC, GND, SDA, SCL",
          "Backpack I2C address is typically 0x27 (PCF8574T) or 0x3F (PCF8574AT)",
          "Blue potentiometer on backpack adjusts liquid crystal contrast",
          "Jumper clip connects or disconnects the LED backlight power"
        ],
        "tip": "If the screen lights up blue or green but shows only solid white boxes with no letters, turn the blue contrast potentiometer on the back with a screwdriver until characters appear!",
        "doodleLabel": "Backpack & Contrast Trimpot",
        "svgDoodle": """<svg viewBox="0 0 360 280" class="doodle-svg" xmlns="http://www.w3.org/2000/svg">
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
</svg>""",
        "annotations": [
          {"text": "Converts I2C into parallel LCD signals", "x": "15%", "y": "30%"},
          {"text": "Contrast pot sets liquid crystal bias voltage", "x": "55%", "y": "30%"}
        ]
      },
      {
        "stepNum": 3,
        "altitude": "Mid Atmosphere • Liquid Crystal Physics",
        "title": "Nematic Liquid Crystal Polarizers",
        "subtitle": "Step 3: How molecules twist light to make characters",
        "desc": "Liquid crystals are rod-shaped organic molecules suspended between two perpendicular polarizing filters. In their natural unpowered state, they twist light by 90 degrees, allowing it to pass through both polarizers. Applying a small AC voltage untwists the molecules, blocking light and creating dark pixel segments.",
        "takeaways": [
          "Twisted Nematic (TN) liquid crystal fluid aligns between glass layers",
          "Front and rear polarizing filters are oriented at 90 degrees to each other",
          "Voltage untwists liquid crystal rods to block transmitted light",
          "Pure AC drive waveform prevents electrolytic decomposition of fluid"
        ],
        "tip": "Liquid crystals freeze in sub-zero temperatures (sluggish updates) and become permanently black above 60°C. Keep character LCDs indoors or within insulated enclosures!",
        "doodleLabel": "Light Polarization Physics",
        "svgDoodle": """<svg viewBox="0 0 360 280" class="doodle-svg" xmlns="http://www.w3.org/2000/svg">
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
</svg>""",
        "annotations": [
          {"text": "First polarizing filter passes vertical light", "x": "10%", "y": "30%"},
          {"text": "Second filter blocks horizontal light", "x": "65%", "y": "30%"}
        ]
      },
      {
        "stepNum": 4,
        "altitude": "High Stratosphere • LiquidCrystal Code",
        "title": "LiquidCrystal_I2C Library Coding",
        "subtitle": "Step 4: Printing text, formatting numbers & cursor control",
        "desc": "The LiquidCrystal_I2C library makes driving this display effortless. With simple commands you can initialize the display, turn the backlight on or off, position the cursor anywhere on the 16x2 grid, and print formatted strings.",
        "takeaways": [
          "LiquidCrystal_I2C lcd(0x27, 16, 2); initializes the driver",
          "lcd.init(); lcd.backlight(); powers on screen and illumination",
          "lcd.setCursor(col, row); positions writing location (0-indexed)",
          "lcd.print(\"text\"); outputs ASCII characters directly"
        ],
        "tip": "Avoid calling lcd.clear() every loop iteration! It causes irritating screen flicker. Instead, overwrite old text by padding strings with spaces (e.g. sprintf(buf, \"%-16s\", text)).",
        "doodleLabel": "Arduino C++ LCD Code",
        "svgDoodle": """<svg viewBox="0 0 360 280" class="doodle-svg" xmlns="http://www.w3.org/2000/svg">
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
</svg>""",
        "annotations": [
          {"text": "Simple initialization over I2C", "x": "15%", "y": "25%"},
          {"text": "Zero-indexed: Row 0 is top, Row 1 is bottom", "x": "25%", "y": "70%"}
        ]
      },
      {
        "stepNum": 5,
        "altitude": "Ionosphere • Custom CGRAM Glyphs",
        "title": "Custom 5x8 CGRAM Bitmaps",
        "subtitle": "Step 5: Crafting custom battery, heart & Wi-Fi icons",
        "desc": "The HD44780 has 64 bytes of Character Generator RAM (CGRAM), allowing you to define up to 8 completely custom 5×8 pixel icons! Design battery gauges, animated Pac-Man characters, temperature thermometer icons, or Wi-Fi signal strength bars.",
        "takeaways": [
          "Define custom icons using an array of 8 bytes (each byte = 1 row of 5 pixels)",
          "lcd.createChar(0, heartIcon); registers the icon in CGRAM slot 0",
          "lcd.write(0); prints your custom icon to the screen",
          "Animated icons created by cycling CGRAM slots in real-time"
        ],
        "tip": "Build a smooth animated battery gauge or water level tank by creating 5 custom vertical bar characters that fill from 1/5th to 5/5ths full!",
        "doodleLabel": "5x8 Pixel Heart & Battery CGRAM",
        "svgDoodle": """<svg viewBox="0 0 360 280" class="doodle-svg" xmlns="http://www.w3.org/2000/svg">
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
</svg>""",
        "annotations": [
          {"text": "Custom 5x8 pixel bitmask grid", "x": "15%", "y": "30%"},
          {"text": "Stored inside on-chip character generator RAM", "x": "40%", "y": "80%"}
        ]
      }
    ]
  },

  "dcmotor": {
    "id": "dcmotor",
    "name": "DC Motor & H-Bridge Driver",
    "shortName": "DC Motor",
    "level": "LEVEL 12",
    "reward": "Kinetic Overdrive Badge",
    "xp": 165,
    "steps": [
      {
        "stepNum": 1,
        "altitude": "Ground Level • Introduction",
        "title": "Electromagnetism in Motion",
        "subtitle": "Step 1: What is a DC Toy Motor?",
        "desc": "Direct Current (DC) motors convert electrical current into mechanical rotation using the fundamental Lorentz Force. Inside, permanent stator magnets create a magnetic field. When electric current flows through copper wire coils wound around the rotor, it generates an opposing magnetic field that forces the shaft to spin.",
        "takeaways": [
          "Lorentz force: F = I × L × B forces the rotor shaft to spin",
          "Commutator and copper brushes reverse current flow every half turn",
          "Rotational speed (RPM) is directly proportional to applied voltage",
          "Reversing electrical polarity reverses rotational direction instantly"
        ],
        "tip": "Never connect a DC motor directly to a microcontroller pin! A small toy motor draws 200mA to 1500mA (1.5 Amps when stalled), which will instantly fry a 20mA microcontroller GPIO pin.",
        "doodleLabel": "Internal Stator & Armature Anatomy",
        "svgDoodle": """<svg viewBox="0 0 360 280" class="doodle-svg" xmlns="http://www.w3.org/2000/svg">
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
</svg>""",
        "annotations": [
          {"text": "Spinning shaft delivers torque", "x": "70%", "y": "40%"},
          {"text": "Dual electrical power terminals", "x": "10%", "y": "30%"}
        ]
      },
      {
        "stepNum": 2,
        "altitude": "Low Atmosphere • Back-EMF Protection",
        "title": "The Back-EMF Voltage Spike",
        "subtitle": "Step 2: Why inductive coils create deadly reverse voltage",
        "desc": "A spinning motor is also an inductor storing energy in a magnetic field. When you suddenly switch the motor off, the magnetic field instantly collapses. According to Lenz's Law, this collapse induces a massive reverse voltage spike ('Flyback' or Back-EMF) reaching up to 50 to 100 Volts that can destroy driver transistors.",
        "takeaways": [
          "Inductive kickback: V = -L (di/dt) spikes when current abruptly stops",
          "Can produce negative voltage spikes exceeding 50+ Volts",
          "Flyback diodes placed across motor coils safely clamp voltage spikes",
          "Separate motor power rail prevents microcontroller brownouts"
        ],
        "tip": "Always solder a 0.1µF ceramic capacitor directly across the motor's metal terminal tabs! It absorbs high-frequency brush arcing noise that causes microcontroller resets.",
        "doodleLabel": "Flyback Clamping Diode",
        "svgDoodle": """<svg viewBox="0 0 360 280" class="doodle-svg" xmlns="http://www.w3.org/2000/svg">
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
</svg>""",
        "annotations": [
          {"text": "Flyback diode wired reverse-parallel", "x": "15%", "y": "40%"},
          {"text": "Inductive motor coil generates back-EMF", "x": "55%", "y": "40%"}
        ]
      },
      {
        "stepNum": 3,
        "altitude": "Mid Atmosphere • The H-Bridge",
        "title": "The H-Bridge Circuit Topology",
        "subtitle": "Step 3: Forward, Reverse & Dynamic Braking",
        "desc": "How do you reverse a motor electronically without manually swapping physical wires? You use an H-Bridge! Arranging 4 electronic switches (MOSFETs or BJTs) in the shape of the letter 'H' allows current to flow forward, reverse, freewheel, or lock in dynamic electronic braking.",
        "takeaways": [
          "Closing switches S1 + S4: Motor spins FORWARD",
          "Closing switches S2 + S3: Motor spins REVERSE",
          "Shoot-through danger: Closing S1 + S2 creates a direct short-circuit to GND",
          "Closing both low-side switches (S3 + S4) creates active regenerative braking"
        ],
        "tip": "Classic L298N drivers waste up to 2V as heat due to internal bipolar transistor drop. For modern battery projects, use MOSFET-based drivers like the TB6612FNG or DRV8833!",
        "doodleLabel": "H-Bridge 4-Switch Architecture",
        "svgDoodle": """<svg viewBox="0 0 360 280" class="doodle-svg" xmlns="http://www.w3.org/2000/svg">
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
</svg>""",
        "annotations": [
          {"text": "S1 + S4 Closed = Forward", "x": "15%", "y": "30%"},
          {"text": "S2 + S3 Closed = Reverse", "x": "60%", "y": "30%"}
        ]
      },
      {
        "stepNum": 4,
        "altitude": "High Stratosphere • PWM Speed Control",
        "title": "Speed Control via PWM Duty Cycle",
        "subtitle": "Step 4: Pulsing power at 1,000 to 20,000 Hz",
        "desc": "You cannot slow a DC motor down by simply adding a resistor — it wastes massive power as heat and kills starting torque. Instead, Pulse Width Modulation (PWM) switches full voltage ON and OFF thousands of times per second. Varying the 'Duty Cycle' controls effective torque and speed smoothly.",
        "takeaways": [
          "Duty Cycle = (Time ON ÷ Total Period) × 100%",
          "0% Duty = Stopped; 50% = Half Speed; 100% = Full Overdrive",
          "ESP32 uses ledcSetup() & ledcWrite() hardware PWM timers",
          "20 kHz PWM frequency moves motor switching beyond audible human hearing"
        ],
        "tip": "If your motor whines or buzzes at low speeds, increase the PWM carrier frequency to 20 kHz. Human ears can't hear 20 kHz, silencing the annoying acoustic buzz!",
        "doodleLabel": "PWM Duty Cycle Waveform",
        "svgDoodle": """<svg viewBox="0 0 360 280" class="doodle-svg" xmlns="http://www.w3.org/2000/svg">
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
</svg>""",
        "annotations": [
          {"text": "Short pulse = lower average motor current", "x": "15%", "y": "28%"},
          {"text": "Longer pulse = higher magnetic torque", "x": "15%", "y": "50%"}
        ]
      },
      {
        "stepNum": 5,
        "altitude": "Ionosphere • Cloud IoT Lab Quest",
        "title": "Wi-Fi Teleoperated Rover Bot",
        "subtitle": "Step 5: Differential drive robotics & web joystick control",
        "desc": "Combine two DC geared motors with an ESP32 and H-Bridge driver to assemble an autonomous rover. Spin the left motor forward and right motor reverse to perform a zero-radius spin turn, and control it from your browser over WebSockets!",
        "takeaways": [
          "Differential drive: Independent dual wheel velocity allows 360° skid steering",
          "Real-time WebSocket joystick dashboard hosted directly on ESP32",
          "Optical wheel encoders measure RPM and precise driving distance",
          "PID speed controller maintains straight paths across uneven carpet"
        ],
        "tip": "Always power motors from an independent battery pack (like a 2S 7.4V LiPo) and tie all Ground (GND) wires together. Never power motors from the ESP32 3.3V rail!",
        "doodleLabel": "Differential Drive Rover Bot",
        "svgDoodle": """<svg viewBox="0 0 360 280" class="doodle-svg" xmlns="http://www.w3.org/2000/svg">
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
</svg>""",
        "annotations": [
          {"text": "Dual high-torque gearmotors", "x": "10%", "y": "30%"},
          {"text": "Browser-based WebSocket control", "x": "35%", "y": "50%"}
        ]
      }
    ]
  }
}

print("Group 2 Data compiled successfully!")
