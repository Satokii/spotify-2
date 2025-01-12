// CHECK ACTIVE DEVICE & SET VOLUME, IF NO ACTIVE DEVICE SET DEFAULT VOLUME OF 50
const handleDeviceVolumeChanges = (availableDevices, setVolume) => {
    const activeDevice = availableDevices.find(device => device.is_active === true)
    if (!activeDevice) setVolume(50)
    else {
    setVolume(activeDevice.volume_percent)
  } 
}

  export default handleDeviceVolumeChanges