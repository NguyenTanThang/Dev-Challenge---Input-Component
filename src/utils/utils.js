export const filterInvalidProps = (props) => {
    const disallowed = ['size', 'helperText', "startIcon", "endIcon", "error", "fullWidth", "multiline"];

    const filtered = Object.keys(props)
    .filter(key => !disallowed.includes(key))
    .reduce((obj, key) => {
        obj[key] = props[key];
        return obj;
    }, {});

    return filtered;
}

export const getSelectedSizeClass = (size) => {
    switch (size) {
        case "sm":
            return "input-component--sm"
            break;
        case "md":
            return "input-component--md"
            break;
        default:
            return "input-component--md"
            break;
    }
}

export const changeLabelColorOnFocus = () => {

}