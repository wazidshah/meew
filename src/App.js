import React, {Component} from 'react';
import './App.css';
import getCats from './helpers/Api';
import "./styles/style.scss"
import ReactHowler from 'react-howler'
import soundFile from './static/sound.mp3'

class App extends Component {
  
  constructor(props)
  {
    super(props);

    this.state = {
      catImage : null,
      isLoading: true,
      playing:false
    }
    this.sayMeow = this.sayMeow.bind(this);
    this.handleImageLoad = this.handleImageLoad.bind(this);
    // this.meow = this.refs.meow;
    
  }

  componentDidMount(){
    this.sayMeow();
  }

  handleImageLoad(){
    this.setState({...this.state.catImage, isLoading:false});
  }

  sayMeow(){
    this.setState({...this.state.catImage, isLoading:true,playing:false});
    getCats().then(res=>this.setState({catImage: res.file, isLoading: true,playing:true}));
  }

  render(){

    return(
      <section className="section">
        <div className="placeholder">
          <img src={this.state.catImage != null ? this.state.catImage : ""} 
            onLoad = {this.handleImageLoad}
          />
        </div>
        <button className="button" onClick={this.sayMeow}>
          {this.state.isLoading ? "Wait Loading..." : "Say Meow!"}
        </button>
        {/* <audio autoPlay={false} ref="meow">
          <source src="./static/sound.mp3" type="audio/mpeg"/>
        </audio> */}
        <ReactHowler
          src={soundFile}
          playing={this.state.playing}
          html5 = {true}
        />
      </section>
    )
  }
  
}

export default App;
