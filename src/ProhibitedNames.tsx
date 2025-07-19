// author feldy kambey
// plan for thesis master degree
import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { IconSemiLogo, IconHome, IconMore, IconTickCircle, IconComment, IconClear, IconFile, IconArrowRight, IconEdit } from '@douyinfe/semi-icons';
import { Layout, Nav, Button, Breadcrumb, Avatar, Form, Col, Row, Image, ImagePreview, Banner, Table, Tag, Popconfirm } from '@douyinfe/semi-ui';

function ProhibitedNames() {
    const { Header, Footer, Sider, Content } = Layout;

    const navigate = useNavigate();

    useEffect(() => {
        const isLogin = localStorage.getItem("veribirthname_islogin") || "";
        if(isLogin==="TRUE"){

        }else{
            navigate("/signIn");
        }
    }, []);
    
    //popconfirm
    const onConfirm = () => {
        localStorage.removeItem("veribirthname_islogin");
        navigate("/signIn");
    };
    const onCancel = () => {
        
    };

    const columns = [
        {
            title: 'No',
            dataIndex: 'key'
        },
        {
            title: 'Name',
            dataIndex: 'name'
        },
        {
            title: 'Reason',
            dataIndex: 'reason'
        }
    ];
    const data = [
        {
            key: '1',
            name: 'garuda',
            reason: 'Uncommon and difficult-to-pronounce name'
        },
        {
            key: '2',
            name: 'jawa',
            reason: 'Uncommon and difficult-to-pronounce name'
        },
        {
            key: '3',
            name: 'nusantara',
            reason: 'Uncommon and difficult-to-pronounce name'
        },
        {
            key: '4',
            name: 'nabi',
            reason: 'Uncommon and difficult-to-pronounce name'
        },
        {
            key: '5',
            name: 'tuhan',
            reason: 'Uncommon and difficult-to-pronounce name'
        },
        {
            key: '6',
            name: 'profesor',
            reason: 'Uncommon and difficult-to-pronounce name'
        },
        {
            key: '7',
            name: 'doktor',
            reason: 'Uncommon and difficult-to-pronounce name'
        },
        {
            key: '8',
            name: 'virus',
            reason: 'Uncommon and difficult-to-pronounce name'
        },
        {
            key: '9',
            name: 'corona',
            reason: 'Uncommon and difficult-to-pronounce name'
        },
        {
            key: '10',
            name: 'hacker',
            reason: 'Uncommon and difficult-to-pronounce name'
        },
        {
            key: '11',
            name: 'teror',
            reason: 'Uncommon and difficult-to-pronounce name'
        },
        {
            key: '12',
            name: 'dosa',
            reason: 'Uncommon and difficult-to-pronounce name'
        },
        {
            key: '13',
            name: 'santet',
            reason: 'Uncommon and difficult-to-pronounce name'
        }

    ];
    
    return (
        <Layout style={{ border: '1px solid var(--semi-color-border)' }}>
            <Header style={{ backgroundColor: 'var(--semi-color-bg-1)' }}>
                <div>
                    <Nav mode="horizontal" defaultSelectedKeys={['Home']}>
                        <Nav.Header>
                            {/* <IconSemiLogo style={{ height: '36px', fontSize: 36 }} /> */}
                            <img src="http://localhost:5173/VeriBirthNameLogo.png" alt="verilogo" height="36px"/>
                        </Nav.Header>
                        <span
                            style={{
                                color: 'var(--semi-color-text-2)',
                            }}
                        >
                            <span
                                style={{
                                    marginRight: '24px',
                                    color: 'var(--semi-color-text-0)',
                                    fontWeight: '600',
                                }}
                            >
                                VeriBirthName | Dashboard
                            </span>
                            
                        </span>
                        <Nav.Footer>
                            <Popconfirm
                                title="Confirmation"
                                content="Do you want to Sign Out?"
                                onConfirm={onConfirm}
                                onCancel={onCancel}
                                okText='Yes'
                                cancelText='No'
                            >
                                <span style={{marginRight:'10px', fontSize:'14px',cursor:'pointer'}}>
                                    Feldy Judah Kambey | Administrator
                                </span>
                                <Avatar color="blue" size="small">
                                    FK
                                </Avatar>
                            </Popconfirm>
                        </Nav.Footer>
                    </Nav>
                </div>
            </Header>
            <Layout>
                <Sider style={{ backgroundColor: 'var(--semi-color-bg-1)' }}>
                    <Nav
                        style={{ maxWidth: 220, height: '100%' }}
                        defaultSelectedKeys={['ProhibitedNames']}
                        items={[
                            { itemKey: 'Home', text: 'Home', icon: <IconHome size="large" />, onClick: () => navigate('/home')},
                            { itemKey: 'ProhibitedNames', text: 'Prohibited Names', icon: <IconClear size="large" />, onClick: () => navigate('/prohibitedNames') },
                            { itemKey: 'BCRegistration', text: 'BC Registration', icon: <IconEdit size="large" />, onClick: () => navigate('/bcRegistration') },
                            { itemKey: 'BCList', text: 'BC List', icon: <IconFile size="large" />, onClick: () => navigate('/bcList') },
                        ]}
                        footer={{
                            collapseButton: false,
                        }}
                    />
                </Sider>
                <Content
                    style={{
                        padding: '24px',
                        backgroundColor: 'var(--semi-color-bg-0)',
                    }}
                >
                    <Breadcrumb
                        style={{
                            marginBottom: '24px',
                        }}
                        routes={['VeriBirthName', 'Prohibited Names']}
                    />
                    <div
                        style={{
                            borderRadius: '10px',
                            border: '1px solid var(--semi-color-border)',
                            minHeight: '70vh',
                            padding: '32px',
                        }}
                    >
                        
                        {/* content start */}
                        <div><b>List of Prohibited Names</b></div><br/>
                        <Table columns={columns} dataSource={data} pagination={false} />
                        {/* content end */}

                    </div>
                </Content>
            </Layout>
            <Footer
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    padding: '20px',
                    color: 'var(--semi-color-text-2)',
                    backgroundColor: 'rgba(var(--semi-grey-0), 1)',
                }}
            >
                <span
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                    }}
                >
                    <span>Copyright © 2025 University </span>
                </span>
                <span>
                    <span style={{ marginRight: '24px' }}>Public Management Thesis</span>
                    <span>VeriBirthName</span>
                </span>
            </Footer>
        </Layout>
    );
};

export default ProhibitedNames;