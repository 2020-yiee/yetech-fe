import React from 'react';
import classNames from 'classnames';

import { InfoCircleOutlined } from '@ant-design/icons';
import { Popover } from 'antd';

import { TYPE_URL } from '../../../common/type-url';

const getContent = ({ typeUrl, url }) => {
  const typeUrlKey = Object.keys(TYPE_URL).find(
    key => TYPE_URL[key].key == typeUrl,
  );
  const typeUrlDisplay = typeUrlKey ? TYPE_URL[typeUrlKey].display : typeUrl;

  return (
    <span className="normal-case">
      URL {typeUrlDisplay.toLowerCase()}&nbsp;
      <span className="underline">{url}</span>
    </span>
  );
};

export const StepNames = ({ data }) => (
  <div
    className="flex flex-row absolute w-full top-0"
    style={{
      paddingLeft: 75,
      paddingRight: 14,
    }}
  >
    {console.log(data)}
    {data.map(({ stepName, url, typeUrl }, index) => (
      <div
        key={`${url}-${index}`}
        className={classNames(
          'flex-1',
          'text-gray-600',
          'text-left',
          'border-b',
          'py-4',
          'px-1',
          'truncate',
          'text-base',
          'font-bold',
          'flex',
          'items-left',
          'justify-left',
        )}
        style={{
          marginLeft: index != 0 ? -1 : undefined,
          borderColor: '#ddd',
        }}
      >
        <div align="left">
        <small>Step {index}</small><br></br>
        {stepName}
        <Popover
          trigger="hover"
          content={getContent({ typeUrl, url })}
          className="text-sm"
        >
          <InfoCircleOutlined className="ml-1" />
        </Popover>
        </div>
      </div>
    ))}
  </div>
);
