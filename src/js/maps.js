;(function () {
  let myMap;
  const init = () => {
    myMap = new ymaps.Map("map", {
      center: [55.752296, 37.602629],
      zoom: 14,
      controls: [],
    });

    let coords = [
      [55.75848, 37.583128],
      [55.744045, 37.582212],
      [55.750922, 37.603822],
      [55.758086, 37.624979],
    ];
    var myCollection = new ymaps.GeoObjectCollection(
      {},
      {
        draggable: false,
        iconLayout: "default#image",
        iconImageSize: [58, 73],
        iconImageOffset: [0, 0],
        iconImageHref: "img/icon/markerMap.png",
      }
    );

    for (let i = 0; i < coords.length; i++) {
      myCollection.add(new ymaps.Placemark(coords[i]));
    }

    myMap.geoObjects.add(myCollection);

    myMap.behaviors.disable("scrollZoom");
  };

  ymaps.ready(init);
})()
