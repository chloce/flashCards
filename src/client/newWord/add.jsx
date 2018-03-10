import React, { Component } from "react";
import Axios from "axios";

export default class Add extends Component {
    constructor() {
        super();
        this.state = {
            word: "",
            meaning: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChangeWord = this.onChangeWord.bind(this);
        this.onChangeMeaning = this.onChangeMeaning.bind(this);
    }
    handleSubmit(e) {
        console.log("handleSubmit");

        Axios.post("/addword", {
            word: this.state.word,
            meaning: this.state.meaning,
            createdDate: new Date(),
            done: false
        })
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            });
    }
    onChangeWord(e) {
        this.setState({ word: e.target.value });
    }
    onChangeMeaning(e) {
        this.setState({ meaning: e.target.value });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        <input
                            type="text"
                            placeholder="Word"
                            onChange={this.onChangeWord}
                            id="word"
                            value={this.state.word}
                        />
                        <textarea
                            placeholder="Meaning"
                            onChange={this.onChangeMeaning}
                            id="meaning"
                            value={this.state.meaning}
                            colos="2"
                            rows="2"
                        />
                    </label>
                    <input type="submit" value="add" />
                </form>
            </div>
        );
    }
}
