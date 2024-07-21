export const usePriceSwitcher = () => {
  const switcher = document.querySelector('[data-price="switcher"]');
  const starterPrice = document.querySelector('[data-price="starter"]');
  const popularPrice = document.querySelector('[data-price="popular"]');
  const enterprisePrice = document.querySelector('[data-price="enterprise"]');
  const date = document.querySelectorAll('[data-price="date"]');

  const priceList = {
    starter: {
      default: '$' + 120 / 30,
      witchSale: '$' + 100,
    },

    popular: {
      default: '$' + 1680 / 30,
      witchSale: '$' + 1400,
    },

    enterprise: {
      default: '$' + 2520 / 30,
      witchSale: '$' + 2100,
    },

    date: {
      default: '/mo',
      witchSale: '/day',
    },
  };

  const setPricesWitchSale = () => {
    starterPrice.textContent = priceList.starter.witchSale;
    popularPrice.textContent = priceList.popular.witchSale;
    enterprisePrice.textContent = priceList.enterprise.witchSale;
    date.forEach((item) => {
      item.textContent = priceList.date.default;
    });
  };

  const setPricesDefault = () => {
    starterPrice.textContent = priceList.starter.default;
    popularPrice.textContent = priceList.popular.default;
    enterprisePrice.textContent = priceList.enterprise.default;
    date.forEach((item) => {
      item.textContent = priceList.date.witchSale;
    });
  };

  switcher.checked = true;

  switcher.addEventListener('click', () => {
    switcher.checked ? setPricesWitchSale() : setPricesDefault();
  });
};
