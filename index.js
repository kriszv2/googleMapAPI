const mapStyles = [
  {
    featureType: "administrative",
    elementType: "geometry",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "administrative.land_parcel",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "administrative.neighborhood",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "poi",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "poi",
    elementType: "labels.text",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "road",
    elementType: "labels",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "road",
    elementType: "labels.icon",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "road.arterial",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "road.highway",
    elementType: "labels",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "road.local",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },

  {
    featureType: "transit.station.bus",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "water",
    elementType: "labels.text",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
];
const LA_BOUNDS = {
  north: 34.34,
  south: 33.65,
  west: -118.72,
  east: -117.7,
};
function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 11,
    center: { lat: 34.012235, lng: -118.243683 },
    styles: mapStyles,
    restriction: {
      latLngBounds: LA_BOUNDS,
      strictBounds: false,
    },
  });
  const transitLayer = new google.maps.TransitLayer();

  transitLayer.setMap(map);
}

window.initMap = initMap;
