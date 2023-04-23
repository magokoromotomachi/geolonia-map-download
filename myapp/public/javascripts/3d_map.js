const map = new geolonia.Map({
    container: 'map',
    style: 'geolonia/basic',
    maxPitch: 85,
    locale: 'ja',
    center: [139.7673068, 35.6809591],
    zoom: 16.5,
    bearing: 0,
    pitch: 85,
  });
  
  // 3d on
  map.on('load', () => {
    map.setLayoutProperty('building-3d', 'visibility', 'visible');
  });