import React, { Component } from "react";
import { withTaskContext } from "@twilio/flex-ui";

const wrapperStyle = {
  margin: "0",
  padding: "0",
  overflow: "hidden",
  height: "100%"
};

const frameStyle = {
  position: "absolute",
  width: "100%",
  height: "100%",
  border: "0px"
};

class FrameWrapper extends Component {
  constructor(props) {
    super(props);
  }

  componentWillUnmount() {
    console.log("Frame unmounted");
  }

  componentDidMount() {
    console.log("Frame mounted");
  }

  render() {
    let { task, thisTask } = this.props;

    let show = task && task.taskSid === thisTask.taskSid ? "visible" : "hidden";

    return (
      <div style={{ ...wrapperStyle, visibility: show }}>
        <iframe style={frameStyle} src={"http://www.bing.com"} />
      </div>
    );
  }
}

export default withTaskContext(FrameWrapper);
