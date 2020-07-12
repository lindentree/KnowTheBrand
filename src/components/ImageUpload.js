import React from 'react';
import axios from 'axios';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';



export default class ImageUpload extends React.Component {

  constructor(props) {
    super(props);
    this.myRef = React.createRef();


    this.state = {
        selectedFile: null,
        analysis: '',
        url: ''
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
      const reader = new FileReader();
      const current = this.myRef.current;
      current.file = this.state.selectedFile;

       reader.onload = (e) => {
          current.src = e.target.result;
      }
      reader.readAsDataURL(this.state.selectedFile);

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

      <h1>Tell me about the brand I'm looking at</h1>
      <p className="lead">ML Recognition powered by Rust, Tensorflow, and Node.js.</p>

         <img 
          id="preview"
          ref={this.myRef}
          style={{
            width: "10%",
            height: "10%",
      
          }}
        /> 

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