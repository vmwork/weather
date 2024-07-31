const weathers = ref([]);
const cityList = ref([]);
const cnt = 40;
export default () => {
  const config = useRuntimeConfig();

  const getCity = async (data: string): Promise<void> => {
    const { data: city } = await useAsyncData('data', () =>
      $fetch(
        `${config.public.apiBase}find?q=${data}&type=like&units=metric&APPID=${config.public.apiSecret}`
      )
    );
    if (city.value?.cod === '200') {
      cityList.value = city.value;
    }
  };
  const clearCityList = () => {
    cityList.value = [];
  };

  const getWeather = async (
    cityId: number,
    index: number = null
  ): Promise<void> => {
    cityList.value = [];
    const { data: weatherData } = await useAsyncData('data', () =>
      $fetch(
        `${config.public.apiBase}weather?id=${cityId}&appid=${config.public.apiSecret}&units=metric`
      )
    );
    if (index != null) {
      weathers.value[index] = weatherData.value;
      return;
    }

    if (weatherData.value && weathers.value.length !== 5) {
      weathers.value.push(weatherData.value);
    }
  };

  const getArrayByDay = (arr) => {
    const result = arr.reduce((acc, item, index) => {
      const resObject = {
        day: item.dt_txt.slice(0, 10),
        temp: [item.main.temp],
        wind: [item.wind.speed],
      };
      if (acc.length === 0) {
        acc.push(resObject);
        return acc;
      }
      const oldItem = acc.find((oldItem, i) => {
        return oldItem.day === item.dt_txt.slice(0, 10);
      });
      if (oldItem) {
        acc[acc.length - 1].temp.push(item.main.temp);
        acc[acc.length - 1].wind.push(item.wind.speed);
      } else {
        acc.push(resObject);
      }
      return acc;
    }, []);
    result.forEach((item, i) => {
      const temp = item.temp.reduce((a, b) => a + b) / item.temp.length;
      const wind = item.wind.reduce((a, b) => a + b) / item.wind.length;
      result[i].temp = temp.toFixed();
      result[i].wind = wind.toFixed();
    });

    return result;
  };

  const getWeatherDays = async (weather, index): Promise<void> => {
    cityList.value = [];
    const { data: weatherData } = await useAsyncData('data', () =>
      $fetch(
        `${config.public.apiBase}forecast?lon=${weather.coord.lon}&lat=${weather.coord.lat}&cnt=${cnt}&appid=${config.public.apiSecret}&units=metric`
      )
    );
    if (weatherData.value) {
      weathers.value[index] = weatherData.value.city;
      weathers.value[index].sys = { country: weatherData.value.city.country };
      weathers.value[index].list = getArrayByDay(weatherData.value.list);
    }
  };

  const deleteCard = (i) => {
    weathers.value.splice(i, 1);
  };

  return {
    getCity,
    cityList,
    getWeather,
    weathers,
    getWeatherDays,
    clearCityList,
    deleteCard,
  };
};
