import { fireEvent, render ,screen} from "@testing-library/react"
import { Header } from "../Header"
import { Provider } from "react-redux"
import appStore from "../../Const/appStore"
import { BrowserRouter } from "react-router-dom"
import "@testing-library/jest-dom"

it("should load header compm" , () =>{
    render(
        <BrowserRouter>
    <Provider store={appStore}>
    <Header/>
    </Provider>
    </BrowserRouter>
    )

    // const loginbtn = screen.getByRole("button")
    // const loginbtn = screen.getByText("login")
      const loginbtn = screen.getByRole("button", {name: "login"})
      fireEvent.click(loginbtn)
      const name = screen.getByText(/Defa/)
  expect(name).toBeInTheDocument();
  // console.log(name)
})
