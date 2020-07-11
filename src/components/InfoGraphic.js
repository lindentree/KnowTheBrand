import React from 'react';
import XMLViewer from 'react-xml-viewer';
import XMLToReact from '@condenast/xml-to-react';

const xmlToReact = new XMLToReact({
  Example: (attrs) => ({ type: 'ul', props: attrs }),
  Item: (attrs) => ({ type: 'div', props: attrs })
});


export default function InfoGraphic(props) {

  const reactTree = xmlToReact.convert(`${props.wolfram}`);

  return (
     <div>
        {reactTree}
     </div>

    )
}