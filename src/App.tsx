import { Form, Formik } from "formik"
import AliceContainer from "./components/containers/AliceContainer"
import BobContainer from "./components/containers/BobContainer"
import PublicContainer from "./components/containers/PublicContainer"

export const initialValues = {
  'public-n': 1693,
  'public-g': 1072,
  'public-a-b': 0,
  'public-b-a': 0,
  'alice-priv': 0,
  'bob-to-alice': 0,
  'bob-priv': 0,
  'alice-to-bob': 0,
}

function App() {

  return (
    <div className="flex items-center h-screen flex-col p-5 font-sora gap-7">
      <div>
        <h1 className="text-6xl  font-spacemono tracking-tight text-center">
          Diffie Hellman Key Exchange
        </h1>
        <h2 className="text-4xl tracking-widest text-center">
          Alejandro Obando
        </h2>
      </div>
      <Formik initialValues={initialValues}
        onSubmit={(values) => {
          console.log(values)
        }}>
        <Form className="flex flex-row w-full gap-5 min px-5 h-full">
          <AliceContainer />
          <PublicContainer />
          <BobContainer />
        </Form>
      </Formik>
    </div>
  )
}

export default App
