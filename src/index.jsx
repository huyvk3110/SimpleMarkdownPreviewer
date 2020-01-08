import "./index.css";
import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
    constructor(props) {
        super(props);
        window['app'] = this;

        this.state = {
            preview: ''
        }

        this.onChange = this.onChange.bind(this);
    }

    marked(value) {
        this.setState({
            preview: window['marked'](value)
        })
    }

    onChange(event) {
        this.marked(event.target.value);
    }

    componentDidMount() {
        this.marked(document.getElementById('editor').value);
    }

    render() {
        const { preview } = this.state
        return (<div>
            <div className="card">
                <div className="card-body">
                    <div className="card-title">
                        <span><i className="fa fa-edit"></i> Editor</span>
                    </div>
                    <textarea className="card-text" name="" id="editor" cols="30" rows="10" onChange={this.onChange} defaultValue={"# Welcome to my React Markdown Previewer!\n\n## This is a sub-heading...\n### And here's some other cool stuff:\n  \nHeres some code, `<div></div>`, between 2 backticks.\n\n```\n// this is multi-line code:\n\nfunction anotherExample(firstLine, lastLine) {\n  if (firstLine == '```' && lastLine == '```') {\n    return multiLineCode;\n  }\n}\n```\n  \nYou can also make text **bold**... whoa!\nOr _italic_.\nOr... wait for it... **_both!_**\nAnd feel free to go crazy ~~crossing stuff out~~.\n\nThere's also [links](https://www.freecodecamp.com), and\n> Block Quotes!\n\nAnd if you want to get really crazy, even tables:\n\nWild Header | Crazy Header | Another Header?\n------------ | ------------- | ------------- \nYour content can | be here, and it | can be here....\nAnd here. | Okay. | I think we get it.\n\n- And of course there are lists.\n  - Some are bulleted.\n     - With different indentation levels.\n        - That look like this.\n\n\n1. And there are numbererd lists too.\n1. Use just 1s if you want! \n1. But the list goes on...\n- Even if you use dashes or asterisks.\n* And last but not least, let's not forget embedded images:\n\n![React Logo w/ Text](https://goo.gl/Umyytc)\n"}>
                    </textarea>
                </div>
            </div>
            <div className="card" id="preview">
                <div className="card-body">
                    <div className="card-title">
                        <span><i className="fa fa-sticky-note"></i> Previewer</span>
                    </div>
                    <div className="card-text" id="preview-content" dangerouslySetInnerHTML={{ __html: preview }}>
                    </div>
                </div>
            </div>
        </div>)
    }
}

ReactDOM.render(<App />, document.getElementById('root'));