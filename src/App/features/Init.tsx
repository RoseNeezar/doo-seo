import React, { FC } from "react"
import { Link, RouteComponentProps } from "@reach/router"
const currencies = ["CAD", "USD", "GBP", "MXN", "AUD", "EUR", "NOK"]
interface IProps extends RouteComponentProps {}
const Init: FC<IProps> = () => {
  return (
    <div>
      <ul>
        {currencies.map((res, index) => (
          <li style={{ marginTop: "40rem" }} key={index}>
            <Link to={`/app/${res}`}>
              <div>{res}</div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Init
