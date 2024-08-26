export const useTheme = () => {
  const themeTarget = document.querySelector('[data-theme]');
  const themeSwitcher = document.querySelector('[data-theme-switcher]');

  const themeTargetDataset = themeTarget.dataset;

  const theme = localStorage.getItem('theme') || 'light';
  themeTargetDataset.theme = theme;

  if (theme === 'dark') {
    themeSwitcher.checked = true;
  }

  themeSwitcher.addEventListener('click', () => {
    if (themeTargetDataset.theme === 'light') {
      themeTargetDataset.theme = 'dark';
      localStorage.setItem('theme', 'dark');

      // Изменение слоя при смене темы
      ymaps3.ready.then(() => {
        const newWaterLayer = new window.YMapDefaultSchemeLayer({
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
                  color: '#1e1d25',
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

        window.map.removeChild(window.waterLayer);

        window.map.addChild(newWaterLayer);

        window.waterLayer = newWaterLayer;
      });

      // Иконка Get In Touch из About 
      document.querySelectorAll('.container__img.light').forEach((img) => {
        img.style.display = 'none';
      });
      document.querySelectorAll('.container__img.dark').forEach((img) => {
        img.style.display = 'block';
      });
    } else {
      themeTargetDataset.theme = 'light';
      localStorage.setItem('theme', 'light');

      // Изменение слоя при смене темы
      ymaps3.ready.then(() => {
        const newWaterLayer = new window.YMapDefaultSchemeLayer({
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
                  color: '#FFF',
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

        window.map.removeChild(window.waterLayer);

        window.map.addChild(newWaterLayer);

        window.waterLayer = newWaterLayer;
      });

      // Иконка Get In Touch из About 
      document.querySelectorAll('.container__img.light').forEach((img) => {
        img.style.display = 'block';
      });
      document.querySelectorAll('.container__img.dark').forEach((img) => {
        img.style.display = 'none';
      });
    }
  });
};
