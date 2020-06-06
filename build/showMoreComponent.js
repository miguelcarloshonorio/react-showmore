import * as React from 'react';
export default function ShowMore(props) {
    var linkStyles = {
        color: '#0288d1',
        textDecoration: 'underline',
        'a:visited': '#0288d1',
    };
    var content = props.content, minLenth = props.minLenth;
    var _a = React.useState(content.substring(0, minLenth)), displayText = _a[0], setDisplayText = _a[1];
    var _b = React.useState(props.moreText || 'More'), moreText = _b[0], setMoreText = _b[1];
    var handleClick = function () {
        var lessText = props.lessText, moreText = props.moreText;
        if (content !== displayText) {
            setDisplayText(content);
            setMoreText(lessText);
        }
        else {
            setDisplayText(content.substring(0, minLenth));
            setMoreText(moreText);
        }
    };
    return (React.createElement(React.Fragment, null,
        React.createElement("div", null,
            displayText,
            React.createElement("a", { href: "#", onClick: handleClick, style: linkStyles }, moreText))));
}
//# sourceMappingURL=showMoreComponent.js.map