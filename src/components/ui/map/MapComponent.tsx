import {YMaps, Map, ObjectManager, Placemark, Panorama} from '@pbe/react-yandex-maps'

import { FC } from 'react';

const MapComponent: FC = () => {
    return (
        <YMaps>
            <Map
                width='100%'
                height={500}

                defaultState={{
                    center: [58.005507, 56.259240],
                    zoom: 10,
                }}
            >
                <Placemark geometry={[58.005507, 56.259240]}  />
                <Panorama defaultPoint={[58.005507, 56.259240]} />
            </Map>
        </YMaps>
    );
}

export default MapComponent;