import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// code reference: https://codesandbox.io/s/vbswn

const ImageSequence = forwardRef((props, ref) => {
  const { progress, images } = props;

  let index = Math.round(progress * 1 * (images.length - 1));
  let left = progress - 0.25 > 0 ? progress - 0.25 : 0;

  console.log(index);

  // console.log(left);

  // console.dir(element);
  if (document.getElementById('cat')) {
    document.getElementById('cat').style.left = `${left * 100}%`;
  }

  if (images[index][1] !== undefined) {
    if (images[index][1] === 'loading') {
      return <Skeleton width="100%" height="100%" />;
    } else {
      return images.map((item, i) => (
        <span
          ref={ref}
          key={i}
          style={{
            display: i !== index ? 'none' : 'block',
            height: '100%',
            width: '100%',
            backgroundImage: `url('${item[0] ? item[0].src : null}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            position: 'absolute',
            top: 0,
            left: 0,
          }}
        />
      ));
    }
  }
});

ImageSequence.propTypes = {
  innerRef: PropTypes.object,
  progress: PropTypes.number,
};

const Skeleton = styled.div``;

export default ImageSequence;
