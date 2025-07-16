/**
 * Loading Spinner Component
 * Reusable loading indicator with customizable options
 */

import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

const LoadingSpinner = ({ 
  size = 'large', 
  tip = 'Loading...', 
  spinning = true,
  children,
  className = ''
}) => {
  const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

  if (children) {
    return (
      <Spin 
        spinning={spinning} 
        tip={tip} 
        indicator={antIcon}
        className={className}
      >
        {children}
      </Spin>
    );
  }

  return (
    <div className={`flex items-center justify-center p-8 ${className}`}>
      <Spin 
        size={size} 
        tip={tip} 
        indicator={antIcon}
      />
    </div>
  );
};

export default LoadingSpinner;