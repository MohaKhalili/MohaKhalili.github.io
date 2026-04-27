// Edit this file to change your portfolio content.
// GitHub Pages can serve this directly; no build tools are required.

window.PORTFOLIO_DATA = {
  "owner": {
    "name": "Mohammad Khalili",
    "eyebrow": "Project Portfolio",
    "tagline": "Embedded/Control Systems · Automotive · Battery Technology · Robotics · IoT",
    "footer": "Mohammad Khalili · Project Portfolio",
    "intro": "Embedded Software Engineer with 11+ years of experience in firmware, battery management systems, control systems, HIL testing, and system-level debugging. Experienced in translating field data, hardware behavior, and stakeholder needs into clear software, hardware, and system requirements. Seeking Embedded/Software/Systems Engineering roles focused on Automotive, ESS, Electromobility, Control Systems, IoT, and Robotics.",
    "email": "ex.khalili@example.com",
    "github": "https://github.com/mohakhalili",
    "linkedin": "https://www.linkedin.com/in/mohammad-khalili/"
  },
  "areas": [
    {
      "slug": "battery-technology-automotive",
      "title": "Battery Technology & Automotive",
      "shortTitle": "Battery Technology & Automotive",
      "countLabel": "5 projects",
      "sectionNumber": "01",
      "color": "#8fb0b7",
      "summary": "Battery systems, estimation, verification, diagnostics, and product-quality leadership.",
      "projects": [
        {
          "title": "Software Quality Leadership - ESS",
          "subtitle": "System-level reviews and technical investigations for electromobility ESS across multiple vehicle brands.",
          "organization": "Volvo Group · Gothenburg · 2024–2026",
          "tags": [
            "ESS SW",
            "RCA",
            "Teardown",
            "Data Analysis"
          ],
          "focus": "Senior Software Quality Leader for Volvo Group through Integro Consulting AB, focusing on software-related field campaigns, EV energy storage system investigations, customer issue analysis, and cross-functional quality leadership across Volvo Trucks, Renault Trucks, engineering, markets, and brand teams.",
          "highlights": [
            "Led software-related field campaigns for Volvo and Renault Trucks.",
            "Analyzed customer issues, field data, CAN logs, and vehicle behavior using SQL, Python, CANalyzer, CAN, and JIRA.",
            "Led system-level root-cause investigations across software, hardware, sensing, diagnostics, calibration, and integration.",
            "Coordinated engineering, quality, brand, project, market, supplier, purchasing, and safety teams."
          ],
          "impact": [
            "Defined corrective actions to improve EV energy storage system behavior.",
            "Connected software behavior, vehicle symptoms, and field evidence into actionable system-level quality decisions.",
            "Turned field evidence and technical findings into quality decisions, specification updates, and improved product robustness."
          ],
          "imagePlaceholders": [
            "Pack teardown / inspection photo",
            "System behavior evidence / log screenshot"
          ]
        },
        {
          "title": "UPS Battery Management System",
          "subtitle": "BMS for large lead-acid UPS battery houses in telecommunication infrastructure.",
          "organization": "DowranSET · TIC UPS battery houses · 2017–2023",
          "tags": [
            "Lead-acid BMS",
            "STM32",
            "HIL",
            "IEC/ISO tests"
          ],
          "focus": "Developed a UPS Battery Management System for TIC telecommunication battery houses, focusing on SOC estimation, battery modelling, measurement accuracy, charge-discharge control, safety, verification, and certification of large-scale lead-acid UPS systems used in critical infrastructure environments.",
          "highlights": [
            "Implemented SOC estimation using coulomb counting and Kalman filtering.",
            "Designed measurement-module PCBs and improved current and voltage accuracy.",
            "Modelled batteries with EEC methods and performed SIL verification.",
            "Built BMS functions, test procedures, and PIL/HIL verification using STM32 microcontrollers.",
            "Researched indirect battery impedance measurement methods for diagnostics."
          ],
          "impact": [
            "Delivered a safe, verified BMS prototype for telecom UPS applications.",
            "Supported certification for systems with up to 60 lead-acid batteries.",
            "Achieved high-accuracy A/D-based voltage measurement.",
            "Created a scalable solution with expected annual revenue potential of $500K."
          ],
          "imagePlaceholders": [
            "UPS battery house / cabinet photo",
            "Measurement PCB or HIL setup"
          ]
        },
        {
          "title": "Industrial Lithium-Ion Battery Pack",
          "subtitle": "Portable 220V lithium-ion battery pack for power relay testing, power plants, and general use.",
          "organization": "DowranSET · VEBKO / portable 220V pack · 2017–2023",
          "tags": [
            "Li-ion Battery",
            "Thermal",
            "220V output",
            "Lifecycle"
          ],
          "focus": "Developed an industrial portable lithium-ion battery pack for VEBKO, supporting power relay testing in powerplants and broader 220V use cases such as home appliances and camping, with focus on SOC estimation, battery modelling, thermal management, safety packaging, and lifecycle validation.",
          "highlights": [
            "Implemented SOC estimation using open-circuit voltage and coulomb counting.",
            "Modelled and tested lithium-ion cells with EEC methods and online characterization.",
            "Developed PCC-based thermal management using AllCell material.",
            "Validated voltage, current, temperature, and lifecycle behavior under static, dynamic, and vehicle-like load cycles.",
            "Designed safety-oriented battery packaging for industrial portability."
          ],
          "impact": [
            "Delivered a portable 220V lithium-ion pack for power plant relay testers.",
            "Expanded product usability to home appliances and camping applications.",
            "Improved safety and reliability through thermal management, characterization, and environmental validation.",
            "Supported industrial and general-purpose deployment of the product."
          ],
          "imagePlaceholders": [
            "Portable pack product photo",
            "Thermal or load-cycle test setup"
          ]
        },
        {
          "title": "EV Battery Management System",
          "subtitle": "Battery management and real-time testing systems for two-seater electric vehicles.",
          "organization": "SYNTECH · Renault Twizy / PARAXMOTORS YOOZ · 2014–2017",
          "tags": [
            "Embedded C",
            "Kalman Filter",
            "SOC / SOH",
            "MATLAB/Simulink"
          ],
          "focus": "Developed and verified an EV Battery Management System for Renault Twizy and PARAXMOTORS YOOZ two-seater EVs, focusing on SOC/SOH estimation, lithium-ion battery modelling, real-time testing, thermal management, HIL verification, and integration between battery pack, BMS, and vehicle motor.",
          "highlights": [
            "Implemented SOC estimation with coulomb counting and Kalman filtering.",
            "Modelled lithium-ion batteries using EEC models and evaluated state estimation methods.",
            "Designed a real-time MATLAB/Simulink-compatible test bed connecting vehicle dynamics, load cycles, active load, battery pack, BMS, and motor.",
            "Implemented HIL verification using Xilinx Zynq-7000 SoC and developed air-based thermal management."
          ],
          "impact": [
            "Achieved 1% SOC accuracy for EV battery pack estimation.",
            "Validated SOH estimation through lifecycle testing and impedance analysis.",
            "Enabled successful real-time simulation of BMS operation and performance.",
            "Strengthened control and HIL readiness for EV battery system development."
          ],
          "imagePlaceholders": [
            "EV battery pack / vehicle photo",
            "Real-time HIL test-bed diagram"
          ]
        },
        {
          "title": "Battery Pack Parameters Monitoring System",
          "subtitle": "Monitoring system for the University of Tehran PGSC Solar Car battery pack.",
          "organization": "SYNTECH · PGSC Solar Car · 2014–2017",
          "tags": [
            "Solar Car",
            "Current Sensing",
            "SoC",
            "Calibration"
          ],
          "focus": "Developed a Battery Pack Parameters Monitoring System for the PGSC Solar Car, focusing on current sensing calibration, battery parameter monitoring, and SOC estimation using coulomb counting to support reliable energy tracking during solar vehicle operation.",
          "highlights": [
            "Calibrated the shunt current sensor for accurate battery current measurement.",
            "Implemented SOC estimation using the coulomb counting method.",
            "Derived a polynomial equation for the current sensor using curve fitting and validation."
          ],
          "impact": [
            "Achieved 1% current sensor accuracy through calibration and curve fitting.",
            "Improved reliability of SOC tracking and battery monitoring.",
            "Supported better energy visibility for solar car testing and operation."
          ],
          "imagePlaceholders": [
            "Solar car / battery pack photo",
            "Sensor calibration or dashboard screenshot"
          ]
        }
      ]
    },
    {
      "slug": "robotics-control",
      "title": "Robotics & Control",
      "shortTitle": "Robotics & Control",
      "countLabel": "8 projects",
      "sectionNumber": "02",
      "color": "#918daf",
      "summary": "Bio-inspired locomotion, force sensing, quadrupeds, drones, and control-system design.",
      "projects": [
        {
          "number": "06",
          "title": "Bio-inspired Controller for Quadruped Robots",
          "subtitle": "Locomotion control architecture inspired by biological central pattern generators.",
          "organization": "DowranSET · Robotics · 2017–2023",
          "tags": [
            "CPG",
            "Hopf Oscillators",
            "ILC+PD",
            "Legged Robots"
          ],
          "focus": "Designed bio-inspired control strategies for quadruped robots, focusing on central pattern generators, nonlinear Hopf oscillators, gait generation, sensory feedback integration, and evaluation of legged robot kinematics and dynamics for stable, adaptive locomotion across swing and stance phases.",
          "highlights": [
            "Designed CPG networks using nonlinear Hopf oscillators.",
            "Evaluated kinematics and dynamics of legged robots.",
            "Simulated sensory feedback integration within bio-inspired controllers.",
            "Developed independent swing and stance phase control.",
            "Implemented multiple locomotion gaits using one controller network.",
            "Combined ILC and PD control to improve tracking accuracy."
          ],
          "impact": [
            "Enabled flexible multi-gait locomotion with a single control network.",
            "Achieved independent control of swing and stance phases.",
            "Reduced trajectory tracking error to below 0.1 rad.",
            "Improved controller adaptability through sensory feedback and bio-inspired design."
          ],
          "imagePlaceholders": [
            "Quadruped simulation image",
            "Controller architecture / gait plot"
          ]
        },
        {
          "number": "07",
          "title": "Force Measurement System on the Human Foot",
          "subtitle": "Bio-inspired robotics and rehabilitation measurement system for analyzing human foot force patterns.",
          "organization": "DowranSET · Robotics & rehabilitation · 2017–2023",
          "tags": [
            "Rehabilitation",
            "Wi-Fi",
            "MATLAB",
            "Force Sensing"
          ],
          "focus": "Developed a force measurement system for the human foot in robotics and rehabilitation, focusing on bio-inspired methods, embedded sensing, wireless data acquisition, and force pattern analysis to support research on restoring mobility and assisting people with disabilities.",
          "highlights": [
            "Researched bio-inspired robotic methods for human rehabilitation.",
            "Designed the electrical and embedded system architecture.",
            "Implemented Wi-Fi communication for wireless force data transfer.",
            "Imported measurement data into MATLAB for analysis.",
            "Analyzed human foot force patterns with high accuracy."
          ],
          "impact": [
            "Enabled accurate monitoring of human foot force distribution.",
            "Supported rehabilitation-focused robotics research.",
            "Improved data accessibility through wireless MATLAB integration.",
            "Provided a practical measurement platform for analyzing mobility, gait behavior, and assistive technology concepts."
          ],
          "imagePlaceholders": [
            "Foot sensor prototype photo",
            "Force pattern plot / MATLAB analysis"
          ]
        },
        {
          "number": "08",
          "title": "Y6 Multirotor",
          "subtitle": "Y-shape multirotor dynamics, fuzzy PD control, and HIL validation.",
          "organization": "SYNTECH · Drone projects · 2014–2017",
          "tags": [
            "Y6",
            "Fuzzy PID",
            "HIL",
            "Autopilot"
          ],
          "focus": "Developed control and modelling solutions for a Y6 multirotor, focusing on position and attitude control, equations of motion for the Y-shaped configuration, fuzzy PD controller design, HIL validation, performance improvement, and customer-ready autopilot approval.",
          "highlights": [
            "Modelled the equations of motion for the Y-shaped multirotor configuration.",
            "Designed a fuzzy PD controller for position and attitude control.",
            "Implemented and tested the controller in an HIL environment.",
            "Supported autopilot tuning and validation for customer approval."
          ],
          "impact": [
            "Successfully validated the fuzzy PD controller in HIL.",
            "Achieved multirotor speed twice as fast as conventional systems.",
            "Supported customer approval of the autopilot by demonstrating stable position and attitude control performance."
          ],
          "imagePlaceholders": [
            "Y6 multirotor photo",
            "HIL controller test plot"
          ]
        },
        {
          "number": "09",
          "title": "Solar UAV",
          "subtitle": "Long-endurance UAV with solar power source and HIL-tuned autopilot.",
          "organization": "SYNTECH · Solar UAV · 2014–2017",
          "tags": [
            "Solar UAV",
            "HIL Tuning",
            "Autopilot",
            "Competition"
          ],
          "focus": "Developed and validated autopilot control for a Solar UAV, focusing on dynamic system simulation, controller design, HIL-based tuning, intelligent parameter optimization, and long-endurance flight capability using solar power for forestry-related applications.",
          "highlights": [
            "Tested the designed autopilot on the Solar UAV.",
            "Simulated the UAV dynamic system for control development.",
            "Designed and tuned controller parameters in HIL.",
            "Optimized controller performance using intelligent methods.",
            "Supported solar-powered long-endurance flight validation."
          ],
          "impact": [
            "Achieved 2nd place in a national Hobby UAV competition.",
            "Supported approval for long-endurance forestry applications.",
            "Improved autopilot readiness through simulation, HIL tuning, and optimized control parameters."
          ],
          "imagePlaceholders": [
            "Solar UAV airframe photo",
            "Autopilot/HIL tuning screenshot"
          ]
        },
        {
          "number": "10",
          "title": "Multirotor & UAV Autopilot",
          "subtitle": "Embedded autopilot platform with IMU calibration, sensor fusion, CAN modules, and energy optimization.",
          "organization": "SYNTECH · UAV autopilot · 2014–2017",
          "tags": [
            "Autopilot",
            "CAN",
            "IMU",
            "Sensor Fusion"
          ],
          "focus": "Developed a Multirotor and UAV Autopilot system focused on IMU calibration, sensor fusion, PCB and electrical design, CAN-BUS peripheral integration, wireless monitoring, and energy optimization through direct connection with the battery management system.",
          "highlights": [
            "Calibrated IMU sensors using curve fitting methods.",
            "Programmed Kalman filter-based sensor fusion algorithms.",
            "Designed PCB layout and selected electrical components.",
            "Integrated peripheral modules through CAN-BUS communication.",
            "Designed direct BMS connection for energy optimization.",
            "Added wireless monitoring, fuel, engine speed, and temperature measurement."
          ],
          "impact": [
            "Improved autopilot sensing reliability through calibrated IMU and sensor fusion.",
            "Enabled modular CAN-BUS architecture and portable wireless monitoring.",
            "Reduced energy-management complexity by connecting directly to the BMS.",
            "Expanded system diagnostics with fuel, engine speed, and temperature measurements."
          ],
          "imagePlaceholders": [
            "Autopilot PCB photo",
            "Wireless monitor / sensor fusion diagram"
          ]
        },
        {
          "number": "11",
          "title": "Inertial Measurement System",
          "subtitle": "Commercial IMU product with calibration UI and low-power embedded design.",
          "organization": "SYNTECH · IMU product · 2014–2017",
          "tags": [
            "IMU",
            "Calibration",
            "MATLAB",
            "Low Power"
          ],
          "focus": "Developed an Inertial Measurement System focused on IMU calibration, user interface design, MATLAB-based curve fitting, HIL validation, commercial product readiness, and low-power operation for embedded sensing applications.",
          "highlights": [
            "Designed the user interface for IMU setting and calibration.",
            "Calibrated IMU sensors using MATLAB-based curve fitting.",
            "Performed calibration and validation through HIL testing.",
            "Supported development of the first commercial IMU product.",
            "Optimized the system for very low power consumption."
          ],
          "impact": [
            "Delivered the first commercial IMU solution.",
            "Improved calibration accuracy through MATLAB curve fitting and HIL validation.",
            "Enabled easier configuration through a dedicated user interface.",
            "Achieved very low power consumption for embedded sensing applications."
          ],
          "imagePlaceholders": [
            "IMU device / board photo",
            "Calibration UI or curve-fitting plot"
          ]
        },
        {
          "number": "12",
          "title": "UAV Engine Parameters Measurement System",
          "subtitle": "Embedded measurement system for engine exhaust gases and fuel-gauge sensing.",
          "organization": "SYNTECH · UAV engine sensing · 2014–2017",
          "tags": [
            "Engine Sensing",
            "PCB",
            "Fuel Gauge",
            "Exhaust Gases"
          ],
          "focus": "Developed a UAV engine parameters measurement system focused on PCB design, exhaust gas sensing, and high-precision fuel measurement.",
          "highlights": [
            "Designed schematic and PCB for the measurement system.",
            "Built exhaust gas measurement capability.",
            "Developed a precise fuel gauge using a new electromagnetic method."
          ],
          "impact": [
            "Enabled reliable UAV engine parameter monitoring.",
            "Improved fuel measurement precision.",
            "Supported better diagnostics and operational awareness."
          ],
          "imagePlaceholders": [
            "Engine measurement hardware photo",
            "Fuel/exhaust measurement setup"
          ]
        },
        {
          "number": "13",
          "title": "Serial Protocol Switcher System",
          "subtitle": "Two-way serial protocol switching system for combining multiple serial ports.",
          "organization": "SYNTECH · Hobby/industrial communication · 2014–2017",
          "tags": [
            "Serial Ports",
            "2-way Comm",
            "PCB",
            "Hobby Market"
          ],
          "focus": "Developed a Serial Protocol Switcher System focused on managing multiple serial protocols, combining several serial ports, enabling reliable two-way communication, and supporting flexible connectivity for hobby-market and embedded system applications.",
          "highlights": [
            "Researched challenges in using multiple serial protocols.",
            "Designed schematic and PCB for the switching system.",
            "Developed functionality to combine multiple serial ports.",
            "Implemented complete two-way communication between connected devices."
          ],
          "impact": [
            "Delivered a practical multi-protocol serial communication solution.",
            "Enabled flexible port combination and bidirectional data exchange.",
            "Generated approximately $10K annual revenue in the hobby market."
          ],
          "imagePlaceholders": [
            "Serial switcher hardware photo",
            "Connection diagram or serial test setup"
          ]
        }
      ]
    },
    {
      "slug": "iot-smart-devices",
      "title": "IoT & Smart Devices",
      "shortTitle": "IoT & Smart Devices",
      "countLabel": "3 projects",
      "sectionNumber": "03",
      "color": "#88aa9c",
      "summary": "Connected embedded products, sensing, communication bridges, and user-facing devices.",
      "projects": [
        {
          "number": "14",
          "title": "Smart Hospital Switch",
          "subtitle": "Gesture-based electrical control concept for emergency-room environments.",
          "organization": "DowranSET · Healthcare technology · 2017–2023",
          "tags": [
            "Gesture Control",
            "PCB",
            "Healthcare",
            "Usability"
          ],
          "focus": "Developed a gesture-based smart hospital switch for emergency rooms, focusing on touchless electrical control, healthcare usability needs, adjustable sensing distance, PCB design, and reliable operation in clinical conditions.",
          "highlights": [
            "Researched healthcare technology needs for emergency room environments.",
            "Designed and tested the PCB-based smart switch.",
            "Validated gesture detection under various operating conditions.",
            "Implemented adjustable functional distance for flexible clinical use."
          ],
          "impact": [
            "Achieved 94% gesture detection success rate.",
            "Enabled touchless electrical control for emergency rooms.",
            "Supported user satisfaction through practical, adjustable, and healthcare-focused design."
          ],
          "imagePlaceholders": [
            "Switch prototype photo",
            "Gesture detection test setup"
          ]
        },
        {
          "number": "15",
          "title": "Smart Building Management System",
          "subtitle": "Embedded and embedded-Linux platform for environmental sensing and smart-building response.",
          "organization": "DowranSET · Smart City · 2017–2023",
          "tags": [
            "Embedded Linux",
            "Sensors",
            "Smart City",
            "PCB"
          ],
          "focus": "Developed a Smart Building Management System for smart city applications, focusing on embedded systems, Embedded Linux, environmental sensing, sound detection, PCB design, user needs alignment, and performance validation through practical testing.",
          "highlights": [
            "Developed embedded systems and Embedded Linux functionality.",
            "Designed schematic and PCB for the environmental sensor board.",
            "Tested and verified system performance and functionality.",
            "Aligned technology features with user needs.",
            "Improved system performance based on practical test results."
          ],
          "impact": [
            "Achieved 91% success in detecting environmental sounds.",
            "Improved smart building sensing and monitoring capabilities.",
            "Expanded system performance through practical validation and user-focused feature development."
          ],
          "imagePlaceholders": [
            "Sensor board / device photo",
            "Building dashboard or environment test"
          ]
        },
        {
          "number": "16",
          "title": "Serial to Ethernet Converter",
          "subtitle": "Industrial communication device for converting serial protocols to network connectivity.",
          "organization": "DowranSET · Industrial communication · 2017–2023",
          "tags": [
            "Serial",
            "Ethernet",
            "TCP/UDP",
            "Wi-Fi"
          ],
          "focus": "Developed a Serial to Ethernet Converter for industrial device communication, focusing on serial-to-TCP/UDP conversion, simultaneous Wi-Fi connectivity, software beta testing, technical documentation, and flexible direct or crossover network connection modes.",
          "highlights": [
            "Designed schematics and PCB for the converter hardware.",
            "Beta-tested software functionality and communication behavior.",
            "Implemented serial protocol conversion to TCP/UDP over Ethernet.",
            "Enabled simultaneous connection of up to 10 Wi-Fi devices.",
            "Prepared technical user guides, including documents and videos.",
            "Supported direct and crossover connection modes."
          ],
          "impact": [
            "Delivered flexible serial-to-Ethernet communication for industrial devices.",
            "Enabled up to 10 simultaneous Wi-Fi device connections.",
            "Improved usability through documented setup and support materials.",
            "Supported reliable bidirectional communication across different connection configurations."
          ],
          "imagePlaceholders": [
            "Converter product photo",
            "Connection topology / configuration UI"
          ]
        }
      ]
    },
    {
      "slug": "power-electronics-energy",
      "title": "Power Electronics & Energy",
      "shortTitle": "Power Electronics & Energy",
      "countLabel": "2 projects",
      "sectionNumber": "04",
      "color": "#c98f74",
      "summary": "Photovoltaic systems, MPPT algorithms, and high-efficiency power conversion.",
      "projects": [
        {
          "number": "17",
          "title": "Portable Photovoltaic System",
          "subtitle": "Portable solar-energy concept with optimized solar-cell assembly and MPPT control.",
          "organization": "DowranSET · Photovoltaic energy · 2017–2023",
          "tags": [
            "Solar",
            "MPPT",
            "99.4% tracking",
            "Business Plan"
          ],
          "focus": "Developed a Portable Photovoltaic System focused on optimized solar cell assembly, MPPT integration, market readiness, and efficient solar energy harvesting for portable photovoltaic energy applications.",
          "highlights": [
            "Optimized solar cell assembly for portable PV configuration.",
            "Integrated MPPT functionality and tracking algorithm.",
            "Prepared a market-oriented business plan.",
            "Evaluated system efficiency and energy-harvesting performance."
          ],
          "impact": [
            "Achieved 99.4% MPPT tracking algorithm efficiency.",
            "Improved portable solar energy utilization.",
            "Supported market readiness with a clear business plan."
          ],
          "imagePlaceholders": [
            "Portable PV prototype photo",
            "MPPT curve or converter schematic"
          ]
        },
        {
          "number": "18",
          "title": "MPPT for Solar UAV",
          "subtitle": "Maximum Power Point Tracker and DC–DC converter design for solar UAV power systems.",
          "organization": "SYNTECH · Solar UAV power · 2014–2017",
          "tags": [
            "MPPT",
            "DC-DC",
            "99% tracking",
            "98.5% converter"
          ],
          "focus": "Developed an MPPT system for a Solar UAV, focusing on solar energy harvesting, MPP algorithm development, electrical schematic and PCB implementation, DC-DC converter efficiency, and reliable power optimization for endurance-focused UAV applications.",
          "highlights": [
            "Designed and implemented electrical schematics and PCB hardware.",
            "Researched and developed the MPP tracking algorithm.",
            "Integrated MPPT functionality with the UAV power system.",
            "Improved DC-DC converter performance through testing and optimization.",
            "Validated tracking efficiency and converter behavior for solar operation."
          ],
          "impact": [
            "Achieved 99% MPPT tracking algorithm efficiency.",
            "Improved DC-DC converter efficiency to 98.5%.",
            "Enhanced solar power utilization for UAV endurance.",
            "Supported more efficient and reliable energy management in flight applications."
          ],
          "imagePlaceholders": [
            "MPPT PCB or converter photo",
            "PV power curve / efficiency result"
          ]
        }
      ]
    },
    {
      "slug": "test-equipment",
      "title": "Test Equipment",
      "shortTitle": "Test Equipment",
      "countLabel": "2 projects",
      "sectionNumber": "05",
      "color": "#8ca0b8",
      "summary": "Concrete and soil resistivity measurement systems.",
      "projects": [
        {
          "number": "19",
          "title": "Rapid Chloride Migration Test Measurement System",
          "subtitle": "RCPT measurement device for building-construction and concrete-testing applications.",
          "organization": "DowranSET · Concrete testing · 2017–2023",
          "tags": [
            "RCPT",
            "CC-CV",
            "Precision Measurement",
            "BOM"
          ],
          "focus": "Developed an RCMT/RCPT measurement system for concrete testing in building construction, focusing on electrical and mechanical concept design, current and voltage measurement accuracy, BOM preparation, and CC-CV control algorithm implementation.",
          "highlights": [
            "Researched and developed RCPT device concepts.",
            "Prepared and selected bill of materials.",
            "Designed electrical and mechanical system architecture.",
            "Implemented CC-CV control algorithms.",
            "Improved current and voltage measurement precision through system design and validation."
          ],
          "impact": [
            "Increased current measurement precision to 1 mA.",
            "Improved voltage measurement precision to ±0.1 V.",
            "Delivered a more accurate measurement platform for concrete durability and chloride migration testing."
          ],
          "imagePlaceholders": [
            "RCPT device photo",
            "Electrical/mechanical concept or test result"
          ]
        },
        {
          "number": "20",
          "title": "Soil Resistivity Measurement System",
          "subtitle": "Rugged test-equipment platform for soil resistivity measurement and power injection.",
          "organization": "DowranSET · Soil testing · 2017–2023",
          "tags": [
            "Soil Testing",
            "Kalman",
            "IP66",
            "EMC"
          ],
          "focus": "Developed a Soil Resistivity Measurement System for construction soil testing, focusing on Kalman filter simulation, PCB design, power injection simulation and testing, environmental protection, and EMC-compliant measurement hardware for reliable field and laboratory use.",
          "highlights": [
            "Simulated Kalman filter behavior for measurement signal processing.",
            "Designed PCB hardware for the soil resistivity tester.",
            "Simulated and tested power injection performance.",
            "Supported environmental and EMC validation activities."
          ],
          "impact": [
            "Passed IP66 environmental protection requirements.",
            "Passed electromagnetic compatibility validation.",
            "Improved measurement robustness through tested power injection and Kalman filter simulation."
          ],
          "imagePlaceholders": [
            "Soil resistivity device photo",
            "Power injection or field-test setup"
          ]
        }
      ]
    }
  ]
};
