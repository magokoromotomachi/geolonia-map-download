const map = new geolonia.Map( '#map' )

map.on('load', () => {
  setInterval( () => {
    map.rotateTo( map.getBearing() + 90 )
  }, 3000 )
})