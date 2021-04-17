import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

const OnUpdate = props => {
  const { call, immediate } = props;

  const history = useHistory();

  useEffect(() => {
    if (call && immediate) {
      call(history.location);
    }
    const unlisten = history.listen(() => {
      if (call) {
        call(history.location);
      }
    });
    return () => unlisten();
  }, [call, history, immediate]);

  return <></>;
};

OnUpdate.propTypes = {
  call: PropTypes.func,
  immediate: PropTypes.bool
};

export default OnUpdate;
