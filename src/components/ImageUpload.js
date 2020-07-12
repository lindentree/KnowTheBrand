import React from 'react';
import axios from 'axios';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';



export default class ImageUpload extends React.Component {

  constructor(props) {
    super(props);
      this.state = {
        selectedFile: null,
        analysis: ''
      }

      this.onFileChange = this.onFileChange.bind(this);
      this.onFileUpload = this.onFileUpload.bind(this);

   
  }

  onFileChange(event) {
    event.preventDefault();
    this.setState({
      selectedFile: event.target.files[0],
    }, () =>{
      console.log(this.state.selectedFile)
    })


  }

  // imageAnalyze = (event) => {
  //   event.preventDefault();
  //   axios.post('/infer', file)
  //      .then(response => {
       

  //     });
  // }

  onFileUpload(event) {
    event.preventDefault();
    
    if(this.state.selectedFile !== null) {

      let formData = new FormData(); 


      formData.append(
      'image', 
       this.state.selectedFile
      )



      const headers = {
       'Content-Type': 'multipart/form-data'
      }

      console.log('firing test', formData.get('myFile'))


      axios.post('/infer', formData)
       .then(response => {
       
        console.log('response', response.data);

        this.setState({
          analysis: response.data
        })
      });

       // axios({
       //   method: 'post',
       //   url: 'http://localhost:8000/infer',
       //   data: formData,
       //   config: { headers: { 'Content-Type': 'multipart/form-data' } }
       // });

    }

     

  }
     


 render() {
  return (
    <div className="container">

      <h1>What's in the image?</h1>
      <p className="lead">Image recognition as a service powered by Rust, Tensorflow, and Node.js. <a href="https://www.secondstate.io/articles/artificial-intelligence/">How it works</a></p>

      <form id="infer" encType="multipart/form-data">
        <div>
         <label htmlFor="image_file">Please upload an image file </label>
          <input type="file" className="form-control-file" id="image_file" name="image_file" onChange={this.onFileChange}/>
        </div>

        <button onClick={this.onFileUpload}> 
                  Upload! 
        </button> 

      </form>

      <div className="jumbotron">
        <p id="result" className="lead">
          { ReactHtmlParser(this.state.analysis)}
          
        </p>
      </div>

    </div> 



    )
  }

}