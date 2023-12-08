import "./index.css";
import React, { useState } from "react";
import {
  DesktopOutlined,
  PlusOutlined,
  TeamOutlined,
  CheckOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Layout, Menu, theme } from "antd";
import { Outlet, Link } from "react-router-dom";
import { TeamProvider } from "./context/Team";

const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  url?: string,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label: url ? <Link to={url}>{label}</Link> : label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem("Get Pokemon", "1", <PlusOutlined />, "/get-pokemon"),
  getItem("Pokedex", "2", <DesktopOutlined />, "/pokedex"),
  getItem("Quiz", "sub1", <CheckOutlined />, "/quiz"),
  getItem("Team", "4", <TeamOutlined />, "/team"),
];

const App: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <TeamProvider>
      <Layout style={{ minHeight: "100vh" }}>
        <Sider
          collapsible
          collapsed={collapsed}
          onCollapse={(value) => setCollapsed(value)}
        >
          <div className="demo-logo-vertical">
            <h1>PokeWorld</h1>
          </div>
          <Menu
            theme="dark"
            defaultSelectedKeys={["1"]}
            mode="inline"
            items={items}
          />
        </Sider>
        <Layout>
          <Header
            style={{ margin: 0, background: colorBgContainer, width: "100%" }}
          />
          <Content style={{ margin: "0 16px" }}>
            <Outlet />
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Ant Design ©2023 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    </TeamProvider>
  );
};

export default App;
