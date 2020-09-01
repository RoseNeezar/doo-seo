import React, { FC } from "react"
import { RouteComponentProps } from "@reach/router"
interface IProps extends RouteComponentProps {}

const Dynamic: FC<IProps> = ({ path, uri }) => {
  console.log(path)
  return <div>hey {uri}</div>
}

export default Dynamic
