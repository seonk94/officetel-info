import { useContext, useEffect } from 'react';
import MapContext from '../map/MapContext';
import OLTileLayer from 'ol/layer/Tile';
import TileSource from 'ol/source/Tile';

interface Props {
  source: TileSource;
  zIndex: number;
}
const TileLayer = ({ source, zIndex = 0 } : Props) => {
  const { map } = useContext(MapContext); 
  useEffect(() => {
    if (!map) return;
    
    const tileLayer = new OLTileLayer({
      source,
      zIndex
    });
    map.addLayer(tileLayer);
    tileLayer.setZIndex(zIndex);
    return () => {
      if (map) {
        map.removeLayer(tileLayer);
      }
    };
  }, [map]);
  return null;
};
export default TileLayer;