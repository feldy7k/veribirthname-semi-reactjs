import React, {useState} from 'react';
import { Layout, Nav, Button, Breadcrumb, Skeleton, Avatar, Modal, Form, Col, Row, Space, Image, ImagePreview } from '@douyinfe/semi-ui';
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
                                Check the eligible Baby Name for birth certificate registration.
                                <Input
                                    field="name"
                                    label="Full Name"
                                    initValue={'Srikandi Ayu'}
                                    style={style}
                                    trigger='blur'
                                    rules={[
                                        { max: 60, message: 'maximum 60 characters' },
                                        { validator: (rule, value) => value.trim().split(/\s+/).length >= 2, message: 'should contain at least 2 words' }
                                    ]}
                                />
                                <Button type='primary' theme='solid' onClick={showDialog}>Submit</Button>
                                <Modal
                                    title="❌ Rejected"
                                    // title="✅ Accepted"
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
                                <div style={{color:'rgb(249,57,32)', marginTop:'32px'}}>
                                    According to <b>Permendagri Regulation No. 73 of 2022, Indonesia</b><br/>
                                    - Name must be at least 2 words and a maximum of 60 characters (including spaces)<br/>
                                    - Using Latin letters according to Indonesian spelling<br/>
                                    - Abbreviations are not allowed (for example: “Abd” for “Abdul” is prohibited)<br/>
                                    - Does not contain numbers or symbols (e.g., “@” or “#”)<br/>
                                    - Does not contain academic or religious titles, such as S.Pd, Dr, S.H, etc<br/>
                                    <br/>
                                    Note: Always check the latest regulations, as they may be updated at any time.<br/>
                                    This system accesses citizen data from the Indonesian civil registry (Disdukcapil) database.
                                </div>
                                <div style={{marginTop:'32px'}}>
                                    For Example:
                                </div>
                                <Image
                                    width={756}
                                    height={269}
                                    src="http://localhost:5173/fullname_example.png"
                                />
                            </Col>
                            <Col span={12}>
                                {/* right col */}
                            </Col>
                        </Row>
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