import "./app.css"
import Slider from "./component/slider";
import Header from "./component/header/header";
import Card from "./component/foodCards/card";
import ContextProvider from "./component/store/ContextProvider";
import Cart from "./component/other/cart";
import FeedBack from "./component/form/FeedBack";
import FormContextProvider from "./component/store/formContextProvider";

const App = () => {
  return (
    <>
      <ContextProvider>
        <Cart />
        <Header />
        <Slider />
        <div className="partitioningTitle">
          <h1>
            Top Orders
          </h1>
        </div>
        <div className="cardCollector">
          <Card />
        </div>
        <FormContextProvider >
          <FeedBack />
        </FormContextProvider>
      </ContextProvider>
    </>
  )
}

export default App;