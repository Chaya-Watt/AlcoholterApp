import {BleManager} from 'react-native-ble-plx';
import base64 from 'react-native-base64';

const manager = new BleManager();

const BLE = () => {
    const subscription = manager.onStateChange((state) => {
        manager.enable();
        if (state === 'PoweredOn') {
          console.log(state);
          scanAndConnect();
          subscription.remove();
        }
      }, true);
      return () => {
        console.log('Out');
        clearInterval(TimerReadData);
        setDevice("Device Don't Connect");
        manager.cancelDeviceConnection('24:0A:C4:59:39:CE');
        manager.disable();
      };
    },
  
    const scanAndConnect = async () =>
      //Scan Device
      {
        console.log('Scan...Device');
        setDevice('Scan Device');
        manager.startDeviceScan(null, null, (error, device) => {
          if (error) {
            console.log(error);
            return;
          }
          if (device.name === 'ESP32 BLE') {
            console.log('Found', device.name);
            manager.stopDeviceScan();
            console.log('Stop Scan');
            setDevice(device.name);
            device
              .connect()
              .then((deviceDis) => {
                //Discover device all service and characteristics
                console.log('Discover All Services And Characteristics');
                return deviceDis.discoverAllServicesAndCharacteristics();
              })
              .then((device) => {
                //Have DeviceID and Send to function ReadInfoID
                console.log('DeviceID : ' + device.id);
                return ReadInfoID(device);
              })
              .catch((error) => {
                console.log(error);
              });
          }
        });
      };
  
    //Read Service and Characteristic for device
    const ReadInfoID = async (device) => {
      const ServicesID = await device.services();
      console.log('ServiceID : ' + ServicesID[2].uuid); //Check ServiceUUID
  
      const CharacteristicID = await device.characteristicsForService(
        ServicesID[2].uuid,
      );
      console.log('CharacteristicID : ' + CharacteristicID[0].uuid); //Check CharacteristicID
      TimerReadData(device, ServicesID[2].uuid, CharacteristicID[0].uuid);
    };
  
    //Read Data for device
    const TimerReadData = async (device, Service, Characteristic) => {
      setInterval(async () => {
        const Data = await device.readCharacteristicForService(
          Service,
          Characteristic,
        );
        const realData = Math.floor(base64.decode(Data.value));
        console.log('Value : ' + realData);
        setData(realData);
      }, 5000);
    };
};

dsadsadsa
dsadsadsadsad
export default BLE;
