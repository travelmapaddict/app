// @flow
import React from 'react'
import SearchBar from '../components/search-bar.js'
import TileGrid from '../components/tile-grid.js'
import MapTile from '../components/map-tile.js'

const MapChooser = () => (
  <div>
    <SearchBar
      itemType='map'
      sortOpts={[
        'most popular first',
        'least popular first',
        'newest first',
        'oldest first'
      ]}
    />
    <TileGrid>
      <MapTile />
      <MapTile />
      <MapTile />
      <MapTile />
      <MapTile />
    </TileGrid>
  </div>
)

export default MapChooser