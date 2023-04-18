import React from 'react';
import Button from 'terra-button';
import Hyperlink from 'terra-hyperlink';
import Spacer from 'terra-spacer';
import ActionFooter from 'terra-action-footer';

export default function Footer() {
    return (<ActionFooter
      start={<Hyperlink href="#">Start Action</Hyperlink>}
      end={(
        <React.Fragment>
          <Spacer isInlineBlock marginRight="medium">
            <Button text="Submit" variant={Button.Opts.Variants.EMPHASIS} />
          </Spacer>
          <Button text="Cancel" />
        </React.Fragment>
      )}
    />)
}