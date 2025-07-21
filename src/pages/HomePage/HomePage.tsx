import { Layout, Menu, Card, Row, Col } from 'antd';
import {
  DashboardOutlined,
  NotificationOutlined,
  BarChartOutlined,
  UserOutlined,
  SettingOutlined,
  LogoutOutlined,
  PlusOutlined,
  DeleteOutlined,
  EditOutlined,
  ExclamationCircleOutlined,
  InfoCircleOutlined,
} from '@ant-design/icons';
import { useTranslation } from 'react-i18next';

const { Header, Sider, Content } = Layout;

export default function DashboardPage() {
  const { t } = useTranslation();

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider breakpoint="lg" collapsedWidth="0">
        <div
          className="logo"
          style={{ color: '#fff', padding: 16, fontWeight: 'bold' }}
        >
          🌿 GrowUp
        </div>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['dashboard']}>
          <Menu.Item key="dashboard" icon={<DashboardOutlined />}>
            Дашборд
          </Menu.Item>

          <Menu.ItemGroup key="devices" title="Устройства">
            <Menu.Item key="device-list" icon={<InfoCircleOutlined />}>
              Список устройств
            </Menu.Item>
            <Menu.Item key="device-add" icon={<PlusOutlined />}>
              Добавить устройство
            </Menu.Item>
            <Menu.Item key="device-manage" icon={<SettingOutlined />}>
              Управление
            </Menu.Item>
            <Menu.Item key="device-delete" icon={<DeleteOutlined />}>
              Удалить устройство
            </Menu.Item>
          </Menu.ItemGroup>

          <Menu.ItemGroup key="plants" title="Растения">
            <Menu.Item key="plants-overview" icon={<DashboardOutlined />}>
              Обзор растений
            </Menu.Item>
            <Menu.Item key="plant-create" icon={<PlusOutlined />}>
              Создать профиль
            </Menu.Item>
            <Menu.Item key="plant-edit" icon={<EditOutlined />}>
              Редактировать профиль
            </Menu.Item>
            <Menu.Item key="plant-delete" icon={<DeleteOutlined />}>
              Удалить профиль
            </Menu.Item>
            <Menu.Item key="plant-detail" icon={<InfoCircleOutlined />}>
              Инфо растения
            </Menu.Item>
          </Menu.ItemGroup>

          <Menu.ItemGroup key="user" title="Профиль">
            <Menu.Item key="profile-edit" icon={<UserOutlined />}>
              Редактировать
            </Menu.Item>
            <Menu.Item key="notifications" icon={<NotificationOutlined />}>
              Уведомления
            </Menu.Item>
            <Menu.Item key="reset-password" icon={<SettingOutlined />}>
              Сброс пароля
            </Menu.Item>
            <Menu.Item key="logout" icon={<LogoutOutlined />}>
              Выход
            </Menu.Item>
          </Menu.ItemGroup>
        </Menu>
      </Sider>

      <Layout>
        <Header style={{ background: '#FFFDF5', padding: 16 }}>
          <h1 style={{ margin: 0, color: '#97AD88' }}>Главная панель</h1>
        </Header>

        <Content style={{ margin: '24px 16px' }}>
          <Row gutter={[16, 16]}>
            <Col xs={24} md={12}>
              <Card
                title="Общий статус"
                bordered
                style={{ borderColor: '#97AD88' }}
              >
                {/* статус растений */}
              </Card>
            </Col>
            <Col xs={24} md={12}>
              <Card title="Критические оповещения" bordered>
                {/* список алертов */}
              </Card>
            </Col>
            <Col xs={24} md={12}>
              <Card title="Графики и статистика" bordered>
                {/* графики */}
              </Card>
            </Col>
            <Col xs={24} md={12}>
              <Card title="Последние действия" bordered>
                {/* действия пользователя */}
              </Card>
            </Col>
            <Col xs={24} md={12}>
              <Card title="Ошибки устройств" bordered>
                {/* список неисправных */}
              </Card>
            </Col>
            <Col xs={24} md={12}>
              <Card title="Уведомления" bordered>
                {/* уведомления */}
              </Card>
            </Col>
          </Row>
        </Content>
      </Layout>
    </Layout>
  );
}
