import * as React from 'react';
import { allVtubers } from '../components/allVtubers';
import CardList from './CardList';
import SearchBox from '../components/SearchBox';
import Sidebar from '../components/Sidebar';
import Darkmode from '../components/Darkmode';
import ErrorBoundary from '../components/ErrorBoundary'
import './App.css';
import { Helmet } from 'react-helmet';


export interface IVtuber {
  id: number,
  name: string,
  img: string,
  gen: string,
  youtube: string,
  twitter: string
}

interface IAppProps {
}

interface IAppState {
  Vtubers: IVtuber[],
  searchField: string,
  background: string
}


class App extends React.Component<IAppProps, IAppState> {

    constructor(props: IAppProps) {
        super(props);
        this.state = {
            Vtubers: allVtubers,
            searchField: '',
            background: 'body { background-color: black; }',
        };
    };

    onSearchChange = (event:React.SyntheticEvent<HTMLInputElement>): void => {
        this.setState({ searchField: event.currentTarget.value })
      }
    
    enableDarkMode = (): void => {
        this.state.background.includes('white') ?
            this.setState( {background: 'body { background-color: black; }'} ) :
            this.setState( {background: 'body { background-color: white; }'} )
        }
    

    render() {

        const { Vtubers, searchField, background } = this.state

        const filteredVtubers = Vtubers.filter(Vtubers => {
            return Vtubers.name.toLowerCase().includes(searchField.toLowerCase())
                });

        if (!Vtubers) {
            return <h1>loading...</h1>
        } else {
        return (
        <React.StrictMode>    
            <div className='tc'>
                <Helmet>
                    <style>{background}</style>
                </Helmet>
                <title>Hologate</title>
                <div className='head'>
                    <Darkmode enableDarkMode={this.enableDarkMode}/>
                    <h1 className='f1'>Hologate</h1>
                    <SearchBox searchChange={this.onSearchChange} />
                </div>

                    <Sidebar/>   
                {/* <Scroll> */}
                    <ErrorBoundary>
                    <CardList Vtubers={ filteredVtubers }/>
                    </ErrorBoundary>
                {/* </Scroll> */}
            </div>
        </React.StrictMode>
        );
    }
}
};

export default App;

// class를 쓴다면 아래처럼
// export default connect(mapStateToProps, mapDispatchToProps)(App);