initMap();

async function initMap() {
  await ymaps3.ready;
  const { YMap, YMapDefaultSchemeLayer, YMapDefaultFeaturesLayer, YMapMarker } =
    ymaps3;

  const map = new YMap(
    document.getElementById("map"),

    {
      location: {
        center: [37.068675, 56.365455],
        zoom: 10,
      },
    }
  );

  map.addChild(new YMapDefaultSchemeLayer({}));
  map.addChild(new YMapDefaultFeaturesLayer({}));

  const markerContainerElement = document.createElement("div");
  markerContainerElement.classList.add("marker-container");

  const markerElement = document.createElement("div");
  markerElement.classList.add("marker");

  const markerImage = document.createElement("img");
  markerImage.src = "./../img/svg/map-marker.svg";
  markerImage.classList.add("image");
  console.log(markerImage);
  markerElement.appendChild(markerImage);

  markerContainerElement.appendChild(markerElement);

  const marker = new YMapMarker(
    {
      coordinates: [37.068675, 56.365455],
    },
    markerContainerElement
  );
  map.addChild(marker);
}
