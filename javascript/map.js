// Initialize and add the map
function initMap() {
  // The location of KICT
  const KICT = { lat: 3.2532807702338777, lng: 101.72968461516572 };
  // The map, centered at KICT
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: KICT,
  });
  // The marker, positioned at KICT
  const marker = new google.maps.Marker({
    position: KICT,
    map: map,
  });
}
