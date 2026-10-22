# -*- coding: utf-8 -*-
"""
Builder Quizzes for Levels 07 to 15:
- ultrasonic
- pir
- dht
- oled
- lcd
- dcmotor
- button
- jumper
- arduino
"""

ALL_NEW_QUIZZES = {
  "ultrasonic": {
    "title": "Ultrasonic Sensor Mastery Challenge",
    "kicker": "MODULE 07 CHECKPOINT QUIZ",
    "passScore": 7,
    "questions": [
      {
        "question": "What is the acoustic frequency emitted by the HC-SR04 ultrasonic transducer?",
        "options": [
          "1,000 Hz (audible high beep)",
          "40,000 Hz (40 kHz ultrasound)",
          "433 MHz radio frequency",
          "2.4 GHz microwave pulse"
        ],
        "correct": 1,
        "explanation": "The HC-SR04 generates a burst of eight 40 kHz ultrasound pulses, which is well above the human hearing limit of ~20 kHz."
      },
      {
        "question": "What is the official effective non-contact measurement range of the HC-SR04 sensor?",
        "options": [
          "1 millimeter to 10 centimeters",
          "2 centimeters to 400 centimeters (~13 feet)",
          "1 meter to 50 meters",
          "10 meters to 1 kilometer"
        ],
        "correct": 1,
        "explanation": "The HC-SR04 can reliably measure distances from 2 cm up to 400 cm with approximately 3 mm precision."
      },
      {
        "question": "How long must the microcontroller hold the TRIG pin HIGH to initiate an ultrasound measurement burst?",
        "options": [
          "At least 10 microseconds",
          "Exactly 50 milliseconds",
          "1 full second",
          "500 nanoseconds"
        ],
        "correct": 0,
        "explanation": "Providing a 10µs HIGH logic pulse on the TRIG pin commands the onboard processor to transmit the 8-cycle 40kHz sonic burst."
      },
      {
        "question": "What does the duration of the HIGH pulse output on the ECHO pin represent?",
        "options": [
          "The ambient air temperature",
          "The round-trip travel time of the sound wave",
          "The battery voltage remaining",
          "The surface roughness of the target"
        ],
        "correct": 1,
        "explanation": "The ECHO pin goes HIGH the moment sound is emitted and drops LOW when the echo reflection is received, so its duration equals total round-trip flight time."
      },
      {
        "question": "Why must you divide the travel time by 2 when computing distance using the speed of sound?",
        "options": [
          "Because sound travels twice as fast through air",
          "Because the sound wave travels out to the obstacle and then bounces back",
          "Because the sensor has dual silver cylinders",
          "Because 3.3V logic divides voltage in half"
        ],
        "correct": 1,
        "explanation": "The measured time covers the round-trip distance (out to target and back to receiver). Dividing by 2 isolates one-way distance."
      },
      {
        "question": "What is the speed of sound in air at standard room temperature (~20°C)?",
        "options": [
          "300,000,000 m/s (Speed of light)",
          "343 m/s (0.0343 cm/µs)",
          "1,500 m/s",
          "120 m/s"
        ],
        "correct": 1,
        "explanation": "Sound travels at approximately 343 m/s in dry air at 20°C, which translates to 0.0343 cm per microsecond (or 29.1 µs per cm)."
      },
      {
        "question": "Why should you use a resistor voltage divider when connecting the HC-SR04 ECHO pin to an ESP32?",
        "options": [
          "To increase the speed of sound",
          "Because the HC-SR04 outputs a 5V pulse, which could damage 3.3V ESP32 GPIO pins",
          "To invert the signal polarity",
          "To eliminate mechanical contact bounce"
        ],
        "correct": 1,
        "explanation": "The HC-SR04 ECHO pin outputs 5V logic. Stepping this down to ~3.3V with a 1kΩ / 2kΩ voltage divider protects the ESP32 input stage."
      },
      {
        "question": "Which of the following targets will produce the WEAKEST echo reflection for an ultrasonic sensor?",
        "options": [
          "A flat concrete wall",
          "A thick fluffy plush teddy bear or soft velvet curtain",
          "A smooth glass window",
          "A flat wooden door"
        ],
        "correct": 1,
        "explanation": "Soft fabrics, foam, and fur absorb high-frequency acoustic waves instead of bouncing them back, causing false maximum-distance or timeout readings."
      },
      {
        "question": "What is the approximate directional measuring angle (cone) of the HC-SR04 sensor?",
        "options": [
          "360 degrees omnidirectional",
          "180 degrees hemispherical",
          "Approximately 15 degrees",
          "1 degree laser-narrow"
        ],
        "correct": 2,
        "explanation": "The HC-SR04 has a measuring angle of roughly 15 degrees, making it directional while still detecting obstacles slightly off-axis."
      },
      {
        "question": "What does pulseIn(ECHO_PIN, HIGH, 30000) return if no obstacle reflects sound within 30ms?",
        "options": [
          "-1",
          "9999",
          "0",
          "Infinity"
        ],
        "correct": 2,
        "explanation": "Arduino's pulseIn() function returns 0 if the specified timeout duration (here 30,000 microseconds) elapses without a completed pulse."
      }
    ]
  },

  "pir": {
    "title": "PIR Motion Sensor Mastery Challenge",
    "kicker": "MODULE 08 CHECKPOINT QUIZ",
    "passScore": 7,
    "questions": [
      {
        "question": "What does the acronym 'PIR' stand for?",
        "options": [
          "Pulse Infrared Radar",
          "Passive Infrared",
          "Photo-Inductive Relay",
          "Proximity Integrated Radio"
        ],
        "correct": 1,
        "explanation": "PIR stands for Passive Infrared. 'Passive' indicates that the sensor emits no radiation of its own, only detecting ambient infrared energy."
      },
      {
        "question": "What wavelength of infrared radiation is emitted predominantly by human body heat?",
        "options": [
          "Near-infrared: 850 nm",
          "Mid-to-far infrared: roughly 9 to 10 micrometers (µm)",
          "Ultraviolet: 254 nm",
          "Visible green: 532 nm"
        ],
        "correct": 1,
        "explanation": "At normal human body temperatures (~37°C), thermal black-body radiation peaks in the long-wave infrared band around 9.4 micrometers."
      },
      {
        "question": "What is the primary function of the white faceted plastic dome (Fresnel lens) on the PIR sensor?",
        "options": [
          "It protects the electronics from rain and dust only",
          "It focuses infrared rays into multiple distinct detection zones across the room",
          "It amplifies 2.4 GHz Wi-Fi signals",
          "It glows in the dark to warn intruders"
        ],
        "correct": 1,
        "explanation": "The Fresnel lens acts as multiple condensing lenses, carving the environment into optical beams so movement creates alternating warm/cold pulses."
      },
      {
        "question": "Why does a PIR sensor contain TWO pyroelectric sensing elements wired in reverse-series?",
        "options": [
          "One acts as a backup in case the first one burns out",
          "To measure distance as well as direction",
          "To cancel out uniform temperature changes affecting the entire room at once",
          "To detect both positive and negative electric charges"
        ],
        "correct": 2,
        "explanation": "Dual differential elements cancel ambient environmental heating (sunlight, air conditioning) and only trigger when a warm source crosses from one slot to the other."
      },
      {
        "question": "What does setting the HC-SR501 mode jumper to 'H' (Repeatable Trigger) mode do?",
        "options": [
          "It disables the sensor completely",
          "It continuously resets the delay timer on every motion, keeping the output HIGH as long as motion persists",
          "It pulses the output ON and OFF 100 times per second",
          "It switches logic levels from 3.3V to 12V"
        ],
        "correct": 1,
        "explanation": "In 'H' mode, each detected motion resets the delay countdown, so the pin stays continuously HIGH as long as someone keeps moving."
      },
      {
        "question": "Why does a PIR sensor require a 30 to 60 second 'warm-up' period after power is turned on?",
        "options": [
          "To heat up internal filament bulbs",
          "To allow the pyroelectric crystals and amplifier circuit to adapt to ambient thermal baseline levels",
          "To charge up the internal Wi-Fi transmitter",
          "To download firmware updates from the internet"
        ],
        "correct": 1,
        "explanation": "During power-up, the sensor's high-gain analog amplifier stages must stabilize and establish their quiescent baseline relative to ambient IR noise."
      },
      {
        "question": "What is the typical output voltage level on the HC-SR501 OUT pin when motion is detected?",
        "options": [
          "12V DC",
          "5.0V DC",
          "3.3V DC High",
          "0.1V AC"
        ],
        "correct": 2,
        "explanation": "The HC-SR501 includes an onboard 3.3V regulator that powers the BISS0001 controller, so the OUT pin produces a safe 3.3V HIGH signal directly compatible with ESP32."
      },
      {
        "question": "Which of the following can cause FALSE triggers on a PIR motion sensor?",
        "options": [
          "Direct sunlight hitting the lens or sudden convective hot air drafts from heating vents",
          "A completely motionless rock sitting on a desk",
          "Ambient darkness with stable room temperature",
          "Whispering nearby"
        ],
        "correct": 0,
        "explanation": "Sudden changes in thermal radiation—such as direct sunlight patches moving across a floor or air conditioner blasts—can trigger differential temperature spikes."
      },
      {
        "question": "Why is attachInterrupt() preferred over a polling loop for reading a PIR sensor in battery IoT devices?",
        "options": [
          "It doubles the detection range of the sensor",
          "It allows the microcontroller to sleep in deep micro-power mode (<15µA) until motion actually occurs",
          "It converts the analog sensor into a camera",
          "It eliminates the need for a power supply"
        ],
        "correct": 1,
        "explanation": "Hardware interrupts wake up sleeping microcontrollers instantly, saving over 99% of battery power compared to continuously burning CPU cycles in loop()."
      },
      {
        "question": "What is the critical difference between motion detection (PIR) and human presence detection (mmWave radar)?",
        "options": [
          "PIR only detects moving warm bodies; a stationary person sitting quietly will eventually stop triggering PIR",
          "mmWave cannot detect humans through clothing",
          "PIR works through solid brick walls, while radar cannot",
          "There is no difference; they are identical technologies"
        ],
        "correct": 0,
        "explanation": "PIR relies on differential thermal changes across facets. If a person sits completely still reading or sleeping, PIR returns to LOW. mmWave radar detects micro-breathing."
      }
    ]
  },

  "dht": {
    "title": "DHT Sensor Mastery Challenge",
    "kicker": "MODULE 09 CHECKPOINT QUIZ",
    "passScore": 7,
    "questions": [
      {
        "question": "What two environmental metrics do DHT sensors measure simultaneously?",
        "options": [
          "Atmospheric pressure and altitude",
          "Relative Humidity (RH) and Ambient Temperature",
          "Carbon dioxide and carbon monoxide",
          "Soil moisture and sunlight lux"
        ],
        "correct": 1,
        "explanation": "DHT sensors contain both a humidity sensing component (capacitive or resistive) and an NTC thermistor for temperature."
      },
      {
        "question": "Which comparison between DHT11 and DHT22 is accurate?",
        "options": [
          "DHT11 has a wider temperature range (-40 to 80°C) than DHT22",
          "DHT22 provides higher accuracy (+/-2% RH, +/-0.5°C) and wider measurement ranges than DHT11",
          "DHT11 is white while DHT22 is always bright red",
          "DHT22 uses analog output while DHT11 is digital"
        ],
        "correct": 1,
        "explanation": "DHT22 (AM2302) is the precision variant, measuring -40 to 80°C and 0-100% RH with decimal precision, compared to DHT11's integer-only 0-50°C and 20-80% RH."
      },
      {
        "question": "How many total data bits are transmitted in one complete DHT data frame?",
        "options": [
          "8 bits (1 byte)",
          "16 bits (2 bytes)",
          "40 bits (5 bytes)",
          "64 bits (8 bytes)"
        ],
        "correct": 2,
        "explanation": "A DHT transmission consists of exactly 40 bits (5 bytes): 2 bytes for humidity, 2 bytes for temperature, and 1 byte for checksum."
      },
      {
        "question": "What value of pull-up resistor is typically required between VCC and the DHT single-bus DATA line?",
        "options": [
          "10 Ohms",
          "4.7kΩ to 10kΩ",
          "1 Megaohm",
          "Zero (direct short)"
        ],
        "correct": 1,
        "explanation": "A 4.7kΩ to 10kΩ pull-up resistor keeps the bidirectional data line held HIGH during idle periods and between bit pulses."
      },
      {
        "question": "How does the DHT sensor encode a binary '1' bit versus a binary '0' bit on the data wire?",
        "options": [
          "By changing voltage from 3.3V to 5V",
          "By the duration of the HIGH pulse: ~26-28µs for '0', and ~70µs for '1'",
          "By switching radio frequencies",
          "By sending alternating positive and negative voltages"
        ],
        "correct": 1,
        "explanation": "Every bit starts with a 50µs LOW pulse. If the following HIGH pulse is short (~26-28µs), it represents '0'; if long (~70µs), it represents '1'."
      },
      {
        "question": "How is the 8-bit checksum verified at the end of a DHT packet transmission?",
        "options": [
          "Checksum must equal Byte 1 + Byte 2 + Byte 3 + Byte 4 (lowest 8 bits)",
          "Checksum must always equal 0xFF",
          "Checksum is calculated using an MD5 hash",
          "Checksum must equal the temperature multiplied by humidity"
        ],
        "correct": 0,
        "explanation": "The 5th byte (checksum) must equal the 8-bit sum of the preceding 4 bytes: (Humidity_Int + Humidity_Dec + Temp_Int + Temp_Dec) & 0xFF."
      },
      {
        "question": "What is the maximum recommended sampling frequency for a DHT22 sensor?",
        "options": [
          "10,000 times per second (10 kHz)",
          "100 times per second",
          "Once every 2 seconds (0.5 Hz)",
          "Once every 24 hours"
        ],
        "correct": 2,
        "explanation": "The humidity sensing element requires time to re-equilibrate with atmospheric moisture; polling faster than every 2 seconds returns stale data or errors."
      },
      {
        "question": "In Arduino C++, what does isnan(temperature) check for after calling dht.readTemperature()?",
        "options": [
          "Checks if temperature is negative",
          "Checks if the returned value is 'Not a Number', indicating a read failure or loose wire",
          "Checks if temperature is in Fahrenheit",
          "Checks if temperature reached boiling point"
        ],
        "correct": 1,
        "explanation": "isnan() (Is Not a Number) returns true when the sensor fails to acknowledge or the checksum is corrupted, signaling a bad read."
      },
      {
        "question": "On a bare 4-pin DHT sensor, what is pin 3 typically used for?",
        "options": [
          "Analog voltage output",
          "Reset signal line",
          "No Connection (NC / Unused)",
          "External clock input"
        ],
        "correct": 2,
        "explanation": "Standard 4-pin DHT packages have: Pin 1 = VCC, Pin 2 = DATA, Pin 3 = NC (No Connection), Pin 4 = GND."
      },
      {
        "question": "Why is Vapor Pressure Deficit (VPD) calculated from temperature and humidity in agricultural IoT?",
        "options": [
          "To estimate wind speed inside the greenhouse",
          "To measure the drying power of the air and optimize plant transpiration rates",
          "To forecast thunderstorm lightning strikes",
          "To determine soil nitrogen levels"
        ],
        "correct": 1,
        "explanation": "VPD combines temperature and relative humidity to measure the difference between moisture in saturated air vs ambient air, directly driving plant transpiration."
      }
    ]
  },

  "oled": {
    "title": "0.96\" I2C OLED Display Mastery Challenge",
    "kicker": "MODULE 10 CHECKPOINT QUIZ",
    "passScore": 7,
    "questions": [
      {
        "question": "What does 'OLED' stand for and why doesn't it need a separate backlight?",
        "options": [
          "Optical Light Emitting Diode; it uses miniature fluorescent tubes",
          "Organic Light Emitting Diode; every individual pixel produces its own light when electrified",
          "Oscillating Liquid Electronic Display; it reflects ambient sunlight",
          "Overclocked LED; it uses laser diodes"
        ],
        "correct": 1,
        "explanation": "OLED stands for Organic Light Emitting Diode. Because each organic pixel emits its own light, black pixels produce zero light and consume zero power."
      },
      {
        "question": "What is the native pixel resolution of the standard 0.96-inch monochrome OLED display?",
        "options": [
          "16 × 2 characters",
          "128 columns × 64 rows (8,192 pixels)",
          "320 × 240 pixels",
          "1920 × 1080 Full HD"
        ],
        "correct": 1,
        "explanation": "The standard 0.96\" monochrome display features a 128x64 matrix, totaling 8,192 addressable pixels."
      },
      {
        "question": "How much RAM does a monochrome 128x64 display require for a complete local framebuffer?",
        "options": [
          "64 kilobytes",
          "1,024 bytes (1 KB)",
          "8,192 bytes",
          "16 megabytes"
        ],
        "correct": 1,
        "explanation": "128 × 64 = 8,192 pixels. Because it is monochrome (1 bit per pixel), 8,192 ÷ 8 bits/byte = exactly 1,024 bytes (1 KB)."
      },
      {
        "question": "What is the common default 7-bit I2C address for SSD1306 OLED display modules?",
        "options": [
          "0x00",
          "0x3C (or 0x3D)",
          "0x7F",
          "0xFF"
        ],
        "correct": 1,
        "explanation": "Most SSD1306 breakout boards default to 7-bit I2C address 0x3C, selectable to 0x3D by resoldering an address resistor on the back."
      },
      {
        "question": "What are the names and functions of the two I2C communication wires?",
        "options": [
          "TX (Transmit) and RX (Receive)",
          "MOSI (Master Out) and MISO (Master In)",
          "SDA (Serial Data) and SCL (Serial Clock)",
          "D+ and D- (USB Data)"
        ],
        "correct": 2,
        "explanation": "I2C uses SDA (Serial Data) to transfer data bits bidirectionally and SCL (Serial Clock) driven by the master to synchronize timing."
      },
      {
        "question": "In the Adafruit_SSD1306 library, when do changes actually appear on the glass screen?",
        "options": [
          "Immediately when calling drawPixel() or print()",
          "Only after calling display.display(), which flushes the RAM framebuffer over I2C",
          "Only when the microcontroller resets",
          "After calling delay(1000)"
        ],
        "correct": 1,
        "explanation": "Drawing commands write to the local RAM framebuffer. Nothing changes on screen until display.display() sends the 1,024 bytes over I2C."
      },
      {
        "question": "How is display memory structured inside the SSD1306 graphics controller?",
        "options": [
          "A single continuous linear array of 8,192 integers",
          "8 horizontal pages (Page 0 to 7), each 8 pixels tall and 128 columns wide",
          "64 vertical strips of 128 bytes",
          "A 3D voxel grid"
        ],
        "correct": 1,
        "explanation": "The GDDRAM is arranged into 8 pages (each 8 pixels tall). Each byte represents a vertical strip of 8 pixels in a column."
      },
      {
        "question": "What power advantage does an OLED display have over a backlit LCD screen?",
        "options": [
          "OLED displays can generate electricity from ambient room light",
          "Displaying predominantly black screens turns off pixels, drawing minimal current (~8-10mA)",
          "OLEDs operate at 0 Volts",
          "OLEDs never consume any battery power"
        ],
        "correct": 1,
        "explanation": "Unlike LCDs where the backlight constantly draws 20-50mA regardless of content, black pixels on an OLED draw zero current."
      },
      {
        "question": "What technique should you implement in software to prevent OLED 'burn-in' on 24/7 IoT monitors?",
        "options": [
          "Display static bright white text forever",
          "Implement a screen saver, pixel shifting, or periodically invert display colors",
          "Increase the voltage to 12V",
          "Clean the screen with alcohol daily"
        ],
        "correct": 1,
        "explanation": "Organic diodes degrade with accumulated runtime. Shifting UI positions, dimming brightness, or inverting colors prevents uneven pixel wear."
      },
      {
        "question": "What tool or format is typically used to convert bitmap images for display with drawBitmap()?",
        "options": [
          "MP3 audio files",
          "C byte arrays representing binary pixel bitmasks (using tools like image2cpp)",
          "PDF documents",
          "Raw MP4 video containers"
        ],
        "correct": 1,
        "explanation": "Monochrome graphics are converted into C byte arrays (e.g. `const unsigned char my_logo[] PROGMEM = {...}`) using bitmap converters like image2cpp."
      }
    ]
  },

  "lcd": {
    "title": "16x2 Character LCD Mastery Challenge",
    "kicker": "MODULE 11 CHECKPOINT QUIZ",
    "passScore": 7,
    "questions": [
      {
        "question": "What does '16x2' signify regarding a character LCD display?",
        "options": [
          "16 millimeters wide by 2 millimeters tall",
          "16 horizontal columns by 2 vertical rows (32 characters total)",
          "16 Volts power input with 2 grounds",
          "16 colors with 2 grayscale levels"
        ],
        "correct": 1,
        "explanation": "A 16x2 LCD displays two lines of text with up to 16 alphanumeric characters on each line, accommodating 32 characters simultaneously."
      },
      {
        "question": "What industry-standard controller protocol is used in virtually all alphanumeric LCD displays?",
        "options": [
          "Hitachi HD44780",
          "Intel Core i7",
          "ARM Cortex-M4",
          "Nvidia Tegra"
        ],
        "correct": 0,
        "explanation": "The Hitachi HD44780 controller set the de facto worldwide standard for alphanumeric character LCD instruction sets and timing."
      },
      {
        "question": "What pixel grid dimension makes up each individual character cell on a 16x2 LCD?",
        "options": [
          "3 × 3 pixels",
          "5 × 8 pixels (or 5 × 10 in some modes)",
          "64 × 64 pixels",
          "128 × 128 pixels"
        ],
        "correct": 1,
        "explanation": "Each alphanumeric character is rendered within a dot matrix of 5 columns by 8 rows of liquid crystal segments."
      },
      {
        "question": "What is the role of the PCF8574 chip mounted on the black I2C backpack board?",
        "options": [
          "It acts as an 8-bit I/O expander, translating I2C commands into parallel LCD control signals",
          "It is a Wi-Fi modem",
          "It boosts the voltage to 220V AC",
          "It serves as an audio synthesizer"
        ],
        "correct": 0,
        "explanation": "The PCF8574 takes 2-wire I2C commands and expands them into 8 parallel output pins driving RS, EN, and data lines D4-D7 on the LCD."
      },
      {
        "question": "What should you do if the LCD backlight turns on, but only solid white or black rectangles appear with no letters?",
        "options": [
          "Throw the display in the trash",
          "Adjust the small blue contrast potentiometer on the back of the I2C backpack using a screwdriver",
          "Connect the display to a 240V wall socket",
          "Change the code language to Python"
        ],
        "correct": 1,
        "explanation": "The contrast voltage (VO) sets liquid crystal alignment. Adjusting the blue trimpot tunes contrast until letters become sharply visible."
      },
      {
        "question": "What are the two most common default I2C addresses for PCF8574 LCD backpacks?",
        "options": [
          "0x00 and 0x01",
          "0x27 (PCF8574T) and 0x3F (PCF8574AT)",
          "0xAA and 0xBB",
          "0x10 and 0x20"
        ],
        "correct": 1,
        "explanation": "Backpacks using the PCF8574T chip default to address 0x27, while those using the PCF8574AT variant default to 0x3F."
      },
      {
        "question": "Why does calling lcd.clear() continuously inside loop() cause undesirable behavior?",
        "options": [
          "It permanently erases the microcontroller flash memory",
          "It takes up to 2 milliseconds and causes visible display flicker and jitter",
          "It blows out the LCD backlight LED",
          "It crashes the I2C bus permanently"
        ],
        "correct": 1,
        "explanation": "lcd.clear() is a slow instruction. Clearing and rewriting every frame creates jarring screen flicker. Instead, overwrite text with padded spaces."
      },
      {
        "question": "What is CGRAM on the HD44780 controller, and how many custom characters can you create?",
        "options": [
          "Character Generator RAM; it allows creating up to 8 custom 5x8 pixel icons",
          "Cloud Graphics RAM; holds 100 images downloaded from the internet",
          "Central Gaming RAM; runs 3D video games",
          "Capacitive Ground RAM; stores static electricity"
        ],
        "correct": 0,
        "explanation": "CGRAM has 64 bytes of memory, allowing programmers to define up to 8 user-created 5x8 pixel bitmap glyphs (battery icons, hearts, symbols)."
      },
      {
        "question": "How are column and row coordinates indexed in lcd.setCursor(col, row)?",
        "options": [
          "1-indexed: Row 1 is top, Row 2 is bottom",
          "0-indexed: (0, 0) is top-left, (0, 1) is bottom-left, (15, 1) is bottom-right",
          "Randomly assigned",
          "Cartesian coordinates with (0,0) in the center"
        ],
        "correct": 1,
        "explanation": "Coordinates are 0-indexed: columns 0 to 15, and rows 0 (top line) to 1 (bottom line)."
      },
      {
        "question": "What happens if you remove the physical black plastic jumper clip on the I2C backpack?",
        "options": [
          "The I2C address changes",
          "The LED backlight power is disconnected (turning off screen illumination)",
          "The display switches from 5V to 3.3V",
          "The screen changes from English to Japanese"
        ],
        "correct": 1,
        "explanation": "The 2-pin jumper header bridges power to the LED backlight. Removing it turns off the backlight, saving power in battery setups."
      }
    ]
  },

  "dcmotor": {
    "title": "DC Motor & H-Bridge Driver Mastery Challenge",
    "kicker": "MODULE 12 CHECKPOINT QUIZ",
    "passScore": 7,
    "questions": [
      {
        "question": "What fundamental physical principle causes a DC motor armature to rotate?",
        "options": [
          "Bernoulli's aerodynamic lift",
          "The Lorentz Force acting on current-carrying conductors inside a magnetic field",
          "Electrostatic friction between plastic gears",
          "Thermal expansion of copper wires"
        ],
        "correct": 1,
        "explanation": "When electrical current passes through copper coils in a magnetic field, the Lorentz force (F = I × L × B) generates rotational torque on the rotor."
      },
      {
        "question": "Why should you NEVER connect a DC motor directly to a microcontroller GPIO pin?",
        "options": [
          "Microcontrollers only work with AC motors",
          "DC motors draw hundreds of milliamps to several amps, far exceeding a GPIO pin's ~20mA limit, which will destroy the microcontroller",
          "DC motors spin backwards on microcontrollers",
          "GPIO pins cannot output digital logic"
        ],
        "correct": 1,
        "explanation": "A GPIO pin can only safely source 20mA to 40mA. Even small hobby motors draw 200mA to 1.5A under load or stall, frying the microcontroller output silicon."
      },
      {
        "question": "What is 'Back-EMF' (Flyback voltage) generated by a spinning DC motor when turned off?",
        "options": [
          "A radio frequency transmission",
          "A massive reverse voltage spike produced by the collapsing magnetic field of inductive motor coils",
          "A cooling breeze produced by the motor shaft",
          "A signal that synchronizes clocks"
        ],
        "correct": 1,
        "explanation": "According to Lenz's law, when current to an inductor suddenly stops, the collapsing magnetic field induces a reverse high-voltage spike (often 50V+) that can blow transistors."
      },
      {
        "question": "What component is wired in reverse-parallel across a motor to clamp inductive spikes safely?",
        "options": [
          "A flyback (freewheeling) diode",
          "A quartz crystal oscillator",
          "A thermistor",
          "A transformer"
        ],
        "correct": 0,
        "explanation": "A flyback diode conducts when the reverse inductive spike occurs, recirculating the energy safely back through the coil and clamping voltage spikes."
      },
      {
        "question": "What is the primary function of an H-Bridge circuit?",
        "options": [
          "To measure motor temperature",
          "To allow bidirectional motor control (forward and reverse) and dynamic braking using 4 solid-state switches",
          "To convert DC voltage into 240V AC mains",
          "To count motor revolutions"
        ],
        "correct": 1,
        "explanation": "An H-bridge arranges 4 switches around a motor, allowing current to flow in either direction through the armature to spin it forward or reverse."
      },
      {
        "question": "What dangerous condition occurs if high-side and low-side switches on the same side of an H-bridge close simultaneously?",
        "options": [
          "The motor spins at double speed",
          "Shoot-through: A catastrophic direct short-circuit between VCC and Ground that can destroy the driver",
          "The motor turns into an electric generator",
          "The power rail voltage doubles"
        ],
        "correct": 1,
        "explanation": "'Shoot-through' creates an unrestricted dead short between power and ground across the transistors, causing excessive current, smoke, and component failure."
      },
      {
        "question": "How is rotational speed controlled efficiently without wasting massive power as resistor heat?",
        "options": [
          "By adding series resistors to drop voltage",
          "Using Pulse Width Modulation (PWM) to switch full voltage ON and OFF rapidly, varying the duty cycle",
          "By tightening mechanical brake screws",
          "By cooling the motor with ice"
        ],
        "correct": 1,
        "explanation": "PWM rapidly switches power ON and OFF thousands of times per second. Varying the Duty Cycle controls average current and torque with high electrical efficiency."
      },
      {
        "question": "What does a 75% PWM Duty Cycle signify?",
        "options": [
          "The motor will only turn for 75 seconds",
          "The signal is HIGH for 75% of each waveform period and LOW for 25%",
          "The motor has 75 internal coils",
          "The voltage is multiplied by 75"
        ],
        "correct": 1,
        "explanation": "Duty cycle is the percentage of time a digital pulse stays in the active HIGH state during each complete cycle."
      },
      {
        "question": "Why does a 0.1µF ceramic capacitor soldered across the motor terminals improve circuit stability?",
        "options": [
          "It acts as a battery to power the motor during power outages",
          "It filters out high-frequency electrical brush arcing noise that can reset microcontrollers",
          "It makes the motor spin twice as fast",
          "It changes motor rotation direction"
        ],
        "correct": 1,
        "explanation": "Mechanical commutator brushes create tiny electrical sparks that radiate broadband RF noise. A 0.1µF capacitor shunts this noise directly to ground."
      },
      {
        "question": "What is the 'Stall Current' of a DC motor?",
        "options": [
          "The current drawn when the motor is completely unplugged",
          "The maximum current drawn when the motor shaft is held completely locked from spinning under full voltage",
          "The current consumed when the motor is freewheeling in neutral",
          "The current drawn by the cooling fan"
        ],
        "correct": 1,
        "explanation": "When locked, back-EMF is zero and current is limited solely by coil wire resistance, resulting in maximum current draw (often 5× to 10× running current)."
      }
    ]
  },

  "button": {
    "title": "Tactile Push Button Mastery Challenge",
    "kicker": "MODULE 13 CHECKPOINT QUIZ",
    "passScore": 7,
    "questions": [
      {
        "question": "What mechanical switch type describes a standard tactile push button?",
        "options": [
          "Normally Closed (NC) latching switch",
          "Normally Open (NO) momentary switch",
          "Rotary selector switch",
          "Mercury tilt switch"
        ],
        "correct": 1,
        "explanation": "Tactile buttons are normally open (contacts disconnected). Pressing down momentarily bridges the contacts; releasing lets the internal dome spring back."
      },
      {
        "question": "What happens if you connect a microcontroller input pin to a button with NO pull-up or pull-down resistor?",
        "options": [
          "The microcontroller functions perfectly",
          "The pin floats, picking up electromagnetic noise and randomly reading 0s and 1s",
          "The pin permanently burns out",
          "The button catches fire"
        ],
        "correct": 1,
        "explanation": "High-impedance inputs act like antennas when disconnected ('floating'), randomly oscillating between HIGH and LOW due to stray static and radio noise."
      },
      {
        "question": "In an Active-LOW button configuration with a pull-up resistor, what logic level is read when the button is PRESSED?",
        "options": [
          "HIGH (3.3V or 5V)",
          "LOW (0V / Ground)",
          "Analog 512",
          "High-Impedance"
        ],
        "correct": 1,
        "explanation": "The pull-up resistor holds the pin HIGH when unpressed. Pressing the button bridges the pin directly to Ground, pulling it LOW."
      },
      {
        "question": "What Arduino pinMode() mode enables the built-in internal pull-up resistor inside the microcontroller?",
        "options": [
          "pinMode(pin, INPUT);",
          "pinMode(pin, INPUT_PULLUP);",
          "pinMode(pin, OUTPUT_PULLUP);",
          "pinMode(pin, RESISTOR_ON);"
        ],
        "correct": 1,
        "explanation": "INPUT_PULLUP configures the GPIO pin as an input and connects an internal ~20k-50kΩ pull-up resistor to VCC, eliminating external resistors."
      },
      {
        "question": "What causes the 'contact bounce' phenomenon in physical switches?",
        "options": [
          "Electrons bouncing off copper atoms",
          "The elastic metal snap dome physically vibrating and chattering against the contact pads for 5 to 20 milliseconds upon impact",
          "Software bugs in the operating system",
          "Weak batteries"
        ],
        "correct": 1,
        "explanation": "When mechanical contacts slam together, elasticity causes microscopic bouncing for 5-20ms, producing dozens of rapid electrical transitions."
      },
      {
        "question": "What consequence occurs if you run a click counter sketch without debouncing?",
        "options": [
          "The button will refuse to click",
          "A single button press can register as 5, 10, or 20 distinct button clicks",
          "The counter will run backwards",
          "The microcontroller clock speed drops"
        ],
        "correct": 1,
        "explanation": "Because microcontrollers execute millions of instructions per second, every single mechanical bounce is detected as a separate click."
      },
      {
        "question": "Why is software debouncing using millis() preferred over using delay(50)?",
        "options": [
          "millis() makes the code run faster than the speed of light",
          "delay(50) freezes the entire microcontroller CPU, preventing it from handling Wi-Fi, sensors, and displays while waiting",
          "millis() eliminates the need for a button",
          "delay(50) consumes 100 times more battery power"
        ],
        "correct": 1,
        "explanation": "millis() allows non-blocking asynchronous timing. The CPU continues running other background tasks while tracking debounce elapsed time."
      },
      {
        "question": "What hardware circuit combination can perform passive hardware debouncing without software code?",
        "options": [
          "A transformer and fuse",
          "An RC low-pass filter (resistor + capacitor) paired with a Schmitt-trigger buffer",
          "A crystal oscillator and inductor",
          "A bridge rectifier"
        ],
        "correct": 1,
        "explanation": "An RC filter smooths rapid chatter pulses into a gradual analog slope, while a Schmitt trigger with hysteresis squares the signal into clean digital edges."
      },
      {
        "question": "How are the 4 legs of a standard 6x6mm tactile button connected internally?",
        "options": [
          "All 4 legs are isolated until pressed",
          "Opposite pairs of pins on each side are permanently connected in parallel internally",
          "Leg 1 is power, Leg 2 is ground, Leg 3 is signal, Leg 4 is clock",
          "The legs are purely decorative"
        ],
        "correct": 1,
        "explanation": "A standard 4-pin switch has two pairs of internally joined pins. Wiring diagonally across opposite corners guarantees you bridge the switch contacts."
      },
      {
        "question": "How do IoT devices distinguish between a 'single click' and a 'long press'?",
        "options": [
          "By measuring the physical force applied to the plastic cap",
          "By measuring how many milliseconds the button input remains continuously LOW",
          "By detecting user fingerprints",
          "By checking the ambient room temperature"
        ],
        "correct": 1,
        "explanation": "Software records the timestamp when the pin drops LOW and compares it when released: <500ms is a click, while >3000ms is a long-press hold."
      }
    ]
  },

  "jumper": {
    "title": "Jumper Wires & Power Distribution Mastery Challenge",
    "kicker": "MODULE 14 CHECKPOINT QUIZ",
    "passScore": 7,
    "questions": [
      {
        "question": "What is the standard pin pitch spacing of Dupont connector jumper wires and breadboards?",
        "options": [
          "1.00 mm pitch",
          "2.54 mm (0.1 inch) pitch",
          "5.08 mm pitch",
          "10.0 mm pitch"
        ],
        "correct": 1,
        "explanation": "Standard breadboard tie-points, IC pin sockets, and Dupont connectors use 2.54mm (0.1 inch) center-to-center pitch."
      },
      {
        "question": "Which jumper wire configuration is required to connect an ESP32 dev board with pin headers to a sensor with male pin headers?",
        "options": [
          "Male-to-Male (M-M)",
          "Female-to-Female (F-F)",
          "Male-to-Female (M-F)",
          "Bare unstripped wire"
        ],
        "correct": 1,
        "explanation": "Connecting two male header pins directly together requires a Female-to-Female (F-F) jumper wire."
      },
      {
        "question": "According to universal electronics conventions, what wire color MUST represent Ground (0V return)?",
        "options": [
          "Bright Red",
          "Black (or Dark Blue in DC circuits)",
          "Yellow",
          "White"
        ],
        "correct": 1,
        "explanation": "Black is standard for Ground (0V return path). Red universally designates positive supply (+VCC)."
      },
      {
        "question": "What hidden trap is present on many full-sized 830-point breadboards?",
        "options": [
          "The breadboard secretly reverses electrical polarity",
          "The long side power rails (+ and -) are physically broken into two isolated halves at the center midline",
          "All rows are shorted to ground",
          "The plastic conducts 50 Volts"
        ],
        "correct": 1,
        "explanation": "Full-size breadboards frequently sever power buses at the center line. Devices plugged into the right half receive no power unless bridged with jumpers."
      },
      {
        "question": "Why can thin, high-gauge (e.g. 28 AWG) jumper wires cause intermittent ESP32 Wi-Fi crashes?",
        "options": [
          "Thin wires block radio frequency signals",
          "Resistance in thin wires causes a significant voltage drop during high-current Wi-Fi transmit bursts (up to 500mA), triggering brownout resets",
          "Thin wires run too hot and melt breadboard clips",
          "Thin wires reverse logic 1 and 0"
        ],
        "correct": 1,
        "explanation": "High-resistance wires drop voltage under heavy current (V = I × R). When the ESP32 radio bursts, voltage dips below the reset threshold, rebooting the chip."
      },
      {
        "question": "What is the primary advantage of multi-strand core wire compared to solid-core wire for breadboard patch cables?",
        "options": [
          "Stranded wire is completely immune to electrical noise",
          "Stranded wire is highly flexible and withstands thousands of repeated bends without breaking inside the insulation",
          "Stranded wire has zero electrical resistance",
          "Stranded wire can carry 100 Amps"
        ],
        "correct": 1,
        "explanation": "Multiple thin twisted copper strands provide high mechanical flexibility and fatigue resistance, preventing internal fractures from repeated bending."
      },
      {
        "question": "Why is 'Common Ground' (connecting all GND wires together) mandatory in multi-supply circuits?",
        "options": [
          "To prevent the power supply from overheating",
          "To provide a shared zero-volt reference point so digital signals can be interpreted consistently across components",
          "To double the total battery capacity",
          "To eliminate the need for signal wires"
        ],
        "correct": 1,
        "explanation": "Voltage is relative. Without a shared Ground return path, microcontrollers cannot measure or interpret incoming signal voltages from external sensors."
      },
      {
        "question": "What wire routing practice minimizes mutual electromagnetic crosstalk and parasitic capacitance?",
        "options": [
          "Creating a messy bird's nest of high airborne looping wires",
          "Routing wires flat along breadboard channels at 90-degree angles and keeping leads as short as practical",
          "Coiling wires into giant tight spirals",
          "Stripping all insulation off wires"
        ],
        "correct": 1,
        "explanation": "Flat, concise routing close to the ground plane reduces inductive loop area and prevents wires from acting as broadcast antennas for RF noise."
      },
      {
        "question": "Why does twisting power and ground wires together reduce electromagnetic interference (EMI)?",
        "options": [
          "It increases wire resistance to absorb noise",
          "Opposing currents in power and return conductors generate equal and opposite magnetic fields that cancel each other out",
          "It creates an impromptu antenna for Wi-Fi",
          "Twisting doubles the wire insulation thickness"
        ],
        "correct": 1,
        "explanation": "Equal currents flowing in opposite directions through twisted pairs generate cancelling magnetic fields, dramatically suppressing radiated noise."
      },
      {
        "question": "What is the best diagnostic tool to verify that breadboard power rails and jumper wires have solid electrical continuity?",
        "options": [
          "A digital multimeter set to Continuity (Audible Beep) or low Resistance (Ω) mode",
          "An infrared thermometer",
          "A magnifying glass",
          "A magnetic compass"
        ],
        "correct": 0,
        "explanation": "A multimeter's continuity buzzer sounds instantly when a continuous electrical path exists, pinpointing loose crimps or split breadboard rail gaps."
      }
    ]
  },

  "arduino": {
    "title": "Arduino Uno R3 Microcontroller Mastery Challenge",
    "kicker": "MODULE 15 CHECKPOINT QUIZ",
    "passScore": 7,
    "questions": [
      {
        "question": "What microcontroller chip serves as the central brain of the Arduino Uno R3?",
        "options": [
          "Microchip / Atmel ATmega328P (8-bit AVR architecture)",
          "Espressif ESP32 dual-core",
          "Raspberry Pi RP2040",
          "Motorola 68000"
        ],
        "correct": 0,
        "explanation": "The Arduino Uno R3 is built around the ATmega328P 8-bit AVR microcontroller in a DIP-28 or TQFP package."
      },
      {
        "question": "What is the system clock frequency of the crystal oscillator on the Arduino Uno R3?",
        "options": [
          "1.0 MHz",
          "16.0 MHz",
          "240.0 MHz",
          "3.2 GHz"
        ],
        "correct": 1,
        "explanation": "The standard Arduino Uno R3 operates with an external 16 MHz quartz crystal oscillator."
      },
      {
        "question": "What is the native operating logic voltage of the Arduino Uno R3 I/O pins?",
        "options": [
          "1.8 Volts",
          "3.3 Volts",
          "5.0 Volts",
          "12.0 Volts"
        ],
        "correct": 2,
        "explanation": "The Uno operates natively at 5.0V TTL logic, making it rugged and capable of interfacing directly with 5V sensors and relays."
      },
      {
        "question": "How many total Digital I/O pins and Analog Input pins does the Uno provide?",
        "options": [
          "4 Digital and 2 Analog",
          "14 Digital I/O pins (0 to 13) and 6 Analog inputs (A0 to A5)",
          "32 Digital and 16 Analog",
          "100 pins total"
        ],
        "correct": 1,
        "explanation": "The Uno exposes 14 digital pins (0-13, with 6 supporting PWM) and 6 analog input pins (A0-A5)."
      },
      {
        "question": "What is the resolution of the Uno's built-in Analog-to-Digital Converter (ADC)?",
        "options": [
          "8-bit (values 0 to 255)",
          "10-bit (values 0 to 1023)",
          "12-bit (values 0 to 4095)",
          "16-bit (values 0 to 65535)"
        ],
        "correct": 1,
        "explanation": "The ATmega328P integrated SAR ADC has 10-bit resolution, translating 0V to 5V inputs into numerical integers from 0 to 1023."
      },
      {
        "question": "Which digital pins on the Arduino Uno support 8-bit hardware Pulse Width Modulation (PWM)?",
        "options": [
          "All 14 pins support PWM",
          "Pins marked with a tilde (~): 3, 5, 6, 9, 10, and 11",
          "Only pins 0 and 1",
          "Only pin 13"
        ],
        "correct": 1,
        "explanation": "Six digital pins (~3, ~5, ~6, ~9, ~10, and ~11) connect to internal 8-bit hardware timers that generate PWM signals via analogWrite()."
      },
      {
        "question": "What fundamental lifecycle functions must every Arduino C++ sketch contain?",
        "options": [
          "start() and stop()",
          "setup() (runs once on power-up) and loop() (repeats continuously forever)",
          "main() and exit()",
          "init() and destroy()"
        ],
        "correct": 1,
        "explanation": "The Arduino framework requires setup() to configure hardware once, and loop() to execute repeatedly until power is removed."
      },
      {
        "question": "What is the function of the 'Optiboot' bootloader stored in high flash memory?",
        "options": [
          "It connects the Uno to Wi-Fi networks",
          "It receives compiled machine code over USB/serial and flashes it into program memory without an external hardware programmer",
          "It formats the computer's hard drive",
          "It acts as a graphical user interface"
        ],
        "correct": 1,
        "explanation": "Optiboot is a 512-byte bootloader that intercepts serial data after auto-reset and writes new user firmware directly into flash memory."
      },
      {
        "question": "Why shouldn't you connect sensors or switches to pins 0 and 1 while uploading code to the Uno?",
        "options": [
          "Pins 0 and 1 carry 220V dangerous voltage",
          "Pins 0 (RX) and 1 (TX) are directly wired to the USB-to-Serial chip used for code flashing and debugging",
          "Pins 0 and 1 only work on Tuesdays",
          "Pins 0 and 1 are non-functional dummy pins"
        ],
        "correct": 1,
        "explanation": "Pins 0 (RX) and 1 (TX) share hardware connections with the ATmega16U2 USB interface. External devices can disrupt serial flashing."
      },
      {
        "question": "When pairing an Arduino Uno (5V) with an ESP32 (3.3V) over UART, what must be placed on the Uno's TX line?",
        "options": [
          "A step-up transformer to 12V",
          "A voltage divider or level shifter to safely step down the 5V TX signal to 3.3V for the ESP32 RX pin",
          "A 10-amp fuse",
          "A sound buzzer"
        ],
        "correct": 1,
        "explanation": "The Uno outputs 5V signals, but the ESP32 is a 3.3V device. Stepping Uno TX down with a 1kΩ/2kΩ divider prevents frying the ESP32 input."
      }
    ]
  }
}

print("All 9 New Quizzes compiled successfully!")
