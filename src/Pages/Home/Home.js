import React, { Component } from 'react';
import GeneralTemplate from '../../Templates/GeneralTemplate/GeneralTemplate';
import HomeContent from '../../Components/Organisms/HomeContent/HomeContent';


import './Home.css'

class Home extends Component {
    constructor() {
        super()
        this.state = {
            inputValue: "",
            data: [],
            filters: ['Todos', 'Front', 'Back', 'Design', 'Junior', 'Pleno', 'Senior', 'Remoto']
        }
    };

    //serve para fazer alterações após o componente for montado  // componente já foi montado
    componentDidMount = async () => {
        const getData = await this.props.data;
        this.setState({ data: getData })
    };

    onClick = async () => {
        const { inputValue } = this.state;
        const { data } = this.props;

        if (inputValue && data.length) {
            const result = await data.filter(item => item.position.toLowerCase().includes(inputValue.toLowerCase()));
            this.setState({ inputValue: '', data: result })
        }
        else { console.log('sem input') }
    };

    onChange = (e) => {
        const value = e.target.value;
        this.setState({ inputValue: value })
    };

    handleFilters = (e) => {
        const { data } = this.props;
        const value = e.target.id.toLowerCase();

        const result = data.filter( item => {
            switch(value) {
                case 'todos':
                    return item;
                case 'remoto':
                    return item.location.toLowerCase().includes(value);
                default:
                    return item.position.toLowerCase().includes(value);
                
            }
        })
       
        this.setState({data:result})
    };


    render() {
        const { inputValue, data, filters } = this.state;


        return (
            <GeneralTemplate>
                <HomeContent
                    mainTitle='Tech Jobs'
                    onChange={this.onChange}
                    type="text"
                    placeholder="O que você procura?"
                    value={inputValue}
                    data={data}
                    texto="Buscar"
                    filters={filters}
                    handleFilters={this.handleFilters}
                    onClick={this.onClick}
                />
            </GeneralTemplate>
        )
    };

};

export default Home;