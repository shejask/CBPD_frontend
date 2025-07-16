/**
 * Integration Status Component
 * Shows the current status of API integration and system health
 */

import { useState, useEffect } from 'react';
import { Card, Badge, Typography, Button, Space } from 'antd';
import { CheckCircleOutlined, ExclamationCircleOutlined, SyncOutlined } from '@ant-design/icons';
import { testApiConnectivity } from '../../lib/utils/apiHealth';

const { Title, Text } = Typography;

const IntegrationStatus = () => {
  const [apiStatus, setApiStatus] = useState('checking');
  const [lastChecked, setLastChecked] = useState(null);

  const checkApiStatus = async () => {
    setApiStatus('checking');
    try {
      const isConnected = await testApiConnectivity();
      setApiStatus(isConnected ? 'connected' : 'disconnected');
      setLastChecked(new Date().toLocaleTimeString());
    } catch (error) {
      setApiStatus('error');
      setLastChecked(new Date().toLocaleTimeString());
    }
  };

  useEffect(() => {
    checkApiStatus();
  }, []);

  const getStatusConfig = () => {
    switch (apiStatus) {
      case 'connected':
        return {
          status: 'success',
          icon: <CheckCircleOutlined />,
          text: 'API Connected',
          color: 'green'
        };
      case 'disconnected':
        return {
          status: 'error',
          icon: <ExclamationCircleOutlined />,
          text: 'API Disconnected',
          color: 'red'
        };
      case 'checking':
        return {
          status: 'processing',
          icon: <SyncOutlined spin />,
          text: 'Checking Connection',
          color: 'blue'
        };
      default:
        return {
          status: 'error',
          icon: <ExclamationCircleOutlined />,
          text: 'Connection Error',
          color: 'red'
        };
    }
  };

  const statusConfig = getStatusConfig();

  return (
    <Card 
      size="small" 
      style={{ 
        position: 'fixed', 
        bottom: 20, 
        right: 20, 
        zIndex: 1000,
        minWidth: 250
      }}
    >
      <Space direction="vertical" size="small">
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <Badge 
            status={statusConfig.status} 
            icon={statusConfig.icon}
          />
          <Text strong>{statusConfig.text}</Text>
        </div>
        
        {lastChecked && (
          <Text type="secondary" style={{ fontSize: '12px' }}>
            Last checked: {lastChecked}
          </Text>
        )}
        
        <Button 
          size="small" 
          onClick={checkApiStatus}
          loading={apiStatus === 'checking'}
        >
          Refresh Status
        </Button>
        
        <div style={{ fontSize: '11px', color: '#666' }}>
          <div>API: {process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3001'}</div>
          <div>Endpoint: /api/institution/registration</div>
        </div>
      </Space>
    </Card>
  );
};

export default IntegrationStatus;