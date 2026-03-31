# Ultimate Home Energy Management System (HEMS) Design

**For Phil’s Stone House, Gaeiras, Portugal**

-----

## 1. System Restatement & Understanding

Your home is a sophisticated energy ecosystem with:

**Energy Generation & Storage:**

- **PV System:** 13 kWp (currently producing ~4.4 kW at 10:05 AM local time)
- **Battery:** 20.7 kWh usable (Pylon BMS, currently at 40% SOC = 8.3 kWh available)
- **Inverter:** Solarman single-phase hybrid (5.2 kW max output observed)

**Major Loads:**

- **EV:** Tesla Model Y Long Range (75 kWh battery, 57% SOC, currently charging at 2W)
- **Space Heating:** Daikin Altherma M3 heat pump (120 min runtime today)
- **DHW:** Monoblock heat pump (45 min runtime today)
- **Dehumidifiers:** Hall & Cave units (currently off, controllable via smart plugs)
- **Base Load:** Currently 517W house consumption

**Tariff Structure (Gold Energy Portugal):**

- **Low (Vazio):** 00:00-07:00 daily + ALL day Sunday
- **Mixed (Fora de Vazio):** Saturday
- **Normal (Fora de Vazio):** Weekday 07:00-00:00

**Climate Context:** Mediterranean with:

- Mild winters (7-15°C current conditions)
- Hot summers (30-40°C)
- Shoulder seasons with high variability
- Current solar forecast: 70.6 kWh today, 28.1 kWh tomorrow

-----

## 2. Unified Energy Asset Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                    ENERGY CONTROL HIERARCHY                      │
└─────────────────────────────────────────────────────────────────┘

                        ┌──────────────┐
                        │  MCP AGENT   │
                        │  (Claude)    │
                        └──────┬───────┘
                               │
                               ▼
                    ┌──────────────────┐
                    │  HEMS ORCHESTRATOR│
                    │  (Home Assistant) │
                    └────────┬──────────┘
                             │
        ┌────────────────────┼────────────────────┐
        │                    │                    │
        ▼                    ▼                    ▼
┌──────────────┐    ┌──────────────┐    ┌──────────────┐
│ GENERATION   │    │   STORAGE    │    │  CONSUMPTION │
└──────────────┘    └──────────────┘    └──────────────┘

┌─ GENERATION ─────────────────────────────────────────────────┐
│ PV System: 13 kWp                                             │
│ ├─ String 1: 327.9V @ 6.0A = 1,944W                          │
│ ├─ String 2: 336.9V @ 7.5A = 2,499W                          │
│ └─ String 3: 6.8V @ 0A = 0W (inactive/monitoring)            │
│                                                                │
│ Current Production: 4,443W                                    │
│ Today Forecast: 70.6 kWh                                      │
│ Tomorrow Forecast: 28.1 kWh                                   │
└───────────────────────────────────────────────────────────────┘

┌─ STORAGE ────────────────────────────────────────────────────┐
│ Battery System: Pylon 20.7 kWh usable                        │
│ ├─ Current SOC: 40% (8.3 kWh available)                      │
│ ├─ Voltage: 52.81V                                           │
│ ├─ Current: 1.34A (charging)                                 │
│ ├─ Power Flow: +710W (charging)                              │
│ └─ Temperature: 19°C (optimal)                               │
│                                                                │
│ Operating Parameters:                                         │
│ ├─ Reserve Minimum: 25% (5.2 kWh)                            │
│ ├─ Empty Voltage: 45V                                        │
│ ├─ Float: 55.2V                                              │
│ ├─ Absorption: 57.6V                                         │
│ ├─ Max Charge Current: Limited by inverter                   │
│ └─ Work Mode: Zero Export to CT                              │
└───────────────────────────────────────────────────────────────┘

┌─ CONSUMPTION HIERARCHY ──────────────────────────────────────┐
│                                                                │
│ PRIORITY 1: CRITICAL BASE LOAD (Always On)                   │
│ ├─ Fridge/Freezers: ~150W continuous                         │
│ ├─ Network/IT: ~50W continuous                               │
│ ├─ Lighting: ~20-100W variable                               │
│ └─ Other standby: ~50W                                       │
│ Total: ~250-350W baseline                                     │
│                                                                │
│ PRIORITY 2: THERMAL COMFORT (Scheduled)                      │
│ ├─ Space Heat Pump (Daikin Altherma M3)                     │
│ │   ├─ Typical Load: 1,500-3,000W                           │
│ │   ├─ COP: 3.5-4.5 (depending on ΔT)                       │
│ │   └─ Strategy: Pre-heat during surplus                    │
│ │                                                             │
│ ├─ DHW Heat Pump (Monoblock)                                │
│ │   ├─ Typical Load: 800-1,500W                             │
│ │   ├─ Tank Capacity: Estimated 150-200L                    │
│ │   ├─ Runtime Today: 45 min                                │
│ │   └─ Strategy: Heat during mid-day surplus                │
│ │                                                             │
│ PRIORITY 3: MOBILITY (Flexible)                              │
│ ├─ Tesla Model Y LR                                          │
│ │   ├─ Battery: 75 kWh                                      │
│ │   ├─ Current SOC: 57% (42.75 kWh)                         │
│ │   ├─ Range: 274 km                                        │
│ │   ├─ Max Charge Rate: 11 kW (48A @ 240V)                 │
│ │   ├─ Current Setting: 7A (1.68 kW)                        │
│ │   └─ Strategy: Solar surplus + low tariff top-ups         │
│ │                                                             │
│ PRIORITY 4: INDOOR AIR QUALITY (Deferrable)                  │
│ ├─ Hall Dehumidifier                                         │
│ │   ├─ Power: ~200-300W when running                        │
│ │   ├─ Min Humidity: 54%                                    │
│ │   └─ Current: OFF (humidity 47% < target)                 │
│ │                                                             │
│ ├─ Cave Dehumidifier                                         │
│ │   ├─ Power: ~200-300W when running                        │
│ │   └─ Current: OFF                                          │
│ │                                                             │
│ PRIORITY 5: HOUSEHOLD APPLIANCES (Most Deferrable)           │
│ ├─ Washer: ~500-2,000W (cycle-dependent)                    │
│ ├─ Dryer: ~2,000-3,000W                                     │
│ ├─ Dishwasher: ~1,000-2,000W                                │
│ └─ Strategy: Run during peak solar (10:00-15:00)            │
│                                                                │
└───────────────────────────────────────────────────────────────┘
```

-----

## 3. Control Hierarchy & Decision Logic

### 3.1 Energy Flow Priority Matrix

|Condition                |PV Priority        |Battery Action       |Grid Action    |Load Control        |
|-------------------------|-------------------|---------------------|---------------|--------------------|
|**Night + Low Tariff**   |None               |Grid charge to 80%   |Import cheap   |DHW pre-heat allowed|
|**Morning Ramp**         |Self-consumption   |Hold/slight discharge|Minimize import|Defer loads         |
|**Peak Solar**           |Load shifting first|Charge after loads   |Zero export    |Run all deferrable  |
|**Afternoon Decline**    |Critical loads     |Discharge to reserve |Minimize import|Stop deferrable     |
|**Evening Peak**         |None               |Discharge to reserve |Minimize import|Essential only      |
|**Night + Normal Tariff**|None               |Preserve reserve     |Minimal import |Essential only      |

### 3.2 Battery Strategy State Machine

```
                    ┌─────────────────────┐
                    │  BATTERY STRATEGY   │
                    │   STATE MACHINE     │
                    └──────────┬──────────┘
                               │
                ┌──────────────┼──────────────┐
                │              │              │
                ▼              ▼              ▼
        ┌───────────┐  ┌───────────┐  ┌───────────┐
        │  PRESERVE │  │  NORMAL   │  │  RESERVE  │
        │   Mode    │  │   Mode    │  │   Mode    │
        └───────────┘  └───────────┘  └───────────┘
             │              │              │
             │              │              │
        SOC > 80%      25% < SOC < 80%  SOC < 25%
        Grid export    Normal ops       Emergency only
        disabled       enabled          Grid charging
```

**State Transitions:**

1. **RESERVE Mode (SOC < 25%)**
- **Condition:** Battery below minimum reserve
- **Actions:**
  - Disable all deferrable loads
  - Enable grid charging if low tariff
  - Alert user
  - Prioritize PV charging
- **Exit:** SOC reaches 30%
1. **NORMAL Mode (25% ≤ SOC < 80%)**
- **Condition:** Healthy battery range
- **Actions:**
  - Standard load management
  - Solar-first charging
  - Discharge during normal tariff
  - Grid charging allowed during low tariff
- **Exit:** SOC hits boundaries
1. **PRESERVE Mode (SOC ≥ 80%)**
- **Condition:** Battery well charged
- **Actions:**
  - Maximize self-consumption
  - Enable all deferrable loads
  - Disable grid export (already configured)
  - Prepare for evening demand
- **Exit:** SOC drops below 75%

-----

## 4. Tariff-Aware Load Shifting Strategy

### 4.1 Weekly Schedule Matrix

|Time Window|Mon-Fri|Saturday|Sunday|Strategy                                                        |
|-----------|-------|--------|------|----------------------------------------------------------------|
|00:00-07:00|LOW    |LOW     |LOW   |Grid charge battery to 80%, DHW heat to 55°C, pre-heat space    |
|07:00-09:00|NORMAL |MIXED   |LOW   |Solar ramp, hold battery, light loads only                      |
|09:00-15:00|NORMAL |MIXED   |LOW   |**PEAK SOLAR**: Run all deferrable, thermal banking, EV charging|
|15:00-19:00|NORMAL |MIXED   |LOW   |Solar decline, battery discharge begins, essential loads        |
|19:00-00:00|NORMAL |MIXED   |LOW   |Battery discharge, minimize grid, no deferrable loads           |

### 4.2 Sunday Strategy (24-Hour Low Tariff)

**Sunday is your energy independence day** - maximize battery cycle:

```yaml
sunday_strategy:
  00:00-07:00:
    - Grid charge battery: 25% → 90%
    - DHW heat to maximum (60°C)
    - Space pre-heat to 22°C
    - Cost: ~€1.50 for 13.5 kWh
  
  07:00-18:00:
    - Solar production: ~40-70 kWh (season dependent)
    - Battery: Float at 90%, prevent overcharge
    - Load management: Run everything needed for week
      - Laundry: 3-4 loads
      - Dishwasher: 2 cycles
      - Deep vacuum/cleaning
      - EV: Top up to 85%
    - Thermal banking: Maximize storage
  
  18:00-00:00:
    - Battery discharge: 90% → 40%
    - Evening comfort loads
    - Prepare for Monday morning
```

**Expected Sunday Performance:**

- Grid import: ~15 kWh (night charging only)
- Solar production: ~50 kWh
- Self-consumption: ~95%
- Weekly cost offset: €3-5 saved vs normal tariff

-----

## 5. Detailed Automation Architecture

### 5.1 Core HEMS Sensors (Required)

```yaml
# Energy Flow Sensors
sensor:
  - platform: template
    sensors:
      hems_net_power_flow:
        friendly_name: "Net Power Flow"
        unit_of_measurement: "W"
        value_template: >
          {{ states('sensor.192_168_1_143_pv_power')|float - 
             states('sensor.192_168_1_143_load_power')|float }}
        
      hems_available_surplus:
        friendly_name: "Available Solar Surplus"
        unit_of_measurement: "W"
        value_template: >
          {% set pv = states('sensor.192_168_1_143_pv_power')|float %}
          {% set load = states('sensor.192_168_1_143_load_power')|float %}
          {% set battery_charge = states('sensor.192_168_1_143_battery_power')|float %}
          {% set surplus = pv - load - battery_charge %}
          {{ [surplus, 0]|max }}
      
      hems_battery_reserve_margin:
        friendly_name: "Battery Reserve Margin"
        unit_of_measurement: "kWh"
        value_template: >
          {% set soc = states('sensor.192_168_1_143_battery')|float %}
          {% set capacity = 20.7 %}
          {% set reserve_pct = states('input_number.battery_reserve_minimum')|float %}
          {{ ((soc - reserve_pct) / 100 * capacity)|round(2) }}
      
      hems_tariff_multiplier:
        friendly_name: "Tariff Cost Multiplier"
        value_template: >
          {% set hour = now().hour %}
          {% set day = now().weekday() %}
          {% if day == 6 %}
            1.0
          {% elif day == 5 %}
            {% if hour < 7 %} 1.0
            {% else %} 1.3
            {% endif %}
          {% else %}
            {% if hour < 7 %} 1.0
            {% else %} 1.8
            {% endif %}
          {% endif %}
```

### 5.2 Battery Management Core

```yaml
automation:
  - alias: "HEMS Battery Strategy Controller"
    mode: restart
    trigger:
      - platform: state
        entity_id: sensor.192_168_1_143_battery
      - platform: time_pattern
        minutes: "/5"
    
    action:
      - choose:
          # RESERVE MODE: Emergency protection
          - conditions:
              - condition: numeric_state
                entity_id: sensor.192_168_1_143_battery
                below: 25
            sequence:
              - service: input_select.select_option
                data:
                  entity_id: input_select.battery_strategy
                  option: "reserve"
              - service: notify.persistent_notification
                data:
                  title: "⚠️ Battery Reserve Mode"
                  message: "Battery at {{ states('sensor.192_168_1_143_battery') }}%. Limiting loads."
              - service: switch.turn_off
                entity_id: 
                  - switch.cave_dehumid_plug
                  - switch.hall_dehumid_plug
              # Enable grid charging if low tariff
              - condition: state
                entity_id: sensor.tariff_period
                state: "vazio"
              - service: switch.turn_on
                entity_id: switch.192_168_1_143_battery_grid_charging
          
          # NORMAL MODE: Standard operations
          - conditions:
              - condition: numeric_state
                entity_id: sensor.192_168_1_143_battery
                above: 25
                below: 80
            sequence:
              - service: input_select.select_option
                data:
                  entity_id: input_select.battery_strategy
                  option: "normal"
          
          # PRESERVE MODE: High SOC management
          - conditions:
              - condition: numeric_state
                entity_id: sensor.192_168_1_143_battery
                above: 80
            sequence:
              - service: input_select.select_option
                data:
                  entity_id: input_select.battery_strategy
                  option: "preserve"
              # Enable loads to consume and prevent overcharge
              - service: script.enable_deferrable_loads

  - alias: "HEMS Smart Grid Charging"
    trigger:
      - platform: time
        at: "00:05:00"  # Start of low tariff
    
    condition:
      - condition: numeric_state
        entity_id: sensor.192_168_1_143_battery
        below: 80
      - condition: or
        conditions:
          - condition: state
            entity_id: sensor.tariff_period
            state: "vazio"
          - condition: time
            weekday:
              - sun  # All day Sunday is low tariff
    
    action:
      # Calculate optimal charge target
      - variables:
          current_soc: "{{ states('sensor.192_168_1_143_battery')|float }}"
          target_soc: >
            {% if now().weekday() == 6 %}90
            {% else %}80
            {% endif %}
          forecast_tomorrow: "{{ states('sensor.hems_solar_forecast_tomorrow')|float }}"
          charge_needed_kwh: "{{ (target_soc - current_soc) / 100 * 20.7 }}"
      
      - service: switch.turn_on
        entity_id: switch.192_168_1_143_battery_grid_charging
      
      - service: notify.persistent_notification
        data:
          title: "🔌 Grid Charging Started"
          message: >
            Target: {{ target_soc }}%
            Needed: {{ charge_needed_kwh|round(1) }} kWh
            Tomorrow forecast: {{ forecast_tomorrow|round(1) }} kWh
      
      - wait_template: >
          {{ states('sensor.192_168_1_143_battery')|float >= target_soc }}
        timeout: "06:30:00"
      
      - service: switch.turn_off
        entity_id: switch.192_168_1_143_battery_grid_charging

  - alias: "HEMS Stop Grid Charging at Peak"
    trigger:
      - platform: time
        at: "07:00:00"
    
    action:
      - service: switch.turn_off
        entity_id: switch.192_168_1_143_battery_grid_charging
```

### 5.3 EV Charging Intelligence

```yaml
automation:
  - alias: "HEMS EV Solar Surplus Charging"
    mode: restart
    trigger:
      - platform: state
        entity_id: sensor.hems_available_surplus
      - platform: time_pattern
        minutes: "/10"
    
    variables:
      surplus: "{{ states('sensor.hems_available_surplus')|float }}"
      ev_soc: "{{ states('sensor.azul_wind_battery')|float }}"
      ev_target: "{{ states('input_number.ev_daily_target_soc')|float }}"
      battery_ok: "{{ states('sensor.192_168_1_143_battery')|float > 30 }}"
      is_daytime: "{{ 9 <= now().hour < 18 }}"
    
    condition:
      - condition: template
        value_template: "{{ is_daytime }}"
      - condition: template
        value_template: "{{ battery_ok }}"
      - condition: template
        value_template: "{{ ev_soc < ev_target }}"
      - condition: state
        entity_id: device_tracker.azul_wind_location_tracker
        state: "home"
    
    action:
      - choose:
          # High surplus: Maximum charge rate
          - conditions:
              - condition: template
                value_template: "{{ surplus > 3000 }}"
            sequence:
              - service: number.set_value
                target:
                  entity_id: number.azul_wind_charging_amps
                data:
                  value: 16  # 3.8 kW
              - service: switch.turn_on
                entity_id: switch.azul_wind_charger
          
          # Medium surplus: Moderate charge
          - conditions:
              - condition: template
                value_template: "{{ 1500 <= surplus <= 3000 }}"
            sequence:
              - service: number.set_value
                target:
                  entity_id: number.azul_wind_charging_amps
                data:
                  value: 8  # 1.9 kW
              - service: switch.turn_on
                entity_id: switch.azul_wind_charger
          
          # Low surplus: Minimum charge or stop
          - conditions:
              - condition: template
                value_template: "{{ 500 <= surplus < 1500 }}"
            sequence:
              - service: number.set_value
                target:
                  entity_id: number.azul_wind_charging_amps
                data:
                  value: 5  # 1.2 kW
              - service: switch.turn_on
                entity_id: switch.azul_wind_charger
          
        default:
          - service: switch.turn_off
            entity_id: switch.cave_dehumid_plug
      
      # Hall dehumidifier
      - choose:
          - conditions:
              - condition: template
                value_template: "{{ hall_humidity > min_humidity }}"
              - condition: template
                value_template: "{{ surplus > min_surplus + 300 }}"  # Need more surplus for both
              - condition: template
                value_template: "{{ battery_ok }}"
              - condition: time
                after: "09:00:00"
                before: "17:00:00"
            sequence:
              - service: switch.turn_on
                entity_id: switch.hall_dehumid_plug
        default:
          - service: switch.turn_off
            entity_id: switch.hall_dehumid_plug
```

-----

## 8. MCP Agent Capabilities & Architecture

### 8.1 Agent Observation Schema

The MCP agent (Claude) can observe the following real-time data:

```json
{
  "energy_generation": {
    "pv_power_current": "sensor.192_168_1_143_pv_power",
    "pv_string_1_voltage": "sensor.192_168_1_143_pv1_voltage",
    "pv_string_1_current": "sensor.192_168_1_143_pv1_current",
    "pv_string_2_voltage": "sensor.192_168_1_143_pv2_voltage",
    "pv_string_2_current": "sensor.192_168_1_143_pv2_current",
    "forecast_today": "sensor.hems_solar_forecast_today",
    "forecast_tomorrow": "sensor.hems_solar_forecast_tomorrow",
    "forecast_next_hour": "sensor.solcast_pv_forecast_forecast_next_hour"
  },
  "energy_storage": {
    "battery_soc": "sensor.192_168_1_143_battery",
    "battery_voltage": "sensor.192_168_1_143_battery_voltage",
    "battery_current": "sensor.192_168_1_143_battery_current",
    "battery_power": "sensor.192_168_1_143_battery_power",
    "battery_temperature": "sensor.192_168_1_143_battery_temperature",
    "battery_state": "sensor.192_168_1_143_battery_state"
  },
  "consumption": {
    "house_load": "sensor.192_168_1_143_load_power",
    "grid_power": "sensor.192_168_1_143_grid_power",
    "grid_status": "binary_sensor.192_168_1_143_grid"
  },
  "ev_data": {
    "soc": "sensor.azul_wind_battery",
    "charging_rate": "sensor.azul_wind_charging_rate",
    "charge_limit": "number.azul_wind_charge_limit",
    "range": "sensor.azul_wind_range",
    "location": "device_tracker.azul_wind_location_tracker"
  },
  "thermal_systems": {
    "space_temp": "sensor.hems_average_house_temperature",
    "thermostat_target": "climate.tstat_877799_t6_thermostat",
    "outside_temp": "sensor.quinta16_temperature",
    "dhw_runtime": "input_number.hot_water_hp_runtime_today",
    "space_hp_runtime": "input_number.house_hp_runtime_today"
  },
  "tariff": {
    "current_period": "sensor.tariff_period",
    "cost_multiplier": "sensor.hems_tariff_multiplier"
  },
  "air_quality": {
    "cave_humidity": "sensor.air_quality_cave_humidity",
    "hall_humidity": "sensor.attic_air_sensor_humidity",
    "cave_dehumidifier": "switch.cave_dehumid_plug",
    "hall_dehumidifier": "switch.hall_dehumid_plug"
  }
}
```

### 8.2 Agent Action Capabilities

**Allowed Actions** (with safety constraints):

```yaml
agent_actions:
  battery_control:
    - action: switch.turn_on
      entity: switch.192_168_1_143_battery_grid_charging
      constraint: only_during_low_tariff
      
    - action: switch.turn_off
      entity: switch.192_168_1_143_battery_grid_charging
      constraint: none
  
  ev_charging:
    - action: number.set_value
      entity: number.azul_wind_charging_amps
      constraint: 
        min: 5
        max: 16
        condition: vehicle_at_home
    
    - action: switch.turn_on
      entity: switch.azul_wind_charger
      constraint: vehicle_at_home
    
    - action: switch.turn_off
      entity: switch.azul_wind_charger
      constraint: none
  
  thermal_management:
    - action: climate.set_temperature
      entity: climate.tstat_877799_t6_thermostat
      constraint:
        min: 18
        max: 23
        reason: comfort_and_efficiency
    
    - action: input_boolean.turn_on
      entity: input_boolean.heat_water_now
      constraint: 
        battery_soc_min: 30
        surplus_min: 800
  
  dehumidifiers:
    - action: switch.turn_on
      entity: [switch.cave_dehumid_plug, switch.hall_dehumid_plug]
      constraint:
        battery_soc_min: 30
        surplus_min: 500
    
    - action: switch.turn_off
      entity: [switch.cave_dehumid_plug, switch.hall_dehumid_plug]
      constraint: none
  
  system_modes:
    - action: input_select.select_option
      entity: input_select.hems_mode
      options: [auto, manual, storm, vacation]
      constraint: none
```

### 8.3 Safety Boundaries

```yaml
safety_rules:
  battery_protection:
    - rule: never_discharge_below_reserve
      threshold: 25%
      action: disable_all_deferrable_loads
    
    - rule: grid_charging_limit
      max_soc: 90%
      reason: battery_longevity
    
    - rule: prevent_overcharge
      action: enable_loads_above_85_percent
  
  thermal_safety:
    - rule: minimum_comfort
      min_temp: 18°C
      condition: outdoor_temp_below_10
    
    - rule: maximum_temp
      max_temp: 23°C
      reason: efficiency_and_comfort
  
  ev_safety:
    - rule: charge_limit_respect
      max: user_defined_limit
      override: only_with_explicit_permission
    
    - rule: charging_location
      allowed: home_only
      exception: emergency_mode
  
  grid_safety:
    - rule: no_export
      reason: zero_export_mode_configured
    
    - rule: emergency_import
      trigger: battery_below_15_percent
```

### 8.4 MCP Agent Decision Framework

```python
# Pseudo-code for agent reasoning
def agent_decision_loop():
    """
    MCP Agent decision-making framework
    """
    
    # OBSERVE
    state = observe_all_sensors()
    
    # ANALYZE
    context = {
        'time_of_day': get_time_context(),
        'tariff_period': get_tariff_period(),
        'weather': get_weather_forecast(),
        'solar_forecast': get_solar_forecast(),
        'battery_state': analyze_battery_state(),
        'thermal_needs': assess_thermal_comfort(),
        'ev_needs': assess_ev_requirements(),
        'user_preferences': load_user_preferences()
    }
    
    # STRATEGIZE
    strategy = create_optimization_plan(state, context)
    
    # EXECUTE (with safety checks)
    for action in strategy:
        if validate_safety(action):
            execute_action(action)
            log_decision(action, reason)
        else:
            log_safety_block(action, reason)
    
    # LEARN
    update_performance_metrics()
    adjust_future_strategies()
```

-----

## 9. Complete System Diagram

```
╔════════════════════════════════════════════════════════════════╗
║                   HEMS COMPLETE ARCHITECTURE                    ║
╚════════════════════════════════════════════════════════════════╝

┌─────────────────────────────────────────────────────────────────┐
│                         INTELLIGENCE LAYER                       │
│  ┌──────────────────────┐         ┌──────────────────────┐     │
│  │   MCP Agent (Claude)  │◄───────►│  Home Assistant Core │     │
│  │  - Optimization Logic │         │  - Automation Engine │     │
│  │  - Pattern Learning   │         │  - State Management  │     │
│  │  - Decision Making    │         │  - Event Processing  │     │
│  └──────────────────────┘         └──────────────────────┘     │
└─────────────────────────────────────────────────────────────────┘
                              │
                              │ Commands & Status
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│                      COMMUNICATION LAYER                         │
│  ┌─────────┐  ┌─────────┐  ┌─────────┐  ┌─────────┐           │
│  │ Modbus  │  │  WiFi   │  │  Cloud  │  │  MQTT   │           │
│  │   TCP   │  │  Smart  │  │  Tesla  │  │ Sensors │           │
│  └────┬────┘  └────┬────┘  └────┬────┘  └────┬────┘           │
└───────┼────────────┼────────────┼────────────┼─────────────────┘
        │            │            │            │
        ▼            ▼            ▼            ▼
┌─────────────────────────────────────────────────────────────────┐
│                        PHYSICAL LAYER                            │
│                                                                   │
│  ┌──────────────────┐                                            │
│  │   SOLAR ARRAY    │                                            │
│  │   13 kWp (3str)  │                                            │
│  │   Current: 4.4kW │                                            │
│  └────────┬─────────┘                                            │
│           │ DC 300-350V                                          │
│           ▼                                                       │
│  ┌──────────────────┐         ┌──────────────────┐             │
│  │  HYBRID INVERTER │◄───────►│  BATTERY SYSTEM  │             │
│  │   Solarman 5kW   │  DC Bus │  Pylon 20.7 kWh  │             │
│  │   192.168.1.143  │ 52.8V   │  SOC: 40% (8kWh) │             │
│  └────────┬─────────┘         └──────────────────┘             │
│           │ AC 240V                                              │
│           ▼                                                       │
│  ┌──────────────────────────────────────────────────┐           │
│  │              LOAD DISTRIBUTION                    │           │
│  │                                                    │           │
│  │  Priority 1: BASE LOAD (~300W)                   │           │
│  │  ├─ Fridge/Freezers                              │           │
│  │  ├─ Network Equipment                            │           │
│  │  └─ Standby Systems                              │           │
│  │                                                    │           │
│  │  Priority 2: THERMAL (1-3 kW)                    │           │
│  │  ├─ Space Heat Pump (Daikin Altherma M3)        │           │
│  │  └─ DHW Heat Pump (Monoblock)                   │           │
│  │                                                    │           │
│  │  Priority 3: MOBILITY (0-11 kW)                  │           │
│  │  └─ Tesla Model Y (Currently: 2W, 57% SOC)      │           │
│  │                                                    │           │
│  │  Priority 4: AIR QUALITY (0-600W)                │           │
│  │  ├─ Cave Dehumidifier (OFF)                     │           │
│  │  └─ Hall Dehumidifier (OFF)                     │           │
│  │                                                    │           │
│  │  Priority 5: APPLIANCES (0-3 kW)                 │           │
│  │  ├─ Washer                                       │           │
│  │  ├─ Dryer                                        │           │
│  │  └─ Dishwasher                                   │           │
│  └──────────────────────────────────────────────────┘           │
│                                                                   │
│  ┌──────────────────────────────────────────────────┐           │
│  │              GRID CONNECTION                      │           │
│  │  Status: Connected (0W flow)                     │           │
│  │  Mode: Zero Export to CT                         │           │
│  │  Tariff: Fora de Vazio (Normal)                  │           │
│  └──────────────────────────────────────────────────┘           │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│                      MONITORING & SENSORS                        │
│                                                                   │
│  Weather: 7°C, 77% humidity, Wind 9km/h                         │
│  Forecast Today: 70.6 kWh                                        │
│  Forecast Tomorrow: 28.1 kWh                                     │
│  Self-Consumption: 67%                                           │
│  Daily Grid Cost: €7.66                                          │
│  Daily Solar Value: €15.58                                       │
└─────────────────────────────────────────────────────────────────┘
```

-----

## 10. Daily & Seasonal Behavior Simulation

### 10.1 Winter Strategy (December - February)

**Conditions:**

- Low solar production: 15-40 kWh/day
- High heating demand: 15-25 kWh/day
- Short daylight hours: 9:00-17:00 productive
- Outside temp: 5-15°C

**Daily Flow (Weekday):**

```
00:00-07:00 │ LOW TARIFF
            │ ✓ Grid charge battery: 25% → 75% (~10 kWh @ €0.10/kWh = €1.00)
            │ ✓ Heat DHW to 58°C (~2 kWh)
            │ ✓ Pre-heat space to 21°C (~3 kWh)
            │ Total grid import: ~15 kWh, cost €1.50
            │
07:00-09:00 │ NORMAL TARIFF - Morning
            │ • Solar ramp: 0 → 2 kW
            │ • Battery holds at 75%
            │ • Heating drops to 20°C setpoint
            │ • Load: ~1.5 kW (heat pump cycling)
            │
09:00-15:00 │ NORMAL TARIFF - Peak Solar
            │ • Solar production: 2-4 kW (weather dependent)
            │ • Self-consumption priority
            │ • Battery slow discharge: 75% → 60%
            │ • Thermal banking when surplus available
            │ • DHW boost if surplus > 1.5 kW
            │ • Total solar: ~20 kWh
            │ • Consumption: ~15 kWh (12 kW heat + 3 kW base)
            │
15:00-19:00 │ NORMAL TARIFF - Decline
            │ • Solar: 4 → 0 kW
            │ • Battery discharge: 60% → 40%
            │ • Heating to comfort: 20-21°C
            │ • Cooking loads: ~2 kW peaks
            │
19:00-00:00 │ NORMAL TARIFF - Evening
            │ • No solar
            │ • Battery discharge: 40% → 30%
            │ • Minimal heating (thermal mass carries)
            │ • Grid import for shortfall: ~3 kWh @ €0.18/kWh = €0.54
            │
DAILY TOTALS:
├─ Solar Production: 20 kWh
├─ Consumption: 35 kWh
│  ├─ Heating: 25 kWh
│  └─ Other: 10 kWh
├─ Grid Import: 18 kWh
│  ├─ Low tariff: 15 kWh @ €1.50
│  └─ Normal tariff: 3 kWh @ €0.54
├─ Self-Consumption: 57%
└─ Daily Cost: €2.04
```

**Monthly Performance (Winter):**

- Solar generation: 600-800 kWh
- Total consumption: 1,050 kWh
- Grid import: 450 kWh
- Self-sufficiency: 57%
- Monthly cost: €60-70

### 10.2 Summer Strategy (June - August)

**Conditions:**

- High solar production: 60-90 kWh/day
- Minimal heating: 0-2 kWh/day
- Long daylight: 7:00-20:00 productive
- Outside temp: 25-40°C
- Cooling needs (passive/fans)

**Daily Flow (Weekday):**

```
00:00-07:00 │ LOW TARIFF
            │ • Grid charge battery: 30% → 50% (~4 kWh @ €0.10/kWh = €0.40)
            │ • No heating needed
            │ • Pre-cool house (fans) if forecast hot day
            │
07:00-10:00 │ NORMAL TARIFF - Morning Ramp
            │ • Solar: 0 → 8 kW (rapid ramp)
            │ • Battery charge: 50% → 85%
            │ • Run morning appliances
            │ • DHW heat to 60°C
            │
10:00-17:00 │ NORMAL TARIFF - Massive Surplus
            │ • Solar production: 8-10 kW sustained
            │ • Battery at 90% (preserve mode)
            │ • **Load Creation Challenge:**
            │   ├─ EV charge to 85%: ~20 kWh @ 3-4 hours
            │   ├─ Run all appliances:
            │   │  ├─ Washer: 2 loads (~2 kWh)
            │   │  ├─ Dryer: 2 loads (~4 kWh)
            │   │  ├─ Dishwasher: 1 load (~1.5 kWh)
            │   ├─ Dehumidifiers (if needed): ~2 kWh
            │   └─ Pool pump (if installed): ~3 kWh
            │ • Even with all loads: 5-7 kW surplus remains
            │ • **Optimization:** Consider future A/C installation
            │
17:00-20:00 │ NORMAL TARIFF - Long Decline
            │ • Solar: 10 → 0 kW
            │ • Battery holds at 85%
            │ • Evening cooking: ~2 kW
            │
20:00-00:00 │ NORMAL TARIFF - Evening
            │ • No solar
            │ • Battery discharge: 85% → 35%
            │ • All evening loads from battery
            │ • Zero grid import
            │
DAILY TOTALS:
├─ Solar Production: 75 kWh
├─ Consumption: 40 kWh
│  ├─ EV: 20 kWh
│  ├─ Appliances: 10 kWh
│  ├─ DHW: 3 kWh
│  └─ Base load: 7 kWh
├─ Grid Import: 4 kWh (night charging only)
├─ Battery Cycles: 50% DOD (optimal for longevity)
├─ Surplus Lost: ~30 kWh (no export)
├─ Self-Consumption: 90%
└─ Daily Cost: €0.40
```

**Monthly Performance (Summer):**

- Solar generation: 2,250 kWh
- Total consumption: 1,200 kWh
- Grid import: 120 kWh
- Self-sufficiency: 90%
- Monthly cost: €12-15
- **Surplus lost: ~900 kWh** (opportunity for future loads)

### 10.3 Shoulder Season Strategy (Mar-May, Sep-Nov)

**Optimal conditions:**

- Moderate solar: 40-60 kWh/day
- Moderate heating: 5-10 kWh/day
- Balanced demand

**Key Strategy:**

- Maximum thermal banking in spring (store heat)
- Aggressive battery cycling
- Self-sufficiency potential: 75-85%
- Monthly cost: €25-35

-----

## 11. Long-Term Roadmap to Energy Independence

### Phase 1: Current State (Now - Q2 2026)

**Goal: Optimize existing system**

✅ **Completed:**

- 13 kWp PV installed
- 20.7 kWh battery operational
- Heat pumps commissioned
- EV integration active
- Basic automations running

🎯 **Immediate Priorities:**

1. **Implement advanced automations** (from this document)
- Battery strategy state machine
- Thermal banking logic
- Smart EV charging
- Dehumidifier solar priority
1. **Deploy MCP agent** for real-time optimization
- Pattern learning
- Weather-adaptive strategies
- Cost optimization
1. **Data collection & analysis**
- Track self-consumption percentage
- Identify load patterns
- Quantify thermal banking savings
- Measure battery cycle efficiency

**Expected Outcomes:**

- Self-sufficiency: 60-70% (currently 67%)
- Monthly cost reduction: 15-20%
- Battery longevity optimized

-----

### Phase 2: System Enhancement (Q3 2026 - Q4 2026)

**Goal: Maximize existing capacity utilization**

🔧 **Technical Upgrades:**

1. **Summer Surplus Utilization**
- **Problem:** 30-40 kWh/day surplus in summer with no export
- **Solutions:**
  - Install split A/C units (2-3 kW each) for summer cooling
  - Add pool/pond circulation pump with UV filter
  - Battery cycling experiments (charge/discharge for grid services)
- **Investment:** €2,000-3,000
- **Payback:** Comfort value + future grid services revenue
1. **Advanced Load Control**
- Smart plugs for all major appliances
- Power monitoring on circuits
- Automated appliance scheduling
- **Investment:** €300-500
- **Benefit:** Granular control, better surplus utilization
1. **Thermal Mass Enhancement**
- Insulation audit and upgrades
- Thermal curtains for winter
- Ceiling fans for summer circulation
- **Investment:** €1,000-1,500
- **Payback:** 15-20% heating reduction

**Expected Outcomes:**

- Self-sufficiency: 70-75%
- Summer surplus waste: Reduced by 50%
- Monthly cost: €35-45

-----

### Phase 3: Capacity Expansion (2027)

**Goal: Approach 80%+ energy independence**

⚡ **Major Additions:**

1. **Battery Expansion**
- Add 10-15 kWh capacity (total: 30-35 kWh)
- **Rationale:**
  - Cover entire evening demand in winter
  - Enable deeper cycles in summer
  - Grid services readiness
- **Investment:** €4,000-6,000
- **Payback:** 5-7 years
1. **PV Expansion (if roof space available)**
- Add 3-5 kWp (total: 16-18 kWp)
- Optimize for winter production
- **Investment:** €3,000-4,500
- **Payback:** 6-8 years
1. **Vehicle-to-Home (V2H) Capability**
- Bidirectional charger for Tesla
- Use EV as backup power (75 kWh reservoir!)
- **Status:** Monitor Tesla/market for V2H support
- **Investment:** €3,000-5,000 when available
- **Benefit:** Ultimate energy security

**Expected Outcomes:**

- Self-sufficiency: 80-85%
- Winter independence dramatically improved
- Monthly cost: €20-30
- Blackout resilience: 3-5 days

-----

### Phase 4: Full Independence (2028+)

**Goal: 95%+ energy independence**

🌟 **Advanced Systems:**

1. **Smart Energy Management**
- AI-driven forecasting (weather, consumption, pricing)
- Participate in grid services/demand response
- Dynamic tariff optimization
- **Revenue potential:** €200-500/year
1. **Seasonal Thermal Storage**
- Underground thermal battery (if space permits)
- Store summer heat for winter
- **Investment:** €10,000-15,000
- **Benefit:** Eliminate winter heating cost
1. **Hydrogen Storage (Long-term)**
- Convert summer surplus to hydrogen
- Use in winter fuel cell
- **Status:** Emerging technology, monitor costs
- **Timeframe:** 2030+

**Expected Outcomes:**

- Self-sufficiency: 95%+
- Net grid import: <100 kWh/month
- Monthly cost: €10-15
- Carbon footprint: Near zero
- Energy security: Complete

-----

## 12. Fill-in-the-Blank System Template

**This template allows customization for future changes:**

```yaml
system_configuration:
  location:
    region: "{{climate_region}}"  # Current: Mediterranean Portugal
    coordinates: "39.4°N, 9.0°W"
  
  pv_system:
    capacity_kwp: "{{pv_kwp}}"  # Current: 13
    orientation: "South"
    tilt: "30°"
    degradation_rate: "0.5% per year"
  
  battery_system:
    capacity_kwh: "{{battery_kwh}}"  # Current: 20.7
    chemistry: "LiFePO4"
    dod_target: "80%"
    cycle_life: "6000+ cycles"
    warranty: "10 years"
  
  ev_integration:
    model: "{{ev_model}}"  # Current: Tesla Model Y LR 2022
    battery_kwh: "{{ev_battery_kwh}}"  # Current: 75
    max_charge_rate_kw: "{{ev_max_charge_kw}}"  # Current: 11
    daily_usage_km: "{{ev_daily_km}}"  # Typical: 30-50
    efficiency_kwh_per_km: "0.18"
  
  heat_pumps:
    dhw:
      model: "{{dhw_hp_model}}"  # Current: Monoblock
      power_rating_kw: "{{dhw_power_kw}}"  # Estimated: 1.5
      cop: "{{dhw_cop}}"  # Typical: 3.0-3.5
    
    space_heating:
      model: "{{space_hp_model}}"  # Current: Daikin Altherma M3
      power_rating_kw: "{{space_power_kw}}"  # Estimated: 3.0
      cop: "{{space_cop}}"  # Typical: 3.5-4.5
  
  tariff_structure:
    provider: "{{tariff_provider}}"  # Current: Gold Energy
    type: "{{tariff_type}}"  # Current: Tri-hourly
    rates:
      low_tariff_eur_per_kwh: "{{rate_low}}"  # Estimated: 0.10
      mixed_tariff_eur_per_kwh: "{{rate_mixed}}"  # Estimated: 0.13
      normal_tariff_eur_per_kwh: "{{rate_normal}}"  # Estimated: 0.18
    schedule:
      low_periods: "{{low_schedule}}"  # Current: 00:00-07:00 + Sunday
      mixed_periods: "{{mixed_schedule}}"  # Current: Saturday
      normal_periods: "{{normal_schedule}}"  # Current: Weekday 07:00-00:00
  
  goals:
    self_sufficiency_target: "{{target_pct}}"  # Current goal: 80%
    monthly_cost_target: "{{target_cost}}"  # Current goal: €30
    battery_cycle_target: "{{cycle_target}}"  # Optimal: 0.5-0.8 DOD/day
```

-----

## 13. Performance Metrics & Monitoring

### 13.1 Daily Dashboards

**Morning Energy Advisor (07:00 notification):**

```
☀️ GOOD MORNING ENERGY REPORT

Today's Forecast: {{solar_forecast_today}} kWh
Battery Status: {{battery_soc}}% ({{battery_kwh_available}} kWh)
Tariff: {{current_tariff_period}}

🎯 TODAY'S STRATEGY:
{{if forecast > 50}}
  ✓ Excellent solar day
  ✓ Run appliances 10:00-15:00
  ✓ EV charge to {{ev_target_soc}}%
  ✓ Thermal banking active
{{elif forecast > 30}}
  ✓ Moderate solar day
  ✓ Prioritize essential loads
  ✓ EV minimal charging
  ✓ Preserve battery for evening
{{else}}
  ⚠️ Low solar expected
  ✓ Grid charging enabled tonight
  ✓ Defer non-essential loads
  ✓ Minimize consumption
{{endif}}

Yesterday Performance:
• Self-consumption: {{yesterday_self_consumption}}%
• Cost: €{{yesterday_cost}}
• Savings vs grid: €{{yesterday_savings}}
```

**Evening Energy Report (21:00 notification):**

```
🌙 EVENING ENERGY SUMMARY

Today's Achievement:
├─ Solar Production: {{today_solar_production}} kWh
├─ Consumption: {{today_consumption}} kWh
├─ Self-Consumption: {{today_self_consumption}}%
├─ Grid Import: {{today_grid_import}} kWh
├─ Cost: €{{today_cost}}
└─ vs Grid-only: Saved €{{today_savings}}

Battery Status: {{battery_soc}}% ({{battery_kwh_available}} kWh)
{{if battery_soc < 30}}
  ⚠️ Low battery - Grid charging enabled tonight
{{endif}}

Tomorrow
          # Insufficient surplus: stop charging
          - service: switch.turn_off
            entity_id: switch.azul_wind_charger

  - alias: "HEMS EV Night Charging (Low Tariff)"
    trigger:
      - platform: time
        at: "01:00:00"
    
    condition:
      - condition: or
        conditions:
          - condition: state
            entity_id: sensor.tariff_period
            state: "vazio"
          - condition: time
            weekday:
              - sun
      - condition: template
        value_template: >
          {{ states('sensor.azul_wind_battery')|float < 
             states('input_number.ev_daily_target_soc')|float }}
      - condition: state
        entity_id: device_tracker.azul_wind_location_tracker
        state: "home"
    
    action:
      - service: number.set_value
        target:
          entity_id: number.azul_wind_charging_amps
        data:
          value: 16  # Full speed during cheap period
      
      - service: switch.turn_on
        entity_id: switch.azul_wind_charger
      
      - wait_template: >
          {{ states('sensor.azul_wind_battery')|float >= 
             states('input_number.ev_daily_target_soc')|float }}
        timeout: "05:30:00"
      
      - service: switch.turn_off
        entity_id: switch.azul_wind_charger
```

-----

## 6. Heat Pump Optimization

### 6.1 Thermal Banking Strategy

**Concept:** Store thermal energy during optimal solar production, minimize electrical consumption during expensive periods.

```yaml
sensor:
  - platform: template
    sensors:
      hems_thermal_banking_target:
        friendly_name: "Thermal Banking Target Temperature"
        unit_of_measurement: "°C"
        value_template: >
          {% set hour = now().hour %}
          {% set surplus = states('sensor.hems_available_surplus')|float %}
          {% set battery_soc = states('sensor.192_168_1_143_battery')|float %}
          {% set outside_temp = states('sensor.quinta16_temperature')|float %}
          
          {# Base comfort temperature #}
          {% set base_temp = 20 %}
          
          {# Thermal banking bonus during surplus #}
          {% if 10 <= hour < 16 and surplus > 2000 and battery_soc > 50 %}
            {{ base_temp + 1.5 }}
          {% elif 10 <= hour < 16 and surplus > 1000 %}
            {{ base_temp + 1.0 }}
          {% else %}
            {{ base_temp }}
          {% endif %}

automation:
  - alias: "HEMS Space Heat Pump Solar Priority"
    mode: restart
    trigger:
      - platform: time_pattern
        minutes: "/15"
      - platform: state
        entity_id: sensor.hems_available_surplus
    
    variables:
      surplus: "{{ states('sensor.hems_available_surplus')|float }}"
      current_temp: "{{ states('sensor.hems_average_house_temperature')|float }}"
      target_temp: "{{ states('sensor.hems_thermal_banking_target')|float }}"
      outside_temp: "{{ states('sensor.quinta16_temperature')|float }}"
      battery_ok: "{{ states('sensor.192_168_1_143_battery')|float > 35 }}"
    
    condition:
      - condition: template
        value_template: "{{ 8 <= now().hour < 20 }}"
    
    action:
      - choose:
          # High surplus + cold: Aggressive heating
          - conditions:
              - condition: template
                value_template: "{{ surplus > 2500 }}"
              - condition: template
                value_template: "{{ current_temp < target_temp }}"
              - condition: template
                value_template: "{{ battery_ok }}"
            sequence:
              - service: climate.set_temperature
                target:
                  entity_id: climate.tstat_877799_t6_thermostat
                data:
                  temperature: "{{ target_temp }}"
              - service: notify.persistent_notification
                data:
                  title: "🔥 Thermal Banking Active"
                  message: >
                    Surplus: {{ surplus }}W
                    Target: {{ target_temp }}°C
                    Current: {{ current_temp }}°C
          
          # Moderate surplus: Maintain comfort
          - conditions:
              - condition: template
                value_template: "{{ 1000 <= surplus < 2500 }}"
              - condition: template
                value_template: "{{ current_temp < target_temp - 0.5 }}"
            sequence:
              - service: climate.set_temperature
                target:
                  entity_id: climate.tstat_877799_t6_thermostat
                data:
                  temperature: "{{ target_temp - 0.5 }}"
        
        default:
          # Insufficient surplus: Reduce to minimum comfort
          - service: climate.set_temperature
            target:
              entity_id: climate.tstat_877799_t6_thermostat
            data:
              temperature: 19.5
```

### 6.2 DHW Heat Pump Scheduling

```yaml
automation:
  - alias: "HEMS DHW Solar Heating"
    trigger:
      - platform: time
        at: "10:30:00"  # After morning solar ramp
    
    condition:
      - condition: numeric_state
        entity_id: sensor.hems_solar_forecast_today
        above: 30  # Only on decent solar days
      - condition: numeric_state
        entity_id: sensor.192_168_1_143_battery
        above: 40
      - condition: numeric_state
        entity_id: sensor.hems_available_surplus
        above: 1000
    
    action:
      - service: input_boolean.turn_on
        entity_id: input_boolean.heat_water_now
      
      - service: notify.persistent_notification
        data:
          title: "💧 DHW Solar Heating"
          message: "Starting hot water heat pump with {{ states('sensor.hems_available_surplus') }}W surplus"
      
      # Run for 60-90 minutes or until surplus drops
      - wait_template: >
          {{ states('input_number.hot_water_hp_runtime_today')|float > 90 or
             states('sensor.hems_available_surplus')|float < 500 }}
        timeout: "02:00:00"
      
      - service: input_boolean.turn_off
        entity_id: input_boolean.heat_water_now

  - alias: "HEMS DHW Low Tariff Backup"
    trigger:
      - platform: time
        at: "02:00:00"
    
    condition:
      # Only if DHW wasn't heated during day
      - condition: numeric_state
        entity_id: input_number.hot_water_hp_runtime_today
        below: 30
      - condition: state
        entity_id: sensor.tariff_period
        state: "vazio"
    
    action:
      - service: input_boolean.turn_on
        entity_id: input_boolean.heat_water_now
      
      - delay: "01:00:00"  # Run for 1 hour
      
      - service: input_boolean.turn_off
        entity_id: input_boolean.heat_water_now
```

-----

## 7. Dehumidifier Scheduling

```yaml
automation:
  - alias: "HEMS Dehumidifier Solar Priority"
    mode: restart
    trigger:
      - platform: state
        entity_id: sensor.air_quality_cave_humidity
      - platform: state
        entity_id: sensor.attic_air_sensor_humidity
      - platform: time_pattern
        minutes: "/20"
    
    variables:
      surplus: "{{ states('sensor.hems_available_surplus')|float }}"
      cave_humidity: "{{ states('sensor.air_quality_cave_humidity')|float }}"
      hall_humidity: "{{ states('sensor.attic_air_sensor_humidity')|float }}"
      min_humidity: "{{ states('input_number.dehumidifier_min_humidity')|float }}"
      min_surplus: "{{ states('input_number.dehumidifier_min_surplus')|float }}"
      battery_ok: "{{ states('sensor.192_168_1_143_battery')|float > 35 }}"
    
    action:
      # Cave dehumidifier
      - choose:
          - conditions:
              - condition: template
                value_template: "{{ cave_humidity > min_humidity }}"
              - condition: template
                value_template: "{{ surplus > min_surplus }}"
              - condition: template
                value_template: "{{ battery_ok }}"
              - condition: time
                after: "09:00:00"
                before: "17:00:00"
            sequence:
              - service: switch.turn_on
                entity_id: switch.cave_dehumid_plug
        default:
```