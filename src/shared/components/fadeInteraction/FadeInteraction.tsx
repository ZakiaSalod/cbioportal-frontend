import * as React from "react";
import {observer} from "mobx-react";
import {computed, observable} from "mobx";

export interface IFadeInteractionProps {
    fadeInSeconds?: number;
    fadeOutSeconds?: number;
}

@observer
export default class FadeInteraction extends React.Component<IFadeInteractionProps, {}> {

    static defaultProps = {
        fadeInSeconds: 0.2,
        fadeOutSeconds: 0.6
    };

    constructor() {
        super();

        this.onFocus = this.onFocus.bind(this);
        this.onBlur = this.onBlur.bind(this);
        this.onMouseEnter = this.onMouseEnter.bind(this);
        this.onMouseLeave = this.onMouseLeave.bind(this);
    }

    @observable focused = false;
    @observable mouseInside = false;

    @computed get fadeInStyle() {
        return {
            WebkitTransition: `opacity ${this.props.fadeInSeconds}s`,
            MozTransition: `opacity ${this.props.fadeInSeconds}s`,
            OTransition: `opacity ${this.props.fadeInSeconds}s`,
            transition: `opacity ${this.props.fadeInSeconds}s`,
            opacity: 1,
        };
    }

    @computed get fadeOutStyle() {
        return {
            WebkitTransition: `opacity ${this.props.fadeOutSeconds}s`,
            MozTransition: `opacity ${this.props.fadeOutSeconds}s`,
            OTransition: `opacity ${this.props.fadeOutSeconds}s`,
            transition: `opacity ${this.props.fadeOutSeconds}s`,
            opacity: 0,
        }
    }

    @computed get style() {
        if (this.show) {
            return this.fadeInStyle;
        } else {
            return this.fadeOutStyle;
        }
    }

    @computed get show() {
        return this.focused || this.mouseInside;
    }

    private onFocus() {
        this.focused = true;
    }

    private onBlur() {
        this.focused = false;
    }

    private onMouseEnter() {
        this.mouseInside = true;
    }

    private onMouseLeave() {
        this.mouseInside = false;
    }

    render() {
        return (
            <div
                style={this.style}
                onFocus={this.onFocus}
                onBlur={this.onBlur}
                onMouseEnter={this.onMouseEnter}
                onMouseLeave={this.onMouseLeave}
            >
                {this.props.children}
            </div>
        );
    }
}