export default function (
  inputId: string,
  mode: "plan" | "score",
  onPlaceChanged: (data: any) => void
) {
  let currentPos: google.maps.LatLngLiteral;
  let map: google.maps.Map;
  let marker: google.maps.Marker;
  let directionsService: google.maps.DirectionsService;
  let directionsRenderer: google.maps.DirectionsRenderer;

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        currentPos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };

        map = new google.maps.Map(
          document.getElementById("map") as HTMLElement,
          {
            zoom: 16,
            center: currentPos,
          }
        );

        marker = new google.maps.Marker({
          position: currentPos,
          map,
        });

        const autocomplete = new google.maps.places.Autocomplete(
          document.getElementById(inputId) as HTMLInputElement,
          {
            types: ["address"],
            fields: ["place_id", "geometry", "address_components", "name"],
            bounds: {
              east: currentPos.lng + 0.1,
              west: currentPos.lng - 0.1,
              south: currentPos.lat - 0.1,
              north: currentPos.lat + 0.1,
            },
            strictBounds: false,
            componentRestrictions: { country: "tw" },
          }
        );

        autocomplete.addListener("place_changed", () => {
          const place = autocomplete.getPlace();
          if (!place.geometry) return;

          map.setCenter(place.geometry.location!);
          marker.setPosition(place.geometry.location!);

          if (mode === "score") {
            const components = place.address_components;
            if (components && components.length >= 3) {
              const [road, district, city] = components;
              window.sessionStorage.setItem("city", city.short_name);
              window.sessionStorage.setItem("district", district.short_name);
              window.sessionStorage.setItem("road", road.short_name);
              onPlaceChanged({ city, district, road });
            }
          } else if (mode === "plan") {
            if (!directionsService) {
              directionsService = new google.maps.DirectionsService();
            }
            if (!directionsRenderer) {
              directionsRenderer = new google.maps.DirectionsRenderer({ map });
            }

            directionsRenderer.set("directions", null);

            directionsService.route(
              {
                origin: currentPos,
                destination: { placeId: place.place_id },
                travelMode: google.maps.TravelMode.WALKING,
              },
              (response, status) => {
                if (status === "OK") {
                  directionsRenderer.setDirections(response);
                } else {
                  alert("無法規劃路線：" + status);
                }
              }
            );
          }

          onPlaceChanged(place);
        });
      },
      () => {
        alert("無法取得定位權限");
      }
    );
  }
}
