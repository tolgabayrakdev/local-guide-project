import { Button, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import { useEffect, useState } from "react";

type Cities = {
  id: number,
  name: string
}

export default function Discover() {
  const [searchItem, setSearchItem] = useState("");
  const [cities, setCities] = useState<Cities[]>([]);
  const [selectedCity, setSelectedCity] = useState<Cities | null>();

  const [filteredCities, setFilteredCities] = useState<Cities[]>([]);


  const handleGetCities = async () => {
    try {
      const res = await fetch("http://127.0.0.1:1234/api/v1/cities", {
        method: "GET",
        credentials: "include"
      })
      const data = await res.json();
      setCities(data.cities);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    handleGetCities();
  }, [])

  useEffect(() => {
    // Her karakter değiştiğinde otomatik arama yap
    const filteredCities = filterCitiesByLetter(searchItem);
    setFilteredCities(filteredCities);
  }, [searchItem]);

  const clearSearch = () => {
    // Arama alanını temizle
    setSearchItem("");
    // Filtrelenmiş şehirleri temizle
    setFilteredCities([]);
    setSelectedCity(null);
    // local storage temizle
    localStorage.clear();
  };


  const filterCitiesByLetter = (letter: string) => {
    return cities.filter(city => city.name.toLowerCase().startsWith(letter.toLowerCase()));
  };

  const selectCity = (city: Cities) => {
    setSelectedCity(city);
    localStorage.setItem("city", city.name);
    setFilteredCities([]);
  }

  return (
    <section className="container mx-auto px-6 p-10">
      <div className="flex mt-3">
        <div className="w-7/12 flex p-1 pr-4">
          <input value={selectedCity?.name} onChange={(e) => setSearchItem(e.target.value)} className="bg-gray-100 h-10 w-full p-3 text-gray-800 rounded-md mr-1" type="search" />
          <Button onClick={clearSearch} w="16">Temizle</Button>
          <ul>
            {filteredCities.map(city => (
              <li key={city.id} onClick={() => selectCity(city)}>
                {city.name}
              </li>
            ))}
          </ul>
        </div>
        <div className="w-5/12 border-l-2 pl-4">
         
        </div>
      </div>

      <div className="mt-3">
        <h5 className="text-xl pl-1">Doing here</h5>
        <p className="text-4xl mt-1 font-semibold">{selectedCity?.name} </p>
      </div>
      <hr className="mt-3" />
      <Tabs size='md' variant='enclosed' mt="6" isFitted>
        <TabList>
          <Tab>Gezi</Tab>
          <Tab>Kültür Tarih</Tab>
          <Tab>Yiyecek ve İçecek</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <p>one!</p>
            <p>Gezi yerleri</p>
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
          <TabPanel>
            <p>three!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>

    </section>
  )
}