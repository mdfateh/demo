declare type DisabledViewProps = {
    disabled: boolean;
    children: any;
    opacity?: number;
};
declare function DisabledView({ disabled, children, opacity }: DisabledViewProps): JSX.Element;
export default DisabledView;
