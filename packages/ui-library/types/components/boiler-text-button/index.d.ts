import { LitElement } from 'lit';
import { IconType } from '@boiler/icons'; 

export declare class BlrTextButton extends LitElement {
    static styles: import("lit").CSSResult;
    label: string;
    onClick: HTMLButtonElement['onclick'];
    icon?: IconType;
    render(): import("lit-html").TemplateResult<1>;
}
