'use client'

import { useEffect, useRef, useState } from 'react'
import Script from 'next/script'

interface Window {
    mapboxgl: any;
  }

export default function DealershipMap() {
  const mapContainer = useRef(null)
  const [mapLoaded, setMapLoaded] = useState(false)

  useEffect(() => {
    if (!mapLoaded || !mapContainer.current) return

    const mapboxgl = window.mapboxgl
    mapboxgl.accessToken = 'pk.eyJ1IjoiemFpbmJ1eDk5IiwiYSI6ImNtMWQxNTZrbzJpajAya3Bzd3h3bXJpdzEifQ.qvrNsPAOUpFw-1FJA_pL8w'

    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [45.32, -75.59], // Replace with your dealership's longitude and latitude
      zoom: 13
    })

    map.addControl(new mapboxgl.NavigationControl(), 'top-right')

    new mapboxgl.Marker()
      .setLngLat([45.32, -75.59]) // Replace with your dealership's longitude and latitude
      .addTo(map)

    new mapboxgl.Popup({ closeOnClick: false })
      .setLngLat([45.32, -75.59]) // Replace with your dealership's longitude and latitude
      .setHTML('<h3>Car Auto Sales</h3><p>Your trusted dealership</p>')
      .addTo(map)

    return () => map.remove()
  }, [mapLoaded])

  return (
    <section className=" py-12">
      <Script
        src="https://api.mapbox.com/mapbox-gl-js/v2.9.1/mapbox-gl.js"
        onLoad={() => setMapLoaded(true)}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl text-center mb-8">
          Visit Our Dealership
        </h2>
        <div className="aspect-w-16 aspect-h-9 relative">
          {!mapLoaded && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-100 rounded-lg">
              <p className="text-gray-500">Loading map...</p>
            </div>
          )}
          <div
            ref={mapContainer}
            className="w-full h-full rounded-lg shadow-lg"
            style={{ minHeight: '400px' }}
          />
        </div>
        <div className="mt-8 text-center">
          <p className="text-xl text-gray-700">
            123 Auto Lane, Carville, ST 12345
          </p>
          <p className="text-lg text-gray-600 mt-2">
            Open Monday - Saturday: 9AM - 7PM
          </p>
        </div>
      </div>
      <style jsx global>{`
        @import 'https://api.mapbox.com/mapbox-gl-js/v2.9.1/mapbox-gl.css';
      `}</style>
    </section>
  )
}
