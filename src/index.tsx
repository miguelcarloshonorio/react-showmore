import React, {useState} from 'react';
import {Link} from 'react-router-native';

export interface IProps {
  minLenth: number;
  content: string;
  moreText: string;
  lessText: string;
}

export default function ShowMore(props: IProps): React.Element {
  const linkStyles = {
    color: '#0288d1',
    textDecoration: 'underline',
    'a:visited': '#0288d1',
  };
  const {content, minLenth} = props;
  const [displayText, setDisplayText] = useState(
    content.substring(0, minLenth)
  );
  const [moreText, setMoreText] = useState(props.moreText || 'More');

  const handleClick = () => {
    const {lessText, moreText} = props;
    if (content !== displayText) {
      setDisplayText(content);
      setMoreText(lessText);
    } else {
      setDisplayText(content.substring(0, minLenth));
      setMoreText(moreText);
    }
  };

  return (
    <>
      <div>
        {displayText}
        <Link href="#" onClick={handleClick} style={linkStyles}>
          {moreText}
        </Link>
      </div>
    </>
  );
}
