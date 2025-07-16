import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { IconSemiLogo, IconBell, IconHelpCircle, IconBytedanceLogo, IconHome, IconFile, IconLive, IconSetting } from '@douyinfe/semi-icons';
import { Layout, Nav, Button, Breadcrumb, Skeleton, Avatar, Modal, Form, Col, Row, Space, Image, ImagePreview, Banner } from '@douyinfe/semi-ui';

function App() {
    const { Header, Footer, Sider, Content } = Layout;
    
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

    const [visibleResult, setVisibleResult] = useState(false);
    const showResult = () => {
        setVisibleResult(true);
    };
    const resetResult = () => {
        setVisibleResult(false);
    };

    const navigate = useNavigate();
    
    return (
        <Layout style={{ border: '1px solid var(--semi-color-border)' }}>
            <Header style={{ backgroundColor: 'var(--semi-color-bg-1)' }}>
                <div>
                    <Nav mode="horizontal" defaultSelectedKeys={['Home']}>
                        <Nav.Header>
                            <IconSemiLogo style={{ height: '36px', fontSize: 36 }} />
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
                                VeriBirthName Dashboard
                            </span>
                            
                        </span>
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
                            <span style={{marginRight:'10px', fontSize:'14px'}}>
                                Feldy Judah Kambey | Administrator
                            </span>
                            <Avatar color="blue" size="small">
                                FK
                            </Avatar>
                        </Nav.Footer>
                    </Nav>
                </div>
            </Header>
            <Layout>
                <Sider style={{ backgroundColor: 'var(--semi-color-bg-1)' }}>
                    <Nav
                        style={{ maxWidth: 220, height: '100%' }}
                        defaultSelectedKeys={['Home']}
                        items={[
                            { itemKey: 'Home', text: 'Home 首页', icon: <IconHome size="large" />, onClick: () => navigate('/home')},
                            { itemKey: 'Birth Cert', text: 'Birth Cert 出生证明', icon: <IconFile size="large" />, onClick: () => navigate('/birthCert') },
                            // { itemKey: 'Live', text: '测试功能', icon: <IconLive size="large" /> },
                            // { itemKey: 'Setting', text: '设置', icon: <IconSetting size="large" /> },
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
                        routes={['VeriBirthName', 'Home']}
                    />
                    <div
                        style={{
                            borderRadius: '10px',
                            border: '1px solid var(--semi-color-border)',
                            height: '70vh',
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
                                        label="Requested Full Name"
                                        initValue={'Srikandi Ayu'}
                                        style={style}
                                        trigger='blur'
                                        rules={[
                                            { max: 60, message: 'maximum 60 characters' },
                                            { validator: (rule, value) => value.trim().split(/\s+/).length >= 2, message: 'should contain at least 2 words' }
                                        ]}
                                    />
                                    <Button type='primary' theme='solid' onClick={showResult} style={{marginRight:'12px'}}>Submit</Button>
                                    <Button type='primary' onClick={resetResult}>Reset</Button>
                                    <div style={{ display:visibleResult==true?'block':'none', width: 500, padding: 0, marginTop:'32px', border: 'none' }}>
                                        <Banner 
                                            fullMode={false} type="danger" bordered icon={null} closeIcon={null} 
                                            title={<div style={{ fontWeight: 600, fontSize: '14px', lineHeight: '20px' }}>❌ Rejected </div>}
                                            description={
                                                <div>
                                                    This name <b>Srikandi Ayu</b> has already been used.<br/>
                                                    Please choose an alternative.
                                                </div>}
                                        />
                                        <br/>
                                        <Banner 
                                            fullMode={false} type="success" bordered icon={null} closeIcon={null} 
                                            title={<div style={{ fontWeight: 600, fontSize: '14px', lineHeight: '20px' }}>✅ Accepted </div>}
                                            description={
                                                <div>
                                                    This name <b>Srikandi Ayu</b> available to use.
                                                </div>}
                                        />
                                    </div>
                                    {/* <Modal
                                        title="❌ Rejected"
                                        // title="✅ Accepted"
                                        visible={visible}
                                        onOk={handleOk}
                                        afterClose={handleAfterClose} //>=1.16.0
                                        onCancel={handleCancel}
                                        closeOnEsc={true}
                                    >
                                        This name has already been used.
                                        <br />
                                        Please choose an alternative.
                                    </Modal> */}
                                    
                                </Col>
                                <Col span={12}>
                                    <div style={{color:'rgb(249,57,32)', marginTop:'32px'}}>
                                        Since Indonesia's population has reached 280 million, this system might be implemented per province to make full-name data processing lighter and faster<br/>
                                        <br/>
                                        According to <a href="https://peraturan.bpk.go.id/Details/210274/permendagri-no-73-tahun-2022" target="_blank">
                                            Regulation of the Minister of Home Affairs Number 73 of 2022, Indonesia
                                        </a><br/>
                                        • Name must be at least 2 words and a maximum of 60 characters (including spaces)<br/>
                                        • Using Latin letters according to Indonesian spelling<br/>
                                        • Abbreviations are not allowed (for example: “Abd” for “Abdul” is prohibited)<br/>
                                        • Does not contain numbers or symbols (e.g., “@” or “#”)<br/>
                                        • Does not contain academic or religious titles, such as S.Pd, Dr, S.H, etc<br/>
                                        <br/>
                                        Note: Always check the latest regulations, as they may be updated at any time.
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
                            </Row>
                        </Form>
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

export default App;