import React from 'react';
import XMLViewer from 'react-xml-viewer';
import XMLToReact from '@condenast/xml-to-react';

const parseString = require('xml2js').parseString;


const xmlToReact = new XMLToReact({
  Example: (attrs) => ({ type: 'ul', props: attrs }),
  Item: (attrs) => ({ type: 'div', props: attrs })
});


export default function InfoGraphic(props) {
  const jsonXML = parseString(props.wolfram, (err, result)=>{
    console.dir(result);
  });

  const dataArray = Object.values(jsonXML);

  return (
     <div>

        <XMLViewer xml={props.wolfram} />
     </div>

    )
}