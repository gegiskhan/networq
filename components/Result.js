import store from '../redux/store'

class Result extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            html: '',
            js: '',
            css: ''
        }
    }

    static unsubscribe = store.subscribe(() => console.log(store.getState()))

    componentDidMount() {
        let stored = store.getState();
        document
            .getElementById('renderSc')
            .innerHTML = `<style>${store.getState().css}</style>
                      ${store.getState().html}<h3 style="color:aqua;"></h3>`;
        eval(store.getState().js)
    }

    render() {
        return (
            <div
                id="renderSc"
                style={{
                height: '90vh',
                width: '50vw',
                border: 'solid 1px black'
            }}></div>
        );
    }
}

export default Result