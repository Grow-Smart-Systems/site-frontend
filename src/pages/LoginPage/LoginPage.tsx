import { AuthForm } from '@src/features/auth/ui/AuthForm';
import { Typography } from 'antd';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

const { Title } = Typography;

export default function LoginPage() {
  const navigate = useNavigate();

  const { t } = useTranslation();

  // const onFinish = async (values: any) => {
  //   setLoading(true);
  //   await handleLogin(values, () => navigate('/home')); // переход на /home после логина
  //   setLoading(false);
  // };

  return (
    <div
      style={{
        maxWidth: 400,
        margin: '100px auto',
        padding: 24,
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        borderRadius: 8,
        background: '#fff',
      }}
    >
      <Title level={3} style={{ textAlign: 'center' }}>
        {t('auth.login')}
      </Title>
      <AuthForm />
    </div>
  );
}
