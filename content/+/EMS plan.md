# Advanced Home Energy Management System for Portugal

I'll create a comprehensive plan for your renewable energy system that optimizes all components within Portugal's specific context. Let's integrate your GoodWe system, Tesla, heat pumps, and dehumidifiers into an intelligent Home Assistant setup.

## 1. System Architecture Overview

Your home energy ecosystem consists of several key components that need to be integrated into a cohesive system:

```
┌─────────────────────────────────────────────────────────────────────┐
│                       External Data Sources                          │
│  ┌──────────────┐  ┌───────────────┐  ┌────────────┐  ┌──────────┐  │
│  │Weather API   │  │Electricity    │  │Solar       │  │Tesla     │  │
│  │(forecast)    │  │Price API      │  │Forecast API│  │API       │  │
│  └──────┬───────┘  └───────┬───────┘  └─────┬──────┘  └────┬─────┘  │
└────────┼────────────────────┼───────────────┼────────────┼─────────┘
         │                    │               │            │
         ▼                    ▼               ▼            ▼
┌─────────────────────────────────────────────────────────────────────┐
│                          Home Assistant                              │
│  ┌──────────────────────────────────────────────────────────────┐   │
│  │                Core Integration Layer                         │   │
│  │  ┌─────────────┐ ┌─────────────┐ ┌──────────┐ ┌───────────┐  │   │
│  │  │GoodWe       │ │Tesla        │ │Heat Pump │ │Dehumidifier│  │   │
│  │  │Integration  │ │Integration  │ │Integration│ │Integration │  │   │
│  │  └─────────────┘ └─────────────┘ └──────────┘ └───────────┘  │   │
│  └──────────────────────────────────────────────────────────────┘   │
│  ┌──────────────────────────────────────────────────────────────┐   │
│  │                   Energy Management Layer                     │   │
│  │  ┌─────────────┐ ┌─────────────┐ ┌──────────────────────┐    │   │
│  │  │Energy       │ │Predictive   │ │Optimization          │    │   │
│  │  │Monitoring   │ │Models       │ │Algorithms            │    │   │
│  │  └─────────────┘ └─────────────┘ └──────────────────────┘    │   │
│  └──────────────────────────────────────────────────────────────┘   │
│  ┌──────────────────────────────────────────────────────────────┐   │
│  │                      Automation Layer                         │   │
│  │  ┌─────────────┐ ┌─────────────┐ ┌──────────┐ ┌───────────┐  │   │
│  │  │Solar        │ │Battery      │ │Load      │ │Device     │  │   │
│  │  │Optimization │ │Management   │ │Balancing │ │Scheduling  │  │   │
│  │  └─────────────┘ └─────────────┘ └──────────┘ └───────────┘  │   │
│  └──────────────────────────────────────────────────────────────┘   │
│  ┌──────────────────────────────────────────────────────────────┐   │
│  │                 User Interface Layer                          │   │
│  │  ┌─────────────┐ ┌─────────────┐ ┌──────────┐ ┌───────────┐  │   │
│  │  │Real-time    │ │Historical   │ │Control   │ │Predictive │  │   │
│  │  │Dashboard    │ │Analytics    │ │Panel     │ │Insights   │  │   │
│  │  └─────────────┘ └─────────────┘ └──────────┘ └───────────┘  │   │
│  └──────────────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────────────┘
         │            │             │              │
         ▼            ▼             ▼              ▼
┌─────────────────────────────────────────────────────────────────────┐
│                      Physical Energy Systems                         │
│  ┌──────────────┐  ┌───────────────┐  ┌────────────┐  ┌──────────┐  │
│  │4.92kW Solar  │  │GoodWe Inverter│  │Tesla       │  │Heat Pumps/│  │
│  │Array         │◄─►│& Battery      │◄─►│Model Y    │◄─►│Dehumidifiers│
│  └──────────────┘  └───────────────┘  └────────────┘  └──────────┘  │
└─────────────────────────────────────────────────────────────────────┘
```

### Data Flow:
1. **Energy Production**: Solar panels → GoodWe inverter → Home consumption/Battery/Grid
2. **Energy Consumption**: Home devices ← GoodWe inverter ← Battery/Grid
3. **Data Collection**: All components → Home Assistant → Monitoring & Analytics
4. **Control Signals**: Home Assistant → Smart devices → Optimized operation

### Key Integration Points:
- GoodWe inverter with Home Assistant via Modbus or API
- Tesla Model Y via Tesla API
- Heat pumps and dehumidifiers via smart plugs or direct integration
- External data sources (weather, electricity prices) via APIs

## 2. Integration Guide

### 2.1 GoodWe Integration

The GoodWe system is the cornerstone of your setup. We'll use the HACS GoodWe integration for reliable data collection and control.

```yaml
# configuration.yaml
goodwe:
  inverter_host: 192.168.1.x  # Replace with your GoodWe inverter IP
  inverter_port: 502  # Default Modbus port
  inverter_type: GW10K-ET  # Replace with your specific model
  scan_interval: 10  # Update frequency in seconds
```

For more advanced control, we'll add template sensors:

```yaml
# configuration.yaml
template:
  - sensor:
      - name: "Battery SOC"
        state: "{{ state_attr('sensor.goodwe_battery', 'soc') }}"
        unit_of_measurement: "%"
        
      - name: "Battery Charge Power"
        state: "{{ state_attr('sensor.goodwe_battery', 'charge_power') | float }}"
        unit_of_measurement: "W"
        
      - name: "Battery Discharge Power"
        state: "{{ state_attr('sensor.goodwe_battery', 'discharge_power') | float }}"
        unit_of_measurement: "W"
        
      - name: "Solar Production"
        state: "{{ states('sensor.goodwe_pv_power') | float }}"
        unit_of_measurement: "W"
```

### 2.2 Tesla Model Y Integration

For the Tesla integration, we'll use the excellent HACS Tesla Custom Component:

```yaml
# configuration.yaml
tesla_custom:
  username: your_tesla_account_email
  password: your_tesla_account_password
  scan_interval: 660  # 11 minutes to avoid API rate limits
  enable_websocket: true  # For real-time updates
```

To enable better energy management, let's create template sensors for the Tesla:

```yaml
# configuration.yaml
template:
  - sensor:
      - name: "Tesla SOC"
        state: "{{ state_attr('sensor.tesla_model_y_battery', 'level') }}"
        unit_of_measurement: "%"
        
      - name: "Tesla Charging Power"
        state: %3E
          {% if is_state('binary_sensor.tesla_model_y_charger', 'on') %}
            {{ state_attr('sensor.tesla_model_y_charger', 'power') | float }}
          {% else %}
            0
          {% endif %}
        unit_of_measurement: "W"
        
      - name: "Tesla Energy Available"
        state: >
          {% set capacity = 75 %}  # Model Y capacity in kWh
          {% set soc = states('sensor.tesla_soc') | float %}
          {{ (capacity * soc / 100) | round(2) }}
        unit_of_measurement: "kWh"
```

### 2.3 Heat Pump and Dehumidifier Integration

For these devices, we'll use smart plugs with power monitoring:

```yaml
# configuration.yaml
# Assuming smart plugs are using Tasmota, Shelly, or similar
switch:
  - platform: mqtt
    name: "Water Heater Heat Pump"
    state_topic: "stat/heater_plug/POWER"
    command_topic: "cmnd/heater_plug/POWER"
    payload_on: "ON"
    payload_off: "OFF"
    
  - platform: mqtt
    name: "Home Heat Pump"
    state_topic: "stat/home_heating_plug/POWER"
    command_topic: "cmnd/home_heating_plug/POWER"
    payload_on: "ON"
    payload_off: "OFF"
    
  # Repeat for dehumidifiers
```

Add power monitoring sensors:

```yaml
sensor:
  - platform: mqtt
    name: "Water Heater Power"
    state_topic: "tele/heater_plug/SENSOR"
    value_template: "{{ value_json.ENERGY.Power }}"
    unit_of_measurement: "W"
    
  - platform: mqtt
    name: "Home Heat Pump Power"
    state_topic: "tele/home_heating_plug/SENSOR"
    value_template: "{{ value_json.ENERGY.Power }}"
    unit_of_measurement: "W"
    
  # Repeat for dehumidifiers
```

### 2.4 External Data Integration

For Portugal's specific context, we need energy price and weather data:

```yaml
# configuration.yaml
# Portuguese Energy Price API (OMIE)
rest:
  - resource: https://api.esios.ree.es/archives/70/download_json
    scan_interval: 3600  # Hourly updates
    sensor:
      name: energy_price_tomorrow
      value_template: "{{ value_json.PVPC[0].price }}"
      unit_of_measurement: "€/kWh"

# Weather forecast for solar prediction
weather:
  - platform: openweathermap
    api_key: your_openweathermap_api_key
    latitude: !secret home_latitude
    longitude: !secret home_longitude
    mode: daily
```

### 2.5 Energy Dashboard Configuration

Enable Home Assistant's Energy Dashboard for baseline monitoring:

```yaml
# configuration.yaml
energy:
  # Solar panel feed
  solar_production_entity_ids:
    - sensor.goodwe_pv_power
  # Grid consumption/feed-in
  grid_consumption_entity_ids:
    - sensor.goodwe_grid_consumption
  grid_return_entity_ids:
    - sensor.goodwe_grid_feed_in
  # Battery storage
  battery_consumption_entity_ids:
    - sensor.battery_discharge_power
  battery_production_entity_ids:
    - sensor.battery_charge_power
  # Device consumption tracking
  device_consumption_entity_ids:
    - sensor.water_heater_power
    - sensor.home_heat_pump_power
    - sensor.dehumidifier_1_power
    - sensor.dehumidifier_2_power
    - sensor.dehumidifier_3_power
    - sensor.dehumidifier_4_power
    - sensor.tesla_charging_power
```

## 3. Automation Strategy

### 3.1 Solar Self-Consumption Optimization

```yaml
# automations.yaml
- alias: "Prioritize Solar Self-Consumption"
  trigger:
    - platform: numeric_state
      entity_id: sensor.solar_production
      above: 1000  # When solar production exceeds 1kW
  condition:
    - condition: time
      after: '09:00:00'
      before: '16:00:00'
  action:
    - service: script.turn_on
      entity_id: script.activate_high_consumption_devices
```

Script to activate high-consumption devices:

```yaml
# scripts.yaml
activate_high_consumption_devices:
  sequence:
    # Decision tree logic based on solar production level
    - choose:
        # High solar production scenario
        - conditions:
            - condition: numeric_state
              entity_id: sensor.solar_production
              above: 3000  # 3kW+
          sequence:
            - service: switch.turn_on
              target:
                entity_id: 
                  - switch.dehumidifier_1
                  - switch.dehumidifier_2
                  - switch.dehumidifier_3
                  - switch.dehumidifier_4
            - service: switch.turn_on
              entity_id: switch.water_heater_heat_pump
            # If Tesla is home and needs charging
            - condition: and
              conditions:
                - condition: state
                  entity_id: device_tracker.tesla_model_y
                  state: 'home'
                - condition: numeric_state
                  entity_id: sensor.tesla_soc
                  below: 90
            - service: tesla_custom.api_command
              data:
                device_id: !secret tesla_device_id
                command: charge_start
                
        # Medium solar production scenario
        - conditions:
            - condition: numeric_state
              entity_id: sensor.solar_production
              above: 2000  # 2-3kW
              below: 3000
          sequence:
            - service: switch.turn_on
              target:
                entity_id: 
                  - switch.dehumidifier_1
                  - switch.dehumidifier_2
            - service: switch.turn_on
              entity_id: switch.water_heater_heat_pump
              
        # Lower solar production scenario
        - conditions:
            - condition: numeric_state
              entity_id: sensor.solar_production
              above: 1000  # 1-2kW
              below: 2000
          sequence:
            - service: switch.turn_on
              entity_id: switch.dehumidifier_1
```

### 3.2 Battery Management Strategy

This strategy applies to both your home battery and Tesla:

```yaml
# automations.yaml
- alias: "Battery Smart Charging/Discharging"
  trigger:
    - platform: time_pattern
      minutes: "/10"  # Check every 10 minutes
  action:
    - service: script.battery_management
```

Script for intelligent battery management:

```yaml
# scripts.yaml
battery_management:
  sequence:
    # Get current electricity price tier (vazio/cheio/ponta)
    - variables:
        current_hour: "{{ now().hour }}"
        is_weekend: "{{ now().weekday() in [5, 6] }}"  # Saturday, Sunday
        price_tier: >
          {% if is_weekend %}
            vazio
          {% elif current_hour %3C 8 or current_hour >= 22 %}
            vazio
          {% elif current_hour >= 8 and current_hour < 10 or current_hour >= 20 and current_hour < 22 %}
            cheio
          {% elif current_hour >= 10 and current_hour < 13 or current_hour >= 18 and current_hour < 20 %}
            ponta
          {% elif current_hour >= 13 and current_hour < 18 %}
            cheio
          {% endif %}
        home_battery_soc: "{{ states('sensor.battery_soc') | float }}"
        tesla_soc: "{{ states('sensor.tesla_soc') | float }}"
        solar_forecast_next_hour: "{{ states('sensor.forecast_solar_next_hour') | float }}"
        current_consumption: "{{ states('sensor.home_consumption') | float }}"
        
    # Decision tree for battery management
    - choose:
        # High price period (ponta) - Discharge batteries
        - conditions:
            - condition: template
              value_template: "{{ price_tier == 'ponta' }}"
          sequence:
            # If home battery has sufficient charge, use it
            - condition: numeric_state
              entity_id: sensor.battery_soc
              above: 20  # Keep 20% minimum
            - service: script.set_goodwe_discharge_mode
            
        # Low price period (vazio) - Charge batteries
        - conditions:
            - condition: template
              value_template: "{{ price_tier == 'vazio' }}"
          sequence:
            # Charge home battery to 100% during low price
            - condition: numeric_state
              entity_id: sensor.battery_soc
              below: 100
            - service: script.set_goodwe_charge_mode
            
            # Charge Tesla if home and SOC is below threshold
            - condition: and
              conditions:
                - condition: state
                  entity_id: device_tracker.tesla_model_y
                  state: 'home'
                - condition: numeric_state
                  entity_id: sensor.tesla_soc
                  below: 70  # Adjust based on daily driving needs
            - service: tesla_custom.api_command
              data:
                device_id: !secret tesla_device_id
                command: charge_start
                
        # Medium price (cheio) - Base decisions on solar forecast
        - conditions:
            - condition: template
              value_template: "{{ price_tier == 'cheio' }}"
          sequence:
            - choose:
                # If good solar production is expected soon, preserve battery
                - conditions:
                    - condition: numeric_state
                      entity_id: sensor.forecast_solar_next_hour
                      above: 2000  # 2kW+ expected
                  sequence:
                    - service: script.set_goodwe_self_consumption_mode
                
                # If poor solar expected and battery is charged
                - conditions:
                    - condition: numeric_state
                      entity_id: sensor.forecast_solar_next_hour
                      below: 1000  # Poor solar expected
                    - condition: numeric_state
                      entity_id: sensor.battery_soc
                      above: 50  # Battery has decent charge
                  sequence:
                    - service: script.set_goodwe_self_consumption_mode
                
                # Otherwise charge from grid (still cheaper than ponta)
                - conditions:
                    - condition: numeric_state
                      entity_id: sensor.battery_soc
                      below: 40  # Battery needs charge for evening peak
                  sequence:
                    - service: script.set_goodwe_charge_mode
```

Helper scripts for GoodWe mode control:

```yaml
# scripts.yaml
set_goodwe_discharge_mode:
  sequence:
    - service: goodwe.set_operation_mode
      data:
        operation_mode: "Time of Use"
        battery_power_mode: "Force Discharge"
        battery_discharge_time: "{{ now().hour }}:00"
        battery_discharge_power: 2500  # Adjust based on consumption needs

set_goodwe_charge_mode:
  sequence:
    - service: goodwe.set_operation_mode
      data:
        operation_mode: "Time of Use"
        battery_power_mode: "Force Charge"
        battery_charge_time: "{{ now().hour }}:00"
        battery_charge_power: 2000  # Adjust based on grid capacity

set_goodwe_self_consumption_mode:
  sequence:
    - service: goodwe.set_operation_mode
      data:
        operation_mode: "Self-consumption"
```

### 3.3 Dehumidifier Management

Dehumidifiers should run based on energy availability and humidity levels:

```yaml
# automations.yaml
- alias: "Smart Dehumidifier Control"
  trigger:
    - platform: time_pattern
      minutes: "/15"  # Check every 15 minutes
  condition:
    - condition: numeric_state
      entity_id: sensor.home_humidity
      above: 60  # Only run if humidity is high
  action:
    - service: script.manage_dehumidifiers
```

Script for dehumidifier management:

```yaml
# scripts.yaml
manage_dehumidifiers:
  sequence:
    - variables:
        solar_available: "{{ states('sensor.solar_production') | float }}"
        battery_soc: "{{ states('sensor.battery_soc') | float }}"
        electricity_price: "{{ states('sensor.energy_price_current') | float }}"
        current_hour: "{{ now().hour }}"
        
    # Decision logic for dehumidifiers
    - choose:
        # Solar excess available - run all needed dehumidifiers
        - conditions:
            - condition: numeric_state
              entity_id: sensor.solar_production
              above: 1500  # Significant solar production
          sequence:
            # Check humidity in different zones and turn on accordingly
            - service: switch.turn_on
              target:
                entity_id: >
                  {% set dehumidifiers = [] %}
                  {% if states('sensor.living_room_humidity') | float > 60 %}
                    {% set dehumidifiers = dehumidifiers + ['switch.dehumidifier_1'] %}
                  {% endif %}
                  {% if states('sensor.bedroom_humidity') | float > 60 %}
                    {% set dehumidifiers = dehumidifiers + ['switch.dehumidifier_2'] %}
                  {% endif %}
                  {% if states('sensor.basement_humidity') | float > 65 %}
                    {% set dehumidifiers = dehumidifiers + ['switch.dehumidifier_3'] %}
                  {% endif %}
                  {% if states('sensor.bathroom_humidity') | float > 70 %}
                    {% set dehumidifiers = dehumidifiers + ['switch.dehumidifier_4'] %}
                  {% endif %}
                  {{ dehumidifiers }}
        
        # Low electricity price period but no solar
        - conditions:
            - condition: template
              value_template: >
                {% set is_low_price = current_hour < 8 or current_hour >= 22 or now().weekday() in [5, 6] %}
                {{ is_low_price and battery_soc > 40 }}
          sequence:
            # Run high-priority dehumidifiers only
            - service: switch.turn_on
              target:
                entity_id: >
                  {% set dehumidifiers = [] %}
                  {% if states('sensor.basement_humidity') | float > 70 %}
                    {% set dehumidifiers = dehumidifiers + ['switch.dehumidifier_3'] %}
                  {% endif %}
                  {% if states('sensor.bathroom_humidity') | float > 75 %}
                    {% set dehumidifiers = dehumidifiers + ['switch.dehumidifier_4'] %}
                  {% endif %}
                  {{ dehumidifiers }}
                  
        # All other scenarios - only run if critical humidity
        - conditions:
            - condition: numeric_state
              entity_id: sensor.home_humidity
              above: 75  # Very high humidity
          sequence:
            - service: switch.turn_on
              entity_id: switch.dehumidifier_1  # Run just one for emergency
```

### 3.4 Heat Pump Water Heater Optimization

```yaml
# automations.yaml
- alias: "Smart Water Heating"
  trigger:
    - platform: time_pattern
      hours: "/1"  # Check hourly
  action:
    - service: script.manage_water_heating
```

Water heating management script:

```yaml
# scripts.yaml
manage_water_heating:
  sequence:
    - variables:
        hot_water_temp: "{{ states('sensor.hot_water_temperature') | float }}"
        solar_available: "{{ states('sensor.solar_production') | float }}"
        current_hour: "{{ now().hour }}"
        is_weekend: "{{ now().weekday() in [5, 6] }}"
        price_tier: >
          {% if is_weekend %}
            vazio
          {% elif current_hour < 8 or current_hour >= 22 %}
            vazio
          {% elif current_hour >= 8 and current_hour < 10 or current_hour >= 20 and current_hour < 22 %}
            cheio
          {% elif current_hour >= 10 and current_hour < 13 or current_hour >= 18 and current_hour < 20 %}
            ponta
          {% elif current_hour >= 13 and current_hour < 18 %}
            cheio
          {% endif %}
        
    # Decision tree for water heating
    - choose:
        # Hot water temperature is low - needs immediate heating
        - conditions:
            - condition: numeric_state
              entity_id: sensor.hot_water_temperature
              below: 45  # Minimum acceptable temperature
          sequence:
            - service: switch.turn_on
              entity_id: switch.water_heater_heat_pump
              
        # Excess solar available - perfect time to heat water
        - conditions:
            - condition: numeric_state
              entity_id: sensor.solar_production
              above: 2500  # Good solar production
            - condition: numeric_state
              entity_id: sensor.hot_water_temperature
              below: 60  # Not fully heated yet
          sequence:
            - service: switch.turn_on
              entity_id: switch.water_heater_heat_pump
              
        # Low price period (vazio) - good time to heat water
        - conditions:
            - condition: template
              value_template: "{{ price_tier == 'vazio' }}"
            - condition: numeric_state
              entity_id: sensor.hot_water_temperature
              below: 55  # Below optimal temperature
          sequence:
            - service: switch.turn_on
              entity_id: switch.water_heater_heat_pump
              
      # Default action if no conditions match
      default:
        - service: switch.turn_off
          entity_id: switch.water_heater_heat_pump
```

### 3.5 Tesla Charging Strategy

```yaml
# automations.yaml
- alias: "Tesla Intelligent Charging"
  trigger:
    - platform: state
      entity_id: device_tracker.tesla_model_y
      to: 'home'  # When Tesla arrives home
    - platform: time_pattern
      hours: "/1"  # Check hourly for optimization
  action:
    - service: script.optimize_tesla_charging
```

Tesla charging optimization script:

```yaml
# scripts.yaml
optimize_tesla_charging:
  sequence:
    - variables:
        solar_available: "{{ states('sensor.solar_production') | float }}"
        battery_soc: "{{ states('sensor.battery_soc') | float }}"
        tesla_soc: "{{ states('sensor.tesla_soc') | float }}"
        is_tesla_home: "{{ is_state('device_tracker.tesla_model_y', 'home') }}"
        current_hour: "{{ now().hour }}"
        is_weekend: "{{ now().weekday() in [5, 6] }}"
        next_trip_time: "{{ states('input_datetime.next_car_trip') }}"
        price_tier: >
          {% if is_weekend %}
            vazio
          {% elif current_hour < 8 or current_hour >= 22 %}
            vazio
          {% elif current_hour >= 8 and current_hour < 10 or current_hour >= 20 and current_hour < 22 %}
            cheio
          {% elif current_hour >= 10 and current_hour < 13 or current_hour >= 18 and current_hour < 20 %}
            ponta
          {% elif current_hour >= 13 and current_hour < 18 %}
            cheio
          {% endif %}
        
    # Only proceed if Tesla is home
    - condition: template
      value_template: "{{ is_tesla_home }}"
      
    # Decision tree for Tesla charging
    - choose:
        # High solar production available
        - conditions:
            - condition: numeric_state
              entity_id: sensor.solar_production
              above: 3000  # Only charge from solar if significant excess
            - condition: numeric_state
              entity_id: sensor.tesla_soc
              below: 90  # Not already fully charged
          sequence:
            - service: tesla_custom.api_command
              data:
                device_id: !secret tesla_device_id
                command: set_charging_amps
                params:
                  charging_amps: 16  # Adjust based on excess solar
            - service: tesla_custom.api_command
              data:
                device_id: !secret tesla_device_id
                command: charge_start
                
        # Low price period overnight
        - conditions:
            - condition: template
              value_template: "{{ price_tier == 'vazio' }}"
            - condition: numeric_state
              entity_id: sensor.tesla_soc
              below: 80  # Charge to 80% during low price
          sequence:
            # Set charge limit to 80%
            - service: tesla_custom.api_command
              data:
                device_id: !secret tesla_device_id
                command: set_charge_limit
                params:
                  charge_limit: 80
            # Set charging amps
            - service: tesla_custom.api_command
              data:
                device_id: !secret tesla_device_id
                command: set_charging_amps
                params:
                  charging_amps: 32  # Maximum charging speed
            # Start charging
            - service: tesla_custom.api_command
              data:
                device_id: !secret tesla_device_id
                command: charge_start
                
        # Trip planned soon and charge needed
        - conditions:
            - condition: template
              value_template: >
                {% set trip_hour = strptime(states('input_datetime.next_car_trip'), '%Y-%m-%d %H:%M:%S').hour %}
                {% set hours_until_trip = (trip_hour - current_hour) % 24 %}
                {{ hours_until_trip < 3 and tesla_soc < 70 }}
          sequence:
            # Emergency charging regardless of price
            - service: tesla_custom.api_command
              data:
                device_id: !secret tesla_device_id
                command: set_charge_limit
                params:
                  charge_limit: 90
            - service: tesla_custom.api_command
              data:
                device_id: !secret tesla_device_id
                command: charge_start
                
      # Default action - stop charging if no conditions match
      default:
        - service: tesla_custom.api_command
          data:
            device_id: !secret tesla_device_id
            command: charge_stop
```

## 4. Custom Dashboards

Let's create specialized dashboards that give you complete visibility into your system.

### 4.1 Energy Overview Dashboard

```yaml
# lovelace configuration - energy_overview.yaml
      - type: vertical-stack
        cards:
          - type: markdown
            content: "## Current Status"
          - type: glance
            title: System Status
            entities:
              - entity: sensor.solar_production
                name: Solar
                icon: mdi:solar-power
              - entity: sensor.home_consumption
                name: Consumption
                icon: mdi:power-socket-eu
              - entity: sensor.battery_soc
                name: Home Battery
                icon: mdi:battery-high
              - entity: sensor.tesla_soc
                name: Tesla Battery
                icon: mdi:car-electric
          
          - type: custom:mini-graph-card
            name: Power Flow (Last 24h)
            hours_to_show: 24
            points_per_hour: 4
            line_width: 2
            entities:
              - entity: sensor.solar_production
                name: Solar
                color: '#ffd700'
              - entity: sensor.home_consumption
                name: Home
                color: '#3498db'
              - entity: sensor.battery_power
                name: Battery 
                color: '#2ecc71'
      
      - type: vertical-stack
        cards:
          - type: markdown
            content: "## Current Electricity Pricing"
          - type: custom:apexcharts-card
            header:
              title: Price Forecast (24h)
              show: true
            graph_span: 24h
            span:
              start: day
            series:
              - entity: sensor.energy_price_current
                name: "€/kWh"
                stroke_width: 2
                color: var(--accent-color)
            
          - type: entity
            name: Current Rate Tier
            entity: sensor.current_price_tier
            icon: mdi:currency-eur
```

### 4.2 Device Control Dashboard

```yaml
# lovelace configuration - device_control.yaml
title: Device Control
views:
  - title: Smart Devices
    path: devices
    icon: mdi:power-plug
    badges: []
    cards:
      - type: vertical-stack
        cards:
          - type: markdown
            content: "## Heat Pumps"
          - type: entities
            title: Heat Pump Control
            entities:
              - entity: switch.water_heater_heat_pump
                name: Water Heater
                secondary_info: last-changed
              - entity: sensor.hot_water_temperature
                name: Water Temperature
              - entity: sensor.water_heater_power
                name: Power Consumption
              - entity: switch.home_heat_pump
                name: Home Heating
                secondary_info: last-changed
              - entity: sensor.home_heat_pump_power
                name: Power Consumption
              - entity: sensor.room_temperature
                name: Room Temperature
          
      - type: vertical-stack
        cards:
          - type: markdown
            content: "## Dehumidifiers"
          - type: entities
            title: Dehumidifier Control
            entities:
              - entity: switch.dehumidifier_1
                name: Living Room
                secondary_info: last-changed
              - entity: sensor.living_room_humidity
                name: Humidity
              - entity: switch.dehumidifier_2
                name: Bedroom
                secondary_info: last-changed
              - entity: sensor.bedroom_humidity
                name: Humidity
              - entity: switch.dehumidifier_3
                name: Basement
                secondary_info: last-changed
              - entity: sensor.basement_humidity
                name: Humidity
              - entity: switch.dehumidifier_4
                name: Bathroom
                secondary_info: last-changed
              - entity: sensor.bathroom_humidity
                name: Humidity
                
      - type: vertical-stack
        cards:
          - type: markdown
            content: "## Tesla Model Y"
          - type: entities
            title: Tesla Status
            entities:
              - entity: sensor.tesla_soc
                name: Battery Level
              - entity: sensor.tesla_range
                name: Range
              - entity: binary_sensor.tesla_model_y_charger
                name: Charging Status
              - entity: sensor.tesla_charging_power
                name: Charging Power
              - entity: device_tracker.tesla_model_y
                name: Location
          - type: custom:button-card
            name: Start Charging
            icon: mdi:ev-station
            show_name: true
            tap_action:
              action: call-service
              service: tesla_custom.api_command
              service_data:
                device_id: !secret tesla_device_id
                command: charge_start
          - type: custom:button-card
            name: Stop Charging
            icon: mdi:power-plug-off
            show_name: true
            tap_action:
              action: call-service
              service: tesla_custom.api_command
              service_data:
                device_id: !secret tesla_device_id
                command: charge_stop
```

### 4.3 Analytics Dashboard

```yaml
# lovelace configuration - analytics.yaml
title: Energy Analytics
views:
  - title: Analytics
    path: analytics
    icon: mdi:chart-line
    badges: []
    cards:
      - type: vertical-stack
        cards:
          - type: markdown
            content: "## Daily Energy Balance"
          - type: custom:apexcharts-card
            header:
              title: Energy Production vs Consumption
              show: true
            graph_span: 7d
            span:
              start: week
            series:
              - entity: sensor.daily_energy_production
                name: Production (kWh)
                stroke_width: 2
                color: '#2ecc71'
                type: column
              - entity: sensor.daily_energy_consumption
                name: Consumption (kWh)
                stroke_width: 2
                color: '#e74c3c'
                type: column
              - entity: sensor.daily_grid_import
                name: Grid Import (kWh)
                stroke_width: 2
                color: '#3498db'
                type: column
              - entity: sensor.daily_grid_export
                name: Grid Export (kWh)
                stroke_width: 2
                color: '#f39c12'
                type: column
                
      - type: vertical-stack
        cards:
          - type: markdown
            content: "## Battery Utilization"
          - type: custom:mini-graph-card
            name: Home Battery SOC
            hours_to_show: 48
            points_per_hour: 2
            line_width: 2
            entities:
              - entity: sensor.battery_soc
                name: Battery Level
                
          - type: custom:apexcharts-card
            header:
              title: Tesla Charging Pattern
              show: true
            graph_span: 7d
            series:
              - entity: sensor.tesla_daily_energy_added
                name: Charge Added (kWh)
                stroke_width: 2
                color: '#9b59b6'
                type: column
                
      - type: vertical-stack
        cards:
          - type: markdown
            content: "## Energy Cost Savings"
          - type: custom:apexcharts-card
            header:
              title: Daily Energy Costs
              show: true
            graph_span: 30d
            span:
              start: month
            series:
              - entity: sensor.daily_energy_cost
                name: Actual Cost (€)
                stroke_width: 2
                color: '#e74c3c'
              - entity: sensor.daily_energy_cost_without_optimization
                name: Estimated Cost Without System (€)
                stroke_width: 2
                color: '#7f8c8d'
                curve: smooth
```

## 5. Predictive Energy Model

Let's create a predictive model using the Python integration in Home Assistant to forecast energy production and consumption.

```yaml
# configuration.yaml
python_script:
```

Create a new file: `/config/python_scripts/energy_prediction.py`:

```python
# energy_prediction.py
import datetime
import numpy as np
from sklearn.ensemble import RandomForestRegressor
import pickle
import os

# Define path for model storage
MODEL_PATH = "/config/python_scripts/energy_models/"
if not os.path.exists(MODEL_PATH):
    os.makedirs(MODEL_PATH)

# Get Home Assistant API and states
hass = hass  # noqa
now = datetime.datetime.now()

# Collect weather forecast data
try:
    weather_forecast = []
    cloud_cover = []
    temperature = []
    
    for day in range(2):  # Today and tomorrow
        for hour in range(24):
            forecast_time = now.replace(hour=hour, minute=0, second=0, microsecond=0) + datetime.timedelta(days=day)
            forecast_str = forecast_time.strftime("%Y-%m-%d_%H")
            
            # Get forecast entities for each hour
            cloud_entity = f"sensor.forecast_cloud_cover_{forecast_str}"
            temp_entity = f"sensor.forecast_temperature_{forecast_str}"
            
            if cloud_entity in hass.states.entity_ids("sensor"):
                cloud_cover.append(float(hass.states.get(cloud_entity).state))
            else:
                cloud_cover.append(50)  # Default value
                
            if temp_entity in hass.states.entity_ids("sensor"):
                temperature.append(float(hass.states.get(temp_entity).state))
            else:
                temperature.append(20)  # Default value
    
    # Get historical production data for the last 30 days
    production_history = []
    consumption_history = []
    weather_history = []
    day_of_week_history = []
    hour_of_day_history = []
    
    # Load existing data if available
    history_file = f"{MODEL_PATH}energy_history.pkl"
    if os.path.exists(history_file):
        with open(history_file, 'rb') as f:
            history_data = pickle.load(f)
            production_history = history_data.get('production', [])
            consumption_history = history_data.get('consumption', [])
            weather_history = history_data.get('weather', [])
            day_of_week_history = history_data.get('day_of_week', [])
            hour_of_day_history = history_data.get('hour_of_day', [])
    
    # Add today's actual values to history
    for hour in range(now.hour):
        timestamp = now.replace(hour=hour, minute=0, second=0, microsecond=0)
        history_time_str = timestamp.strftime("%Y-%m-%d_%H")
        
        prod_entity = f"sensor.solar_production_{history_time_str}"
        cons_entity = f"sensor.home_consumption_{history_time_str}"
        weather_entity = f"sensor.cloud_cover_{history_time_str}"
        
        if prod_entity in hass.states.entity_ids("sensor"):
            production_history.append(float(hass.states.get(prod_entity).state))
            consumption_history.append(float(hass.states.get(cons_entity).state))
            weather_history.append(float(hass.states.get(weather_entity).state))
            day_of_week_history.append(timestamp.weekday())
            hour_of_day_history.append(timestamp.hour)
    
    # Ensure we have enough data
    if len(production_history) > 48:  # At least 48 hours of data
        # Train production model
        X_prod = np.column_stack((weather_history, day_of_week_history, hour_of_day_history))
        y_prod = np.array(production_history)
        
        # Train consumption model
        X_cons = np.column_stack((day_of_week_history, hour_of_day_history, production_history))
        y_cons = np.array(consumption_history)
        
        # Create and train models
        prod_model = RandomForestRegressor(n_estimators=50, random_state=42)
        prod_model.fit(X_prod, y_prod)
        
        cons_model = RandomForestRegressor(n_estimators=50, random_state=42)
        cons_model.fit(X_cons, y_cons)
        
        # Save models
        with open(f"{MODEL_PATH}production_model.pkl", 'wb') as f:
            pickle.dump(prod_model, f)
        
        with open(f"{MODEL_PATH}consumption_model.pkl", 'wb') as f:
            pickle.dump(cons_model, f)
        
        # Save updated history
        history_data = {
            'production': production_history[-720:],  # Keep last 30 days
            'consumption': consumption_history[-720:],
            'weather': weather_history[-720:],
            'day_of_week': day_of_week_history[-720:],
            'hour_of_day': hour_of_day_history[-720:]
        }
        with open(history_file, 'wb') as f:
            pickle.dump(history_data, f)
        
        # Generate predictions for next 48 hours
        forecast_production = []
        forecast_consumption = []
        
        for day in range(2):  # Today and tomorrow
            for hour in range(24):
                forecast_time = now.replace(hour=hour, minute=0, second=0, microsecond=0) + datetime.timedelta(days=day)
                
                # Skip hours that have already passed today
                if day == 0 and hour < now.hour:
                    continue
                
                hour_idx = day * 24 + hour
                if hour_idx < len(cloud_cover):
                    # Production forecast
                    X_prod_pred = np.array([[
                        cloud_cover[hour_idx],
                        forecast_time.weekday(),
                        hour
                    ]])
                    
                    prod_pred = prod_model.predict(X_prod_pred)[0]
                    prod_pred = max(0, prod_pred)  # Production can't be negative
                    
                    # Consumption forecast based on production prediction
                    X_cons_pred = np.array([[
                        forecast_time.weekday(),
                        hour,
                        prod_pred
                    ]])
                    
                    cons_pred = cons_model.predict(X_cons_pred)[0]
                    cons_pred = max(100, cons_pred)  # Base consumption
                    
                    # Store predictions
                    time_str = forecast_time.strftime("%Y-%m-%d %H:%M")
                    forecast_production.append((time_str, prod_pred))
                    forecast_consumption.append((time_str, cons_pred))
                    
                    # Create/update sensor states
                    time_key = forecast_time.strftime("%Y%m%d%H")
                    hass.states.set(f"sensor.forecast_production_{time_key}", prod_pred, {
                        "unit_of_measurement": "W",
                        "friendly_name": f"Forecast Production {forecast_time.strftime('%d/%m %H:%M')}",
                        "icon": "mdi:solar-power"
                    })
                    
                    hass.states.set(f"sensor.forecast_consumption_{time_key}", cons_pred, {
                        "unit_of_measurement": "W",
                        "friendly_name": f"Forecast Consumption {forecast_time.strftime('%d/%m %H:%M')}",
                        "icon": "mdi:power-socket-eu"
                    })
        
        # Calculate daily totals
        tomorrow = now.date() + datetime.timedelta(days=1)
        tomorrow_prod_total = sum(prod for time_str, prod in forecast_production if tomorrow.strftime("%Y-%m-%d") in time_str) / 1000  # Convert to kWh
        tomorrow_cons_total = sum(cons for time_str, cons in forecast_consumption if tomorrow.strftime("%Y-%m-%d") in time_str) / 1000  # Convert to kWh
        
        # Update daily forecast sensors
        hass.states.set("sensor.tomorrow_production_forecast", tomorrow_prod_total, {
            "unit_of_measurement": "kWh",
            "friendly_name": "Tomorrow's Production Forecast",
            "icon": "mdi:solar-power"
        })
        
        hass.states.set("sensor.tomorrow_consumption_forecast", tomorrow_cons_total, {
            "unit_of_measurement": "kWh",
            "friendly_name": "Tomorrow's Consumption Forecast",
            "icon": "mdi:power-socket-eu"
        })
        
        # Calculate surplus/deficit forecast
        surplus = tomorrow_prod_total - tomorrow_cons_total
        hass.states.set("sensor.tomorrow_energy_balance", surplus, {
            "unit_of_measurement": "kWh",
            "friendly_name": "Tomorrow's Energy Balance",
            "icon": "mdi:scale-balance"
        })
        
        # Success message
        hass.states.set("sensor.energy_prediction_status", "Success", {
            "last_run": now.isoformat(),
            "friendly_name": "Energy Prediction Status"
        })
    else:
        # Not enough data yet
        hass.states.set("sensor.energy_prediction_status", "Insufficient Data", {
            "last_run": now.isoformat(),
            "friendly_name": "Energy Prediction Status",
            "required_hours": 48,
            "current_hours": len(production_history)
        })

except Exception as e:
    # Error handling
    hass.states.set("sensor.energy_prediction_status", "Error", {
        "last_run": now.isoformat(),
        "friendly_name": "Energy Prediction Status",
        "error": str(e)
    })
```

Set up an automation to run the prediction model:

```yaml
# automations.yaml
- alias: "Run Energy Prediction Model"
  trigger:
    - platform: time
      at: "00:05:00"  # Run shortly after midnight
    - platform: time
      at: "12:05:00"  # Update mid-day
  action:
    - service: python_script.energy_prediction
```

## 6. Implementation Roadmap

Here's a prioritized implementation plan:

### Phase 1: Foundation (Week 1-2)

- [x] Install Home Assistant if not already done
- [x] Set up GoodWe integration and verify data flow
- [ ] Configure basic energy monitoring
- [ ] Create initial Energy dashboard
- [ ] Set up external data sources (weather, electricity prices)

### Phase 2: Device Integration (Week 3-4)

- [x] Configure Tesla integration
- [ ] Add smart plugs for heat pumps and dehumidifiers
- [ ] Verify all devices are reporting correctly
- [ ] Implement basic manual control via Home Assistant

### Phase 3: Basic Automation (Week 5-6)

- [ ] Implement solar self-consumption optimization
- [ ] Configure basic battery charging/discharging based on time-of-use
- [ ] Set up dehumidifier scheduling during solar production
- [ ] Implement water heater optimization

### Phase 4: Advanced Automation (Week 7-8)

- [ ] Implement Tesla charging optimization
- [ ] Create predictive energy model
- [ ] Fine-tune battery management strategy
- [ ] Advanced heat pump controls based on forecasts

### Phase 5: Optimization & Refinement (Week 9-10)

- [ ] Create comprehensive dashboards
- [ ] Fine-tune automation parameters
- [ ] Implement energy cost tracking
- [ ] Test extreme scenarios (very cloudy days, grid outages)

### Phase 6: Advanced Features (Week 11-12)

- [ ] Implement voice control if desired
- [ ] Add mobile notifications for key events
- [ ] Configure backup systems for critical functions
- [ ] Integrate with additional services

## 7. Troubleshooting Guide

### GoodWe Integration Issues

|Problem|Cause|Solution|
|---|---|---|
|No data from GoodWe|Connection issue|Verify IP address and port. Check if inverter is accessible from Home Assistant network.|
|Intermittent data|Network stability|Consider connecting via Ethernet instead of Wi-Fi. Reduce polling frequency.|
|Unexpected readings|Modbus register mapping|Use correct inverter model in configuration, or manually map registers.|
|Battery data missing|Integration version issue|Update to latest HACS GoodWe integration.|

### Tesla API Issues

|Problem|Cause|Solution|
|---|---|---|
|Authentication fails|Password/token issue|Regenerate token, verify credentials.|
|"Vehicle unavailable"|Car in sleep mode|Use wake_up command before other commands.|
|API rate limiting|Too frequent polling|Increase scan_interval to at least 10 minutes.|
|Charging commands fail|Vehicle state mismatch|Check if car is plugged in. Use vehicle.update() before commands.|

### Heat Pumps and Dehumidifiers

|Problem|Cause|Solution|
|---|---|---|
|Devices not responding|Smart plug connectivity|Verify Wi-Fi coverage, restart plugs.|
|Power readings inaccurate|Calibration issue|Set correct wattage in device configuration.|
|Unexpected device state|Automation conflicts|Review automation trigger conditions for overlaps.|
|Device switching too often|Threshold too tight|Add hysteresis to decision logic (5-10% buffer zones).|

### Energy Model Issues

|Problem|Cause|Solution|
|---|---|---|
|Prediction failing|Missing requirements|Install scikit-learn via HACS Python Script dependencies.|
|Inaccurate predictions|Not enough training data|Let system collect at least 2 weeks of data.|
|Model not updating|File permission issue|Check permissions for model directory in Home Assistant.|
|Seasonal changes affect accuracy|Outdated model|Force model rebuild with full history monthly.|

## 8. Future Expansion Options

### Demand Response Integration

- Integrate with Portuguese grid demand response programs (when available)
- Prepare system for future virtual power plant participation
- Set up automatic response to grid frequency signals

### Enhanced Predictions

- Add machine learning models for more precise consumption forecasting
- Integrate holiday and occupancy prediction into energy model
- Connect to grid congestion prediction APIs (when available in Portugal)

### Additional Hardware

- Add smart blinds/shutters to help with thermal management
- Install EV charger with dynamic load balancing
- Add energy consumption monitoring for major appliances

### System Intelligence

- Implement fully predictive battery management that learns from usage patterns
- Create seasonal optimization strategies specific to Portuguese climate
- Develop voice assistant integration for energy status reports

### Grid Export Optimization

- Monitor Portugal's grid export policies and optimize for maximum revenue
- Implement dynamic export limiting based on grid needs and prices
- Prepare for peer-to-peer energy trading when regulations allow

## 9. Resource List

### Home Assistant Resources

- [Home Assistant Energy Management](https://www.home-assistant.io/energy/)
- [HACS (Home Assistant Community Store)](https://hacs.xyz/)
- [GoodWe Integration Documentation](https://github.com/mletenay/home-assistant-goodwe-inverter)
- [Tesla Custom Integration](https://github.com/alandtse/tesla)

### Portugal-Specific Resources

- [OMIE Energy Market Prices](https://www.omie.es/)
- [Portuguese Energy Regulatory Authority](https://www.erse.pt/)
- [Solar Resource Map for Portugal](https://globalsolaratlas.info/download/portugal)
- [EDP Time-of-Use Tariffs](https://www.edp.pt/particulares/energia/tarifarios/)

### Technical Documentation

- [GoodWe Modbus Protocol Documentation](https://github.com/marcelblijleven/goodwe/blob/master/docs/registers.md)
- [Tesla API Unofficial Documentation](https://tesla-api.timdorr.com/)
- [Home Assistant Automation Cookbook](https://www.home-assistant.io/cookbook/)
- [Energy Monitoring Best Practices](https://www.home-assistant.io/blog/2021/08/04/home-energy-management/)

### Portuguese Home Automation Communities

- [Home Assistant Portugal Forum](https://forum.cpha.pt/)
- [Portuguese Renewable Energy Forum](https://forum.apren.pt/)
- [Comunidade Portuguesa de Home Assistant (Facebook)](https://www.facebook.com/groups/homeassistantportugal/)

This implementation plan provides a comprehensive approach to optimizing your home energy system in Portugal. By following this roadmap, you'll create an advanced setup that maximizes solar self-consumption, minimizes electricity costs, and provides intelligent control of all your energy-consuming devices. The step-by-step implementation allows you to build the system progressively, ensuring each component works correctly before moving to the next level of complexity.

Would you like me to elaborate on any specific section or provide more details on a particular component of the system?