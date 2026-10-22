// 10 Comprehensive Questions for Each of the 6 IoT Modules
const moduleQuizzes = {
  esp32: {
    title: 'ESP32 Silicon Mastery Challenge',
    kicker: 'MODULE 01 CHECKPOINT QUIZ',
    passScore: 7,
    questions: [
      {
        question: 'What is the primary microcontroller architecture and maximum clock frequency of the standard ESP32?',
        options: [
          'Dual-core Xtensa 32-bit LX6 running up to 240 MHz',
          'Single-core ARM Cortex-M0+ running at 48 MHz',
          'Quad-core RISC-V running at 1.2 GHz',
          '8-bit AVR architecture running at 16 MHz'
        ],
        correct: 0,
        explanation: 'The ESP32 features a dual-core Xtensa 32-bit processor capable of running up to 240 MHz with independent core processing.'
      },
      {
        question: 'Which wireless communication protocols are integrated directly on-chip into the standard ESP32?',
        options: [
          'Cellular 4G LTE and NFC',
          '2.4 GHz Wi-Fi (802.11 b/g/n) and Bluetooth 4.2 / BLE',
          'Zigbee and LoRa only',
          'Sub-1GHz ISM band and satellite uplink'
        ],
        correct: 1,
        explanation: 'The ESP32 features built-in 2.4 GHz Wi-Fi (802.11 b/g/n) alongside Bluetooth v4.2 BR/EDR and BLE.'
      },
      {
        question: 'What is the default operating logic voltage of the ESP32 GPIO pins?',
        options: [
          '1.8V logic',
          '5.0V logic',
          '3.3V logic',
          '12.0V logic'
        ],
        correct: 2,
        explanation: 'ESP32 runs on 3.3V logic. Connecting 5V inputs directly to non-tolerant GPIO pins can permanently damage the silicon.'
      },
      {
        question: 'What is the native bit resolution of the ESP32 built-in Successive Approximation Register (SAR) ADC?',
        options: [
          '8-bit (values 0 to 255)',
          '10-bit (values 0 to 1023)',
          '12-bit (values 0 to 4095)',
          '16-bit (values 0 to 65535)'
        ],
        correct: 2,
        explanation: 'The ESP32 integrated ADC has up to 12-bit resolution, translating analog input voltages into numerical readings from 0 to 4095.'
      },
      {
        question: 'Why should you exercise caution when wiring external components to GPIO 0, 2, 12, or 15?',
        options: [
          'They only support analog microphones',
          'They are strapping pins that determine boot mode and flash voltage upon startup',
          'They cannot output digital HIGH signals',
          'They are permanently connected to the power ground rail'
        ],
        correct: 1,
        explanation: 'Strapping pins (GPIO 0, 2, 12, 15) sample logic levels during boot to decide whether to boot from SPI flash or enter download/programming mode.'
      },
      {
        question: 'Which Arduino function sets GPIO 2 as an electrical output driver for an LED circuit?',
        options: [
          'digitalWrite(2, OUTPUT);',
          'pinMode(2, OUTPUT);',
          'analogRead(2, OUTPUT);',
          'setPinDirection(2, TRUE);'
        ],
        correct: 1,
        explanation: 'pinMode(pin, OUTPUT) configures the selected GPIO multiplexer to drive current out from the microcontroller.'
      },
      {
        question: 'Why is non-blocking code using millis() preferred over delay(1000) in connected IoT programs?',
        options: [
          'delay() destroys the ESP32 internal flash memory',
          'delay() blocks CPU execution, preventing Wi-Fi background tasks and MQTT listeners from servicing packets',
          'millis() allows running at higher voltage',
          'delay() only works when connected to USB'
        ],
        correct: 1,
        explanation: 'delay() halts user-level CPU execution. Using millis() timers allows the RTOS to service Wi-Fi TCP/IP stacks and background sockets without watchdog timeouts.'
      },
      {
        question: 'What lightweight publish/subscribe network protocol is standard for sending sensor telemetry to IoT cloud brokers?',
        options: [
          'FTP (File Transfer Protocol)',
          'MQTT (Message Queuing Telemetry Transport)',
          'SMTP (Simple Mail Transfer Protocol)',
          'Telnet'
        ],
        correct: 1,
        explanation: 'MQTT is the ultra-lightweight, battery-friendly publish/subscribe protocol specifically tailored for constrained IoT edge devices.'
      },
      {
        question: 'What feature enables an ESP32 to receive and flash new firmware over Wi-Fi without needing a physical USB cable?',
        options: [
          'OTA (Over-The-Air) Updates',
          'EEPROM Duplication',
          'PWM Emulation',
          'UART Jumper Spoofing'
        ],
        correct: 0,
        explanation: 'OTA (Over-The-Air) flashing allows developers to deploy code updates to remotely deployed ESP32 nodes via local Wi-Fi or secure cloud endpoints.'
      },
      {
        question: 'What happens if the ESP32 experiences an electrical voltage drop below ~2.7V during high-current Wi-Fi radio bursts?',
        options: [
          'The chip automatically doubles its clock speed',
          'The hardware Brownout Detector triggers and resets the MCU',
          'It switches to Bluetooth audio broadcast',
          'The onboard flash deletes all stored programs'
        ],
        correct: 1,
        explanation: 'The built-in brownout detector resets the MCU to prevent erratic CPU execution or corrupted flash writes when supply voltage sags under radio transmission loads.'
      }
    ]
  },

  breadboard: {
    title: 'Breadboard Prototyping Quest',
    kicker: 'MODULE 02 CHECKPOINT QUIZ',
    passScore: 7,
    questions: [
      {
        question: 'What is the standard spacing (pitch) between holes on a solderless breadboard?',
        options: [
          '0.1 inch (2.54 mm)',
          '0.25 inch (6.35 mm)',
          '1.0 mm metric pitch',
          '0.5 inch (12.7 mm)'
        ],
        correct: 0,
        explanation: 'The 0.1 inch (2.54 mm) grid spacing is the global standard matching DIP ICs, headers, and standard through-hole electronic components.'
      },
      {
        question: 'In the main component terminal area of a standard breadboard, how are holes electrically interconnected?',
        options: [
          'In continuous horizontal rows across the entire width',
          'Each 5-hole vertical column shares a single continuous internal spring clip',
          'Every hole is completely insulated with no internal connections',
          'All holes across the entire board are connected together'
        ],
        correct: 1,
        explanation: 'Inside the main prototyping area, each 5-hole vertical strip (a-e or f-j) is connected by an individual spring clip, creating an electrical node.'
      },
      {
        question: 'What is the primary purpose of the center divider trench running down the middle of a breadboard?',
        options: [
          'To hold spare jumper wires',
          'To isolate opposite pins of Dual In-line Package (DIP) ICs straddling the groove',
          'To act as a heat sink cooling the plastic body',
          'To collect excess flux or solder drips'
        ],
        correct: 1,
        explanation: 'The 0.3-inch isolation trench allows DIP IC chips to sit across the middle so opposite pins connect to separate, isolated vertical columns.'
      },
      {
        question: 'How do the long power distribution rails (bus strips) on the outer edges typically run?',
        options: [
          'Vertically in 5-hole groups',
          'Horizontally along the length of the board (+ and -)',
          'Diagonally at a 45-degree angle',
          'In concentric circles around the board'
        ],
        correct: 1,
        explanation: 'Power rails run along the length of the board horizontally, allowing you to distribute VCC and GND anywhere across your prototype.'
      },
      {
        question: 'What happens if you plug both leads of a resistor or LED into the EXACT SAME 5-hole vertical column?',
        options: [
          'The component operates twice as fast',
          'You create an electrical short circuit across the component, bypassing it entirely',
          'The component doubles its resistance',
          'It connects directly to the Wi-Fi antenna'
        ],
        correct: 1,
        explanation: 'Because all 5 holes in that strip share one metal clip, both legs become directly shorted together with zero electrical potential difference.'
      },
      {
        question: 'On large full-sized (830-point) breadboards, what common feature must makers watch out for on the power rails?',
        options: [
          'The power rails are sometimes split into two disconnected halves in the middle',
          'The rails are made of rubber',
          'The rails only accept negative voltages',
          'The holes are too small for jumper wires'
        ],
        correct: 0,
        explanation: 'Many 830-point boards split the power rails into two isolated halves (indicated by a break in the colored line), requiring a jumper wire bridge.'
      },
      {
        question: 'According to maker engineering conventions, what wire colors should always be used for VCC and Ground (GND)?',
        options: [
          'Green for VCC and Yellow for Ground',
          'Red for VCC (Power) and Black/Blue for GND (Ground)',
          'White for VCC and Orange for Ground',
          'Purple for VCC and Pink for Ground'
        ],
        correct: 1,
        explanation: 'Using Red for positive power and Black or Dark Blue for Ground is the universal standard that prevents disastrous reverse-polarity mistakes.'
      },
      {
        question: 'What wire gauge is ideal for inserting into solderless breadboard holes without damaging spring clips?',
        options: [
          '10 AWG thick automotive wire',
          '22 AWG solid core wire',
          '36 AWG hair-thin magnet wire',
          '0 AWG battery cable'
        ],
        correct: 1,
        explanation: '22 AWG solid core wire (or standard 0.6mm Dupont pins) fits snugly into the spring clips without stretching or warping the contacts.'
      },
      {
        question: 'How do you determine Pin 1 on a DIP Integrated Circuit before placing it onto the breadboard?',
        options: [
          'It is always the leg with the longest wire',
          'Locate the semicircular notch or dot: Pin 1 is immediately to its left/counter-clockwise',
          'Pin 1 is always painted bright green',
          'Any random pin can be treated as Pin 1'
        ],
        correct: 1,
        explanation: 'IC standards place a semicircular index notch or laser-etched dot at the top; Pin 1 is the upper-left pin, and numbers proceed counter-clockwise.'
      },
      {
        question: 'What should you immediately do if an IC chip on your newly powered breadboard feels burning hot to the touch?',
        options: [
          'Blow on it while keeping power connected',
          'Immediately disconnect the power supply and inspect for reversed power/ground polarity or shorts',
          'Increase the input voltage to overpower the heat',
          'Wait 10 minutes for it to calibrate'
        ],
        correct: 1,
        explanation: 'Rapid heating indicates an inverted polarity short or high-current path. Power must be removed immediately to prevent destroying silicon chips.'
      }
    ]
  },

  resistor: {
    title: 'Resistors & Ohm’s Law Challenge',
    kicker: 'MODULE 03 CHECKPOINT QUIZ',
    passScore: 7,
    questions: [
      {
        question: 'What is the fundamental SI unit of electrical resistance, and what Greek symbol represents it?',
        options: [
          'Farad (F)',
          'Henry (H)',
          'Ohm (Ω)',
          'Watt (W)'
        ],
        correct: 2,
        explanation: 'Resistance is measured in Ohms, universally represented by the Greek uppercase letter Omega (Ω).'
      },
      {
        question: 'State the mathematical formula for Ohm’s Law:',
        options: [
          'V = I × R (Voltage = Current × Resistance)',
          'P = V / I',
          'R = V × I',
          'I = V × R'
        ],
        correct: 0,
        explanation: 'Ohm’s Law establishes that Voltage (V) equals Current in Amperes (I) multiplied by Resistance in Ohms (R).'
      },
      {
        question: 'Do standard axial through-hole resistors have polarity (positive and negative leads)?',
        options: [
          'Yes, the longer lead must always connect to positive VCC',
          'No, resistors are non-polarized passive components that work equally in either direction',
          'Yes, but only if they are over 100kΩ',
          'Yes, reversing them reverses the direction of gravity'
        ],
        correct: 1,
        explanation: 'Resistors are symmetrical, non-polarized bilateral components; current flows through them with identical resistance in both directions.'
      },
      {
        question: 'A 4-band resistor has color bands: Brown (1), Black (0), Red (×100), Gold (±5%). What is its resistance value?',
        options: [
          '100 Ω',
          '1,000 Ω (1 kΩ)',
          '10,000 Ω (10 kΩ)',
          '12 Ω'
        ],
        correct: 1,
        explanation: 'Brown (1) and Black (0) form the number 10. Multiplying by Red (×100) gives 10 × 100 = 1,000 Ω (1 kΩ) with ±5% tolerance.'
      },
      {
        question: 'What is the gold tolerance band at the end of a resistor representing?',
        options: [
          '±20% tolerance',
          '±5% precision tolerance',
          '1 million ohms',
          'Waterproof rating'
        ],
        correct: 1,
        explanation: 'A gold band specifies that the actual physical resistance is within ±5% of the stated nominal value (silver represents ±10%).'
      },
      {
        question: 'To power a red LED (Vf = 2.0V, safe current = 15mA) from a 5.0V power source, what resistor value is required?',
        options: [
          'R = (5V - 2V) / 0.015A = 200 Ω (standard 220 Ω)',
          'R = 5V × 0.015A = 0.075 Ω',
          'R = 10,000 Ω',
          'R = 1 Ω'
        ],
        correct: 0,
        explanation: 'Using R = (Vs - Vf) / I: (5.0V - 2.0V) / 0.015A = 200 Ω. A standard 220 Ω resistor provides safe, reliable current limiting.'
      },
      {
        question: 'In a Voltage Divider circuit with two identical 10 kΩ resistors in series across 5.0V, what is the output voltage at the middle tap?',
        options: [
          '5.0V',
          '2.5V',
          '0V',
          '10.0V'
        ],
        correct: 1,
        explanation: 'Vout = Vin × [R2 / (R1 + R2)]. When R1 equals R2, the output voltage is exactly half of the input voltage: 5.0V / 2 = 2.5V.'
      },
      {
        question: 'What is the purpose of a 10 kΩ Pull-Up resistor connected to a microcontroller button input pin?',
        options: [
          'To increase the volume of sound cards',
          'To anchor the pin to a solid HIGH logic state when the button is open, preventing erratic floating states',
          'To make the button glow in the dark',
          'To step down 240V AC power'
        ],
        correct: 1,
        explanation: 'Without a pull-up or pull-down resistor, an unconnected input wire floats like an antenna, picking up electromagnetic noise that causes fake triggers.'
      },
      {
        question: 'What happens to the total resistance when you connect two 100 Ω resistors in series vs parallel?',
        options: [
          'Series = 200 Ω, Parallel = 50 Ω',
          'Series = 50 Ω, Parallel = 200 Ω',
          'Both equal 100 Ω',
          'Series = 10,000 Ω, Parallel = 0 Ω'
        ],
        correct: 0,
        explanation: 'Series resistances add up directly (100 + 100 = 200 Ω). Parallel resistances divide (1 / (1/100 + 1/100) = 50 Ω).'
      },
      {
        question: 'What physical phenomenon causes resistors to become warm when limiting substantial electric currents?',
        options: [
          'Electrons colliding with the conductive matrix material, dissipating power as Joule heating (P = I² × R)',
          'Chemical decomposition of the ceramic core',
          'Friction from magnetic compass needles',
          'Radio waves reflecting inside the solder joints'
        ],
        correct: 0,
        explanation: 'According to Joule’s Law (P = I² × R), electrical energy converted during resistance is dissipated directly as thermal energy (heat).'
      }
    ]
  },

  led: {
    title: 'LEDs & Photonics Mastery Challenge',
    kicker: 'MODULE 04 CHECKPOINT QUIZ',
    passScore: 7,
    questions: [
      {
        question: 'What does the acronym LED stand for in electronics?',
        options: [
          'Low Energy Detector',
          'Light Emitting Diode',
          'Linear Electronic Distributor',
          'Liquid Electrolyte Display'
        ],
        correct: 1,
        explanation: 'LED stands for Light Emitting Diode: a semiconductor p-n junction diode that emits light through electroluminescence.'
      },
      {
        question: 'How do you identify the Anode (+) lead of a standard through-hole 5mm LED?',
        options: [
          'The Anode is the shorter lead next to the flat edge',
          'The Anode is the longer lead, connecting toward the positive voltage rail',
          'Both leads are identical in length',
          'The Anode has a silver stripe on the lead'
        ],
        correct: 1,
        explanation: 'The longer leg is the positive Anode (+); the shorter leg (and flat side on the epoxy lens rim) is the negative Cathode (-).'
      },
      {
        question: 'What happens if you connect an LED in reverse bias (Cathode to 5V, Anode to GND below breakdown voltage)?',
        options: [
          'It glows twice as bright with inverted colors',
          'It blocks current flow and stays dark without emitting light',
          'It emits ultrasonic sound',
          'It recharges the power supply battery'
        ],
        correct: 1,
        explanation: 'As a diode, it only conducts in forward bias. In reverse bias, the depletion zone widens, blocking current and emitting no light.'
      },
      {
        question: 'Why does a Blue LED require a higher forward voltage (~3.2V) than a Red LED (~1.9V)?',
        options: [
          'Blue plastic is thicker than red plastic',
          'Blue photons have a shorter wavelength and higher energy, requiring a larger semiconductor bandgap energy',
          'Blue LEDs have larger copper legs',
          'Blue LEDs draw negative current'
        ],
        correct: 1,
        explanation: 'Photon energy is inversely proportional to wavelength (E = hc / λ). Shorter wavelength blue light requires a wider semiconductor bandgap (e.g. InGaN).'
      },
      {
        question: 'How do microcontrollers smoothly dim an LED without changing the fixed 3.3V supply voltage?',
        options: [
          'By using Pulse-Width Modulation (PWM) to rapidly switch the LED on and off at variable duty cycles',
          'By physically heating up the wire leads',
          'By changing the code font size',
          'By reducing the clock frequency of the Wi-Fi antenna'
        ],
        correct: 0,
        explanation: 'PWM pulses the LED at high frequencies (e.g. 1 kHz). The ratio of HIGH time to LOW time (duty cycle) tricks human vision into perceiving smooth brightness.'
      },
      {
        question: 'How many data wires are required to individually control the color of 100 addressable WS2812B (NeoPixel) LEDs?',
        options: [
          '100 separate digital wires (one per LED)',
          '300 wires (3 per RGB channel)',
          'Just 1 digital data wire (daisy-chained DIN to DOUT)',
          '16 parallel ribbon cables'
        ],
        correct: 2,
        explanation: 'WS2812B smart LEDs have an internal controller that shifts 24-bit color data down a single daisy-chained data line across hundreds of pixels.'
      },
      {
        question: 'What color format order is transmitted through standard WS2812B NeoPixel data streams?',
        options: [
          'GRB (Green, Red, Blue)',
          'RGB (Red, Green, Blue)',
          'CMYK (Cyan, Magenta, Yellow, Black)',
          'BGR (Blue, Green, Red)'
        ],
        correct: 0,
        explanation: 'Standard WS2812B chips expect 24 bits sent as 8 bits Green, 8 bits Red, and 8 bits Blue (GRB order).'
      },
      {
        question: 'What protective component should be placed across 5V and GND when powering a long NeoPixel strip?',
        options: [
          'A 1000 µF large electrolytic capacitor to buffer sudden current surges',
          'A 10 MΩ pull-down resistor',
          'A piezo buzzer',
          'A heating element'
        ],
        correct: 0,
        explanation: 'A large bulk capacitor (e.g. 1000 µF) smooths sudden voltage sags caused when hundreds of LEDs turn on simultaneously at full white (up to 60mA each).'
      },
      {
        question: 'What does a slow, rhythmic "breathing" LED pulse traditionally indicate on commercial IoT devices?',
        options: [
          'Fatal hardware crash',
          'Normal standby / Heartbeat loop connected and running healthy',
          'Wi-Fi password rejected',
          'Battery critically empty'
        ],
        correct: 1,
        explanation: 'A gentle breathing heartbeat pattern is the standard maker and industrial UX pattern signifying normal operation and connectivity.'
      },
      {
        question: 'Why must you NEVER connect an LED directly between 5V and GND without a current-limiting resistor?',
        options: [
          'Because the LED has almost zero resistance in forward conduction, causing runaway current that instantly destroys it',
          'Because it will blow up the Wi-Fi router',
          'Because the LED will turn into a crystal radio',
          'Because the LED will run backwards'
        ],
        correct: 0,
        explanation: 'Once forward voltage threshold is exceeded, dynamic resistance plummets. Without a series resistor, excessive current causes thermal destruction within milliseconds.'
      }
    ]
  },

  transistor: {
    title: 'Transistors & Solid-State Switching Quest',
    kicker: 'MODULE 05 CHECKPOINT QUIZ',
    passScore: 7,
    questions: [
      {
        question: 'What are the two primary modes in which transistors operate in electronic circuits?',
        options: [
          'Radio transmission and battery storage',
          'Amplification (linear mode) and Digital Switching (saturation/cutoff)',
          'Inductive heating and AC rectification',
          'Capacitive charging and memory storage'
        ],
        correct: 1,
        explanation: 'Transistors are used as linear amplifiers (analog audio/RF) or as binary on/off switches (digital electronics and computing).'
      },
      {
        question: 'Name the three electrical terminals of a standard Bipolar Junction Transistor (BJT):',
        options: [
          'Anode, Cathode, Gate',
          'Base, Collector, Emitter',
          'Source, Drain, Channel',
          'Input, Output, Ground'
        ],
        correct: 1,
        explanation: 'BJTs (like the 2N2222 or BC547) feature three terminals: Base (B), Collector (C), and Emitter (E).'
      },
      {
        question: 'In an NPN transistor switch circuit, which terminal receives the small control signal from the microcontroller?',
        options: [
          'Emitter',
          'Collector',
          'Base (via a current-limiting resistor)',
          'The metal heatsink tab'
        ],
        correct: 2,
        explanation: 'Current injected into the Base controls the larger current flowing from Collector to Emitter.'
      },
      {
        question: 'Why must you place a resistor (e.g. 1 kΩ) between the ESP32 GPIO pin and the Base of an NPN transistor?',
        options: [
          'To increase the speed of sound',
          'To limit the Base-Emitter forward diode current and prevent destroying the GPIO pin',
          'To convert DC voltage to AC voltage',
          'To make the transistor polarity reversible'
        ],
        correct: 1,
        explanation: 'The Base-Emitter junction behaves like a forward-biased silicon diode (~0.7V). Without a Base resistor, the GPIO pin attempts to supply infinite current and burns out.'
      },
      {
        question: 'In a Low-Side switching configuration, where is the transistor placed relative to the load and ground?',
        options: [
          'Between positive power supply and load',
          'Between the load and the Ground (0V) return line',
          'Inside the motor windings',
          'In series with the Wi-Fi antenna'
        ],
        correct: 1,
        explanation: 'In Low-Side switching, the load is tied to VCC, and the N-channel transistor connects the bottom of the load to Ground to complete the circuit.'
      },
      {
        question: 'What dangerous phenomenon occurs when a transistor abruptly shuts off power to an inductive coil (motor or relay)?',
        options: [
          'Radio silence',
          'Inductive kickback / Back-EMF voltage spike that can exceed hundreds of volts',
          'The motor reverses its magnetic poles forever',
          'Battery capacity doubles'
        ],
        correct: 1,
        explanation: 'Collapsing magnetic fields in coils generate a high-voltage reverse voltage spike (V = -L × di/dt) that will punch through transistor silicon.'
      },
      {
        question: 'How does a Flyback Diode protect the switching transistor from inductive kickback spikes?',
        options: [
          'It is placed in reverse bias across the coil, safely recirculating and dissipating the collapsing magnetic energy',
          'It converts magnetic spikes into Wi-Fi packets',
          'It disconnects the ground rail',
          'It blows like a fuse every time the motor stops'
        ],
        correct: 0,
        explanation: 'Connected in reverse bias across the coil terminals, the diode clamps the reverse voltage spike to ~0.7V, protecting the transistor.'
      },
      {
        question: 'What are the three terminal names of a MOSFET (Field-Effect Transistor)?',
        options: [
          'Base, Collector, Emitter',
          'Gate, Drain, Source',
          'Plate, Grid, Cathode',
          'Plus, Minus, Signal'
        ],
        correct: 1,
        explanation: 'MOSFETs feature Gate (G), Drain (D), and Source (S) terminals.'
      },
      {
        question: 'What is the main advantage of a MOSFET over a BJT for high-current loads (e.g. 10A LED floodlights)?',
        options: [
          'MOSFETs are controlled by Gate voltage rather than current, drawing virtually zero continuous control current and offering ultra-low internal resistance',
          'MOSFETs are cheaper than copper wire',
          'MOSFETs generate cold air when running',
          'MOSFETs do not need power connections'
        ],
        correct: 0,
        explanation: 'The insulated Gate draws nanoamps of steady-state current, and very low ON-resistance (Rds(on)) allows high currents with minimal thermal dissipation.'
      },
      {
        question: 'What does the "L" designation signify in logic-level MOSFETs like the IRLZ44N (compared to standard IRFZ44N)?',
        options: [
          'Low quality',
          'Logic-level gate threshold, meaning it fully turns ON with 3.3V or 5V microcontroller signals',
          'Linear audio only',
          'Light emitting'
        ],
        correct: 1,
        explanation: 'Logic-level MOSFETs saturate with low gate voltages (3.3V - 5V), whereas standard MOSFETs require 10V on the gate to fully open.'
      }
    ]
  },

  capacitor: {
    title: 'Capacitors & Energy Storage Challenge',
    kicker: 'MODULE 06 CHECKPOINT QUIZ',
    passScore: 7,
    questions: [
      {
        question: 'What fundamental property is measured in Farads (F), and what does a capacitor store?',
        options: [
          'Resistance; stores heat',
          'Capacitance; stores electrical energy in an electrostatic field between conductors',
          'Inductance; stores magnetic fields',
          'Frequency; stores radio waves'
        ],
        correct: 1,
        explanation: 'Capacitance is measured in Farads. A capacitor stores electrical energy electrostatically across two opposing conductive plates.'
      },
      {
        question: 'How do capacitors react to Direct Current (DC) vs Alternating Current (AC) signals?',
        options: [
          'They pass steady DC forever and block AC completely',
          'They block steady DC once charged, while allowing fluctuating AC and high-frequency noise to pass through',
          'They invert both DC and AC into radio signals',
          'They have zero effect on either AC or DC'
        ],
        correct: 1,
        explanation: 'Capacitors act as an open circuit to steady DC voltage, but present low capacitive reactance (Xc = 1 / 2πfC) to high-frequency AC signals.'
      },
      {
        question: 'Why do Electrolytic capacitors have strict polarity markings (+ and -) while Ceramic disc capacitors do not?',
        options: [
          'Electrolytics use a microscopic chemical oxide dielectric layer that breaks down and vents gas if reverse-biased',
          'Ceramic capacitors are painted with directional arrows',
          'Electrolytic capacitors contain mini batteries',
          'Ceramic capacitors only work in space'
        ],
        correct: 0,
        explanation: 'The ultra-thin aluminum oxide dielectric in electrolytic capacitors requires correct polarity. Reverse voltage causes chemical breakdown, heat, and venting.'
      },
      {
        question: 'What capacitance value does a common ceramic disc capacitor labeled "104" represent?',
        options: [
          '104 Farads',
          '104 picofarads',
          '0.1 µF (100,000 pF / 100 nF)',
          '10.4 microfarads'
        ],
        correct: 2,
        explanation: 'The 3-digit code reads: 1, 0, followed by 4 zeros in picofarads = 100,000 pF = 100 nF = 0.1 µF.'
      },
      {
        question: 'Where should Decoupling (Bypass) capacitors be physically positioned on a printed circuit board?',
        options: [
          'As far away from all chips as possible',
          'As close as physically possible to the power (VCC) and Ground pins of the target IC',
          'Directly in series with the USB power cord',
          'Floating in the air above the board'
        ],
        correct: 1,
        explanation: 'Placing decoupling capacitors right next to IC power pins minimizes trace inductance, allowing the capacitor to instantly quench high-frequency current spikes.'
      },
      {
        question: 'What is the RC Time Constant formula (Tau τ) for a resistor and capacitor connected in series?',
        options: [
          'τ = R × C (Resistance in Ohms × Capacitance in Farads)',
          'τ = R / C',
          'τ = C / R',
          'τ = 2π × √(R × C)'
        ],
        correct: 0,
        explanation: 'The time constant Tau (τ = R × C) represents the time required to charge a capacitor to approximately 63.2% of the applied voltage.'
      },
      {
        question: 'Calculate the time constant τ for a 100 kΩ resistor charging a 10 µF capacitor:',
        options: [
          '0.001 seconds',
          '1.0 second (100,000 Ω × 0.000010 F = 1.0 s)',
          '100 seconds',
          '10 milliseconds'
        ],
        correct: 1,
        explanation: 'τ = 100,000 Ω × 0.000010 F = 1.0 second. The capacitor will reach ~63% charge after exactly 1 second.'
      },
      {
        question: 'How many time constants (τ) does it take for a capacitor to be considered virtually fully charged (>99%)?',
        options: [
          '1 time constant (1τ)',
          '3 time constants (3τ)',
          '5 time constants (5τ)',
          '100 time constants'
        ],
        correct: 2,
        explanation: 'After 5 time constants (5τ), an RC circuit reaches 99.3% of its final equilibrium charge voltage.'
      },
      {
        question: 'What advantage do Supercapacitors (Ultracapacitors) have over standard rechargeable lithium batteries?',
        options: [
          'They store higher voltage than nuclear reactors',
          'They charge/discharge in seconds and survive over 1,000,000 charge cycles without chemical degradation',
          'They are made of heavy toxic lead plates',
          'They generate electricity from cold fusion'
        ],
        correct: 1,
        explanation: 'Because supercapacitors store energy electrostatically without chemical phase changes, they can cycle millions of times and charge almost instantaneously.'
      },
      {
        question: 'What safety rule must always be observed when picking a capacitor for a 12V DC power supply circuit?',
        options: [
          'Pick a capacitor rated for exactly 12V with no margin',
          'Choose a capacitor with a voltage rating at least 1.5× to 2× higher (e.g. 25V or 35V rating) to handle surges and voltage spikes',
          'The voltage rating does not matter for capacitors',
          'Always use a 6V capacitor to save money'
        ],
        correct: 1,
        explanation: 'Operating capacitors close to their dielectric breakdown rating causes premature failure. Engineering derating rules mandate at least a 25% to 50%+ safety voltage margin.'
      }
    ]
  },

  ultrasonic: {
    title: 'Ultrasonic Sensor Mastery Challenge',
    kicker: 'MODULE 07 CHECKPOINT QUIZ',
    passScore: 7,
    questions: [
      {
        question: 'What is the acoustic frequency emitted by the HC-SR04 ultrasonic transducer?',
        options: [
          "1,000 Hz (audible high beep)",
          "40,000 Hz (40 kHz ultrasound)",
          "433 MHz radio frequency",
          "2.4 GHz microwave pulse"
],
        correct: 1,
        explanation: 'The HC-SR04 generates a burst of eight 40 kHz ultrasound pulses, which is well above the human hearing limit of ~20 kHz.'
      },
      {
        question: 'What is the official effective non-contact measurement range of the HC-SR04 sensor?',
        options: [
          "1 millimeter to 10 centimeters",
          "2 centimeters to 400 centimeters (~13 feet)",
          "1 meter to 50 meters",
          "10 meters to 1 kilometer"
],
        correct: 1,
        explanation: 'The HC-SR04 can reliably measure distances from 2 cm up to 400 cm with approximately 3 mm precision.'
      },
      {
        question: 'How long must the microcontroller hold the TRIG pin HIGH to initiate an ultrasound measurement burst?',
        options: [
          "At least 10 microseconds",
          "Exactly 50 milliseconds",
          "1 full second",
          "500 nanoseconds"
],
        correct: 0,
        explanation: 'Providing a 10µs HIGH logic pulse on the TRIG pin commands the onboard processor to transmit the 8-cycle 40kHz sonic burst.'
      },
      {
        question: 'What does the duration of the HIGH pulse output on the ECHO pin represent?',
        options: [
          "The ambient air temperature",
          "The round-trip travel time of the sound wave",
          "The battery voltage remaining",
          "The surface roughness of the target"
],
        correct: 1,
        explanation: 'The ECHO pin goes HIGH the moment sound is emitted and drops LOW when the echo reflection is received, so its duration equals total round-trip flight time.'
      },
      {
        question: 'Why must you divide the travel time by 2 when computing distance using the speed of sound?',
        options: [
          "Because sound travels twice as fast through air",
          "Because the sound wave travels out to the obstacle and then bounces back",
          "Because the sensor has dual silver cylinders",
          "Because 3.3V logic divides voltage in half"
],
        correct: 1,
        explanation: 'The measured time covers the round-trip distance (out to target and back to receiver). Dividing by 2 isolates one-way distance.'
      },
      {
        question: 'What is the speed of sound in air at standard room temperature (~20°C)?',
        options: [
          "300,000,000 m/s (Speed of light)",
          "343 m/s (0.0343 cm/\u00b5s)",
          "1,500 m/s",
          "120 m/s"
],
        correct: 1,
        explanation: 'Sound travels at approximately 343 m/s in dry air at 20°C, which translates to 0.0343 cm per microsecond (or 29.1 µs per cm).'
      },
      {
        question: 'Why should you use a resistor voltage divider when connecting the HC-SR04 ECHO pin to an ESP32?',
        options: [
          "To increase the speed of sound",
          "Because the HC-SR04 outputs a 5V pulse, which could damage 3.3V ESP32 GPIO pins",
          "To invert the signal polarity",
          "To eliminate mechanical contact bounce"
],
        correct: 1,
        explanation: 'The HC-SR04 ECHO pin outputs 5V logic. Stepping this down to ~3.3V with a 1kΩ / 2kΩ voltage divider protects the ESP32 input stage.'
      },
      {
        question: 'Which of the following targets will produce the WEAKEST echo reflection for an ultrasonic sensor?',
        options: [
          "A flat concrete wall",
          "A thick fluffy plush teddy bear or soft velvet curtain",
          "A smooth glass window",
          "A flat wooden door"
],
        correct: 1,
        explanation: 'Soft fabrics, foam, and fur absorb high-frequency acoustic waves instead of bouncing them back, causing false maximum-distance or timeout readings.'
      },
      {
        question: 'What is the approximate directional measuring angle (cone) of the HC-SR04 sensor?',
        options: [
          "360 degrees omnidirectional",
          "180 degrees hemispherical",
          "Approximately 15 degrees",
          "1 degree laser-narrow"
],
        correct: 2,
        explanation: 'The HC-SR04 has a measuring angle of roughly 15 degrees, making it directional while still detecting obstacles slightly off-axis.'
      },
      {
        question: 'What does pulseIn(ECHO_PIN, HIGH, 30000) return if no obstacle reflects sound within 30ms?',
        options: [
          "-1",
          "9999",
          "0",
          "Infinity"
],
        correct: 2,
        explanation: 'Arduino\'s pulseIn() function returns 0 if the specified timeout duration (here 30,000 microseconds) elapses without a completed pulse.'
      }
    ]
  },

  pir: {
    title: 'PIR Motion Sensor Mastery Challenge',
    kicker: 'MODULE 08 CHECKPOINT QUIZ',
    passScore: 7,
    questions: [
      {
        question: 'What does the acronym \'PIR\' stand for?',
        options: [
          "Pulse Infrared Radar",
          "Passive Infrared",
          "Photo-Inductive Relay",
          "Proximity Integrated Radio"
],
        correct: 1,
        explanation: 'PIR stands for Passive Infrared. \'Passive\' indicates that the sensor emits no radiation of its own, only detecting ambient infrared energy.'
      },
      {
        question: 'What wavelength of infrared radiation is emitted predominantly by human body heat?',
        options: [
          "Near-infrared: 850 nm",
          "Mid-to-far infrared: roughly 9 to 10 micrometers (\u00b5m)",
          "Ultraviolet: 254 nm",
          "Visible green: 532 nm"
],
        correct: 1,
        explanation: 'At normal human body temperatures (~37°C), thermal black-body radiation peaks in the long-wave infrared band around 9.4 micrometers.'
      },
      {
        question: 'What is the primary function of the white faceted plastic dome (Fresnel lens) on the PIR sensor?',
        options: [
          "It protects the electronics from rain and dust only",
          "It focuses infrared rays into multiple distinct detection zones across the room",
          "It amplifies 2.4 GHz Wi-Fi signals",
          "It glows in the dark to warn intruders"
],
        correct: 1,
        explanation: 'The Fresnel lens acts as multiple condensing lenses, carving the environment into optical beams so movement creates alternating warm/cold pulses.'
      },
      {
        question: 'Why does a PIR sensor contain TWO pyroelectric sensing elements wired in reverse-series?',
        options: [
          "One acts as a backup in case the first one burns out",
          "To measure distance as well as direction",
          "To cancel out uniform temperature changes affecting the entire room at once",
          "To detect both positive and negative electric charges"
],
        correct: 2,
        explanation: 'Dual differential elements cancel ambient environmental heating (sunlight, air conditioning) and only trigger when a warm source crosses from one slot to the other.'
      },
      {
        question: 'What does setting the HC-SR501 mode jumper to \'H\' (Repeatable Trigger) mode do?',
        options: [
          "It disables the sensor completely",
          "It continuously resets the delay timer on every motion, keeping the output HIGH as long as motion persists",
          "It pulses the output ON and OFF 100 times per second",
          "It switches logic levels from 3.3V to 12V"
],
        correct: 1,
        explanation: 'In \'H\' mode, each detected motion resets the delay countdown, so the pin stays continuously HIGH as long as someone keeps moving.'
      },
      {
        question: 'Why does a PIR sensor require a 30 to 60 second \'warm-up\' period after power is turned on?',
        options: [
          "To heat up internal filament bulbs",
          "To allow the pyroelectric crystals and amplifier circuit to adapt to ambient thermal baseline levels",
          "To charge up the internal Wi-Fi transmitter",
          "To download firmware updates from the internet"
],
        correct: 1,
        explanation: 'During power-up, the sensor\'s high-gain analog amplifier stages must stabilize and establish their quiescent baseline relative to ambient IR noise.'
      },
      {
        question: 'What is the typical output voltage level on the HC-SR501 OUT pin when motion is detected?',
        options: [
          "12V DC",
          "5.0V DC",
          "3.3V DC High",
          "0.1V AC"
],
        correct: 2,
        explanation: 'The HC-SR501 includes an onboard 3.3V regulator that powers the BISS0001 controller, so the OUT pin produces a safe 3.3V HIGH signal directly compatible with ESP32.'
      },
      {
        question: 'Which of the following can cause FALSE triggers on a PIR motion sensor?',
        options: [
          "Direct sunlight hitting the lens or sudden convective hot air drafts from heating vents",
          "A completely motionless rock sitting on a desk",
          "Ambient darkness with stable room temperature",
          "Whispering nearby"
],
        correct: 0,
        explanation: 'Sudden changes in thermal radiation—such as direct sunlight patches moving across a floor or air conditioner blasts—can trigger differential temperature spikes.'
      },
      {
        question: 'Why is attachInterrupt() preferred over a polling loop for reading a PIR sensor in battery IoT devices?',
        options: [
          "It doubles the detection range of the sensor",
          "It allows the microcontroller to sleep in deep micro-power mode (<15\u00b5A) until motion actually occurs",
          "It converts the analog sensor into a camera",
          "It eliminates the need for a power supply"
],
        correct: 1,
        explanation: 'Hardware interrupts wake up sleeping microcontrollers instantly, saving over 99% of battery power compared to continuously burning CPU cycles in loop().'
      },
      {
        question: 'What is the critical difference between motion detection (PIR) and human presence detection (mmWave radar)?',
        options: [
          "PIR only detects moving warm bodies; a stationary person sitting quietly will eventually stop triggering PIR",
          "mmWave cannot detect humans through clothing",
          "PIR works through solid brick walls, while radar cannot",
          "There is no difference; they are identical technologies"
],
        correct: 0,
        explanation: 'PIR relies on differential thermal changes across facets. If a person sits completely still reading or sleeping, PIR returns to LOW. mmWave radar detects micro-breathing.'
      }
    ]
  },

  dht: {
    title: 'DHT Sensor Mastery Challenge',
    kicker: 'MODULE 09 CHECKPOINT QUIZ',
    passScore: 7,
    questions: [
      {
        question: 'What two environmental metrics do DHT sensors measure simultaneously?',
        options: [
          "Atmospheric pressure and altitude",
          "Relative Humidity (RH) and Ambient Temperature",
          "Carbon dioxide and carbon monoxide",
          "Soil moisture and sunlight lux"
],
        correct: 1,
        explanation: 'DHT sensors contain both a humidity sensing component (capacitive or resistive) and an NTC thermistor for temperature.'
      },
      {
        question: 'Which comparison between DHT11 and DHT22 is accurate?',
        options: [
          "DHT11 has a wider temperature range (-40 to 80\u00b0C) than DHT22",
          "DHT22 provides higher accuracy (+/-2% RH, +/-0.5\u00b0C) and wider measurement ranges than DHT11",
          "DHT11 is white while DHT22 is always bright red",
          "DHT22 uses analog output while DHT11 is digital"
],
        correct: 1,
        explanation: 'DHT22 (AM2302) is the precision variant, measuring -40 to 80°C and 0-100% RH with decimal precision, compared to DHT11\'s integer-only 0-50°C and 20-80% RH.'
      },
      {
        question: 'How many total data bits are transmitted in one complete DHT data frame?',
        options: [
          "8 bits (1 byte)",
          "16 bits (2 bytes)",
          "40 bits (5 bytes)",
          "64 bits (8 bytes)"
],
        correct: 2,
        explanation: 'A DHT transmission consists of exactly 40 bits (5 bytes): 2 bytes for humidity, 2 bytes for temperature, and 1 byte for checksum.'
      },
      {
        question: 'What value of pull-up resistor is typically required between VCC and the DHT single-bus DATA line?',
        options: [
          "10 Ohms",
          "4.7k\u03a9 to 10k\u03a9",
          "1 Megaohm",
          "Zero (direct short)"
],
        correct: 1,
        explanation: 'A 4.7kΩ to 10kΩ pull-up resistor keeps the bidirectional data line held HIGH during idle periods and between bit pulses.'
      },
      {
        question: 'How does the DHT sensor encode a binary \'1\' bit versus a binary \'0\' bit on the data wire?',
        options: [
          "By changing voltage from 3.3V to 5V",
          "By the duration of the HIGH pulse: ~26-28\u00b5s for '0', and ~70\u00b5s for '1'",
          "By switching radio frequencies",
          "By sending alternating positive and negative voltages"
],
        correct: 1,
        explanation: 'Every bit starts with a 50µs LOW pulse. If the following HIGH pulse is short (~26-28µs), it represents \'0\'; if long (~70µs), it represents \'1\'.'
      },
      {
        question: 'How is the 8-bit checksum verified at the end of a DHT packet transmission?',
        options: [
          "Checksum must equal Byte 1 + Byte 2 + Byte 3 + Byte 4 (lowest 8 bits)",
          "Checksum must always equal 0xFF",
          "Checksum is calculated using an MD5 hash",
          "Checksum must equal the temperature multiplied by humidity"
],
        correct: 0,
        explanation: 'The 5th byte (checksum) must equal the 8-bit sum of the preceding 4 bytes: (Humidity_Int + Humidity_Dec + Temp_Int + Temp_Dec) & 0xFF.'
      },
      {
        question: 'What is the maximum recommended sampling frequency for a DHT22 sensor?',
        options: [
          "10,000 times per second (10 kHz)",
          "100 times per second",
          "Once every 2 seconds (0.5 Hz)",
          "Once every 24 hours"
],
        correct: 2,
        explanation: 'The humidity sensing element requires time to re-equilibrate with atmospheric moisture; polling faster than every 2 seconds returns stale data or errors.'
      },
      {
        question: 'In Arduino C++, what does isnan(temperature) check for after calling dht.readTemperature()?',
        options: [
          "Checks if temperature is negative",
          "Checks if the returned value is 'Not a Number', indicating a read failure or loose wire",
          "Checks if temperature is in Fahrenheit",
          "Checks if temperature reached boiling point"
],
        correct: 1,
        explanation: 'isnan() (Is Not a Number) returns true when the sensor fails to acknowledge or the checksum is corrupted, signaling a bad read.'
      },
      {
        question: 'On a bare 4-pin DHT sensor, what is pin 3 typically used for?',
        options: [
          "Analog voltage output",
          "Reset signal line",
          "No Connection (NC / Unused)",
          "External clock input"
],
        correct: 2,
        explanation: 'Standard 4-pin DHT packages have: Pin 1 = VCC, Pin 2 = DATA, Pin 3 = NC (No Connection), Pin 4 = GND.'
      },
      {
        question: 'Why is Vapor Pressure Deficit (VPD) calculated from temperature and humidity in agricultural IoT?',
        options: [
          "To estimate wind speed inside the greenhouse",
          "To measure the drying power of the air and optimize plant transpiration rates",
          "To forecast thunderstorm lightning strikes",
          "To determine soil nitrogen levels"
],
        correct: 1,
        explanation: 'VPD combines temperature and relative humidity to measure the difference between moisture in saturated air vs ambient air, directly driving plant transpiration.'
      }
    ]
  },

  oled: {
    title: '0.96" I2C OLED Display Mastery Challenge',
    kicker: 'MODULE 10 CHECKPOINT QUIZ',
    passScore: 7,
    questions: [
      {
        question: 'What does \'OLED\' stand for and why doesn\'t it need a separate backlight?',
        options: [
          "Optical Light Emitting Diode; it uses miniature fluorescent tubes",
          "Organic Light Emitting Diode; every individual pixel produces its own light when electrified",
          "Oscillating Liquid Electronic Display; it reflects ambient sunlight",
          "Overclocked LED; it uses laser diodes"
],
        correct: 1,
        explanation: 'OLED stands for Organic Light Emitting Diode. Because each organic pixel emits its own light, black pixels produce zero light and consume zero power.'
      },
      {
        question: 'What is the native pixel resolution of the standard 0.96-inch monochrome OLED display?',
        options: [
          "16 \u00d7 2 characters",
          "128 columns \u00d7 64 rows (8,192 pixels)",
          "320 \u00d7 240 pixels",
          "1920 \u00d7 1080 Full HD"
],
        correct: 1,
        explanation: 'The standard 0.96\" monochrome display features a 128x64 matrix, totaling 8,192 addressable pixels.'
      },
      {
        question: 'How much RAM does a monochrome 128x64 display require for a complete local framebuffer?',
        options: [
          "64 kilobytes",
          "1,024 bytes (1 KB)",
          "8,192 bytes",
          "16 megabytes"
],
        correct: 1,
        explanation: '128 × 64 = 8,192 pixels. Because it is monochrome (1 bit per pixel), 8,192 ÷ 8 bits/byte = exactly 1,024 bytes (1 KB).'
      },
      {
        question: 'What is the common default 7-bit I2C address for SSD1306 OLED display modules?',
        options: [
          "0x00",
          "0x3C (or 0x3D)",
          "0x7F",
          "0xFF"
],
        correct: 1,
        explanation: 'Most SSD1306 breakout boards default to 7-bit I2C address 0x3C, selectable to 0x3D by resoldering an address resistor on the back.'
      },
      {
        question: 'What are the names and functions of the two I2C communication wires?',
        options: [
          "TX (Transmit) and RX (Receive)",
          "MOSI (Master Out) and MISO (Master In)",
          "SDA (Serial Data) and SCL (Serial Clock)",
          "D+ and D- (USB Data)"
],
        correct: 2,
        explanation: 'I2C uses SDA (Serial Data) to transfer data bits bidirectionally and SCL (Serial Clock) driven by the master to synchronize timing.'
      },
      {
        question: 'In the Adafruit_SSD1306 library, when do changes actually appear on the glass screen?',
        options: [
          "Immediately when calling drawPixel() or print()",
          "Only after calling display.display(), which flushes the RAM framebuffer over I2C",
          "Only when the microcontroller resets",
          "After calling delay(1000)"
],
        correct: 1,
        explanation: 'Drawing commands write to the local RAM framebuffer. Nothing changes on screen until display.display() sends the 1,024 bytes over I2C.'
      },
      {
        question: 'How is display memory structured inside the SSD1306 graphics controller?',
        options: [
          "A single continuous linear array of 8,192 integers",
          "8 horizontal pages (Page 0 to 7), each 8 pixels tall and 128 columns wide",
          "64 vertical strips of 128 bytes",
          "A 3D voxel grid"
],
        correct: 1,
        explanation: 'The GDDRAM is arranged into 8 pages (each 8 pixels tall). Each byte represents a vertical strip of 8 pixels in a column.'
      },
      {
        question: 'What power advantage does an OLED display have over a backlit LCD screen?',
        options: [
          "OLED displays can generate electricity from ambient room light",
          "Displaying predominantly black screens turns off pixels, drawing minimal current (~8-10mA)",
          "OLEDs operate at 0 Volts",
          "OLEDs never consume any battery power"
],
        correct: 1,
        explanation: 'Unlike LCDs where the backlight constantly draws 20-50mA regardless of content, black pixels on an OLED draw zero current.'
      },
      {
        question: 'What technique should you implement in software to prevent OLED \'burn-in\' on 24/7 IoT monitors?',
        options: [
          "Display static bright white text forever",
          "Implement a screen saver, pixel shifting, or periodically invert display colors",
          "Increase the voltage to 12V",
          "Clean the screen with alcohol daily"
],
        correct: 1,
        explanation: 'Organic diodes degrade with accumulated runtime. Shifting UI positions, dimming brightness, or inverting colors prevents uneven pixel wear.'
      },
      {
        question: 'What tool or format is typically used to convert bitmap images for display with drawBitmap()?',
        options: [
          "MP3 audio files",
          "C byte arrays representing binary pixel bitmasks (using tools like image2cpp)",
          "PDF documents",
          "Raw MP4 video containers"
],
        correct: 1,
        explanation: 'Monochrome graphics are converted into C byte arrays (e.g. `const unsigned char my_logo[] PROGMEM = {...}`) using bitmap converters like image2cpp.'
      }
    ]
  },

  lcd: {
    title: '16x2 Character LCD Mastery Challenge',
    kicker: 'MODULE 11 CHECKPOINT QUIZ',
    passScore: 7,
    questions: [
      {
        question: 'What does \'16x2\' signify regarding a character LCD display?',
        options: [
          "16 millimeters wide by 2 millimeters tall",
          "16 horizontal columns by 2 vertical rows (32 characters total)",
          "16 Volts power input with 2 grounds",
          "16 colors with 2 grayscale levels"
],
        correct: 1,
        explanation: 'A 16x2 LCD displays two lines of text with up to 16 alphanumeric characters on each line, accommodating 32 characters simultaneously.'
      },
      {
        question: 'What industry-standard controller protocol is used in virtually all alphanumeric LCD displays?',
        options: [
          "Hitachi HD44780",
          "Intel Core i7",
          "ARM Cortex-M4",
          "Nvidia Tegra"
],
        correct: 0,
        explanation: 'The Hitachi HD44780 controller set the de facto worldwide standard for alphanumeric character LCD instruction sets and timing.'
      },
      {
        question: 'What pixel grid dimension makes up each individual character cell on a 16x2 LCD?',
        options: [
          "3 \u00d7 3 pixels",
          "5 \u00d7 8 pixels (or 5 \u00d7 10 in some modes)",
          "64 \u00d7 64 pixels",
          "128 \u00d7 128 pixels"
],
        correct: 1,
        explanation: 'Each alphanumeric character is rendered within a dot matrix of 5 columns by 8 rows of liquid crystal segments.'
      },
      {
        question: 'What is the role of the PCF8574 chip mounted on the black I2C backpack board?',
        options: [
          "It acts as an 8-bit I/O expander, translating I2C commands into parallel LCD control signals",
          "It is a Wi-Fi modem",
          "It boosts the voltage to 220V AC",
          "It serves as an audio synthesizer"
],
        correct: 0,
        explanation: 'The PCF8574 takes 2-wire I2C commands and expands them into 8 parallel output pins driving RS, EN, and data lines D4-D7 on the LCD.'
      },
      {
        question: 'What should you do if the LCD backlight turns on, but only solid white or black rectangles appear with no letters?',
        options: [
          "Throw the display in the trash",
          "Adjust the small blue contrast potentiometer on the back of the I2C backpack using a screwdriver",
          "Connect the display to a 240V wall socket",
          "Change the code language to Python"
],
        correct: 1,
        explanation: 'The contrast voltage (VO) sets liquid crystal alignment. Adjusting the blue trimpot tunes contrast until letters become sharply visible.'
      },
      {
        question: 'What are the two most common default I2C addresses for PCF8574 LCD backpacks?',
        options: [
          "0x00 and 0x01",
          "0x27 (PCF8574T) and 0x3F (PCF8574AT)",
          "0xAA and 0xBB",
          "0x10 and 0x20"
],
        correct: 1,
        explanation: 'Backpacks using the PCF8574T chip default to address 0x27, while those using the PCF8574AT variant default to 0x3F.'
      },
      {
        question: 'Why does calling lcd.clear() continuously inside loop() cause undesirable behavior?',
        options: [
          "It permanently erases the microcontroller flash memory",
          "It takes up to 2 milliseconds and causes visible display flicker and jitter",
          "It blows out the LCD backlight LED",
          "It crashes the I2C bus permanently"
],
        correct: 1,
        explanation: 'lcd.clear() is a slow instruction. Clearing and rewriting every frame creates jarring screen flicker. Instead, overwrite text with padded spaces.'
      },
      {
        question: 'What is CGRAM on the HD44780 controller, and how many custom characters can you create?',
        options: [
          "Character Generator RAM; it allows creating up to 8 custom 5x8 pixel icons",
          "Cloud Graphics RAM; holds 100 images downloaded from the internet",
          "Central Gaming RAM; runs 3D video games",
          "Capacitive Ground RAM; stores static electricity"
],
        correct: 0,
        explanation: 'CGRAM has 64 bytes of memory, allowing programmers to define up to 8 user-created 5x8 pixel bitmap glyphs (battery icons, hearts, symbols).'
      },
      {
        question: 'How are column and row coordinates indexed in lcd.setCursor(col, row)?',
        options: [
          "1-indexed: Row 1 is top, Row 2 is bottom",
          "0-indexed: (0, 0) is top-left, (0, 1) is bottom-left, (15, 1) is bottom-right",
          "Randomly assigned",
          "Cartesian coordinates with (0,0) in the center"
],
        correct: 1,
        explanation: 'Coordinates are 0-indexed: columns 0 to 15, and rows 0 (top line) to 1 (bottom line).'
      },
      {
        question: 'What happens if you remove the physical black plastic jumper clip on the I2C backpack?',
        options: [
          "The I2C address changes",
          "The LED backlight power is disconnected (turning off screen illumination)",
          "The display switches from 5V to 3.3V",
          "The screen changes from English to Japanese"
],
        correct: 1,
        explanation: 'The 2-pin jumper header bridges power to the LED backlight. Removing it turns off the backlight, saving power in battery setups.'
      }
    ]
  },

  dcmotor: {
    title: 'DC Motor & H-Bridge Driver Mastery Challenge',
    kicker: 'MODULE 12 CHECKPOINT QUIZ',
    passScore: 7,
    questions: [
      {
        question: 'What fundamental physical principle causes a DC motor armature to rotate?',
        options: [
          "Bernoulli's aerodynamic lift",
          "The Lorentz Force acting on current-carrying conductors inside a magnetic field",
          "Electrostatic friction between plastic gears",
          "Thermal expansion of copper wires"
],
        correct: 1,
        explanation: 'When electrical current passes through copper coils in a magnetic field, the Lorentz force (F = I × L × B) generates rotational torque on the rotor.'
      },
      {
        question: 'Why should you NEVER connect a DC motor directly to a microcontroller GPIO pin?',
        options: [
          "Microcontrollers only work with AC motors",
          "DC motors draw hundreds of milliamps to several amps, far exceeding a GPIO pin's ~20mA limit, which will destroy the microcontroller",
          "DC motors spin backwards on microcontrollers",
          "GPIO pins cannot output digital logic"
],
        correct: 1,
        explanation: 'A GPIO pin can only safely source 20mA to 40mA. Even small hobby motors draw 200mA to 1.5A under load or stall, frying the microcontroller output silicon.'
      },
      {
        question: 'What is \'Back-EMF\' (Flyback voltage) generated by a spinning DC motor when turned off?',
        options: [
          "A radio frequency transmission",
          "A massive reverse voltage spike produced by the collapsing magnetic field of inductive motor coils",
          "A cooling breeze produced by the motor shaft",
          "A signal that synchronizes clocks"
],
        correct: 1,
        explanation: 'According to Lenz\'s law, when current to an inductor suddenly stops, the collapsing magnetic field induces a reverse high-voltage spike (often 50V+) that can blow transistors.'
      },
      {
        question: 'What component is wired in reverse-parallel across a motor to clamp inductive spikes safely?',
        options: [
          "A flyback (freewheeling) diode",
          "A quartz crystal oscillator",
          "A thermistor",
          "A transformer"
],
        correct: 0,
        explanation: 'A flyback diode conducts when the reverse inductive spike occurs, recirculating the energy safely back through the coil and clamping voltage spikes.'
      },
      {
        question: 'What is the primary function of an H-Bridge circuit?',
        options: [
          "To measure motor temperature",
          "To allow bidirectional motor control (forward and reverse) and dynamic braking using 4 solid-state switches",
          "To convert DC voltage into 240V AC mains",
          "To count motor revolutions"
],
        correct: 1,
        explanation: 'An H-bridge arranges 4 switches around a motor, allowing current to flow in either direction through the armature to spin it forward or reverse.'
      },
      {
        question: 'What dangerous condition occurs if high-side and low-side switches on the same side of an H-bridge close simultaneously?',
        options: [
          "The motor spins at double speed",
          "Shoot-through: A catastrophic direct short-circuit between VCC and Ground that can destroy the driver",
          "The motor turns into an electric generator",
          "The power rail voltage doubles"
],
        correct: 1,
        explanation: '\'Shoot-through\' creates an unrestricted dead short between power and ground across the transistors, causing excessive current, smoke, and component failure.'
      },
      {
        question: 'How is rotational speed controlled efficiently without wasting massive power as resistor heat?',
        options: [
          "By adding series resistors to drop voltage",
          "Using Pulse Width Modulation (PWM) to switch full voltage ON and OFF rapidly, varying the duty cycle",
          "By tightening mechanical brake screws",
          "By cooling the motor with ice"
],
        correct: 1,
        explanation: 'PWM rapidly switches power ON and OFF thousands of times per second. Varying the Duty Cycle controls average current and torque with high electrical efficiency.'
      },
      {
        question: 'What does a 75% PWM Duty Cycle signify?',
        options: [
          "The motor will only turn for 75 seconds",
          "The signal is HIGH for 75% of each waveform period and LOW for 25%",
          "The motor has 75 internal coils",
          "The voltage is multiplied by 75"
],
        correct: 1,
        explanation: 'Duty cycle is the percentage of time a digital pulse stays in the active HIGH state during each complete cycle.'
      },
      {
        question: 'Why does a 0.1µF ceramic capacitor soldered across the motor terminals improve circuit stability?',
        options: [
          "It acts as a battery to power the motor during power outages",
          "It filters out high-frequency electrical brush arcing noise that can reset microcontrollers",
          "It makes the motor spin twice as fast",
          "It changes motor rotation direction"
],
        correct: 1,
        explanation: 'Mechanical commutator brushes create tiny electrical sparks that radiate broadband RF noise. A 0.1µF capacitor shunts this noise directly to ground.'
      },
      {
        question: 'What is the \'Stall Current\' of a DC motor?',
        options: [
          "The current drawn when the motor is completely unplugged",
          "The maximum current drawn when the motor shaft is held completely locked from spinning under full voltage",
          "The current consumed when the motor is freewheeling in neutral",
          "The current drawn by the cooling fan"
],
        correct: 1,
        explanation: 'When locked, back-EMF is zero and current is limited solely by coil wire resistance, resulting in maximum current draw (often 5× to 10× running current).'
      }
    ]
  },

  button: {
    title: 'Tactile Push Button Mastery Challenge',
    kicker: 'MODULE 13 CHECKPOINT QUIZ',
    passScore: 7,
    questions: [
      {
        question: 'What mechanical switch type describes a standard tactile push button?',
        options: [
          "Normally Closed (NC) latching switch",
          "Normally Open (NO) momentary switch",
          "Rotary selector switch",
          "Mercury tilt switch"
],
        correct: 1,
        explanation: 'Tactile buttons are normally open (contacts disconnected). Pressing down momentarily bridges the contacts; releasing lets the internal dome spring back.'
      },
      {
        question: 'What happens if you connect a microcontroller input pin to a button with NO pull-up or pull-down resistor?',
        options: [
          "The microcontroller functions perfectly",
          "The pin floats, picking up electromagnetic noise and randomly reading 0s and 1s",
          "The pin permanently burns out",
          "The button catches fire"
],
        correct: 1,
        explanation: 'High-impedance inputs act like antennas when disconnected (\'floating\'), randomly oscillating between HIGH and LOW due to stray static and radio noise.'
      },
      {
        question: 'In an Active-LOW button configuration with a pull-up resistor, what logic level is read when the button is PRESSED?',
        options: [
          "HIGH (3.3V or 5V)",
          "LOW (0V / Ground)",
          "Analog 512",
          "High-Impedance"
],
        correct: 1,
        explanation: 'The pull-up resistor holds the pin HIGH when unpressed. Pressing the button bridges the pin directly to Ground, pulling it LOW.'
      },
      {
        question: 'What Arduino pinMode() mode enables the built-in internal pull-up resistor inside the microcontroller?',
        options: [
          "pinMode(pin, INPUT);",
          "pinMode(pin, INPUT_PULLUP);",
          "pinMode(pin, OUTPUT_PULLUP);",
          "pinMode(pin, RESISTOR_ON);"
],
        correct: 1,
        explanation: 'INPUT_PULLUP configures the GPIO pin as an input and connects an internal ~20k-50kΩ pull-up resistor to VCC, eliminating external resistors.'
      },
      {
        question: 'What causes the \'contact bounce\' phenomenon in physical switches?',
        options: [
          "Electrons bouncing off copper atoms",
          "The elastic metal snap dome physically vibrating and chattering against the contact pads for 5 to 20 milliseconds upon impact",
          "Software bugs in the operating system",
          "Weak batteries"
],
        correct: 1,
        explanation: 'When mechanical contacts slam together, elasticity causes microscopic bouncing for 5-20ms, producing dozens of rapid electrical transitions.'
      },
      {
        question: 'What consequence occurs if you run a click counter sketch without debouncing?',
        options: [
          "The button will refuse to click",
          "A single button press can register as 5, 10, or 20 distinct button clicks",
          "The counter will run backwards",
          "The microcontroller clock speed drops"
],
        correct: 1,
        explanation: 'Because microcontrollers execute millions of instructions per second, every single mechanical bounce is detected as a separate click.'
      },
      {
        question: 'Why is software debouncing using millis() preferred over using delay(50)?',
        options: [
          "millis() makes the code run faster than the speed of light",
          "delay(50) freezes the entire microcontroller CPU, preventing it from handling Wi-Fi, sensors, and displays while waiting",
          "millis() eliminates the need for a button",
          "delay(50) consumes 100 times more battery power"
],
        correct: 1,
        explanation: 'millis() allows non-blocking asynchronous timing. The CPU continues running other background tasks while tracking debounce elapsed time.'
      },
      {
        question: 'What hardware circuit combination can perform passive hardware debouncing without software code?',
        options: [
          "A transformer and fuse",
          "An RC low-pass filter (resistor + capacitor) paired with a Schmitt-trigger buffer",
          "A crystal oscillator and inductor",
          "A bridge rectifier"
],
        correct: 1,
        explanation: 'An RC filter smooths rapid chatter pulses into a gradual analog slope, while a Schmitt trigger with hysteresis squares the signal into clean digital edges.'
      },
      {
        question: 'How are the 4 legs of a standard 6x6mm tactile button connected internally?',
        options: [
          "All 4 legs are isolated until pressed",
          "Opposite pairs of pins on each side are permanently connected in parallel internally",
          "Leg 1 is power, Leg 2 is ground, Leg 3 is signal, Leg 4 is clock",
          "The legs are purely decorative"
],
        correct: 1,
        explanation: 'A standard 4-pin switch has two pairs of internally joined pins. Wiring diagonally across opposite corners guarantees you bridge the switch contacts.'
      },
      {
        question: 'How do IoT devices distinguish between a \'single click\' and a \'long press\'?',
        options: [
          "By measuring the physical force applied to the plastic cap",
          "By measuring how many milliseconds the button input remains continuously LOW",
          "By detecting user fingerprints",
          "By checking the ambient room temperature"
],
        correct: 1,
        explanation: 'Software records the timestamp when the pin drops LOW and compares it when released: <500ms is a click, while >3000ms is a long-press hold.'
      }
    ]
  },

  jumper: {
    title: 'Jumper Wires & Power Distribution Mastery Challenge',
    kicker: 'MODULE 14 CHECKPOINT QUIZ',
    passScore: 7,
    questions: [
      {
        question: 'What is the standard pin pitch spacing of Dupont connector jumper wires and breadboards?',
        options: [
          "1.00 mm pitch",
          "2.54 mm (0.1 inch) pitch",
          "5.08 mm pitch",
          "10.0 mm pitch"
],
        correct: 1,
        explanation: 'Standard breadboard tie-points, IC pin sockets, and Dupont connectors use 2.54mm (0.1 inch) center-to-center pitch.'
      },
      {
        question: 'Which jumper wire configuration is required to connect an ESP32 dev board with pin headers to a sensor with male pin headers?',
        options: [
          "Male-to-Male (M-M)",
          "Female-to-Female (F-F)",
          "Male-to-Female (M-F)",
          "Bare unstripped wire"
],
        correct: 1,
        explanation: 'Connecting two male header pins directly together requires a Female-to-Female (F-F) jumper wire.'
      },
      {
        question: 'According to universal electronics conventions, what wire color MUST represent Ground (0V return)?',
        options: [
          "Bright Red",
          "Black (or Dark Blue in DC circuits)",
          "Yellow",
          "White"
],
        correct: 1,
        explanation: 'Black is standard for Ground (0V return path). Red universally designates positive supply (+VCC).'
      },
      {
        question: 'What hidden trap is present on many full-sized 830-point breadboards?',
        options: [
          "The breadboard secretly reverses electrical polarity",
          "The long side power rails (+ and -) are physically broken into two isolated halves at the center midline",
          "All rows are shorted to ground",
          "The plastic conducts 50 Volts"
],
        correct: 1,
        explanation: 'Full-size breadboards frequently sever power buses at the center line. Devices plugged into the right half receive no power unless bridged with jumpers.'
      },
      {
        question: 'Why can thin, high-gauge (e.g. 28 AWG) jumper wires cause intermittent ESP32 Wi-Fi crashes?',
        options: [
          "Thin wires block radio frequency signals",
          "Resistance in thin wires causes a significant voltage drop during high-current Wi-Fi transmit bursts (up to 500mA), triggering brownout resets",
          "Thin wires run too hot and melt breadboard clips",
          "Thin wires reverse logic 1 and 0"
],
        correct: 1,
        explanation: 'High-resistance wires drop voltage under heavy current (V = I × R). When the ESP32 radio bursts, voltage dips below the reset threshold, rebooting the chip.'
      },
      {
        question: 'What is the primary advantage of multi-strand core wire compared to solid-core wire for breadboard patch cables?',
        options: [
          "Stranded wire is completely immune to electrical noise",
          "Stranded wire is highly flexible and withstands thousands of repeated bends without breaking inside the insulation",
          "Stranded wire has zero electrical resistance",
          "Stranded wire can carry 100 Amps"
],
        correct: 1,
        explanation: 'Multiple thin twisted copper strands provide high mechanical flexibility and fatigue resistance, preventing internal fractures from repeated bending.'
      },
      {
        question: 'Why is \'Common Ground\' (connecting all GND wires together) mandatory in multi-supply circuits?',
        options: [
          "To prevent the power supply from overheating",
          "To provide a shared zero-volt reference point so digital signals can be interpreted consistently across components",
          "To double the total battery capacity",
          "To eliminate the need for signal wires"
],
        correct: 1,
        explanation: 'Voltage is relative. Without a shared Ground return path, microcontrollers cannot measure or interpret incoming signal voltages from external sensors.'
      },
      {
        question: 'What wire routing practice minimizes mutual electromagnetic crosstalk and parasitic capacitance?',
        options: [
          "Creating a messy bird's nest of high airborne looping wires",
          "Routing wires flat along breadboard channels at 90-degree angles and keeping leads as short as practical",
          "Coiling wires into giant tight spirals",
          "Stripping all insulation off wires"
],
        correct: 1,
        explanation: 'Flat, concise routing close to the ground plane reduces inductive loop area and prevents wires from acting as broadcast antennas for RF noise.'
      },
      {
        question: 'Why does twisting power and ground wires together reduce electromagnetic interference (EMI)?',
        options: [
          "It increases wire resistance to absorb noise",
          "Opposing currents in power and return conductors generate equal and opposite magnetic fields that cancel each other out",
          "It creates an impromptu antenna for Wi-Fi",
          "Twisting doubles the wire insulation thickness"
],
        correct: 1,
        explanation: 'Equal currents flowing in opposite directions through twisted pairs generate cancelling magnetic fields, dramatically suppressing radiated noise.'
      },
      {
        question: 'What is the best diagnostic tool to verify that breadboard power rails and jumper wires have solid electrical continuity?',
        options: [
          "A digital multimeter set to Continuity (Audible Beep) or low Resistance (\u03a9) mode",
          "An infrared thermometer",
          "A magnifying glass",
          "A magnetic compass"
],
        correct: 0,
        explanation: 'A multimeter\'s continuity buzzer sounds instantly when a continuous electrical path exists, pinpointing loose crimps or split breadboard rail gaps.'
      }
    ]
  },

  arduino: {
    title: 'Arduino Uno R3 Microcontroller Mastery Challenge',
    kicker: 'MODULE 15 CHECKPOINT QUIZ',
    passScore: 7,
    questions: [
      {
        question: 'What microcontroller chip serves as the central brain of the Arduino Uno R3?',
        options: [
          "Microchip / Atmel ATmega328P (8-bit AVR architecture)",
          "Espressif ESP32 dual-core",
          "Raspberry Pi RP2040",
          "Motorola 68000"
],
        correct: 0,
        explanation: 'The Arduino Uno R3 is built around the ATmega328P 8-bit AVR microcontroller in a DIP-28 or TQFP package.'
      },
      {
        question: 'What is the system clock frequency of the crystal oscillator on the Arduino Uno R3?',
        options: [
          "1.0 MHz",
          "16.0 MHz",
          "240.0 MHz",
          "3.2 GHz"
],
        correct: 1,
        explanation: 'The standard Arduino Uno R3 operates with an external 16 MHz quartz crystal oscillator.'
      },
      {
        question: 'What is the native operating logic voltage of the Arduino Uno R3 I/O pins?',
        options: [
          "1.8 Volts",
          "3.3 Volts",
          "5.0 Volts",
          "12.0 Volts"
],
        correct: 2,
        explanation: 'The Uno operates natively at 5.0V TTL logic, making it rugged and capable of interfacing directly with 5V sensors and relays.'
      },
      {
        question: 'How many total Digital I/O pins and Analog Input pins does the Uno provide?',
        options: [
          "4 Digital and 2 Analog",
          "14 Digital I/O pins (0 to 13) and 6 Analog inputs (A0 to A5)",
          "32 Digital and 16 Analog",
          "100 pins total"
],
        correct: 1,
        explanation: 'The Uno exposes 14 digital pins (0-13, with 6 supporting PWM) and 6 analog input pins (A0-A5).'
      },
      {
        question: 'What is the resolution of the Uno\'s built-in Analog-to-Digital Converter (ADC)?',
        options: [
          "8-bit (values 0 to 255)",
          "10-bit (values 0 to 1023)",
          "12-bit (values 0 to 4095)",
          "16-bit (values 0 to 65535)"
],
        correct: 1,
        explanation: 'The ATmega328P integrated SAR ADC has 10-bit resolution, translating 0V to 5V inputs into numerical integers from 0 to 1023.'
      },
      {
        question: 'Which digital pins on the Arduino Uno support 8-bit hardware Pulse Width Modulation (PWM)?',
        options: [
          "All 14 pins support PWM",
          "Pins marked with a tilde (~): 3, 5, 6, 9, 10, and 11",
          "Only pins 0 and 1",
          "Only pin 13"
],
        correct: 1,
        explanation: 'Six digital pins (~3, ~5, ~6, ~9, ~10, and ~11) connect to internal 8-bit hardware timers that generate PWM signals via analogWrite().'
      },
      {
        question: 'What fundamental lifecycle functions must every Arduino C++ sketch contain?',
        options: [
          "start() and stop()",
          "setup() (runs once on power-up) and loop() (repeats continuously forever)",
          "main() and exit()",
          "init() and destroy()"
],
        correct: 1,
        explanation: 'The Arduino framework requires setup() to configure hardware once, and loop() to execute repeatedly until power is removed.'
      },
      {
        question: 'What is the function of the \'Optiboot\' bootloader stored in high flash memory?',
        options: [
          "It connects the Uno to Wi-Fi networks",
          "It receives compiled machine code over USB/serial and flashes it into program memory without an external hardware programmer",
          "It formats the computer's hard drive",
          "It acts as a graphical user interface"
],
        correct: 1,
        explanation: 'Optiboot is a 512-byte bootloader that intercepts serial data after auto-reset and writes new user firmware directly into flash memory.'
      },
      {
        question: 'Why shouldn\'t you connect sensors or switches to pins 0 and 1 while uploading code to the Uno?',
        options: [
          "Pins 0 and 1 carry 220V dangerous voltage",
          "Pins 0 (RX) and 1 (TX) are directly wired to the USB-to-Serial chip used for code flashing and debugging",
          "Pins 0 and 1 only work on Tuesdays",
          "Pins 0 and 1 are non-functional dummy pins"
],
        correct: 1,
        explanation: 'Pins 0 (RX) and 1 (TX) share hardware connections with the ATmega16U2 USB interface. External devices can disrupt serial flashing.'
      },
      {
        question: 'When pairing an Arduino Uno (5V) with an ESP32 (3.3V) over UART, what must be placed on the Uno\'s TX line?',
        options: [
          "A step-up transformer to 12V",
          "A voltage divider or level shifter to safely step down the 5V TX signal to 3.3V for the ESP32 RX pin",
          "A 10-amp fuse",
          "A sound buzzer"
],
        correct: 1,
        explanation: 'The Uno outputs 5V signals, but the ESP32 is a 3.3V device. Stepping Uno TX down with a 1kΩ/2kΩ divider prevents frying the ESP32 input.'
      }
    ]
  }
};
