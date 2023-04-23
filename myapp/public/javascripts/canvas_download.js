const map = new geolonia.Map({
    container: 'map',
    style: 'geolonia/basic',
    preserveDrawingBuffer: true,
    // maxPitch: 85,
    // locale: 'ja',
    // center: [139.7673068, 35.6809591],
    // zoom: 16.5,
    // bearing: 0,
    // pitch: 85,
  });
  
  // // 3d on
  // map.on('load', () => {
  //   map.setLayoutProperty('building-3d', 'visibility', 'visible');
  // });

  document.getElementById("download").onclick = (event) => {
    let canvas = document.getElementById("canvas");
    print(canvas)

    // let link = document.createElement("a");
    // link.href = canvas.toDataURL("image/png");
    // link.download = "test.png";
    // link.click();
    var type = 'image/png';
    var dataurl = canvas.toDataURL(type);
    var bin = atob(dataurl.split(',')[1]);
    var buffer = new Uint8Array(bin.length);
    for (var i = 0; i < bin.length; i++) {
        buffer[i] = bin.charCodeAt(i);
    }
    var blob = new Blob([buffer.buffer], {type: type});

    var link = document.createElement("a");
    link.href = window.URL.createObjectURL(blob);
    link.download = download_file_name;
    link.click();
}