// plugins/google-maps.client.ts
export default defineNuxtPlugin((nuxtApp) => {
    if (!window.google) {
      const script = document.createElement('script')
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyBbNQvY6xQyNdxOrYl9aQFzN76u9AH30n8&libraries=places&callback=initMap`
      script.async = true
      script.defer = true
      document.head.appendChild(script)
    }
  })
  