export const useMap = () => {
  let waterLayer;

  async function initMap() {
    await ymaps3.ready;

    const { YMap, YMapDefaultSchemeLayer, YMapDefaultFeaturesLayer } = ymaps3;
    const { YMapDefaultMarker } = await ymaps3.import('@yandex/ymaps3-markers@0.0.1');

    let currentTheme = localStorage.getItem('theme') || 'light';

    const map = new YMap(document.getElementById('map'), {
      location: {
        center: [47.024643, 28.83158],
        zoom: 2,
      },
    });

    const featuresLayer = new YMapDefaultFeaturesLayer();
    map.addChild(featuresLayer);

    waterLayer = new YMapDefaultSchemeLayer({
      theme: 'light',
      zIndex: 0,
      background: {
        stylers: [
          {
            opacity: 0,
          },
        ],
      },
      customization: [
        {
          tags: {
            all: ['water'],
          },
          stylers: [
            {
              color: currentTheme === 'dark' ? '#1e1d25' : '#FFF',
            },
          ],
        },
        {
          tags: {
            all: ['landscape'],
          },
          stylers: [
            {
              color: '#acacb9',
            },
          ],
        },
      ],
    });

    map.addChild(waterLayer);

    map.addChild(
      new YMapDefaultMarker({
        coordinates: [130, -25],
        title: 'Yogja, INA',
        subtitle: '100 Smith Street<br>Collingwood VIC 3066 AU',
        color: 'blue',
      }),
    );

    window.YMapDefaultSchemeLayer = YMapDefaultSchemeLayer;
    window.waterLayer = waterLayer;
    window.map = map;
  }

  initMap();
};
