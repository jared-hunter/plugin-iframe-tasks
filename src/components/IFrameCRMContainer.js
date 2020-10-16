import React, { Component } from "react";
import FrameWrapper from "./FrameWrapper";
import { connect } from "react-redux";
import { Manager } from "@twilio/flex-ui";

class IFrameCRMContainer extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    let { events } = Manager.getInstance();
    events.on("selectedViewChanged", payload => {
    });
  }

  render() {
    let { tasks } = this.props;

    return (
      <div>
        {Array.from(tasks.values()).map(item => (
          <FrameWrapper thisTask={item} key={item.taskSid}></FrameWrapper>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    tasks: state.flex.worker.tasks
  };
};

export default connect(mapStateToProps)(IFrameCRMContainer);
