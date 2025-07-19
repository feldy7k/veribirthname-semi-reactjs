// author feldy kambey
// plan for thesis master degree
import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { IconSemiLogo, IconHome, IconMore, IconTickCircle, IconComment, IconClear, IconFile, IconArrowRight, IconEdit, IconVerify } from '@douyinfe/semi-icons';
import { Layout, Nav, Button, Breadcrumb, Avatar, Form, Col, Row, Image, ImagePreview, Banner, Table, Tag, Popconfirm } from '@douyinfe/semi-ui';

function Home() {
    const { Header, Footer, Sider, Content } = Layout;

    useEffect(() => {
        const isLogin = localStorage.getItem("veribirthname_islogin") || "";
        if(isLogin==="TRUE"){

        }else{
            navigate("/signIn");
        }
    }, []);
    
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
            }
        ]
    };
    const { Input } = Form;
    const style = { width: '90%' };

    const [visibleResultName, setVisibleResultName] = useState(false);

    const handleSubmitName = () => {
        setVisibleResultName(true);

        // set var name
        localStorage.removeItem("veribirthname_babyname");
        localStorage.removeItem("veribirthname_fathername");
        localStorage.removeItem("veribirthname_mothername");

        localStorage.setItem("veribirthname_babyname", valueFullName.toUpperCase());
        localStorage.setItem("veribirthname_fathername", valueFatherName.toUpperCase());
        localStorage.setItem("veribirthname_mothername", valueMotherName.toUpperCase());

        localStorage.removeItem("veribirthname_officername");
        localStorage.removeItem("veribirthname_officernip");
        
        localStorage.setItem("veribirthname_officername", valueOfficerName.toUpperCase());
        localStorage.setItem("veribirthname_officernip", valueOfficerNIP.toUpperCase());
    };

    // set input baby full name
    const [valueFullName, setValueFullName] = useState('Srikandi Ayu');

    const handleChangeFullName = (value) => {
        setValueFullName(value);
        
        if(visibleResultName === true){
            setVisibleResultName(false);
        }
    };

    const handleReset = () => {
        setVisibleResultName(false);
        setValueFullName("");
    }

    // additional field
    const [valueFatherName, setValueFatherName] = useState('Ardy Prasetya');
    const handleChangeFatherName = (value) => {
        setValueFatherName(value);
    };
    const [valueMotherName, setValueMotherName] = useState('Sri Suharti');
    const handleChangeMotherName = (value) => {
        setValueMotherName(value);
    };
    const [valueOfficerName, setValueOfficerName] = useState('Feldy Judah Kambey');
    const handleChangeOfficerName = (value) => {
        setValueOfficerName(value);
    };
    const [valueOfficerNIP, setValueOfficerNIP] = useState('987XXXXXXXXXXXXXXXXX');
    const handleChangeOfficerNIP = (value) => {
        setValueOfficerNIP(value);
    };

    const navigate = useNavigate();

    const handlePreviewBirthCert = () =>
    {
        window.open("http://localhost:5173/BirthCert.html?mode=Preview", "_blank");
    }

    //popconfirm
    const onConfirm = () => {
        localStorage.removeItem("veribirthname_islogin");
        navigate("/signIn");
    };
    const onCancel = () => {
        
    };

    const handleProceed = () => {
        navigate("/bcRegistration");
    };
    
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
                        defaultSelectedKeys={['Home']}
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
                        routes={['VeriBirthName', 'Home']}
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
                        <Form
                            initValues={initValues}
                            style={{ padding: 10, width: '100%', margin:"0px" }}
                            onValueChange={(v)=>console.log(v)}
                            onSubmit={handleSubmitName}
                        >
                            <Row>
                                <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12}>
                                    <div><b>Verify Here</b></div><br/>
                                    <Input
                                        field="fullname"
                                        label="Desired Full Name"
                                        initValue={valueFullName}
                                        onChange={handleChangeFullName}
                                        key={valueFullName}
                                        style={style}
                                        trigger='blur'
                                        maxLength={60}
                                        rules={[
                                            { validator: (rule, value) => (value.trim().split(/\s+/).length >= 2), message: 'should contain at least 2 words' },
                                            { validator: (rule, value) => (/[^a-zA-Z ]/.test(value)===false), message: 'numbers or symbols (e.g., "1", "2", “@” or “#”) are not allowed' }
                                        ]}
                                    />
                                    <Button type='primary' theme='solid' htmlType="submit">Submit</Button>
                                    <Button type='primary' theme='outline' onClick={handleReset} style={{marginLeft:"14px"}}>Reset</Button>

                                    <div style={{display:(visibleResultName===true ? 'block' : 'none'), padding: 0, marginTop:'20px', border: 'none' }}>
                                        <div>Result:</div>
                                        <br/>
                                        <div style={{width:470}}>
                                            <Banner 
                                                fullMode={false} type="danger" bordered icon={null} closeIcon={null} 
                                                title={<div style={{ fontWeight: 600, fontSize: '14px', lineHeight: '20px' }}>❌ Rejected </div>}
                                                description={
                                                    <div>
                                                        The name <b>{valueFullName}</b> has already been used by 32 other citizens.<br/>
                                                        Please choose an alternative.
                                                    </div>
                                                }
                                            />
                                            <br/>
                                            <Banner 
                                                fullMode={false} type="success" bordered icon={null} closeIcon={null} 
                                                title={<div style={{ fontWeight: 600, fontSize: '14px', lineHeight: '20px' }}>✅ Accepted </div>}
                                                description={
                                                    <div>
                                                        The name <b>{valueFullName}</b> available to use.
                                                    </div>
                                                }
                                            />
                                        </div>
                                        <br/>
                                        <Button type='primary' theme='solid' style={{marginTop:'6px'}} onClick={handleProceed}>Proceed to Birth Certificate Registration &nbsp; <IconArrowRight/></Button><br/>
                                        
                                    </div>
                                </Col>
                                
                                <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12}>
                                    <div><b>Regulations on Personal Names</b></div><br/>
                                    <div style={{color:'var(--semi-color-danger)'}}>
                                        According to <a href="https://peraturan.bpk.go.id/Details/210274/permendagri-no-73-tahun-2022" target="_blank">
                                            Regulation of the Minister of Home Affairs Number 73 of 2022, Indonesia
                                        </a><br/>
                                        • Name must be at least 2 words and a maximum of 60 characters (including spaces)<br/>
                                        • Using Latin letters according to Indonesian spelling<br/>
                                        • Abbreviations are not allowed (for example: “Abd” for “Abdul” is prohibited)<br/>
                                        • Does not contain numbers or symbols (e.g., "1", "2", “@” or “#”)<br/>
                                        For adults who wish to change their name:<br/>
                                        • Does not contain academic or religious titles, such as S.Pd, Dr., S.H., H., Hj., Pdt., etc<br/>
                                        <br/>
                                        If implemented in real life, this system would utilize data from the Department of Population and Civil Registration to verify new names<br/>
                                    </div>
                                    <br/>
                                    <div>For Example:</div>
                                    <Image
                                        width={756}
                                        height={269}
                                        src="http://localhost:5173/fullname_example.png"
                                    />
                                    <br/><br/>
                                    <div>Indonesian name references:</div>
                                    • <a href="https://en.wikipedia.org/wiki/Indonesian_names" target="_blank">Wiki Indonesian Names</a><br/>
                                    • <a href="https://en.wiktionary.org/wiki/Appendix:Indonesian_given_names" target="_blank">Wiktionary Indonesian Given Names</a>
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

export default Home;