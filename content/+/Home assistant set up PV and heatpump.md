---
up: 
related: 
created: 2025-04-21
tags:
---






Here's a **step-by-step implementation plan** with embedded procedures, tailored for your Portuguese stone house with GoodWe/Tesla/Daikin setup. I'll structure this as a clear roadmap with dependencies marked:

---

### **Phase 0: Pre-Implementation Audit** (Day 1-2)
**Objective**: Establish baseline measurements

1. **GoodWe System Verification**
   - [Procedure: Local API Connectivity Test](https://github.com/robbinjanssen/home-assistant-goodwe#testing-connection)
   ```bash
   telnet 192.168.x.x 8899  # Verify inverter port access
   ```
   - **Question**: Can you access the inverter's web interface at `http://[IP]`?

2. **Energy Flow Mapping**
   ```yaml
   # temporary sensors.yaml
   sensor:
     - platform: template
       sensors:
         total_consumption_estimate:
           value_template: >
             {{ states('sensor.goodwe_load_power')|float 
             + states('sensor.tesla_charging_power')|float
             + 500 }}  # Base load estimate
   ```

---

### **Phase 1: Core Monitoring** (Day 3-5)
**Objective**: Real-time visibility

1. **GoodWe Integration**
   - [Install HACS Component](https://hacs.xyz/docs/setup/download)
   - [GoodWe Configuration Guide](https://github.com/robbinjanssen/home-assistant-goodwe#configuration)
   ```yaml
   # configuration.yaml
   goodwe:
     ip_address: !secret goodwe_ip
     battery_1:
       capacity: 15000
       chemistry: nmc
   ```

2. **Basic Dashboard Setup**
   ```yaml
   # ui-lovelace.yaml
   cards:
     - type: energy-distribution
       entities:
         grid: sensor.goodwe_grid_power
         solar: sensor.goodwe_pv_power
         battery: sensor.goodwe_battery_power
   ```
   ![Energy Dashboard Example](https://www.home-assistant.io/images/blog/2021-08-energy/distribution-card.png)

---

### **Phase 2: Load Control** (Day 6-10)
**Objective**: Strategic load shifting

1. **Heat Pump Scheduling**
   ```yaml
   # automations.yaml
   - id: daikin_solar_optimization
     alias: "Daikin Solar-Powered Heating"
     trigger:
       - platform: numeric_state
         entity_id: sensor.goodwe_pv_power
         above: 2500
     action:
       - service: climate.set_temperature
         target:
           entity_id: climate.daikin_brp069a78
         data:
           temperature: "{{ states('sensor.outdoor_temp')|float + 10 }}"
   ```

2. **Dehumidifier Optimization**
   ```yaml
   input_boolean:
     dehumidifier_season:
       name: "Wet Season Mode"
       initial: on  # Default for Portugal Oct-Apr

   automation:
     - id: dehumidifier_solar_control
       trigger:
         - platform: state
           entity_id: sensor.goodwe_battery_soc
           above: 50
       action:
         - service: switch.turn_on
           target:
             entity_id: switch.dehumidifier_*
   ```

---

### **Phase 3: Advanced Optimization** (Day 11-14)
**Objective**: Automated cost savings

1. **Gold Energy Tariff Integration**
   ```yaml
   rest_command:
     fetch_gold_energy_tariffs:
       url: "https://api.goldenergy.pt/public/v1/prices"
       method: GET
       headers:
         Accept: "application/json"
   ```

2. **Bidirectional Meter Logic**
   ```yaml
   utility_meter:
     energy_export:
       source: sensor.goodwe_grid_power
       tariffs:
         - peak
         - off_peak
   ```

---

### **Phase 4: Off-Grid Preparation** (Month 2-3)
**Objective**: Energy independence

1. **Island Mode Configuration**
   ```yaml
   script:
     enable_island_mode:
       sequence:
         - service: goodwe.set_work_mode
           data:
             mode: "backup"
         - delay: "00:00:10"
         - service: switch.turn_off
           target:
             entity_id: switch.grid_tie
   ```

2. **Thermal Mass Calculator**
   ```python
   # Developer Tools > Template
   {{ (12000 * 0.84 * (states('climate.daikin_brp069a78')|float - 15)) / 3600 }}
   # Returns kWh needed to heat stone mass
   ```

---

### **Implementation Checklist**

| Task | Est. Time | Tools Needed | Dependency |
|------|-----------|--------------|------------|
| GoodWe API Test | 1h | Laptop, Network cable | None |
| Base Dashboard | 2h | HACS | GoodWe online |
| Daikin Control | 3h | ESPHome/Modbus | Heat pump model specs |
| Tariff Automation | 4h | Gold Energy API key | Phase 1 complete |

---

### **Critical Questions Before Implementation**

1. **Electrical Safety**: 
   - Do you have access to your consumer unit to verify circuit breakers match your planned loads?
   - Should we include a step for verifying Schuko socket ratings before EV automation?

2. **Data Validation**:
   - Would you prefer to cross-validate GoodWe data with a Shelly EM before full automation?

3. **Portuguese Compliance**:
   - Does your installation need to follow [ERSE's new 2024 regulations](https://www.erse.pt/atividade/regulamentos/electricidade/) for microgeneration?

4. **Physical Access**:
   - Can you safely access the Daikin BRP069A78's wired controller for direct Modbus connection?

---

### **Recommended Learning Resources**

1. [Portuguese Solar Forum](https://www.forumdascerejas.pt/fotovoltaicos)
2. [GoodWe NMC Battery Manual (PT)](https://www.goodwe.com/pt/suporte/manuais/)
3. [Home Assistant Portugal Community](https://community.home-assistant.io/c/portugal/59)

Would you like me to:
1. Provide wiring diagrams for your specific equipment?
2. Create a downloadable checklist with timestamps?
3. Focus first on the most urgent pain point (e.g., high winter bills)?