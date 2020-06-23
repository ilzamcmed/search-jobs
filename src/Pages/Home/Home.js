import React, { Component } from 'react';
import GeneralTemplate from '../../Templates/GeneralTemplate/GeneralTemplate';
import HomeContent from '../../Components/Organisms/HomeContent/HomeContent';


import './Home.css'

class Home extends Component {
    constructor() {
        super()
        this.state = {
            inputValue: "",
            data: []
        }
    };

    //serve para fazer alterações após o componente for montado  // componente já foi montado
    componentDidMount = async () => {
        const getData = await this.props.data;
        this.setState({ data: getData })
        console.log(this.state.data)
    };

    onClick = async () => {
        const { inputValue, data } = this.state;
        if (inputValue && data.length) {
            const result = await data.filter(item => item.position.toLowerCase().includes(inputValue.toLowerCase()));
            console.log({ result });
            this.setState({ inputValue: '' })
        } else { console.log('sem input') }
    };

    onChange = (e) => {
        const value = e.target.value;
        this.setState({ inputValue: value })
    };


    render() {
        const {inputValue, data} = this.state;

        
        return (
            <GeneralTemplate>
                <HomeContent
                    onChange={this.onChange}
                    type="text"
                    placeholder="O que você procura?"
                    value={inputValue}
                    data={data}
                    texto="Buscar"
                    onClick={this.onClick}
                />
            </GeneralTemplate>
        )
    };

};

export default Home;