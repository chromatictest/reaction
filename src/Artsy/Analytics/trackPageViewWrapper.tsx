import { isEqual } from "lodash"
import React from "react"
import { get } from "Utils/get"
import { trackPageView } from "./trackPageView"

interface Params {
  [x: string]: string
}

interface State {
  params: Params
}

export function trackPageViewWrapper<T>(
  Component: React.ComponentType<T>
): React.ComponentType<T> {
  return class TrackPageView extends React.Component<T, State> {
    static displayName = `TrackPageView(${Component.displayName ||
      Component.name ||
      "unknown"})`

    constructor(props) {
      super(props)

      this.state = {
        params: this.routeParams,
      }
    }

    // TODO: Type props properly, can have optional `match`
    get routeParams() {
      return get(this.props, (p: any) => p.match.routeParams, {})
    }

    componentDidMount() {
      trackPageView()
    }

    componentDidUpdate() {
      if (!isEqual(this.state.params, this.routeParams)) {
        trackPageView()
      }
    }

    render() {
      return <Component {...this.props} />
    }
  }
}
