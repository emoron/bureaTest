import React from 'react';
import CodeMirror from 'react-codemirror';
import Markdown  from 'react-markdown/with-html';
import CodeBlock from '../src/code-block';
import Editor from '../src/editor'

require('codemirror/mode/markdown/markdown');

const initialSource = `
# Live demo

Changes are automatically rendered as you type.

* Implements [GitHub Flavored Markdown](https://github.github.com/gfm/)
* Renders actual, "native" React DOM elements
* Allows you to escape or skip HTML (try toggling the checkboxes above)
* If you escape or skip the HTML, no \`dangerouslySetInnerHTML\` is used! Yay!

## HTML block below

<blockquote>
  This blockquote will change based on the HTML settings above.
</blockquote>

## How about some code?

\`\`\`js
var React = require('react');
var Markdown = require('react-markdown');

React.render(
  <Markdown source="# Your markdown here" />,
  document.getElementById('content')
);
\`\`\`

Pretty neat, eh?

## Tables?

| Feature   | Support |
| --------- | ------- |
| tables    | ✔ |
| alignment | ✔ |
| wewt      | ✔ |

## More info?

Read usage information and more on [GitHub](//github.com/rexxars/react-markdown)

---------------
`


class AppMirror extends React.Component{

	constructor(props){
		super(props)
		this.handleControlsChange = this.handleControlsChange.bind(this)
		this.handleMarkdownChange = this.handleMarkdownChange.bind(this)

		this.state={
			markdownSrc: initialSource,
			mode: 'markdown',
		}
	}

	handleMarkdownChange(evt) {
		this.setState({markdownSrc: evt.target.value})
	}

	handleControlsChange(mode) {
		this.setState({htmlMode: mode})
	}

	render(){
		var options = {
		//	lineNumbers: true,
		//	readOnly: this.state.readOnly,
			mode: this.state.mode
		};
		return (
			<div className="demo">
        <div className="editor-pane">
					<form className="editor pure-form">
	      		<CodeMirror ref="editor" value={this.state.markdownSrc} mode="markdown" onChange={this.handleMarkdownChange} options={options} theme="monokai" autoFocus={true}/>
					</form>
				</div>

				<div className="result-pane">
					<Markdown
						className="result"
						source={initialSource}
						//skipHtml={this.state.htmlMode === 'skip'}
						escapeHtml={false}
						//renderers={{code: CodeBlock}}
					/>
        </div>

			</div>
    )
	}
};

export default AppMirror;
