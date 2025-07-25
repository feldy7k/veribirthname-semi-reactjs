// author feldy kambey
// plan for thesis master degree
import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { IconSemiLogo, IconHome, IconMore, IconTickCircle, IconComment, IconClear, IconFile, IconArrowRight, IconEdit,IconScan } from '@douyinfe/semi-icons';
import { Layout, Nav, Button, Breadcrumb, Avatar, Form, Col, Row, Image, ImagePreview, Banner, Table, Tag, Popconfirm } from '@douyinfe/semi-ui';

function BCRegistration() {
    const { Header, Footer, Sider, Content } = Layout;

    // set full name
    const [valueFullName, setValueFullName] = useState("");

    useEffect(() => {

        const isLogin = localStorage.getItem("veribirthname_islogin") || "";
        if(isLogin==="TRUE"){

        }else{
            navigate("/signIn");
        }
        
        const storeFullname = localStorage.getItem("veribirthname_babyname") || "";
        console.log('Stored storeFullname:', storeFullname);
        setValueFullName(storeFullname);
    }, []);

    const handleChangeFullName = (value) => {
        setValueFullName(value);
    };
    
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
    const { Input, Select, DatePicker } = Form;
    const style = { width: '90%' };

    // additional field
    const [valueFatherName, setValueFatherName] = useState('Ardy Winartha');
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
    const [valueIssuedAt, setValueIssuedAt] = useState('JAKARTA PUSAT');
    const handleChangeIssuedAt = (value) => {
        setValueIssuedAt(value);
    };

    const navigate = useNavigate();

    //popconfirm
    const onConfirm = () => {
        localStorage.removeItem("veribirthname_islogin");
        navigate("/signIn");
    };
    const onCancel = () => {
        
    };

    const handleNavigateList = () => {
        navigate("/bcList");
    };

    // CREATE, UPDATE
    const [valuePageState, setValuePageState] = useState('CREATE');
    
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
                        defaultSelectedKeys={['BCRegistration']}
                        items={[
                            { itemKey: 'Home', text: 'Home', icon: <IconHome size="large" />, onClick: () => navigate('/home')},
                            { itemKey: 'BCRegistration', text: 'BC Registration', icon: <IconEdit size="large" />, onClick: () => navigate('/bcRegistration') },
                            { itemKey: 'BCList', text: 'BC List', icon: <IconFile size="large" />, onClick: () => navigate('/bcList') },
                            { itemKey: 'ProhibitedNames', text: 'Prohibited Names', icon: <IconClear size="large" />, onClick: () => navigate('/prohibitedNames') }
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
                        routes={['VeriBirthName', 'BC Registration']}
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
                        <div><b>Birth Certificate Registration</b></div><br/>
                        <div style={{color:'var(--semi-color-primary)'}}>State = {valuePageState}</div>
                        <Form
                            initValues={initValues}
                            style={{ padding: 10, width: '100%' }}
                            onValueChange={(v)=>console.log(v)}
                        >
                            <Row>
                                <Col xs={24} sm={24} md={24} lg={20} xl={20} xxl={20}>
                                    <div style={{padding: 0, border: 'none' }}>
                                        <Row>
                                            <Col sm={24} md={12}>
                                                <Input
                                                    field="selectedfullname"
                                                    label="Full Name"
                                                    key={valueFullName}
                                                    initValue={valueFullName}
                                                    // value={valueFullName}
                                                    onChange={handleChangeFullName}
                                                    style={style}
                                                    trigger='blur'
                                                    disabled
                                                />
                                                <Select field="gender" style={style} label='Gender（Select）' placeholder='Gender'>
                                                    <Select.Option value="P">DAUGHTER (FEMALE)</Select.Option>
                                                    <Select.Option value="L">SON (MALE)</Select.Option>
                                                </Select>
                                                <Select field="placeofbirth" style={style} label='Place of Birth（Select）' placeholder='Place of Birth'>
                                                    <Select.Option value="JKT1">Jakarta Pusat</Select.Option>
                                                    <Select.Option value="JKT2">Jakarta Utara</Select.Option>
                                                    <Select.Option value="JKT3">Jakarta Selatan</Select.Option>
                                                    <Select.Option value="JKT4">Jakarta Barat</Select.Option>
                                                    <Select.Option value="TGR">Tangerang</Select.Option>
                                                </Select>
                                                <DatePicker field="date" label='Date of Birth（DatePicker）' style={style} initValue={new Date()} placeholder='Date of Birth' />
                                                
                                            </Col>
                                            <Col sm={24} md={12}>
                                                <Select field="childno" style={style} label='Child No（Select）' placeholder='Child No'>
                                                    <Select.Option value="1">FIRST</Select.Option>
                                                    <Select.Option value="2">SECOND</Select.Option>
                                                    <Select.Option value="3">THIRD</Select.Option>
                                                    <Select.Option value="4">FOURTH</Select.Option>
                                                    <Select.Option value="5">FIFTH</Select.Option>
                                                    <Select.Option value="6">SIXTH</Select.Option>
                                                    <Select.Option value="7">SEVENTH</Select.Option>
                                                    <Select.Option value="8">EIGHTH</Select.Option>
                                                    <Select.Option value="9">NINTH</Select.Option>
                                                    <Select.Option value="10">TENTH</Select.Option>
                                                </Select>
                                                <span style={{color:'var(--semi-color-danger)',fontSize:'12px'}}>ensure it matches the Father's name on the ID card, or use the scan feature</span>
                                                <Input
                                                    field="fathername"
                                                    label="Father Name"
                                                    initValue={valueFatherName}
                                                    //value={valueFatherName}
                                                    onChange={handleChangeFatherName}
                                                    style={style}
                                                    trigger='blur'
                                                    suffix={<IconScan />}
                                                />
                                                <span style={{color:'var(--semi-color-danger)',fontSize:'12px'}}>ensure it matches the Mother's name on the ID card, or use the scan feature</span>
                                                <Input
                                                    field="mothername"
                                                    label="Mother Name"
                                                    initValue={valueMotherName}
                                                    //value={valueMotherName}
                                                    onChange={handleChangeMotherName}
                                                    style={style}
                                                    trigger='blur'
                                                    suffix={<IconScan />}
                                                />
                                                
                                            </Col>
                                        </Row>
                                        <div style={{marginTop:'15px'}}>Issuing Office:</div>
                                        <Row>
                                            <Col sm={24} md={12}>
                                                <Input
                                                    field="officername"
                                                    label="Officer Name"
                                                    initValue={valueOfficerName}
                                                    //value={valueOfficerName}
                                                    onChange={handleChangeOfficerName}
                                                    style={style}
                                                    trigger='blur'
                                                    disabled
                                                />
                                                <Input
                                                    field="officernip"
                                                    label="Officer NIP."
                                                    initValue={valueOfficerNIP}
                                                    //value={valueOfficerNIP}
                                                    onChange={handleChangeOfficerNIP}
                                                    style={style}
                                                    trigger='blur'
                                                    disabled
                                                />
                                            </Col>
                                            <Col sm={24} md={12}>
                                                <Input
                                                    field="issuedat"
                                                    label="Issued At"
                                                    initValue={valueIssuedAt}
                                                    //value={valueIssuedAt}
                                                    onChange={handleChangeIssuedAt}
                                                    style={style}
                                                    trigger='blur'
                                                    disabled
                                                />
                                            </Col>
                                        </Row>
                                        <Button type='primary' theme='solid' style={{marginTop:'24px'}}>Save Data</Button><br/>
                                        <br/>
                                        <div style={{color:'var(--semi-color-success)'}}>Data was saved successfully.</div>
                                        <Input
                                            field="nik"
                                            label={"NIK Generated for '" + valueFullName + "'"}
                                            initValue={"3374XXXXXXXXXXXXXXXXX"}
                                            //value={"3374XXXXXXXXXXXXXXXXX"}
                                            style={style}
                                            trigger='blur'
                                            disabled
                                        />
                                        <Button type='primary' theme='solid' style={{marginTop:'12px'}} onClick={handleNavigateList}>Go to BC List</Button>
                                    </div>
                                </Col>
                                
                                <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12}>
                                   

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

export default BCRegistration;