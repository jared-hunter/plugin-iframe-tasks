import { FlexPlugin } from 'flex-plugin';
import React from 'react';
import IFrameCRMContainer from './components/IFrameCRMContainer';


const PLUGIN_NAME = 'IFrameCRMPlugin';

export default class IFrameCRMPlugin extends FlexPlugin {
  constructor() {
    super(PLUGIN_NAME);
  }


  /**
   * This code is run when your plugin is being started
   * Use this to modify any UI components or attach to the actions framework
   *
   * @param flex { typeof import('@twilio/flex-ui') }
   * @param manager { import('@twilio/flex-ui').Manager }
   */


  init(flex, manager) {
    console.log(manager);
    flex.CRMContainer.Content.replace(
      <IFrameCRMContainer key="demo-component" />,
      {
        sortOrder: 1,
      }
    );
  }
}
