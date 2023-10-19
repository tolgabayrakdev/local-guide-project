import { Button, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";

export default function Discover() {
  return (
    <section className="container mx-auto px-6 p-10">
      <div className="flex mt-3">
        <div className="w-7/12 flex p-1 pr-4">
          <input className="bg-gray-100 h-10 w-full p-3 text-gray-800 rounded-md mr-1" type="search" />
          <Button w="16" />
        </div>
        <div className="w-5/12 border-l-2 pl-4">
          dsadas
        </div>
      </div>

      <div className="mt-3">
        <h5 className="text-xl pl-1">Doing here</h5>
        <p className="text-4xl mt-1 font-semibold">Ankara</p>
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