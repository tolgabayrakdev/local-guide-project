import { Button, Input, InputGroup, InputRightElement, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react"
import { useState } from "react"
import { Link } from "react-router-dom"

type Props = {}

export default function Authentication({ }: Props) {
  const [show, setShow] = useState(false)
  const handleClick = () => setShow(!show)
  return (
    <div className="flex h-screen justify-center items-center">
      <section className="border p-1">
        <Tabs isFitted>
          <TabList>
            <Tab>Login</Tab>
            <Tab>Register</Tab>
          </TabList>

          <TabPanels className="">
            <TabPanel>
              <form>
                <h3 className="text-center">Log in here.</h3>
                <Input className="mt-3" placeholder='Enter email' />

                <InputGroup className="mt-3" size='md'>
                  <Input
                    pr='4.5rem'
                    type={show ? 'text' : 'password'}
                    placeholder='Enter password'
                  />
                  <InputRightElement width='4.5rem'>
                    <Button h='1.75rem' size='sm' onClick={handleClick}>
                      {show ? 'Hide' : 'Show'}
                    </Button>
                  </InputRightElement>
                </InputGroup>
                <Link className=" text-sm hover:underline hover:text-blue-500 block mt-3" to="/authentication/reset-password">Forget password ?</Link>
                <Button className="mt-3 w-full" colorScheme='blue'>Submit</Button>
              </form>
            </TabPanel>
            <TabPanel className="w-80">
              <h3 className="text-center">Register in here.</h3>
              <Input className="mt-3" placeholder='Enter username' />
              <Input className="mt-3" placeholder='Enter email' />

              <InputGroup className="mt-3" size='md'>
                <Input
                  pr='4.5rem'
                  type={show ? 'text' : 'password'}
                  placeholder='Enter password'
                />
                <InputRightElement width='4.5rem'>
                  <Button h='1.75rem' size='sm' onClick={handleClick}>
                    {show ? 'Hide' : 'Show'}
                  </Button>
                </InputRightElement>
              </InputGroup>

              <Button className="mt-3 w-full" colorScheme='blue'>Submit</Button>            </TabPanel>

          </TabPanels>
        </Tabs>
      </section>

    </div>
  )
}