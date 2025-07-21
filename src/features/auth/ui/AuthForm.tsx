import { useState } from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { handleLogin } from '@src/features/auth/model/login';
import Logo from '@src/shared/assets/logo.svg';
import styles from './styles.module.scss';

export function AuthForm() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { t } = useTranslation();

  const onFinish = async (values: any) => {
    setLoading(true);
    await handleLogin(values, () => navigate('/dashboard'));
    setLoading(false);
  };

  return (
    <div className={styles.auth_form_wrapper}>
      <img src={Logo} alt="Logo" className={styles.auth_logo} />
      <Form layout="vertical" onFinish={onFinish} className={styles.auth_form}>
        <Form.Item
          label={t('auth.identifier')}
          name="identifier"
          rules={[{ required: true, message: t('auth.identifier_required') }]}
        >
          <Input autoComplete="username" />
        </Form.Item>

        <Form.Item
          label={t('auth.password')}
          name="password"
          rules={[{ required: true, message: t('auth.password_required') }]}
        >
          <Input.Password autoComplete="current-password" />
        </Form.Item>

        <Form.Item name="remember" valuePropName="checked">
          <Checkbox>{t('auth.remember')}</Checkbox>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" loading={loading} block>
            {t('auth.login')}
          </Button>
        </Form.Item>

        <Form.Item>
          <Button
            className={styles.telegram_button}
            icon={<img src="/icons/telegram.svg" alt="Telegram" width={20} />}
            onClick={() => (window.location.href = '/api/auth/telegram')}
          >
            {t('auth.login_telegram')}
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
