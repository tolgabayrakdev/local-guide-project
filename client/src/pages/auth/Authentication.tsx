import { Button, Input, InputGroup, InputRightElement, Spinner, Tab, TabList, TabPanel, TabPanels, Tabs, useToast } from "@chakra-ui/react"
import { FormEvent, useState } from "react"
import { Link, useNavigate } from "react-router-dom"


export default function Authentication() {
  const serverUrl = "http://127.0.0.1:1234";

  const toast = useToast();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  // Login
  const [lemail, setlEmail] = useState("");
  const [lpassword, setlPassword] = useState("");


  // Register
  const [username, setUsername] = useState("");
  const [remail, setrEmail] = useState("");
  const [rpassword, setrPassword] = useState("");



  const handleLoginRequest = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const result = await fetch(serverUrl + "/api/v1/auth/login", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify({ email: lemail, password: lpassword })
      })
      if (result.status === 200) {

      } else {
        setLoading(false);
        toast({
          title: 'Error.',
          description: "Email or password wrong.",
          status: 'warning',
          duration: 1500,
          isClosable: true,
        })
      }
    } catch (err) {
      setLoading(false);
      console.log(err);
    }
  }

  const handleRegisterRequest = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const result = await fetch(serverUrl, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify({ username: username, email: remail, password: rpassword })
      })
      if (result.status === 201) {
        toast({
          title: 'Account created.',
          description: "We've created your account for you.",
          status: 'success',
          duration: 1500,
          isClosable: true,
        })
        navigate("authentication")
      }
    } catch (err) {
      console.log(err);
    }
  }




  return (
    <div className="flex h-screen justify-center items-center">
      {
        loading ? <Spinner
          thickness='4px'
          speed='0.65s'
          emptyColor='gray.200'
          color='blue.500'
          size='xl'
        /> :
          <section className="border p-1">
            <Tabs isFitted>
              <TabList>
                <Tab>Login</Tab>
                <Tab>Register</Tab>
              </TabList>
              <TabPanels className="">
                <TabPanel>
                  <form onSubmit={handleLoginRequest}>
                    <h3 className="text-center">Log in here.</h3>
                    <Input onChange={(e) => setlEmail(e.target.value)} className="mt-3" placeholder='Enter email' />
                    <InputGroup className="mt-3" size='md'>
                      <Input
                        onChange={(e) => setlPassword(e.target.value)}
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
                    <Button type="submit" className="mt-3 w-full" colorScheme='blue'>Submit</Button>
                  </form>
                </TabPanel>
                <TabPanel className="w-80">
                  <form onSubmit={handleRegisterRequest}>
                    <h3 className="text-center">Register in here.</h3>
                    <Input onChange={(e) => setUsername(e.target.value)} className="mt-3" placeholder='Enter username' />
                    <Input onChange={(e) => setrEmail(e.target.value)} className="mt-3" placeholder='Enter email' />

                    <InputGroup className="mt-3" size='md'>
                      <Input
                        onChange={(e) => setrPassword(e.target.value)}
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
                    <Button type="submit" className="mt-3 w-full" colorScheme='blue'>Submit</Button>
                  </form>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </section>
      }

    </div>
  )
}