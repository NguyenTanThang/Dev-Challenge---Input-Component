import React, { Component } from 'react';
import Input from "../components/Input";

class Home extends Component {
    render() {
        return (
            <main>
                <div className="container">
                    <h2>Inputs</h2>

                    <div className="row">

                        <div className="input-group">
                            <h5>{"<Input />"}</h5>
                            <Input/>
                        </div>

                        <div className="clear-row"></div>

                        <div className="input-group">
                            <h5>{"<Input error />"}</h5>
                            <Input error/>
                        </div>

                        <div className="clear-row"></div>

                        <div className="input-group">
                            <h5>{"<Input disabled />"}</h5>
                            <Input disabled/>
                        </div>

                        <div className="clear-row"></div>

                        <div className="input-group">
                            <h5>{"<Input helperText=”Some interesting text” />"}</h5>
                            <Input helperText="Some interesting text"/>
                        </div>

                        <div className="input-group">
                            <h5>{"<Input helperText=”Some interesting text” error />"}</h5>
                            <Input helperText="Some interesting text" error/>
                        </div>

                        <div className="clear-row"></div>

                        <div className="input-group">
                            <h5>{"<Input startIcon />"}</h5>
                            <Input startIcon="call"/>
                        </div>

                        <div className="input-group">
                            <h5>{"<Input endIcon />"}</h5>
                            <Input endIcon="lock"/>
                        </div>

                        <div className="clear-row"></div>

                        <div className="input-group">
                            <h5>{`<Input value="Text"/>`}</h5>
                            <Input value="Text"/>
                        </div>

                        <div className="clear-row"></div>

                        <div className="input-group">
                            <h5>{`<Input size="sm"/>`}</h5>
                            <Input size="sm"/>
                        </div>

                        <div className="input-group">
                            <h5>{`<Input size="md"/>`}</h5>
                            <Input size="md"/>
                        </div>

                        <div className="clear-row"></div>

                        <div className="input-group" style={{flex: "100%", maxWidth: "100%"}}>
                            <h5>{`<Input fullWidth />`}</h5>
                            <Input fullWidth value="Text"/>
                        </div>

                        <div className="clear-row"></div>

                        <div className="input-group">
                            <h5>{`<Input multiline row="4"/>`}</h5>
                            <Input multiline row="4"/>
                        </div>

                    </div>
                </div>
            </main>
        )
    }
}

export default Home;
