import React, { Component } from 'react';
import {filterInvalidProps, getSelectedSizeClass} from "../utils/utils";

class Input extends Component {
    state = {
        inputStyleClass: "",
    }

    componentDidMount() {
        const {disabled, size, error, fullWidth} = this.props;
        console.log(this.props)

        const inputStyleSize = getSelectedSizeClass(size);
        const inputStyleDisable = disabled ? "disabled" : "";
        const inputStyleError = error ? "error" : "";
        const widthStyleError = fullWidth ? "input-component--block" : "";

        const inputStyleClass = ["input-component", inputStyleSize, inputStyleDisable, inputStyleError, widthStyleError].join(" ");

        this.setState({
            inputStyleClass
        })
    }

    render() {
        const {helperText, startIcon, endIcon, multiline, value} = this.props;
        const validProps = filterInvalidProps(this.props);
        const {inputStyleClass} = this.state;

        const inputEl = multiline ? (
            <textarea placeholder="Placeholder"  {...validProps}>{value}</textarea>
        ) : (
            <input placeholder="Placeholder" {...validProps}/>
        )

        if (startIcon) {
            return (
                <>
                    <div className={inputStyleClass + " input-component--icon icon-start"}>
                        <div className="form-group">
                            {inputEl}
                            <label>Label</label>
                            <span className="material-icons">
                                {startIcon}
                            </span>
                        </div>
                        
                        {helperText ? <p className="input-component__helper-text">{helperText}</p> : <></>}
                    </div>
                </>
            )
        }

        if (endIcon) {
            return (
                <>
                    <div className={inputStyleClass + " input-component--icon icon-end"}>
                        <div className="form-group">
                            {inputEl}
                            <label>Label</label>
                            <span className="material-icons">
                                {endIcon}
                            </span>
                        </div>
                        
                        {helperText ? <p className="input-component__helper-text">{helperText}</p> : <></>}
                    </div>
                </>
            )
        }

        return (
            <>
                <div className={inputStyleClass}>
                    <div className="form-group">
                        {inputEl}
                        <label>Label</label>
                    </div>
                    
                    {helperText ? <p className="input-component__helper-text">{helperText}</p> : <></>}
                </div>
            </>
        )
    }
}

export default Input;
