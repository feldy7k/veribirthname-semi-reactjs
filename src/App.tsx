import React, {useState} from 'react';
import { Layout, Nav, Button, Breadcrumb, Skeleton, Avatar, Modal, Form, Col, Row, Space } from '@douyinfe/semi-ui';
import { IconSemiLogo, IconBell, IconHelpCircle, IconBytedanceLogo, IconHome, IconLive, IconSetting } from '@douyinfe/semi-icons';

function App() {
    const { Header, Footer, Content } = Layout;

    const initValues = {
        name: 'semi',
        business: ['ulikeCam'],
        role: 'ued',
        switch: true,
        files: [
            {
                uid: '1',
                name: 'vigo.png',
                status: 'success',
                size: '130KB',
                preview: true,
                url: 'https://lf3-static.bytednsdoc.com/obj/eden-cn/ptlz_zlp/ljhwZthlaukjlkulzlp/root-web-sites/vigo.png'
            },
            {
                uid: '2',
                name: 'resso.jpeg',
                status: 'validateFail',
                size: '222KB',
                percent: 50,
                preview: true,
                fileInstance: new File([new ArrayBuffer(2048)], 'resso.jpeg', { type: 'image/jpeg' }),
                url: 'https://lf3-static.bytednsdoc.com/obj/eden-cn/ptlz_zlp/ljhwZthlaukjlkulzlp/root-web-sites/Resso.png'
            },
            {
                uid: '3',
                name: 'douyin.jpeg',
                status: 'uploading',
                size: '222KB',
                percent: 50,
                preview: true,
                fileInstance: new File([new ArrayBuffer(2048)], 'dy.jpeg', { type: 'image/jpeg' }),
                url: 'https://lf3-static.bytednsdoc.com/obj/eden-cn/ptlz_zlp/ljhwZthlaukjlkulzlp/root-web-sites/dy.png'
            }
        ]
    };
    const { Section, Input, InputNumber, AutoComplete, Select, TreeSelect, Cascader, DatePicker, TimePicker, TextArea, CheckboxGroup, Checkbox, RadioGroup, Radio, Slider, Rating, Switch, TagInput } = Form;
    const style = { width: '90%' };

    const [visible, setVisible] = useState(false);
    const showDialog = () => {
        setVisible(true);
    };
    const handleOk = () => {
        setVisible(false);
        console.log('Ok button clicked');
    };
    const handleCancel = () => {
        setVisible(false);
        console.log('Cancel button clicked');
    };
    const handleAfterClose = () => {
        console.log('After Close callback executed');
    };

    return (
        <Layout style={{ border: '1px solid var(--semi-color-border)' }}>
            <Header style={{ backgroundColor: 'var(--semi-color-bg-1)' }}>
                <div>
                    <Nav mode="horizontal" defaultSelectedKeys={['Home']}>
                        <Nav.Header>
                            <IconSemiLogo style={{ fontSize: 36 }} />
                        </Nav.Header>
                        <Nav.Item itemKey="Home" text="Home" icon={<IconHome size="large" />} />
                        {/* <Nav.Item itemKey="Live" text="Live" icon={<IconLive size="large" />} />
                        <Nav.Item itemKey="Setting" text="Setting" icon={<IconSetting size="large" />} /> */}
                        <Nav.Footer>
                            {/* <Button
                                theme="borderless"
                                icon={<IconBell size="large" />}
                                style={{
                                    color: 'var(--semi-color-text-2)',
                                    marginRight: '12px',
                                }}
                            />
                            <Button
                                theme="borderless"
                                icon={<IconHelpCircle size="large" />}
                                style={{
                                    color: 'var(--semi-color-text-2)',
                                    marginRight: '12px',
                                }}
                            /> */}
                            <Avatar color="blue" size="small">
                                FK
                            </Avatar>
                        </Nav.Footer>
                    </Nav>
                </div>
            </Header>
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
                    routes={['VeriBirthName', 'Home']}
                />
                <div
                    style={{
                        borderRadius: '10px',
                        border: '1px solid var(--semi-color-border)',
                        height: '69vh',
                        padding: '32px',
                    }}
                >
                    {/* content start */}
                    <Form
                        initValues={initValues}
                        style={{ padding: 10, width: '100%' }}
                        onValueChange={(v)=>console.log(v)}
                    >
                        <Row>
                            <Col span={12}>
                                Check Baby's name for birth certificate registration
                                <Input
                                    field="name"
                                    label="Full Name"
                                    initValue={'Srikandi Ayu'}
                                    style={style}
                                    trigger='blur'
                                />
                            </Col>
                            
                        </Row>
                        <Space>
                            <Button type='primary' theme='solid' onClick={showDialog}>Submit</Button>
                            <Modal
                                title="Modal"
                                visible={visible}
                                onOk={handleOk}
                                afterClose={handleAfterClose} //>=1.16.0
                                onCancel={handleCancel}
                                closeOnEsc={true}
                            >
                                This name has already been used by 47 other citizens.
                                <br />
                                Please choose an alternative.
                            </Modal>
                        </Space>
                    </Form>
                    {/* content end */}

                </div>
            </Content>
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
                    <span style={{ marginRight: '24px' }}>Kambey, Feldy Judah</span>
                    <span>Public Management Thesis</span>
                </span>
            </Footer>
        </Layout>
    );
};

export default App;