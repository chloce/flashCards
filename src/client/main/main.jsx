import React, { Component } from "react";
import Axios from "axios";

export default class Main extends Component {
    constructor() {
        super();
        this.state = {
            words: []
        };
    }
    componentWillMount() {
        Axios.get("getwords").then(res => {
            this.setState({ words: res.data.words });
        });
    }
    render() {
        const word = this.state.words.map(word => {
            const meanings = word.meaning.split("\n");
            const maltiMeaning = meanings.map(meaning => {
                return <span className="word-box">{meaning}</span>;
            });
            return (
                <div key="word._id">
                    <span className="word-box">{word.word}</span>
                    <span> {maltiMeaning}</span>
                </div>
            );
        });
        return <div>{word}</div>;
    }
}
