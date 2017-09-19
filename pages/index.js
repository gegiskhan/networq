import store from '../redux/store'

import Result from '../components/Result'
import Css from '../components/Css';
import Js from '../components/JS';
import Html from '../components/Html'; 

class Index extends React.Component{
    constructor(){
        super();
        this.state = {
            type: 'result'
        }
    }
    _changeTitle(type){
        this.setState({type});
    }

    _renderElement(){
        switch (this.state.type){
            case 'result': return (<Result/>);
                            break;
            case 'html': return (<Html initialContent={"<p>HTML Rendered</p>"} />);
                        break;
            case 'css': return (<Css initialContent={"p{color:green;}"}/>);
                        break;
            default: return (<Js initialContent={"console.log('JavaScript rendered!')"}/>)
                        break;

        }
    }

    render(){
        return (
            <div>                
                <button onClick={()=>this._changeTitle('result')}>Result</button>
                <button onClick={()=>this._changeTitle('html')}>HTML</button>
                <button onClick={()=>this._changeTitle('css')}>CSS</button>
                <button onClick={()=>this._changeTitle('js')}>JavaScript</button>
                {this._renderElement()}
            </div>
        )
    }

}

export default Index